/* Elite Fit /groupfitness · Panels app · page.js · 27 Oct 2026
   Renders and wires the page from EF.api (shared v1 engine): hero panels (accordion), visitor switch, next-up tickets,
   schedule (date bar, chips, filter sheet, rows with FLIP), coaches, tab bar + nav scroll-spy, open status,
   and the View Transitions bridge that morphs the tapped panel, ticket, row, coach card or button into the sheet.
   Contract hooks: the shared page contract. Classic deferred script, ES5, no dependencies. */
(function (w, d) {
'use strict';
var EF = w.EF = w.EF || {};
var root = d.documentElement;

/* ---------- helpers ---------- */
function qs(s, c) { return (c || d).querySelector(s); }
function qsa(s, c) { return [].slice.call((c || d).querySelectorAll(s)); }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
function emit(name, detail) { try { d.dispatchEvent(new CustomEvent(name, { detail: detail })); } catch (e) {} }
function mq(q) { try { return w.matchMedia(q); } catch (e) { return { matches: false }; } }
var mqDesk = mq('(min-width: 1024px)');
var mqWide = mq('(min-width: 1200px)');
var mqHover = mq('(hover: hover) and (pointer: fine)');
var mqReduce = mq('(prefers-reduced-motion: reduce)');
function motionOn() { return root.classList.contains('motion-ok') && !mqReduce.matches; }
function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
function store() { try { return (EF.api && EF.api.store && EF.api.store.get()) || {}; } catch (e) { return {}; } }
function storeSet(p) { try { if (EF.api && EF.api.store) { EF.api.store.set(p); } } catch (e) {} }
function raf(f) { return (w.requestAnimationFrame || w.setTimeout)(f); }
function scrollToEl(el) { if (!el) { return; } try { el.scrollIntoView({ behavior: motionOn() ? 'smooth' : 'auto', block: 'start' }); } catch (e) { el.scrollIntoView(); } }
function dayPhrase(o) { return o.dayIndex === 0 ? 'today' : (o.dayIndex === 1 ? 'tomorrow' : EF.api.dateShort(o.ymd)); }
function dayWord(o) { return o.dayIndex === 0 ? 'Today' : (o.dayIndex === 1 ? 'Tomorrow' : EF.api.dateShort(o.ymd).split(' ')[0]); }
function spotsText(o) { if (o.past) { return 'Finished'; } if (o.full) { return 'Full · waitlist open'; } return 'Room for ' + o.spotsLeft + ' more'; }
function isSample(cls, f) { return !!(cls.sample_fields && cls.sample_fields.indexOf(f) > -1) || (f === 'length' && !!cls.length_sample); }
var CHIP = ' <span class="sample">Sample</span>';
function levelHtml(c) { return esc(c.level) + (isSample(c, 'level') ? CHIP : ''); }
function lengthHtml(c) { return c.length_min + ' min' + (isSample(c, 'length') ? CHIP : ''); }
var CAP = 14;
function meterHtml(free) {
  var i, out = '<span class="meter m-wait" aria-hidden="true">';
  for (i = 0; i < CAP; i++) { out += '<i' + (i < free ? ' class="on"' : '') + ' style="--k:' + i + '"></i>'; }
  return out + '</span>';
}
var CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
var DATA = null;

/* =====================================================================
   View Transitions bridge: shared-element open and close of the sheet.
   ===================================================================== */
var VT = { busy: false, src: null };
function vtOk() { return !!d.startViewTransition && motionOn(); }
function seen(el) {
  if (!el || !root.contains(el)) { return false; }
  var r = el.getBoundingClientRect();
  return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < (w.innerHeight || 0) && r.right > 0 && r.left < (w.innerWidth || 0);
}
function nameIt(el, n) { if (el) { el.style.setProperty('view-transition-name', n || 'none'); if (!n) { el.style.removeProperty('view-transition-name'); } } }
function textOf(el) { return el ? String(el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase() : ''; }
function partsOf(src, closing) {
  if (!src) { return null; }
  var box = null, media = null, title = null, row, tic, order, i;
  if (src.type === 'occ') {
    row = qs('[data-testid="row"][data-occ="' + src.occ + '"]');
    tic = qs('[data-testid="next-card"][data-occ="' + src.occ + '"]');
    order = src.prefer === 'ticket' ? [tic, row] : [row, tic];
    if (src.fromEl && !closing) { order.unshift(src.fromEl); }
    for (i = 0; i < order.length; i++) { if (seen(order[i])) { box = order[i]; break; } }
    title = box ? qs('[data-vt-title]', box) : null;
  } else if (src.type === 'panel') {
    box = qs('.panel[data-family="' + src.fam + '"]');
    media = box ? qs('.panel__media', box) : null;
  } else if (src.type === 'coach') {
    box = qs('[data-coach="' + src.id + '"]');
    media = box ? qs('.coach__photo', box) : null;
  } else if (src.type === 'el' && !closing) {
    box = src.el;
  }
  if (!seen(box)) { return null; }
  if (media && !seen(media)) { media = null; }
  return { box: box, media: media, title: title };
}
function inner(el, on) { return (on && el) ? (el.querySelector('img') || el) : el; }
function sheetParts() {
  var s = qs('#sheet');
  return { panel: qs('.sheet__panel', s), media: qs('.sh-media', s) || qs('.csheet__photo', s), title: qs('.sh-title', s) };
}
function settle(t, done) {
  var fin = function () { try { done(); } catch (e) {} };
  try { t.finished.then(fin, fin); } catch (e) { fin(); }
  try { if (t.ready) { t.ready.catch(function () {}); } } catch (e) {}
  try { if (t.updateCallbackDone) { t.updateCallbackDone.catch(function () {}); } } catch (e) {}
}
function openVia(src, fn) {
  var p = (!VT.busy && vtOk()) ? partsOf(src, false) : null;
  VT.src = src;
  if (!p) { fn(); return; }
  /* phones: only the poster or title is shared and the sheet slides up on its own (no container ghost); desktop: container transform */
  var m = !mqDesk.matches, scrim = qs('#sheet .sheet__scrim');
  VT.busy = true;
  p.media = inner(p.media, m);
  if (!m) { nameIt(p.box, 'ef-sheet'); }
  nameIt(p.media, 'ef-media'); nameIt(p.title, 'ef-title');
  root.classList.add('vt-run');
  if (m) { root.classList.add('vt-m'); }
  var s = null, t;
  var clear = function () { if (s) { nameIt(s.panel, ''); nameIt(s.media, ''); nameIt(s.title, ''); } nameIt(scrim, ''); root.classList.remove('vt-run'); root.classList.remove('vt-m'); VT.busy = false; };
  try {
    t = d.startViewTransition(function () {
      nameIt(p.box, ''); nameIt(p.media, ''); nameIt(p.title, '');
      fn();
      s = sheetParts();
      s.media = inner(s.media, m);
      if (EF.sheet && EF.sheet.isOpen && EF.sheet.isOpen()) {
        nameIt(s.panel, 'ef-sheet');
        if (m) { nameIt(scrim, 'ef-scrim'); }
        if (p.media && s.media) { nameIt(s.media, 'ef-media'); }
        if (p.title && s.title && textOf(s.title) === textOf(p.title)) { nameIt(s.title, 'ef-title'); }
      }
    });
  } catch (e) {
    nameIt(p.box, ''); nameIt(p.media, ''); nameIt(p.title, '');
    clear();
    if (!(EF.sheet && EF.sheet.isOpen && EF.sheet.isOpen())) { fn(); }
    return;
  }
  settle(t, clear);
}
function closeVia() {
  if (VT.busy || !vtOk() || !VT.src || !EF.sheet || !EF.sheet.isOpen()) { return false; }
  var kind = EF.sheet.kind();
  var p = partsOf(VT.src, true);
  if (!p) { return false; }
  var m = !mqDesk.matches, s = sheetParts(), scrim = qs('#sheet .sheet__scrim');
  s.media = inner(s.media, m); p.media = inner(p.media, m);
  var useMedia = (kind === 'class' || kind === 'coach') && p.media && s.media;
  var useTitle = kind === 'class' && p.title && s.title && textOf(s.title) === textOf(p.title);
  VT.busy = true;
  nameIt(s.panel, 'ef-sheet'); if (m) { nameIt(scrim, 'ef-scrim'); }
  if (useMedia) { nameIt(s.media, 'ef-media'); } if (useTitle) { nameIt(s.title, 'ef-title'); }
  root.classList.add('vt-run');
  if (m) { root.classList.add('vt-m'); }
  var q = null, t;
  var clear = function () { if (q) { nameIt(q.box, ''); nameIt(q.media, ''); nameIt(q.title, ''); } root.classList.remove('vt-run'); root.classList.remove('vt-m'); VT.busy = false; };
  try {
    t = d.startViewTransition(function () {
      nameIt(s.panel, ''); nameIt(s.media, ''); nameIt(s.title, ''); nameIt(scrim, '');
      EF.sheet.close();
      q = partsOf(VT.src, true);
      if (q) { q.media = inner(q.media, m); }
      if (q) { if (!m) { nameIt(q.box, 'ef-sheet'); } if (useMedia) { nameIt(q.media, 'ef-media'); } if (useTitle) { nameIt(q.title, 'ef-title'); } }
    });
  } catch (e) {
    nameIt(s.panel, ''); nameIt(s.media, ''); nameIt(s.title, ''); nameIt(scrim, '');
    clear();
    return false;
  }
  settle(t, clear);
  return true;
}
/* the sheet's close button and scrim: morph back into the source when it is on screen (capture runs before booking.js) */
d.addEventListener('click', function (e) {
  var t = e.target && e.target.closest ? e.target.closest('#sheet [data-sheet-close]') : null;
  if (!t) { return; }
  if (closeVia()) { e.stopPropagation(); e.preventDefault(); }
}, true);

function openOcc(id, opts, src) {
  if (!EF.booking || !EF.booking.open || !id) { return; }
  openVia(src || { type: 'occ', occ: id }, function () { EF.booking.open(id, opts || {}); });
}

/* ---------- data binding ---------- */
function bindStatic() {
  var p = DATA.passes, c = DATA.club;
  var prices = { day: p.day.price_idr, duo: p.duo.price_idr, 'duo-total': p.duo.price_idr * (p.duo.people || 2), 'duo-old': p.duo.old_price_idr, recharge_day: p.recharge_day.price_idr };
  qsa('[data-price]').forEach(function (el) { var v = prices[el.getAttribute('data-price')]; if (v) { el.textContent = EF.api.k(v); } });
  qsa('[data-bind="weekly-count"]').forEach(function (el) { el.textContent = EF.api.weeklyCount(); });
  qsa('[data-bind="weekend-note"]').forEach(function (el) { el.textContent = DATA.timetable.weekend_note; });
  qsa('[data-bind="address"]').forEach(function (el) { el.textContent = c.address; });
  qsa('[data-bind="wa-link"]').forEach(function (el) { el.textContent = c.whatsapp.number; el.href = 'https://wa.me/' + c.whatsapp.wa; });
}

/* =====================================================================
   Hero panels: vertical stack (phones, tablets) and horizontal accordion with spotlight (>= 1200 px)
   ===================================================================== */
var panelsBox, panels = [], hoverTimer = 0;
function setPanel(fid, user) {
  panels.forEach(function (p) {
    var on = p.getAttribute('data-family') === fid;
    p.classList.toggle('is-open', on);
    var hit = qs('.panel__hit', p), more = qs('.panel__more', p);
    hit.setAttribute('aria-expanded', on ? 'true' : 'false');
    if (mqWide.matches && on) { hit.setAttribute('aria-disabled', 'true'); } else { hit.removeAttribute('aria-disabled'); }
    if (more) { if (on) { more.removeAttribute('inert'); } else { more.setAttribute('inert', ''); } }
  });
  emit('ef:panel', { family: fid, user: !!user });
}
function nextOfFamily(fid) {
  var found = null;
  EF.api.week().some(function (day) { return day.occs.some(function (o) { if (!o.past && o.familyId === fid) { found = o; return true; } return false; }); });
  return found;
}
function heroNext() {
  panels.forEach(function (p) {
    var fid = p.getAttribute('data-family'), fam = EF.api.family(fid);
    if (!fam) { return; }
    var lvl = qs('[data-bind="level-line"]', p);
    if (lvl) { lvl.innerHTML = esc(fam.level_line) + (fam.sample_fields && fam.sample_fields.indexOf('level_line') > -1 ? CHIP : ''); }
    var nx = nextOfFamily(fid), el = qs('[data-bind="family-next"]', p);
    if (el) { el.textContent = nx ? 'Next: ' + dayPhrase(nx) + ' at ' + nx.time : fam.level_line; }
    var list = qs('[data-panel-classes]', p);
    if (!list) { return; }
    list.innerHTML = EF.api.classesInFamily(fid).map(function (c) {
      var o = EF.api.occ(c.id);
      if (!o) { return ''; }
      var st = o.booking && !o.booking.waitlist ? "You're booked" : (o.booking ? 'On the waitlist' : (o.full ? 'Full, waitlist open' : 'Room for ' + o.spotsLeft + ' more'));
      return '<li><button class="pclass" type="button" data-open-occ="' + esc(o.id) + '" data-fam="' + esc(fid) + '">' +
        '<span><span class="pclass__name">' + esc(c.name) + '</span><span class="pclass__sub">' + esc(dayWord(o) + ' ' + o.time + ' · ' + st) + '</span></span>' +
        '<span class="pclass__go" aria-hidden="true">→</span></button></li>';
    }).join('');
  });
}
function initPanels() {
  panelsBox = qs('[data-panels]');
  if (!panelsBox) { return; }
  panels = qsa('.panel', panelsBox);
  panels.forEach(function (p) {
    var fid = p.getAttribute('data-family'), hit = qs('.panel__hit', p);
    hit.addEventListener('click', function () {
      if (mqWide.matches) { if (!p.classList.contains('is-open')) { setPanel(fid, true); } return; }
      var opening = !p.classList.contains('is-open');
      setPanel(opening ? fid : '', true);
      if (opening) {
        w.setTimeout(function () {
          var r = p.getBoundingClientRect(), bottom = (w.innerHeight || 0) - (mqDesk.matches ? 0 : 70);
          if (r.top < 0 || r.bottom > bottom) { try { p.scrollIntoView({ block: r.height > bottom ? 'start' : 'nearest', behavior: motionOn() ? 'smooth' : 'auto' }); } catch (e) {} }
        }, 520);
      }
    });
    p.addEventListener('mouseenter', function () {
      if (!mqWide.matches || !mqHover.matches) { return; }
      panelsBox.classList.add('is-spot');
      w.clearTimeout(hoverTimer);
      hoverTimer = w.setTimeout(function () { if (!p.classList.contains('is-open')) { setPanel(fid, true); } }, 70);
    });
    p.addEventListener('focusin', function () {
      if (!mqWide.matches) { return; }
      panelsBox.classList.add('is-spot');
      if (!p.classList.contains('is-open')) { setPanel(fid, true); }
    });
  });
  panelsBox.addEventListener('mouseleave', function () { w.clearTimeout(hoverTimer); panelsBox.classList.remove('is-spot'); });
  panelsBox.addEventListener('focusout', function (e) { if (!panelsBox.contains(e.relatedTarget)) { panelsBox.classList.remove('is-spot'); } });
  panelsBox.addEventListener('click', function (e) {
    var b = e.target.closest('[data-open-occ]');
    if (b) { openOcc(b.getAttribute('data-open-occ'), {}, { type: 'panel', fam: b.getAttribute('data-fam') }); }
  });
  var open = qs('.panel.is-open', panelsBox);
  setPanel(open ? open.getAttribute('data-family') : 'boxing', false);
  var lastWide = mqWide.matches;
  w.addEventListener('resize', function () {
    if (mqWide.matches !== lastWide) {
      lastWide = mqWide.matches;
      var cur = qs('.panel.is-open', panelsBox);
      setPanel(cur ? cur.getAttribute('data-family') : 'boxing', false);
    }
  });
  heroNext();
}

/* ---------- visitor switch ---------- */
var NOTES = { first: '', returning: '' };
function setVisitor(v, save) {
  var note = qs('[data-visitor-note]'), seg = qs('[data-seg]');
  if (note && !NOTES.first) { NOTES.first = note.textContent.trim(); NOTES.returning = note.getAttribute('data-note-returning') || ''; }
  qsa('[data-visitor]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-visitor') === v ? 'true' : 'false'); });
  if (seg) { seg.setAttribute('data-on', v); seg.classList.add('has-ind'); }
  if (note) { note.textContent = NOTES[v] || NOTES.first; }
  if (save) { storeSet({ visitor: v }); emit('ef:visitor', { visitor: v }); }
}
function initVisitor() {
  setVisitor(store().visitor === 'returning' ? 'returning' : 'first', false);
  qsa('[data-visitor]').forEach(function (b) { b.addEventListener('click', function () { setVisitor(b.getAttribute('data-visitor'), true); }); });
}

/* =====================================================================
   Next up: three ticket cards
   ===================================================================== */
var nextBox;
function ticketHtml(o, i) {
  var bk = o.booking && !o.booking.waitlist;
  var when = o.dayIndex < 2 ? dayWord(o) + ' · ' + EF.api.dateShort(o.ymd).replace(/^\w+ /, '') : EF.api.dateShort(o.ymd);
  return '<button class="ticket' + (bk ? ' is-booked' : '') + '" type="button" data-testid="next-card" data-occ="' + esc(o.id) + '">' +
    '<span class="ticket__top">' + (i === 0 ? '<span class="live">Next</span>' : '') + '<span class="ticket__day">' + esc(when) + '</span><span class="ticket__go">' + (bk ? 'View' : 'Book') + ' <span class="arr" aria-hidden="true">→</span></span></span>' +
    '<span class="ticket__when"><span class="ticket__time">' + esc(o.time) + '</span></span>' +
    '<span class="ticket__main"><span class="ticket__name" data-vt-title>' + esc(o.cls.name) + '</span>' +
    '<span class="who"><img src="' + esc(o.coach.avatar) + '" alt="" width="28" height="28" loading="lazy">with ' + esc(o.coach.name) + '</span>' +
    '<span class="ticket__meta">' + o.cls.length_min + ' min · ' + esc(o.cls.level) + '</span></span>' +
    '<span class="ticket__foot">' + (bk ? '<span class="spots">You\'re booked</span>' : meterHtml(o.spotsLeft) + '<span class="spots">Room for <span data-spots="' + esc(o.id) + '">' + o.spotsLeft + '</span> more</span>') +
    '<span class="sample">Sample</span></span></button>';
}
function renderNext() {
  nextBox = nextBox || qs('[data-nextup]');
  if (!nextBox) { return; }
  if (!nextBox.__wired) {
    nextBox.__wired = true;
    nextBox.addEventListener('click', function (e) {
      var c = e.target.closest ? e.target.closest('[data-testid="next-card"]') : null;
      if (c) { var id = c.getAttribute('data-occ'); openOcc(id, store().prefJoin === 'duo' ? { join: 'duo' } : {}, { type: 'occ', occ: id, prefer: 'ticket' }); }
    });
  }
  var list = EF.api.upcoming(3);
  if (!list.length) { nextBox.innerHTML = '<p class="tickets__loading">No classes left this week. New dates appear every day.</p>'; return; }
  nextBox.innerHTML = list.map(ticketHtml).join('');
  if (nextBox.classList.contains('m-in') && EF.motion) { EF.motion.fillMeters(nextBox); }
}

/* =====================================================================
   Schedule: sticky date bar, chips, filters, rows
   ===================================================================== */
var S = { day: 0, family: '', coaches: [], times: [], levels: [] };
var sched = {};
var TIMES = [
  { id: 'morning', name: 'Morning, before 12:00', test: function (t) { return t < '12:00'; } },
  { id: 'afternoon', name: 'Afternoon, from 12:00', test: function (t) { return t >= '12:00' && t < '17:00'; } },
  { id: 'evening', name: 'Evening, from 17:00', test: function (t) { return t >= '17:00'; } }
];
var LEVELS = [{ id: 'beginner', name: 'Beginner' }, { id: 'advanced', name: 'Advanced' }, { id: 'all', name: 'All levels' }];
function matches(o, f) {
  if (f.family && o.familyId !== f.family) { return false; }
  if (f.coaches.length && f.coaches.indexOf(o.coachId) < 0) { return false; }
  if (f.times.length && !TIMES.some(function (t) { return f.times.indexOf(t.id) > -1 && t.test(o.time); })) { return false; }
  if (f.levels.length && f.levels.indexOf(o.cls.level_key) < 0) { return false; }
  return true;
}
function filterCount(f) { return (f.family ? 1 : 0) + f.coaches.length + f.times.length + f.levels.length; }
function copyF(f) { return { day: f.day, family: f.family, coaches: f.coaches.slice(), times: f.times.slice(), levels: f.levels.slice() }; }
function dayRows(i, f) { var day = EF.api.week()[i]; return day ? day.occs.filter(function (o) { return matches(o, f); }) : []; }

function renderDays() {
  var wk = EF.api.week(), booked = {};
  (store().bookings || []).forEach(function (b) { if (!b.waitlist) { booked[b.ymd] = true; } });
  sched.days.innerHTML = '<span class="days__ind" aria-hidden="true"></span>' + wk.map(function (day, i) {
    var sel = i === S.day;
    return '<button class="day' + (booked[day.ymd] ? ' has-booking' : '') + '" type="button" role="tab" id="day-tab-' + i + '" data-testid="day-' + i + '" data-day="' + i + '" aria-selected="' + sel + '" aria-controls="sched-rows" tabindex="' + (sel ? 0 : -1) + '">' +
      '<span class="day__dow">' + esc(day.isToday ? 'Today' : day.dowShort) + '</span><span class="day__num">' + day.dayNum + '</span>' +
      '<span class="vh">, ' + esc(day.long + ', ' + plural(day.occs.length, 'class', 'classes') + (booked[day.ymd] ? ', you have a booking' : '')) + '</span><span class="day__dot" aria-hidden="true"></span></button>';
  }).join('');
  sched.days.classList.add('has-ind');
  moveInd();
}
function moveInd() {
  var ind = qs('.days__ind', sched.days), btn = qs('[data-day="' + S.day + '"]', sched.days);
  if (!ind || !btn) { return; }
  ind.style.setProperty('--w', btn.offsetWidth + 'px');
  ind.style.setProperty('--x', btn.offsetLeft + 'px');
}
function selectDay(i, focus) {
  var dir = i > S.day ? 1 : (i < S.day ? -1 : 0);
  S.day = i;
  qsa('.day', sched.days).forEach(function (b) {
    var on = +b.getAttribute('data-day') === i;
    b.setAttribute('aria-selected', on ? 'true' : 'false');
    b.tabIndex = on ? 0 : -1;
    if (on && focus) { b.focus(); }
  });
  moveInd();
  renderRows(dir ? 'day' : 'filter', dir);
}
function rowHtml(o) {
  var bk = o.booking, mine = bk && !bk.waitlist, label = o.cls.name + ', ' + o.time + ' with ' + o.coach.name + '. ' + (mine ? "You're booked" : (bk ? 'On the waitlist' : spotsText(o))) + '. See details';
  var act;
  if (o.past) { act = '<span class="row__label">Finished</span>'; }
  else if (mine) { act = '<button class="rbtn rbtn--booked" type="button" data-testid="row-book" data-book="' + esc(o.id) + '" aria-label="Booked: ' + esc(o.cls.name + ' ' + o.time) + '">' + CHECK + 'Booked</button>'; }
  else if (bk) { act = '<button class="rbtn rbtn--wait" type="button" data-testid="row-book" data-book="' + esc(o.id) + '" aria-label="On the list: ' + esc(o.cls.name + ' ' + o.time) + '">On the list</button>'; }
  else if (o.full) { act = '<button class="rbtn rbtn--wait" type="button" data-testid="row-book" data-book="' + esc(o.id) + '" aria-label="' + esc('Join waitlist for ' + o.cls.name + ' at ' + o.time) + '">Join waitlist</button>'; }
  else { act = '<button class="rbtn" type="button" data-testid="row-book" data-book="' + esc(o.id) + '" aria-label="' + esc('Book ' + o.cls.name + ' at ' + o.time) + '">Book</button>'; }
  var spots = mine ? "You're booked" : (bk ? 'On the waitlist' : (o.full ? 'Full · waitlist open' : 'Room for <span data-spots="' + esc(o.id) + '">' + o.spotsLeft + '</span> more'));
  return '<li class="row' + (o.past ? ' is-past' : '') + (mine ? ' is-booked' : '') + '" data-testid="row" data-occ="' + esc(o.id) + '"' + (o.past ? ' data-past' : '') + '>' +
    (o.past ? '' : '<button class="row__hit" type="button" data-open="' + esc(o.id) + '" aria-label="' + esc(label) + '"></button>') +
    '<div class="row__when"><span class="row__time">' + esc(o.time) + '</span><span class="row__len">' + o.cls.length_min + ' min</span></div>' +
    '<p class="row__name" data-vt-title>' + esc(o.cls.name) + '</p>' +
    '<p class="row__by"><img src="' + esc(o.coach.avatar) + '" alt="" width="28" height="28" loading="lazy"><span>' + esc(o.coach.name) + ' · ' + esc(o.cls.level) + '</span></p>' +
    '<p class="row__spots">' + (o.past ? '' : (mine || bk ? '' : meterHtml(o.spotsLeft))) + '<span>' + spots + '</span>' + (isSample(o.cls, 'level') || isSample(o.cls, 'length') ? CHIP : '') + '</p>' +
    '<div class="row__act">' + act + '</div></li>';
}
function animateRows(mode, dir, before) {
  if (!motionOn() || !w.Element || !Element.prototype.animate) { return; }
  qsa('.row', sched.rows).forEach(function (r, i) {
    var id = r.getAttribute('data-occ'), old = before[id];
    try {
      if (mode === 'day') {
        r.animate([{ opacity: 0, transform: 'translateX(' + (dir * 28) + 'px)' }, { opacity: 1, transform: 'none' }], { duration: 300, delay: i * 26, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
      } else if (old !== undefined) {
        var dy = old - r.getBoundingClientRect().top;
        if (Math.abs(dy) > 1) { r.animate([{ transform: 'translateY(' + dy + 'px)' }, { transform: 'none' }], { duration: 340, easing: 'cubic-bezier(.2,.8,.2,1)' }); }
      } else {
        r.animate([{ opacity: 0, transform: 'translateY(10px) scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: 280, delay: 40 + i * 24, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
      }
    } catch (e) {}
  });
}
function renderRows(mode, dir) {
  var wk = EF.api.week(), day = wk[S.day];
  if (!day) { return; }
  var list = dayRows(S.day, S), before = {};
  if (mode === 'filter') { qsa('.row', sched.rows).forEach(function (r) { before[r.getAttribute('data-occ')] = r.getBoundingClientRect().top; }); }
  sched.rows.innerHTML = list.map(rowHtml).join('');
  sched.empty.hidden = list.length > 0;
  sched.title.textContent = (day.isToday ? 'Today, ' : '') + day.long;
  sched.count.textContent = '· ' + plural(list.length, 'class', 'classes');
  var left = day.occs.filter(function (o) { return !o.past; }).length;
  if (day.isToday && day.occs.length && !left) {
    var tmr = wk[1] && wk[1].occs[0];
    sched.done.textContent = "That's today done." + (tmr ? ' Tomorrow starts at ' + tmr.time + ' with ' + tmr.cls.name + '.' : '');
    sched.done.hidden = false;
  } else { sched.done.hidden = true; }
  if (mode === 'day' || mode === 'filter') { animateRows(mode, dir || 0, before); }
  if (EF.motion && (sched.rows.classList.contains('m-in') || mode === 'day' || mode === 'filter')) { EF.motion.fillMeters(sched.rows); }
  renderBadge();
}
function renderBadge() {
  var n = filterCount(S), b = sched.badge;
  if (b) {
    var before = b.textContent;
    b.textContent = n; b.hidden = n === 0;
    if (String(n) !== before && n > 0 && motionOn()) { b.classList.remove('is-pop'); void b.offsetWidth; b.classList.add('is-pop'); }
  }
  qsa('.fchip', sched.chips).forEach(function (c) { c.setAttribute('aria-pressed', (c.getAttribute('data-fam') || '') === S.family ? 'true' : 'false'); });
}
function firstOpenDay() {
  var wk = EF.api.week(), i;
  for (i = 0; i < wk.length; i++) { if (wk[i].occs.some(function (o) { return !o.past; })) { return i; } }
  return 0;
}
function initSchedule() {
  var box = qs('[data-schedule]');
  if (!box) { return; }
  sched = {
    box: box, days: qs('[data-days]', box), chips: qs('[data-fchips]', box), badge: qs('[data-filter-count]', box),
    title: qs('[data-day-title]', box), count: qs('[data-day-count]', box), done: qs('[data-day-done]', box),
    rows: qs('[data-rows]', box), empty: qs('[data-empty]', box), bar: qs('[data-datebar]', box)
  };
  sched.rows.id = 'sched-rows';
  sched.rows.setAttribute('data-m', 'meters');
  S.day = firstOpenDay();
  renderDays();
  renderRows('none');
  sched.days.addEventListener('click', function (e) { var b = e.target.closest('.day'); if (b) { selectDay(+b.getAttribute('data-day')); } });
  sched.days.addEventListener('keydown', function (e) {
    var k = e.key, n = EF.api.week().length, i = S.day;
    if (k === 'ArrowRight') { i = (i + 1) % n; } else if (k === 'ArrowLeft') { i = (i - 1 + n) % n; } else if (k === 'Home') { i = 0; } else if (k === 'End') { i = n - 1; } else { return; }
    e.preventDefault(); selectDay(i, true);
  });
  sched.chips.addEventListener('click', function (e) {
    var c = e.target.closest('.fchip'); if (!c) { return; }
    S.family = c.getAttribute('data-fam') || '';
    renderRows('filter');
  });
  sched.rows.addEventListener('click', function (e) {
    var t = e.target.closest('[data-book], [data-open]');
    if (t) { var id = t.getAttribute('data-book') || t.getAttribute('data-open'); openOcc(id, {}, { type: 'occ', occ: id, prefer: 'row' }); }
  });
  qsa('[data-clear-filters]').forEach(function (b) { b.addEventListener('click', function () { S.family = ''; S.coaches = []; S.times = []; S.levels = []; renderRows('filter'); }); });
  var fb = qs('[data-open-filters]', box);
  if (fb) { fb.addEventListener('click', function () { if (EF.sheet && EF.sheet.open) { openVia({ type: 'el', el: fb }, function () { EF.sheet.open('filters', {}, '?view=filters'); }); } }); }
  var rt = 0;
  w.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(moveInd, 120); });
  /* docked state of the sticky date bar */
  var sent = qs('[data-dock-sentinel]', box);
  if (sent && sched.bar && 'IntersectionObserver' in w) {
    var mk = function () {
      if (mk.io) { mk.io.disconnect(); }
      var top = mqDesk.matches ? 72 : 0;
      mk.io = new w.IntersectionObserver(function (es) { var e = es[0]; sched.bar.classList.toggle('is-docked', !e.isIntersecting && e.boundingClientRect.top < top + 2); }, { rootMargin: '-' + top + 'px 0px 0px 0px', threshold: 0 });
      mk.io.observe(sent);
    };
    mk();
    if (mqDesk.addEventListener) { mqDesk.addEventListener('change', mk); }
  }
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
    try { sec.focus({ preventScroll: true }); } catch (e) {}
  },
  state: function () { return copyF(S); }
};

function registerFilters() {
  if (!EF.sheet || !EF.sheet.register) { return; }
  EF.sheet.register('filters', function () {
    var F = copyF(S);
    return {
      label: 'Filters', progress: null, testid: 'step-filters',
      render: function (body, foot) {
        var fams = DATA.families, coaches = DATA.coaches;
        function tog(group, id, name, on, img) {
          return '<button class="tog" type="button" data-g="' + group + '" data-v="' + esc(id) + '" aria-pressed="' + (on ? 'true' : 'false') + '">' + (img ? '<img src="' + esc(img) + '" alt="" width="26" height="26">' : '') + esc(name) + '</button>';
        }
        body.innerHTML = '<div data-testid="step-filters"><h2 class="sh-title" id="sheet-title" tabindex="-1">Filters</h2>' +
          '<p class="sh-lead">For ' + esc(EF.api.week()[S.day].long) + '.</p>' +
          '<fieldset class="fgroup"><legend>Class type</legend><div class="opts">' + tog('family', '', 'All classes', !F.family) + fams.map(function (f) { return tog('family', f.id, f.name, F.family === f.id); }).join('') + '</div></fieldset>' +
          '<fieldset class="fgroup"><legend>Coach</legend><div class="opts">' + coaches.map(function (c) { return tog('coaches', c.id, c.name, F.coaches.indexOf(c.id) > -1, c.avatar); }).join('') + '</div></fieldset>' +
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
          if (g === 'family') { F.family = v; } else { var at = F[g].indexOf(v); if (at > -1) { F[g].splice(at, 1); } else { F[g].push(v); } }
          sync();
        });
        qs('[data-fclear]', foot).addEventListener('click', function () { F.family = ''; F.coaches = []; F.times = []; F.levels = []; sync(); });
        apply.addEventListener('click', function () {
          S.family = F.family; S.coaches = F.coaches; S.times = F.times; S.levels = F.levels;
          EF.sheet.close();
          renderRows('filter');
        });
        sync();
      }
    };
  });
}

/* =====================================================================
   Coaches
   ===================================================================== */
function teaches(id) {
  var names = [];
  DATA.classes.forEach(function (c) { if (c.coach === id && names.indexOf(c.name) < 0) { names.push(c.name); } });
  if (names.length < 2) { return names.join(''); }
  return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
}
function renderCoaches() {
  var box = qs('[data-coaches]');
  if (!box) { return; }
  box.innerHTML = DATA.coaches.map(function (c) {
    var nx = EF.api.coachOccs(c.id)[0];
    return '<button class="coach" type="button" data-testid="coach-' + esc(c.id) + '" data-coach="' + esc(c.id) + '">' +
      '<span class="coach__photo"><img src="' + esc(c.photo) + '" alt="' + esc(c.name + ', coach at Elite Fit') + '" width="600" height="750" loading="lazy" decoding="async"></span>' +
      '<span class="coach__text"><span class="coach__name">' + esc(c.name) + '</span>' +
      '<span class="coach__role">' + esc(c.role || ('Teaches ' + teaches(c.id))) + '</span>' +
      (nx ? '<span class="coach__next"><span class="status__dot" aria-hidden="true"></span>Next: ' + esc(dayPhrase(nx) + ' at ' + nx.time) + '</span>' : '') +
      '<span class="coach__count">' + plural(EF.api.coachWeekly(c.id), 'class', 'classes') + ' a week</span>' +
      '<span class="coach__link"><span>Meet ' + esc(c.name) + '</span> <span class="arr" aria-hidden="true">→</span></span></span></button>';
  }).join('');
  if (!box.__wired) {
    box.__wired = true;
    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-coach]');
      if (b && EF.booking && EF.booking.openCoach) { var id = b.getAttribute('data-coach'); openVia({ type: 'coach', id: id }, function () { EF.booking.openCoach(id); }); }
    });
  }
  if (EF.motion && EF.motion.scan) { EF.motion.scan(box); }
}

/* =====================================================================
   App chrome: tab bar, desktop nav scroll-spy, header CTA, badges, open status
   ===================================================================== */
var TABS = ['classes', 'schedule', 'coaches', 'visit'];
var chrome = { tab: '', pastHero: false, sheet: false };
function setTab(tab) {
  if (!tab || tab === chrome.tab) { return; }
  chrome.tab = tab;
  qsa('[data-tab-link]').forEach(function (a) { if (a.getAttribute('data-tab-link') === tab) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); } });
  moveTabInd();
  moveNav();
}
function moveTabInd() {
  var bar = qs('[data-tabbar]'), a = bar && qs('.tab[data-tab-link="' + chrome.tab + '"]', bar);
  if (!a || !a.offsetWidth) { return; }
  bar.style.setProperty('--tx', a.offsetLeft + 'px');
  bar.style.setProperty('--tw', a.offsetWidth + 'px');
  bar.classList.add('has-active');
}
function moveNav() {
  var nav = qs('[data-segnav]'), a = nav && qs('[data-tab-link="' + chrome.tab + '"]', nav), ind = nav && qs('.segnav__ind', nav);
  if (!ind || !a || !a.offsetWidth) { return; }
  ind.style.setProperty('--w', a.offsetWidth + 'px');
  ind.style.setProperty('--x', a.offsetLeft + 'px');
  nav.classList.add('has-active');
}
function bookingCount() {
  var nowMs = EF.api.now();
  return (store().bookings || []).filter(function (b) {
    if (b.waitlist) { return false; }
    var o = EF.api.occById ? EF.api.occById(b.occId) : null;
    return o ? o.start > nowMs : false;
  }).length;
}
function renderTabBadge() {
  var b = qs('[data-tab-badge]');
  if (!b) { return; }
  var n = bookingCount(), before = b.getAttribute('data-n') || '0';
  b.setAttribute('data-n', String(n));
  b.innerHTML = n ? n + '<span class="vh"> ' + (n === 1 ? 'booking' : 'bookings') + '</span>' : '';
  b.hidden = !n;
  if (n && String(n) !== before && motionOn()) { b.classList.remove('is-pop'); void b.offsetWidth; b.classList.add('is-pop'); }
}
function applyChrome() {
  var hdr = qs('#hdr'), cta = hdr && qs('.hdr__cta', hdr), bar = qs('[data-tabbar]');
  var onCta = chrome.pastHero && !chrome.sheet && mqDesk.matches;
  if (hdr) { hdr.classList.toggle('cta-on', onCta); }
  if (cta) { cta.tabIndex = onCta ? 0 : -1; cta.setAttribute('aria-hidden', onCta ? 'false' : 'true'); }
  if (bar) {
    bar.classList.toggle('is-away', chrome.sheet);
    /* phones: a Book pill joins the tab bar once the hero's own Book button has left the screen (one terracotta button per screen) */
    var book = qs('.tabbar__book', bar), onBook = chrome.pastHero && !chrome.sheet && !mqDesk.matches;
    if (book && bar.classList.contains('has-book') !== onBook) {
      bar.classList.toggle('has-book', onBook);
      book.tabIndex = onBook ? 0 : -1;
      book.setAttribute('aria-hidden', onBook ? 'false' : 'true');
      w.clearTimeout(applyChrome.t);
      moveTabInd();
      applyChrome.t = w.setTimeout(moveTabInd, 430);
    }
  }
}
function initChrome() {
  if ('IntersectionObserver' in w) {
    var spy = new w.IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { setTab(e.target.getAttribute('data-tab')); } });
    }, { rootMargin: '-42% 0px -52% 0px', threshold: 0 });
    qsa('[data-tab]').forEach(function (s) { spy.observe(s); });
    var hero = qs('#top');
    if (hero) {
      new w.IntersectionObserver(function (es) { chrome.pastHero = !es[0].isIntersecting; applyChrome(); }, { rootMargin: '-80px 0px 0px 0px' }).observe(qs('[data-testid="hero-book"]', hero) || hero);
    }
  }
  setTab('classes');
  qsa('[data-tab-link]').forEach(function (a) { a.addEventListener('click', function () { setTab(a.getAttribute('data-tab-link')); }); });
  d.addEventListener('ef:sheet', function (e) { chrome.sheet = !!(e.detail && e.detail.open); applyChrome(); });
  d.addEventListener('focusin', keepFocusVisible);
  var hdr = qs('#hdr'), ticking = false;
  w.addEventListener('scroll', function () {
    if (ticking) { return; }
    ticking = true;
    raf(function () { ticking = false; if (hdr) { hdr.classList.toggle('is-scrolled', (w.pageYOffset || 0) > 4); } });
  }, { passive: true });
  var rt = 0;
  w.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { moveNav(); applyChrome(); moveTabInd(); }, 120); });
  if (d.fonts && d.fonts.ready) { d.fonts.ready.then(function () { moveNav(); moveInd(); moveTabInd(); }); }
  applyChrome();
  renderTabBadge();
}
function openStatus() {
  var t = EF.api.wita(EF.api.now()), m = t.hh * 60 + t.mm, open = m >= 360 && m < 1320;
  var txt = open ? 'Open now · until 22:00' : 'Closed now · opens at 06:00';
  [['[data-open-status]', '[data-open-text]'], ['[data-open-status-big]', '[data-open-text-big]']].forEach(function (p) {
    var box = qs(p[0]), el = box && qs(p[1], box);
    if (!box || !el) { return; }
    el.textContent = p[0] === '[data-open-status]' ? (open ? 'Open now' : 'Closed now') : txt;
    box.classList.toggle('is-closed', !open);
    box.hidden = false;
  });
}

/* keyboard (and scripted) focus never ends up under the tab bar (bottom) or the docked date bar (top); taps are left alone */
var pointerDown = false, pendingFocus = null;
d.addEventListener('pointerdown', function () { pointerDown = true; }, true);
function pointerEnd() {
  pointerDown = false;
  if (pendingFocus) { var el = pendingFocus; pendingFocus = null; w.setTimeout(function () { if (d.activeElement === el) { keepFocusVisible({ target: el }); } }, 0); }
}
d.addEventListener('pointerup', pointerEnd, true);
d.addEventListener('pointercancel', pointerEnd, true);
function keepFocusVisible(e) {
  var el = e.target;
  if (!el || !el.getBoundingClientRect || (EF.sheet && EF.sheet.isOpen && EF.sheet.isOpen())) { return; }
  if (!qs('#page').contains(el) || (el.closest && el.closest('[data-tabbar], .appbar'))) { return; }
  var inDock = !!(el.closest && el.closest('[data-datebar]'));
  if (pointerDown) { pendingFocus = el; return; }   /* a tap: adjust after the click lands, never under the finger */
  var r = el.getBoundingClientRect(), vh = w.innerHeight || 0, dy = 0;
  var bar = qs('[data-tabbar]'), bt = vh;
  if (bar && !bar.classList.contains('is-away') && w.getComputedStyle(bar).display !== 'none') { bt = bar.getBoundingClientRect().top; }
  var top = 0, dbar = sched.bar, ap = qs('#hdr');
  if (ap && w.getComputedStyle(ap).position === 'sticky') { top = Math.max(top, ap.getBoundingClientRect().bottom); }
  if (dbar && !inDock && dbar.classList.contains('is-docked')) { top = Math.max(top, dbar.getBoundingClientRect().bottom); }
  if (r.bottom > bt - 8) { dy = r.bottom - bt + 16; }
  else if (r.top < top + 8) { dy = r.top - top - 16; }
  if (dy) {
    var de = d.documentElement, prev = de.style.scrollBehavior;
    de.style.scrollBehavior = 'auto';
    w.scrollBy(0, dy);
    de.style.scrollBehavior = prev;
  }
}

/* sheet media crop: a 16:10 frame needs the landscape focus of the family, read from its panel */
function sheetFocus() {
  var m = /[?&]class=([^&#]+)/.exec(w.location.search), sh = qs('#sheet');
  if (!sh) { return; }
  var o = m ? EF.api.occ(decodeURIComponent(m[1])) : null, p = o && qs('.panel[data-family="' + o.familyId + '"]');
  var f = p ? (p.style.getPropertyValue('--focus-m') || '').trim() : '';
  if (f) { sh.style.setProperty('--focus-sheet', f); } else { sh.style.removeProperty('--focus-sheet'); }
}

/* ---------- actions ---------- */
function initActions() {
  d.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-book-next], [data-filter-family], [data-duo-start], [data-duo-clear]') : null;
    if (!t) { return; }
    if (t.hasAttribute('data-book-next')) {
      var o = EF.api.upcoming(1)[0];
      if (o) { openOcc(o.id, store().prefJoin === 'duo' ? { join: 'duo' } : {}, { type: 'occ', occ: o.id, fromEl: t, prefer: 'ticket' }); }
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
function duoNote() { var n = qs('[data-duo-note]'); if (n) { n.hidden = store().prefJoin !== 'duo'; } }

/* after a booking: refresh behind the sheet, then play the booked state once the visitor sees the page again */
var fresh = null;
function refresh() {
  heroNext();
  renderNext();
  renderDays();
  renderRows('none');
  duoNote();
  renderTabBadge();
}
function playFresh() {
  if (!fresh) { return; }
  var f = fresh; fresh = null;
  var row = qs('[data-testid="row"][data-occ="' + f.occId + '"]');
  if (row) { row.classList.remove('is-fresh'); void row.offsetWidth; row.classList.add('is-fresh'); w.setTimeout(function () { row.classList.remove('is-fresh'); }, 1200); }
  if (!f.waitlist && EF.motion && EF.motion.roll) {
    qsa('[data-spots="' + f.occId + '"]').forEach(function (el) { var n = +el.textContent; EF.motion.roll(el, n, n + f.people); });
  }
}

/* ---------- boot ---------- */
function fail() {
  var n = qs('[data-nextup]');
  if (n) { n.innerHTML = '<p class="tickets__loading">The timetable didn\'t load. This week\'s classes are on <a href="https://elitefitbali.com/class-schedule/">elitefitbali.com/class-schedule</a>.</p>'; }
}
function boot() {
  if (!EF.api || !EF.api.load) { fail(); return; }
  EF.api.load().then(function (data) {
    DATA = data;
    bindStatic();
    initPanels();
    initVisitor();
    var nb = qs('[data-nextup]'); if (nb) { nb.setAttribute('data-m', 'meters'); }
    renderNext();
    initSchedule();
    renderCoaches();
    initChrome();
    initActions();
    duoNote();
    openStatus();
    w.setInterval(openStatus, 60000);
    if (EF.motion && EF.motion.scan) { EF.motion.scan(d.getElementById('main')); }
    if (EF.media && EF.media.sync) { EF.media.sync(); }
    d.addEventListener('ef:booked', function (e) {
      var b = e.detail && e.detail.booking;
      if (b) { fresh = { occId: b.occId, people: b.people || 1, waitlist: !!b.waitlist }; }
      refresh();
    });
    d.addEventListener('ef:sheet', function (e) {
      if (e.detail && e.detail.open) { sheetFocus(); }
      else if (fresh) { w.setTimeout(playFresh, VT.busy ? 380 : 260); }
    });
    if (/[?&]view=filters\b/.test(w.location.search) && EF.sheet && EF.sheet.open) {
      try { w.history.replaceState(null, '', w.location.pathname); } catch (e) {}
      EF.sheet.open('filters', {}, '?view=filters');
    }
  }, fail);
}
if (d.readyState === 'loading') { d.addEventListener('DOMContentLoaded', boot); } else { boot(); }
})(window, document);
