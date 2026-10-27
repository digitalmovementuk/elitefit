/* Elite Fit /groupfitness · Cinematic stage · page.js (27 Oct 2026)
   Wires the cinematic page to v1's engine (EF.api + EF.booking + EF.sheet, unchanged): prices and counts, chapter class
   lines, next-up showtimes, the week schedule (days, family chips, filter drawer as an EF.sheet view), coaches, the visitor
   toggle, Duo preference and the sticky CTAs. Hooks follow the shared page contract (data-testid and data-* hooks). Classic deferred script, ES5, no libraries. */
(function (w, d) {
'use strict';
var EF = w.EF = w.EF || {};
var root = d.documentElement;

/* ---------- helpers ---------- */
function qs(s, c) { return (c || d).querySelector(s); }
function qsa(s, c) { return [].slice.call((c || d).querySelectorAll(s)); }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
function emit(name, detail) { try { d.dispatchEvent(new w.CustomEvent(name, { detail: detail })); } catch (e) { } }
function mq(q) { try { return w.matchMedia(q); } catch (e) { return { matches: false }; } }
var mqDesk = mq('(min-width: 1024px)');
function motionOn() { return root.classList.contains('motion-ok'); }
function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
function store() { try { return (EF.api && EF.api.store && EF.api.store.get()) || {}; } catch (e) { return {}; } }
function storeSet(p) { try { if (EF.api && EF.api.store) { EF.api.store.set(p); } } catch (e) { } }
function scrollToEl(el) {
  if (!el) { return; }
  try { el.scrollIntoView({ behavior: motionOn() ? 'smooth' : 'auto', block: 'start' }); } catch (e) { el.scrollIntoView(); }
}
function openOcc(id, opts) { if (EF.booking && EF.booking.open && id) { EF.booking.open(id, opts || {}); } }
function dayLabel(occ) {
  if (occ.dayIndex === 0) { return 'Today'; }
  if (occ.dayIndex === 1) { return 'Tomorrow'; }
  return EF.api.dateShort(occ.ymd);
}
function dayPhrase(occ) { return occ.dayIndex === 0 ? 'today' : (occ.dayIndex === 1 ? 'tomorrow' : EF.api.dateShort(occ.ymd)); }
function spotsText(occ) {
  if (occ.past) { return 'Finished'; }
  if (occ.full) { return 'Full · waitlist open'; }
  return 'Room for ' + occ.spotsLeft + ' more';
}
function isSample(cls, field) { return !!(cls.sample_fields && cls.sample_fields.indexOf(field) > -1) || (field === 'length' && !!cls.length_sample); }
var CHIP = ' <span class="sample">Sample</span>';
function levelHtml(cls) { return esc(cls.level) + (isSample(cls, 'level') ? CHIP : ''); }
function lengthHtml(cls) { return cls.length_min + ' min' + (isSample(cls, 'length') ? CHIP : ''); }
function scanMotion(el) { if (EF.motion && EF.motion.scan && el) { EF.motion.scan(el); } }

var DATA = null;

/* ---------- static bindings ---------- */
function bindStatic() {
  var p = DATA.passes, c = DATA.club;
  var prices = { day: p.day.price_idr, duo: p.duo.price_idr, 'duo-total': p.duo.price_idr * (p.duo.people || 2), 'duo-old': p.duo.old_price_idr, recharge_day: p.recharge_day.price_idr };
  qsa('[data-price]').forEach(function (el) { var v = prices[el.getAttribute('data-price')]; if (v) { el.textContent = EF.api.k(v); } });
  qsa('[data-bind="weekly-count"]').forEach(function (el) { el.textContent = EF.api.weeklyCount(); });
  qsa('[data-bind="weekend-note"]').forEach(function (el) { el.textContent = DATA.timetable.weekend_note; });
  qsa('[data-bind="address"]').forEach(function (el) { el.textContent = c.address; });
  qsa('[data-bind="wa-link"]').forEach(function (el) { el.textContent = c.whatsapp.number; el.href = 'https://wa.me/' + c.whatsapp.wa; });
}

/* ---------- visitor toggle ---------- */
var NOTES = { first: "Welcome. Pick a class and we'll take it from there.", returning: "Haven't seen you in a while? Your spot's still here." };
function readNotes() {
  var note = qs('[data-visitor-note]');
  if (!note || NOTES._read) { return; }
  NOTES.first = note.getAttribute('data-note-first') || note.textContent.trim() || NOTES.first;
  NOTES.returning = note.getAttribute('data-note-returning') || NOTES.returning;
  NOTES._read = true;
}
function setVisitor(v, save) {
  readNotes();
  qsa('[data-visitor]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-visitor') === v ? 'true' : 'false'); });
  var note = qs('[data-visitor-note]');
  if (note) { note.textContent = NOTES[v] || NOTES.first; }
  if (save) { storeSet({ visitor: v }); emit('ef:visitor', { visitor: v }); }
}
function initVisitor() {
  setVisitor(store().visitor === 'returning' ? 'returning' : 'first', false);
  qsa('[data-visitor]').forEach(function (b) { b.addEventListener('click', function () { setVisitor(b.getAttribute('data-visitor'), true); }); });
}

/* ---------- chapters: class lines ---------- */
function slotText(classId) {
  var s = EF.api.slots(classId);
  if (s.length > 4) { return s.length + ' times a week'; }
  return s.map(function (x) { return x.dowShort + ' ' + x.time; }).join(', ');
}
function renderChapters() {
  qsa('[data-chap-classes]').forEach(function (box) {
    var fid = box.getAttribute('data-chap-classes');
    var classes = EF.api.classesInFamily(fid), weekly = 0;
    box.innerHTML = classes.map(function (c) {
      weekly += EF.api.slots(c.id).length;
      var co = EF.api.coach(c.coach), next = EF.api.occ(c.id);
      var when = 'with ' + esc(co ? co.name : '') + (isSample(c, 'length') ? ' · ' + lengthHtml(c) : '') + ' · ' + esc(slotText(c.id));
      var nextTxt = next ? ('Next: ' + dayPhrase(next) + ' at ' + next.time) : '';
      return '<li class="cline"><button class="cline__btn" type="button" data-open-occ="' + esc(next ? next.id : c.id) + '" aria-label="' + esc(c.name + '. ' + nextTxt + '. See details') + '">' +
        '<span class="cline__name">' + esc(c.name) + '</span>' +
        '<span class="cline__when">' + when + (nextTxt ? '<br>' + esc(nextTxt) : '') + '</span>' +
        '<span class="arr" aria-hidden="true">→</span></button></li>';
    }).join('');
    var cnt = qs('[data-chap-count="' + fid + '"]');
    if (cnt) { cnt.textContent = plural(weekly, 'class', 'classes'); }
    scanMotion(box.parentNode);
  });
  if (EF.motion && EF.motion.refreshBar) { EF.motion.refreshBar(); }
}

/* ---------- next up (showtimes) ---------- */
var nextBox, lastSpots = {};
function renderNext(roll) {
  nextBox = nextBox || qs('[data-nextup]');
  if (!nextBox) { return; }
  var list = EF.api.upcoming(3);
  if (!list.length) { nextBox.innerHTML = '<p class="nextup__loading">No classes left this week. New dates appear every day.</p>'; return; }
  nextBox.innerHTML = list.map(function (o) {
    var dl = dayLabel(o);
    return '<button class="ncard" type="button" data-testid="next-card" data-occ="' + esc(o.id) + '">' +
      '<span class="ncard__when">' + esc(dl === 'Today' || dl === 'Tomorrow' ? dl + ' · ' + EF.api.dateShort(o.ymd) : EF.api.dateShort(o.ymd)) + '</span>' +
      '<span class="ncard__time">' + esc(o.time) + '</span>' +
      '<span class="ncard__name">' + esc(o.cls.name) + '</span>' +
      '<span class="who"><img src="' + esc(o.coach.avatar) + '" alt="" width="28" height="28" loading="lazy">with ' + esc(o.coach.name) + '</span>' +
      '<span class="ncard__meta">' + o.cls.length_min + ' min · ' + esc(o.cls.level) + '</span>' +
      '<span class="ncard__foot"><span class="spots">Room for <span data-spots="' + esc(o.id) + '">' + (roll && lastSpots[o.id] != null ? lastSpots[o.id] : o.spotsLeft) + '</span> more' + CHIP + '</span>' +
      '<span class="fauxbtn">Book <span class="arr" aria-hidden="true">→</span></span></span>' +
    '</button>';
  }).join('');
  list.forEach(function (o) {
    var el = qs('[data-spots="' + o.id + '"]', nextBox);
    if (roll && el && lastSpots[o.id] != null && lastSpots[o.id] !== o.spotsLeft && EF.motion && EF.motion.roll) { EF.motion.roll(el, o.spotsLeft); }
    lastSpots[o.id] = o.spotsLeft;
  });
  qsa('.ncard', nextBox).forEach(function (b) { b.addEventListener('click', function () { openOcc(b.getAttribute('data-occ')); }); });
  scanMotion(nextBox.parentNode);
}

/* ---------- title card: next class line ---------- */
function renderHeroNext() {
  var box = qs('[data-hero-next]'), o = EF.api.upcoming(1)[0];
  if (!box) { return; }
  if (!o) { box.hidden = true; return; }
  box.innerHTML = '<button class="nextline" type="button" data-open-occ="' + esc(o.id) + '"><span class="nextline__k">Next up</span> <span class="nextline__v">' +
    esc(dayLabel(o) + ' ' + o.time + ' · ' + o.cls.name) + '</span> <span class="arr" aria-hidden="true">→</span></button>';
  box.hidden = false;
}

/* ---------- sheet slate: the step label shown as a film slate ("02 / 05") ---------- */
function pad2(n) { n = +n; return (n < 10 ? '0' : '') + n; }
var SCENES = { 'step-class': 'The class', 'step-join': 'Joining', 'step-details': 'Your details', 'step-pay': 'Check and pay', 'step-done': 'See you there', 'step-coach': 'Coach', 'step-filters': 'Filters' };
function initSlate() {
  var step = qs('[data-sheet-step]'), body = qs('[data-sheet-body]');
  if (!step || !body || !w.MutationObserver) { return; }
  var slate = d.createElement('p');
  slate.className = 'sheet__slate';
  slate.setAttribute('aria-hidden', 'true');
  step.parentNode.insertBefore(slate, step);
  function upd() {
    var t = String(step.textContent || ''), m = /(\d+)\D+(\d+)/.exec(t), v = qs('[data-testid^="step-"]', body);
    var scene = v ? (SCENES[v.getAttribute('data-testid')] || '') : '';
    slate.innerHTML = (m ? '<b>' + pad2(m[1]) + ' / ' + pad2(m[2]) + '</b>' : '') + '<span>' + esc(scene || t) + '</span>';
  }
  new w.MutationObserver(upd).observe(step, { childList: true, characterData: true, subtree: true });
  new w.MutationObserver(upd).observe(body, { childList: true });
  upd();
}

/* ---------- schedule ---------- */
var S = { day: 0, family: '', coaches: [], times: [], levels: [] };
var sched = {};
var TIMES = [
  { id: 'morning', name: 'Morning, before 12:00', test: function (t) { return t < '12:00'; } },
  { id: 'afternoon', name: 'Afternoon, from 12:00', test: function (t) { return t >= '12:00' && t < '17:00'; } },
  { id: 'evening', name: 'Evening, from 17:00', test: function (t) { return t >= '17:00'; } }
];
var LEVELS = [{ id: 'beginner', name: 'Beginner' }, { id: 'advanced', name: 'Advanced' }, { id: 'all', name: 'All levels' }];
function matches(o, f) {
  if (f.family && o.family.id !== f.family) { return false; }
  if (f.coaches.length && f.coaches.indexOf(o.coach.id) < 0) { return false; }
  if (f.times.length && !TIMES.some(function (t) { return f.times.indexOf(t.id) > -1 && t.test(o.time); })) { return false; }
  if (f.levels.length && f.levels.indexOf(o.cls.level_key) < 0) { return false; }
  return true;
}
function filterCount(f) { return (f.family ? 1 : 0) + f.coaches.length + f.times.length + f.levels.length; }
function copyF(f) { return { day: f.day, family: f.family, coaches: f.coaches.slice(), times: f.times.slice(), levels: f.levels.slice() }; }
function dayRows(i, f) { var day = EF.api.week()[i]; return day ? day.occs.filter(function (o) { return matches(o, f); }) : []; }

function renderDays() {
  var wk = EF.api.week(), booked = {};
  (store().bookings || []).forEach(function (b) { booked[b.ymd] = true; });
  sched.days.innerHTML = '<span class="days__ind" aria-hidden="true"></span>' + wk.map(function (day, i) {
    var sel = i === S.day;
    return '<button class="day' + (day.isToday ? ' is-today' : '') + (booked[day.ymd] ? ' has-booking' : '') + '" type="button" role="tab" id="day-tab-' + i + '" data-testid="day-' + i + '" data-day="' + i + '" aria-selected="' + sel + '" aria-controls="sched-rows" tabindex="' + (sel ? 0 : -1) + '">' +
      '<span class="day__dow">' + esc(day.isToday ? 'Today' : day.dowShort) + '</span> <span class="day__num">' + day.dayNum + '</span><span class="vh">, ' + esc(day.long + ', ' + plural(day.occs.length, 'class', 'classes')) + '</span><span class="day__dot" aria-hidden="true"></span></button>';
  }).join('');
  moveInd();
}
function moveInd() {
  var ind = qs('.days__ind', sched.days), btn = qs('[data-day="' + S.day + '"]', sched.days);
  if (!ind || !btn) { return; }
  ind.style.width = btn.offsetWidth + 'px';
  ind.style.transform = 'translateX(' + btn.offsetLeft + 'px)';
}
function selectDay(i, focus) {
  S.day = i;
  qsa('.day', sched.days).forEach(function (b) {
    var on = +b.getAttribute('data-day') === i;
    b.setAttribute('aria-selected', on ? 'true' : 'false');
    b.tabIndex = on ? 0 : -1;
    if (on && focus) { b.focus(); }
  });
  moveInd();
  renderRows(true);
}
function rowHtml(o, i) {
  var label = o.cls.name + ', ' + o.time + ' with ' + o.coach.name + '. ' + spotsText(o) + '. See details';
  var act;
  if (o.past) { act = '<span class="row__label">Finished</span>'; }
  else if (o.booking && !o.booking.waitlist) { act = '<button class="rbtn rbtn--booked" type="button" data-testid="row-book" data-book="' + esc(o.id) + '" aria-label="Booked: ' + esc(o.cls.name + ' ' + o.time) + '">Booked</button>'; }
  else if (o.full) { act = '<button class="rbtn" type="button" data-testid="row-book" data-book="' + esc(o.id) + '" aria-label="' + esc('Join waitlist for ' + o.cls.name + ' at ' + o.time) + '">Join waitlist</button>'; }
  else { act = '<button class="rbtn" type="button" data-testid="row-book" data-book="' + esc(o.id) + '" aria-label="' + esc('Book ' + o.cls.name + ' at ' + o.time) + '">Book</button>'; }
  var spots = o.booking && !o.booking.waitlist ? "You're booked" : (o.booking && o.booking.waitlist ? 'On the waitlist' : spotsText(o));
  return '<li class="row' + (o.past ? ' is-past' : '') + (o.booking ? ' is-booked' : '') + '" data-testid="row" data-occ="' + esc(o.id) + '" style="--i:' + i + '">' +
    (o.past ? '' : '<button class="row__hit" type="button" data-open="' + esc(o.id) + '" aria-label="' + esc(label) + '"></button>') +
    '<div class="row__when"><span class="row__time">' + esc(o.time) + '</span><span class="row__len">' + o.cls.length_min + ' min</span></div>' +
    '<div class="row__main"><p class="row__name">' + esc(o.cls.name) + '</p>' +
    '<p class="row__by"><img src="' + esc(o.coach.avatar) + '" alt="" width="28" height="28" loading="lazy"><span>' + esc(o.coach.name) + ' · ' + esc(o.cls.level) + '</span></p></div>' +
    '<span class="row__spots">' + esc(spots) + (o.past || o.booking ? '' : CHIP) + '</span>' +
    '<div class="row__act">' + act + '</div></li>';
}
var swapTimer = 0;
function renderRows(animate) {
  var wk = EF.api.week(), day = wk[S.day];
  if (!day) { return; }
  var list = dayRows(S.day, S);
  var draw = function () {
    sched.rows.innerHTML = list.map(rowHtml).join('');
    if (animate && motionOn()) { qsa('.row', sched.rows).forEach(function (r) { r.classList.add('is-enter'); }); }
    sched.rows.classList.remove('is-swapping');
    sched.empty.hidden = list.length > 0;
    sched.title.textContent = (day.isToday ? 'Today, ' : '') + day.long;
    sched.count.textContent = plural(list.length, 'class', 'classes');
    var left = day.occs.filter(function (o) { return !o.past; }).length;
    if (day.isToday && day.occs.length && !left) {
      var tmr = wk[1] && wk[1].occs[0];
      sched.done.textContent = "That's today done." + (tmr ? ' Tomorrow starts at ' + tmr.time + ' with ' + tmr.cls.name + '.' : '');
      sched.done.hidden = false;
    } else { sched.done.hidden = true; }
  };
  clearTimeout(swapTimer);
  if (animate && motionOn()) { sched.rows.classList.add('is-swapping'); swapTimer = setTimeout(draw, 160); } else { draw(); }
  renderBadge();
}
function renderBadge() {
  var n = filterCount(S), b = sched.badge;
  if (b) {
    var before = b.textContent;
    b.textContent = n;
    b.hidden = n === 0;
    if (String(n) !== before && n > 0 && motionOn()) { b.classList.remove('is-pop'); void b.offsetWidth; b.classList.add('is-pop'); }
  }
  qsa('.fchip', sched.chips).forEach(function (c) { c.setAttribute('aria-pressed', (c.getAttribute('data-fam') || '') === S.family ? 'true' : 'false'); });
}
function firstOpenDay() {
  var wk = EF.api.week();
  for (var i = 0; i < wk.length; i++) { if (wk[i].occs.some(function (o) { return !o.past; })) { return i; } }
  return 0;
}
function initSchedule() {
  var box = qs('[data-schedule]');
  if (!box) { return; }
  sched = {
    box: box, days: qs('[data-days]', box), chips: qs('[data-fchips]', box), badge: qs('[data-filter-count]', box),
    title: qs('[data-day-title]', box), count: qs('[data-day-count]', box), done: qs('[data-day-done]', box),
    rows: qs('[data-rows]', box), empty: qs('[data-empty]', box)
  };
  sched.rows.id = 'sched-rows';
  S.day = firstOpenDay();
  renderDays();
  renderRows(false);
  sched.days.addEventListener('click', function (e) { var b = e.target.closest('.day'); if (b) { selectDay(+b.getAttribute('data-day')); } });
  sched.days.addEventListener('keydown', function (e) {
    var k = e.key, n = EF.api.week().length, i = S.day;
    if (k === 'ArrowRight') { i = (i + 1) % n; } else if (k === 'ArrowLeft') { i = (i - 1 + n) % n; } else if (k === 'Home') { i = 0; } else if (k === 'End') { i = n - 1; } else { return; }
    e.preventDefault(); selectDay(i, true);
  });
  sched.chips.addEventListener('click', function (e) {
    var c = e.target.closest('.fchip'); if (!c) { return; }
    S.family = c.getAttribute('data-fam') || '';
    renderRows(true);
  });
  sched.rows.addEventListener('click', function (e) {
    var t = e.target.closest('[data-book], [data-open]');
    if (t) { openOcc(t.getAttribute('data-book') || t.getAttribute('data-open')); }
  });
  qsa('[data-clear-filters]').forEach(function (b) { b.addEventListener('click', function () { S.family = ''; S.coaches = []; S.times = []; S.levels = []; renderRows(true); }); });
  var fb = qs('[data-open-filters]', box);
  if (fb) { fb.addEventListener('click', function () { if (EF.sheet && EF.sheet.open) { EF.sheet.open('filters', {}, '?view=filters'); } }); }
  var rt = 0;
  w.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(moveInd, 120); });
  registerFilters();
}
EF.schedule = {
  show: function (o) {
    o = o || {};
    if (!sched.days) { return; }
    if (o.ymd) { EF.api.week().forEach(function (day, i) { if (day.ymd === o.ymd) { S.day = i; } }); }
    if (o.family != null) { S.family = o.family; }
    selectDay(S.day);
    var sec = d.getElementById('schedule');
    scrollToEl(sec);
    try { sec.focus({ preventScroll: true }); } catch (e) { }
  },
  state: function () { return copyF(S); }
};

/* filter drawer, rendered through EF.sheet */
function registerFilters() {
  if (!EF.sheet || !EF.sheet.register) { return; }
  EF.sheet.register('filters', function () {
    var F = copyF(S);
    return {
      label: 'Filters', progress: null, testid: 'step-filters',
      render: function (body, foot) {
        function tog(group, id, name, on, img) {
          return '<button class="tog" type="button" data-g="' + group + '" data-v="' + esc(id) + '" aria-pressed="' + (on ? 'true' : 'false') + '">' + (img ? '<img src="' + esc(img) + '" alt="" width="26" height="26">' : '') + esc(name) + '</button>';
        }
        body.innerHTML = '<div data-testid="step-filters"><h2 class="sh-title" id="sheet-title" tabindex="-1">Filters</h2>' +
          '<p class="sh-lead">For ' + esc(EF.api.week()[S.day].long) + '.</p>' +
          '<fieldset class="fgroup"><legend>Class type</legend><div class="opts">' + tog('family', '', 'All classes', !F.family) + DATA.families.map(function (f) { return tog('family', f.id, f.name, F.family === f.id); }).join('') + '</div></fieldset>' +
          '<fieldset class="fgroup"><legend>Coach</legend><div class="opts">' + DATA.coaches.map(function (c) { return tog('coaches', c.id, c.name, F.coaches.indexOf(c.id) > -1, c.avatar); }).join('') + '</div></fieldset>' +
          '<fieldset class="fgroup"><legend>Time of day</legend><div class="opts">' + TIMES.map(function (t) { return tog('times', t.id, t.name, F.times.indexOf(t.id) > -1); }).join('') + '</div></fieldset>' +
          '<fieldset class="fgroup"><legend>Level</legend><div class="opts">' + LEVELS.map(function (l) { return tog('levels', l.id, l.name, F.levels.indexOf(l.id) > -1); }).join('') + '</div></fieldset>' +
          '<p class="sh-lead"><span class="sample">Sample</span> Most class levels are placeholders until the club confirms them.</p></div>';
        foot.innerHTML = '<div class="foot-row"><button class="btn btn--outline btn--sm" type="button" data-testid="filters-clear" data-fclear>Clear all</button>' +
          '<button class="btn btn--primary" type="button" data-testid="filters-apply" data-fapply></button></div>';
        var apply = qs('[data-fapply]', foot);
        function sync() {
          qsa('.tog', body).forEach(function (b) {
            var g = b.getAttribute('data-g'), v = b.getAttribute('data-v');
            b.setAttribute('aria-pressed', (g === 'family' ? F.family === v : F[g].indexOf(v) > -1) ? 'true' : 'false');
          });
          apply.innerHTML = 'Show ' + plural(dayRows(S.day, F).length, 'class', 'classes') + ' <span class="arr" aria-hidden="true">→</span>';
        }
        body.addEventListener('click', function (e) {
          var b = e.target.closest('.tog'); if (!b) { return; }
          var g = b.getAttribute('data-g'), v = b.getAttribute('data-v');
          if (g === 'family') { F.family = v; }
          else { var at = F[g].indexOf(v); if (at > -1) { F[g].splice(at, 1); } else { F[g].push(v); } }
          sync();
        });
        qs('[data-fclear]', foot).addEventListener('click', function () { F.family = ''; F.coaches = []; F.times = []; F.levels = []; sync(); });
        apply.addEventListener('click', function () {
          S.family = F.family; S.coaches = F.coaches; S.times = F.times; S.levels = F.levels;
          renderRows(true);
          EF.sheet.close();
        });
        sync();
      }
    };
  });
}

/* ---------- coaches ---------- */
function teaches(id) {
  var names = [];
  EF.api.week().forEach(function (day) { day.occs.forEach(function (o) { if (o.coach.id === id && names.indexOf(o.cls.name) < 0) { names.push(o.cls.name); } }); });
  if (names.length < 2) { return names.join(''); }
  return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
}
function initCoaches() {
  var box = qs('[data-coaches]');
  if (!box) { return; }
  DATA.coaches.forEach(function (c) {
    var cnt = qs('[data-coach-count="' + c.id + '"]', box), role = qs('[data-coach-role="' + c.id + '"]', box), t;
    if (cnt) { cnt.textContent = plural(EF.api.coachWeekly(c.id), 'class', 'classes'); }
    if (role && !c.role) { t = teaches(c.id); if (t) { role.textContent = 'Teaches ' + t; } }
  });
  box.addEventListener('click', function (e) {
    var b = e.target.closest('[data-coach]');
    if (b && EF.booking && EF.booking.openCoach) { EF.booking.openCoach(b.getAttribute('data-coach')); }
  });
}

/* ---------- sticky CTAs: one terracotta button per screen ---------- */
function initBars() {
  var bar = qs('[data-buybar]'), hdr = qs('#hdr'), hero = qs('[data-testid="hero-book"]') || qs('#top');
  var barBtn = bar && qs('button', bar), hdrBtn = hdr && qs('.hdr__cta', hdr);
  var st = { pastHero: false, blocked: {}, sheet: false, typing: false };
  function apply() {
    var blocked = st.blocked.offer || st.blocked.footer;
    var onBar = st.pastHero && !blocked && !st.sheet && !st.typing;
    var onHdr = st.pastHero && !st.sheet && !st.blocked.offer;
    if (bar) { bar.classList.toggle('is-on', onBar); bar.setAttribute('aria-hidden', onBar ? 'false' : 'true'); if (barBtn) { barBtn.tabIndex = onBar ? 0 : -1; } }
    if (hdr) { hdr.classList.toggle('cta-on', onHdr); if (hdrBtn) { hdrBtn.tabIndex = onHdr ? 0 : -1; hdrBtn.setAttribute('aria-hidden', onHdr ? 'false' : 'true'); } }
  }
  if ('IntersectionObserver' in w) {
    /* the bar stays off on the title card and comes in once the title card's own button has scrolled away */
    if (hero) { new w.IntersectionObserver(function (es) { st.pastHero = !es[0].isIntersecting && es[0].boundingClientRect.top < 0; apply(); }, { threshold: 0 }).observe(hero); }
    [['offer', '#plus-one'], ['footer', '#footer']].forEach(function (p) {
      var el = qs(p[1]);
      if (el) { new w.IntersectionObserver(function (es) { st.blocked[p[0]] = es[0].isIntersecting; apply(); }, { rootMargin: '0px 0px -60px 0px' }).observe(el); }
    });
  }
  d.addEventListener('ef:sheet', function (e) { st.sheet = !!(e.detail && e.detail.open); apply(); });
  d.addEventListener('focusin', function (e) { if (e.target.matches && e.target.matches('#page input, #page select, #page textarea')) { st.typing = true; apply(); } });
  d.addEventListener('focusout', function () { if (st.typing) { st.typing = false; apply(); } });
  var ticking = false;
  w.addEventListener('scroll', function () {
    if (ticking) { return; }
    ticking = true;
    w.requestAnimationFrame(function () { ticking = false; if (hdr) { hdr.classList.toggle('is-scrolled', (w.pageYOffset || 0) > 4); } });
  }, { passive: true });
  apply();
}

/* ---------- actions ---------- */
function duoNote() { var n = qs('[data-duo-note]'); if (n) { n.hidden = store().prefJoin !== 'duo'; } }
function initActions() {
  d.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-book-next], [data-filter-family], [data-duo-start], [data-duo-clear], [data-open-occ]');
    if (!t) { return; }
    if (t.hasAttribute('data-book-next')) {
      var o = EF.api.upcoming(1)[0];
      if (o) { openOcc(o.id, store().prefJoin === 'duo' ? { join: 'duo' } : {}); }
    } else if (t.hasAttribute('data-open-occ')) {
      openOcc(t.getAttribute('data-open-occ'));
    } else if (t.hasAttribute('data-filter-family')) {
      e.preventDefault();
      EF.schedule.show({ family: t.getAttribute('data-filter-family') });
    } else if (t.hasAttribute('data-duo-start')) {
      storeSet({ prefJoin: 'duo' });
      duoNote();
      EF.schedule.show({});
    } else if (t.hasAttribute('data-duo-clear')) {
      storeSet({ prefJoin: null });
      duoNote();
    }
  });
}

function refresh() {
  renderHeroNext();
  renderChapters();
  renderNext(true);
  renderDays();
  renderRows(false);
  duoNote();
}

/* ---------- boot ---------- */
function fail() {
  var n = qs('[data-nextup]');
  if (n) { n.innerHTML = '<p class="nextup__loading">The timetable didn\'t load. This week\'s classes are on <a href="https://elitefitbali.com/class-schedule/">elitefitbali.com/class-schedule</a>.</p>'; }
}
function boot() {
  if (!EF.api || !EF.api.load) { fail(); return; }
  EF.api.load().then(function (data) {
    DATA = data;
    bindStatic();
    initVisitor();
    renderChapters();
    renderNext(false);
    renderHeroNext();
    initSlate();
    initSchedule();
    initCoaches();
    initBars();
    initActions();
    duoNote();
    scanMotion(d.getElementById('main'));
    if (EF.media && EF.media.sync) { EF.media.sync(); }
    d.addEventListener('ef:booked', refresh);
    if (/[?&]view=filters\b/.test(w.location.search) && EF.sheet && EF.sheet.open) {
      try { w.history.replaceState(null, '', w.location.pathname); } catch (e) { }
      EF.sheet.open('filters', {}, '?view=filters');
    }
  }, fail);
}
if (d.readyState === 'loading') { d.addEventListener('DOMContentLoaded', boot); } else { boot(); }
})(window, document);
