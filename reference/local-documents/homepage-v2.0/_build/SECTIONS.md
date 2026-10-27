> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# SECTIONS — build spec, Elite Fit Bali homepage v2.0

Version: v1.0 — 2026-10-01 · owner: Step 1 (Fable lead) · binding for markup and copy (CONTRACT §3 names the authority). Copy is final English; copy it word for word. Facts and prices come only from BRAND-NOTES.md and the evidence files. Everything purchasable is a labelled concept (CONTRACT §1).

## 0. Page skeleton (the integrator assembles exactly this)

```html
<body class="page" data-zone="neutral">
<a class="skip-link" href="#today">Skip to today's classes</a>
<!-- @include partials/header.html -->      <!-- <header id="site-header" class="hdr" data-motion="header"> -->
<main id="main">
<!-- @include partials/hero.html -->        <!-- <section id="hero"     class="sec sec--hero sec--flush" data-zone="neutral" aria-labelledby="hero-title" data-motion="hero"> -->
<!-- @include partials/schedule.html -->    <!-- <section id="today"    class="sec sec--today"            data-zone="workout" aria-labelledby="today-title"> -->
<!-- @include partials/passes.html -->      <!-- <section id="passes"   class="sec sec--passes"           data-zone="cafe"    aria-labelledby="passes-title"> -->
<!-- @include partials/zones.html -->       <!-- <section id="club"     class="sec sec--club"             data-zone="neutral" aria-labelledby="club-title"> -->
<!-- @include partials/recovery.html -->    <!-- <section id="recharge" class="sec sec--recharge"         data-zone="spa"     aria-labelledby="recharge-title"> -->
<!-- @include partials/trainers.html -->    <!-- <section id="coaches"  class="sec sec--coaches"          data-zone="workout" aria-labelledby="coaches-title"> -->
<!-- @include partials/reviews.html -->     <!-- <section id="reviews"  class="sec sec--reviews"          data-zone="cafe"    aria-labelledby="reviews-title"> -->
<!-- @include partials/visit.html -->       <!-- <section id="visit"    class="sec sec--visit"            data-zone="neutral" aria-labelledby="visit-title"> -->
</main>
<!-- @include partials/footer.html -->      <!-- <footer id="site-footer" class="foot" data-zone="workout"> -->
<!-- @include partials/buybar.html -->      <!-- <div id="buybar" class="buybar" data-state="closed" data-motion="buybar"> (fixed, < 760 only) -->
<!-- @include partials/checkout.html -->    <!-- <div id="checkout" class="co" role="dialog" aria-modal="true" aria-labelledby="co-title" data-state="closed" data-checkout-step="choose" data-motion="sheet"> -->
</body>
```

Page rhythm (surface by zone): concrete light (header, hero) → black steel (Today) → cream bench / oak (passes) → concrete light (the club) → sand tile with four stage tones (Recharge) → black steel (coaches) → cream bench (reviews) → concrete light (visit) → black steel (footer). Light, dark, light, light, sand, dark, light, light, dark.

Shared classes from base.css: `.container .sec .btn(.--primary .--ghost .--ink .--small .--block) .eyebrow .chip .label .stack(.--xs…--xl) .sec-head .lede .num(.--xl .--l .--m .--s) .btn-row .chip-row(.--scroll) .field .input .visually-hidden .skip-link .ratio-9x16 .ratio-4x5 .ratio-3x2 .ratio-1x1 .cover`. Lanes never redefine them; modifiers go in the lane namespace.

Global copy rules: temperatures with the degree sign and no unit ("4–6°"); prices as `IDR 350.000` (dot thousands, space after IDR); times 24-hour `09:00–10:00`; the club's halves are capitalised: Perform, Recharge, Elite; never "world-class", "best", "ultimate", "premium" in visible copy.

Owner map: L1 header + hero · L2 passes + buybar + checkout · L3 schedule · L4 zones + recovery · L5 trainers + reviews + visit + footer · L6 api.js + data.

---

## 1. Header — `partials/header.html` — L1 — zone neutral

Purpose: brand, way in, buy action on desktop. Sticky in flow (not fixed), so it never covers hero content. Height `var(--hdr-h)` (56 px < 1024, 72 px from 1024).

Mobile (< 760): `[logo]` left · `[Menu]` right (44×44, `aria-expanded`, `aria-controls="hdr-menu"`). No CTA (the buy bar does it). Menu = sheet from the top (`.hdr__menu[data-state]`, `data-motion="sheet"`), links stacked and centred, 48 px rows: Today's classes (#today) · Passes (#passes) · The club (#club) · Recharge (#recharge) · Coaches (#coaches) · Visit (#visit) · WhatsApp (https://wa.me/6285195520220?text=Hello%20Elite%20Fit%20Bali!%20I%20have%20a%20question). Last row a full-width `.btn.btn--primary` "Buy a pass".

Desktop (≥ 1024): logo left · nav centre (`.hdr__nav`: Today · Passes · The club · Recharge · Coaches · Visit) · right: WhatsApp icon link (aria-label "Message us on WhatsApp") + `.btn.btn--primary.btn--small.hdr__buy` "Buy a pass" (opens checkout, preselect perform/day).

Logo (`.hdr__brand`, link to `/`, aria-label "Elite Fit Bali, home"): the EF mark PNG `logo-mark-taupe.png` (v1.3 assets, 28 px high; copy to `assets/img/hero-logo-mark.png`) followed by the wordmark "ELITE FIT" set in Syne 700, 15 px, letter-spacing 0.22em, colour `--ink` (Syne Bold matches the entrance sign at 0.89 glyph overlap; the PNG wordmark stays in the footer). Background: `rgba(217,214,204,.86)` + `backdrop-filter: blur(12px)`; hairline `--line` at the bottom once `data-scrolled="true"` (set by motion.js).

Hooks: `data-motion="header"` on the header; `sheet` on the menu; `press` on buttons. Classes: `.hdr .hdr__brand .hdr__mark .hdr__word .hdr__nav .hdr__link .hdr__buy .hdr__wa .hdr__toggle .hdr__menu .hdr__menu-link`.

---

## 2. Hero — `partials/hero.html` — L1 — zone neutral — `#hero`

Archetype: D, type and material block as the device (Gymbox / Performance Lab mechanism), with one working object inside the hero (Barry's mechanism) and the reel as an inset window (Meritage mechanism). Not: full-bleed video, centred headline, two buttons.

Height: `min-height: var(--hero-h)` (66svh, 60–70 allowed), measured below the header. With header 56 px at 390×844 the hero ends at ≈613 px; the Today strip's date, day chips and first card show in the remaining ≈230 px (CONTRACT §9.1).

Layers (`data-motion-layer`):
- `media` `.hero__media`: `<video class="hero__video" muted loop playsinline preload="none" poster="assets/img/hero-poster-9x16.webp" aria-hidden="true">` with `assets/video/hero-reel-9x16.mp4` (copy from v1.3; 720×1280, 6.4 MB — L1 re-encodes to ≤ 1.5 MB if the tooling allows, else keeps it and reports). Started by hero.js after `load` + idle, never under save-data or reduced motion; the poster is a 720×1280 WebP ≤ 90 KB from `hero-reel-poster.jpg` (frame at 38 s, pool deck) plus `assets/img/hero-poster-9x16-lqip.webp` 72×128 for `<picture>`/background. `object-fit: cover; object-position: 50% 40%`.
- `board` `.hero__board`: the concrete slab carrying the type. Surface `--surface`, radius `--r-card` on the edge that meets the reel, padding `var(--gutter)`.
- `wordmark` `.hero__title` = `<h1 id="hero-title">Perform.<br>Recharge.</h1>` (uppercase via CSS, `data-motion="reveal-words"`).
- `copy` `.hero__copy`: eyebrow + sub + CTAs.
- `card` `.hero__card` (desktop only, ≥ 1024): the working pass card.
- `cue` `.hero__cue`: the live clock chip.

Copy:
- Eyebrow mobile (`.hero__eyebrow`): `Pererenan, Bali · <time class="hero__clock num num--s" data-motion="clock" data-clock>09:30</time> · open till 22:00`. No-JS text: `Pererenan, Bali · open every day 6:00–22:00`. hero.js writes the Bali time (EFApi.now(), HH:MM) every minute; before 6:00 or after 22:00 the third item reads `opens 6:00`.
- Eyebrow desktop: `Pererenan, Bali · Jalan Sempol 26` (the time moves to the cue chip).
- H1: `Perform.` / `Recharge.` (two lines, forced break). Weight 700 as base.css sets it, never 800: measured in WebKit, "RECHARGE." in Syne 800 at 42 px is 422 px wide and overflows the 350 px column at 390; in 700 it is 286 px.
- Sub (`.hero__sub`, lede): `Gym floor, pool deck, sauna, steam and a 4° ice bath, under one roof in Pererenan.`
- CTA row (`.btn-row`): `<button class="btn btn--primary hero__cta" id="hero-cta" data-open-checkout data-tier="perform" data-length="day">Buy a pass</button>` · `<a class="btn btn--ghost" href="#today">Today's classes</a>`.
- Facts row, desktop only (`.hero__facts`, three `.label` items): `Open 6:00–22:00, 7 days` · `Day passes from IDR 300.000` · `Jalan Sempol No. 26`.
- Cue chip (desktop): `Now in Pererenan <time class="num num--s" data-clock>09:30</time>` on `.chip.chip--quiet`.
- Pass card (desktop): `.label` "Day pass" · `.num.num--m` `IDR 350.000` (`data-value="350000" data-format="idr"`) · `.hero__card-note` "Perform · gym floor and classes" · `.btn.btn--primary.btn--small` "Buy" (`data-open-checkout data-tier="perform" data-length="day"`).
- Poster alt (if rendered as `<img>` fallback): `Pool deck at Elite Fit Bali in the late afternoon`.
- Pause control (required, WCAG 2.2.2; Life Time does it in the hero research): `.hero__pause` button, 44×44, inside the window's bottom-right (desktop) or the reel's top-right (mobile), `aria-pressed`, label `Pause video` / `Play video`; hero.js toggles playback and remembers the choice in `sessionStorage`. Not rendered when the clip never starts (save-data, reduced motion, no JS).
- Weight rule from mobile-journey-c: v1.3's 6.4 MB reel made the page 6.8 MB and took 35 s on slow 4G. The reel starts only after `load` and idle, is skipped under save-data, and is re-encoded to ≤ 1.5 MB (720×1280, 20–25 s loop is enough) or replaced by the poster on connections the browser reports as `2g`/`slow-2g`.

Layout mobile (< 760): hero is `position: relative; height: var(--hero-h)`. Media fills the hero (absolute, inset 0). Board is absolute at the bottom, full width, auto height (≈ 240–280 px: eyebrow, H1 two lines at 42 px, sub two lines, one full-width primary button, the ghost button under it), text centred, radius 20 px on the top corners, overlapping the reel. Visible reel ≈ 280–320 px. The ghost "Today's classes" may be dropped on heights < 700 px (`@media (max-height: 699px)`), the primary never.

Layout desktop (≥ 1024): 12-column grid. Board = columns 1–7, full hero height, content bottom-left, H1 at the fluid max (92 px, two lines), sub max 34ch, CTA row, facts row at the very bottom. Window = columns 8–12: the reel in a 9:16 frame, height `calc(var(--hero-h) - 2 * var(--space-6))`, centred vertically, radius `--r-card`, `--shadow-float`, no overlay, no text on the footage. Card overlaps the window's bottom-left corner by 24 px; cue chip sits inside the window top-left at 16 px. Tablet 760–1023: board on top (text left-aligned), window below at 60 % width left, no card.

Hooks: section `data-motion="hero"`; layers as above; H1 `reveal-words`; media `parallax` `data-motion-depth="0.06"` (desktop only); clock `clock`; buttons `press`. Classes: `.hero .hero__media .hero__video .hero__poster .hero__board .hero__eyebrow .hero__clock .hero__title .hero__sub .hero__cta .hero__facts .hero__window .hero__card .hero__card-note .hero__cue`.

Mobile deviation (one line): the reel stays the mobile footage, inside the 66svh hero behind the board instead of full screen, because the first screen must also show the Today peek.

---

## 3. Today strip — `partials/schedule.html` — L3 — zone workout — `#today`

Purpose: today's classes within seconds; a mock of the GymMaster schedule. Full day in ≤ 2 taps (mobile: 1).

Data: `assets/data/schedule.mock.json`, weekly template from v1.3 `index.html` lines 240–290 (Mon–Sun, 36 classes; 60 min each; trainer "Tinos" is displayed as "Martijn"); `spotsLeft`/`capacity` are mock and marked so. Rendered by schedule.js from `EFApi.getSchedule({date, days: 7})`.

Copy:
- Eyebrow `.sched__date`: `Today · <time>Thursday 1 Oct</time>` (from EFApi; other day selected → `Friday 2 Oct`).
- H2 `#today-title`: `Today at Elite Fit`
- Day chips (`.chip-row.chip-row--scroll.sched__days`, `role="tablist"`, aria-label "Pick a day"): `Mon Tue Wed Thu Fri Sat Sun`, today `data-selected="true" aria-selected="true"`.
- Item (`.sched__item`, `<li>`): status `.sched__status.label` (`Now` with a `--live` dot, `Next`, `Done`, or empty for later) · time `.sched__time.num.num--m` `09:00–10:00` · title `.sched__name` (h3) `Boxercise Beginner` · coach `.sched__coach` `with Rey`.
- Toggle `.btn.btn--ghost.sched__more` (`aria-expanded`, `aria-controls="sched-list"`): closed `Full day (7 classes)` / open `Now and next only`.
- Foot `.sched__foot` (small): `Classes are one hour, booked in advance in the GymMaster app, free with Perform and Elite. Single class IDR 300.000 · 10 classes IDR 2.000.000.` Buttons: `.btn.btn--ghost` `Full timetable` → https://elitefitbali.com/class-schedule/ (new tab) · `.btn.btn--primary` `Buy a pass` (`data-open-checkout data-tier="perform" data-length="day"`).
- Weekend note (Sat/Sun selected): `Weekend classes run on set dates. The app always has the current week.`
- Empty: `No classes today. The gym floor is open 6:00–22:00.` · Error: `Timetable unavailable right now.` + the Full timetable link.

States: `.sched__list[data-state="closed"]` shows the now item and the next item only (if none is "now", the next two); `open` shows all. Items carry `data-now`, `data-next`, `data-past` (CONTRACT §4); past items at 55 % opacity, still readable. Day switch re-renders and emits `ef:schedule:render`; now/next emits `ef:schedule:nownext`.

Layout mobile (< 760), the peek: `padding-top: var(--space-5)`; eyebrow (centred) → H2 (26 px, centred) → day chips (scrollable, today centred in view) → first item card (`--surface-2`, radius 16, padding 16) → second card → toggle (full width) → foot. The first card's top must sit ≤ 150 px below the strip's top edge.
Desktop (≥ 1024): head row (eyebrow + H2 left, day chips right); the day as a horizontal rail of cards (`.sched__rail`, 7 max, equal width, no scroll needed at 1440), all visible (0 taps); toggle hidden; foot row below.

Hooks: list `now-next`; chips `tab-indicator`; list `stagger` with items `data-motion-item`; cards `lift` (pointer only). Classes: `.sched .sched__head .sched__date .sched__days .sched__list .sched__rail .sched__item .sched__status .sched__time .sched__name .sched__coach .sched__more .sched__foot .sched__note`.

---

## 4. Pass shop — `partials/passes.html` — L2 — zone cafe — `#passes`

Data: `assets/data/passes.json` (L6), via `EFApi.getPasses()`. Prices never typed into HTML; the server-rendered defaults in the partial must equal the JSON (day prices: 350.000 / 450.000 / 300.000).

Copy:
- Eyebrow: `Passes and memberships` · H2 `#passes-title`: `Your pass, your length.` · Lede: `A day, a week, or four to fifty-two weeks. Pick the half of the club you want, or both. Prices in IDR.`
- Length switch `.shop__lengths` (`.chip-row.chip-row--scroll`, `role="radiogroup"`, aria-label "Pass length"): `Day` `Week` `4 weeks` `12 weeks` `26 weeks` `52 weeks` — ids day|week|w4|w12|w26|w52; default `day` `data-selected="true"`.
- Duo switch `.shop__duo` (`<button role="switch" aria-checked="false">`): label `Coming as two? Show Duo prices`; helper `.micro` `Duo prices exist for day passes and 4-week memberships.` Disabled (`aria-disabled`) unless length is day or w4.
- Tier cards (`.shop__tier`, order Perform, Elite, Recharge; Elite card inverted: `data-zone="workout"` nested, so it reads as the dark one in the middle):
  - Perform — tag `.label` `Gym floor and classes` — `.shop__name` (h3) `Perform` — bullets `.shop__list`: `Arsenal Strength, Panatta and Prime equipment` · `All classes included` · `Open 6:00–22:00` — price — `.btn.btn--primary.btn--block` `Choose Perform`.
  - Elite — tag `Gym + Recharge` — `Elite` — `Everything in Perform` · `Pool deck, sauna, steam, jacuzzi, ice bath` · `Open 6:00–22:00` — price — `Choose Elite`.
  - Recharge — tag `Pool deck and recovery` — `Recharge` — `Pool deck and loungers` · `Sauna, steam, jacuzzi, ice bath` · `Open 6:30–22:00` — price — `Choose Recharge`.
  - Price block: `<p class="shop__price"><span class="num num--l" data-value="350000" data-format="idr" data-motion="price-morph" aria-label="350.000 rupiah">350.000</span><span class="shop__per">IDR · day pass</span></p>`; `.shop__per` reads `IDR · day pass` / `IDR · 7 days` / `IDR · 4 weeks` … ; Duo on: `IDR · day pass, each` (225.000) or `IDR · 4 weeks, for two`.
  - Choose buttons: `data-open-checkout data-tier="<id>"` (length and duo taken from the current switch state).
- Notes `.shop__notes` (small, three lines): `A day pass is credited toward a membership if you join afterwards.` · `Partner discounts around Canggu come with memberships of four weeks or longer.` · `Class passes do not include gym floor access.`
- Class passes row `.shop__classes`: `Classes only: single class IDR 300.000 · 10-class pass IDR 2.000.000.` + link `Ask on WhatsApp` → https://wa.me/6285195520220?text=Hello%20Elite%20Fit%20Bali!%20I%27d%20like%20to%20ask%20about%20class%20passes (concept note: class passes are not in the checkout, see CONCEPT.md change request 1).

Layout mobile: head centred → length chips (scroll, centred) → Duo switch (centred) → cards stacked, Perform first, card text left → notes → class row. Desktop (≥ 1024): switch and Duo on one centred row; three cards in a row, Elite 24 px taller; notes as one line each under the grid.

Behaviour (shop.js): switch sets `data-selected`, updates every `data-value`, emits `ef:passselect`. Duo rewrites values and `.shop__per`. Choose opens the checkout at `choose` with the card's tier, the current length and Duo preselected.

Hooks: chips `tab-indicator`; prices `price-morph`; cards `lift` + `stagger`; buttons `press`. Classes: `.shop .shop__lengths .shop__duo .shop__grid .shop__tier .shop__tag .shop__name .shop__list .shop__price .shop__per .shop__choose .shop__notes .shop__classes`.

---

## 5. The club — `partials/zones.html` — L4 — zone neutral — `#club` (extra partial; namespace `.zones*`, CSS `assets/css/zones.css`, images `assets/img/zone-*`)

Copy: eyebrow `The club` · H2 `#club-title`: `One entrance, two halves.` · Lede: `Perform is the gym floor. Recharge is the pool deck and the four rooms behind it. Elite is both. Classes run on the Perform side.`

Tiles (`.zones__tile`, image + `.label` + h3 + line + link):
1. `Perform` — `assets/img/zone-perform.webp` from v1.3 `perform-gym-floor.webp` (2026/09/6: plate-loaded floor, daylight through the glass wall; crop 4:5 mobile / 3:4 desktop, focal centre-left on the machines) — alt `Plate-loaded machines on the Perform gym floor in daylight` — `Plate-loaded floor on Arsenal Strength, Panatta and Prime. Open 6:00–22:00.` — link `Perform passes` → #passes.
2. `Recharge` — `assets/img/zone-recharge.webp` from `recharge-pool.webp` (2026/09/17: pool, loungers, timber-and-concrete villa; focal on the water) — alt `Pool and loungers below the timber and concrete building` — `Pool deck, loungers, sauna, steam, jacuzzi, ice bath. Open 6:30–22:00.` — link `The four rooms` → #recharge.
3. `Classes` — `assets/img/zone-classes.webp` from `class-outdoor.webp` (2025/02 booty-and-core: outdoor floor class on turf, breeze-block wall; focal on the group) — alt `Outdoor floor class on the turf by the breeze-block wall` — `One hour, up to seven a day, booked in the GymMaster app. Free with Perform and Elite.` — link `Today's classes` → #today.

Layout mobile: stacked tiles, image on top, text under it (text left inside the tile, label centred). Desktop: three columns, gap `--space-5`, tiles equal height.

Hooks: grid `stagger`; images `tile`; tiles `lift`; images `parallax` `data-motion-depth="0.04"` (desktop). Classes: `.zones .zones__grid .zones__tile .zones__img .zones__label .zones__name .zones__line .zones__link`.

---

## 6. Recharge — `partials/recovery.html` — L4 — zone spa — `#recharge` (the signature moment)

Copy: eyebrow `Recharge` · H2 `#recharge-title`: `Four rooms, 4° to 100°.` · Lede: `Cold plunge, jacuzzi, steam and sauna sit side by side on the Recharge side, with the pool deck in between. Open 6:30–22:00, seven days.`

Stages (`.rec` container `data-motion="recovery" data-stage="0"`; each `.rec__stage` with `data-stage-key` and `data-stage-active`; four layers inside: `image | tone | temp | label`):

| i | key | `.rec__label` | `.rec__temp .num.num--xl` | `.rec__line` (one factual sentence) | image → `assets/img/rec-<key>.webp` | crop / focal |
|---|---|---|---|---|---|---|
| 0 | ice | Ice bath | `4–6°` | `Two sunken plunge pools in a sand-tiled room, filled to 4–6°.` | `recovery-ice-bath.webp` (2026/09/11) | 4:5 mobile, 1:1 desktop; both pools centred |
| 1 | jacuzzi | Jacuzzi | `38–40°` | `Warm water at 38–40°, the first stop after the cold.` | `recovery-jacuzzi.webp` (2024/09 Recharge-Jacuzzi) | tiled edge and water, person kept at the edge of frame |
| 2 | steam | Steam room | `38–40°` | `A Turkish steam room: wet heat at 38–40°, the gentle one.` | `recovery-steam.webp` (2026/09/13) | centre; low contrast is fine |
| 3 | sauna | Sauna | `80–100°` | `Timber benches on two tiers and a window to the garden, 80–100°.` | `recovery-sauna.webp` (2026/09/12) | the benches; keep the window |

Alt texts: `Two sunken plunge pools in a sand-tiled room` · `Tiled edge of the warm pool` · `Tiled steam room in warm light` · `Timber sauna with tiered benches and a window`.

Tone: each stage block takes its surface and ink from `[data-stage-key]` (tokens.css §7): ice pale aqua, jacuzzi sand tile, steam sand-ochre plaster, sauna timber boards with the amber number. The number uses `--tone-<key>-num` (`.rec__temp { color: var(--num-stage) }`). Size guard: "80–100°" is about 4.2em wide, so `.rec__temp` must fit its column: `font-size: min(var(--fs-num-xl), 21vw)` on mobile and `min(var(--fs-num-xl), 22cqi)` (or a width-based clamp) in the desktop sticky column; never let it widen the page (CONTRACT §8, no horizontal scroll).

Foot `.rec__foot`: `Treatments on request, booked 48 hours ahead: dietitian, sports massage, physio and manual therapy.` Button `.btn.btn--primary` `Recharge day pass · IDR 300.000` (`data-open-checkout data-tier="recharge" data-length="day"`; the price text is `.num` with `data-value="300000"`).

Layout mobile: four stage blocks stacked, each full-bleed in its tone: image (4:5) → number (centred) → label (centred) → line (centred, max 30ch). Desktop (≥ 1024): two columns inside the sand section; left column `position: sticky; top: calc(var(--hdr-h) + var(--space-6))` with number, label, line and four small stage dots (`.rec__dots`, buttons, `aria-label="Ice bath"` …); right column the four images stacked with `--space-7` gaps; the sticky column's tone follows `data-stage` (motion.js sets it from the image in view). No pinning beyond the natural height of the four images. With JS off all four blocks render stacked in their own tones (same as mobile).

Hooks: `recovery` (+ layers), dots `tab-indicator`, images `tile`. Emits `ef:recovery:stage`. Classes: `.rec .rec__intro .rec__stage .rec__img .rec__tone .rec__temp .rec__label .rec__line .rec__sticky .rec__dots .rec__dot .rec__foot`.

---

## 7. Coaches — `partials/trainers.html` — L5 — zone workout — `#coaches`

Copy: eyebrow `Coaches` · H2 `#coaches-title`: `Five coaches on the floor.` · Lede: `Classes and one-to-one sessions with the people who run the floor. Ask at reception or on WhatsApp.`

Cards (`.team__card`: portrait, name h3, `.team__focus`):
- Rey — `Strength and conditioning, weight loss, 1:1 boxing` — `trainer-rey.webp` → `assets/img/team-rey.webp` — alt `Rey, coach at Elite Fit Bali`
- Ain — `Stretching, Mobility, Booty` — `team-ain.webp` — alt `Ain, coach at Elite Fit Bali`
- Icha — `Body Sculpt, Booty and Core` — `team-icha.webp`
- Martijn Taken — `Calisthenics, Mobility` — `team-martijn.webp`
- Putu — `Coach` — `team-putu.webp`
(Focus lines for all but Rey come only from the classes they teach; Putu teaches no scheduled class, so no focus is claimed.)

CTA: `.btn.btn--ghost` `Ask about personal training on WhatsApp` → https://wa.me/6285195520220?text=Hello%20Elite%20Fit%20Bali!%20I%27d%20like%20to%20ask%20about%20personal%20training. No prices.

Layout mobile: cards stacked, portrait cropped 3:2 (face in the upper third, grey concrete background kept), name and focus under it (left), the first three visible, then `.btn.btn--ghost.team__more` `Show all five` (`aria-expanded`, `data-state`). Desktop: five columns, 4:5 portraits.

Hooks: grid `stagger`; portraits `tile`; cards `lift`. Classes: `.team .team__grid .team__card .team__img .team__name .team__focus .team__more .team__cta`.

---

## 8. Reviews — `partials/reviews.html` — L5 — zone cafe — `#reviews`

Copy: eyebrow `On Google` · H2 `#reviews-title`: `What members write.` Three quotes verbatim (Google reviews republished by the club), `<blockquote>` + `<cite>`, no stars:
1. “Top-level equipment, strong classes, and real recovery facilities but what stands out most is the atmosphere. People train seriously, then genuinely socialise afterward.” — `Tom J.` · `Google review`
2. “Brand new machines and equipment. The staff makes sure that everything stays clean for the next user. The gym is big enough that you wouldn't wait long to use a machine. There's an indoor and outdoor section and they also have a stunning recovery center.” — `Marianne` · `Google review`
3. “Fantastic equipment, great aircondition and high level of service. A real gem in Bali: lots of Arsenal equipment, solid platforms and lots of space!” — `Åsmund Tveitevoll` · `Google review`
Foot `.rev__count`: `<span class="num num--m" data-motion="counter" data-value="84">84</span> reviews on Google` linking to https://maps.app.goo.gl/4qwxZzF3nnM1jeh36 (new tab). No rating number anywhere.

Layout mobile: quotes stacked, text left, cite left, count centred. Desktop: three columns, count centred below. Hooks: `stagger`, `counter`. Classes: `.rev .rev__grid .rev__quote .rev__text .rev__cite .rev__count`.

---

## 9. Visit — `partials/visit.html` — L5 — zone neutral — `#visit`

Copy: eyebrow `Visit` · H2 `#visit-title`: `Jalan Sempol 26, Pererenan.` · Lede: `One entrance for both halves. Come in for a day or ask us anything first.`
Facts (`<dl class="visit__facts">`): `Hours` → `Perform 6:00–22:00 · Recharge 6:30–22:00 · seven days a week` · `Address` → `Jalan Sempol No. 26, Pererenan, Kabupaten Badung, Bali` (link https://maps.app.goo.gl/4qwxZzF3nnM1jeh36) · `WhatsApp` → `+62 851-9552-0220` (https://wa.me/6285195520220) · `Phone` → `+62 857-2022-1101` (tel:+6285720221101) · `Email` → `info@elitefitbali.com` · `Instagram` → `@elitefitbali` (https://www.instagram.com/elitefitbali/) · `On site` → `Restaurant. Treatments on request, booked 48 hours ahead.`
Buttons: `.btn.btn--ink` `Open in Google Maps` · `.btn.btn--ghost` `Ask on WhatsApp` (https://wa.me/6285195520220?text=Hello%20Elite%20Fit%20Bali!%20I%20have%20a%20question).
Image: `assets/img/visit-entrance.webp` from `location-entrance.webp` (2026/09/1: street entrance, concrete facade, EF sign, scooters; 3:2; focal on the sign and door) — alt `Street entrance of Elite Fit Bali on Jalan Sempol with the EF sign`.
Layout mobile: image → head → facts (labels centred, values centred) → buttons stacked. Desktop: image left (7/12), facts and buttons right. Hooks: image `tile` + `reveal`; facts `stagger`. Classes: `.visit .visit__img .visit__facts .visit__row .visit__actions`.

---

## 10. Footer — `partials/footer.html` — L5 — zone workout — `#site-footer`

Logo: `logo-white.png` (v1.3; copy to `assets/img/visit-logo-white.png`), alt `Elite Fit Bali`. Columns (h2 `visually-hidden` "Footer"): **Club** Today's classes · Passes · The club · Recharge · Coaches · Visit · Partner discounts (https://elitefitbali.com/offers-discounts/) — **Contact** WhatsApp +62 851-9552-0220 · Phone +62 857-2022-1101 · info@elitefitbali.com · Jalan Sempol No. 26, Pererenan, Kabupaten Badung, Bali — **Follow** Instagram @elitefitbali · Facebook (https://www.facebook.com/elitefitbali) — **Legal** Privacy policy (https://elitefitbali.com/privacy-policy/) · Terms (https://elitefitbali.com/terms-conditions/).
Bottom line: `© 2026 Elite Fit Bali · Perform 6:00–22:00 · Recharge 6:30–22:00`. When the buy bar is open, `body[data-buybar="open"] .foot { padding-bottom: calc(var(--buybar-h) + env(safe-area-inset-bottom)) }` (L5 writes this in community.css).
Layout mobile: stacked, centred. Desktop: logo + four columns. Classes: `.foot .foot__logo .foot__cols .foot__col .foot__title .foot__link .foot__legal`.

---

## 11. Buy bar — `partials/buybar.html` — L2 — fixed, < 760 only — `#buybar`

`<div id="buybar" class="buybar" data-state="closed" data-motion="buybar" role="region" aria-label="Buy a pass">`: left `.buybar__wa` icon link 44×44 (aria-label `Message us on WhatsApp`, https://wa.me/6285195520220?text=Hello%20Elite%20Fit%20Bali!%20I%20have%20a%20question; the pinned bar of Desa Potato Head and Othership's docked pair are the models, and journey-c found WhatsApp three taps away in v1.3), middle `.buybar__text` (`.label` `Day passes from` + `.num.num--s` `IDR 300.000`, `data-value="300000"`), right `.btn.btn--primary.buybar__cta` `Buy a pass` (`data-open-checkout data-tier="perform" data-length="day"`). The bar is an action row, exempt from the one-column rule; its three controls are each ≥ 44 px. Height `var(--buybar-h)` + `env(safe-area-inset-bottom)`, surface black steel (`data-zone="workout"` on the bar), hairline top, `z-index: var(--z-buybar)`.
Behaviour (shop.js): open when `#hero-cta` has left the viewport (IntersectionObserver); closed while `#checkout` is open and while `#site-footer` is in view; `body[data-buybar="open|closed"]` mirrors it. Hidden at ≥ 760 (`display: none`), where the header button carries the action. Hooks: `buybar`, `press`.

---

## 12. Checkout — `partials/checkout.html` — L2 — dialog — `#checkout`

Root as in §0. Mobile: bottom sheet, `max-height: calc(100svh - 24px)`, radius 20 px top, inner scroll; desktop: centred dialog 520 px wide, `max-height: 90vh`. Backdrop `.co__backdrop` (click closes). Focus trapped; Esc closes; focus returns to the opener; `body[data-scroll-lock]` while open. Hooks: `sheet`, `step` (panels), `price-morph`, `press`.

Always visible at the top: `.co__notice.label` `Concept preview, nothing is charged or stored` (surface `--surface-3`) · `.co__close` button (44×44, aria-label "Close") · progress `.co__steps` (`<ol>`: `Choose` `Details` `Pay` `Done`; current `aria-current="step"`) · `#co-title` (h2) changes per step.

Panels (`.co__panel[data-step]`, `data-active="true"` on the current):
- **choose** — title `Choose your pass`. Length chips (same six, `.co__lengths`, preselected from the opener) → tier radios `.co__tier` (Perform / Elite / Recharge; name, one line: `Gym floor and classes` / `Gym + Recharge` / `Pool deck and recovery`; price `.num.num--m[data-value]` for the current length; preselected from the opener) → Duo switch `For two` (same enable rule; helper `Duo prices exist for day passes and 4-week memberships.`) → `.field` `First day` `<input type="date" class="input">` default today in Bali, helper `Pick the day of your first visit.` → summary `.co__summary` `Perform · Day pass · <span class="num" data-value>IDR 350.000</span>` → `.btn.btn--primary.btn--block` `Continue` → `.micro` `Prefer to ask first? <a>WhatsApp us</a>`.
- **details** — title `Who is the pass for?` Fields: `Full name` (text, autocomplete name) · `Email` (email) · `WhatsApp number` (tel, helper `For the pass reference`) · `.micro` `Concept preview: these fields store nothing.` → `Continue to payment` (primary, block) · `Back` (ghost).
- **pay** — title `Pay <span class="num" data-value>IDR 350.000</span>`. Summary card (tier, length, first day, Duo yes/no, total). Method chips `role="radiogroup"` aria-label "Payment method": `Card` `QRIS` `E-wallet` `Bank transfer` (`.micro` `Payment methods shown as a concept.`) → `.btn.btn--primary.btn--block` `Pay now` (`aria-disabled="true"`, helper `Concept preview, nothing is charged`) → `.co__mock` panel (dashed border, label `Concept controls`): `.btn.btn--ghost` `Simulate payment` → `Back`.
- **done** — title `You're in.` · `.co__ref` `Reference <span class="num num--m">EF-MOCK-0001</span>` (Session id) · `Show this screen at reception on your first day.` · `.btn.btn--primary.btn--block` `See today's classes` (closes, scrolls to #today) · `.btn.btn--ghost.btn--block` `Done`.

Openers: every `[data-open-checkout]` (hero CTA, hero card, header button, buy bar, Choose buttons, Today foot, Recharge foot) → shop.js reads `data-tier`, `data-length` (default: current switch), `data-duo` (default: current switch) and opens at `choose` with `ef:checkout:step {from:null,to:'choose'}`. Step changes emit `ef:checkout:step`. `createCheckout` is called when leaving `details`; `Simulate payment` calls the mock status flip and moves to `done`.

Tap budget as designed (CONTRACT §9): day pass → `details`: hero "Buy a pass" (1) → Continue (2). Membership 4 weeks → `details`: hero "Buy a pass" (1) → chip "4 weeks" (2) → Continue (3). From the pass shop: chip "4 weeks" (1) → Choose Elite (2) → Continue (3). Same on desktop via the header button or hero card.

Classes: `.co .co__backdrop .co__sheet .co__notice .co__close .co__steps .co__panel .co__lengths .co__tier .co__duo .co__date .co__summary .co__fields .co__methods .co__mock .co__ref .co__actions`.

---

## 13. Hook table (every `data-motion` value; CONTRACT §5 seed plus extensions)

| value | on | params / notes |
|---|---|---|
| `reveal` | any block entering the viewport | `data-motion-delay` ms, `data-motion-from="up\|left\|right\|scale"`; once |
| `reveal-words` | `#hero-title`, section H2s | per word; two words in the hero |
| `stagger` | lists and grids (sched list, shop grid, zones grid, team grid, rev grid, visit facts) | children `data-motion-item` |
| `parallax` | `.hero__media` (0.06), `.zones__img` (0.04) | `data-motion-depth`; desktop pointer only |
| `hero` | `#hero` | layers `data-motion-layer="media\|board\|wordmark\|copy\|card\|cue"` (**`board` added**) |
| `header` | `#site-header` | motion.js sets `data-scrolled="true\|false"` (**added state**) |
| `clock` | `.hero__clock`, `.hero__cue time` | **new**: text set by hero.js each minute; motion may roll the digits |
| `price-morph` | every `.num[data-value]` price | morph on `data-value` change; text and `aria-label` update first |
| `sheet` | `#checkout`, `.hdr__menu` | keyed by `data-state` |
| `step` | `.co__panel` | keyed by `data-active` and `data-checkout-step` |
| `buybar` | `#buybar` | keyed by `data-state` |
| `now-next` | `.sched__list` | keyed by `data-now\|data-next\|data-past`; the live dot breathes |
| `tab-indicator` | `.sched__days`, `.shop__lengths`, `.co__lengths`, `.rec__dots` | keyed by `data-selected` |
| `recovery` | `.rec` | layers `image\|tone\|temp\|label`; motion.js sets `data-stage`, `data-stage-active` |
| `tile` | `.zones__img`, `.team__img`, `.visit__img`, `.rec__img` | **new**: clip-path reveal of an image, once |
| `lift` | cards (`.sched__item`, `.shop__tier`, `.zones__tile`, `.team__card`) | hover, pointer only |
| `press` | every `.btn` | pointer-down scale |
| `counter` | `.rev__count .num` | `data-value="84"`, once |

State attributes beyond CONTRACT §4 that lanes set: `data-scrolled` (motion.js, header), `body[data-buybar]` and `body[data-scroll-lock]` (shop.js). Opener attributes: `data-open-checkout`, `data-tier`, `data-length`, `data-duo`.

## 14. Image manifest (lane copies from `ROOT/proposal/site-preview/assets/img/` unless noted; WebP, width/height attributes, lazy below the hero)

| lane | target | source | size |
|---|---|---|---|
| L1 | `assets/img/hero-poster-9x16.webp` (+ `-lqip`) | `hero-reel-poster.jpg` | 720×1280 ≤ 90 KB |
| L1 | `assets/img/hero-logo-mark.png` | `logo-mark-taupe.png` | as is |
| L1 | `assets/video/hero-reel-9x16.mp4` | `../video/hero-reel-9x16.mp4` | ≤ 1.5 MB if re-encodable |
| L4 | `assets/img/zone-perform.webp`, `zone-recharge.webp`, `zone-classes.webp` | `perform-gym-floor.webp`, `recharge-pool.webp`, `class-outdoor.webp` | 800 px wide, 4:5 |
| L4 | `assets/img/rec-ice.webp`, `rec-jacuzzi.webp`, `rec-steam.webp`, `rec-sauna.webp` | `recovery-ice-bath.webp`, `recovery-jacuzzi.webp`, `recovery-steam.webp`, `recovery-sauna.webp` | 900 px, 4:5 and 1:1 |
| L5 | `assets/img/team-rey.webp` … `team-putu.webp` | `trainer-*.webp` | 600 px, 4:5 |
| L5 | `assets/img/visit-entrance.webp`, `visit-logo-white.png` | `location-entrance.webp`, `logo-white.png` | 1200 px, 3:2 |

## Change log

- v1.0 — 2026-10-01 — first version (Fable lead).
