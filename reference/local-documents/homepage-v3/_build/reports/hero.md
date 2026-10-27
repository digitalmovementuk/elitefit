> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: hero (Opus 5.5)

Version: v3.0 — 2026-10-02 · lane: hero

## Done
- Minimal header (`partials/00-header.html`): EF logo (club's taupe mark, traced to SVG from its own PNG), Buy a pass (#pricing), menu button (`[data-menu]`, dispatches the document event `ef:menu`; the menu lane keeps `aria-expanded` in sync). Transparent over the hero, solid after 8 px, condenses on desktop after 48 px (transform only).
- Hero (`partials/10-hero.html`, `assets/css/hero.css`, `assets/js/hero.js`, `partials/h-hero.html`): pan-blurred club hall footage (poster = loop frame 0, LCP, preloaded at high priority; 4 s loop after load), oversized "Better / together" cropped by the edge (full sentence in the visually hidden H1), live mono readouts (Pererenan WITA clock, open state from hours.json, next class + countdown and today's count from schedule.club.json via timetable.js), split Buy a pass, Today's classes, Google 4.7 · 488 and one verified 5-star quote at a time.
- Phone hero ends at 60svh (first-viewport rule); numbers under Measured. The WhatsApp position is the pricing lane's.
- Shared helper: `window.EF.highlight(el)` (also `export { highlight }` from hero.js): accent bar sweep + light wash on the destination; hero.js also handles every in-page anchor click (smooth jump, focus to the heading, highlight on arrival).
- Docs: `research/lab/hero/HERO-STUDY.md`, `research/hero-comparison/HERO-NOTES.md` + side-by-side sheets and filmstrips, `MOTION-V3.md` section Hero (H1-H13), `copy/slots/hero.json` (27 slots), INPUTS rows, DECISIONS lines.

## Measured (11:45, tokens v3.0 + self-hosted fonts)
LCP = `img.hero__poster` on both profiles · CLS 0 phone, 0.00003 desktop (classes tabs) · first view 674 KB phone / 684 KB desktop (whole page, all lanes, uncompressed localhost, load + 3 s, clips excluded) · posters 12.5 / 22.8 KB · loops 78 / 145 KB · first-view JS 6.5 KB gzip (hero.js 4.3) · no console errors, no 404, no horizontal overflow at 390 and 1440.
Anchor jump (harness, Chromium 4x, ?nolive): phone anchor-jump-today 26.7 ms [26.3-29.6] (v2.1 27.8; was 45.8); desktop 16.4 [9.6-47.1] (v2.1 11.4, inside the noise band), far jump 10.8 (v2.1 16.4). Desktop CLS 0 in the harness (load + 3 screens); the 0.00003 in my own script came from the classes tabs, not the hero.
Review line (12:15): quotes now come from assets/data/reviews.verified.json (full verbatim; rating, count, link still from reviews.json); C K (cut text) is out. First view after the change (WebKit): 390x844 hero 506, h1 101-238, five quotes rotate in a 4-line block (Buy a pass 288-340, rating + quote 388-494), card 570-722, WhatsApp 772-828 clear · 390x664 hero 398, rating line only, card 462-614 (WhatsApp 604-652 overlaps its corner) · 375x667 hero 400, card 464-614 (WhatsApp 607-655 overlaps) · 360x740 hero 444, card 508-656, WhatsApp clear. Harness CLS 0 on chromium390 and chromium1440, LCP = poster, 0 console errors. Page-level overflow at 390 (scrollWidth 448) comes from the motion lane's .m-ghost, not the hero.
Earlier first viewport (WebKit, before the review change): 390x844 hero 506 px, card bottom 747, WhatsApp 772-828 clear · 375x667 hero 400, card 640 (WhatsApp overlaps its corner) · 360x740 hero 444, card 682 (WhatsApp overlaps its corner). Next-class value never cut, one line with the longest names at all three sizes.

## Open
- Copy is provisional (slots in `copy/slots/hero.json`); the display words have a hard 8-letters-per-line limit.
- WhatsApp disc overlaps the now/next card at 375x667 and 360x740 (pricing lane).
- `tokens.ready` was not written when this report was saved; the hero already runs on tokens v3.0 (11:40) and was re-tuned to it. The display face preload sits in `partials/h-hero.html`.

## Change log
- v3.0 — 2026-10-02: created.
- v3.0 — 2026-10-02 12:15: review quotes switched to reviews.verified.json, fit rule 4 lines on phones >= 385 x 800.
- v3.0 — 2026-10-02 12:05: anchor jump: new state and DOM flag set first, focus in the next frame, highlight by an IntersectionObserver band instead of a per-frame layout poll.
- v3.0 — 2026-10-02 11:49: re-tuned to tokens v3.0, readout split, numbers re-measured.
