> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Hero notes: Elite Fit v3 hero next to the reference hero

Version: v3.0 — 2026-10-02 · owner: hero lane (Opus 5.5) · evidence for the Fable verdict; internal, never on the page.

## The evidence in this folder

| File | What it shows |
|---|---|
| `side-by-side-mobile-load.jpg` | WebKit 390 x 844, every 0.5 s from navigation start to 8 s: Elite Fit v3 (left of each pair) and the reference (right) |
| `side-by-side-desktop-load.jpg` | the same for Chromium 1440 x 900 |
| `side-by-side-mobile-scroll.jpg`, `side-by-side-desktop-scroll.jpg` | top row Elite Fit (top, a short scroll, the end of the hero, one viewport), bottom row the reference (0 to 3 viewports) |
| `ef-mobile-filmstrip.jpg`, `ef-mobile-filmstrip-fine.jpg`, `ef-desktop-filmstrip.jpg` | the Elite Fit filmstrips in the reference's format (0.5 s steps; the fine one 0.12 s steps, 0 to 3 s) |

Method: the same as the lab-hero lane (Playwright recordVideo at 25 fps, a solid magenta document before navigation, time zero = first page frame minus First Contentful Paint; WebKit records white instead of magenta, so white counts as "before the page"). Reference frames are the lab-hero lane's own frames, cut at its own calibration. Captured 2026-10-02 around 11:15 on a loaded machine (load average 6 to 7): absolute times are slower than on an idle phone; the order of events is what counts.

## Adopted from the reference (form only)

- Oversized capitals, line-height 0.8, tracking -0.045 em, near-white ink, cut by the edge so a sliver of the letters is lost while the words read at a glance.
- Desktop: headline flush left and anchored to the bottom, its last line cut by the bottom edge; the sale sits in a narrow column at the bottom right.
- A warm, low-key, motion-blurred photograph as the whole ground of the hero, with the blur baked into the file and a dark top-and-bottom scrim.
- A one-face mono UI in capitals for every label, button and readout.
- The split button: a label box and a square arrow box, 4 px apart, square corners.
- The header: transparent with light ink over the photograph, solid page colour with dark ink and a hairline after a short scroll; on desktop it also condenses.

## Deliberately softened or changed

- The photograph is the club's own hall with its members training and talking, nobody posing; the pan blur keeps them recognisable as people (a soft focus zone), the rest of the room streaks.
- The words are the club's own line ("Better / together") instead of a performance promise.
- The hero is two thirds of the screen on desktop and 60 % on a phone, so the timetable's live class shows in the first phone view. The reference fills the whole screen.
- The mono UI says something useful: Pererenan time ticking in WITA, open until 22:00, the next class with a countdown, today's class count, all from the club's data.
- The sale is inside the hero: Buy a pass, Today's classes and the Google rating with one verified member quote. The reference's first view carries one button and, after a second, a cookie wall and a pop-up; v3 has no overlay at all.
- Footage instead of a still: the poster is frame 0 of a 4-second loop that only starts after the page has loaded.
- A short arrival (the lines slide in along the blur direction) and a light scroll drift; the reference is static. The headline is never hidden, only moved.
- Colours, type and button shape come from the design-system lane's tokens (v3.0); the hero adds only its own on-photo constants.

## Judgement calls (also one line each in `DECISIONS.md`)

1. Footage: the wide hall shot (0.00 to 0.79 s of the landscape master) over the cafe, pool and class shots, because it is the busiest real room with people simply there, and its slow pan suits a pan blur.
2. Pan blur with a focus zone instead of an even blur: the people stay readable, the room carries the speed.
3. Grain as a static CSS layer instead of baked into the poster: same look, about 40 KB lighter.
4. Phone headline centred with a symmetric crop on both edges (the reference crops only the left edge): the brief centres phone hero text; flex centring keeps the crop even.
5. Phone hero at exactly 60 % of the screen (Raoul's first-viewport rule): the headline size is min(22 vw, 12.6 svh); on phones shorter than 800 px the quote steps back and the rating line stays.
6. Desktop header condenses with transforms (the reference animates its height): same look, no layout work per frame, tap targets stay 44 px.
7. Review quotes: only the reviews.json entries FACTS.md verifies (F-REV-04, -06, -07, -08), verbatim; on a phone only the two that fit three lines rotate.
8. On-photo ink is a hero constant, because the page theme below may turn light like the reference's while the photograph stays dark.

## Measured (Chromium, cold cache, localhost without compression, no throttle; 2026-10-02 11:45, tokens v3.0 and self-hosted fonts in place)

| | Phone 390 x 844 | Desktop 1440 x 900 |
|---|---|---|
| LCP element | `img.hero__poster` (hero-poster-m.webp), 40 ms; the header button text was a 20 ms candidate before it | `img.hero__poster` (hero-poster-d.webp), 52 ms |
| CLS (load + 3 s) | 0 | 0.00003, from the classes tabs (not the hero) |
| First-view transfer to load + 3 s, clips excluded (whole page as it stands, all lanes) | 674 KB, 54 requests (budget 900) | 684 KB, 54 requests |
| Hero poster | 12.5 KB (780 x 1114 webp) | 22.8 KB (1920 x 823 webp) |
| Display font (preloaded by the hero partial) | 34 KB | same |
| Hero loop (after load, not in first view) | 78 KB, 4 s, 480 x 686 | 145 KB, 4 s, 1280 x 550 |
| Logo | 1.8 KB SVG | same |
| First-view JS (main + hero + timetable) | about 6.5 KB gzip (hero.js about 4.2 KB) of the 14 KB budget | same |
| Headline crop (Hanken Grotesk 500) | "TOGETHER" spans -10 to 400 px = 105 % of the width: a sliver of T and R | 0 to 923 px, last line cut by the hero's bottom edge |
| First viewport | hero ends at 506 px (60 %); Classes heading and now/next card end at 747 px; WhatsApp 772-828 clear | hero 622 px |

Phones, first-viewport rule, longest class names ("HYROX Conditioning", "Off-Court Training", "Boxercise Beginner"; fixed clocks): the next-class value stays on one line, never cut, at 390 x 844 (hero 506, card bottom 747), 375 x 667 (hero 400, card bottom 640, the quote steps back, rating line stays) and 360 x 740 (hero 444, card bottom 682, rating line only). At 375 x 667 and 360 x 740 the WhatsApp disc overlaps the card's lower right corner (pricing lane).

## Change log
- v3.0 — 2026-10-02: created with the first comparison run.
- v3.0 — 2026-10-02 11:49: sheets and numbers re-captured with tokens v3.0 and the self-hosted fonts.
