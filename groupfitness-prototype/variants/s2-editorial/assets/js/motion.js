/* Elite Fit /groupfitness · Editorial · motion.js (27 Oct 2026)
   EF.motion for this variant. Native scroll only: no scroll-jacking, no snapping, no wheel handlers.
   - Line masks: every [data-lines] headline is split into its visual lines; each line slides up inside its own mask
     when the headline enters (0.46 s, 45 ms apart, 0.6 s or less in total). After the reveal the original markup is put back.
   - Reveals: [data-reveal], [data-stagger], [data-rule] (hairline draws), [data-frame] (clip opens), .coaches, once each,
     via IntersectionObserver.
   - Scroll-linked: [data-px] stills drift ±5 % inside their frame and the masthead progress line fills. CSS scroll
     timelines do this where supported; otherwise a passive scroll listener with rAF, limited to the stills in view.
   - Fast scroll (> 2.5 px/ms) adds .m-fast for 400 ms so reveals land at once.
   - Gate: html.motion-ok (off for prefers-reduced-motion and Save-Data). Without it nothing is hidden or moved.
   API: EF.motion.on, EF.motion.scan(root), EF.motion.roll(el, n). Classic deferred script, ES5, no dependencies. */
(function (w, d) {
'use strict';
var EF = w.EF = w.EF || {};
var root = d.documentElement;
var ON = root.classList.contains('motion-ok') && 'IntersectionObserver' in w;
var raf = w.requestAnimationFrame || function (f) { return w.setTimeout(f, 16); };
function qsa(s, c) { return [].slice.call((c || d).querySelectorAll(s)); }

var io = null;
var SEL = '[data-lines], [data-reveal], [data-stagger], [data-rule], [data-frame], .coaches';

/* ---------- line splitting ---------- */
function tokens(el) {
  var out = [], pendingSpace = false;
  [].slice.call(el.childNodes).forEach(function (n) {
    if (n.nodeType === 3) {
      n.nodeValue.split(/(\s+)/).forEach(function (part) {
        if (!part) { return; }
        if (/^\s+$/.test(part)) { pendingSpace = true; return; }
        out.push({ text: part, sp: pendingSpace }); pendingSpace = false;
      });
    } else if (n.nodeType === 1) {
      out.push({ node: n.cloneNode(true), sp: pendingSpace }); pendingSpace = false;
    }
  });
  return out;
}
function split(el) {
  if (el.__ln || el.classList.contains('m-in')) { return; }
  var orig = el.__orig || el.innerHTML;
  el.__orig = orig;
  var toks = tokens(el), words = [];
  el.innerHTML = '';
  toks.forEach(function (t, i) {
    if (i && t.sp) { el.appendChild(d.createTextNode(' ')); }
    var s = d.createElement('span');
    s.style.display = 'inline-block';
    if (t.node) { s.appendChild(t.node); } else { s.textContent = t.text; }
    s.__sp = t.sp;
    el.appendChild(s);
    words.push(s);
  });
  var lines = [], cur = null, top = null;
  words.forEach(function (s) {
    var tp = s.offsetTop;
    if (top === null || Math.abs(tp - top) > 3) { cur = []; lines.push(cur); top = tp; }
    cur.push(s);
  });
  el.innerHTML = '';
  lines.forEach(function (ws, i) {
    var ln = d.createElement('span'), inner = d.createElement('span');
    ln.className = 'ln ln--b';
    ln.style.setProperty('--li', Math.min(i, 3));
    inner.className = 'ln__i';
    ws.forEach(function (s, j) {
      if (j && s.__sp) { inner.appendChild(d.createTextNode(' ')); }
      while (s.firstChild) { inner.appendChild(s.firstChild); }
    });
    ln.appendChild(inner);
    el.appendChild(ln);
    if (i < lines.length - 1) { el.appendChild(d.createTextNode(' ')); }
  });
  el.__ln = true;
}
function unsplit(el) {
  if (!el.__ln || !el.__orig) { return; }
  el.innerHTML = el.__orig;
  el.__ln = false;
}

/* ---------- reveal on enter ---------- */
function reveal(el) {
  if (el.classList.contains('m-in')) { return; }
  el.classList.add('m-in');
  if (el.hasAttribute('data-lines')) {
    w.setTimeout(function () { unsplit(el); }, 900);
  }
}
function prepStagger(el) {
  [].slice.call(el.children).forEach(function (c, i) { c.style.setProperty('--i', Math.min(i, 6)); });
}
function observe(el) {
  if (el.__mo) { return; }
  el.__mo = true;
  if (el.hasAttribute('data-lines')) { split(el); }
  if (el.hasAttribute('data-stagger') || el.classList.contains('coaches')) { prepStagger(el); }
  if (io) { io.observe(el); } else { reveal(el); }
}
function scan(ctx) {
  if (!ON) { return; }
  var box = ctx && ctx.nodeType ? ctx : d;
  qsa(SEL, box).forEach(function (el) {
    if (el.closest && el.closest('#sheet')) { return; }
    if (el.__mo && (el.hasAttribute('data-stagger') || el.classList.contains('coaches'))) { prepStagger(el); }
    observe(el);
  });
}

/* ---------- spot odometer ---------- */
function roll(el, n) {
  if (!el) { return; }
  var old = String(el.textContent).replace(/\D/g, '');
  if (!ON || old === '' || old === String(n)) { el.textContent = n; return; }
  el.innerHTML = '<span class="odo" aria-hidden="true"><span class="odo__c"><span>' + old + '</span><span>' + n + '</span></span></span><span class="vh">' + n + '</span>';
  w.setTimeout(function () { el.textContent = n; }, 460);
}

/* ---------- scroll-linked fallback (no CSS scroll timelines) ---------- */
var SDA = false;
try { SDA = !!(w.CSS && w.CSS.supports && w.CSS.supports('animation-timeline: view()')); } catch (e) { SDA = false; }
var pxSeen = [], pxIO = null, bar = null, ticking = false;
function paint() {
  ticking = false;
  var vh = w.innerHeight || root.clientHeight;
  pxSeen.forEach(function (el) {
    var box = el.parentNode.getBoundingClientRect();
    var p = (vh - box.top) / (vh + box.height);
    p = p < 0 ? 0 : (p > 1 ? 1 : p);
    var calm = el.classList.contains('px--calm') || (!!el.closest('.cover') && w.innerWidth < 768);
    var amp = calm ? 3 : 6, sc = calm ? 1.07 : 1.14;
    el.style.transform = 'translate3d(0,' + (-amp + 2 * amp * p).toFixed(2) + '%,0) scale(' + sc + ')';
  });
  if (bar) {
    var max = Math.max(1, (root.scrollHeight || d.body.scrollHeight) - vh);
    var y = w.pageYOffset || root.scrollTop || 0;
    bar.style.transform = 'scaleX(' + Math.min(1, y / max).toFixed(4) + ')';
  }
}
function queue() { if (!ticking) { ticking = true; raf(paint); } }
function initScrollFallback() {
  if (SDA) { return; }
  bar = d.querySelector('.hdr__progress');
  pxIO = new w.IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var i = pxSeen.indexOf(e.target);
      if (e.isIntersecting && i < 0) { pxSeen.push(e.target); }
      else if (!e.isIntersecting && i > -1) { pxSeen.splice(i, 1); }
    });
    queue();
  }, { rootMargin: '10% 0px 10% 0px' });
  qsa('[data-px]').forEach(function (el) { pxIO.observe(el); });
  w.addEventListener('scroll', queue, { passive: true });
  w.addEventListener('resize', queue);
  queue();
}

/* ---------- fast scroll ---------- */
function initFast() {
  var lastY = w.pageYOffset || 0, lastT = Date.now(), fastTimer = 0;
  w.addEventListener('scroll', function () {
    var y = w.pageYOffset || 0, t = Date.now(), dt = Math.max(1, t - lastT);
    var v = Math.abs(y - lastY) / dt;
    lastY = y; lastT = t;
    if (v > 2.5) {
      root.classList.add('m-fast');
      w.clearTimeout(fastTimer);
      fastTimer = w.setTimeout(function () { root.classList.remove('m-fast'); }, 400);
    }
  }, { passive: true });
}

/* ---------- re-split headlines that have not revealed yet when the width changes ---------- */
function initResize() {
  var lastW = w.innerWidth, t = 0;
  w.addEventListener('resize', function () {
    w.clearTimeout(t);
    t = w.setTimeout(function () {
      if (w.innerWidth === lastW) { return; }
      lastW = w.innerWidth;
      qsa('[data-lines]').forEach(function (el) {
        if (el.classList.contains('m-in') || !el.__ln) { return; }
        unsplit(el); el.__ln = false; split(el);
      });
    }, 150);
  });
}

function init() {
  if (!ON) { return; }
  io = new w.IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  root.classList.add('m-ready');
  scan(d);
  initScrollFallback();
  initFast();
  initResize();
  /* fonts change line breaks: re-split anything still waiting once Gilroy is in */
  if (d.fonts && d.fonts.ready) {
    d.fonts.ready.then(function () {
      qsa('[data-lines]').forEach(function (el) {
        if (el.classList.contains('m-in') || !el.__ln) { return; }
        unsplit(el); el.__ln = false; split(el);
      });
    });
  }
}

EF.motion = { on: ON, scan: scan, roll: roll, sda: SDA };
if (d.readyState === 'loading') { d.addEventListener('DOMContentLoaded', init); } else { init(); }
})(window, document);
