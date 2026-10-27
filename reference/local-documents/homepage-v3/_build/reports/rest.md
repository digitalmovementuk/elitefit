> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: Elite Rest (rest lane)

Version: v3.0 — 2026-10-02 · lane: rest (Sonnet 5.5 xhigh) · status: Phase 1 done, live at http://127.0.0.1:8201/#elite-rest

## Delivered
- `partials/32-rest.html` (anchor `elite-rest`), `assets/css/rest.css` (1.8 KB gz), `assets/js/rest.js` (2.8 KB gz), `assets/data/rest.json`, `copy/slots/rest.json` (17 slots).
- Clip: `assets/video/rest-clip.mp4` (720x900, 3.4 s, silent, 394 KB) + poster `assets/img/rest-clip-poster.webp` (44 KB, first frame of the clip). One walkthrough of the Recharge side: courtyard pool, plunge tubs, steam room, sauna, from `Header-Portrait.mov` 34.35-40.9 s, 0.3 s dissolves, loop seam dissolved. Windows confirmed by eye on contact sheets and by scene-cut detection (cuts 34.25 / 35.92 / 36.88 / 38.25 / 39.54 / 40.96 s). No text, no signs; only two distant guests at the pool.
- Shared anatomy: `_build/pillar-anatomy.md` (written first by this lane; training follows it). Identical `.pil-*` CSS block and `pilClip` helper in each pillar's files.
- Readout row: four rooms (ice bath 4-6, jacuzzi 38-40, steam room 38-40, sauna 80-100), cold to hot, mono tabular numerals, hairlines, a 3 px bar per room for its place on a 0-100 scale. Rendered by JS from `assets/data/rest.json`; each row carries its fact id (F-TMP-03, -04, -02, -01); numbers carry `data-count`. Phone: four rows (name left, range right). From 640 px: four columns. Skeleton rows hold the exact height (CLS 0 from this block).
- Facts list (rows with `data-fact`): Pool deck (F-FAC-04, F-FAC-05), Treatments (F-TRT-01, F-TRT-02), Included (F-FAC-01, F-FAC-02, F-FAC-07), Hours (F-HRS-02, F-HRS-08; rendered from `hours.json` `areas.recharge`, 06:30-22:00).

## Checks (live page, 2026-10-02)
- WebKit 390x844 (touch) and Chromium 1440x900: no overflow (also 320 in WebKit), no console errors from this block, CLS 0 from this block (the 0.0037 seen in reduced-motion mode comes from `hero__ro` readouts, hero lane).
- Clip: mp4 is not requested before the section is near the viewport; plays near it; paused and released when scrolled away; with reduced motion the mp4 is never requested and the poster stays. Phone scroll through Training and Rest: at most 1 clip playing (counter max 1).
- Contrast on the provisional tokens: 9.5:1 (muted mono labels) to 17:1; body 16 px, lead 18 px, mono labels 12 px, readout names 14 px; button height 48 px.

## Decisions (also in DECISIONS.md)
mp4 only (VP9 larger and lower SSIM here); unit shown as Celsius though the club prints none (F-TMP-05, one switch in rest.json); Recharge hours (06:30) not the club-wide 06:00; "sunbeds" (club wording) not "loungers"; extra "Included" row; readout as four rows on a phone.

## Open / unverified
- Unit °C is not printed by the club (F-TMP-05): Raoul can accept or drop it (rest.json).
- Poster is an eager `poster` attribute (44 KB, per the anatomy), so it counts in the first-view transfer; a lazy `<img>` poster is possible at freeze if the budget needs it.
- Token values are still the orchestrator's provisional ones; the block uses only `var(--token)` names (plus lane-prefixed `--rest-*` and the shared `--pil-*`), a few fixed lengths remain (48 px button, 72 px skeleton row, 20 px in the skeleton height formula). Re-check when `tokens.ready` lands.
- Not built (Phase 2 per the brief): the pinned phone temperature box. Motion lane: `data-reveal`, `data-reveal="mask"` (clip), `data-count` (temperatures) are in place; the bar uses transform only.
- Housekeeping note: while clearing a duplicate queued job I stopped another lane's queued (not running) browser job in the lock queue by mistake (a `class...` script); that lane should re-run its check.

## Phase 2: pinned phone temperature box (2026-10-02)
- Built: a 56 px readout strip (the four rooms, mono, tabular, hairlines, from `assets/data/rest.json`, labels via the `short` field) as the first child of `#elite-rest`, `position: sticky; top: var(--header-h)`, phones only (< 760 px), released when the block ends. Skeleton cells reserve the height, CLS 0. The strip is aria-hidden (the list below is the accessible source) and has no new copy strings.
- Highlight: the room row nearest the middle of the screen marks its cell (accent underline) and its own bar; nothing is marked while the list is off screen. Reduced motion keeps the strip pinned and the highlight (transitions off).
- Order changed to hot to cold (sauna, steam room, jacuzzi, ice bath) to match the live lead "four rooms from hot to cold" (data order in `rest.json`).
- Checks: WebKit 390x844, 390x664 and 320x640 (scroll-through screenshots looked at): strip pinned at the header's bottom edge (y 56) from the block's top to its end, then released into Coaches and Pricing; no cell overflows at 320; no overflow; CLS 0; no console errors. Chromium 390x844 with reduced motion: same. Desktop (1440, 900, 760): strip hidden, section padding unchanged. Chromium at 4x CPU throttle, scrolling through the block: 16.7 ms average, p95 16.8 ms, 0 frames over 20 ms, same with and without the strip.
- Cost: JS +0.56 KB gz (rest.js 3.4 KB gz), CSS +0.46 KB gz (rest.css 2.3 KB gz). Own files only: `partials/32-rest.html`, `css/rest.css`, `js/rest.js`, `data/rest.json`.
- Collision check: the strip sits under the header (z-sticky 20 below header 40), never overlaps the buy bar or WhatsApp button (bottom of the screen), and is released before the Pricing length selector pins (different section). It covers the top 56 px of the clip only while the clip scrolls under the header, never at rest (the clip's top sits at about 130 px when the block is centred).

## Change log
- v3.0 — 2026-10-02: created.
- v3.0 — 2026-10-02: Phase 2 pinned phone temperature box added; room order hot to cold.
