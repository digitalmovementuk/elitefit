> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: Coaches

Version: v3.0 — 2026-10-02 · lane: coaches (Sonnet 5.5, xhigh) · status: ready (`_build/ready/coaches.ready`)
Change log: v3.0 created.

## What is built
Section `#coaches` (`partials/35-coaches.html`, `assets/css/coaches.css`, `assets/js/coaches.js`, `assets/data/coaches-section.json`, `copy/slots/coaches.json`), between Elite Rest and Pricing. Dark, hard, square; the only round things are the portraits.

- **Rows:** one native `<details>` per coach. Closed row = round portrait, the name in the display type of the section titles (caps, line-height .8, -.04 em: 64 px on a 390 px phone, 135 px at 1440), a mono class count ("11 classes a week") and a square plus/minus tile. One column on a phone, the first row fully visible; from 900 px the row is portrait, name, count, tile on one line. One open at a time (`name="crc"`, native exclusive group), keyboard complete (Tab, Enter, Space), no animation under reduced motion or data-saver.
- **Opened coach:** a sunken panel with the week by day (Mon to Sun): time (mono) plus class name, the weekday row is a 44 px+ link. Today's row carries the "Today" tag. A coach who teaches on Saturday or Sunday (Ain) also gets the weekend note (F-CLS-03).
- **Jump to the Classes section on that day:** a click on a day row first selects that day's tab in Classes (click on `#cls-tab-N`, no edit to classes.js), then the hero's global anchor handler scrolls, focuses the heading and highlights. Verified: Ain, Sat row opens `#classes` with the Saturday tab selected (Chromium and WebKit); with no JS the plain `#classes` anchor still works.
- **Derived, never retyped:** coaches shown = trainers who teach at least one class in `schedule.club.json` (read through `timetable.js`), in the order of `coaches.json` (Rey, Ain, Icha, Tinos), display names from `coaches.json`. Classes, days and times come from the timetable only. Anyone not teaching is never shown (Putu's, F-COA-07); a trainer in the timetable but missing from `coaches.json` would be appended with a monogram.
- **Role line:** only Rey's club line, verbatim ("Sports Strength & Conditioning – Weight loss – 1:1 Boxing"), inside his opened panel; FACTS lists it under "What the page may say" (F-COA-02). Ain, Icha and Tinos have no usable line (F-COA-03 to F-COA-05), so none is shown.
- **Portraits:** the classes lane's `assets/img/coach-*.webp` (read-only), `alt=""` (the name sits next to it), lazy, 128 px boxes; a monogram circle when no file is listed in `coaches-section.json` or a file fails.
- **Hooks for the motion lane:** `data-reveal` on the head and on the list wrapper; event `ef:coaches:render {n}` on `#coaches` after the rows land; state `details[open]`.
- **Facts for the ledger:** `data-fact` on the list (F-COA-01 to F-COA-06, F-CLS-01, F-CLS-10 to F-CLS-16) and per rendered row (F-COA-02 / 03 / 04 / 05 + 06, from `coaches-section.json`).

## Needs a decision (flags)
1. **Rey's "Weight loss" role line.** FACTS says the page may carry it; the voice guard treats "Weight loss" as an outcome word and the training lane left it out. It is shown, verbatim, only inside Rey's opened panel. One switch hides it: remove `"rey"` from `roleLines` in `assets/data/coaches-section.json`. Until decided, Elite Training (no role line) and this section differ.
2. **Tinos portrait pairing** (flag from the classes lane, F-COA-06): the file is the club's `TINOS-scaled.webp`, which the grid shows under "Martijn Taken"; the entry named TINOS shows Rey's photo. The visible name stays "Tinos", no surname. To be confirmed by the club.
3. **Portrait sharpness:** the 128 px files are shown at 72 to 96 px on a phone and 128 px from 900 px; on 2x and 3x screens they are soft. Sharper 256 px cuts would need re-cutting from the club's 683x1024 originals (about 8 KB each); not done, the brief says reuse read-only.

## Copy slots
`copy/slots/coaches.json`: 7 slots (eyebrow, title, lead, count-many, count-one, go-sr, error), each with role, max, provisional text and a note. Weekday names, "Today" and the weekend note are read from the classes lane's keys (`classes.day-short-N`, `classes.day-long-N`, `classes.today`, `classes.weekend-note`) so the same thing is worded once; weekday names fall back to Intl. The copy writer still owns the final text of the 7 slots (delta pass). The provisional title names no coach and gives no head-count.

## Checks (WebKit 390x844, 390x664, 320x640 and 2x; Chromium 1440x900; through the browser lock; screenshots looked at)
| Check | Result |
|---|---|
| Console | 0 errors, 0 warnings, 0 failed requests (measure.mjs webkit390, chromium390, chromium1440; own runs) |
| Overflow | 0 px at 320, 360, 375, 390, 414 and 1440; the one-off 9 px in an early 390x664 run came from other lanes' clipped media (hero word, pillar clips), no `.crc` element sticks out |
| CLS | 0 in measure.mjs (chromium390, chromium1440); own run with the page loaded at `#coaches` and coaches.json delayed 700 ms (skeleton on screen, then the rows): 0 at 390 and 1440. Row height is reserved by four skeleton rows (111 px phone, 161 px desktop = the real closed rows) |
| Row heights | closed 111 px at 390, 97 px at 320, 161 px at 1440; names never clipped (scrollWidth = clientWidth at 320, 390, 1440) |
| Keyboard | Chromium: Enter opens, Tab reaches the first day link, Space on the next coach closes the first (exclusive), Enter on a day row jumps. WebKit: Enter, Space and the jump work; Tab skips links in Playwright's WebKit (Safari default), not a page issue |
| Reduced motion | 0 running animations in `#coaches` after opening a coach |
| Failure states | schedule file blocked: list hidden, calm message; coaches.json and coaches-section.json blocked: four names from the timetable with monograms |
| Jump | Ain, Sat row: hash `#classes`, Saturday tab selected, first row "08:00 Stretching with Ain", focus on the Classes heading (Chromium and WebKit) |
| Weight | `coaches.js` 6.6 KB raw, 3.0 KB gzip (2.2 KB without comments); `coaches.css` 6.8 KB raw, 2.0 KB gzip (1.6 KB without comments); budgets 4 KB and 3 KB |
| Tokens | no hex colour, font name or rgb() in `coaches.css` (grep); only icon geometry (a 14 x 1.5 px plus bar) and the 8 px open-slide are literals |

Not measured: WebKit CLS number (WebKit has no layout-shift entries; the proxy was 0), VoiceOver by ear, frame timing under CPU throttle (the section animates only the open slide and the tile bar, opacity/translate/rotate).

## Files
`partials/35-coaches.html`, `assets/css/coaches.css`, `assets/js/coaches.js`, `assets/data/coaches-section.json`, `copy/slots/coaches.json`, `_build/ready/coaches.ready`, this report. Screenshots (internal): scratchpad `coaches/` (w390-closed, w390-rey, w390-ain, w390x664-closed, w320-tinos, c1440-closed, c1440-rey).

## Change log
- v3.0 — 2026-10-02: created.
