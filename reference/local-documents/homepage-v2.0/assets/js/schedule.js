/* ==========================================================================
   Elite Fit Bali — homepage v2.1 — schedule.js (the Today strip)
   Version: v2.1 — 2026-10-01 · owner: lane E2 (v2.0 by lane L3)
   Classic deferred script, one IIFE, window.EFSchedule. Sets state attributes
   (data-selected, data-now, data-next, data-past, data-peek, data-state,
   data-ready) and emits the CONTRACT section 6 events:
     ef:schedule:render   { date }
     ef:schedule:nownext  { nowId, nextId }
   Reads EFApi.getSchedule({ date, days: 7 }), EFApi.now(), EFApi.baliParts().
   Nothing is sent anywhere. Prices are never touched. Spec: SECTIONS section 3.
   v2.1 (lane E2) adds the schedule's own motion, transform and opacity only,
   only under html.motion-ok, timing from the --e2-* tokens in schedule.css:
   the day switch slides the cards in from the chosen side (no empty frame),
   cards travel to their new slot when a class ends or the full day opens or
   closes, the "Next" status counts down within the hour (motion.js rolls the
   digits), the class on now carries its progress (--e2-p). Closing the full
   day keeps the toggle under the finger for every visitor (not motion).
   v2.1 (2026-10-02, avatars lane): each card carries the coach's round face
   (avatar() below); the cards are still built here, once per day switch.
   v2.1 (2026-10-02, next-class job): every card of today carries its own
   countdown in the status line (upcoming "Starts in 2 h 05 min", under the
   hour "Starts in 38 min", running "42 min left", over "Finished"; other days:
   none), and card() fills #hero-next (partials/hero.html), the first-view
   card: the class on now, else the next one, else the first of the following
   day, from the same week data (no second fetch). One clock: the existing
   tick, now every 30 s (it also runs when the tab comes back). Tapping the
   card selects that day and marks the class (data-hit) before the jump.
   Change log: v2.1 — 2026-10-02 — countdown on every card of today, first-view card, 30 s tick; v2.1 — 2026-10-02 — coach avatar added; v2.1 — 2026-10-01 — lane E2 additions above; v1.0 — L3.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.getElementById('today');
  if (!root) return;

  // ---- constants ---------------------------------------------------------
  var DAYS = 7;
  var DOW_LONG = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var DOW_SHORT = ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // The live schedule calls Martijn Taken "Tinos" (BRAND-NOTES 7); the page says Martijn.
  // v2.1: the club timetable (schedule.club.json) carries trainer = the club's body-copy
  // spelling ("Ain", "Tinos") and trainerPublished = the timetable capitals ("AIN", "TINOS").
  // The strip uses trainer through this alias, so it matches the coaches section (Ain, Martijn Taken).
  var TRAINER_ALIAS = { Tinos: 'Martijn' };
  // MOCK: the club publishes no seats (GymMaster login only); api.js still invents spotsLeft and
  // capacity for the concept. v2.1 real-data preview: off, so no card shows a seat number, and no
  // row, count, state, countdown or motion depends on seats. This switch is the single place.
  var SHOW_SPOTS = false;
  var FULL_TIMETABLE = 'https://elitefitbali.com/class-schedule/';

  // ---- elements (all exist in the partial) ---------------------------------
  var dateLine = root.querySelector('.sched__date');
  var tablist = root.querySelector('.sched__days');
  var panel = root.querySelector('.sched__rail');
  var list = root.querySelector('.sched__list');
  var emptyBox = root.querySelector('.sched__empty');
  var weekendNote = root.querySelector('.sched__note:not(.sched__note--done)');
  var doneNote = root.querySelector('.sched__note--done');
  var moreBtn = root.querySelector('.sched__more');
  var srStatus = root.querySelector('#sched-status');
  if (!dateLine || !tablist || !panel || !list || !moreBtn) return;

  // ---- state ---------------------------------------------------------------
  var state = {
    week: null,          // { days: [{ date, dow, classes }] }
    today: null,         // YYYY-MM-DD, Bali
    selected: null,      // YYYY-MM-DD
    open: false,         // list data-state = open
    nowId: null,
    nextId: null,
    items: [],           // [{ c, li, s, e, state }]
    timer: null
  };

  // ---- small helpers ---------------------------------------------------------
  function api() { return window.EFApi; }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function toMin(hhmm) { var p = String(hhmm).split(':'); return (+p[0]) * 60 + (+p[1]); }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : many); }
  function hm(m) { return m < 60 ? m + ' min' : Math.floor(m / 60) + ' h ' + (m % 60 < 10 ? '0' : '') + m % 60 + ' min'; }
  function emit(name, detail) {
    document.dispatchEvent(new CustomEvent(name, { detail: detail }));
  }

  // ---- v2.1 motion (lane E2): transform and opacity, html.motion-ok only ----------
  function moving() { return document.documentElement.classList.contains('motion-ok') && !!list.animate; }
  function tok(n) { return getComputedStyle(list).getPropertyValue('--e2-' + n).trim(); }
  function ms(n) { return parseFloat(tok(n)) || 0; }
  function shown(li) { var b = li.getBoundingClientRect(); return b.height && b.top < innerHeight && b.bottom > 0 ? b : null; }
  // Before a layout change: remember where every card is (null = not displayed).
  function snap() { state.items.forEach(function (r) { var b = r.li.getBoundingClientRect(); r.li._r = b.height ? b : null; }); }
  // After it: every card on screen that was displayed before travels from its old box (FLIP).
  // Cards that only now appear are revealed by motion.js (data-m), never twice.
  function flip() {
    if (!moving()) return;
    state.items.forEach(function (r) {
      var a = r.li._r, b = shown(r.li);
      if (!a || !b || Math.abs(a.top - b.top) + Math.abs(a.left - b.left) < 2) return;
      // a travelling card passes over the card fading in at its new neighbour slot, never under it
      var s = r.li.style;
      s.zIndex = 1;
      r.li.animate([{ transform: 'translate(' + (a.left - b.left) + 'px,' + (a.top - b.top) + 'px)' }, { transform: 'none' }],
        { duration: ms('move'), easing: tok('ease') }).onfinish = function () { s.zIndex = ''; };
    });
  }
  // 1024–1279 px with six or seven classes the rail scrolls sideways: keep the class on now
  // (else next, else the last) of today in view, any other day from its first class.
  function inRail(smooth) {
    var it = state.items, t = it[0];
    if (!t || panel.scrollWidth <= panel.clientWidth + 1) return;
    if (state.selected === state.today) {
      t = it[it.length - 1];
      it.some(function (r) { if (r.state === 'now' || r.state === 'next') { t = r; return true; } });
    }
    panel.scrollTo({ left: t.li.getBoundingClientRect().left - panel.getBoundingClientRect().left + panel.scrollLeft - 16,
      behavior: smooth && moving() ? 'smooth' : 'instant' });
  }
  // Day switch: the new day's cards slide in from the side of the chosen day, in that
  // direction's order, starting at --e2-from opacity, so no frame is ever empty.
  // Replaces the generic entrance motion.js starts on ef:schedule:render for these cards.
  function swap(dir) {
    if (!moving()) return;
    // a day without classes: its message box arrives the same way
    var on = state.items.length ? state.items.map(function (r) { return r.li; }).filter(shown) : [emptyBox];
    if (dir < 0) on.reverse();
    on.forEach(function (li, i) {
      li.getAnimations().forEach(function (a) { a.cancel(); });
      var o = +getComputedStyle(li).opacity;
      li.animate([{ opacity: o * tok('from'), transform: 'translateX(' + dir * ms('dist') + 'px)' }, { opacity: o, transform: 'none' }],
        { duration: ms('swap'), delay: i * ms('step'), easing: tok('ease'), fill: 'backwards' });
    });
  }

  // Bali is UTC+8 all year (no DST). EFApi.baliParts is preferred, this is the fallback.
  function baliNow() {
    var a = api();
    var d = a && a.now ? a.now() : new Date();
    if (a && a.baliParts) {
      var p = a.baliParts(d);
      return { ymd: p.ymd, hhmm: p.hhmm, dow: p.dow };
    }
    var b = new Date(d.getTime() + 8 * 3600 * 1000);
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return {
      ymd: b.getUTCFullYear() + '-' + pad(b.getUTCMonth() + 1) + '-' + pad(b.getUTCDate()),
      hhmm: pad(b.getUTCHours()) + ':' + pad(b.getUTCMinutes()),
      dow: b.getUTCDay() === 0 ? 7 : b.getUTCDay()
    };
  }

  function dowOf(ymd) {
    var p = ymd.split('-');
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])).getUTCDay();
    return d === 0 ? 7 : d;
  }
  function longDate(ymd, dow) {
    var p = ymd.split('-');
    return DOW_LONG[dow || dowOf(ymd)] + ' ' + (+p[2]) + ' ' + MONTH[+p[1] - 1];
  }
  function dayByDate(ymd) {
    var days = (state.week && state.week.days) || [];
    for (var i = 0; i < days.length; i++) if (days[i].date === ymd) return days[i];
    return null;
  }

  // ---- classification: past / now / next / later + the closed-state peek -------
  // Pure function, exposed for tests. isToday=false: no markers, the first two are the peek.
  function classify(classes, isToday, nowMin) {
    var out = classes.slice().sort(function (a, b) { return toMin(a.start) - toMin(b.start); }).map(function (c) {
      return { c: c, s: toMin(c.start), e: toMin(c.end), state: 'later', peek: false };
    });
    var i, nextIdx = -1, nows = [];
    if (!isToday) {
      for (i = 0; i < out.length; i++) out[i].peek = i < 2;
      return { rows: out, nowIdx: -1, nextIdx: -1, allDone: false };
    }
    for (i = 0; i < out.length; i++) {
      var o = out[i];
      if (o.e <= nowMin) o.state = 'past';
      else if (o.s <= nowMin) { o.state = 'now'; nows.push(i); }
      else if (nextIdx < 0) { nextIdx = i; o.state = 'next'; }
    }
    if (nows.length) {
      nows.forEach(function (n) { out[n].peek = true; });
      if (nextIdx >= 0) out[nextIdx].peek = true;
    } else if (nextIdx >= 0) {
      out[nextIdx].peek = true;
      if (out[nextIdx + 1]) out[nextIdx + 1].peek = true;
    } else if (out.length) {
      // every class is done: show the last two, greyed, with the "last class" note
      out[out.length - 1].peek = true;
      if (out[out.length - 2]) out[out.length - 2].peek = true;
    }
    return {
      rows: out,
      nowIdx: nows.length ? nows[0] : -1,
      nextIdx: nextIdx,
      allDone: out.length > 0 && nows.length === 0 && nextIdx < 0,
      at: nowMin           // v2.1: minutes since Bali midnight, for the countdown and the progress line
    };
  }

  // ---- building DOM -----------------------------------------------------------
  function trainerName(c) { return TRAINER_ALIAS[c.trainer] || c.trainer || ''; }

  // v2.1 coach avatar: a 96 px face crop (assets/img/avatar-<name>.webp) for the coaches with a
  // portrait, an initials circle for any other name. The image folder comes from the static
  // fallback's own avatar src, so a template-part that rewrites asset paths keeps working.
  var FACES = ['ain', 'rey', 'icha', 'martijn'];
  var sample = root.querySelector('img.sched__avatar');
  var IMG = sample ? sample.getAttribute('src').replace(/[^\/]*$/, '') : 'assets/img/';
  function avatar(name) {
    var k = name.split(' ')[0].toLowerCase(), a;
    if (FACES.indexOf(k) < 0) {
      a = el('span', 'sched__avatar sched__avatar--init', name.replace(/(\S)\S*\s*/g, '$1').slice(0, 2).toUpperCase());
      a.setAttribute('aria-hidden', 'true');
      return a;
    }
    a = el('img', 'sched__avatar');
    a.width = a.height = 96;
    a.alt = '';
    a.loading = 'lazy';
    a.decoding = 'async';
    a.src = IMG + 'avatar-' + k + '.webp';
    return a;
  }

  function buildItem(row) {
    var c = row.c;
    var li = el('li', 'sched__item');
    li.setAttribute('data-motion', 'lift');
    li.setAttribute('data-motion-item', '');
    li.setAttribute('data-id', c.id);
    li.setAttribute('data-start', c.start);
    li.setAttribute('data-end', c.end);
    li.appendChild(el('p', 'sched__status label'));
    li.appendChild(el('p', 'sched__time num num--m', c.start + '–' + c.end));
    if (trainerName(c)) li.appendChild(avatar(trainerName(c)));
    li.appendChild(el('h3', 'sched__name', c.title));
    var meta = el('div', 'sched__meta');
    meta.appendChild(el('p', 'sched__coach', trainerName(c) ? 'with ' + trainerName(c) : ''));
    var spots = el('p', 'sched__spots');
    // MOCK: spotsLeft is invented by api.js (the club publishes none), shown only while SHOW_SPOTS is true.
    if (SHOW_SPOTS && c.bookable !== false && typeof c.spotsLeft === 'number') {
      spots.textContent = c.spotsLeft > 0 ? plural(c.spotsLeft, 'spot', 'spots') + ' left' : 'Full';
    } else {
      spots.hidden = true;
    }
    meta.appendChild(spots);
    li.appendChild(meta);
    row.li = li;
    return li;
  }

  // Sets the state attributes on the cards already in the DOM. Used by render and by
  // the once-a-minute tick, so a tick never rebuilds a card (no focus or scroll loss).
  function applyStates(info) {
    var rows = info.rows;
    rows.forEach(function (row) {
      var li = row.li;
      var st = row.state;
      ['now', 'next', 'past'].forEach(function (k) {
        if (st === k) li.setAttribute('data-' + k, 'true'); else li.removeAttribute('data-' + k);
      });
      if (row.peek) li.setAttribute('data-peek', 'true'); else li.removeAttribute('data-peek');
      if (st === 'now') li.setAttribute('aria-current', 'time'); else li.removeAttribute('aria-current');

      // v2.1: the status line is rebuilt only when its kind changes, so the live dot keeps
      // breathing and the countdown digits roll in place (motion.js, [data-motion~="clock"]).
      // Today: Next / Now / Finished plus the card's own countdown; other days: nothing.
      var status = li.querySelector('.sched__status'), at = info.at;
      var kind = at == null ? 0 : st;
      var txt = !kind || kind === 'past' ? '' : st === 'now' ? row.e - at + ' min left' : 'in ' + hm(row.s - at);   // "Starts " is its own span (CSS drops it on a narrow card)
      if (li._k !== kind) {
        li._k = kind;
        clear(status);
        status.classList.toggle('sched__status--live', st === 'now');
        if (st === 'now') {
          var dot = el('span', 'sched__dot');
          dot.setAttribute('aria-hidden', 'true');
          status.appendChild(dot);
          status.appendChild(document.createTextNode('Now'));
        } else if (kind) {
          status.textContent = st === 'next' ? 'Next' : st === 'past' ? 'Finished' : '';
        }
        if (txt) {
          li._n = el('span', 'sched__in');
          li._n.setAttribute('data-motion', 'clock');
          if (st !== 'now') li._n.appendChild(el('span', 'sched__pre', 'Starts '));
          li._n.appendChild(document.createTextNode(''));
          status.appendChild(li._n);
        }
      }
      if (txt && li._n.lastChild.data !== txt) li._n.lastChild.data = txt;
      // the class on now: share of its hour gone, drawn by schedule.css 8.2
      if (st === 'now') li.style.setProperty('--e2-p', ((info.at - row.s) / (row.e - row.s)).toFixed(3));
      // Spots only make sense for classes that can still be booked.
      var sp = li.querySelector('.sched__spots');
      if (sp) {
        var has = SHOW_SPOTS && row.c.bookable !== false && typeof row.c.spotsLeft === 'number';
        sp.hidden = !(has && (st === 'next' || st === 'later'));
      }
    });
    state.items = rows;

    var nowId = info.nowIdx >= 0 ? rows[info.nowIdx].c.id : null;
    var nextId = info.nextIdx >= 0 ? rows[info.nextIdx].c.id : null;
    var changed = nowId !== state.nowId || nextId !== state.nextId;
    state.nowId = nowId;
    state.nextId = nextId;

    if (doneNote) doneNote.hidden = !info.allDone;
    updateToggle(rows);
    return changed;
  }

  function updateToggle(rows) {
    var total = rows.length;
    var peek = rows.filter(function (r) { return r.peek; }).length;
    var isToday = state.selected === state.today;
    // Nothing more to reveal: hide the toggle, the list is already the whole day.
    moreBtn.hidden = total === 0 || peek >= total;
    list.setAttribute('data-state', state.open ? 'open' : 'closed');
    moreBtn.setAttribute('aria-expanded', state.open ? 'true' : 'false');
    moreBtn.textContent = state.open
      ? (isToday ? 'Now and next only' : 'First two only')
      : 'Full day (' + plural(total, 'class', 'classes') + ')';
  }

  function showMessage(text, withLink) {
    list.hidden = true;
    clear(emptyBox);
    emptyBox.appendChild(el('span', null, text));
    if (withLink) {
      var a = el('a', null, 'Full timetable');
      a.href = FULL_TIMETABLE;
      a.target = '_blank';
      a.rel = 'noopener';
      emptyBox.appendChild(a);
    }
    emptyBox.hidden = false;
  }

  // ---- render the selected day ---------------------------------------------------
  function renderDay(ymd, announce) {
    var day = dayByDate(ymd);
    var nowP = baliNow();
    var isToday = ymd === state.today;
    var dow = day ? day.dow : dowOf(ymd);
    var classes = (day && day.classes) || [];

    state.selected = ymd;
    var p = ymd.split('-');

    // eyebrow: "Today · Thursday 1 Oct" (today) or "Friday 2 Oct"
    clear(dateLine);
    var t = el('time', null, longDate(ymd, dow));
    t.setAttribute('datetime', ymd);
    if (isToday) dateLine.appendChild(document.createTextNode('Today · '));
    dateLine.appendChild(t);

    // tabs
    var tabs = tablist.querySelectorAll('[role="tab"]');
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i].getAttribute('data-date') === ymd;
      tabs[i].setAttribute('aria-selected', on ? 'true' : 'false');
      tabs[i].tabIndex = on ? 0 : -1;
      if (on) {
        tabs[i].setAttribute('data-selected', 'true');
        panel.setAttribute('aria-labelledby', tabs[i].id);
      } else {
        tabs[i].removeAttribute('data-selected');
      }
    }

    // weekend note (Sat/Sun)
    if (weekendNote) weekendNote.hidden = !(dow === 6 || dow === 7);

    // empty day
    if (!classes.length) {
      state.items = [];
      state.nowId = state.nextId = null;
      if (doneNote) doneNote.hidden = true;
      moreBtn.hidden = true;
      showMessage((isToday ? 'No classes today.' : 'No classes this day.') + ' The gym floor is open 6:00–22:00.', false);
      finishRender(ymd, announce, 0);
      return;
    }

    emptyBox.hidden = true;
    list.hidden = false;

    var info = classify(classes, isToday, toMin(nowP.hhmm));
    clear(list);
    info.rows.forEach(function (row) { list.appendChild(buildItem(row)); });
    state.nowId = state.nextId = undefined;   // force "changed" below
    applyStates(info);
    finishRender(ymd, announce, info.rows.length);
  }

  function finishRender(ymd, announce, count) {
    root.setAttribute('data-ready', 'true');
    if (announce && srStatus) {
      srStatus.textContent = longDate(ymd) + ': ' + (count ? plural(count, 'class', 'classes') : 'no classes');
    }
    emit('ef:schedule:render', { date: ymd });
    emit('ef:schedule:nownext', { nowId: state.nowId || null, nextId: state.nextId || null });
  }

  function select(ymd, announce) {
    if (!ymd || !dayByDate(ymd)) return false;
    var from = state.selected;   // ISO dates compare as strings: later day = from the right
    renderDay(ymd, announce !== false);
    centreSelected();
    inRail(false);
    if (announce !== false && from && from !== ymd) swap(ymd > from ? 1 : -1);
    return true;
  }

  // On very narrow phones the seven tabs scroll: keep the selected one in the middle.
  function centreSelected() {
    if (tablist.scrollWidth <= tablist.clientWidth + 1) return;
    var tab = tablist.querySelector('[aria-selected="true"]');
    if (!tab) return;
    tablist.scrollLeft = tab.offsetLeft - (tablist.clientWidth - tab.offsetWidth) / 2;
  }

  // ---- tabs --------------------------------------------------------------------------
  function buildTabs(days, todayYmd) {
    clear(tablist);
    days.forEach(function (d) {
      var b = el('button', 'chip', DOW_SHORT[d.dow] || DOW_SHORT[dowOf(d.date)]);
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.id = 'sched-tab-' + d.date;
      b.setAttribute('aria-selected', 'false');
      b.setAttribute('aria-controls', 'sched-panel');
      b.setAttribute('aria-label', longDate(d.date, d.dow) + (d.date === todayYmd ? ', today' : ''));
      b.setAttribute('data-date', d.date);
      b.tabIndex = -1;
      tablist.appendChild(b);
    });
    tablist.hidden = false;
  }

  tablist.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[role="tab"]') : null;
    if (b && b.getAttribute('data-date')) select(b.getAttribute('data-date'));
  });
  tablist.addEventListener('keydown', function (e) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    var n = null;
    if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = tabs.length - 1;
    if (n === null) return;
    e.preventDefault();
    tabs[n].focus();
    select(tabs[n].getAttribute('data-date'));
  });

  // ---- toggle: the full day in one tap ----------------------------------------------------
  // v2.1: closing keeps the toggle where the finger is (v2.0 left the visitor below the
  // strip); then the cards that stay travel to their new slots (motion only).
  moreBtn.addEventListener('click', function () {
    var y = moreBtn.getBoundingClientRect().top;
    snap();
    state.open = !state.open;
    updateToggle(state.items);
    if (!state.open) window.scrollBy({ top: moreBtn.getBoundingClientRect().top - y, behavior: 'instant' });
    flip();
  });

  // ---- first-view card (#hero-next) -------------------------------------------------------------
  // The class on now, else the next one today, else the first one of the following day (any day
  // of the week data), whichever day is selected below. Without data the markup's calm
  // "Today's classes" card stays. Same data as the strip, no second fetch.
  var nc = document.getElementById('hero-next');
  function put(k, t) { var n = nc.querySelector('.nc__' + k); if (n.textContent !== t) n.textContent = t; }
  function card(nowP) {
    var days = state.week.days, at = toMin(nowP.hhmm), i, d, u, n, f;
    for (i = 0; i < days.length && !u; i++) {
      d = days[i];
      if (d.date >= nowP.ymd) u = classify(d.classes, d.date === nowP.ymd, at).rows.filter(function (r) { return r.state !== 'past'; })[0];
    }
    if (!u) return;
    n = Math.round((Date.parse(d.date) - Date.parse(nowP.ymd)) / 864e5);   // 0 today, 1 tomorrow
    var c = u.c, who = trainerName(c), live = u.state === 'now';
    nc.setAttribute('data-state', live ? 'now' : n ? 'tomorrow' : 'next');
    put('when', (live ? 'Now' : n > 1 ? DOW_SHORT[d.dow] : n ? 'Tomorrow' : 'Next') + ' · ' + c.start);
    put('name', c.title);
    put('sub', who ? 'with ' + who : '');
    put('in', live ? u.e - at + ' min left' : n ? '' : 'Starts in ' + hm(u.s - at));   // another day: the start time says enough
    nc.style.setProperty('--e2-p', live ? ((at - u.s) / (u.e - u.s)).toFixed(3) : 0);
    if (nc._i !== c.id) {
      f = nc.querySelector('.nc__face');
      clear(f);
      if (who) f.appendChild(avatar(who));
      nc._i = c.id;
      nc._d = d.date;
    }
  }
  // Tap: that day is selected and the class is marked for a moment, then the page jumps to #today.
  if (nc) nc.addEventListener('click', function () {
    if (!nc._i) return;
    if (nc._d !== state.selected) select(nc._d, false);
    var li = list.querySelector('[data-id="' + nc._i + '"]');
    if (li) {
      li.setAttribute('data-hit', '');
      setTimeout(function () { li.removeAttribute('data-hit'); }, 2400);
    }
  });

  // ---- tick: every 30 s, and when the tab comes back -------------------------------------------------
  function tick() {
    var nowP = baliNow();
    if (state.today && nowP.ymd !== state.today) { init(true); return; }   // Bali midnight: new week
    if (nc && state.week) card(nowP);
    if (state.selected !== state.today || !state.items.length) return;
    var classes = state.items.map(function (r) { return r.c; });
    var info = classify(classes, true, toMin(nowP.hhmm));
    // reuse the existing cards: classify sorts, rows keep the same order as state.items
    var byId = {};
    state.items.forEach(function (r) { byId[r.c.id] = r.li; });
    info.rows.forEach(function (r) { r.li = byId[r.c.id]; });
    snap();
    if (applyStates(info)) {
      emit('ef:schedule:nownext', { nowId: state.nowId || null, nextId: state.nextId || null });
      inRail(true);
    }
    flip();   // a class ended: the closed list moves up one slot instead of jumping
  }
  function startTimer() {
    if (state.timer) { clearTimeout(state.timer); clearInterval(state.timer); }
    // align to the next half minute, then every 30 s
    state.timer = setTimeout(function () {
      tick();
      state.timer = setInterval(tick, 30000);
    }, 30000 - (Date.now() % 30000) + 50);
  }
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) tick();
  });

  // ---- init ------------------------------------------------------------------------------------------
  function fail() {
    state.items = [];
    tablist.hidden = true;
    moreBtn.hidden = true;
    if (weekendNote) weekendNote.hidden = true;
    if (doneNote) doneNote.hidden = true;
    var nowP = baliNow();
    clear(dateLine);
    var t = el('time', null, longDate(nowP.ymd, nowP.dow));
    t.setAttribute('datetime', nowP.ymd);
    dateLine.appendChild(document.createTextNode('Today · '));
    dateLine.appendChild(t);
    showMessage('Timetable unavailable right now.', true);
    root.setAttribute('data-ready', 'error');
  }

  function init(keepState) {
    var a = api();
    if (!a || typeof a.getSchedule !== 'function') {
      console.warn('[EFSchedule] EFApi.getSchedule is missing, showing the fallback message.');
      fail();
      return;
    }
    var nowP = baliNow();
    state.today = nowP.ymd;
    if (!keepState) state.open = false;
    var req;
    try { req = a.getSchedule({ date: nowP.ymd, days: DAYS }); } catch (e) { fail(); return; }
    Promise.resolve(req).then(function (data) {
      var days = data && data.days;
      if (!days || !days.length) { fail(); return; }
      state.week = data;
      buildTabs(days, nowP.ymd);
      select(dayByDate(nowP.ymd) ? nowP.ymd : days[0].date, false);
      if (nc) card(nowP);
      startTimer();
    }).catch(function (err) {
      if (window.console) console.warn('[EFSchedule] could not render the timetable:', err);
      fail();
    });
  }

  window.EFSchedule = {
    version: '1.0',
    select: function (ymd) { return select(ymd, true); },
    refresh: tick,
    state: function () {
      return { today: state.today, selected: state.selected, open: state.open, nowId: state.nowId, nextId: state.nextId };
    },
    _classify: classify
  };

  init(false);
})();
