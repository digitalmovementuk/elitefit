"""Generate v1.2 MD, HTML and CSV from plan-data.json only.
Schedule activities hold phases and a shared role ID. Tasks reference activities;
Gantt and month slides derive from those same activities. Never edit outputs.
"""
from pathlib import Path
import json,csv,html,base64,re,io
R=Path(__file__).resolve().parents[1]
D=json.loads((R/'plan-data.json').read_text())
E=lambda v:html.escape(str(v),quote=True)
roles={r['id']:r for r in D['roles']};phases={p['id']:p for p in D['phases']};rows={r['id']:r for r in D['schedule']}
activities={a['id']:(r,a) for r in D['schedule'] for a in r['activities']}
tasks={t['id']:t for t in D['tasks']}
core_count=len(D['slides']); appendix_count=(len(tasks)+1)//2
assert core_count==len([p for p in phases if p.startswith('M')])+5
assert len(activities)==sum(len(r['activities']) for r in D['schedule'])
assert len(roles)==len(D['roles']) and len(rows)==len(D['schedule'])
for r in rows.values():
 assert r['owner_id'] in roles
 for a in r['activities']:
  assert a['phase_ids'] and all(p in phases for p in a['phase_ids'])
  assert len(a['phase_ids'])==len(set(a['phase_ids']))
  assert all(isinstance(a[k],str) and a[k] for k in ['label','deliverable'])
for t in tasks.values():
 assert all(a in activities for a in t['activity_ids'])
 assert len(set(activities[a][0]['id'] for a in t['activity_ids']))==1
 assert all(p in tasks and p!=t['id'] for p in t['dependencies'])
 assert not any(k in t for k in ['phase','phase_ids','accountable_owner','owner','start_target','due_target']), 'Task duplicates schedule/role fields'
visited=set();visiting=set()
def visit(i):
 assert i not in visiting,'Dependency cycle: '+i
 if i in visited:return
 visiting.add(i)
 for dep in tasks[i]['dependencies']:visit(dep)
 visiting.remove(i);visited.add(i)
for i in tasks:visit(i)
assert next(x for x in D['decisions'] if x['id']=='D07')['status']=='Resolved'
assert roles['ryan']['status']=='Confirmed' and roles['mohammed']['status']=='Confirmed'
assert all(a['phase_ids']==['M5','M6','M7','CONTINUE'] for a in rows['seo']['activities'])
assert 'integration' in rows and {p for a in rows['integration']['activities'] for p in a['phase_ids']}=={'M1','M2','M5','M6','M7'}
assert tasks['P20']['dependencies']==['P18','P19']
assert activities['release'][1]['phase_ids']==['M4'] and activities['integration-release'][1]['phase_ids']==['M7']
def row_for(t):return activities[t['activity_ids'][0]][0]
def owner(t):return roles[row_for(t)['owner_id']]['name']
def task_phases(t):return [p for p in phases if any(p in activities[a][1]['phase_ids'] for a in t['activity_ids'])]
def phase_text(t):return ', '.join(phases[p]['label'] for p in task_phases(t))
def active(r,p):return [a for a in r['activities'] if p in a['phase_ids']]
def compact_owner(r):return 'Technical lead · to confirm' if r['owner_id']=='technical' else roles[r['owner_id']]['name']
def month_rows(p):return [r for r in rows.values() if active(r,p)]
# Spreadsheet view: all ownership and timing is calculated here.
fields=['id','workstream','task','accountable_owner','phase','activity_ids','helper_approver','dependencies','outcome','acceptance_checks','dependency_note','status']
buf=io.StringIO();writer=csv.DictWriter(buf,fieldnames=fields);writer.writeheader()
for t in tasks.values():writer.writerow({'id':t['id'],'workstream':row_for(t)['title'],'task':t['task'],'accountable_owner':owner(t),'phase':phase_text(t),'activity_ids':'; '.join(t['activity_ids']),'helper_approver':t['helpers'],'dependencies':'; '.join(t['dependencies']),'outcome':t['outcome'],'acceptance_checks':'; '.join(t.get('checks',[])),'dependency_note':t.get('dependency_note',''),'status':t['status']})
(R/'tasks.csv').write_text(buf.getvalue())
for c in csv.DictReader(io.StringIO(buf.getvalue())):
 t=tasks[c['id']];assert c['accountable_owner']==owner(t) and c['phase']==phase_text(t)

def table(headers,body):return '| '+' | '.join(headers)+' |\n| '+' | '.join('---' for _ in headers)+' |\n'+'\n'.join('| '+' | '.join(str(c).replace('|','/') for c in cells)+' |' for cells in body)
def md_gantt():return table(['Workstream / owner']+[p['label'] for p in phases.values()],[[r['title']+' — '+roles[r['owner_id']]['name']]+['; '.join(a['label'] for a in active(r,p)) or '—' for p in phases] for r in rows.values()])
def md_month(p):return table(['Work / owner','Key tasks','Result'],[[r['title']+' — '+roles[r['owner_id']]['name'],'; '.join(a['label'] for a in active(r,p)),' '.join(a['deliverable'] for a in active(r,p))] for r in month_rows(p)])
def md_content(s):
 k=s['kind']
 if k=='roles':return table(['Role / person','Responsibility','Deliverable'],[[r['role']+' — '+r['name'],r['responsibility'],r['deliverable']] for r in roles.values()])
 if k=='gantt':return md_gantt()
 if k=='month':return md_month(s['phase_id'])
 if k=='integration':
  x=D['integration'];return '**Our delivery:** '+x['delivery']+'\n\n'+table(['Known now','Detail'],[[a['title'],a['text']] for a in x['known']])+'\n\n**Check before build:**\n\n'+'\n'.join('- '+a for a in x['check'])+'\n\n**Journey to connect:** '+' → '.join(x['sequence'])
 if k=='backlog':return table(['Workstream','Responsible','Packages'],[[r['title'],roles[r['owner_id']]['name'],', '.join(t['id'] for t in tasks.values() if row_for(t)['id']==r['id'])] for r in rows.values()])+'\n\nFull work-package details follow the slides. Prepared for Jira; no issues have been created.'
 if k=='voice':return '\n\n'.join('**'+p['title']+'** — '+p['text'] for p in D['voice']['principles'])+'\n\n'+D['voice']['reliability']+'\n\n'+'\n\n'.join('**'+x['label']+'**\n\n'+x['text'] for x in D['voice']['examples'])
md=['# '+D['metadata']['title'],'**Version 1.2 · Internal planning presentation · Indicative months only**']
for i,s in enumerate(D['slides'],1):md+=['## '+str(i)+'. '+s['title'],s['subtitle'],md_content(s),'### Presenter notes',s['note']]
md+=['## Full backlog — Jira preparation','All packages are planned. Completion has not been checked.']
for t in tasks.values():
 md+=['### '+t['id']+' — '+t['task'],f'**Responsible:** {owner(t)}  \n**Timing:** {phase_text(t)}  \n**Workstream:** {row_for(t)["title"]}  \n**Status:** {t["status"]}', '**Result / acceptance:** '+t['outcome'],'**Helpers / approval:** '+t['helpers'],'**Needs:** '+(', '.join(t['dependencies']) or 'None')]
 if t.get('dependency_note'):md.append(t['dependency_note'])
 if t.get('checks'):md.append('**Checks:**\n\n'+'\n'.join('- '+x for x in t['checks']))
md+=['## Open decisions',table(['Decision','Owner','Status'],[[x['question'],roles[x['owner_id']]['name'],x['status']+' — '+x['note']] for x in D['decisions']]),'## Sources','\n'.join('- ['+s['title']+']('+s['url']+')' for s in D['sources']),'Betzy maintains the current plan. Update plan-data.json and regenerate this presentation, the Markdown and the CSV together.']
(R/D['metadata']['markdown_filename']).write_text('\n\n'.join(md)+'\n')

def role_html():
 internal=[r for r in roles.values() if r['display_group']=='internal'];clients=[r for r in roles.values() if r['display_group']=='client']
 return '<div class="roles-table"><div class="role-head"><span>Person / role</span><span>Responsibility</span><span>Deliverable</span></div>'+''.join(f'<div class="role-row" data-role="{r["id"]}"><div><strong>{E(r["name"])}</strong><small>{E(r["role"])}</small></div><p>{E(r["responsibility"])}</p><p>{E(r["deliverable"])}</p></div>' for r in internal)+'</div><div class="client-line">'+''.join('<p><strong>'+E(r['name'])+'</strong><span>'+E(r['deliverable'])+'</span></p>' for r in clients)+'</div>'
def gantt_html():
 out='<div class="gantt" role="table" aria-label="Indicative work schedule"><div class="gantt-head" role="row"><span role="columnheader">Workstream / responsible</span>'+''.join('<span role="columnheader" class="'+('later' if p=='CONTINUE' else '')+'">'+E(phases[p]['short_label'])+'</span>' for p in phases)+'</div>'
 for r in rows.values():
  out+=f'<div class="gantt-row" role="row" data-workstream="{r["id"]}" data-owner="{r["owner_id"]}"><div class="gantt-label" role="rowheader"><strong>{E(r["title"])}</strong><small>{E(compact_owner(r))}</small></div>'
  for p in phases:
   acts=active(r,p);out+=f'<div role="cell" class="gantt-cell {"later" if p=="AFTER" else ""}" data-phase="{p}" data-activities="{E(" ".join(a["id"] for a in acts))}"><span class="phase-label">{E(phases[p]["label"])}</span>'
   out+=('<span class="phase-bar">'+E(' / '.join(a['short_label'] for a in acts))+'</span>') if acts else '<span class="idle" aria-label="No activity planned">—</span>'
   out+='</div>'
  out+='</div>'
 return out+'</div><p class="chart-note">M1–4 website · M5–7 integration · M5–12 SEO after website approval. Bars show planned work.</p>'
def month_html(p):
 return '<div class="month-table"><div class="month-head"><span>Work / responsible</span><span>Key tasks</span><span>Deliverable</span></div>'+''.join(f'<div class="month-row" data-workstream="{r["id"]}" data-owner="{r["owner_id"]}" data-phase="{p}" data-activities="{E(" ".join(a["id"] for a in active(r,p)))}"><div><strong>{E(r["title"])}</strong><small>{E(compact_owner(r))}</small></div><p>{E(" · ".join(a["label"] for a in active(r,p)))}</p><p>{E(" ".join(a["deliverable"] for a in active(r,p)))}</p></div>' for r in month_rows(p))+'</div>'
def integration_html():
 x=D['integration'];return '<div class="integration-grid"><div><h3>Known now</h3><div class="known-list">'+''.join('<div><strong>'+E(a['title'])+'</strong><p>'+E(a['text'])+'</p></div>' for a in x['known'])+'</div></div><div><h3>Check before build</h3><ul class="check-list">'+''.join('<li>'+E(c)+'</li>' for c in x['check'])+'</ul><div class="callout"><strong>Our team delivers</strong><p>'+E(x['delivery'])+'</p></div></div></div><div class="connection-flow">'+''.join('<span>'+E(z)+'</span>' for z in x['sequence'])+'</div>'
def detail_html(t):
 return f'<div class="task-detail" data-task="{t["id"]}" data-owner="{row_for(t)["owner_id"]}" data-phases="{" ".join(task_phases(t))}"><div class="task-assign"><span><b>Responsible:</b> {E(owner(t))}</span><span><b>Timing:</b> {E(phase_text(t))}</span></div><p><b>Result / acceptance:</b> {E(t["outcome"])}</p><p><b>Helpers / approval:</b> {E(t["helpers"])}</p><p><b>Needs:</b> {E(", ".join(t["dependencies"]) or "None")}</p>'+('<p>'+E(t['dependency_note'])+'</p>' if t.get('dependency_note') else '')+('<ul class="task-checks">'+''.join('<li>'+E(x)+'</li>' for x in t.get('checks',[]))+'</ul>' if t.get('checks') else '')+f'<p class="task-status">{E(t["status"])}</p></div>'
def backlog_html():
 out='<div class="backlog-toolbar"><p>Open a workstream, then a task. Full details are also in the PDF appendix.</p><button type="button" class="small-btn" id="collapse-tasks">Collapse all</button></div><div class="epic-grid">'
 for r in rows.values():
  ts=[t for t in tasks.values() if row_for(t)['id']==r['id']]
  out+=f'<details class="epic"><summary><span>{E(r["title"])}</span><small>{len(ts)} {"package" if len(ts)==1 else "packages"} · {E(compact_owner(r))}</small></summary><div class="epic-tasks">'+''.join(f'<details class="task"><summary><span class="task-id">{t["id"]}</span>{E(t["task"])}</summary>{detail_html(t)}</details>' for t in ts)+'</div></details>'
 return out+'</div><p class="backlog-note">Jira preparation only. No issues created. Planned work; completion has not been checked.</p>'
def voice_html():
 x=D['voice'];return '<div class="voice-grid"><div class="principles">'+''.join(f'<div><span class="step">{i}</span><div><h3>{E(p["title"])}</h3><p>{E(p["text"])}</p></div></div>' for i,p in enumerate(x['principles'],1))+'</div><div class="voice-examples">'+''.join('<blockquote><span>'+E(e['label'])+'</span><p>'+E(e['text'])+'</p></blockquote>' for e in x['examples'][:2])+'<p class="voice-promise">'+E(x['reliability'])+'</p></div></div>'
fontroot=R.parents[1]/'brand/fonts'
fonts=''.join("@font-face{font-family:%s;src:url(data:font/woff2;base64,%s) format('woff2');font-style:normal;font-weight:100 900;font-display:swap}"%(fam,base64.b64encode((fontroot/file).read_bytes()).decode()) for fam,file in [('Syne','syne-latin-var.woff2'),('Hanken','hanken-grotesk-latin-var.woff2')])
logo=(R.parents[1]/'brand/logos/elitefit.svg').read_text().replace('#ffffff','#1D2123')
def frame(i,s,content,appendix=False):
 note='<p>'+E(s.get('note',''))+'</p>'
 if s['kind']=='voice':note+=''.join('<h4>'+E(e['label'])+'</h4><p>'+E(e['text'])+'</p>' for e in D['voice']['examples'][2:])
 if s['kind']=='integration':note+='<h4>Evidence and references</h4><ul>'+''.join('<li><a href="'+E(x.get('path','#'))+'">'+E(x['title'])+'</a> — '+E(x.get('detail',''))+'</li>' for x in D['integration'].get('sources',[]))+'</ul>'
 return f'<section class="slide {s["kind"]}-slide {"appendix" if appendix else ""}" id="slide-{i}" data-slide-id="{s["id"]}" aria-labelledby="title-{i}"><header class="slide-header"><div class="brand">{logo}<span>ELITEFIT <small>INTERNAL PLAN</small></span></div><span class="version">v1.2 · Pre-planning</span></header><div class="slide-title"><p class="eyebrow">{E(s["eyebrow"])}</p><h1 id="title-{i}">{E(s["title"])}</h1><p class="subtitle">{E(s["subtitle"])}</p></div><div class="slide-body">{content}</div><footer class="slide-footer"><span>Indicative plan · Betzy maintains the current version</span><span>{i:02} / {"Appendix" if appendix else f"{core_count:02}"}</span></footer><div class="note">{note}</div></section>'
slides=[]
for i,s in enumerate(D['slides'],1):
 k=s['kind'];content=role_html() if k=='roles' else gantt_html() if k=='gantt' else month_html(s['phase_id']) if k=='month' else integration_html() if k=='integration' else backlog_html() if k=='backlog' else voice_html()
 slides.append(frame(i,s,content))
appendices=[]
for batch in range(appendix_count):
 ts=list(tasks.values())[batch*2:batch*2+2]
 content='<div class="appendix-tasks">'+''.join('<article><h3>'+t['id']+' · '+E(t['task'])+'</h3>'+detail_html(t)+'</article>' for t in ts)+'</div>'
 s={'id':'appendix-'+str(batch+1),'kind':'task-appendix','eyebrow':'Backlog appendix / '+str(batch+1)+' of '+str(appendix_count),'title':'Full work-package details.','subtitle':'Prepared for Jira · planned work, completion not checked.'}
 appendices.append(frame(core_count+1+batch,s,content,True))
# Extra reference page preserves the decisions, approval rules and evidence without crowding core slides.
refcontent='<div class="reference-grid"><div><h3>Open decisions</h3><ul>'+''.join('<li><strong>'+E(roles[x['owner_id']]['name'])+':</strong> '+E(x['question'])+'</li>' for x in D['decisions'] if x['status']=='Open')+'</ul><h3>Required approvals</h3><ul>'+''.join('<li>'+E(a)+'</li>' for a in D['approval_rules'])+'</ul></div><div><h3>Existing research references</h3><ul>'+''.join('<li><a href="'+E(x['url'])+'">'+E(x['title'])+'</a></li>' for x in D['sources'])+'</ul><h3>Current plan</h3><p>Betzy maintains the current plan. Updates regenerate the presentation, Markdown and CSV together.</p><p>Ryan’s copywriting and SEO assignment is confirmed.</p></div></div>'
appendices.append(frame(core_count+appendix_count+1,{'id':'reference','kind':'reference','eyebrow':'Reference appendix','title':'Decisions and supporting evidence.','subtitle':'The core slides stay focused. These details remain available for the team.'},refcontent,True))
css=fonts+(R/'_build/deck.css').read_text();js=(R/'_build/deck.js').read_text();favicon='data:image/svg+xml;base64,'+base64.b64encode(logo.encode()).decode()
nav=''.join('<option value="'+str(i)+'">'+str(i+1)+'. '+E(s['title'])+'</option>' for i,s in enumerate(D['slides']))
output=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>EliteFit — Internal Plan v1.2</title><meta name="robots" content="noindex,nofollow"><meta property="og:type" content="website"><meta property="og:title" content="EliteFit — Internal Project Plan v1.2"><meta property="og:image" content="https://digitalmovementuk.github.io/elitefit-ops/project-management/internal-plan/og-image.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="675"><meta property="og:image:alt" content="EliteFit internal project plan — roles and deliverables"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="EliteFit — Internal Project Plan v1.2"><meta name="twitter:image" content="https://digitalmovementuk.github.io/elitefit-ops/project-management/internal-plan/og-image.png"><meta name="twitter:image:alt" content="EliteFit internal project plan — roles and deliverables"><link rel="icon" type="image/svg+xml" href="{favicon}"><style>{css}</style></head><body class="reader-mode"><a class="skip" href="#stage">Skip to slides</a><main id="stage" tabindex="-1">{''.join(slides)}{''.join(appendices)}</main><div class="viewer-controls" aria-label="Presentation controls"><button id="prev" type="button" aria-label="Previous slide">←</button><span id="counter" aria-live="polite">1 / {core_count}</span><button id="next" type="button" aria-label="Next slide">→</button><label class="sr-only" for="jump">Choose slide</label><select id="jump">{nav}</select><button id="read" type="button" aria-pressed="false">Read</button><button id="notes" type="button" aria-expanded="false" aria-controls="presenter-notes">Notes</button><button id="print" type="button">Print / PDF</button></div><aside id="presenter-notes" hidden aria-label="Presenter notes"><button id="close-notes" type="button" aria-label="Close notes">×</button><div id="notes-content"></div></aside><noscript><p class="noscript">All slides and work packages are shown below. Presentation controls need JavaScript.</p></noscript><script>{js}</script></body></html>'''
(R/D['metadata']['html_filename']).write_text(output)
report={'canonical_source':'plan-data.json','slides':core_count,'pdf_appendix_pages':appendix_count+1,'roles':len(roles),'schedule_rows':len(rows),'activities':len(activities),'tasks':len(tasks),'dependency_graph':'acyclic','owner_and_phase_fields':'derived only from shared schedule activities and roles','csv_consistency':'passed','seo_gate':'M5–12 after Month 4 website approval/release; independent of Month 7 integration' ,'D07':'Resolved: Ryan confirmed','outputs':[D['metadata'][k] for k in ['html_filename','markdown_filename','csv_filename']]}
(R/'evidence/ssot-validation.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))

# Publishable copies keep internal evidence titles without broken archive links.
output=re.sub(r'<a href="(?:\.\./|/Users/)[^"]*">(.*?)</a>',r'<span>\1 (internal source)</span>',output)
(R/D['metadata']['html_filename']).write_text(output)
(R/'index.html').write_text(output)
mdfile=R/D['metadata']['markdown_filename']
mdfile.write_text(re.sub(r'\[([^\]]+)\]\((?:\.\./|/Users/)[^)]+\)',r'\1 (internal project source)',mdfile.read_text()))
