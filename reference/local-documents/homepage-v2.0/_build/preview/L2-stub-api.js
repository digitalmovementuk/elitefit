/* L2 scratch stub of EFApi: ?fail=passes|checkout|status|slowpaid. Serves assets/data/passes.json. Not part of the page. */
(function () {
  var q = new URLSearchParams(location.search), fail = q.get('fail');
  function ymd() { var d = new Date(Date.now() + 8 * 3600e3); return d.toISOString().slice(0, 10); }
  var sessions = {}, n = 0;
  window.EFApi = {
    mode: 'mock', tz: 'Asia/Makassar',
    now: function () { return new Date(); },
    baliParts: function (d) { var t = new Date(d.getTime() + 8 * 3600e3); return { ymd: t.toISOString().slice(0, 10), hhmm: t.toISOString().slice(11, 16), dow: t.getUTCDay() || 7 }; },
    getPasses: function () { return fail === 'passes' ? Promise.reject(new Error('stub: passes down')) : fetch('../../assets/data/passes.json').then(function (r) { return r.json(); }); },
    createCheckout: function (o) {
      if (fail === 'checkout') { var e = new Error('stub: down'); e.code = 'network_error'; return Promise.reject(e); }
      var id = 'stub-' + (++n); sessions[id] = 'awaiting_payment';
      return Promise.resolve({ id: id, status: 'awaiting_payment', total: 1, currency: 'IDR', paymentUrl: null, expiresAt: '', mock: true });
    },
    getCheckoutStatus: function (id) {
      if (fail === 'status') { var e = new Error('stub: status down'); e.code = 'network_error'; return Promise.reject(e); }
      return Promise.resolve({ id: id, status: fail === 'slowpaid' ? 'awaiting_payment' : (sessions[id] || 'paid'), reference: null });
    },
    _simulatePayment: function (id) { sessions[id] = 'paid'; return Promise.resolve({ id: id, status: 'paid' }); },
    submitLead: function () { return Promise.resolve({ ok: true, id: 'stub-lead' }); }
  };
}());
