> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane B report: review line (Google badge + rotating real reviews)

Version: v2.1 — 2026-10-01 · lane B (Sonnet 5.5 xhigh). Changelog: skeleton; sourcing and build; render measurements r1, r2, r3 filled in (19:12).

## FIRST LINES (loud)
1. Rating **4.7 is confirmed** (Google panel 2026-09-30, live Google Maps page, Google Maps embed data on elitefitbali.com/recharge/, both 2026-10-01).
2. The count is **488, not 84**. Google shows 488 (panel header "488 Google reviews"; embed data "488 reviews"; the panel's Reviews tile says 486). The 84 is the club's Trustindex widget (own import, lists six reviews). Badge = 4.7 and 488. v2.0 `#reviews` still says 84 (request B-to-E4).
3. The widget exposes only six reviews (Oct to Nov 2023). Tom J. is on no club page reachable today; Marianne's club testimonial reads differently from the v2.0 quote. Both are flagged below.
4. 320 px horizontal overflow (page 324) is NOT from the review line: offenders are `m-ind`, `chip`, `rec__bar-mark`, `clip` (E4 / C-int); the v2.0 baseline had none (sw 320).
5. Hero grows with the line: see table "Hero height". Worst cases: 375x667 (+67 px), 1280x720 (+45 px), 1024x768 (stacked layout, +49 px).

## Files touched
`partials/reviewline.html`, `assets/css/reviewline.css`, `assets/js/reviewline.js`, `assets/data/reviews.json` (new) · `_build/v2.1/report-B.md` (+html), `_build/v2.1/requests/B-to-E4.md` (+html) · evidence `_qa/v2.1/B/figures/`, `r1/`, `r2/` `r3/` (1280x720, 1366x768, 1024x768 after the 600 px threshold); lane copy built to SP/lane-B, port 8102.

## Sourcing (Serper empty, skipped; Firecrawl 3 of max 3 credits; Playwright fallback not needed)
Scrapes: elitefitbali.com (widget not on the homepage), Google Maps place page, /recharge/. The /perform/ widget was read from lane C-src's same-day Firecrawl scrape (read-only) and matches /recharge/ (same six reviews). Comparison table: `_qa/v2.1/B/figures/figures-verification.md` (+html).

| Figure | Brief | Google panel 2026-09-30 | Google Maps live 2026-10-01 | Google embed data /recharge/ | Club Trustindex widget | Used |
|---|---|---|---|---|---|---|
| Rating | 4.7 | 4,7 (header and tile) | 4.7 | 4.699999809265137 | no number (4 stars + half) | **4.7** |
| Count | 84 | 488 (header), 486 (tile) | not shown | 488 reviews | 84 reviews | **488** |

## Chosen reviews (5, all 5 stars, rotation order; only 5-star reviews rotate)
| # | Author | First words | Status |
|---|---|---|---|
| 1 | Åsmund Tveitevoll | Fantastic equipment, great aircondition and high level of service. | in the Trustindex widget, "original source is Google" (verified verbatim, full text) |
| 2 | Marianne | The word to describe this gym is… elite! Brand new machines… | club testimonial slider (verbatim, trimmed at the end); Google origin only per BRAND-NOTES 8, NOT re-verified |
| 3 | asyraf140796 | Awesome gym. Amazing natural lighting. Good equipment. Friendly staff ! | widget, verified verbatim, full text |
| 4 | Tom J. | Top-level equipment, strong classes, and real recovery facilities… | from the v2.0 page (BRAND-NOTES 8); not found again on any club page today, NOT re-verified |
| 5 | C K | Love this gym. Aside from the occasional influencer filming it’s… | widget, verified verbatim, second paragraph cut at the end with an ellipsis |
Not used: Dadam Kamil (clumsy English, emoji), Virginia Ojeda Perez (Spanish), Егор Старовойтов (Russian); all five stars, in the widget.
The three on the v2.0 page were only used where the widget could not supply a better one (Tom J., Marianne).

## Measured on the render (r1 = first build, r2 = final layout; files in `_qa/v2.1/B/`)
| Check | Result |
|---|---|
| Line visible without scrolling (bottom edge of #revline / viewport height) | WebKit 375x667: 547.6/667 · 375x812: 599.6/812 · 390x844: 601/844 · Chromium 1440x900: 585.1/900 · also 1920x1080, 1366x768, 1280x720, 1024x768, 820x1180, 760x1024: all inside |
| Two review states (screenshots) | `r2/*_line_state1.png` / `_state2.png` at 375, 390, 1440 (state 2 = Marianne); crossfade caught mid-way in `r1/webkit-390x844_line_state2.png` |
| Reduced motion | `r2/*-reduced_line_state1/2.png`; first review static, "Next review" 106x44 (phone) / 98x44 (desktop); line grows 36 px on phones only in this mode (113.4 vs 77.4 px) |
| Computed type | "4.7": Syne 700, 24 px phone / 28 px from 760; quote: Hanken Grotesk 500, 16 px (15 px below 360), 17 px 760-1023, 18 px from 1024; count 15/16 px 500; meta 14 px 500 |
| Contrast (vs the board #DFDDD0) | "4.7" 13.61:1, quote 13.61:1, count 13.61:1, meta label 5.49:1, name 13.61:1, filled star #B85F00 3.29:1 (graphic) |
| Tap targets | badge 252.9x44 (phone), 277x44 (desktop); Next 106x44 / 98x44; G 20 px phone / 24 px desktop |
| Rotation | every 5.0 s (changes at 5039 to 5342 ms, interval 5000); stops after two passes (10 changes) |
| Pause | hover: 0 changes in 6.2 s, resumes after leave; focus, blur, hidden tab (simulated), visible again: all as expected (r1); touch (WebKit tap): paused 7 s, resumed after the 8 s hold (r1) |
| Layout shift while rotating | #revline height 77.39 and stage 39.39 px in every state (phone), 44 / 42.09 (desktop); all 5 reviews measured in reduced mode: identical boxes. CLS 0 over cold load plus 3 rotations (Chromium 390 and 1440). Font swap with fonts delayed 1.5 s: CLS 0 at 390, 4.5e-5 at 1440 (hero-level shift, source includes the quote box), 1e-6 at 1024 |
| Overflow | 375, 390, 1440, 1024, 820, 760: none. 320: page 324 px wide, caused by `m-ind`, `chip`, `rec__bar-mark`, `clip`, none inside #revline (v2.0: 320) |
| Console / network | 0 console errors, 0 failed requests in every run; no third-party script or CDN; no aggregateRating or JSON-LD |
| JS added | `gzip -9` of dist `reviewline.js` = **902 B** (budget 1.2 KB; v2.0 had no file, so the delta is 902 B). CSS dist 1,184 B gz |
| Data | inline `#revline-data` is byte-identical to `assets/data/reviews.json`; the badge reads 4.7 / 488 from the HTML, set from the same figures |

### Hero height with the line (WebKit phones / Chromium desktop; v2.0 baseline measured in the same run via the archive)
| Viewport | v2.0 hero | v2.1 hero | share of viewport |
|---|---|---|---|
| 375x812 | 535.9 | 559.6 | 66.0 to 68.9 % |
| 390x844 | 557.0 | 561.0 | 66.0 to 66.5 % |
| 375x667 | 440.2 | 507.6 | 66.0 to 76.1 % (Today's classes hidden under 700 px height) |
| 1440x900, 1920x1080 | 594.0 / 712.8 | same | no growth |
| 1366x768 | 506.9 | 528.0 | 66.0 to 68.8 % |
| 1280x720 | 475.2 | 520.3 | 66.0 to 72.3 % (board 626 px; side by side since r3, threshold lowered 640 to 600 px; r2 stacked gave 556.4) |
| 1024x768 | 506.9 | 556.2 | 66.0 to 72.4 % (board 476 px: stacked layout; r3 re-checked) |
| 820x1180, 760x1024 | 778.8 / 675.8 | same | no growth |
Reduced motion, 390x844: 597 (70.7 %) because of the Next control row.

## Behaviour and design decisions
- Phone: badge row, quote row (one line, ellipsis), meta row (own five stars, name as published, "Google review"); centred. From 760 the line is left-aligned; side by side (badge left, quote cell right) when the line itself is at least 600 px wide (container query; measured in run r3), otherwise stacked. At 16 px a phone shows about 42 characters, so the first 6 to 7 words carry the quote.
- The 44 px badge box rises 10 px into the gap above the buttons (6 px stay clear) and the quote rises 6 px into the badge's empty padding; clicks there fall through to the badge.
- Official Google G, original four colours, inline SVG; star row is an SVG clip at 121.8 of 130 units (4 stars + 70 % of the fifth).
- Rotation stops after two full passes (WCAG 2.2.2); easy to remove (`passes < 2 * list.length` in reviewline.js).
- No wording implying endorsement: badge is "Rated 4.7 out of 5 on Google, 488 reviews".

## Real vs unverified
Real and verified: rating 4.7, count 488, Åsmund, asyraf140796 and C K (Trustindex says original source is Google; widget read today). Unverified: Marianne (Google origin), Tom J. (existence on the club's channels today). Review dates (2023) are not shown. The count can be stale on go-live day: refresh `reviews.json` and the partial.

## Requests
`_build/v2.1/requests/B-to-E4.md`: 84 to 488 and the Marianne text in `#reviews`; integrator: 320 px overflow offenders belong to E4 / C-int.
