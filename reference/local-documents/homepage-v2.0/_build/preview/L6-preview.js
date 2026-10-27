/* Scratch preview for lane L6: renders what EFApi returns. MOCK: nothing real. Skipped with ?bare=1. */
(function () {
  'use strict';
  if (/[?&]bare=1/.test(location.search)) { return; }
  var api = window.EFApi;
  function $(id) { return document.getElementById(id); }
  function idr(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function row(cells, head) {
    return '<tr>' + cells.map(function (c) {
      var num = typeof c === 'number';
      return '<' + (head ? 'th' : 'td') + (num ? ' class="n"' : '') + '>' + (num ? idr(c) : c) + '</' + (head ? 'th' : 'td') + '>';
    }).join('') + '</tr>';
  }
  var parts = api.baliParts(api.now());
  $('meta').innerHTML = 'mode <code>' + api.mode + '</code> · tz <code>' + api.tz + '</code> · now() = <code>' + api.now().toISOString() +
    '</code> = Bali <code>' + parts.ymd + ' ' + parts.hhmm + '</code>, dow ' + parts.dow + ' · add <code>?now=2026-10-01T09:30</code> to freeze the clock';

  api.getPasses().then(function (p) {
    var h = '<thead>' + row(['Length'].concat(p.tiers.map(function (t) { return t.name; })), true) + '</thead><tbody>';
    p.lengths.forEach(function (l) { h += row([l.chip].concat(p.tiers.map(function (t) { return t.prices[l.id]; }))); });
    $('t-passes').innerHTML = h + '</tbody>';
    var x = '<thead>' + row(['Other prices', 'Perform', 'Elite', 'Recharge'], true) + '</thead><tbody>';
    x += row(['Duo day pass, each', p.duo.dayPassEach, p.duo.dayPassEach, p.duo.dayPassEach]);
    x += row(['Duo 4 weeks, for two', p.duo.fourWeek.perform, p.duo.fourWeek.elite, p.duo.fourWeek.recharge]);
    p.classPasses.forEach(function (c) { x += row([c.name + ' (' + c.tierId + ' / ' + c.lengthId + ')', c.price, '', '']); });
    $('t-extra').innerHTML = x + '</tbody>';
  });

  api.getSchedule({ date: parts.ymd, days: 7 }).then(function (s) {
    var h = '<thead>' + row(['Date', 'dow', 'Classes', 'First class', 'Last class', 'spotsLeft / capacity (MOCK)'], true) + '</thead><tbody>';
    s.days.forEach(function (d) {
      var f = d.classes[0], l = d.classes[d.classes.length - 1];
      h += row([d.date, String(d.dow), String(d.classes.length),
        f ? f.start + ' ' + f.title : '-', l ? l.start + ' ' + l.title : '-',
        d.classes.map(function (c) { return c.spotsLeft + '/' + c.capacity; }).join(' ')]);
    });
    $('t-sched').innerHTML = h + '</tbody><caption>source ' + s.source + ' · mock ' + s.mock + ' · degraded ' + s.degraded + '</caption>';
  });

  var cust = { name: 'Test Visitor', email: 'test@example.com', whatsapp: '+62 812 0000 0000' };
  function order(tierId, lengthId, duo) { return { items: [{ tierId: tierId, lengthId: lengthId, qty: 1, startDate: parts.ymd }], duo: duo, customer: cust }; }
  var samples = [['Perform day pass', order('perform', 'day', false), 350000],
                 ['Elite 4 weeks, Duo', order('elite', 'w4', true), 4400000],
                 ['Recharge 52 weeks', order('recharge', 'w52', false), 14000000]];
  var oh = '<thead>' + row(['Order', 'Session id', 'Total', 'Expected', 'Status', 'After simulate', 'Reference'], true) + '</thead><tbody>';
  samples.reduce(function (chain, s) {
    return chain.then(function () {
      return api.createCheckout(s[1]).then(function (ses) {
        return api._simulatePayment(ses.id).then(function (st) {
          oh += row([s[0], ses.id, ses.total, s[2], ses.status, st.status, st.reference || '-']);
        });
      });
    });
  }, Promise.resolve()).then(function () { $('t-orders').innerHTML = oh + '</tbody>'; });

  var bad = [['no items', { items: [], customer: cust }],
             ['unknown tier', order('gold', 'day', false)],
             ['Duo on 12 weeks', order('perform', 'w12', true)],
             ['bad email', { items: order('perform', 'day', false).items, customer: { name: 'A', email: 'nope', whatsapp: '+628120000000' } }]];
  var eh = '<thead>' + row(['Case', 'code', 'status', 'field', 'message'], true) + '</thead><tbody>';
  bad.reduce(function (chain, b) {
    return chain.then(function () {
      return api.createCheckout(b[1]).then(function () { eh += row([b[0], 'ACCEPTED (bug)', '', '', '']); },
        function (e) { eh += row([b[0], e.code, String(e.status), e.field || '-', e.message]); });
    });
  }, Promise.resolve()).then(function () { $('t-errors').innerHTML = eh + '</tbody>'; });
}());
