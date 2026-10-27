(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const data = window.EF_DATA || {schedule: [], reviews: []};
  const asset = file => window.EF_ASSETS?.[file] || file;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const dialog = $('#details'), content = $('#dialog-content'), menu = $('#navigation');
  const state = {duration: 'day', people: 'solo', tier: 'elite', mode: '', day: 1, gallery: 0, checkoutStep: 0, contactStep: 0, contact: 'tour', coach: '', details: {}, request: {}};
  const prices = {
    elite: {name: 'Elite', tag: 'Gym, classes & recovery', solo: {day: 450000, month: 2700000, year: 25000000}, duo: {day: 225000, month: 2200000, year: 22500000}},
    perform: {name: 'Perform', tag: 'Gym & outdoor area', solo: {day: 350000, month: 2200000, year: 18000000}, duo: {day: null, month: 1900000, year: 16000000}},
    recharge: {name: 'Recharge', tag: 'Pool & recovery suite', solo: {day: 300000, month: 2000000, year: 14000000}, duo: {day: null, month: 1700000, year: 13250000}}
  };
  const lengths = {day: 'Day pass', month: 'Monthly', year: 'Yearly'};
  const periods = {day: '/ day', month: '/ month', year: '/ year'};
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const coaches = {
    rey: {name: 'Rey', role: 'Performance & Boxing', classes: ['HYROX Conditioning', 'Boxercise', 'Off-Court Training']},
    tinos: {name: 'Tinos', role: 'Recovery & Mobility', classes: ['Calisthenics', 'Mobility']},
    reski: {name: 'Reski', role: 'Body Transformation', classes: []},
    ain: {name: 'Ain', role: 'Stretch', classes: ['Stretching', 'Mobility', 'Booty']},
    icha: {name: 'Icha', role: 'Female Booty & Sculpting', classes: ['Body Sculpt', 'Booty and Core']}
  };
  const rooms = {
    ice: {name: 'Ice bath', image: 'rec-ice.webp', text: 'Take a cold plunge in the club’s ice bath.'},
    sauna: {name: 'Sauna', image: 'rec-sauna.webp', text: 'Settle into the warmth of the sauna.'},
    steam: {name: 'Steam room', image: 'rec-steam.webp', text: 'Step into the steam room and take a quiet moment.'},
    jacuzzi: {name: 'Jacuzzi', image: 'rec-jacuzzi.webp', text: 'Make time for a soak in the jacuzzi.'}
  };
  const gallery = [
    ['community-day', 'Community Day'], ['community-talk', 'NAD+ Talk'], ['community-games', 'Merdeka Together'],
    ['community-brunch', 'Women’s Brunch'], ['community-friends', 'Friends']
  ];
  let pausedByUser = reduced.matches || !!navigator.connection?.saveData;
  let lastTrigger = null, videoObserver, revealObserver;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[ch]));
  const icon = (name = 'arrow') => `<svg aria-hidden="true"><use href="#${name}"/></svg>`;
  const compact = n => n == null ? '—' : n >= 1000000 ? `${Number((n / 1000000).toFixed(2))}M` : `${Number((n / 1000).toFixed(2))}K`;
  const rupiah = n => new Intl.NumberFormat('id-ID').format(n);
  const eachPrice = () => prices[state.tier][state.people][state.duration];
  const totalPrice = () => (eachPrice() || 0) * (state.people === 'duo' ? 2 : 1);
  function clubNow() {
    const override = new URLSearchParams(location.search).get('now');
    return override && !Number.isNaN(Date.parse(override + '+08:00')) ? new Date(override + '+08:00') : new Date();
  }
  function nowParts() {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {timeZone: 'Asia/Makassar', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'}).formatToParts(clubNow()).filter(x => x.type !== 'literal').map(x => [x.type, x.value]));
    const localDate = new Date(Date.UTC(+p.year, +p.month - 1, +p.day));
    return {...p, dow: localDate.getUTCDay() || 7, mins: +p.hour * 60 + +p.minute, localDate, iso: `${p.year}-${p.month}-${p.day}`};
  }
  const minuteOf = s => Number(s.split(':')[0]) * 60 + Number(s.split(':')[1]);
  function tick() {
    const n = nowParts();
    $$('[data-clock]').forEach(x => x.textContent = `${n.hour}:${n.minute}`);
    $$('[data-hours]').forEach(x => x.textContent = n.mins >= 360 && n.mins < 1320 ? 'Open now · until 22:00' : 'Opens at 06:00');
    $('[data-today-label]').textContent = `${days[n.dow - 1]} at Elite Fit`;
    const today = data.schedule.find(d => d.dow === n.dow)?.classes || [];
    let c = today.find(c => minuteOf(c.end) > n.mins);
    let prefix = '';
    if (c) prefix = minuteOf(c.start) <= n.mins ? 'On now' : 'Next';
    else {
      for (let i = 1; i <= 7; i++) {
        const day = (n.dow - 1 + i) % 7 + 1;
        const found = data.schedule.find(d => d.dow === day)?.classes[0];
        if (found) {c = found; prefix = i === 1 ? 'Tomorrow' : days[day - 1]; break;}
      }
    }
    if (c) $('[data-next-class]').textContent = `${prefix} · ${c.start} ${c.title} with ${c.trainer}`;
  }
  function animatePrice(el, value) {
    if (el.textContent === value) return;
    el.textContent = value;
    if (!reduced.matches) {el.classList.remove('price-flash'); void el.offsetWidth; el.classList.add('price-flash');}
  }
  function syncPrices(announce = false) {
    $$('[data-duration]').forEach(b => {const on = b.dataset.duration === state.duration; b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on));});
    $$('[data-people]').forEach(b => {const on = b.dataset.people === state.people; b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on));});
    $$('[data-price]').forEach(el => animatePrice(el, compact(prices[el.dataset.price][state.people][state.duration])));
    $$('[data-price-period]').forEach(el => el.textContent = periods[state.duration]);
    $$('[data-length-label]').forEach(el => el.textContent = lengths[state.duration]);
    $$('[data-people-label]').forEach(el => el.textContent = state.people === 'duo' ? 'Duo · price each' : 'One person');
    $('[data-price-description="elite"]').textContent = state.people === 'duo' ? 'Bring a friend, partner or family member. Price shown per person.' : 'Your time to train, recover and make yourself at home.';
    $('[data-perform-classes]').textContent = state.duration === 'day' ? 'Group classes with memberships' : 'Unlimited group classes';
    $('[data-pass-note="perform"]').textContent = state.people === 'duo' && state.duration === 'day' ? 'Duo day pass is Elite only.' : state.duration === 'day' ? 'Day pass is solo only.' : 'Gym & classes.';
    $('[data-pass-note="recharge"]').textContent = state.people === 'duo' && state.duration === 'day' ? 'Duo day pass is Elite only.' : 'No gym floor access.';
    if (announce) $('#pricing-live').textContent = `${lengths[state.duration]}, ${state.people === 'duo' ? 'Duo prices per person' : 'Solo'}. Elite IDR ${rupiah(prices.elite[state.people][state.duration])}.`;
  }
  function closeDialogs() {if (menu.open) menu.close(); if (dialog.open) dialog.close();}
  function openPanel(html, mode) {
    if (!dialog.open) lastTrigger = document.activeElement;
    if (menu.open) menu.close();
    state.mode = mode;
    content.innerHTML = html.replace(/\b(src|poster)="(assets\/[^\"]+)"/g, (_, attr, file) => `${attr}="${asset(file)}"`);
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.scrollTop = 0;
    content.scrollTop = 0;
    $$('[data-modal-video]', content).forEach(v => {
      if (!pausedByUser && !reduced.matches) v.play().then(() => v.classList.add('is-playing')).catch(() => {});
    });
  }
  function panelStart(eyebrow, title, lead = '') {return `<div class="dialog-pad"><p class="eyebrow">${eyebrow}</p><h2 class="dialog-title" id="dialog-heading" tabindex="-1">${title}</h2>${lead ? `<p class="dialog-lead">${lead}</p>` : ''}`;}
  function openSchedule(day = nowParts().dow, refocus = false) {
    state.day = day;
    const n = nowParts();
    const monday = new Date(n.localDate); monday.setUTCDate(monday.getUTCDate() - n.dow + 1);
    const classes = data.schedule.find(d => d.dow === day)?.classes || [];
    const tabs = days.map((name, i) => {
      const date = new Date(monday); date.setUTCDate(date.getUTCDate() + i);
      return `<button type="button" class="${day === i + 1 ? 'active' : ''}" data-schedule-day="${i + 1}" role="tab" tabindex="${day === i + 1 ? '0' : '-1'}" aria-selected="${day === i + 1}" aria-controls="class-list" id="day-tab-${i + 1}">${name.slice(0, 3)}<strong>${date.getUTCDate()}</strong></button>`;
    }).join('');
    const rows = classes.map(c => {
      const current = day === n.dow && minuteOf(c.start) <= n.mins && minuteOf(c.end) > n.mins;
      return `<article class="class-row ${current ? 'current' : ''}"><time>${esc(c.start)}</time><div><h3>${esc(c.title)}</h3><p>With ${esc(c.trainer)} · ${esc(c.start)}–${esc(c.end)} ${current ? '<span class="class-status"> · On now</span>' : ''}</p></div><button class="icon-button" type="button" data-class="${c.id}" aria-label="Details for ${esc(c.title)} with ${esc(c.trainer)}">${icon('arrow-up')}</button></article>`;
    }).join('');
    openPanel(panelStart('Class schedule', 'WHAT’S ON TODAY.', 'Find your next class and meet the coach leading it.') + `<div class="schedule-tabs" role="tablist" aria-label="Day of the week">${tabs}</div><div class="class-day-head"><h3>${days[day - 1]}</h3><span>${classes.length} classes${day === n.dow ? ' · Today' : ''}</span></div><div id="class-list" role="tabpanel" aria-labelledby="day-tab-${day}">${rows || '<p>No classes on this day.</p>'}</div><p class="schedule-note">Classes last one hour. Weekend sessions run on selected dates. Check GymMaster for the latest schedule and bookings.</p></div>`, 'schedule');
    if (refocus) $(`[data-schedule-day="${day}"]`, content)?.focus({preventScroll: true});
  }
  function openClass(id) {
    const c = data.schedule.flatMap(d => d.classes).find(c => c.id === id);
    if (!c) return;
    const coach = Object.keys(coaches).find(k => coaches[k].name.toLowerCase() === c.trainer.toLowerCase());
    openPanel(panelStart('At the club', esc(c.title), `${esc(c.start)}–${esc(c.end)} · One hour with ${esc(c.trainer)}`) + `<div class="dialog-grid">${coach ? `<img class="coach-detail-image" src="assets/images/coach-${coach}.webp" alt="${esc(c.trainer)}">` : ''}<div><h3>Make room for your next class.</h3><p style="margin-top:16px">Book and check the current schedule in the GymMaster app.</p><a class="button" href="https://elitefitbali.com/class-schedule/" target="_blank" rel="noopener">Open club timetable ${icon('arrow-up')}</a><button class="text-link" style="display:flex;margin-top:12px" type="button" data-schedule>Back to classes ${icon()}</button></div></div></div>`, 'class');
  }
  function openFacility(id) {
    if (id === 'recover') {
      openPanel(panelStart('The recovery suite', 'FIND YOUR RESET.', 'An outdoor pool, sunbeds, ice bath, jacuzzi, sauna and steam room. All in one place.') + `<div class="dialog-grid"><div class="dialog-media"><img id="room-image" src="assets/images/rec-ice.webp" alt="Elite Fit’s ice bath"></div><div><h3 id="room-name">Ice bath</h3><div class="room-tabs" role="group" aria-label="Explore the recovery rooms">${Object.keys(rooms).map((k, i) => `<button type="button" data-room="${k}" aria-pressed="${i === 0}" class="${i === 0 ? 'active' : ''}">${rooms[k].name}</button>`).join('')}</div><p class="room-description" id="room-description">${rooms.ice.text}</p><button class="button" type="button" data-buy="recharge">Choose Recharge ${icon()}</button></div></div></div>`, 'facility');
      return;
    }
    const f = {
      train: {title: 'MAKE SPACE FOR YOUR TRAINING.', label: 'The gym floor', text: 'Explore the indoor gym, cardio floor and outdoor functional area, with equipment from Arsenal Strength, Panatta and Prime.', image: 'train-together', video: 'training-clip', action: 'Find your class', attr: 'data-schedule'},
      eat: {title: 'STAY FOR A BITE.', label: 'The restaurant', text: 'Coffee and macro-friendly food from our kitchen, served indoors or outside. Everyone’s welcome, including nonmembers.', image: 'dining', video: 'nutrition-clip', action: 'See the menu', attr: 'data-food-menu'},
      work: {title: 'BRING YOUR WORK ALONG.', label: 'Co-working', text: 'Find your spot indoors or outside. Co-working is free for members.', image: 'work-together', action: 'Find your pass', attr: 'data-buy="elite"'}
    }[id];
    if (!f) return;
    openPanel(panelStart(f.label, f.title) + `<div class="dialog-grid"><div class="dialog-media"><img src="assets/images/${f.image}.webp" alt="${f.label} at Elite Fit Bali">${f.video ? `<video data-modal-video src="assets/video/${f.video}.mp4" muted loop playsinline controls preload="metadata" poster="assets/images/${f.image}.webp"></video>` : ''}</div><div><p class="lead">${f.text}</p><button class="button" type="button" ${f.attr}>${f.action} ${icon()}</button></div></div></div>`, 'facility');
  }
  function openCoach(id) {
    const c = coaches[id]; if (!c) return;
    state.coach = c.name;
    openPanel(panelStart('Your coaches', `MEET ${c.name.toUpperCase()}.`, c.role) + `<div class="dialog-grid"><img class="coach-detail-image" src="assets/images/coach-${id}.webp" alt="${c.name}, Elite Fit coach"><div>${c.classes.length ? `<h3>On the timetable</h3><ul class="check-list">${c.classes.map(x => `<li>${x}</li>`).join('')}</ul>` : '<h3>Personal training</h3><p style="margin-top:16px">Body Transformation with Reski.</p>'}<button class="button" type="button" data-contact="pt" data-coach-name="${c.name}">Ask about PT with ${c.name} ${icon()}</button><button class="text-link" data-schedule type="button" style="display:flex;margin-top:12px">Explore classes ${icon()}</button></div></div></div>`, 'coach');
  }
  function openPricing() {
    let rows = '';
    for (const p of Object.values(prices)) {
      rows += `<tr class="tier-row"><td>${p.name}</td><td colspan="2">${p.tag}</td></tr>`;
      for (const length of Object.keys(lengths)) rows += `<tr><td>${lengths[length]}</td><td>${compact(p.solo[length])}</td><td>${compact(p.duo[length])}</td></tr>`;
    }
    openPanel(panelStart('Membership', 'YOUR PASS. YOUR PACE.', 'All prices below are per person, in IDR.') + `<table class="full-prices"><thead><tr><th>Pass</th><th>Solo</th><th>Duo · each</th></tr></thead><tbody>${rows}</tbody></table><p class="pricing-caption">Perform and Recharge day passes are Solo only. The Duo day pass is the full Elite experience. Gym and PT prices are net.</p><div class="section-actions left-actions"><button class="button" data-buy="elite" type="button">Find your pass ${icon()}</button></div></div>`, 'pricing');
  }
  function openGallery(index) {
    state.gallery = (index + gallery.length) % gallery.length;
    const g = gallery[state.gallery];
    openPanel(`<div class="gallery-view"><img src="assets/images/${g[0]}.webp" alt="${esc(g[1])} at Elite Fit Bali"><div class="gallery-caption"><h2 id="dialog-heading">${esc(g[1])}</h2><div class="gallery-buttons"><button class="icon-button" type="button" data-gallery-prev aria-label="Previous photo">${icon()}</button><span class="gallery-count">${state.gallery + 1} / ${gallery.length}</span><button class="icon-button" type="button" data-gallery-next aria-label="Next photo">${icon()}</button></div></div></div>`, 'gallery');
  }
  function openFood() {
    openPanel(panelStart('From the kitchen', 'OCTOBER SPECIALS.', 'Healthy food. Good company. Open to everyone.') + `<div class="dialog-grid"><img src="assets/images/october-specials.webp" alt="October specials menu" style="width:100%;max-height:440px;object-fit:contain;border-radius:18px"><div><h3>CHILI CON CARNE</h3><p style="margin-top:12px">Rice, tortilla chips &amp; sour cream</p><p class="accent-text" style="font-weight:750;margin-top:8px">IDR 100K NET</p><hr style="border:0;border-top:1px solid var(--line);margin:28px 0"><h3>TINOS PROTEIN SHAKE</h3><p style="margin-top:12px">Vanilla protein, banana &amp; cinnamon</p><p class="accent-text" style="font-weight:750;margin-top:8px">IDR 90K NET</p><button class="button" type="button" data-contact="table">Book a table ${icon()}</button></div></div><p class="preview-note">Available all October. Ask the café team for the full menu and today’s availability.</p></div>`, 'food');
  }
  function openEvents() {
    openPanel(panelStart('Better together', 'FIND YOUR PEOPLE.', 'The classes, conversations and time together that make the club.') + `<div class="event-list"><article><span>THROUGH OCTOBER</span><div><h3>16 classes. One free week.</h3><p>Attend 16 or more classes in October and earn a week of membership to keep or give to a friend. Only classes you attend count.</p><button class="text-link" type="button" data-schedule>Find your next class ${icon()}</button></div></article><article><span>AROUND THE CLUB</span><div><h3>From brunch to Community Day.</h3><p>A few moments from the club: shared tables, talks and people getting together.</p><button class="text-link" type="button" data-gallery="0">Explore the photos ${icon()}</button></div></article></div><p class="preview-note">Follow @elitefitbali on Instagram for upcoming community days and events.</p></div>`, 'events');
  }
  function renderReviews(expanded = false) {
    $('#review-grid').innerHTML = data.reviews.map((q, i) => `<article class="review-card" ${i > 2 && !expanded ? 'hidden' : ''}><span class="stars" aria-label="5 out of 5 stars">★★★★★</span><blockquote>“${esc(q.text)}”</blockquote><cite>${esc(q.author)}<span>Google review</span></cite></article>`).join('');
    $('[data-more-reviews]').hidden = expanded;
  }
  function stepper(step) {
    return `<div class="checkout-progress" aria-label="Step ${step + 1} of 3">${['Your pass', 'Your details', 'Review'].map((label, i) => `${i ? '<i></i>' : ''}<span data-step="${i + 1}" class="${i === step ? 'current' : ''}">${label}</span>`).join('')}</div>`;
  }
  function summaryLine() {
    return `<div class="checkout-summary-line"><div><h3>${prices[state.tier].name} · ${lengths[state.duration]}</h3><p>${state.people === 'duo' ? '2 people · IDR ' + rupiah(eachPrice()) + ' each' : '1 person'} · ${prices[state.tier].tag}</p></div><div class="checkout-total">${compact(totalPrice())}<small>IDR · total for ${state.people === 'duo' ? 'two' : 'one'}</small></div></div>`;
  }
  function checkout(step = state.checkoutStep) {
    state.checkoutStep = step;
    if (eachPrice() == null) state.tier = 'elite';
    let html = `<div class="dialog-pad">${stepper(step)}<p class="eyebrow">A day at Elite Fit</p><h2 class="dialog-title" id="dialog-heading">${['CHOOSE YOUR PASS.', 'YOUR DETAILS.', 'REVIEW YOUR SELECTION.'][step]}</h2>`;
    if (step === 0) {
      html += `<p class="dialog-lead">Train, recover, or do it all.</p><div class="checkout-options" role="group" aria-label="Choose a pass">${Object.entries(prices).map(([id, p]) => `<button class="checkout-option ${id === state.tier ? 'selected' : ''}" data-checkout-tier="${id}" aria-pressed="${id === state.tier}" type="button"><strong>${p.name}</strong><span>${p.tag}</span></button>`).join('')}</div><div class="checkout-choices"><div class="segmented" role="group" aria-label="Pass duration">${Object.entries(lengths).map(([id, label]) => `<button type="button" class="${id === state.duration ? 'active' : ''}" data-checkout-duration="${id}" aria-pressed="${id === state.duration}">${label}</button>`).join('')}</div><div class="segmented people-controls" role="group" aria-label="People"><button type="button" class="${state.people === 'solo' ? 'active' : ''}" data-checkout-people="solo" aria-pressed="${state.people === 'solo'}">Solo</button><button type="button" class="${state.people === 'duo' ? 'active' : ''}" data-checkout-people="duo" aria-pressed="${state.people === 'duo'}">Duo · each</button></div></div>${summaryLine()}<div class="form-actions"><button class="text-link muted-link" data-full-pricing type="button">All prices ${icon('arrow-up')}</button><button class="button" type="button" data-checkout-step="1">Continue ${icon()}</button></div>`;
    } else if (step === 1) {
      const d = state.details;
      html += `${summaryLine()}<form id="pass-details" novalidate><div class="form-fields"><div class="form-field"><label for="pass-name">Your name</label><input id="pass-name" name="name" autocomplete="name" required value="${esc(d.name)}" placeholder="Your full name" aria-describedby="pass-name-error"><span class="field-error" id="pass-name-error"></span></div><div class="form-field"><label for="pass-email">Email address</label><input id="pass-email" name="email" type="email" autocomplete="email" required value="${esc(d.email)}" placeholder="you@example.com" aria-describedby="pass-email-error"><span class="field-error" id="pass-email-error"></span></div><div class="form-field full-width"><label for="pass-start">Preferred start date</label><input id="pass-start" name="start" type="date" min="${nowParts().iso}" value="${esc(d.start || nowParts().iso)}" required aria-describedby="pass-start-error"><span class="field-error" id="pass-start-error"></span></div></div><div class="form-actions"><button class="button button-outline" data-checkout-step="0" type="button">Back</button><button class="button" type="submit">Review your pass ${icon()}</button></div></form>`;
    } else {
      const d = state.details;
      html += `${summaryLine()}<dl class="review-details"><div><dt>Name</dt><dd>${esc(d.name)}</dd></div><div><dt>Email</dt><dd>${esc(d.email)}</dd></div><div><dt>Preferred start</dt><dd>${esc(d.start)}</dd></div><div><dt>People</dt><dd>${state.people === 'duo' ? 'Two people' : 'One person'}</dd></div></dl><div class="form-actions"><button class="button button-outline" data-checkout-step="1" type="button">Edit details</button><button class="button" type="button" data-checkout-complete>Finish preview ${icon('check')}</button></div>`;
    }
    html += '<p class="preview-note">This preview takes no payment and won’t issue or reserve a pass. Your details stay in this browser tab and are cleared when you finish.</p></div>';
    openPanel(html, 'checkout');
    syncPrices();
  }
  function capturePassDetails() {
    const f = $('#pass-details');
    if (f) state.details = Object.fromEntries(new FormData(f));
  }
  function openContact(type, fresh = true) {
    if (fresh) {state.contact = type; state.contactStep = 0; state.request = {};}
    const c = {
      tour: {eyebrow: 'Visit the club', title: 'COME AND HAVE A LOOK.', lead: 'Tell us when you’d like to look around.'},
      table: {eyebrow: 'The restaurant', title: 'SAVE A PLACE AT THE TABLE.', lead: 'Tell us your preferred day, time and group size.'},
      pt: {eyebrow: 'Personal training', title: state.coach ? `TRAIN WITH ${esc(state.coach.toUpperCase())}.` : 'FIND YOUR COACH.', lead: 'Share your training goals and preferred times.'},
      whatsapp: {eyebrow: 'Talk to Elite Fit', title: 'LET’S TALK.', lead: 'Ask about a pass, a class, a table or a tour.'}
    }[state.contact] || {};
    const r = state.request;
    let html = panelStart(c.eyebrow, c.title, c.lead);
    if (state.contactStep === 0) html += `<form id="contact-request" novalidate><div class="form-fields"><div class="form-field"><label for="request-name">Your name</label><input id="request-name" name="name" autocomplete="name" required value="${esc(r.name)}" placeholder="Your name" aria-describedby="request-name-error"><span id="request-name-error" class="field-error"></span></div><div class="form-field"><label for="request-email">Email address</label><input id="request-email" name="email" type="email" autocomplete="email" required value="${esc(r.email)}" placeholder="you@example.com" aria-describedby="request-email-error"><span id="request-email-error" class="field-error"></span></div><div class="form-field full-width"><label for="request-date">Preferred day <span class="muted">(optional)</span></label><input id="request-date" type="date" name="date" min="${nowParts().iso}" value="${esc(r.date)}" aria-describedby="request-date-error"><span id="request-date-error" class="field-error"></span></div><div class="form-field full-width"><label for="request-message">Anything you’d like us to know? <span class="muted">(optional)</span></label><textarea id="request-message" name="message" placeholder="Your plans, questions or preferred time">${esc(r.message)}</textarea></div></div><div class="form-actions"><span class="fine-print">Elite Fit Bali · Pererenan</span><button class="button" type="submit">Review request ${icon()}</button></div></form>`;
    else html += `<dl class="review-details"><div><dt>Name</dt><dd>${esc(r.name)}</dd></div><div><dt>Email</dt><dd>${esc(r.email)}</dd></div><div><dt>Preferred day</dt><dd>${esc(r.date || 'To be arranged')}</dd></div><div><dt>Your message</dt><dd>${esc(r.message || '—')}</dd></div></dl><div class="form-actions"><button class="button button-outline" type="button" data-contact-edit>Edit request</button><button class="button" type="button" data-contact-complete>Finish preview ${icon('check')}</button></div>`;
    html += '<p class="preview-note">This preview sends no message and makes no booking. Your details stay in this browser tab and are cleared when you finish.</p></div>';
    openPanel(html, 'contact');
  }
  function validate(form) {
    let first = null;
    $$('input[required],input[type="date"]', form).forEach(input => {
      let message = '';
      if (input.required && !input.value.trim()) message = input.type === 'date' ? 'Choose a start date.' : 'Please enter your ' + (input.type === 'email' ? 'email address.' : 'name.');
      else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) message = 'Enter an email address like you@example.com.';
      else if (input.type === 'date' && input.value && input.value < nowParts().iso) message = 'Choose today or a later date.';
      input.setAttribute('aria-invalid', String(!!message));
      const error = $('#' + input.id + '-error', form); if (error) error.textContent = message;
      if (message && !first) first = input;
    });
    first?.focus();
    return !first;
  }
  function success(kind) {
    const isPass = kind === 'pass';
    openPanel(`<div class="success-panel"><span class="success-icon">${icon('check')}</span><p class="eyebrow accent-text">${isPass ? 'Your pass preview' : 'Your request preview'}</p><h2 id="dialog-heading" style="margin-top:20px">PREVIEW COMPLETE.</h2><p>${isPass ? `${prices[state.tier].name} · ${lengths[state.duration]} · ${state.people === 'duo' ? 'Two people' : 'One person'}.` : 'Your details have been cleared.'}</p><p class="preview-note">${isPass ? 'Your details have been cleared. No payment was taken. No pass was purchased or reserved.' : 'No enquiry was sent or booking made.'}</p><button class="button" data-close type="button">Back to the club ${icon()}</button></div>`, 'success');
    state.details = {}; state.request = {};
  }
  document.addEventListener('click', event => {
    const b = event.target.closest('button,a'); if (!b) return;
    if (b.hasAttribute('data-close')) {b.closest('dialog')?.close(); return;}
    if (b.hasAttribute('data-menu')) {lastTrigger = b; menu.showModal(); document.body.classList.add('modal-open'); return;}
    if (b.closest('#navigation') && b.matches('a[href^="#"]')) {menu.close(); return;}
    if (b.hasAttribute('data-schedule')) {openSchedule(); return;}
    if (b.hasAttribute('data-schedule-day')) {openSchedule(+b.dataset.scheduleDay, true); return;}
    if (b.hasAttribute('data-class')) {openClass(b.dataset.class); return;}
    if (b.hasAttribute('data-facility')) {openFacility(b.dataset.facility); return;}
    if (b.hasAttribute('data-coach')) {openCoach(b.dataset.coach); return;}
    if (b.hasAttribute('data-room')) {
      const r = rooms[b.dataset.room]; $('#room-image').src = asset('assets/images/' + r.image); $('#room-image').alt = 'Elite Fit’s ' + r.name.toLowerCase(); $('#room-name').textContent = r.name; $('#room-description').textContent = r.text;
      $$('[data-room]', content).forEach(x => {const on = x === b; x.classList.toggle('active', on); x.setAttribute('aria-pressed', String(on));}); return;
    }
    if (b.hasAttribute('data-duration')) {state.duration = b.dataset.duration; syncPrices(true); return;}
    if (b.hasAttribute('data-people')) {state.people = b.dataset.people; syncPrices(true); return;}
    if (b.hasAttribute('data-buy')) {
      state.tier = b.dataset.buy;
      if (b.dataset.duo === 'true') {state.people = 'duo'; state.duration = 'day';}
      if (eachPrice() == null) state.people = 'solo';
      checkout(0); return;
    }
    if (b.hasAttribute('data-full-pricing')) {openPricing(); return;}
    if (b.hasAttribute('data-gallery')) {openGallery(+b.dataset.gallery); return;}
    if (b.hasAttribute('data-gallery-prev')) {openGallery(state.gallery - 1); return;}
    if (b.hasAttribute('data-gallery-next')) {openGallery(state.gallery + 1); return;}
    if (b.hasAttribute('data-food-menu')) {openFood(); return;}
    if (b.hasAttribute('data-events')) {openEvents(); return;}
    if (b.hasAttribute('data-more-reviews')) {renderReviews(true); $('#announcer').textContent = 'Two more member reviews are now shown.'; return;}
    if (b.hasAttribute('data-checkout-tier')) {state.tier = b.dataset.checkoutTier; if (eachPrice() == null) state.people = 'solo'; checkout(0); return;}
    if (b.hasAttribute('data-checkout-duration')) {state.duration = b.dataset.checkoutDuration; checkout(0); return;}
    if (b.hasAttribute('data-checkout-people')) {state.people = b.dataset.checkoutPeople; checkout(0); return;}
    if (b.hasAttribute('data-checkout-step')) {capturePassDetails(); checkout(+b.dataset.checkoutStep); return;}
    if (b.hasAttribute('data-checkout-complete')) {success('pass'); return;}
    if (b.hasAttribute('data-contact')) {state.coach = b.dataset.coachName || (b.dataset.contact === 'pt' ? state.coach : ''); openContact(b.dataset.contact); return;}
    if (b.hasAttribute('data-contact-edit')) {state.contactStep = 0; openContact(state.contact, false); return;}
    if (b.hasAttribute('data-contact-complete')) {success('contact'); return;}
    if (b.hasAttribute('data-film-toggle')) {pausedByUser = !pausedByUser; syncVideos();}
  });
  document.addEventListener('submit', e => {
    if (!['pass-details', 'contact-request'].includes(e.target.id)) return;
    e.preventDefault();
    const form = e.target;
    if (!validate(form)) return;
    const values = Object.fromEntries(new FormData(form));
    if (form.id === 'pass-details') {state.details = values; checkout(2);}
    else {state.request = values; state.contactStep = 1; openContact(state.contact, false);}
  });
  document.addEventListener('keydown', e => {
    if (dialog.open && state.mode === 'gallery' && ['ArrowLeft', 'ArrowRight'].includes(e.key)) {e.preventDefault(); openGallery(state.gallery + (e.key === 'ArrowLeft' ? -1 : 1));}
    if (dialog.open && state.mode === 'schedule' && e.target.matches('[data-schedule-day]') && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
      e.preventDefault(); const day = e.key === 'Home' ? 1 : e.key === 'End' ? 7 : (state.day - 1 + (e.key === 'ArrowLeft' ? -1 : 1) + 7) % 7 + 1; openSchedule(day, true);
    }
  });
  [dialog, menu].forEach(d => {
    d.addEventListener('click', e => {if (e.target === d) {const r = d.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close();}});
    d.addEventListener('close', () => {
      if (d === dialog) $$('video', content).forEach(v => v.pause());
      if (!dialog.open && !menu.open) {document.body.classList.remove('modal-open'); if (lastTrigger?.isConnected) lastTrigger.focus({preventScroll: true});}
    });
  });
  function playAmbient(v) {
    if (pausedByUser || reduced.matches || document.hidden) {v.pause(); return;}
    if (!v.src && v.dataset.src) v.src = asset(innerWidth <= 760 && v.dataset.mobileSrc ? v.dataset.mobileSrc : v.dataset.src);
    v.play().then(() => v.classList.add('is-playing')).catch(() => {});
  }
  function syncVideos() {
    $$('[data-ambient]').forEach(v => {if (pausedByUser || reduced.matches || document.hidden) v.pause(); else if (v.dataset.inView === 'true') playAmbient(v);});
    const button = $('[data-film-toggle]');
    button.setAttribute('aria-label', pausedByUser ? 'Play background film' : 'Pause background film');
    $('use', button).setAttribute('href', pausedByUser ? '#play' : '#pause');
    $('span', button).textContent = pausedByUser ? 'Play film' : 'Pause film';
  }
  videoObserver = new IntersectionObserver(entries => entries.forEach(entry => {entry.target.dataset.inView = String(entry.isIntersecting); if (entry.isIntersecting) playAmbient(entry.target); else entry.target.pause();}), {threshold: .15});
  $$('[data-ambient]').forEach(v => videoObserver.observe(v));
  document.addEventListener('visibilitychange', syncVideos);
  reduced.addEventListener('change', () => {pausedByUser = reduced.matches; syncVideos();});
  function initMotion() {
    if (reduced.matches) return;
    const items = $$('[data-reveal],.facility-card');
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {entry.target.classList.remove('is-pre'); entry.target.classList.add('is-revealed'); revealObserver.unobserve(entry.target);}
    }), {threshold: .06, rootMargin: '0px 0px -20px 0px'});
    items.forEach(el => {
      if (el.getBoundingClientRect().top > innerHeight) {
        el.classList.add('is-pre');
        if (el.parentElement.hasAttribute('data-reveal-group')) el.style.setProperty('--reveal-delay', (Math.min([...el.parentElement.children].indexOf(el), 4) * 55) + 'ms');
      }
      revealObserver.observe(el);
    });
    const active = new Set(); let pending = false;
    const parallaxObserver = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting ? active.add(e.target) : active.delete(e.target)), {rootMargin: '50px'});
    $$('[data-parallax]').forEach(x => parallaxObserver.observe(x));
    const draw = () => {pending = false; if (reduced.matches) return; active.forEach(el => {const r = el.parentElement.getBoundingClientRect(); const y = Math.max(-70, Math.min(70, -r.top * Number(el.dataset.parallax))); el.style.setProperty('--parallax-y', y + 'px');});};
    addEventListener('scroll', () => {if (!pending) {pending = true; requestAnimationFrame(draw);}}, {passive: true});
  }
  let heroVisible = true, footerVisible = false;
  const quietSections = new Set();
  const syncFloating = () => $('.floating-pass').classList.toggle('is-visible', !heroVisible && !footerVisible && quietSections.size === 0);
  const quietObserver = new IntersectionObserver(entries => {entries.forEach(e => e.isIntersecting ? quietSections.add(e.target) : quietSections.delete(e.target)); syncFloating();}, {threshold: 0, rootMargin: '0px 0px -80px 0px'});
  ['#membership', '#reviews', '#visit', '#coaches'].forEach(s => quietObserver.observe($(s)));
  const floatObserver = new IntersectionObserver(entries => entries.forEach(e => {if (e.target.classList.contains('hero')) heroVisible = e.isIntersecting; else footerVisible = e.isIntersecting; syncFloating();}), {threshold: 0});
  floatObserver.observe($('.hero')); floatObserver.observe($('#footer'));
  renderReviews(); tick(); syncPrices(); syncVideos(); initMotion();
  setInterval(tick, 30000);
})();
