> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: motion

Version: v3.0 — 2026-10-02 · lane: motion (Opus 5.5, maximum effort) · files: `assets/js/motion.js` (4.6 KB gzip), `assets/css/motion.css` (0.8 KB gzip), `MOTION-V3.md` (+ html, sections Engine / Page moments / Measured; the Hero section is the hero lane's), `_build/motion-parity.md` (+ html), `_build/actions-v3.json`, evidence in `research/motion/`.

## What is live in the tab
- **Headline arrival** on the five section titles below the fold (pillars head, Elite Nutrition, Elite Training, Elite Rest, Pricing): the title slides out of a sliver-crop at the screen edge on phones (a 0.35 em slide on wide screens), settles from a 1.06 scale, and a pan-blur echo of the same words resolves into it; scrubbed by the scroll on ViewTimeline, settled before the title passes 70 % of the screen. The title is opaque and readable at every position.
- **Section rule**: a 1 px accent rule draws across the top of each section as it arrives, then fades.
- **Clip masks** on the three pillar clips: open from a slit (two covers in the page colour, transform only), the card grows from 0.92 to full width, the footage settles; **light parallax** ±4 % for as long as the clip is on screen (phone and desktop, compositor).
- **Reveals and staggers** (WAAPI held at frame 0 while below the fold): pillar leads, fact rows, pricing head, notes, offers, trust stack, Classes blocks below the fold; buy actions only rise, never fade.
- **Readout rolls** from the DOM's own text: pillar index, 36 classes, the eight room temperatures with their bars filling from the cold end, 4.7 and 488 in the pricing trust stack; **minute roll** on the live class countdown (v2.1's clock roll).
- **Press states** the lanes left out (Duo switch, pricing links, nutrition link) and a passive touch listener so iOS shows every press state.
- Engine rules: nothing on screen at start moves, nothing hidden without JS or with reduced motion / data-saver (checked: after a full scroll nothing is left hidden; with reduced motion nothing is inserted), CLS from the layer 0, scroll-linked layers far from the screen pause. QA switch: `?nomotion`.

## Parity (15 v2.1 behaviours, WebKit 390 + Chromium 1440, both pages)
Equal 7, better 4 (header, anchor highlight, sticky selector on desktop too, and press states after the fix), weaker -> fixed 2 (countdown minute roll, press states incl. iOS), missing -> built 2 (clip reveals + parallax, counters). Details: `_build/motion-parity.md`.

## Measured (4x CPU, v3 vs v2.1, A/B without the layer)
Phase 1 fps phone 59.7 vs 59.5, desktop 59.8 vs 59.6; pillars on the phone 59.4 vs 59.8 (inside the harness band, 1.1 % frames over 20 ms, 0 over 33 ms); main thread per frame 1.18-1.64 vs 2.31 ms (phone), 1.61 vs 3.37 ms (desktop); interactions equal or faster except the anchor jump (hero lane, identical without this layer). First view 361-401 KB, CLS 0 from this layer. Full table: MOTION-V3.md "Measured".

## Open / flagged
1. CSS 48.8 KB gzip against 40 KB (page-wide; comments are about 13 KB): a comment-stripping build step fixes it; motion.css is 0.8 KB.
2. JS about 59.9 of 60 KB after trimming motion.js.
3. Classes first render shifts layout (CLS 0.00303 phone in a full scroll, 0.00003 desktop): request `_build/requests/motion-classes-cls.md` (not the motion layer).
4. Anchor jump response (hero lane) and menu sheet responses (menu lane), see MOTION-V3.md risks.
5. Tool change: `_tools/measure.mjs` GROUPS now pools the v3 pillar blocks (`data-sec` nutrition/training/rest) into the pillars group (MEASURE.md allows it); logged.
6. Not verified: WebKit frame timing (no CPU throttle in Playwright WebKit), a real iPhone, VoiceOver with the echo layer (aria-hidden, generated content only), the WebKit keyboard Tab walk on the phone profile (Playwright WebKit did not move focus by Tab on this page; the Chromium 1440 walk found 58 stops, all rings visible).

## Phase 2 (2026-10-02, after Raoul's "go")
- **Live in the tab:** headline arrival with echo on the Coaches and Reviews titles; the Visit place name arrives along the blur axis and keeps drifting while it passes; the footer's two wordmark lines meet as the page ends (the hero's lines part at the top: a bookend), the range clamped to the page end so they always land; section rules on 8 sections; Visit clip mask + parallax; coach rows, quotes and footer links stagger; 4.7 and 488 roll with the stars popping in (readouts now win the three-moment cap); the opening hours roll in; a coach opening brings its week in row by row and reads out the class count (inside 600 ms), closing stays native; the pinned temperature strip ticks in the room that becomes current; Get directions, Book a tour and the footer WhatsApp button never fade.
- **Overflow defect (hero lane report):** the footer's second wordmark line and its echo arrived from the right and widened the document to 448 px at 390. Fixed with a footer-only horizontal clip; a first fix that clipped every section cost frames around the sticky parts and was narrowed. Width equals the viewport at 320-1440 px in WebKit and Chromium, motion on and off (own check and the harness).
- **Measured (load 3.9-4.8):** Phase 1 pooled fps phone 59.2 vs 59.5, desktop 59.2 vs 59.6 (inside the band); pillars phone 58.8 vs 59.8 and Classes desktop 58.9 vs 60 inside the band but under v2.1; new sections 59.6 vs about 59.5; main thread 1.8 / 2.1 ms vs 2.31 / 3.37 ms; interactions equal or faster; CLS 0; first view 410-451 KB. motion.js 5.9 KB gzip, motion.css 0.9 KB.
- **Evidence:** `research/motion/` adds `w390-` and `c1440-` filmstrips and mp4 for coaches, reviews, visit and footer arriving, `*-roll-reviews-filmstrip.jpg`, `*-coach-open-filmstrip.jpg`.
- **Open:** CSS 60.1 KB gzip as sent (about 39.6 KB without comments: the dist step decides it); the Classes section shows a 4 s settle after a day switch (classes lane, also without motion).

## Change log
- v3.0 — 2026-10-02: created.
- v3.0 — 2026-10-02 15:45: Phase 2 section added.
