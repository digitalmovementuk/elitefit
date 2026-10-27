> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Hero study: the reference hero as a behaviour spec

Version: v3.0 — 2026-10-02 · owner: hero lane (Opus 5.5) · internal evidence, never on the page.
Sources read: `mobile-*.png/jpg`, `desktop-*.png/jpg` (filmstrips every 0.5 s and every 0.12 s, clean, media-only, with-overlay, four scroll states each), `hero-measurement.json`, `sampler-load-*.json`, `sampler-scroll-*.json` in this folder. Written in our own words: no sentence, headline or label of the reference site is reproduced here or on the page; the words below describe form only.

## 1. The oversized headline

| | Phone (WebKit 390 x 844) | Desktop (Chromium 1440 x 900) |
|---|---|---|
| Place | top-left, directly under the 56 px header (line box from y 61) | bottom-left, the last line sits on the bottom edge of the viewport |
| Size | 52 px = 13.3 vw, three short lines | 135 px = 9.4 vw, three lines, the longest about 65 % of the width |
| Weight, case | medium (500), all capitals, a neutral grotesk | same |
| Tracking, leading | -0.04 em, line-height 0.8 (lines nearly touch) | same |
| Colour | near-white (#f2f2f2), no shadow, no blend | same |
| The crop | every line starts 11 px left of the viewport: the first letter loses about a third of its stem; the right side is free | left edge flush (no side crop); the bottom line loses about a sixth of its height under the viewport edge |
| On load | no movement at all; it paints with the first frame, only the web-font swap nudges the glyph widths | same |
| On scroll | moves 1:1 with the page; no scale, no slide, no fade | same |

What makes it work: the size is set so the words read instantly while a sliver is cut off, which says "bigger than the frame" without hurting legibility. The tight 0.8 leading turns three lines into one block. The type is calm (medium weight, not black) and the energy comes from the crop and the photograph.

## 2. The photograph

- One still image, full bleed, edge to edge, the whole first viewport (phone 96 %, desktop 100 %). No video in the hero, no canvas, no CSS filter.
- The treatment is baked into the file: a panning shot, the subject's body held fairly sharp while the ground streaks diagonally (motion blur along the direction of travel). A light film grain is visible in the image itself; there is no grain layer in the page.
- Grade in words: warm, low-key, brown-black. About 42 % of the frame is below luma 40; mean luma about 65 of 255; mid-tones are sand and skin browns; one hot red-orange accent; cream highlights only on small spots.
- Crop: cover, the subject placed right of centre (object-position about 63 % on the phone).
- Overlay: one vertical scrim, dark at the top (about 80 % at 0) fading to clear by a quarter of the height, clear through the middle, dark again from about 60 % to 75 % so the copy at the bottom reads.

## 3. The monospace UI

- One mono face, one weight (400), all capitals, slightly negative tracking (-0.02 em), line-height 1.2. Phone 14 px, desktop 10.5 px; the button label 12 px on the phone.
- Where it sits: the header (navigation words, a "more" plus sign, the menu word), the button labels, and later the small section eyebrows. In the hero itself the mono is only on the button; there are no data readouts in their hero.
- What it says: short imperatives and nouns, two to four words, never a sentence.
- Body copy under the headline is a sans in two tones: the first clause muted grey, the payoff clause bright. Phone: centred, near the bottom; desktop: a narrow column at the bottom right.

## 4. The call to action

- A split button: a label box and a square arrow box side by side, 4 px apart, both in one hot red-orange, radius 0, 52 px tall on the phone. Phone: right-aligned at the bottom; desktop: bottom right under the copy.
- The desktop header carries a second, quieter box: light grey fill, dark mono text, radius 0.

## 5. The header over the hero

- Fixed, transparent at the top, ink near-white; logo mark at the left, mono words at the right (phone) or centre plus a boxed button at the right (desktop).
- After a short scroll it turns solid page-white with dark ink. Desktop also condenses from 63 px to 33 px and gains a 1 px light-grey hairline; the logo mark becomes a wordmark. The change runs 600 ms on a soft out-curve (height, background and colour transition together). Phone keeps 56 px.

## 6. Motion: what moves, in what order

- Load (0 to 8.6 s sampled at ~60 fps): nothing in the hero animates. First paint at ~0.36 s (phone) shows the headline over a dark ground, the photograph arrives ~0.1 s later, then the web fonts swap. Everything after that is overlays: a cookie banner at ~0.9 s covering the bottom fifth, and a promotional modal sliding up at ~2.5 s that covers the whole screen and locks the scroll.
- Scroll: every hero element moves 1:1 with the page (slope -1): no parallax, no pin, no type transform. The scrolling itself is smoothed by a scroll-hijacking library, which changes the feel of every frame.
- The motion character therefore lives in the still photograph (the blur) and in the header change, not in choreography.

## 7. The phone composition, top to bottom (first 844 px)

1. 0 to 56: transparent header, mark left, two mono words right.
2. 61 to 186: the three-line headline, left-cropped.
3. 186 to ~600: open photograph (the blurred subject carries the frame).
4. ~610 to 690: two-tone body copy, centred.
5. 744 to 796: the split button, right-aligned.
6. 812: the hero ends; a light band (logos) shows below.
7. After ~0.9 s a cookie banner covers 657 to 844.

## 8. What Elite Fit takes, and what it does not

Taken as form: the oversized capitals at 0.8 leading and -0.04 em tracking with a sliver cut by the edge; a warm, low-key, motion-blurred photograph (made from the club's own hall footage); the top-and-bottom scrim; the one-face mono UI in capitals; the split button with a square arrow box; the transparent header that turns solid on scroll and condenses on desktop.

Softened or changed for Elite Fit, each with its reason (also in `DECISIONS.md`):
- Hero height two thirds of the first viewport (house rule), not full height: the crop gets harder instead of the hero getting taller.
- Our headline is two words from the club's own line, so it is bigger than theirs and crops at both edges on the phone (centred, by the brief) and at the bottom edge on desktop (as theirs does).
- The mono UI becomes live readouts (Pererenan time, open state, next class with countdown, classes today), because the club's timetable is the most useful fact a visitor can get in the first second.
- Footage instead of a still: the poster is the first frame of a short silent loop that starts only after load; reduced motion and data-saver keep the still.
- A short arrival (the two lines slide in along the blur direction) and a light scroll slide are added: the brief asks for v2.1's arrival and for the type to slide with the scroll. Transform only, never hiding the headline.
- No overlay, modal or cookie wall in the first seconds; native scrolling, no smoothing library.
- The sale stays inside the hero: Buy a pass, Today's classes and the review line are in the first phone view.

## Change log
- v3.0 — 2026-10-02: created from the lab-hero lane's captures and measurements.
