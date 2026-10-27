> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

Version: v3.0 — 2026-10-02

# Elite Fit Bali homepage v3: the copy

Lane: copy (Fable 5.1). 392 strings, one per slot, grouped by section in page order (the menu sheet and the checkout dialog are overlays and come last). Inputs: VOICE-GUIDE-ELITEFIT.md v3.0, FACTS.md v3.0, the slot files in copy/slots/. Machine files: copy.json, copy-facts.json. Open points: copy-gaps.md. Placeholders in braces are filled by the page from data; numbers, prices, times, quotes, class and coach names are never in the copy. The hero headline keys and the two pillars.* strings were written by other lanes and are listed as they stand.

## 01 Hero (header, readouts, review line) (26)

| Key | String | Max | Facts |
|---|---|---|---|
| `hero.display_1` | Better | 6/8 | F-OFR-02 |
| `hero.display_2` | Together | 8/8 | F-OFR-02 |
| `hero.h1` | Better together at Elite Fit Bali, a gym, cafe, pool and recovery club in Pererenan, Bali. | 90/110 | F-ADR-01, F-EQP-01, F-NUT-02, F-FAC-04, F-FAC-07, F-OFR-02 |
| `hero.ro_place` | Pererenan | 9/12 | F-ADR-01 |
| `hero.ro_tz` | WITA | 4/5 | F-HRS-07 |
| `hero.ro_open_k` | Open now | 8/12 | F-HRS-08 |
| `hero.ro_open_v` | Until {t} | 9/14 | F-HRS-01, F-HRS-08 |
| `hero.ro_closed_k` | Closed now | 10/12 | F-HRS-08 |
| `hero.ro_opens` | Opens at {t} | 12/14 | F-HRS-01, F-HRS-08 |
| `hero.ro_today_close_k` | Open today | 10/12 | F-HRS-08 |
| `hero.ro_closes` | Until {t} | 9/14 | F-HRS-01, F-HRS-08 |
| `hero.ro_next_k` | Next class | 10/12 | F-CLS-01 |
| `hero.ro_now_k` | On now | 6/12 | F-CLS-01 |
| `hero.ro_in` | in {t} | 6/12 | — |
| `hero.ro_until` | until {t} | 9/12 | F-CLS-01 |
| `hero.ro_today_k` | Today | 5/12 | F-CLS-02 |
| `hero.ro_today_n` | {n} classes | 11/14 | F-CLS-02 |
| `hero.ro_today_1` | 1 class | 7/14 | F-CLS-02 |
| `hero.ro_today_0` | No classes | 10/14 | F-CLS-02 |
| `hero.cta_buy` | Buy a pass | 10/16 | F-PRC-01, F-PRC-02, F-PRC-03 |
| `hero.cta_classes` | Today’s classes | 15/18 | F-CLS-01 |
| `hero.header_buy` | Buy a pass | 10/12 | F-PRC-01, F-PRC-02, F-PRC-03 |
| `hero.menu_aria` | Menu | 4/20 | — |
| `hero.logo_aria` | Elite Fit Bali, top of the page | 31/40 | — |
| `hero.rev_source` | on Google | 9/12 | F-REV-01 |
| `hero.rev_count` | reviews | 7/10 | F-REV-02 |

## 02 Classes (timetable, day tabs, live block) (42)

| Key | String | Max | Facts |
|---|---|---|---|
| `classes.eyebrow` | Timetable | 9/24 | F-CLS-01 |
| `classes.title` | What’s on today | 15/28 | F-CLS-02 |
| `classes.lead` | Every class is one hour, and you know who is coaching before you walk in. | 73/80 | F-CLS-01, F-CLS-06, F-COA-01 |
| `classes.day-short-1` | Mon | 3/4 | F-CLS-10 |
| `classes.day-short-2` | Tue | 3/4 | F-CLS-11 |
| `classes.day-short-3` | Wed | 3/4 | F-CLS-12 |
| `classes.day-short-4` | Thu | 3/4 | F-CLS-13 |
| `classes.day-short-5` | Fri | 3/4 | F-CLS-14 |
| `classes.day-short-6` | Sat | 3/4 | F-CLS-15 |
| `classes.day-short-7` | Sun | 3/4 | F-CLS-16 |
| `classes.weekend-note` | Weekend classes run on set dates. These Saturday and Sunday times are the usual pattern. The current weekend is in the GymMaster app. | 133/200 | F-CLS-03, F-CLS-15, F-CLS-16 |
| `classes.cta` | Buy a pass | 10/24 | F-PRC-01, F-PRC-02, F-PRC-03 |
| `classes.day-long-1` | Monday | 6/12 | F-CLS-10 |
| `classes.day-long-2` | Tuesday | 7/12 | F-CLS-11 |
| `classes.day-long-3` | Wednesday | 9/12 | F-CLS-12 |
| `classes.day-long-4` | Thursday | 8/12 | F-CLS-13 |
| `classes.day-long-5` | Friday | 6/12 | F-CLS-14 |
| `classes.day-long-6` | Saturday | 8/12 | F-CLS-15 |
| `classes.day-long-7` | Sunday | 6/12 | F-CLS-16 |
| `classes.live-now` | On now · ends in | 16/30 | F-CLS-01 |
| `classes.live-next` | Next class · starts in | 22/34 | F-CLS-01 |
| `classes.live-next-day` | {day} · next class starts in | 28/44 | F-CLS-01 |
| `classes.live-then` | Then {name} with {coach}, {when} | 32/90 | F-CLS-06 |
| `classes.when-today` | at {time} | 9/20 | — |
| `classes.when-day` | {day} at {time} | 15/30 | — |
| `classes.live-done` | That’s all for today. Next up is tomorrow. | 42/50 | F-CLS-02 |
| `classes.live-none-today` | No classes today. | 17/40 | F-CLS-02 |
| `classes.tomorrow` | Tomorrow | 8/14 | — |
| `classes.today` | Today | 5/12 | — |
| `classes.with` | with {coach} | 12/24 | F-CLS-06 |
| `classes.state-now` | On now | 6/8 | — |
| `classes.state-next` | Next | 4/8 | — |
| `classes.state-past` | Finished | 8/20 | — |
| `classes.range-sr` | to | 2/6 | F-CLS-01 |
| `classes.count-one` | 1 class | 7/10 | F-CLS-02 |
| `classes.count-many` | {n} classes | 11/14 | F-CLS-02 |
| `classes.tab-aria` | {day}, {count} | 14/40 | — |
| `classes.tab-aria-today` | {day}, today, {count} | 21/50 | — |
| `classes.empty-day` | {day} has no classes. | 21/40 | F-CLS-02 |
| `classes.empty-next` | The next one is {name}, {day} at {time}. | 40/70 | F-CLS-10 |
| `classes.error` | The timetable didn’t load. Find it in the GymMaster app or ask at the desk. | 75/80 | F-CLS-03, F-CLS-30 |
| `classes.tabs-label` | Days of the week | 16/30 | — |

## 03 Three pillars (intro) (2)

| Key | String | Max | Facts |
|---|---|---|---|
| `pillars.title` | Nutrition, training and rest, under one roof | 44/60 | F-MNU-07, F-FAC-12 |
| `pillars.lead` | Eat, train and rest, in whichever order suits your day. | 55/120 | F-MNU-07, F-FAC-12 |

## 04 Elite Nutrition (43)

| Key | String | Max | Facts |
|---|---|---|---|
| `nutrition.num` | 01 / 03 | 7/8 | — |
| `nutrition.name` | Elite Nutrition | 15/16 | — |
| `nutrition.lead` | You can eat here, work here and get a coffee, all without leaving the club. | 75/80 | F-NUT-01, F-NUT-02, F-MNU-01, F-MNU-07 |
| `nutrition.fact.cafe.k` | Cafe & restaurant | 17/20 | F-NUT-01, F-MNU-01 |
| `nutrition.fact.cafe.v` | Indoor cafe with a coffee and protein bar, plus an outdoor restaurant | 69/90 | F-NUT-01, F-NUT-02, F-NUT-03, F-MNU-01 |
| `nutrition.fact.specials.k` | Specials | 8/20 | F-MNU-13, F-MNU-14 |
| `nutrition.fact.specials.v` | On the cafe board, new ones every month | 39/50 | F-MNU-13, F-MNU-16 |
| `nutrition.fact.specials.note` | Prices at the counter | 21/40 | F-MNU-13, F-MNU-15 |
| `nutrition.fact.fridge.k` | Grab n’ go | 10/20 | F-MNU-17 |
| `nutrition.fact.fridge.v` | A fridge in the indoor cafe for something quick | 47/80 | F-MNU-17 |
| `nutrition.fact.drinks.k` | Drinks | 6/20 | F-MNU-20, F-MNU-10 |
| `nutrition.fact.drinks.v` | Espresso from the barista, and fruity coolers when the cafe has them | 68/70 | F-MNU-20, F-MNU-10 |
| `nutrition.fact.dietitian.k` | Dietitian | 9/20 | F-NUT-04 |
| `nutrition.fact.dietitian.v` | On request, booked 48 hours ahead, not part of a pass | 53/60 | F-NUT-04, F-TRT-01, F-TRT-02 |
| `nutrition.fact.dietitian.ask` | Ask on WhatsApp | 15/24 | F-MNU-08 |
| `nutrition.bowl.title` | Create your own bowl | 20/30 | F-MNU-22 |
| `nutrition.bowl.card.body` | Ask the team at the cafe counter what goes in and what it costs. | 64/80 | F-MNU-22, F-MNU-05 |
| `nutrition.bowl.card.cta` | Ask about the bowl | 18/24 | F-MNU-08 |
| `nutrition.cta` | Buy a pass | 10/24 | F-PRC-01, F-PRC-02, F-PRC-03 |
| `nutrition.bowl.cta` | Send this bowl on WhatsApp | 26/32 | F-MNU-08 |
| `nutrition.bowl.steps.aria` | Bowl steps | 10/30 | — |
| `nutrition.bowl.step` | Step {n} of {total} | 19/30 | — |
| `nutrition.bowl.stepDone` | Chosen | 6/16 | — |
| `nutrition.bowl.hint.one` | Pick one | 8/24 | — |
| `nutrition.bowl.hint.many` | Pick as many as you like | 24/24 | — |
| `nutrition.bowl.hint.max` | Pick up to {n} | 14/30 | — |
| `nutrition.bowl.hint.optional` | (optional) | 10/16 | — |
| `nutrition.bowl.back` | Back | 4/12 | — |
| `nutrition.bowl.next` | Next | 4/12 | — |
| `nutrition.bowl.reset` | Empty the bowl | 14/20 | — |
| `nutrition.bowl.vessel.empty` | Empty so far | 12/30 | — |
| `nutrition.bowl.total` | Total | 5/12 | — |
| `nutrition.bowl.included` | Included | 8/16 | — |
| `nutrition.bowl.sum.start` | Start with a {step} | 19/40 | — |
| `nutrition.bowl.sum.partial` | {items}. Now pick your {step} | 29/60 | — |
| `nutrition.bowl.sum.done` | {items}. Your bowl is ready to send | 35/40 | — |
| `nutrition.bowl.added` | {name} added to your bowl | 25/30 | — |
| `nutrition.bowl.removed` | {name} taken out of your bowl | 29/30 | — |
| `nutrition.bowl.full` | Up to {n} for this step | 23/40 | — |
| `nutrition.wa.generic` | Hello Elite Fit Bali, what’s on at the cafe today, and what are the specials? | 77/120 | F-ADR-14, F-MNU-13 |
| `nutrition.wa.bowlAsk` | Hello Elite Fit Bali, can I put together my own bowl at the cafe? What goes in and what does it cost? | 101/120 | F-ADR-14, F-MNU-22 |
| `nutrition.wa.bowl` | Hello Elite Fit Bali, I’d like a bowl with {items}. Can I pick it up at the cafe? | 81/120 | F-ADR-14 |
| `nutrition.wa.dietitian` | Hello Elite Fit Bali, I’d like to book a dietitian. Which days work, and what does a session cost? | 98/120 | F-ADR-14, F-NUT-04, F-TRT-01 |

## 05 Elite Training (19)

| Key | String | Max | Facts |
|---|---|---|---|
| `training.num` | 02 / 03 | 7/8 | — |
| `training.name` | Elite Training | 14/16 | — |
| `training.lead` | Weights indoors, functional work outside, and a class when you want company. | 76/80 | F-EQP-01, F-FAC-09, F-CLS-01 |
| `training.fact.floor.k` | Gym floor | 9/20 | F-EQP-01 |
| `training.fact.floor.v` | Indoor gym, outdoor functional area and a cardio floor | 54/100 | F-EQP-01, F-EQP-03, F-FAC-09 |
| `training.fact.equipment.k` | Equipment | 9/20 | F-EQP-01, F-EQP-04 |
| `training.fact.classes.k` | Classes | 7/20 | F-CLS-01 |
| `training.fact.classes.v` | classes a week, one hour each, included with a membership | 57/70 | F-CLS-01, F-CLS-28, F-CLS-29 |
| `training.fact.coaches.k` | Coaches | 7/20 | F-COA-01 |
| `training.fact.hours.k` | Open | 4/20 | F-HRS-01 |
| `training.hours.daily` | {open} to {close}, every day | 28/40 | F-HRS-01, F-HRS-06, F-HRS-08 |
| `training.hours.range` | {days}, {open} to {close} | 25/40 | F-HRS-08 |
| `training.hours.until` | Until {close}, every day | 24/40 | F-HRS-01, F-HRS-06 |
| `training.hours.until.short` | until {close} | 13/24 | F-HRS-08 |
| `training.hours.open` | Open now · until {close} | 24/36 | F-HRS-01, F-HRS-08 |
| `training.hours.closed` | Closed now · opens {open} | 25/36 | F-HRS-01, F-HRS-08 |
| `training.hours.closed.plain` | Closed now | 10/24 | F-HRS-08 |
| `training.cta` | Buy a pass | 10/20 | F-PRC-01, F-PRC-02, F-PRC-03 |
| `training.cta2` | See today’s classes | 19/24 | F-CLS-01 |

## 06 Elite Rest (18)

| Key | String | Max | Facts |
|---|---|---|---|
| `rest.num` | 03 / 03 | 7/8 | — |
| `rest.name` | Elite Rest | 10/16 | — |
| `rest.lead` | Pool deck overlooking rice fields, four rooms from hot to cold. Take your time. | 79/80 | F-FAC-04, F-FAC-06, F-TMP-06 |
| `rest.fact.pool.k` | Pool deck | 9/20 | F-FAC-04 |
| `rest.fact.pool.v` | An outdoor pool with sunbeds and a lounge area | 46/90 | F-FAC-04, F-FAC-05 |
| `rest.fact.treatments.k` | Treatments | 10/20 | F-TRT-01 |
| `rest.fact.treatments.v` | Sports massage, physiotherapy, manual therapy and dietitian, on request, booked 48 hours ahead, not part of a pass | 114/120 | F-TRT-01, F-TRT-02 |
| `rest.fact.included.k` | Included | 8/20 | F-FAC-01 |
| `rest.fact.included.v` | Towel, shower and lockers, and water for your own bottle | 56/90 | F-FAC-01, F-FAC-02, F-FAC-07 |
| `rest.fact.hours.k` | Open | 4/20 | F-HRS-02 |
| `rest.hours.daily` | {open} to {close}, every day | 28/40 | F-HRS-02, F-HRS-06, F-HRS-08 |
| `rest.hours.until` | Until {close}, every day | 24/40 | F-HRS-02, F-HRS-06 |
| `rest.hours.range` | {days}, {open} to {close} | 25/40 | F-HRS-08 |
| `rest.hours.rangeUntil` | {days} until {close} | 20/40 | F-HRS-08 |
| `rest.readout.title` | Room temperatures | 17/28 | F-TMP-01, F-TMP-02, F-TMP-03, F-TMP-04 |
| `rest.readout.sr` | {a} to {b} degrees Celsius | 26/60 | F-TMP-05 |
| `rest.readout.srOne` | {a} degrees Celsius | 19/60 | F-TMP-05 |
| `rest.cta` | Buy a pass | 10/24 | F-PRC-01, F-PRC-02, F-PRC-03 |

## 07 Coaches (7)

| Key | String | Max | Facts |
|---|---|---|---|
| `coaches.eyebrow` | The coaches | 11/24 | F-COA-01 |
| `coaches.title` | Every class has a coach, and this is who leads what | 51/60 | F-COA-01, F-CLS-01 |
| `coaches.lead` | Tap a coach to see their classes, day by day, with the times. | 61/70 | F-COA-01, F-CLS-10 |
| `coaches.count-many` | {n} classes a week | 18/24 | F-COA-01 |
| `coaches.count-one` | 1 class a week | 14/24 | F-COA-01 |
| `coaches.go-sr` | , opens {day} in the timetable | 30/40 | — |
| `coaches.error` | The coaches didn’t load. Ask at the desk or look in the GymMaster app. | 70/80 | F-CLS-30 |

## 08 Pricing (passes, Duo, offers, trust line) (52)

| Key | String | Max | Facts |
|---|---|---|---|
| `pricing.eyebrow` | Passes | 6/24 | F-PRC-14 |
| `pricing.title` | Come for a day or stay the whole year | 37/48 | F-PRC-01, F-PRC-14 |
| `pricing.lede` | Gym, recovery or both, then the length that suits you. Prices are in Indonesian rupiah. | 87/170 | F-PRC-01, F-PRC-02, F-PRC-03, F-PRC-18, F-FAC-08 |
| `pricing.length_legend` | Pass length | 11/60 | F-PRC-14 |
| `pricing.duo_label` | Duo, for two of you | 19/44 | F-PRC-05, F-PRC-07 |
| `pricing.duo_hint` | One price each, for whoever you bring. Not every pass has a Duo price. | 70/90 | F-PRC-05, F-PRC-06, F-PRC-07 |
| `pricing.nojs` | Prices need JavaScript to load. Message us on WhatsApp and a person sends them. | 79/100 | F-ADR-09, F-ADR-12 |
| `pricing.notes_title` | Good to know | 12/24 | F-PRC-13, F-CLS-32 |
| `pricing.partner_title` | Partner discounts | 17/28 | F-PRC-11, F-OFR-06 |
| `pricing.partner_ask` | Ask which discounts are on now | 30/44 | F-OFR-11 |
| `pricing.offers_title` | Offers right now | 16/28 | F-OFR-01, F-OFR-03 |
| `pricing.unit_day` | day | 3/8 | F-PRC-14 |
| `pricing.unit_week` | week | 4/8 | F-PRC-14 |
| `pricing.unit_weeks` | weeks | 5/8 | F-PRC-14 |
| `pricing.unit_days` | days | 4/8 | F-PRC-14 |
| `pricing.duo_each` | each, for two | 13/24 | F-PRC-05 |
| `pricing.duo_na` | no Duo price | 12/24 | F-PRC-06 |
| `pricing.bundle` | Perform and Recharge bought separately come to {sum} | 52/64 | F-PRC-01, F-PRC-03, F-PRC-12 |
| `pricing.cta_aria` | Buy the {tier} pass, {length} | 29/80 | — |
| `pricing.status_len` | Showing prices for {length} | 27/60 | — |
| `pricing.status_len_duo` | Showing Duo prices for {length}, per person | 43/60 | F-PRC-05 |
| `pricing.status_pick` | {tier} chosen | 13/40 | — |
| `pricing.wa_pass` | Hello Elite Fit Bali, I’d like the {tier} pass for {length} at {price}. What’s the next step? | 93/140 | F-ADR-14 |
| `pricing.wa_pass_duo` | Hello Elite Fit Bali, we’d like the {tier} Duo pass for {length} at {price} {duo}. What’s the next step? | 104/150 | F-ADR-14, F-PRC-05 |
| `pricing.partner_stat` | {count} offers, {min} to {max} off | 34/44 | F-OFR-07, F-OFR-08 |
| `pricing.offer_wa` | Ask on WhatsApp | 15/24 | F-ADR-14 |
| `pricing.hours_area_open` | {area} from {open} | 18/40 | F-HRS-02, F-HRS-08 |
| `pricing.wa_partner` | Hello Elite Fit Bali, which partner discounts are on right now? | 63/120 | F-ADR-14, F-OFR-11 |
| `pricing.classes_only` | A single class is {single} and ten classes are {ten}. Class passes don’t include the gym floor. | 95/110 | F-CLS-32 |
| `pricing.trust_google` | On Google | 9/16 | F-REV-01 |
| `pricing.trust_reviews` | {count} reviews | 15/24 | F-REV-02 |
| `pricing.trust_read` | Read the reviews | 16/28 | F-REV-03 |
| `pricing.trust_hours` | Open | 4/20 | F-HRS-01 |
| `pricing.hours_every` | Every day, {open} to {close} | 28/40 | F-HRS-01, F-HRS-06, F-HRS-08 |
| `pricing.hours_range` | {days}, {open} to {close} | 25/40 | F-HRS-08 |
| `pricing.hours_until` | Until {close} | 13/24 | F-HRS-08 |
| `pricing.days_short` | Mon,Tue,Wed,Thu,Fri,Sat,Sun | 27/40 | — |
| `pricing.days_to` | to | 2/6 | — |
| `pricing.trust_find` | Find us | 7/16 | F-ADR-01 |
| `pricing.trust_directions` | Get directions | 14/24 | F-ADR-05 |
| `pricing.trust_every` | With every pass | 15/28 | F-FAC-01 |
| `pricing.offer_until` | Until {date} | 12/24 | — |
| `pricing.offer_more` | Read more | 9/16 | — |
| `pricing.fail` | The prices didn’t load. A person on WhatsApp can send them. | 59/120 | F-ADR-09, F-ADR-12 |
| `pricing.fail_cta` | Message us on WhatsApp | 22/28 | F-ADR-09, F-ADR-12 |
| `pricing.cta` | Buy a pass | 10/24 | F-PRC-01, F-PRC-02, F-PRC-03 |
| `pricing.trust_aria` | The club at a glance | 20/40 | — |
| `pricing.buy_cta` | Buy a pass | 10/16 | F-PRC-01, F-PRC-02, F-PRC-03 |
| `pricing.buy_label` | {tier} day pass from | 20/30 | F-PRC-03 |
| `pricing.buy_aria` | Quick link to passes | 20/24 | — |
| `pricing.wa_hello` | Hello Elite Fit Bali, I have a question about the club. | 55/70 | F-ADR-14 |
| `pricing.wa_aria` | Message us on WhatsApp | 22/40 | F-ADR-09, F-ADR-12 |

## 09 Reviews (11)

| Key | String | Max | Facts |
|---|---|---|---|
| `reviews.eyebrow` | On Google | 9/24 | F-REV-01, F-REV-03 |
| `reviews.title` | What people say about the club | 30/40 | F-REV-06, F-REV-09, F-REV-11 |
| `reviews.lead` | A selection from the club’s Google review page, each one as written. | 68/80 | F-REV-03 |
| `reviews.score_k` | Google rating | 13/16 | F-REV-01 |
| `reviews.score_of` | out of 5 | 8/10 | F-REV-01 |
| `reviews.count_k` | Reviews | 7/16 | F-REV-02 |
| `reviews.src_google` | Google review | 13/16 | F-REV-04, F-REV-06 |
| `reviews.stars_aria` | {n} out of 5 stars | 18/24 | — |
| `reviews.list_aria` | Reviews from Google | 19/40 | — |
| `reviews.link` | Read all reviews on Google | 26/32 | F-REV-03 |
| `reviews.link_new` | , opens in a new tab | 20/24 | — |

## 10 Visit (27)

| Key | String | Max | Facts |
|---|---|---|---|
| `visit.eyebrow` | Visit | 5/24 | F-ADR-01 |
| `visit.sr` | Find us in | 10/30 | F-ADR-01 |
| `visit.place` | Pererenan | 9/14 | F-ADR-01, F-ADR-03 |
| `visit.lead` | A place you can find and walk into. Come by any day of the week and someone shows you around. | 93/100 | F-ADR-15, F-OFR-03 |
| `visit.addr_k` | Address | 7/16 | F-ADR-01 |
| `visit.plus_k` | Plus code | 9/16 | F-ADR-03 |
| `visit.directions` | Get directions | 14/24 | F-ADR-05 |
| `visit.wa` | Book a free tour | 16/30 | F-ADR-14, F-ADR-15, F-OFR-03 |
| `visit.new_tab` | , opens in a new tab | 20/24 | — |
| `visit.hours_k` | Hours | 5/20 | F-HRS-01, F-HRS-02 |
| `visit.every_day` | Every day | 9/16 | F-HRS-06 |
| `visit.today` | Today | 5/16 | — |
| `visit.open_now` | Open now | 8/16 | F-HRS-08 |
| `visit.open_until` | until {t} | 9/24 | F-HRS-01, F-HRS-08 |
| `visit.closed_now` | Closed now | 10/16 | F-HRS-08 |
| `visit.opens_at` | opens at {t} | 12/24 | F-HRS-01, F-HRS-08 |
| `visit.opens_tomorrow` | opens tomorrow at {t} | 21/28 | F-HRS-01, F-HRS-06, F-HRS-08 |
| `visit.clip_cap` | Front door · Jalan Sempol No. 26 | 32/40 | F-ADR-01 |
| `visit.f_first_k` | First visit | 11/16 | — |
| `visit.f_first_v` | Free tour any day of the week, ask on WhatsApp or at the desk | 61/80 | F-ADR-15, F-OFR-03, F-ADR-14 |
| `visit.f_bring_k` | What to bring | 13/16 | — |
| `visit.f_bring_v` | A water bottle to fill here. Towel, shower and locker are provided | 66/90 | F-FAC-01, F-FAC-02, F-FAC-03 |
| `visit.f_wear_k` | What to wear | 12/16 | — |
| `visit.f_wear_v` | Activewear for Perform, closed shoes recommended. Swimwear or beachwear for Recharge | 84/100 | F-FAC-10 |
| `visit.f_class_k` | For a class | 11/16 | — |
| `visit.f_class_v` | Book in the GymMaster app or at the front desk, and be there 10 minutes early | 77/90 | F-CLS-30, F-CLS-31 |
| `visit.wa_text` | Hello Elite Fit Bali, I'd like to book a tour | 45/60 | F-ADR-14 |

## 11 Footer (32)

| Key | String | Max | Facts |
|---|---|---|---|
| `footer.aria` | Address, hours and links | 24/40 | — |
| `footer.logo_alt` | Elite Fit Bali | 14/24 | — |
| `footer.descriptor` | A gym, cafe, pool and recovery club in Pererenan, Bali. | 55/70 | F-ADR-01, F-EQP-01, F-NUT-02, F-FAC-04, F-FAC-07 |
| `footer.nav_k` | On this page | 12/20 | — |
| `footer.link_classes` | Classes | 7/16 | F-CLS-01 |
| `footer.link_nutrition` | Elite Nutrition | 15/16 | — |
| `footer.link_training` | Elite Training | 14/16 | — |
| `footer.link_rest` | Elite Rest | 10/16 | — |
| `footer.link_coaches` | Coaches | 7/16 | F-COA-01 |
| `footer.link_pricing` | Passes | 6/16 | F-PRC-14 |
| `footer.link_reviews` | Reviews | 7/16 | F-REV-01 |
| `footer.link_visit` | Visit | 5/16 | F-ADR-01 |
| `footer.visit_k` | Visit | 5/16 | F-ADR-01, F-ADR-15 |
| `footer.maps_sr` | , opens Google Maps in a new tab | 32/40 | F-ADR-05 |
| `footer.new_tab` | , opens in a new tab | 20/28 | — |
| `footer.open_now` | Open now | 8/16 | F-HRS-08 |
| `footer.open_until` | until {t} | 9/20 | F-HRS-01, F-HRS-08 |
| `footer.closed_now` | Closed now | 10/16 | F-HRS-08 |
| `footer.opens_at` | opens at {t} | 12/20 | F-HRS-01, F-HRS-08 |
| `footer.hours_every_day` | Every day | 9/16 | F-HRS-06 |
| `footer.hours_today` | Today | 5/16 | — |
| `footer.wa` | Message us on WhatsApp | 22/28 | F-ADR-09, F-ADR-12 |
| `footer.wa_text` | Hello Elite Fit Bali, I have a question about the club. | 55/70 | F-ADR-14 |
| `footer.follow_k` | Follow | 6/16 | F-ADR-16 |
| `footer.social_instagram` | Elite Fit Bali on Instagram | 27/40 | F-ADR-16 |
| `footer.social_facebook` | Elite Fit Bali on Facebook | 26/40 | F-ADR-16 |
| `footer.social_tiktok` | Elite Fit Bali on TikTok | 24/40 | F-ADR-16 |
| `footer.terms` | The club’s terms | 16/28 | F-PRC-14 |
| `footer.top` | Back to top | 11/16 | — |
| `footer.mark_a` | Elite Fit | 9/12 | — |
| `footer.mark_b` | Bali | 4/8 | — |
| `footer.name` | Elite Fit Bali | 14/24 | — |

## 12 Menu sheet (27)

| Key | String | Max | Facts |
|---|---|---|---|
| `menu.dialog_aria` | Menu | 4/24 | — |
| `menu.close_aria` | Close the menu | 14/20 | — |
| `menu.nav_aria` | Page sections | 13/24 | — |
| `menu.link_classes` | Classes | 7/16 | F-CLS-01 |
| `menu.link_nutrition` | Elite Nutrition | 15/16 | — |
| `menu.link_training` | Elite Training | 14/16 | — |
| `menu.link_rest` | Elite Rest | 10/16 | — |
| `menu.link_coaches` | Coaches | 7/16 | F-COA-01 |
| `menu.link_pricing` | Passes | 6/16 | F-PRC-14 |
| `menu.link_reviews` | Reviews | 7/16 | F-REV-01 |
| `menu.link_visit` | Visit | 5/16 | F-ADR-01 |
| `menu.buy` | Buy a pass | 10/16 | F-PRC-01, F-PRC-02, F-PRC-03 |
| `menu.wa` | Message us on WhatsApp | 22/28 | F-ADR-09, F-ADR-12 |
| `menu.wa_text` | Hello Elite Fit Bali, I have a question about the club. | 55/60 | F-ADR-14 |
| `menu.new_tab` | , opens in a new tab | 20/30 | — |
| `menu.visit_k` | Visit | 5/12 | F-ADR-01, F-ADR-15 |
| `menu.maps_sr` | , opens Google Maps in a new tab | 32/40 | F-ADR-05 |
| `menu.open_now` | Open now | 8/14 | F-HRS-08 |
| `menu.open_until` | until {t} | 9/16 | F-HRS-01, F-HRS-08 |
| `menu.closed_now` | Closed now | 10/14 | F-HRS-08 |
| `menu.opens_at` | opens at {t} | 12/16 | F-HRS-01, F-HRS-08 |
| `menu.hours_every_day` | Every day | 9/16 | F-HRS-06 |
| `menu.hours_today` | Today | 5/12 | — |
| `menu.follow_k` | Follow | 6/12 | F-ADR-16 |
| `menu.social_instagram` | Elite Fit Bali on Instagram | 27/40 | F-ADR-16 |
| `menu.social_facebook` | Elite Fit Bali on Facebook | 26/40 | F-ADR-16 |
| `menu.social_tiktok` | Elite Fit Bali on TikTok | 24/40 | F-ADR-16 |

## 13 Checkout dialog (86)

| Key | String | Max | Facts |
|---|---|---|---|
| `checkout.title` | Buy a pass | 10/20 | — |
| `checkout.s1_name` | Pass | 4/16 | — |
| `checkout.s2_name` | Your details | 12/16 | — |
| `checkout.s3_name` | Review | 6/16 | — |
| `checkout.s4_name` | Payment | 7/16 | — |
| `checkout.s5_name` | Done | 4/16 | — |
| `checkout.s1_h` | Pick your pass | 14/32 | — |
| `checkout.total` | Total | 5/16 | F-PRC-18 |
| `checkout.f_tier` | Which part of the club | 22/40 | F-PRC-12, F-FAC-08 |
| `checkout.f_length` | For how long | 12/32 | F-PRC-14 |
| `checkout.duo_label` | Duo, for two of you | 19/40 | F-PRC-05, F-PRC-07 |
| `checkout.f_start` | First day | 9/32 | — |
| `checkout.today` | Today | 5/12 | — |
| `checkout.tomorrow` | Tomorrow | 8/12 | — |
| `checkout.pick` | Pick a date | 11/16 | — |
| `checkout.date_label` | Start date | 10/20 | — |
| `checkout.start_hint` | Your pass runs from this day for its full length. | 49/60 | F-PRC-14 |
| `checkout.incl_title` | What’s included | 15/24 | F-PRC-08, F-PRC-09, F-PRC-10 |
| `checkout.s2_h` | Your name and WhatsApp | 22/32 | — |
| `checkout.name_label` | Your name | 9/24 | — |
| `checkout.phone_label` | WhatsApp number | 15/24 | — |
| `checkout.phone_hint` | With the country code, like +62 or +61 | 38/60 | — |
| `checkout.email_label` | Email, optional | 15/24 | — |
| `checkout.partner_label` | Name of the person coming with you | 34/48 | F-PRC-07 |
| `checkout.details_note` | These go into your WhatsApp message and nowhere else. | 53/100 | — |
| `checkout.s3_h` | Have a look before you go on | 28/32 | — |
| `checkout.r_pass` | Your pass | 9/24 | — |
| `checkout.change` | Change | 6/12 | — |
| `checkout.r_note` | All prices in Indonesian rupiah | 31/50 | F-PRC-18 |
| `checkout.r_details` | Your details | 12/24 | — |
| `checkout.r_terms` | The club’s terms | 16/32 | F-PRC-13, F-PRC-14, F-PRC-15 |
| `checkout.r_terms_link` | Read the full terms | 19/32 | F-PRC-14 |
| `checkout.s4_h` | How you’d like to pay | 21/32 | — |
| `checkout.concept_tag` | Concept | 7/12 | — |
| `checkout.concept_notice` | This is a concept. Nothing is charged here and nothing is sent. | 63/90 | — |
| `checkout.methods_legend` | Pay with | 8/24 | — |
| `checkout.ill_tag` | Illustration | 12/16 | — |
| `checkout.sample_caption` | A sample only. The club’s real options may differ. | 50/70 | — |
| `checkout.done_lead` | Your order is ready. Send it on WhatsApp and a person answers. | 62/120 | F-ADR-09, F-ADR-12 |
| `checkout.msg_title` | See the message | 15/24 | — |
| `checkout.done_concept` | Nothing was charged and nothing has been sent by this page. | 59/80 | — |
| `checkout.back_to_page` | Back to the page | 16/24 | — |
| `checkout.aside_title` | Your order | 10/24 | — |
| `checkout.back` | Back | 4/16 | — |
| `checkout.wa_send` | Send it on WhatsApp | 19/40 | F-ADR-09, F-ADR-12 |
| `checkout.discard_q` | Leave without finishing | 23/32 | — |
| `checkout.discard_keep` | Keep going | 10/20 | — |
| `checkout.discard_yes` | Leave | 5/16 | — |
| `checkout.step_n` | Step {n} of {total} | 19/24 | — |
| `checkout.next_1` | Continue | 8/24 | — |
| `checkout.next_2` | Continue | 8/24 | — |
| `checkout.next_3` | Go to payment | 13/24 | — |
| `checkout.next_4` | Pay | 3/24 | — |
| `checkout.paying` | One moment | 10/24 | — |
| `checkout.pay_aria` | Pay {total}, a concept, nothing is charged | 42/90 | — |
| `checkout.each` | each | 4/12 | F-PRC-05 |
| `checkout.goto` | Step {n}, {name} | 16/40 | — |
| `checkout.unit_day` | Day pass | 8/16 | F-PRC-14 |
| `checkout.unit_week` | 1 week | 6/16 | F-PRC-14 |
| `checkout.unit_weeks` | {n} weeks | 9/16 | F-PRC-14 |
| `checkout.duo_name` | {tier} Duo | 10/24 | F-PRC-05 |
| `checkout.duo_hint` | One price each, for two of you | 30/50 | F-PRC-05 |
| `checkout.duo_where` | Duo prices exist for {where}. | 29/80 | F-PRC-05, F-PRC-06 |
| `checkout.duo_day` | the {tiers} day pass | 20/40 | F-PRC-06 |
| `checkout.and` | and | 3/8 | — |
| `checkout.start_line` | From {date} | 11/40 | — |
| `checkout.done_h` | Ready to send, {name} | 21/32 | — |
| `checkout.wa_note` | WhatsApp opens with the text ready, to {number}. You tap send. | 62/100 | F-ADR-12 |
| `checkout.name_err` | Please add your name. | 21/48 | — |
| `checkout.phone_err` | That number doesn’t look right. Use 7 to 15 digits, country code included. | 74/90 | — |
| `checkout.email_err` | That email doesn’t look right. You can also leave it empty. | 59/80 | — |
| `checkout.partner_err` | Please add the name of the person coming with you. | 50/70 | F-PRC-07 |
| `checkout.date_err` | Please pick a date. | 19/40 | — |
| `checkout.err_summary` | Some fields need a look before you continue | 43/48 | — |
| `checkout.l_name` | Name | 4/16 | — |
| `checkout.l_phone` | WhatsApp | 8/16 | — |
| `checkout.l_email` | Email | 5/16 | — |
| `checkout.l_partner` | Coming with you | 15/24 | F-PRC-07 |
| `checkout.l_empty` | Left empty | 10/16 | — |
| `checkout.announce_total` | Total {total} | 13/32 | F-PRC-18 |
| `checkout.price_missing` | This price is missing here. Ask on WhatsApp and a person sends it. | 66/100 | F-ADR-12 |
| `checkout.aria_dialog` | Buy a pass | 10/30 | — |
| `checkout.close` | Close | 5/20 | — |
| `checkout.prog_aria` | Steps | 5/24 | — |
| `checkout.aside_aria` | Your order | 10/24 | — |
| `checkout.duo_each` | {each} each, for two | 20/40 | F-PRC-05, F-PRC-16 |

## Change log

- v3.0 — 2026-10-02: created. All 310 slots written from the voice guide and FACTS v3.0; checked by script for key set, max lengths, banned words, "Elite" only in names, placeholders from the notes, valid JSON. Gaps and note conflicts in copy-gaps.md.
- v3.0 delta — 2026-10-02 13:00: hero headline set to the club's own "Better / Together" by the coordinator (writer original kept in copy.writer-original.json); checkout.duo_each added ("{each} each, for two"), checkout.duo_calc retired; social link names re-checked at max 40; all 310 keys re-validated against copy/slots/*.json.
- v3.0 delta 2 — 2026-10-02 14:18: Phase 2 sections added, coaches (7), reviews (11), visit (27), footer (32), and the menu links Coaches, Reviews, Visit; footer labels repeat the menu strings word for word; pillars.title and pillars.lead (another lane) listed; 392 keys, all re-validated against every copy/slots/*.json.
