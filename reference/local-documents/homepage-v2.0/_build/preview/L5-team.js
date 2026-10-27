/* Lane L5 scratch: reference implementation of the "Show all five" toggle.
   The same snippet goes into the integrator's main.js (see lane-L5-report.md).
   Sets state attributes only; CSS in community.css does the show/hide. */
(function () {
  'use strict';
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.team__more') : null;
    if (!btn) return;
    var open = btn.getAttribute('data-state') === 'open';
    btn.setAttribute('data-state', open ? 'closed' : 'open');
    btn.setAttribute('aria-expanded', open ? 'false' : 'true');
  });
})();
