/* Elite Fit /groupfitness · Kinetic type v1 · page.js (27 Oct 2026)
   Renders and wires the page from EF.api data (shared engine, ../../v1/assets/js/api.js): visitor toggle, next up,
   numbers, class chapters, the 7-day schedule (days, family chips, filter drawer as an EF.sheet view), coaches,
   prices, sticky CTAs. Hooks follow the shared page contract so the shared booking.js and the automated checks work unchanged.
   Classic deferred script, ES5, no dependencies. */
(function (w, d) {
'use strict';
var EF = w.EF = w.EF || {};
var root = d.documentElement;

/* ---------- helpers ---------- */
function qs(s, c) { return (c || d).querySelector(s); }
function qsa(s, c) { return [].slice.call((c || d).querySelectorAll(s)); }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]; }); }
function emit(name, detail) { try { d.dispatchEvent(new CustomEvent(name, { detail: detail })); } catch (e) { } }
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
function rescan(el) { if (EF.motion && EF.motion.scan && el) { EF.motion.scan(el); } }
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
function isSample(obj, field) { return !!(obj.sample_fields && obj.sample_fields.indexOf(field) > -1) || (field === 'length' && !!obj.length_sample); }
var CHIP = ' <span class="sample">Sample</span>';
function levelHtml(cls) { return esc(cls.level) + (isSample(cls, 'level') ? CHIP : ''); }
function lengthHtml(cls) { return cls.length_min + ' min' + (isSample(cls, 'length') ? CHIP : ''); }
function arrow() { return '<span class="arr" aria-hidden="true">→</span>'; }

var DATA = null;

/* ---------- data binding ---------- */
function bindStatic() {
  var p = DATA.passes, c = DATA.club;
  var prices = { day: p.day.price_idr, duo: p.duo.price_idr, 'duo-total': p.duo.price_idr * (p.duo.people || 2), 'duo-old': p.duo.old_price_idr, recharge_day: p.recharge_day.price_idr };
  qsa('[data-price]').forEach(function (el) { var v = prices[el.getAttribute('data-price')]; if (v) { el.textContent = EF.api.k(v); } });
  qsa('[data-bind="weekly-count"]').forEach(function (el) { el.textContent = EF.api.weeklyCount(); });
  qsa('[data-bind="coach-count"]').forEach(function (el) { el.textContent = DATA.coaches.length; });
  qsa('[data-bind="class-count"]').forEach(function (el) { el.textContent = DATA.classes.length; });
  var lens = DATA.classes.map(function (k) { return k.length_min; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
  qsa('[data-bind="class-length"]').forEach(function (el) { if (lens.length === 1) { el.textContent = lens[0]; } });
  qsa('[data-bind="weekend-note"]').forEach(function (el) { el.textContent = DATA.timetable.weekend_note; });
  qsa('[data-bind="address"]').forEach(function (el) { el.textContent = c.address; });
  qsa('[data-bind="wa-link"]').forEach(function (el) { el.textContent = c.whatsapp.number; el.href = 'https://wa.me/' + c.whatsapp.wa; });
  qsa('[data-bind="wa-btn"]').forEach(function (el) { el.href = 'https://wa.me/' + c.whatsapp.wa; });
}

/* ---------- visitor toggle (first class / been before) ---------- */
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

/* ---------- next up: the start time is the hero of each card ---------- */
var nextBox, lastSpots = {};
function renderNext(roll) {
  nextBox = nextBox || qs('[data-nextup]');
  if (!nextBox) { return; }
  var list = EF.api.upcoming(3);
  if (!list.length) { nextBox.innerHTML = '<p class="nextup__loading">No classes left this week. New dates appear every day.</p>'; return; }
  nextBox.innerHTML = list.map(function (o, i) {
    var lab = dayLabel(o);
    var when = (lab === 'Today' || lab === 'Tomorrow') ? lab + ' · ' + EF.api.dateShort(o.ymd) : EF.api.dateShort(o.ymd);
    return '<button class="ncard" type="button" data-testid="next-card" data-occ="' + esc(o.id) + '" style="--i:' + i + '" aria-label="' + esc(o.cls.name + ', ' + when + ' at ' + o.time + ' with ' + o.coach.name + '. Room for ' + o.spotsLeft + ' more. Book') + '">' +
      '<span class="ncard__when">' + esc(when) + '</span>' +
      '<span class="ncard__time">' + esc(o.time) + '</span>' +
      '<span class="ncard__name">' + esc(o.cls.name) + '</span>' +
      '<span class="who"><img src="' + esc(o.coach.avatar) + '" alt="" width="36" height="36" loading="lazy">with ' + esc(o.coach.name) + '</span>' +
      '<span class="ncard__meta">' + o.cls.length_min + ' min · ' + esc(o.cls.level) + '</span>' +
      '<span class="ncard__foot"><span class="spots">Room for <span data-spots="' + esc(o.id) + '">' + (roll && lastSpots[o.id] != null ? lastSpots[o.id] : o.spotsLeft) + '</span> more' + CHIP + '</span>' +
      '<span class="fauxbtn">Book ' + arrow() + '</span></span>' +
    '</button>';
  }).join('');
  list.forEach(function (o) {
    var el = qs('[data-spots="' + o.id + '"]', nextBox);
    if (roll && el && lastSpots[o.id] != null && lastSpots[o.id] !== o.spotsLeft && EF.motion && EF.motion.roll) { EF.motion.roll(el, o.spotsLeft); }
    lastSpots[o.id] = o.spotsLeft;
  });
  qsa('.ncard', nextBox).forEach(function (b) { b.addEventListener('click', function () { openOcc(b.getAttribute('data-occ')); }); });
  rescan(nextBox.parentNode);
}

/* ---------- class chapters ---------- */
function renderChapters() {
  qsa('[data-chap-body]').forEach(function (box) {
    var fid = box.getAttribute('data-chap-body'), fam = EF.api.family(fid);
    if (!fam) { return; }
    var classes = EF.api.classesInFamily(fid), weekly = 0, coachIds = [];
    classes.forEach(function (c) { weekly += EF.api.slots(c.id).length; if (coachIds.indexOf(c.coach) < 0) { coachIds.push(c.coach); } });
    var coaches = coachIds.map(function (id) { return EF.api.coach(id); }).filter(Boolean);
    var html = '<p class="eyebrow chap__label">' + esc(fam.label) + ' · ' + esc(plural(weekly, 'class', 'classes')) + ' a week</p>' +
      '<p class="chap__feel">' + esc(fam.feel) + '</p>' +
      '<ul class="chap__meta"><li class="chip">60 min</li><li class="chip">' + esc(fam.level_line) + (isSample(fam, 'level_line') ? CHIP : '') + '</li>' +
      '<li class="chip">' + coaches.map(function (co) { return '<span class="who"><img src="' + esc(co.avatar) + '" alt="" width="28" height="28" loading="lazy">' + esc(co.name) + '</span>'; }).join(' ') + '</li></ul>' +
      '<ul class="ccards">' + classes.map(function (c) {
        var slots = EF.api.slots(c.id).map(function (s) { return s.dowShort + ' ' + s.time; }).join(', ');
        var co = EF.api.coach(c.coach), next = EF.api.occ(c.id);
        var lvl = esc(c.level) + (isSample(c, 'length') ? ' · ' + c.length_min + ' min' : '') + ((isSample(c, 'level') || isSample(c, 'length')) ? CHIP : '');
        return '<li class="ccard"><button class="ccard__hit" type="button" aria-expanded="false" aria-controls="cc-' + esc(c.id) + '">' +
          '<span class="ccard__name">' + esc(c.name) + '</span>' +
          '<span class="ccard__sub">with ' + esc(co ? co.name : '') + ' · ' + lvl + '<br>' + esc(slots) + '</span>' +
          '<span class="ccard__plus" aria-hidden="true"></span></button>' +
          '<div class="ccard__more" id="cc-' + esc(c.id) + '" inert><div><div class="ccard__in">' +
          '<p>' + (isSample(c, 'description') ? '<span class="sample">Sample text</span> ' : '') + esc(c.description) + '</p>' +
          (next ? '<button class="link-t" type="button" data-open-occ="' + esc(next.id) + '"><span>Book the next one: ' + esc(dayPhrase(next) + ' at ' + next.time) + '</span> ' + arrow() + '</button>' : '') +
          '</div></div></div></li>';
      }).join('') + '</ul>' +
      '<a class="link-t" href="#schedule" data-filter-family="' + esc(fid) + '"><span>See ' + esc(fam.name.toLowerCase()) + ' times</span> ' + arrow() + '</a>';
    box.innerHTML = html;
  });
  qsa('.ccard__hit').forEach(function (b) {
    b.addEventListener('click', function () {
      var card = b.parentNode, open = !card.classList.contains('is-open'), more = qs('.ccard__more', card);
      card.classList.toggle('is-open', open);
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (more) { if (open) { more.removeAttribute('inert'); } else { more.setAttribute('inert', ''); } }
    });
  });
  qsa('[data-open-occ]').forEach(function (b) { b.addEventListener('click', function () { openOcc(b.getAttribute('data-open-occ')); }); });
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
  var wk = EF.api.week(), bookedDays = {};
  (store().bookings || []).forEach(function (b) { bookedDays[b.ymd] = true; });
  sched.days.innerHTML = '<span class="days__ind" aria-hidden="true"></span>' + wk.map(function (day, i) {
    var sel = i === S.day;
    return '<button class="day' + (day.isToday ? ' is-today' : '') + (bookedDays[day.ymd] ? ' has-booking' : '') + '" type="button" role="tab" id="day-tab-' + i + '" data-testid="day-' + i + '" data-day="' + i + '" aria-selected="' + sel + '" aria-controls="sched-rows" tabindex="' + (sel ? 0 : -1) + '">' +
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
  var state = o.booking && !o.booking.waitlist ? "You're booked" : (o.booking && o.booking.waitlist ? 'On the waitlist' : spotsText(o));
  return '<li class="row' + (o.past ? ' is-past' : '') + (o.booking ? ' is-booked' : '') + '" data-testid="row" data-occ="' + esc(o.id) + '"' + (o.past ? ' data-past' : '') + ' style="--i:' + i + '">' +
    (o.past ? '' : '<button class="row__hit" type="button" data-open="' + esc(o.id) + '" aria-label="' + esc(label) + '"></button>') +
    '<div class="row__when"><span class="row__time">' + esc(o.time) + '</span><span class="row__len">' + lengthHtml(o.cls) + '</span></div>' +
    '<div class="row__main"><p class="row__name">' + esc(o.cls.name) + '</p>' +
    '<p class="row__by"><img src="' + esc(o.coach.avatar) + '" alt="" width="28" height="28" loading="lazy"><span>' + esc(o.coach.name) + ' · ' + levelHtml(o.cls) + '</span></p></div>' +
    '<span class="row__spots">' + esc(state) + '</span>' +
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
  if (!b) { return; }
  var before = b.textContent;
  b.textContent = n;
  b.hidden = n === 0;
  if (String(n) !== before && n > 0 && motionOn()) { b.classList.remove('is-pop'); void b.offsetWidth; b.classList.add('is-pop'); }
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
  try { if (d.fonts && d.fonts.ready) { d.fonts.ready.then(moveInd); } } catch (e) { }
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
            var on = g === 'family' ? F.family === v : F[g].indexOf(v) > -1;
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
          });
          apply.innerHTML = 'Show ' + plural(dayRows(S.day, F).length, 'class', 'classes') + ' ' + arrow();
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
          renderRows(true);
          EF.sheet.close();
        });
        sync();
      }
    };
  });
}

/* ---------- coaches: an index of giant names, portrait beside each ---------- */
function teaches(id) {
  var names = [];
  EF.api.week().forEach(function (day) { day.occs.forEach(function (o) { if (o.coach.id === id && names.indexOf(o.cls.name) < 0) { names.push(o.cls.name); } }); });
  if (names.length < 2) { return names.join(''); }
  return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
}
function renderCoaches() {
  var box = qs('[data-coaches]');
  if (!box) { return; }
  box.innerHTML = DATA.coaches.map(function (c, i) {
    return '<button class="coach" type="button" data-testid="coach-' + esc(c.id) + '" data-coach="' + esc(c.id) + '">' +
      '<span class="coach__grid">' +
      '<span class="coach__name" data-drift="' + (i % 2 ? 'l' : 'r') + '">' + esc(c.name) + '</span>' +
      '<span class="coach__text"><span class="coach__role">' + esc(c.role || ('Teaches ' + teaches(c.id))) + '</span>' +
      '<span class="coach__count">' + plural(EF.api.coachWeekly(c.id), 'class', 'classes') + ' a week</span>' +
      '<span class="coach__link"><span>Meet ' + esc(c.name) + '</span> ' + arrow() + '</span></span>' +
      '<span class="coach__photo"><img src="' + esc(c.photo) + '" alt="' + esc(c.name + ', coach at Elite Fit') + '" width="600" height="750" loading="lazy" decoding="async"></span>' +
      '</span></button>';
  }).join('');
  box.addEventListener('click', function (e) {
    var b = e.target.closest('[data-coach]');
    if (b && EF.booking && EF.booking.openCoach) { EF.booking.openCoach(b.getAttribute('data-coach')); }
  });
  rescan(box);
}

/* ---------- sticky CTAs (mobile bar, desktop header) ---------- */
function initBars() {
  var bar = qs('[data-buybar]'), hdr = qs('#hdr'), hero = qs('[data-testid="hero-book"]') || qs('#top');
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
    if (hero) { new IntersectionObserver(function (es) { st.pastHero = !es[0].isIntersecting && es[0].boundingClientRect.top < 0; apply(); }, { rootMargin: '0px 0px -' + (mqDesk.matches ? 0 : 80) + 'px 0px' }).observe(hero); }
    [['offer', '#plus-one'], ['footer', '#footer']].forEach(function (p) {
      var el = qs(p[1]);
      if (el) { new IntersectionObserver(function (es) { st.blocked[p[0]] = es[0].isIntersecting; apply(); }, { rootMargin: '0px 0px -60px 0px' }).observe(el); }
    });
  }
  d.addEventListener('ef:sheet', function (e) { st.sheet = !!(e.detail && e.detail.open); apply(); });
  d.addEventListener('focusin', function (e) { if (e.target.matches && e.target.matches('#page input, #page select, #page textarea')) { st.typing = true; apply(); } });
  /* keyboard focus never ends up under the sticky bar: nudge the page up by the overlap */
  d.addEventListener('focusin', function (e) {
    var t = e.target;
    if (!bar || !t || !t.getBoundingClientRect || st.sheet || (bar.contains && bar.contains(t)) || !(t.closest && t.closest('#page'))) { return; }
    w.requestAnimationFrame(function () {
      if (!bar.classList.contains('is-on')) { return; }
      var r = t.getBoundingClientRect(), top = bar.getBoundingClientRect().top, over = r.bottom - (top - 16);
      if (over > 0 && r.top - over > 0) { w.scrollBy(0, over); }
    });
  });
  d.addEventListener('focusout', function () { if (st.typing) { st.typing = false; apply(); } });
  var ticking = false;
  w.addEventListener('scroll', function () {
    if (ticking) { return; }
    ticking = true;
    w.requestAnimationFrame(function () { ticking = false; if (hdr) { hdr.classList.toggle('is-scrolled', (w.pageYOffset || 0) > 4); } });
  }, { passive: true });
  apply();
}

/* ---------- sheet skin: the step label as a giant numeral ("02//05") ---------- */
function initSheetNum() {
  var step = qs('#sheet [data-sheet-step]'), num = qs('#sheet [data-sheet-num]');
  if (!step || !num || !w.MutationObserver) { return; }
  var last = '';
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function paint() {
    var m = /(\d+)\D+(\d+)/.exec(step.textContent || ''), key = m ? m[1] + '/' + m[2] : '';
    if (key === last) { return; }
    last = key;
    if (!m) { num.hidden = true; num.innerHTML = ''; return; }
    num.innerHTML = pad(+m[1]) + '<i>//</i><b>' + pad(+m[2]) + '</b>';
    num.hidden = false;
    num.classList.remove('is-new'); void num.offsetWidth; num.classList.add('is-new');
  }
  new w.MutationObserver(paint).observe(step, { childList: true, characterData: true, subtree: true });
  paint();
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
    renderNext(false);
    renderChapters();
    initSchedule();
    renderCoaches();
    initBars();
    initSheetNum();
    initActions();
    duoNote();
    rescan(d.getElementById('main'));
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
