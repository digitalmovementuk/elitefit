/* Elite Fit /groupfitness · Editorial · page.js (27 Oct 2026)
   Renders and wires this variant from the shared data (EF.api): visitor toggle, next up, the four class features,
   the week (printed timetable from 1200 px, date strip + list below), the filter drawer (an EF.sheet view), coaches,
   prices, sticky CTAs. Booking itself is the shared engine (../../v1/assets/js/booking.js, unchanged).
   Hooks and test ids follow the shared page contract. Classic deferred script, ES5, no dependencies. */
(function (w, d) {
'use strict';
var EF = w.EF = w.EF || {};
var root = d.documentElement;

/* ---------- helpers ---------- */
function qs(s, c) { return (c || d).querySelector(s); }
function qsa(s, c) { return [].slice.call((c || d).querySelectorAll(s)); }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
function emit(name, detail) { try { d.dispatchEvent(new CustomEvent(name, { detail: detail })); } catch (e) { } }
function mq(q) { try { return w.matchMedia(q); } catch (e) { return { matches: false, addListener: function () {} }; } }
function onMq(m, fn) { if (m.addEventListener) { m.addEventListener('change', fn); } else if (m.addListener) { m.addListener(fn); } }
var mqDesk = mq('(min-width: 1024px)');
var mqTable = mq('(min-width: 1200px)');
function motionOn() { return root.classList.contains('motion-ok'); }
function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
function store() { try { return (EF.api && EF.api.store && EF.api.store.get()) || {}; } catch (e) { return {}; } }
function storeSet(p) { try { if (EF.api && EF.api.store) { EF.api.store.set(p); } } catch (e) { } }
function scrollToEl(el) {
  if (!el) { return; }
  try { el.scrollIntoView({ behavior: motionOn() ? 'smooth' : 'auto', block: 'start' }); } catch (e) { el.scrollIntoView(); }
}
function openOcc(id, opts) { if (EF.booking && EF.booking.open && id) { EF.booking.open(id, opts || {}); } }
function dayPhrase(occ) { return occ.dayIndex === 0 ? 'today' : (occ.dayIndex === 1 ? 'tomorrow' : EF.api.dateShort(occ.ymd)); }
function dayLabel(occ) { return occ.dayIndex === 0 ? 'Today' : (occ.dayIndex === 1 ? 'Tomorrow' : EF.api.dateShort(occ.ymd).split(' ')[0]); }
function spotsText(occ) {
  if (occ.past) { return 'Finished'; }
  if (occ.full) { return 'Full · waitlist open'; }
  return 'Room for ' + occ.spotsLeft + ' more';
}
function isSample(cls, field) { return !!(cls.sample_fields && cls.sample_fields.indexOf(field) > -1) || (field === 'length' && !!cls.length_sample); }
var CHIP = ' <span class="sample">Sample</span>';
function levelHtml(cls) { return esc(cls.level) + (isSample(cls, 'level') ? CHIP : ''); }
function lengthHtml(cls) { return cls.length_min + ' min' + (isSample(cls, 'length') ? CHIP : ''); }
/* One Sample chip per row or card, at its end, instead of one per field */
function plainLevel(cls) { return esc(cls.level); }
function plainLength(cls) { return cls.length_min + ' min'; }
function rowSample(cls) { return isSample(cls, 'level') || isSample(cls, 'length'); }
function scanMotion(el) { try { if (EF.motion && EF.motion.scan) { EF.motion.scan(el); } } catch (e) { } }

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
function setVisitor(v, save) {
  var note = qs('[data-visitor-note]');
  if (note && !NOTES._read) { NOTES.first = note.textContent.trim() || NOTES.first; NOTES.returning = note.getAttribute('data-note-returning') || NOTES.returning; NOTES._read = true; }
  qsa('[data-visitor]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-visitor') === v ? 'true' : 'false'); });
  if (note) { note.textContent = NOTES[v] || NOTES.first; }
  if (save) { storeSet({ visitor: v }); emit('ef:visitor', { visitor: v }); }
}
function initVisitor() {
  setVisitor(store().visitor === 'returning' ? 'returning' : 'first', false);
  qsa('[data-visitor]').forEach(function (b) { b.addEventListener('click', function () { setVisitor(b.getAttribute('data-visitor'), true); }); });
}

/* ---------- 01 next up: three hairline rows ---------- */
var nextBox = null, lastSpots = {};
function renderNext(roll) {
  nextBox = nextBox || qs('[data-nextup]');
  if (!nextBox) { return; }
  var list = EF.api.upcoming(3);
  if (!list.length) { nextBox.innerHTML = '<p class="nextup__loading">No classes left this week. New dates appear every day.</p>'; return; }
  nextBox.innerHTML = list.map(function (o, i) {
    var when = dayLabel(o) + (o.dayIndex < 2 ? ' · ' + EF.api.dateShort(o.ymd) : ' ' + EF.api.dateShort(o.ymd).split(' ').slice(1).join(' '));
    var n = roll && lastSpots[o.id] != null ? lastSpots[o.id] : o.spotsLeft;
    return '<button class="ncard" type="button" data-testid="next-card" data-occ="' + esc(o.id) + '" style="--i:' + i + '" aria-label="' + esc(o.cls.name + ', ' + when + ' at ' + o.time + ' with ' + o.coach.name + '. Room for ' + o.spotsLeft + ' more. Book') + '">' +
      '<span class="ncard__when">' + esc(when) + '</span>' +
      '<span class="ncard__time">' + esc(o.time) + '</span>' +
      '<span class="ncard__main"><span class="ncard__name">' + esc(o.cls.name) + '</span>' +
      '<span class="ncard__meta"><span class="who"><img src="' + esc(o.coach.avatar) + '" alt="" width="28" height="28" loading="lazy">with ' + esc(o.coach.name) + '</span><span>' + plainLength(o.cls) + '</span><span>' + plainLevel(o.cls) + '</span></span></span>' +
      '<span class="ncard__foot"><span class="spots">Room for <span data-spots="' + esc(o.id) + '">' + n + '</span> more' + CHIP + '</span>' +
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

/* ---------- 02 the four features ---------- */
function renderFeatures() {
  qsa('[data-feat-body]').forEach(function (box) {
    var fid = box.getAttribute('data-feat-body'), fam = EF.api.family(fid);
    if (!fam) { return; }
    var classes = EF.api.classesInFamily(fid), weekly = 0, coachIds = [];
    classes.forEach(function (c) { weekly += EF.api.slots(c.id).length; if (coachIds.indexOf(c.coach) < 0) { coachIds.push(c.coach); } });
    var coaches = coachIds.map(function (id) { return EF.api.coach(id); }).filter(Boolean);
    var lvlSample = fam.sample_fields && fam.sample_fields.indexOf('level_line') > -1;
    var html = '<p class="eyebrow feat__label" data-rule><span>' + esc(fam.label) + '</span><span>' + plural(weekly, 'class', 'classes') + ' a week</span></p>' +
      '<h3 class="feat__name" data-lines>' + esc(fam.name) + '</h3>' +
      '<p class="feat__feel">' + esc(fam.feel) + '</p>' +
      '<ul class="feat__meta"><li>60 min</li><li>' + esc(fam.level_line) + (lvlSample ? CHIP : '') + '</li><li>' +
        coaches.map(function (co) { return '<span class="who"><img src="' + esc(co.avatar) + '" alt="" width="28" height="28" loading="lazy">' + esc(co.name) + '</span>'; }).join(' ') + '</li></ul>' +
      '<ol class="cidx">' + classes.map(function (c) {
        var slots = EF.api.slots(c.id).map(function (s) { return s.dowShort + ' ' + s.time; }).join(', ');
        var co = EF.api.coach(c.coach), next = EF.api.occ(c.id);
        var lvl = plainLevel(c) + (isSample(c, 'length') ? ' · ' + plainLength(c) : '');
        return '<li class="cidx__row" data-rule><button class="cidx__hit" type="button" aria-expanded="false" aria-controls="cx-' + esc(c.id) + '">' +
          '<span class="cidx__name">' + esc(c.name) + '</span>' +
          '<span class="cidx__sub">with ' + esc(co ? co.name : '') + ' · ' + lvl + '<br>' + esc(slots) + (rowSample(c) ? CHIP : '') + '</span>' +
          '<span class="cidx__plus" aria-hidden="true"></span></button>' +
          '<div class="cidx__more" id="cx-' + esc(c.id) + '" inert><div><div class="cidx__in">' +
          '<p>' + (isSample(c, 'description') ? '<span class="sample">Sample text</span>' : '') + esc(c.description) + '</p>' +
          (next ? '<button class="link-t" type="button" data-open-occ="' + esc(next.id) + '"><span>Book the next one: ' + esc(dayPhrase(next) + ' at ' + next.time) + '</span> <span aria-hidden="true">→</span></button>' : '') +
          '</div></div></div></li>';
      }).join('') + '</ol>' +
      '<a class="link-t" href="#schedule" data-filter-family="' + esc(fid) + '"><span>See ' + esc(fam.name.toLowerCase()) + ' times</span> <span aria-hidden="true">→</span></a>';
    box.innerHTML = html;
  });
  qsa('.cidx__hit').forEach(function (b) {
    b.addEventListener('click', function () {
      var row = b.parentNode, open = !row.classList.contains('is-open');
      row.classList.toggle('is-open', open);
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      var more = qs('.cidx__more', row);
      if (more) { if (open) { more.removeAttribute('inert'); } else { more.setAttribute('inert', ''); } }
    });
  });
  qsa('[data-open-occ]').forEach(function (b) { b.addEventListener('click', function () { openOcc(b.getAttribute('data-open-occ')); }); });
}

/* ---------- 03 the week ---------- */
var S = { day: 0, family: '', coaches: [], times: [], levels: [] };
var sched = {};
var mode = '';
var TIMES = [
  { id: 'morning', name: 'Morning, before 12:00', band: 'Morning', sub: 'Before 12:00', test: function (t) { return t < '12:00'; } },
  { id: 'afternoon', name: 'Afternoon, from 12:00', band: 'Afternoon', sub: 'From 12:00', test: function (t) { return t >= '12:00' && t < '17:00'; } },
  { id: 'evening', name: 'Evening, from 17:00', band: 'Evening', sub: 'From 17:00', test: function (t) { return t >= '17:00'; } }
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
function weekRows(f) { var n = 0; EF.api.week().forEach(function (day) { n += day.occs.filter(function (o) { return matches(o, f); }).length; }); return n; }
function stateOf(o) {
  if (o.booking && !o.booking.waitlist) { return { spots: "You're booked", act: 'Booked', aria: 'Booked: ' }; }
  if (o.booking && o.booking.waitlist) { return { spots: 'On the waitlist', act: 'On the list', aria: 'On the waitlist: ' }; }
  if (o.full) { return { spots: 'Full · waitlist open', act: 'Join waitlist', aria: 'Join waitlist for ' }; }
  return { spots: 'Room for ' + o.spotsLeft + ' more', act: 'Book', aria: 'Book ' };
}

/* list (phones and tablets) */
/* Both modes share one day control (shared page contract: [data-days] with day-0 … day-6, [data-day-title], [data-day-count],
   [data-day-done]); "row" / "row-book" always mean the selected day's classes.
   Phones and tablets: the date strip and the list.
   1200 px and up: the same 7 day tabs sit on top of a printed 7-column timetable; the selected day's column is marked
   and its classes are the rows. Every other class in the week stays bookable from its cell. */
function dayControlHtml() {
  return '<div class="days" role="tablist" aria-label="Pick a day" data-days></div>';
}
function dayMetaHtml() {
  return '<div class="sched__day" aria-live="polite"><h3 class="sched__date" data-day-title>This week</h3><p class="sched__count" data-day-count></p></div>' +
    '<p class="sched__done" data-day-done hidden></p>';
}
function bindDays() {
  sched.days.addEventListener('click', function (e) { var b = e.target.closest('.day'); if (b) { selectDay(+b.getAttribute('data-day')); } });
  sched.days.addEventListener('keydown', function (e) {
    var k = e.key, n = EF.api.week().length, i = S.day;
    if (k === 'ArrowRight') { i = (i + 1) % n; } else if (k === 'ArrowLeft') { i = (i - 1 + n) % n; } else if (k === 'Home') { i = 0; } else if (k === 'End') { i = n - 1; } else { return; }
    e.preventDefault(); selectDay(i, true);
  });
}
function grabShell() {
  sched.days = qs('[data-days]', sched.view);
  sched.title = qs('[data-day-title]', sched.view);
  sched.count = qs('[data-day-count]', sched.view);
  sched.done = qs('[data-day-done]', sched.view);
  bindDays();
}
function listShell() {
  sched.view.innerHTML = dayControlHtml() + dayMetaHtml() + '<ol class="rows" data-rows id="sched-rows" aria-label="Classes"></ol>';
  grabShell();
  sched.rows = qs('[data-rows]', sched.view);
  sched.tt = null;
  sched.rows.addEventListener('click', function (e) { var t = e.target.closest('[data-book], [data-open]'); if (t) { openOcc(t.getAttribute('data-book') || t.getAttribute('data-open')); } });
}
function tableShell() {
  sched.view.innerHTML = dayMetaHtml() + '<div class="tt-days">' + dayControlHtml() + '</div><div class="tt-wrap" data-tt data-rows id="sched-rows"></div>';
  grabShell();
  sched.rows = null;
  sched.tt = qs('[data-tt]', sched.view);
  sched.tt.addEventListener('click', function (e) { var t = e.target.closest('[data-book]'); if (t) { openOcc(t.getAttribute('data-book')); } });
}
function renderDays() {
  var wk = EF.api.week(), booked = {};
  (store().bookings || []).forEach(function (b) { booked[b.ymd] = true; });
  sched.days.innerHTML = '<span class="days__ind" aria-hidden="true"></span>' + wk.map(function (day, i) {
    var sel = i === S.day;
    return '<button class="day' + (day.isToday ? ' is-today' : '') + (booked[day.ymd] ? ' has-booking' : '') + '" type="button" role="tab" id="day-tab-' + i + '" data-testid="day-' + i + '" data-day="' + i + '" aria-selected="' + sel + '" aria-controls="sched-rows" tabindex="' + (sel ? 0 : -1) + '">' +
      '<span class="day__dow">' + esc(day.isToday ? 'Today' : day.dowShort) + '</span><span class="day__num">' + day.dayNum + '</span><span class="day__mon" aria-hidden="true">' + esc(day.monthShort) + '</span><span class="vh">, ' + esc(day.long + ', ' + plural(day.occs.length, 'class', 'classes')) + '</span><span class="day__dot" aria-hidden="true"></span></button>';
  }).join('');
  moveInd();
}
function moveInd() {
  if (!sched.days) { return; }
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
  if (mode === 'table') { renderTable(false); flashCol(i); } else { renderRows(true); }
}
function renderDayMeta(count) {
  var wk = EF.api.week(), day = wk[S.day];
  if (!day || !sched.title) { return; }
  sched.title.textContent = (day.isToday ? 'Today, ' : '') + day.long;
  sched.count.textContent = plural(count, 'class', 'classes');
  var left = day.occs.filter(function (o) { return !o.past; }).length;
  if (day.isToday && day.occs.length && !left) {
    var tmr = wk[1] && wk[1].occs[0];
    sched.done.textContent = "That's today done." + (tmr ? ' Tomorrow starts at ' + tmr.time + ' with ' + tmr.cls.name + '.' : '');
    sched.done.hidden = false;
  } else { sched.done.hidden = true; }
}
function lrHtml(o, i) {
  var st = stateOf(o), act;
  if (o.past) { act = '<span class="row__label">Finished</span>'; }
  else { act = '<button class="rbtn' + (o.booking && !o.booking.waitlist ? ' rbtn--booked' : '') + '" type="button" data-testid="row-book" data-book="' + esc(o.id) + '" aria-label="' + esc(st.aria + o.cls.name + ' at ' + o.time) + '">' + esc(st.act) + '</button>'; }
  return '<li class="lr' + (o.past ? ' is-past' : '') + (o.booking ? ' is-booked' : '') + '" data-testid="row" data-occ="' + esc(o.id) + '"' + (o.past ? ' data-past' : '') + ' style="--i:' + i + '">' +
    (o.past ? '' : '<button class="lr__hit" type="button" data-open="' + esc(o.id) + '" aria-label="' + esc(o.cls.name + ', ' + o.time + ' with ' + o.coach.name + '. ' + st.spots + '. See details') + '" tabindex="-1"></button>') +
    '<p class="lr__time">' + esc(o.time) + '<span class="lr__len">' + plainLength(o.cls) + '</span></p>' +
    '<p class="lr__name">' + esc(o.cls.name) + '</p>' +
    '<div class="lr__act">' + act + '</div>' +
    '<p class="lr__by"><img src="' + esc(o.coach.avatar) + '" alt="" width="28" height="28" loading="lazy"><span>' + esc(o.coach.name) + '</span><span aria-hidden="true">·</span><span>' + plainLevel(o.cls) + '</span></p>' +
    '<p class="lr__spots">' + esc(o.past ? 'Finished' : st.spots) + CHIP + '</p></li>';
}
var swapTimer = 0;
function renderRows(animate) {
  var wk = EF.api.week(), day = wk[S.day];
  if (!day || !sched.rows) { return; }
  var list = dayRows(S.day, S);
  var draw = function () {
    sched.rows.innerHTML = list.map(lrHtml).join('');
    if (animate && motionOn()) { qsa('.lr', sched.rows).forEach(function (r) { r.classList.add('is-enter'); }); }
    sched.rows.classList.remove('is-swapping');
    sched.empty.hidden = list.length > 0;
    qs('p', sched.empty).textContent = 'Nothing matches on this day. Try another day or clear the filters.';
    renderDayMeta(list.length);
  };
  clearTimeout(swapTimer);
  if (animate && motionOn()) { sched.rows.classList.add('is-swapping'); swapTimer = setTimeout(draw, 160); } else { draw(); }
  renderBadge();
}

/* timetable (1200 px and up): 7 day columns × 3 bands; the selected day's entries are the shared page-contract rows */
function tcHtml(o, i, sel) {
  var st = stateOf(o), rowId = sel ? 'row' : 'tt-cell', btnId = sel ? 'row-book' : 'tt-book';
  if (o.past) {
    return '<li class="tc is-past" data-testid="' + rowId + '" data-occ="' + esc(o.id) + '" data-past><span class="tc__time">' + esc(o.time) + '</span><span class="tc__name">' + esc(o.cls.name) + '</span><span class="tc__by">' + esc(o.coach.name) + ' · ' + plainLength(o.cls) + '</span><span class="tc__spots">Finished</span></li>';
  }
  return '<li class="tc' + (o.booking && !o.booking.waitlist ? ' tc--booked' : '') + '" data-testid="' + rowId + '" data-occ="' + esc(o.id) + '" style="--i:' + Math.min(i, 12) + '">' +
    '<button class="tc__hit" type="button" id="tc-' + esc(o.id) + '" data-testid="' + btnId + '" data-book="' + esc(o.id) + '" aria-label="' + esc(st.aria + o.cls.name + ', ' + dayLabel(o) + ' at ' + o.time + ' with ' + o.coach.name + '. ' + st.spots) + '">' +
    '<span class="tc__time">' + esc(o.time) + '</span>' +
    '<span class="tc__name">' + esc(o.cls.name) + '</span>' +
    '<span class="tc__by">' + esc(o.coach.name) + ' · ' + plainLength(o.cls) + '</span>' +
    '<span class="tc__lvl">' + plainLevel(o.cls) + '</span>' +
    '<span class="tc__spots">' + esc(st.spots) + '</span>' +
    '<span class="tc__act">' + esc(st.act) + (o.booking ? '' : ' <span aria-hidden="true">→</span>') + '</span>' +
    '</button></li>';
}
function renderTable(animate) {
  var wk = EF.api.week(), total = 0, n = 0;
  if (!sched.tt) { return; }
  var bands = S.times.length ? TIMES.filter(function (t) { return S.times.indexOf(t.id) > -1; }) : TIMES;
  var head = '<thead class="tt__head"><tr><th scope="col" class="tt__corner"><span class="vh">Time of day</span></th>' + wk.map(function (day, i) {
    return '<th scope="col" data-col="' + i + '"' + (i === S.day ? ' class="is-sel"' : '') + '><span class="vh">' + esc((day.isToday ? 'Today, ' : '') + day.long) + '</span></th>';
  }).join('') + '</tr></thead>';
  var body = '<tbody>' + bands.map(function (b) {
    return '<tr><th scope="row" class="tt__band"><b>' + esc(b.band) + '</b><span>' + esc(b.sub) + '</span></th>' + wk.map(function (day, i) {
      var occs = day.occs.filter(function (o) { return b.test(o.time) && matches(o, S); });
      total += occs.length;
      return '<td data-col="' + i + '"' + (i === S.day ? ' class="is-sel"' : '') + '>' + (occs.length ? '<ul class="tt__list">' + occs.map(function (o) { return tcHtml(o, n++, i === S.day); }).join('') + '</ul>' : '<span class="tt__none"><span aria-hidden="true">—</span><span class="vh">No classes</span></span>') + '</td>';
    }).join('') + '</tr>';
  }).join('') + '</tbody>';
  var draw = function () {
    sched.tt.innerHTML = '<table class="tt" data-testid="timetable"><caption class="tt__cap"><span class="vh">Classes for the next seven days, by day and time of day. </span><span class="sample">Sample</span> Spots, waitlists and most levels in this grid are sample data.</caption>' + head + body + '</table>';
    if (animate && motionOn()) { qsa('.tc', sched.tt).forEach(function (r) { r.classList.add('is-enter'); }); }
    sched.empty.hidden = dayRows(S.day, S).length > 0;
    qs('p', sched.empty).textContent = total ? 'Nothing matches on this day. Pick another day in the timetable or clear the filters.' : 'Nothing matches this week. Clear the filters to see every class.';
    sched.tt.style.opacity = '';
    renderDayMeta(dayRows(S.day, S).length);
  };
  clearTimeout(swapTimer);
  if (animate && motionOn() && sched.tt.firstChild) { sched.tt.style.transition = 'opacity .16s linear'; sched.tt.style.opacity = '0'; swapTimer = setTimeout(draw, 160); } else { draw(); }
  renderBadge();
}
function flashCol(i) {
  if (!sched.tt) { return; }
  qsa('td[data-col="' + i + '"]', sched.tt).forEach(function (td) { td.classList.remove('is-flash'); void td.offsetWidth; td.classList.add('is-flash'); });
}
function renderSchedule(animate) {
  renderDays();
  if (mode === 'table') { renderTable(animate); } else { renderRows(animate); }
}
function setMode() {
  var m = mqTable.matches ? 'table' : 'list';
  if (m === mode) { return; }
  mode = m;
  if (mode === 'list') { listShell(); } else { tableShell(); }
  renderSchedule(false);
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
  var wk = EF.api.week(), i;
  for (i = 0; i < wk.length; i++) { if (wk[i].occs.some(function (o) { return !o.past; })) { return i; } }
  return 0;
}
function initSchedule() {
  var box = qs('[data-schedule]');
  if (!box) { return; }
  sched = { box: box, view: qs('[data-sched-view]', box), chips: qs('[data-fchips]', box), badge: qs('[data-filter-count]', box), empty: qs('[data-empty]', box) };
  S.day = firstOpenDay();
  setMode();
  onMq(mqTable, function () { setMode(); });
  sched.chips.addEventListener('click', function (e) {
    var c = e.target.closest('.fchip'); if (!c) { return; }
    S.family = c.getAttribute('data-fam') || '';
    renderSchedule(true);
  });
  qsa('[data-clear-filters]').forEach(function (b) { b.addEventListener('click', function () { S.family = ''; S.coaches = []; S.times = []; S.levels = []; renderSchedule(true); }); });
  var fb = qs('[data-open-filters]', box);
  if (fb) { fb.addEventListener('click', function () { if (EF.sheet && EF.sheet.open) { EF.sheet.open('filters', {}, '?view=filters'); } }); }
  var rt = 0;
  w.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(moveInd, 120); });
  registerFilters();
}
EF.schedule = {
  show: function (o) {
    o = o || {};
    if (!sched.view) { return; }
    if (o.ymd) { EF.api.week().forEach(function (day, i) { if (day.ymd === o.ymd) { S.day = i; } }); }
    if (o.family != null) { S.family = o.family; }
    renderBadge();
    selectDay(S.day);
    var sec = d.getElementById('schedule');
    scrollToEl(sec);
    try { sec.focus({ preventScroll: true }); } catch (e) { }
  },
  state: function () { var s = copyF(S); s.mode = mode; return s; }
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
        var scope = 'For ' + esc(EF.api.week()[S.day].long) + (mode === 'table' ? ', and the rest of the week in the timetable.' : '.');
        body.innerHTML = '<div data-testid="step-filters"><h2 class="sh-title" id="sheet-title" tabindex="-1">Filters</h2>' +
          '<p class="sh-lead">' + scope + '</p>' +
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
          var n = dayRows(S.day, F).length;
          apply.innerHTML = 'Show ' + plural(n, 'class', 'classes') + (mode === 'table' ? ' <span class="apply__wk">· ' + weekRows(F) + ' this week</span>' : '') + ' <span class="arr" aria-hidden="true">→</span>';
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
          renderSchedule(true);
          EF.sheet.close();
        });
        sync();
      }
    };
  });
}

/* ---------- 04 coaches ---------- */
function teaches(id) {
  var names = [];
  DATA.classes.forEach(function (c) { if (c.coach === id && names.indexOf(c.name) < 0) { names.push(c.name); } });
  if (names.length < 2) { return names.join(''); }
  return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
}
function renderCoaches() {
  var box = qs('[data-coaches]');
  if (!box) { return; }
  box.innerHTML = DATA.coaches.map(function (c, i) {
    return '<button class="coach" type="button" data-testid="coach-' + esc(c.id) + '" data-coach="' + esc(c.id) + '" style="--i:' + i + '">' +
      '<span class="coach__photo"><img src="' + esc(c.photo) + '" alt="' + esc(c.name + ', coach at Elite Fit') + '" width="600" height="750" loading="lazy" decoding="async"><span class="coach__n" aria-hidden="true">0' + (i + 1) + '</span></span>' +
      '<span class="coach__name">' + esc(c.name) + '</span>' +
      '<span class="coach__role">' + esc(c.role || ('Teaches ' + teaches(c.id))) + '</span>' +
      '<span class="coach__count">' + plural(EF.api.coachWeekly(c.id), 'class', 'classes') + ' a week</span>' +
      '<span class="link-t coach__link"><span>Meet ' + esc(c.name) + '</span> <span aria-hidden="true">→</span></span></button>';
  }).join('');
  box.addEventListener('click', function (e) {
    var b = e.target.closest('[data-coach]');
    if (b && EF.booking && EF.booking.openCoach) { EF.booking.openCoach(b.getAttribute('data-coach')); }
  });
  scanMotion(box.parentNode);
}

/* ---------- sticky CTAs (phone bar, desktop masthead) ---------- */
function initBars() {
  var bar = qs('[data-buybar]'), hdr = qs('#hdr'), hero = qs('[data-testid="hero-book"]');
  var barBtn = bar && qs('button', bar), hdrBtn = hdr && qs('.hdr__cta', hdr);
  var st = { pastHero: false, blocked: {}, sheet: false, typing: false };
  function apply() {
    var blocked = st.blocked.offer || st.blocked.footer;
    var onBar = st.pastHero && !blocked && !st.sheet && !st.typing;
    var onHdr = st.pastHero && !st.sheet;
    if (bar) { bar.classList.toggle('is-on', onBar); bar.setAttribute('aria-hidden', onBar ? 'false' : 'true'); if (barBtn) { barBtn.tabIndex = onBar ? 0 : -1; } }
    if (hdr) { hdr.classList.toggle('cta-on', onHdr); if (hdrBtn) { hdrBtn.tabIndex = onHdr ? 0 : -1; hdrBtn.setAttribute('aria-hidden', onHdr ? 'false' : 'true'); } }
  }
  if ('IntersectionObserver' in w) {
    if (hero) { new IntersectionObserver(function (es) { st.pastHero = !es[0].isIntersecting && es[0].boundingClientRect.top < 0; apply(); }, { rootMargin: '-60px 0px 0px 0px' }).observe(hero); }
    [['offer', '#plus-one'], ['footer', '#footer']].forEach(function (p) {
      var el = qs(p[1]);
      if (el) { new IntersectionObserver(function (es) { st.blocked[p[0]] = es[0].isIntersecting; apply(); }, { rootMargin: '0px 0px -60px 0px' }).observe(el); }
    });
  }
  d.addEventListener('ef:sheet', function (e) { st.sheet = !!(e.detail && e.detail.open); apply(); });
  d.addEventListener('focusin', function (e) { if (e.target.matches && e.target.matches('#page input, #page select, #page textarea')) { st.typing = true; apply(); } });
  d.addEventListener('focusout', function () { if (st.typing) { st.typing = false; apply(); } });
  apply();
  /* the masthead scrolls away with the cover, then slides back in as a sticky masthead */
  var bar0 = qs('.conceptbar'), limit = 0, tick = false;
  function measure() { limit = (bar0 ? bar0.offsetHeight : 0) + (hdr ? hdr.offsetHeight : 0); }
  function stick() { tick = false; if (hdr) { hdr.classList.toggle('is-stuck', (w.pageYOffset || 0) > limit); } }
  measure(); stick();
  w.addEventListener('scroll', function () { if (!tick) { tick = true; (w.requestAnimationFrame || setTimeout)(stick); } }, { passive: true });
  w.addEventListener('resize', function () { measure(); stick(); });
}

/* ---------- actions ---------- */
function duoNote() { var n = qs('[data-duo-note]'); if (n) { n.hidden = store().prefJoin !== 'duo'; } }
function initActions() {
  d.addEventListener('click', function (e) {
    var t = e.target.closest('[data-book-next], [data-filter-family], [data-duo-start], [data-duo-clear]');
    if (!t) { return; }
    if (t.hasAttribute('data-book-next')) {
      var o = EF.api.upcoming(1)[0];
      if (o) { openOcc(o.id, store().prefJoin === 'duo' ? { join: 'duo' } : {}); }
    } else if (t.hasAttribute('data-filter-family')) {
      e.preventDefault();
      EF.schedule.show({ family: t.getAttribute('data-filter-family') });
    } else if (t.hasAttribute('data-duo-start')) {
      storeSet({ prefJoin: 'duo' }); duoNote(); EF.schedule.show({});
    } else if (t.hasAttribute('data-duo-clear')) {
      storeSet({ prefJoin: null }); duoNote();
    }
  });
}

/* ---------- editorial sheet skin: the engine writes "Step 2 of 5"; the skin also shows it as a folio "02//05" ---------- */
function initSheetSkin() {
  var st = qs('[data-sheet-step]');
  if (!st || !w.MutationObserver) { return; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function apply() {
    var m = /Step (\d+) of (\d+)/i.exec(st.textContent || '');
    if (m) { st.setAttribute('data-n', pad(+m[1])); st.setAttribute('data-m', pad(+m[2])); }
    else { st.removeAttribute('data-n'); st.removeAttribute('data-m'); }
  }
  new w.MutationObserver(apply).observe(st, { childList: true, characterData: true, subtree: true });
  apply();
}

function refresh() { renderNext(true); renderSchedule(false); duoNote(); }

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
    renderNext(false);
    renderFeatures();
    initSchedule();
    renderCoaches();
    initBars();
    initActions();
    initSheetSkin();
    duoNote();
    scanMotion(d.getElementById('main'));
    if (EF.media && EF.media.scan) { EF.media.scan(d); }
    d.addEventListener('ef:booked', refresh);
    if (/[?&]view=filters\b/.test(w.location.search) && EF.sheet && EF.sheet.open) {
      try { w.history.replaceState(null, '', w.location.pathname); } catch (e) { }
      EF.sheet.open('filters', {}, '?view=filters');
    }
  }, fail);
}
if (d.readyState === 'loading') { d.addEventListener('DOMContentLoaded', boot); } else { boot(); }
})(window, document);
