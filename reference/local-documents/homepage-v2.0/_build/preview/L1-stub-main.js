/* L1 preview only (scratch, not part of the page): stand-in for the integrator's
   main.js menu toggle and motion.js header state, so the header can be checked. */
(function () {
  var t = document.querySelector('.hdr__toggle'), m = document.getElementById('hdr-menu'), h = document.getElementById('site-header');
  function set(open) { if (!t || !m) return; t.setAttribute('aria-expanded', open ? 'true' : 'false'); m.setAttribute('data-state', open ? 'open' : 'closed'); }
  if (t) t.addEventListener('click', function () { set(t.getAttribute('aria-expanded') !== 'true'); });
  if (m) m.addEventListener('click', function (e) { if (e.target.closest('a,button')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  function sc() { if (h) h.setAttribute('data-scrolled', window.scrollY > 8 ? 'true' : 'false'); }
  window.addEventListener('scroll', sc, { passive: true }); sc();
})();
