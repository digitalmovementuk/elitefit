> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Motion UX audit, lane E1 (hero arrival, header and navigation, anchor jumps, cursor response, section D)

Version: v2.1 — 2026-10-01 · lane E1 (Opus 5.5 max). Changelog: draft created (design columns filled; measured columns pending).

Status (19:10): moments 1, 2, 3, 14 and D are in the sources; first measurements in report-E1.md (JS +1,506 B gzip; Chromium 4x phone 59.8–60 fps, desktop 58.3–59.9 fps; CLS 0; LCP = first paint, poster). Raoul's phone menu request (rows 2e–2g) in progress.

Tokens: motion.css `--m-*` (durations and easings) plus E1's local ones in hero.css §5.0 (`--e1-t-media`, `--e1-t-cta`, `--e1-t-rev`, `--e1-t-go`, `--e1-dur-in`, `--e1-shrink`, `--e1-buy-w`). Gate: `html.motion-ok` for every moving rule; states are ungated.

| # | Moment | UX problem solved | Motion | Trigger | Duration and easing (tokens) | Phone version | Reduced-motion version | How measured | Measured result | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1a | Arrival: header | orient: brand and menu come first, the page "opens" in reading order | `.hdr__bar` fades in and drops 6 px | first paint (CSS) | 260 ms, `--m-ease-out` | same | in place | WebKit 390 / Chromium 1440 filmstrips every 0.25 s; concurrency sampler | pending | kept |
| 1b | Arrival: headline words | build desire: the two halves of the club, one beat each | words rise 12 px (motion.css m-rise, unchanged) | first paint | 600 ms at 0 / 140 ms, `--m-dur-word`, `--m-ease-out` | same | in place | filmstrip | pending | kept (v2.0) |
| 1c | Arrival: footage settles | build desire: the place is alive before the clip plays; replaces the phone board settle | phone: reel area scales 1.04 → 1 from its top edge; ≥ 760: picture scales 1.06 → 1 inside its frame | first paint (CSS), delay `--e1-t-media` 260 / 200 ms | `--m-dur-slow` 900 ms, `--m-ease-out` | whole reel area, one layer | still | filmstrip; LCP A/B (poster stays the LCP) | pending | kept |
| 1d | Arrival: hero buttons | guide: the two next steps arrive after the promise, without ever being hidden | `.hero__ctas` rises 10 px (translate only, full opacity from frame 1) | first paint, delay `--e1-t-cta` 700 / 600 ms | `--e1-dur-in` 420 ms, `--m-ease-out` | same | in place | filmstrip; tap at first paint works (stopwatch) | pending | kept |
| 1e | Arrival: review line | build trust once the offer is read; lane B's `#revline` as a whole | fades up 8 px | first paint, delay `--e1-t-rev` 820 / 720 ms | 420 ms, `--m-ease-out` | same | in place | filmstrip; B's rotation starts at 5 s, no overlap | pending | kept |
| 1f | Arrival: invitation | guide: says where "Today's classes" goes and invites the first tap | arrow inside "Today's classes" nudges 3 px down twice, once; stops for good on scroll | first paint, delay `--e1-t-go` 1300 ms | 2 × 600 ms, `--m-ease-breathe` | same | static arrow | filmstrip; rest-state animation list | pending | kept |
| 2a | Header condenses | orient: once reading starts the header steps back and a soft edge separates it from content | desktop: 72 px bar reads as 56 px (box up 16 px, content down 8 px, logo 90 %); all widths: shadow edge fades in | `#site-header[data-scrolled]` (motion.js, > 8 px) | 280 ms, `--m-ease-out` | shadow edge only (56 px bar is already compact) | same state, instant | Chromium 1440 strip; CLS during scroll | pending | kept |
| 2b | Header Buy a pass docks | guide: the buy action never leaves reach, and never shows twice | header button rises 6 px and fades in; WhatsApp icon slides over to make room | `.hero__ctas` leaves the screen (hero.js IO, header-height margin) | in 240 / 320 ms `--m-ease-out`; out 160 / 200 ms `--m-ease-in` | n/a (buy bar does this job < 760) | appears / disappears in place | Chromium 1440 strip + state JSON | pending | kept |
| 2c | Menu sheet from the toggle | orient: the sheet visibly comes from (and returns to) the button that opened it | sheet scales 0.94 → 1 from the toggle's centre + fades; toggle lines turn into the X | `#hdr-menu[data-state]`, `.hdr__toggle[aria-expanded]` (main.js) | in `--m-dur-menu-in` 260 ms `--m-ease-sheet`; out `--m-dur-menu-out` 180 ms `--m-ease-in`; lines 220 ms | this is the phone menu | instant; v2.0 icon swap | WebKit 390 strip; frame time at 4x | pending | kept |
| 2d | Where am I | orient: the visitor always sees which part of the page they are in | desktop: one ink underline travels to the current nav link; phone: the current row's rule draws in when the sheet opens | `aria-current="location"` (main.js IO band at 40 % of the screen) | 360 ms `--m-ease-out`; phone draw 320 ms after 240 ms | menu row rule | rule shown, no travel | Chromium 1440 state JSON (underline x/w vs link); WebKit menu screenshot | pending | kept |
| 3 | Anchor jumps | orient + confirm: the visitor sees where the link took them and lands on the section's edge, not under the header | native smooth scroll to the section top minus the header (condensed) height; beyond 1.5 screens it first cuts to 0.6 screen before; heading rises in once on arrival; focus to the heading | click on any in-page link (nav, menu, "Today's classes", footer) | browser smooth scroll; cue 560 ms ease-out | same | instant jump, focus to the heading, no cue | stopwatch v2.0 vs v2.1; landing offset; strips | pending | kept |
| 14 | Cursor response | confirm: the main action answers the pointer before the click | hero and header primary buttons follow the pointer up to 3 px × 2 px | pointermove, fine pointer only | translate 200 ms `--m-ease-out` | none | none | Chromium 1440 computed translate; screenshot | pending | kept |
| D | Focus ring after a tap | confirm (keyboard) without noise (touch) | round header buttons: ring closes in (scale 1.2 → 1 + fade) on :focus-visible only; tap flash off | keyboard focus | 240 ms `--m-ease-out` | same | static ring | WebKit 390 tap vs Tab crops + computed styles | pending | kept |

## Cut, and why

| Idea | Why cut |
|---|---|
| Nav links stagger in one by one on arrival | six moving things for no extra orientation; the header arrives as one unit |
| Menu links stagger in when the sheet opens | would exceed three animations at once on a phone; the current-row rule is the only thing that needs the eye |
| Light sheen across primary buttons | a second effect on the same button with the same job as the pull |
| Phone header shrinking 56 → 48 px | 56 px is already compact; the shadow edge carries "scrolled" |
| v2.0 phone board settle | replaced by the footage settle so no more than three things move at once |
| Repeating the invitation nudge | a loop would compete with the review rotation and the WhatsApp pulse |
| Smooth scroll for the skip link | keyboard and screen-reader users want the instant jump |
| Anchor jump for "Buy a pass" | it opens the checkout directly (fewer taps than a jump to the shop) |
