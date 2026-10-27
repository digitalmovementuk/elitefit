/* Lane M scratch stub for the integrator's main.js: header menu toggle and the
   "Show all five" coaches toggle, state attributes only (no motion). Not part of the page. */
(function () {
  'use strict';
  var d = document;
  d.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target : null;
    if (!t) { return; }
    var tog = t.closest('.hdr__toggle');
    if (tog) {
      var menu = d.getElementById(tog.getAttribute('aria-controls'));
      var open = tog.getAttribute('aria-expanded') !== 'true';
      tog.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (menu) { menu.setAttribute('data-state', open ? 'open' : 'closed'); }
      return;
    }
    if (t.closest('.hdr__menu a, .hdr__menu button')) {
      var tg = d.querySelector('.hdr__toggle'), m = d.getElementById('hdr-menu');
      if (tg) { tg.setAttribute('aria-expanded', 'false'); }
      if (m) { m.setAttribute('data-state', 'closed'); }
    }
    var more = t.closest('.team__more');
    if (more) {
      var o = more.getAttribute('data-state') !== 'open';
      more.setAttribute('data-state', o ? 'open' : 'closed');
      more.setAttribute('aria-expanded', o ? 'true' : 'false');
    }
  });
})();
