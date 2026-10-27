> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Phase 2 brief (Raoul said "go", 2026-10-02)

Version: v3.0 — 2026-10-02 · owner: orchestrator. Binding together with LANE-BRIEF-COMMON.md, CONTRACT.md, BRIEF-RAOUL.md (PHASE 2 paragraph), VOICE-GUIDE-ELITEFIT.md, FACTS.md, DESIGN-SYSTEM-PERFLAB.md (+ component-sheet.html), MOTION-V3.md.
Change log: v3.0 created.

Phase 1 is built and approved for review; Phase 2 adds: the pinned phone temperature box (Elite Rest), coaches, review section, visit, footer, and the expanded motion layer. The menu sheet with the social icons and the full checkout are already built in Phase 1.

## Order of the page and files (a lane edits only its own files)
hero (10) · classes (20) · pillars head (29) · nutrition (30) · training (31) · rest (32) · COACHES (35, `partials/35-coaches.html`, anchor `coaches`, css/coaches.css, js/coaches.js) · pricing (40) · REVIEWS (45, anchor `reviews`, css/reviews.css, js/reviews.js) · VISIT (47, anchor `visit`, css/visit.css, js/visit.js) · FOOTER (53, `partials/53-footer.html`, in the after-main region, a `<footer>`, css/footer.css, js/footer.js) · fixed UI (buy bar, WhatsApp, checkout). Each lane also owns copy/slots/<lane>.json and data/<lane>.json if it needs data. Stubs exist; main.js loads the modules after load.
## Shared rules
- Section markup per CONTRACT §4 (`section.sec#anchor data-sec`, `h2.sec__title`, `.wrap`), tokens only, mobile first one column, 15-16 px body, AA, 44 px targets, no overflow from 320 px, CLS 0 (reserve heights before data loads: skeletons with final heights), no hard-coded text outside data-copy slots, data-fact IDs on fact lines for the ledger, English, the voice guide, no hype.
- Facts only from FACTS.md and the data files; nothing invented; gaps are listed, not filled. Quotes verbatim; only verified reviews (P/_build/facts/reviews-verification.json and FACTS F-REV rows) may show.
- Reuse, read-only: coach portraits P/assets/img/coach-*.webp (classes lane), social icons in P/assets/img/social-* and the menu-nav data (menu lane), hero's window.EF.highlight, EF.clips for any clip (at most 2 playing on a phone), timetable.js helpers, hours.json, coaches.json, site.json (WhatsApp number TO CONFIRM).
- Budgets for Phase 2 (decision 2026-10-02: Phase 1 hit 59.9 of 60 KB JS gz): each new lane <= 4 KB JS gz and <= 3 KB CSS gz, no first-view cost (lazy modules, lazy images with width/height); the orchestrator adds a comment-stripping dist step at freeze. Whole-page JS budget for Phase 2 is 80 KB gz, CSS 40 KB gz after comment stripping.
- Motion: only light CSS transitions of your own; add data-reveal / data-stagger / data-count / data-parallax hooks (CONTRACT vocabulary): the motion lane applies the layer afterwards.
- Check with Playwright via P/_tools/with-browser-lock.sh (WebKit 390x844 first, 390x664, Chromium 1440): screenshots LOOKED at, no console errors, no overflow, CLS 0 (P/_tools/measure.mjs load section, URL with ?nolive). Log with P/_tools/log.sh, decisions into P/DECISIONS.md, ready marker P/_build/ready/<lane>.ready, report P/_build/reports/<lane>.md (+ html twin), final message at most 8 lines.
- Never publish, push, send, book, buy; the page makes no requests to third parties (map = a link, no embed, no tracking); legal text is Raoul's: link only to the club's own legal pages if FACTS lists them, never write legal wording.
