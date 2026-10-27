/* Elite Fit /groupfitness · Kinetic type v1 · motion.js (27 Oct 2026)
   EF.motion: split-word line reveals, enter-view reveals (rise, stagger, mask), count-up numbers, the class-name
   marquee, the scroll-linked type drift fallback and the spot odometer.
   - Gate: html.motion-ok (set in <head>; off for prefers-reduced-motion and Save-Data). Without it nothing is
     hidden, nothing moves, numbers are static and the marquee is a wrapped list.
   - Scroll-linked drift uses CSS scroll-driven animations when html.sdt is set (animation-timeline: view()).
     Otherwise (Safari before 26, Firefox) an IntersectionObserver keeps a list of the drifting words near the
     screen and one passive scroll handler writes --p (0..1) on those only.
   - Native scroll only: no wheel or touch handlers, no snapping, no pinning. Reveals take 0.46 s or less.
   Classic deferred script, ES5, one IIFE. */
(function (w, d) {
'use strict';
var EF = w.EF = w.EF || {};
if (EF.motion) { return; }

var root = d.documentElement;
var ON = root.classList.contains('motion-ok');
var SDT = root.classList.contains('sdt');
var HAS_IO = 'IntersectionObserver' in w;
var raf = w.requestAnimationFrame ? function (f) { return w.requestAnimationFrame(f); } : function (f) { return w.setTimeout(f, 16); };
function qsa(sel, ctx) { try { return Array.prototype.slice.call((ctx || d).querySelectorAll(sel)); } catch (e) { return []; } }
function clamp(v) { return v < 0 ? 0 : (v > 1 ? 1 : v); }

/* ---------- split words ---------- */
function splitEl(el) {
  if (el.__efSplit) { return; }
  el.__efSplit = true;
  /* the words become inline-blocks; keep one clean accessible name for the heading */
  if (!el.hasAttribute('aria-label')) { el.setAttribute('aria-label', String(el.textContent).replace(/\s+/g, ' ').trim()); }
  var n = 0;
  function walk(node) {
    var kids = Array.prototype.slice.call(node.childNodes), i, k, parts, frag, j, p, a, b;
    for (i = 0; i < kids.length; i++) {
      k = kids[i];
      if (k.nodeType === 3) {
        if (!/\S/.test(k.nodeValue)) { continue; }
        parts = k.nodeValue.split(/(\s+)/);
        frag = d.createDocumentFragment();
        for (j = 0; j < parts.length; j++) {
          p = parts[j];
          if (!p) { continue; }
          if (/^\s+$/.test(p)) { frag.appendChild(d.createTextNode(' ')); continue; }
          a = d.createElement('span'); a.className = 'w';
          b = d.createElement('span'); b.className = 'wi'; b.style.setProperty('--i', Math.min(n++, 6)); b.textContent = p;
          a.appendChild(b); frag.appendChild(a);
        }
        node.replaceChild(frag, k);
      } else if (k.nodeType === 1 && !/\b(w|wi|sample)\b/.test(k.className || '') && k.getAttribute('aria-hidden') !== 'true') {
        walk(k);
      }
    }
  }
  walk(el);
}

/* ---------- enter-view reveals ---------- */
var io = null;
if (ON && HAS_IO) {
  io = new w.IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) { entries[i].target.classList.add('m-in'); io.unobserve(entries[i].target); }
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
}
function observe(el) {
  if (el.__efMo) { return; }
  el.__efMo = true;
  if (!io) { el.classList.add('m-in'); return; }
  io.observe(el);
}
function stagger(el) { var k = el.children, i; for (i = 0; i < k.length; i++) { k[i].style.setProperty('--i', Math.min(i, 3)); } }

/* ---------- count-up (real numbers only; the final value is already in the HTML) ---------- */
var cio = null;
if (ON && HAS_IO) {
  cio = new w.IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) { cio.unobserve(entries[i].target); count(entries[i].target); }
    }
  }, { threshold: 0.5 });
}
function count(el) {
  /* skim-first: start at 70 % of the real value, never show a number above it, settle in 0.4 s; fast scroll jumps to the end */
  var target = parseInt(String(el.textContent).replace(/\D/g, ''), 10);
  if (!isFinite(target) || target <= 0 || root.classList.contains('m-fast')) { return; }
  var from = Math.ceil(target * 0.7), t0 = null, dur = 400;
  if (from >= target) { return; }
  function frame(t) {
    if (t0 === null) { t0 = t; }
    var k = clamp((t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    if (k >= 1 || root.classList.contains('m-fast')) { el.textContent = String(target); return; }
    el.textContent = String(Math.min(target, Math.ceil(from + (target - from) * e)));
    raf(frame);
  }
  el.textContent = String(from);
  raf(frame);
}

/* ---------- scroll-linked drift fallback ---------- */
var drifters = [], live = [], dio = null, ticking = false;
function driftP(el, vh) {
  var mode = el.getAttribute('data-drift'), r;
  if (mode === 'xl' || mode === 'xr') { return clamp((w.pageYOffset || 0) / (0.9 * vh)); }
  r = el.getBoundingClientRect();
  if (mode === 'il' || mode === 'ir') { return clamp((vh - r.top) / Math.max(1, r.height)); }
  return clamp((vh - r.top) / (vh + r.height));
}
function driftUpdate() {
  ticking = false;
  var vh = w.innerHeight || root.clientHeight, i;
  for (i = 0; i < live.length; i++) { live[i].style.setProperty('--p', driftP(live[i], vh).toFixed(4)); }
}
function driftTick() { if (!ticking) { ticking = true; raf(driftUpdate); } }
if (ON && !SDT && HAS_IO) {
  dio = new w.IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var el = entries[i].target, at = live.indexOf(el);
      if (entries[i].isIntersecting && at < 0) { live.push(el); }
      else if (!entries[i].isIntersecting && at > -1) { live.splice(at, 1); }
    }
    driftTick();
  }, { rootMargin: '25% 0px 25% 0px' });
  w.addEventListener('scroll', driftTick, { passive: true });
  w.addEventListener('resize', driftTick);
}
function observeDrift(el) {
  if (!dio || el.__efDr) { return; }
  el.__efDr = true;
  drifters.push(el);
  dio.observe(el);
}

/* ---------- fast scroll: reveals finish quickly (skim-first) ---------- */
(function () {
  if (!ON) { return; }
  var lastY = w.pageYOffset || 0, lastT = Date.now(), timer = 0;
  w.addEventListener('scroll', function () {
    var y = w.pageYOffset || 0, t = Date.now(), v = Math.abs(y - lastY) / Math.max(1, t - lastT);
    lastY = y; lastT = t;
    if (v > 2.5) {
      root.classList.add('m-fast');
      w.clearTimeout(timer);
      timer = w.setTimeout(function () { root.classList.remove('m-fast'); }, 400);
    }
  }, { passive: true });
})();

/* ---------- marquee of the real class names ---------- */
function initMarquee() {
  var box = d.querySelector('[data-marquee]');
  if (!box || !ON) { return; }
  var track = box.querySelector('[data-marquee-track]'), list = box.querySelector('[data-marquee-list]'), btn = box.querySelector('[data-marquee-pause]');
  if (!track || !list) { return; }
  var copy = list.cloneNode(true);
  copy.removeAttribute('data-marquee-list');
  copy.setAttribute('aria-hidden', 'true');
  track.appendChild(copy);
  function setDur() {
    var width = list.getBoundingClientRect().width, speed = (w.innerWidth || 0) < 760 ? 42 : 64;
    if (width > 0) { track.style.setProperty('--marq-dur', Math.max(24, width / speed).toFixed(1) + 's'); }
  }
  setDur();
  try { if (d.fonts && d.fonts.ready) { d.fonts.ready.then(setDur); } } catch (e) {}
  var rt = 0;
  w.addEventListener('resize', function () { w.clearTimeout(rt); rt = w.setTimeout(setDur, 200); });
  box.classList.add('marq--run');
  if (btn) {
    btn.addEventListener('click', function () {
      var paused = !box.classList.contains('is-paused');
      box.classList.toggle('is-paused', paused);
      btn.setAttribute('aria-pressed', paused ? 'true' : 'false');
      btn.setAttribute('aria-label', (paused ? 'Play' : 'Pause') + ' the class names');
    });
  }
  if (HAS_IO) {
    new w.IntersectionObserver(function (es) { box.classList.toggle('is-off', !es[0].isIntersecting); }, { rootMargin: '10% 0px 10% 0px' }).observe(box);
  }
}

/* ---------- odometer for the spot counter ---------- */
function roll(el, n) {
  var s = String(n);
  if (!el) { return; }
  if (!ON) { el.textContent = s; return; }
  var old = String(el.textContent || '').replace(/\D/g, '') || s;
  if (old === s) { el.textContent = s; return; }
  var wrap = d.createElement('span'), i, col, a, b, len = Math.max(old.length, s.length);
  wrap.className = 'odo'; wrap.setAttribute('aria-hidden', 'true');
  var pOld = new Array(len - old.length + 1).join(' ') + old, pNew = new Array(len - s.length + 1).join(' ') + s;
  for (i = 0; i < len; i++) {
    col = d.createElement('span'); col.className = 'odo__col';
    a = d.createElement('span'); a.textContent = pOld.charAt(i) === ' ' ? '' : pOld.charAt(i);
    b = d.createElement('span'); b.textContent = pNew.charAt(i) === ' ' ? '' : pNew.charAt(i);
    col.appendChild(a); col.appendChild(b); wrap.appendChild(col);
  }
  var label = d.createElement('span'); label.className = 'vh'; label.textContent = s;
  el.textContent = '';
  el.appendChild(label); el.appendChild(wrap);
  void wrap.offsetWidth;
  raf(function () { var cols = wrap.children, j; for (j = 0; j < cols.length; j++) { if (pOld.charAt(j) !== pNew.charAt(j)) { cols[j].style.transform = 'translateY(-1.25em)'; } } });
  w.setTimeout(function () { if (el.contains(wrap)) { el.textContent = s; } }, 480);
}

/* ---------- scan ---------- */
function scan(ctx) {
  ctx = ctx && ctx.nodeType ? ctx : d;
  qsa('[data-split]', ctx).forEach(function (el) { if (ON) { splitEl(el); } observe(el); });
  qsa('[data-motion]', ctx).forEach(function (el) {
    var t = el.getAttribute('data-motion') || '';
    if (/\bstagger\b/.test(t)) { stagger(el); }
    observe(el);
  });
  if (cio) { qsa('[data-count]', ctx).forEach(function (el) { if (!el.__efCo) { el.__efCo = true; cio.observe(el); } }); }
  qsa('[data-drift]', ctx).forEach(observeDrift);
}

function init() {
  if (ON) { root.classList.add('m-ready'); }
  initMarquee();
  scan(d);
  driftTick();
}

EF.motion = { on: ON, scan: scan, roll: roll, split: splitEl };
if (d.readyState === 'loading') { d.addEventListener('DOMContentLoaded', init); } else { init(); }
})(window, document);
