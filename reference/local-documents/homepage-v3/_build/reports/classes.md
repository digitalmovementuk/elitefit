> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: Classes

Version: v3.5 — 2026-10-02 · lane: classes (Sonnet 5.5, xhigh) · status: Phase 1 deliverable ready (`_build/ready/classes.ready`); v3.1 compact phone first view, v3.2 lead safe zone, v3.3 round instructor portraits and the stricter first-viewport reading, v3.4 CLS 0 (motion lane request), v3.5 portraits re-cut at 192 px

## What is built
Section `#classes` (`partials/20-classes.html`, `assets/css/classes.css`, `assets/js/classes.js`, `copy/slots/classes.json`), mobile first, own engine, nothing from v2.x.

- **Today's classes from the real timetable** (`assets/data/schedule.club.json`, 36 a week, one hour each). Day tabs Mon to Sun, default = today in club time (WITA), each tab shows its class count and a small mark on today.
- **Sliding indicator:** one cell (raised surface, 3 px accent bar) moved by `transform` from a single CSS variable (`--cls-i`), `--dur-ui` with `--ease-out`. Measured Mon to Sun: 0 to 598 px in about 300 ms with smooth intermediate frames. The label colour never depends on the moving fill.
- **Live now / next block** with a real countdown (always `HH:MM:SS`, tabular mono readout): while a class runs it counts down to its end and shows a progress hairline plus "Then at 14:00: ..."; between classes it counts to the next start; when none is left today it names the next class and its day ("Next class · Tomorrow · starts in 12:29:56", Saturday after 12:00 shows 25:29:56). Ticks once per second from a timer aligned to the second, only while the section is near the viewport and the tab is visible; state changes (class starts or ends, midnight) re-render the block and the row tags without a reload.
- **Class rows** (time range, class name, "with {coach}") with Now / Next tags, earlier classes dimmed (screen readers get "Earlier today"). On a day change the rows arrive with a crisp stagger (12 px rise + fade, 280 ms each, 45 ms apart, about 0.55 s for seven rows). First render is static.
- **Weekend note** on the Saturday and Sunday tabs, from FACTS F-CLS-03 (club wording, its typo "lastest" corrected to "latest", plus "the Saturday and Sunday times shown are the usual pattern").
- **Empty and error states:** a day with no classes names the next class and day; a failed timetable load shows a calm message; layout reserves space (live block and panel min-heights) so nothing jumps.
- **Link** at the end to `#pricing` ("Passes and prices"). No booking wording, no seat numbers, no prices.
- **Phone first view (v3.1):** the whole now/next card fits the first viewport next to the 60 svh hero; see the table below.
- **Layouts:** phone = edge-to-edge hairline panels, one column, 7-cell tab grid (45.7 px per cell at 320, 55.7 at 390); 760+ = contained panels with one-line time ranges; 1024+ = head and live readout in a sticky left column, tabs and rows on the right.

## Phone first view, first version (v3.1, superseded by the v3.3 numbers below)
Change: section top padding 24 px (was 64), eyebrow 8 px above a one-line title, the lead line moved from under the title to under the card (still there, CSS `order`, no copy lost), the card tightened to about 155 px (label, 36 to 48 px countdown, class name, time and coach; the progress hairline sits on the card's bottom edge and costs no height; the "Then ..." line is shown from 760 px up, not on phones), and the card text keeps a 72 px safe zone on the right so nothing runs under the WhatsApp button. From 760 px the original roomy layout returns. Pricing lane files untouched, no request needed: the card ends above or beside the button.

Measured with Playwright WebKit (scroll 0, hero change already landed, WhatsApp button live), live state and "next, tomorrow" state alike:

| Viewport | Hero ends | Card top to bottom | Bottom limit (innerHeight - 16) | WhatsApp button top | Result |
|---|---|---|---|---|---|
| 390x844 | 506 | 596 to 752 | 828 | 772 | fits, clear of the button, no text under it |
| 375x667 | 400 | 488 to 644 | 651 | 595 | fits; the button covers only the empty bottom-right corner of the card, no text under it |
| 360x740 | 444 | 532 to 686 | 724 | 668 | fits; same corner overlap, no text under it |
| 320x568 | 380 | 468 to 620 (636 when the label wraps) | 552 | 496 | does not fit: the hero's own minimum height (380) leaves 188 px, the card needs 152 |

No horizontal overflow at any of these sizes. The 320x568 case would need a hero of about 330 px or less; I left it, as agreed ("as far as the hero's 60 svh minimum allows").

## Round instructor portraits and the stricter first viewport (v3.3)
**Portraits.** Every class has a round instructor portrait: 64 px on the live card (left of countdown, class and time), 44 px on every row (between the time and the class name), 72 px on the card from 760 px up. Source: the club's own trainer-grid images on elitefitbali.com/perform/, downloaded with curl on 2026-10-02, cut square around the face with Pillow at 128x128 px, webp, 3.2 to 4.1 KB each: `assets/img/coach-rey.webp`, `coach-icha.webp`, `coach-ain.webp`, `coach-tinos.webp` (every download logged in `INPUTS.md` with URL, date, size). The card's own instructor loads with the page; row portraits are `loading="lazy"` with fixed boxes (measured CLS 0.0000 through load and three day switches; Chromium still fetches the first rows' files early, about 11 KB for three). Decorative `alt=""` (the name sits next to it). Round = `border-radius: 50%` on the avatar only; every other element in the section stays square (checked: 0 other rounded elements); hairline ring in `--line-strong`; past rows dim their portrait. A name without a portrait file, or a file that fails to load, gets a monogram circle (initial on `--bg-raised`, same size).
**Flag for Raoul and the club: Tinos.** The portrait is `TINOS-scaled.webp`, which the club's grid shows under the entry "Martijn Taken" (FACTS F-COA-06); the grid entry named "TINOS" shows `REY-scaled.webp`, a placeholder, which I did not use. The visible name stays "Tinos". The pairing of this portrait with the name Tinos is to be confirmed by the club. Ain's portrait is the club's `ain.jpg` (May 2026).
**First viewport.** Phone head on one tight line (title left, eyebrow right), section top 24 px, card as a two-column grid with the 64 px avatar on the left (the stack beside it is taller than the avatar, so the portrait costs no height), "Then" line off phones, lead line under the card with the WhatsApp safe zone, Now / Next tag markers only from 760 px. Measured with Playwright WebKit at scroll 0 (D1 tokens and the copy writer's text already in the page), longest names live (HYROX Conditioning, Boxercise Advanced, both with Rey) and the next-tomorrow state (label "Tomorrow · next class starts in"):

| Viewport | Hero ends | Card (avatar inside) top to bottom | Space between card bottom and the fold | WhatsApp button |
|---|---|---|---|---|
| 390x844 | 506 | 570 to 722 | 122 px | visible, not over the card |
| 390x664 | 398 | 462 to 614 | 50 px | hidden at scroll top (pricing lane) |
| 375x667 | 400 | 464 to 614 | 53 px | hidden at scroll top |
| 360x740 | 444 | 508 to 656 | 84 px | visible, not over the card |
| 360x640 | 384 | 448 to 596 | 44 px | hidden at scroll top |

All 15 combinations (5 sizes, 3 states) keep the card at least 12 px above the fold (minimum 44 px) with the avatar fully inside it; no horizontal overflow. Looked at screenshots at 390x664, 390x844 and 360x640 (card, portrait, countdown and lead read cleanly; desktop 1440 and tablet rows checked too: names on one line next to the portrait after narrowing the time column to 11 rem and setting the row name to `--fs-h3`).
**Re-run after the change** (Chromium and WebKit, `?nolive` to avoid dev-server reloads mid-run): keyboard (arrows, Home, End, Tab to panel), indicator slide, stagger (0.94, 0.83, 0.47, 0, 0, 0 at 130 ms), reduced motion (0 running animations), data-saver, 4x CPU throttle over 10 day switches (425 frames, p95 16.8 ms, max 16.8 ms, 0 over 20 ms, 0 long tasks), overflow at 320/390/820/1440: all unchanged.

## CLS 0 (v3.4, request `_build/requests/motion-classes-cls.md`)
Cause: the card skeleton was 8 px shorter than the rendered card (empty label, class name and meta lines had no height until `classes.js` filled them), so the card's own lines, the lead and the tab strip moved; on desktop the empty tab counts had no line box. Fix, `classes.css` only (layout unchanged): the label, class name, meta line, day heading and tab counts each reserve their final line height from the first paint (`min-height` in `em` / `lh`), the phone card has no fixed height any more (the lines are exact), and from 760 px the "Then" line keeps its slot (hidden while empty; collapses only in the two-column desktop layout, where nothing sits below the card). Measured: `_tools/measure.mjs --only load --runs 2` Chromium 390 and Chromium 1440: CLS 0 (0 shifts); WebKit 390: 0 first-view elements moved (WebKit has no layout-shift entries). Own check, Chromium with a faked clock, load + 3 s + four screens of scroll + three day switches, at 390x844, 820x1000 and 1440x900 in the live (Thursday, Saturday) and next-tomorrow states: CLS 0.00000, 0 entries in all nine runs. First-viewport numbers re-run (5 sizes x 3 states) and unchanged: card bottom 722, 614, 614, 656, 596 at 390x844, 390x664, 375x667, 360x740, 360x640; 122, 50, 53, 84, 44 px above the fold; 0 overflow.

## Sharper portraits (v3.5)
The four portraits (`assets/img/coach-rey|icha|ain|tinos.webp`) were re-cut at 192x192 px (webp, quality 90, 5.0 to 6.5 KB each) from the club's largest public originals (REY, ICHA and TINOS "-scaled" 1707x2560, `ain.jpg` 1279x1815), with the same face crop (the earlier crop box scaled to the larger original) and the same file names; the Coaches section can keep reusing them. Downloads logged in `INPUTS.md`. `width`/`height` attributes are still set (now 192). Checked after the change: CLS 0.00000 at 390x844 and 1440x900 (live and next-tomorrow states); card bottom 722 and 614 at 390x844 and 390x664 (122 and 50 px above the fold), unchanged; the card image decodes at naturalWidth 192. Not looked at by eye: the 3x screenshot of the card (the viewer refused to reopen the file); the crop maths is identical to the one already checked in v3.3.

## Bug found and fixed in the re-run (v3.1)
The countdown showed `00:7:39` under ten minutes (minutes not zero-padded); fixed to `00:07:39` and checked on the function for 0 s to 25:29:56. The first run missed it because the sample was above ten minutes. All earlier checks were re-run after the layout change (keyboard, slide, stagger, reduced motion, save-data, 4x throttle, overflow at 320/390/820/1440, faked-clock states): same results as listed above. New end-to-end check with a faked clock at 11:29:54: the live card read `00:00:06`, at 11:30:00 it switched by itself to "Next class · starts in 02:29:58" (Body Sculpt), the row tags moved (Mobility to earlier, Body Sculpt to Next) and `ef:classes:nownext` fired, no console errors.

## Accessibility
Real `<button role="tab">` with roving tabindex, ArrowLeft/Right (wrapping), Home/End, `aria-selected`, `aria-controls` on one reused `role="tabpanel"` whose `aria-labelledby` follows the selection, panel focusable (Tab from the strip lands on it). Tab names read "Friday, today, 6 classes". The ticking countdown is `aria-hidden`; the now/next text sits in a polite live region that is switched on after the first fill, so it announces changes but not the page-load render. Focus ring: inset 2 px `--focus` ring on tabs. Press states: tab label scales to .9, link scales to .98. Tap targets: tabs 68 px tall and 45.7 px wide at 320 px, link 52 px. Body-size text 16 px, lead 18 px, labels 12 to 14 px mono. Contrast with the provisional tokens: fg 17.2, muted 9.5, faint 5.4 (4.98 on raised), live on raised 5.9.

## Motion rules kept
Transform and opacity only; at most two simultaneous things move (indicator, rows); the one loop is the live dot (opacity 0.55 to 1, 2200 ms each way), only while the section is on screen and only with `html.motion-ok`. Reduced motion and data-saver: no transitions, no animation, no loop, all rows and the readout in place (checked, `motion-off`: 0 running animations, row opacity 1).

## Checks (WebKit 390x844 and 320x700, Chromium 1440x900 and 820x1000, through the browser lock)
| Check | Result |
|---|---|
| Console errors | none from this lane; a 404 on a hero clip showed in one early run (not this lane) and is gone in the later runs |
| Horizontal overflow | 0 px at 320, 390, 820, 1440 |
| Countdown tick | 00:42:04 to 00:42:01 over 3.1 s |
| Keyboard | ArrowRight x3 (Fri to Sat, Sun, wraps to Mon), Home, End, ArrowLeft; one tab stop in the strip; Tab moves to the panel |
| Stagger at 130 ms | row opacities 0.94, 0.83, 0.47, 0, 0, 0 (delayed rows still waiting) |
| Faked clock (Playwright) | Fri 12:00 next today; Fri 19:30 next Tomorrow 08:00 (12:29:56); Sat 12:30 next Sunday 14:00 (25:29:56); Sun 19:30 next Monday; Sat tab shows the weekend note |
| 4x CPU throttle (Chromium), 10 day switches | 424 frames, median 16.7 ms, p95 16.7, max 16.8, 0 frames over 20 ms, 0 long tasks |
| Weight | `classes.js` 12.6 KB raw, 4.6 KB gzip; `classes.css` 12.4 KB raw, 3.0 KB gzip |
| Hard-coded colours or font names in `classes.css` | none (grep) |

Not measured: WebKit frame timing (Playwright cannot throttle WebKit CPU), VoiceOver by ear, the stagger as a recorded frame sequence in WebKit (numbers from Chromium).

## Coach names: which source
`assets/data/coaches.json` (facts lane): `published` is matched to the timetable string and `display` is shown. Result on the page: Rey, Ain, Icha, **Tinos**. Tinos is shown as "Tinos", not Martijn (FACTS F-COA-06: probable, not stated by the club). If the facts lane changes the file, the section follows without a code change; if the file is missing, the timetable's own `trainer` field is used (same spelling today).

## For the motion lane (hooks, no work needed from classes)
- `data-reveal` on the head, live block, tab strip, panel and link (not on the rows: rows have their own day-change stagger and are re-created on each switch).
- Events on `#classes`: `ef:classes:render` `{dow, animated}` after every panel render, `ef:classes:nownext` `{state: live|next|none}` when the now/next state changes.
- State attributes: `.cls[data-visible]` (section near the viewport), `.cls__live[data-state]`, `.cls__row[data-state]` (now, next, past), `.cls__tabs[data-set|data-anim]`.
- CSS variables: `--cls-i` (selected index), `--cls-p` (class progress 0 to 1), `--i` on rows (stagger index).

## Open
1. Copy: provisional English in `copy/slots/classes.json` (42 slots; 7 are weekday names). The copy writer owns the final text. The title slot has an apostrophe in its default.
2. Classes are included with membership (FACTS F-CLS-28, F-CLS-29), but whether a Perform day pass includes classes is not stated (FACTS gaps), so the section says nothing about inclusion. One line could be added once the pricing lane and Raoul settle it.
3. Default tab stays today even after the last class (rows dimmed, live block names tomorrow's class). An auto-jump to tomorrow is a one-line change if Raoul prefers it.
4. Tokens: the section uses the provisional values; it should be looked at again when `tokens.ready` arrives (square cells assume `--r-0`, the indicator uses `--bg-raised` and `--accent`).
5. Component swap: tabs, rows and the link use own `.cls__*` classes; switch to the shared `components.css` ones if D1 wants that.

## Change log
- v3.5 — 2026-10-02: portraits re-cut at 192 px (same framing, same names), CLS and first-viewport numbers re-checked.
- v3.4 — 2026-10-02: CLS 0 (reserved line heights in the live card, tab counts, day heading, tablet Then line); measured with measure.mjs and an own faked-clock run; first-viewport numbers re-run unchanged.
- v3.3 — 2026-10-02: round instructor portraits on the live card and every row (4 portraits from the club's trainer grid, monogram fallback), Tinos pairing flagged, stricter first-viewport fit at 5 phone sizes (numbers above), phone head on one line, card as avatar-left grid, desktop row columns retuned.
- v3.2 — 2026-10-02: lead line gets the 72 px WhatsApp safe zone on phones; every text run in #classes checked against the button rectangle (4 px margin) at 390x844, 375x667, 360x740 in the live and next states: 0 collisions.
- v3.1 — 2026-10-02: compact phone head and live card for the first view (numbers above), lead moved under the card on phones, "Then" line from 760 px up; countdown minute padding fixed; checks re-run.
- v3.0 — 2026-10-02: created.
