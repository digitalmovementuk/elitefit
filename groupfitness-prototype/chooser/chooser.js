/* Elite Fit /groupfitness chooser · v1 · 27 Oct 2026
   Staggered reveal of the cards on enter (total 0.6 s or less: 0.4 s fade + up to 0.18 s stagger).
   Does nothing when motion is off (the head script only sets .motion-ok when it is allowed). */
(function () {
  var items = [].slice.call(document.querySelectorAll('[data-reveal]'));
  var on = document.documentElement.classList.contains('motion-ok');
  if (!on || !('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    var n = 0;
    entries.forEach(function (e) {
      if (!e.isIntersecting) { return; }
      e.target.style.setProperty('--d', Math.min(n, 3) * 60 + 'ms');
      e.target.classList.add('in');
      io.unobserve(e.target);
      n += 1;
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  items.forEach(function (el) { io.observe(el); });
})();
