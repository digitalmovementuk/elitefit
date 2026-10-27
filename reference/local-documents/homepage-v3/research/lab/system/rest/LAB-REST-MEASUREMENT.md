> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# The Performance Lab, measured: everything except colour, type and radius tokens

Version: v1.0 — 2026-10-02 · lane lab-rest · INTERNAL EVIDENCE (research only, never part of the site)
Changelog: 2026-10-02 created. Sibling lanes: lab-tokens (colour, type, radius, button tokens), hero capture (hero in motion). The words of the Lab are in `copy-samples-INTERNAL.md` only; the rules for the voice lane are in `COPY-FORM-LAB.md`.

## 0. Method and provenance

- Source: the live public site theperformancelab.ca, home plus `/about`, `/services/testing`, `/services/training`, `/services/therapy`, `/services/longevity`, `/contact`, `/faqs`, `/blog` (text for all nine; screenshots and component probes for home, services/testing, about, contact, faqs, blog).
- Tools: Playwright 1.63, WebKit iPhone 390x844 at 2x (first), Chromium 1440x900 at 1x (second). Every browser run went through `_tools/with-browser-lock.sh`. Computed styles, `getBoundingClientRect`, `document.getAnimations()`, `requestAnimationFrame` samplers and CSS rule reads; nothing guessed. Where a value was not measured it says so in section 11.
- Overlays on first load (both profiles): a promo modal (title, two lines, one button, close tile) and a cookie bar with only two buttons, "learn more" and "accept" (no reject). Least-tracking path used: the modal was closed with its own close tile, the cookie bar was never accepted and was hidden with CSS for clean captures (screens with the bar visible are kept: `m-home-01`, `m-home-02`). Analytics and ad domains were blocked at the network level. While the modal is open the page is scroll-locked (`lenis-stopped`); it unlocks on close.
- No form was filled or submitted, no accordion with a booking effect was used, the booking host was never opened. Third-party booking host (name only): Jane App (`myperformancelab.janeapp.com`), 7 links on the contact page, all `target=_blank rel=noopener noreferrer`.
- Screenshots: `screens/` (138 PNG, 780x1688 for phone, 1440x900 for desktop). Raw JSON: `raw/`.

## 1. The ten facts a design system needs

1. **Desktop is a scaled composition.** Root font-size is 16 px below 768 px; from 768 px it is `100vw / 120` (6.4 px at 768, 8.53 at 1024, 10.67 at 1280, 12 at 1440, 13.33 at 1600, 16 at 1920, capped at 20 px from 2400). All desktop lengths are rem, so the page is the same picture at every width, only scaled. Consequence: at 1440 body is 12 px and mono labels 10.5 px; at 768 everything is tiny (header 35 px). Phones are the true "mobile" design.
2. **Square, flat, hairline.** Radius 0 everywhere (buttons, inputs, chips, cards, images), no shadows, 1 px `#e0e0e0` (light) / `#292929` (dark) hairlines, orange `+` cross markers on hairline corners.
3. **Two surfaces and a third.** Hard cuts between white `#fff`, near-black `#171717` and a light-grey panel `#f2f2f2` (strips, footer boxes). The header changes colour with the surface under it (transparent over the hero, white over white, black over black) in 600 ms.
4. **One button anatomy.** A label tile and a square arrow tile 52 px high (51 at 1440), 4 px (3 px) apart; on hover the two tiles swap sides in 450 ms and the arrow turns to a diagonal.
5. **Mono for everything that is a label,** display grotesk for everything that is a sentence; a 12 px mono caps row is the universal metadata line `[CATEGORY] [NAME] ... [001]`.
6. **Oversized caps are layout, not decoration.** 82 to 180 px caps cropped by the viewport edge carry section changes and every statistic; the number sits under its label.
7. **Imagery is raw.** No filters, no overlays on content photos, ratios 16:9 (phone) and 2:1 (desktop) for cards; the blur and grade live in the photographs themselves; scrims only on the hero and on the photo-to-dark fades.
8. **Motion is expo-out and one curve.** `cubic-bezier(0.16, 1, 0.3, 1)` for reveals (0.5 to 0.7 s), `cubic-bezier(0.22, 1, 0.36, 1)` for the header (0.6 s), Material-style `(0.4, 0, 0.2, 1)` for colour and accordion; page change is a wipe of 5 or 6 orange columns.
9. **Scroll is hijacked (Lenis) on desktop wheel.** A 400 px wheel step is 90 % done at 0.44 s, 99 % at about 1.0 s and settled at about 1.2 s (see section 8). No scroll-driven CSS (no `animation-timeline`), no GSAP, no canvas, no WebGL, no `<video>` element anywhere.
10. **No pricing, one booking path.** Four services, no price on any page; the single action is "book" to an external scheduler. The price answer in the FAQ is "after a consultation we send a quote".

## 2. Platform and runtime (measured)

| Item | Value |
|---|---|
| Framework | Next.js, Tailwind v4 (arbitrary values such as `gap-[2.5rem]`) |
| Smooth scroll | Lenis (`window.lenis`, html class `lenis`; `lenis-stopped` while the modal is open) |
| Libraries absent | GSAP, ScrollTrigger, Locomotive, Three.js: all false; `canvas` 0; `video` 0 at load and after scrolling the home page; the static HTML of 5 pages contains no video file reference (the earlier benchmark's "2 .webm refs" were `site.webmanifest` matches: correction) |
| Images on home | 195 `img` elements (85 on mobile layout), webp for photos, svg for logos and the `+` marker (`plus-red.svg`) |
| JS-driven layout | 271 elements with inline transforms; pinned slides use CSS variables `--pin` and `--hero-offset`; scroll-linked motion is JS, not CSS |
| Breakpoints (rem units, 16 px basis) | 40, 48 (768 px, the real switch), 64, 80, 96; `(hover: hover)` for hover rules |
| Body | 16 px base; display weight 500, body weight 400; `scroll-behavior: auto`; `overflow-x: clip` |
| Page transition | A fixed full-screen layer (z 100, no pointer events) of 5 (phone) or 6 (desktop) vertical columns in the accent colour |

## 3. Components: links, inputs, cards, chips, rows, accordions, tabs

### 3.1 Links

| Kind | Style | States |
|---|---|---|
| Header nav (desktop) | mono 10.5 px caps, no underline, `#f2f2f2` over the hero, `#171717` over light | hover: colour to accent in 150 ms `cubic-bezier(0.4,0,0.2,1)`; focus: browser default blue ring (auto, 1 px, offset 1 px), no custom ring |
| Footer and menu text links | display 500, 20 px on a phone (24 px at 1440 for the services row), tracking -0.04em, always underlined in text colour, `#171717` | hover: no colour change; a `transform` on a child span in 420 ms `cubic-bezier(0.16,1,0.3,1)` (the visual effect was not captured in a still: unverified) |
| Legal and tool links | mono 12 px caps, underlined | none measured |
| "Learn more" inside a team card | mono 14 px caps, underlined | none |
| Contact lines (e-mail, phone, address) | same as footer text links; address is plain text, not a link | none |
| Tap size on a phone | footer links 20 to 24 px high, 37 to 245 px wide; header text buttons 18 px high | below 44 px (see section 10) |

### 3.2 Buttons (structure only; colour tokens belong to lab-tokens)

- Anatomy: `[label tile][arrow tile]`, flex, gap 4 px (phone) or 3 px (1440). Heights: 52 px phone, 51 px at 1440 (4.25 rem); header tile 51 px; card tile 46 px at 1440. Label padding 0 16 px (15 px at 1440). Arrow tile square. Arrow glyph 16 px, stroke 1.5, square caps.
- Variants: accent tile with light label (primary), light-grey tile `#f2f2f2` with dark label (on dark surfaces), black tile `#171717` with light label (desktop header over a light page), accent text link with a tiny arrow (desktop header after scroll). Submit buttons (`SIGN UP`) are a single tile without arrow, 83 x 52.
- Hover (desktop): the label tile translates +54 px (tile + gap) and the arrow tile takes its place, the arrow turns to a diagonal; 450 ms `cubic-bezier(0.4,0,0.2,1)` (40 elements share this transition). Submit button: `filter` 150 ms (brightness). Press and disabled states: not observed.
- Cookie bar buttons: two equal tiles, grey and accent, mono 14 px caps.

### 3.3 Inputs and form fields (no value typed, no submit)

| Field | Measure |
|---|---|
| Newsletter e-mail | one row: input + submit tile, 4 px apart; input 247 x 52 (380 x 51 at 1440), white on a `#f2f2f2` panel, no border, radius 0, padding 0 12 px (15 at 1440), mono 12 px caps tracking -0.02em, placeholder `#bbb`; no visible label (aria-label only); under it a 3-line mono 12 px caps consent text in grey |
| Contact fields | name and e-mail inputs 358 x 52, textarea 358 x 174 (padding 16 12, resize vertical), background `#292929` on a `#171717` panel, text `#f2f2f2`, no border (the e-mail input carries a 1 px transparent border), radius 0, mono 14 px caps, placeholder 50 % of the text colour; visible labels above groups in display 14 px sentence case, light |
| Subject picker | single-select chip group (see 3.5), not a dropdown |
| States | default only is visible; focus draws no ring (outline-style none: a keyboard user sees nothing on inputs); no error, success, disabled or hover style found without submitting; required attributes: none |

### 3.4 Cards

- Service/process card (phone): full width 390 (358 inner at 16 px padding), top hairline 1 px `#e0e0e0`, no side borders, no shadow, radius 0. Inside: mono header row, 358 x 200 photo (1.79:1), display 24 px one-sentence headline, button; cross markers (19 px orange `+` on a 24 px white square) sit on the hairline at x = -12 and 378 so half of each is clipped by the screen edge. Card height 473 (service) and 257 (process step).
- Service/process card (1440): two columns, a vertical hairline in the middle, a 1 px box per card, 18 px inner padding, photo about 663 x 322 (2.06:1), orange `+` at inner corners and grey `+` at outer corners, card about 575 px high.
- "What is included" card (service pages): white rectangle on a full-bleed photo, display title (about 28 to 36 px) left and two-digit counter right, description 14 px at the bottom, a faint logo mark bottom-right; 590 px wide in a horizontal rail at 1440 with a thin progress line (white on grey) under the rail; on a phone one card (about 368 px wide, the next one off-screen) is visible at a time in a pinned rail (not verified for the other cards).
- Team card: B&W portrait 358 x 434 (0.82:1) with the book tile overlapped bottom-right, then mono role line + grey credentials, a 24 px display bio, an underlined mono link.
- News tile: 343 x 200 (1.72:1) on a phone, 925 x 542 at 1440; flat 40 % `#171717` overlay; display 20 px title bottom-left, date bottom-right; arrow tiles 52 x 52 light.
- Panels: `#f2f2f2` boxes 358 wide, 16 px gaps, padding 16 to 28 px, no radius (newsletter, footer links, footer photo).
- Testimonial: no card; on dark, the name large, the quote 24 px, mono credential, small underlined "view full" control.

### 3.5 Tags and chips

- No pill or badge anywhere. Metadata is plain mono text.
- Chip (contact subject): button 36 px high, padding 12 8 (width follows text), mono 14 px caps, tracking -0.02em, radius 0, 8 px wrap gaps; inactive `#292929` with light text, active (`aria-pressed=true`) `#f2f2f2` with dark text; transition colour 150 ms; the first chip is active on load.
- Desktop-only boxed abbreviations under a statistic: 1 px hairline boxes with 24 px display text.

### 3.6 Rows, lists, tables

- No table. Row pattern: `[mono grey category][mono dark name]...[mono grey zero-padded index]`, 12 px mono, a 1 px hairline above, 55 px air to the title (phone). Process and service rows share it.
- Footer link groups: mono grey label then inline links with 16 px gaps; groups 22 to 35 px apart.
- Stacked centre-aligned lists (organisations, programmes): 24 px display, line-height 1.0, no bullets.

### 3.7 Accordions and tabs

- FAQ accordion: question row 16 px display with a plus that becomes a cross on open; hairline between rows; answer 14 px; several rows can stay open (observed 5 open at once). Open/close animates `grid-template-rows` in 450 ms `cubic-bezier(0.4,0,0.2,1)` (row height 46 to 105 px in about 400 ms).
- FAQ categories (phone): full-width `#f2f2f2` mono caps rows, 54 px high, padding 20 16, with a plus; they behave as accordion headers.
- Tabs (desktop, about page): four equal tabs, 360 x 45, at the foot of a full-bleed photo, mono 10.5 px caps, active one has a white top line and white text, inactive are grey; the statement above and the photo change per tab. On a phone the same content is a single statement over a photo (tab behaviour not captured at 390).
- Sub-navigation on service pages: three mono 14 px grey labels spread left, centre and right under the hero (`[anchor] [anchor] [anchor]`).

## 4. Header and mobile menu

### 4.1 Layout

| | 390 px | 1440 px |
|---|---|---|
| Height | 56 px fixed | 63 px at the top (5.25 rem), 33 px after scroll (2.75 rem) |
| Left | mark 32 x 32 at x 16, y 12 | mark 35 px at x 21 at the top; after scroll the wordmark text replaces the mark |
| Centre | none | nav HOME, WHO WE ARE, BLOG, CONTACT, then SERVICES with a plus; mono 10.5 px |
| Right | `SERVICES +` (81 x 18) then `MENU` (34 x 18), mono 14 px, right padding 16 | book tile 150 x 51 at the top (light tile on the hero, black tile on light pages), text link in accent with a small arrow after scroll |
| Over the hero | transparent, text `#f2f2f2` | same |
| Border | none | 1 px `#e0e0e0` (light) or `#292929` (dark) after scroll |

### 4.2 Behaviour on scroll (measured at 10 positions)

- Always fixed at top 0; it does not hide on scroll down or reappear on scroll up (checked: top stays 0 when scrolling up from 3500 to 3200).
- Colour follows the surface beneath: transparent at 0; white background and `#171717` text from about 300 px; `#171717` background and `#f2f2f2` text over dark sections (5000, 6300, 8400); back to white over light sections. Transition on height, background-color and color: 600 ms `cubic-bezier(0.22, 1, 0.36, 1)`.
- At 1440 the bar shrinks from 63 to 33 px at the same moment (same transition).

### 4.3 Phone menu (closed and open captured: `m-menu-00-closed`, `m-menu-03-open-settled`, `m-menu-07-services-open-settled`)

- Trigger: `MENU` text button; after the tap it reads `CLOSE ×`, header stays in place, logo stays.
- The sheet: a white full-screen layer from 56 px down to the bottom (788 px high), z 40, fade only: opacity 0 to 1 in 300 ms `cubic-bezier(0,0,0.2,1)` (first frame at 34 ms, 55 % at 116 ms, 99 % at 316 ms). No slide, no stagger of items (items are at opacity 1 inside the fading sheet; each nav label is split into per-letter spans, purpose not verified).
- Content, top to bottom, centred: HOME, SERVICES +, WHO WE ARE, BLOG at 58 px display caps (line-height 0.8, tracking -0.04em, 46 px rows, 54 px pitch); the book tile (169 + 52 px) 48 px below; a small group HELP with Contact and FAQ links (20 px underlined); a CONTACT group with e-mail and phone (20 px underlined). No social links in the menu (they are only in the footer); no other CTA.
- `SERVICES +` swaps the sheet (same layer, same fade) to TESTING, TRAINING, THERAPY, LONGEVITY at 58 px, the same book tile, then COMPANY links (Who we are, Blog, Contact, FAQ) and the contact group at the bottom; the header label `SERVICES` turns grey while it is open.
- Page scroll is locked while a sheet is open (Lenis stopped; `scrollTo` leaves `scrollY` at 0).
- Desktop SERVICES panel: a white sheet 472 px high under the header, 4 service names at 72 px pitch (display caps, 90 px at 1440 = 7.5 rem), a framed B&W photo with orange corner crosses on the right, a mono grey caption bottom-left; page behind gets a 20 % black scrim with a backdrop blur (`backdrop-blur-sm`); opens on click (hover alone did not open it: `aria-expanded` stayed false); transition on transform, opacity and top 500 ms `cubic-bezier(0.16,1,0.3,1)`. Header turns white while it is open and the book tile turns black.

## 5. Grid, spacing and surfaces

### 5.1 Grid

- Phone: one column; gutter 16 px (1 rem); sections `max-width: 430 px` (26.875 rem) centred; card inner width 358 px; hairlines run edge to edge with cross markers half outside the screen.
- 1440: no max-width; gutter 21 px (1.75 rem); content is fluid across 1398 px. Layout is editorial: a two-column card grid (698 px each, hairline in the middle at x 719), a centred 692 px block for intro statements (x 374 to 1066), a statement block offset to the right half (x 847 to 1405) beside an oversized word on the left, a 573 px text column (x 390 to 963) inside a 692 px frame. Photos float freely in the margins (see 6).
- Alignment: phone text is left-aligned except hero, sub-hero and menu (centred), stats lists (centred), and CTA tiles in centred sections. Labels sit at the left gutter; counters at the right gutter. The hanging eyebrow: on the about page the small label shares the first line of the statement (sits in the indent of the first line).
- Long labels and numbers: labels never wrap on a phone except the 5 to 6 word eyebrows and one row label that breaks after "support" (two-line row label, still top-aligned with its counter). Statistics: label in 82 px caps, stacked 3 lines and cropped by the left edge, a down-left arrow 81 px, the number in 180 px caps below; at 1440 the label is left, the arrow centre, the number right on one line.

### 5.2 Section rhythm (from `rhythm.json`, phone / 1440)

| Gap | Phone | 1440 |
|---|---|---|
| Section top to eyebrow | 80 (intro), 40 (services), 104 (process), 32 (clients, dark), 28 (footer panels) | 242 (intro), 89 to 117 (services, process) |
| Eyebrow to statement | 8 to 12 | 8 to 11 |
| Statement to support text | 12 to 28 | 9 to 21 |
| Support text to button | 20 to 48 | about 48 |
| Section end padding below the last element | 28 to 178 | 82 to 156 |
| Process step: header row to title | 64 to 82 | 86 |
| Process step: title to body | 32 | 33 |
| Service card height | 473 | about 575 |
| Section padding (`OUR SERVICES`) | 40 top, 68 bottom | 48 top, 108 bottom |

Spacing scale in use (arbitrary rem values, 16 px basis): 0.25, 0.5, 0.625, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 4, 6 rem; fixed sizes 4 px, 10 px, 19 px (marker image), 38 px.

### 5.3 How sections change surface

- Hard cuts, no gradients between sections: white to `#171717` to white; `#f2f2f2` for the logo strip (phone height 82, 1440 height 89) and the footer panels.
- Scroll-linked inset (desktop): the dark statistics panel enters as a card with a 28 px side margin (width 1384) and the margin shrinks linearly to 0 (full bleed, width 1440) over about 600 px of scroll (from the panel's top at 724 px below the viewport top to 124 px), by JS, not CSS. The header changes colour as soon as the panel reaches it.
- A photo-to-dark fade closes the statistics block: the gym photo carries a gradient from 40 % black at the top to solid `#171717` at the bottom, then the page continues white below a hard edge on a phone.
- Dark surfaces: statistics, team statement, testimonials and news band, contact form panel, the "pair" closing headline of each service page. Light surfaces: intro, services, process, footer. About 38 % of the phone home page height (4,599 of 12,185 px, hero photo excluded) is dark.

## 6. Imagery treatment and icons

| Item | Measure |
|---|---|
| Card photos | 358 x 200 phone (1.79:1), about 663 x 322 at 1440 (2.06:1), `object-fit: cover`, centred, radius 0, no filter, no overlay, lazy; sources 691 to 2048 px wide webp |
| Hero photo | one still 2048 x 1365 (`desktop.jpg`), `object-fit: cover`, position 63 % 50 % on a phone (crop moves the subject), eager; phone scrim: `linear-gradient(26,26,26 at 80 %, 0 at 25 %, 0 until 60 %, 70 % at 75 %)`; 1440 scrim: transparent to 60 % black over the lower half (hero lane covers the rest) |
| Gallery strip (phone) | six images at one height 204 px, widths alternate 166 (portrait 0.81) and 243 to 283 (landscape 1.19 to 1.39), 8 px gaps, full bleed |
| Floating photos (1440) | six vertical crops 153 to 260 px wide x 375 px high (ratio 0.41 to 0.69) at absolute positions in the margins, differential parallax (section 8) |
| Full-bleed band | gym floor 1920 x 1363 shown 1427 x 992, position 50 % 0, gradient 40 % > 20 % > 20 % > solid `#171717`; panoramic strip 1024 x 120 (8.6:1) with 5 % side fades to `#171717` |
| News tiles | 1.72:1, flat 40 % black overlay, text on top |
| Portraits | B&W, dark vignette, 0.82:1, frame with hairline and 18 px padding at 1440 |
| Footer photo | B&W motion-blurred action still, 334 x 231 (1.45:1) phone, 552 x 401 (1.38:1) at 1440 |
| Blur, grain, duotone, masks | none applied by CSS (`filter` none, `mask` none, `mix-blend-mode` normal on every image); motion blur and warm/teal grade are in the photographs; B&W is baked into the portrait and footer files |
| Image to text | phone service card: photo 200 of 441 inner (45 %); 1440 card: photo 322 of 575 (56 %) |
| Video | none: 0 `<video>`, 0 `canvas`, none in static HTML of 5 pages |
| Icons | arrow: 16 viewBox, stroke 1.5, square caps, miter joins, 16 px shown, inside a 52 px tile; carousel arrows: 24 viewBox, stroke 2, square caps, 16 px phone and 20 px at 1440; plus and close glyphs: stroke 2, square caps, about 16 px; the `+` marker is an image file, accent colour, 19 px in a 24 px white square; logo mark: single filled path in a 40 viewBox (32 to 81 px shown); brand logos: svg, 32 px high strip. Set look: monoline, square-ended, no fills, no rounded caps |

## 7. Programmes, pricing and booking

- **Programmes** are presented as four numbered services (`001` to `004`), each a card with one photo, one sentence and one named button ("explore [name] details"). Service pages repeat one skeleton: centred caps title between two orange crosses, one sentence, book tile; three-label sub-navigation (showreel, process, team); "our approach" statement plus a one-sentence result; a dark photo panel with the "what is included" statement, a book tile and 3 to 8 numbered cards (`01` to `08`) in a pinned horizontal rail; a six-step process (`001` to `006`, each: row label, 3 to 6 word title, 30 to 45 word body); a five-question FAQ; a closing "pair" headline with two short paragraphs and a book tile. Special offers appear as one dark band with key/value labels (for example `FORMAT: [value]`).
- **Pricing**: none published. No price, no tier, no comparison on any of the nine pages; the FAQ answer states that pricing varies and that a tailored quote follows a consultation. Nothing to copy structurally; Elite Fit needs its own pricing language (cards by length, price morphing) and says so in DESIGN-SYSTEM-PERFLAB.
- **Booking path**: the book tile appears in the header (desktop), in the menu sheet (phone), after the hero, after the intro, after the process, in the footer, in team cards and after each FAQ: 6 to 8 times per page, always the same words, always an external link to the scheduler (Jane App) in a new tab. No on-site booking form, no calendar, no price step. A contact form with a subject chip group and a message exists separately.
- **CTA wording pattern** (rules in `COPY-FORM-LAB.md` section 4): one repeated transactional phrase, one aspirational phrase in the hero, one named "explore ... details" per card, navigation phrases such as "meet ...", list phrases "view all ...", "show more ...".

## 8. Motion level

### 8.1 Scroll behaviour

- **Lenis smooth wheel on desktop**: a 400 px wheel step reads 0 at 36 ms, 157 px at 137 ms, 267 at 237, 327 at 336, 360 at 436, 378 at 536, 393 at 736, 399 at about 1,000 and 400 at 1,236 ms: an exponential approach, 90 % at 0.44 s, 99 % at about 1.0 s, settled at about 1.2 s. The step is delivered over about one second instead of one frame; the first movement appears at about 36 ms, so input is not delayed, but the tail is long and a gesture cannot be stopped mid-glide (measurement; the felt impression is an inference).
- Touch on a phone: Lenis is installed, but its touch smoothing was not measurable with a synthetic gesture here: unverified. Phone scroll in the captures was programmatic.
- Scroll locking: promo modal and open menu sheet lock the page.
- Pinned slides (phone statistics): four 22.6 rem slides stacked, positioned by `--pin`; each slide is one oversized label plus number; they replace each other while scrolling (JS).
- Parallax floats (1440): six photos move at different speeds against the page (measured per 130 px of scroll): extra upward drift beyond the page scroll of 0.15, 0.22, 0.36, 0.48, 0.57 and 0.72 px per px, and one photo stays pinned in the viewport for about 1,300 px of scroll; each one stops (clamps) after about 700 to 900 px of scroll; total extra displacement up to about 760 px.
- Dark panel inset: see 5.3.

### 8.2 Reveals and transitions (computed transitions on the home page, 390 px)

| Transition | Elements | Duration and easing |
|---|---|---|
| opacity + transform reveal | 102 | 0.6 s, `cubic-bezier(0.16,1,0.3,1)` (expo-out); opacity part `ease` |
| transform (hover swap, rails) | 40 | 0.45 s `cubic-bezier(0.4,0,0.2,1)` |
| colour, background, border | 15 | 0.15 s and 0.2 s `cubic-bezier(0.4,0,0.2,1)` |
| transform | 4 | 0.5 s `cubic-bezier(0.22,1,0.36,1)` |
| transform, translate, scale, rotate | 3 | 0.3 s `cubic-bezier(0,0,0.2,1)` |
| opacity (menu sheet) | 2 | 0.3 s `cubic-bezier(0,0,0.2,1)` |
| opacity | 2 | 0.5 s expo-out |
| height (element not identified) | 2 | 0.4 s expo-out; the header itself is 0.6 s `cubic-bezier(0.22,1,0.36,1)` and is not in this count |
| transform | 2 + 2 | 0.4 s and 0.7 s expo-out |

- Keyframes in the stylesheet: ring fill (`stroke-dashoffset`), logo fill (`clip-path` inset 0 100 % to 0, 9.85 s linear once and 5 s linear infinite: a loader or hero timer), compass turn (logo mark, 0.65 s `cubic-bezier(0.7,0,0.3,1)`), compass idle spin (a 12 % burst per cycle), team copy fade (8 px rise), team line reveal (`translateY(110 %)` to 0, a line mask), modal slide-in (right and bottom), modal backdrop (20 % black plus a 2 px blur).
- Word-level rises (12 px translate plus opacity 0.6 s with a delay) are used on the rotating testimonial quote; the large statements are static (word spans carry no delay).
- Counters: none. The statistic numbers are static text at every sampled scroll position.
- Marquee (phone): a grey logo strip below the hero (82 px high, logos 32 px high, 40 px gaps), JS `translate3d` moving left at a constant 30 px/s (45 px per 1.5 s, three duplicated groups of a 1,520 px track, a loop about every 17 s), no CSS animation, no pause rule found.
- Gallery strip (phone): the six-photo strip drifts sideways with the scroll, about 0.83 px left per px of vertical scroll (x moves 165 px per 200 px scroll), scroll-linked by JS. Testimonial rotation: automatic with previous/next arrow tiles; one change was seen between samples at 3 s and 6 s, none in the following 6 s, so the interval is at least 6 s (exact period not measured).
- Cursor effects: none (no custom cursor, no following element).
- Page transition: 5 columns (phone) or 6 (1440) of the accent colour wipe in left to right: each column `scaleX 0 to 1` in about 0.5 s (expo-out shape: 28 % at 17 ms, 83 % at 70 ms), staggered about 50 ms, fully covered after about 0.6 s; a hold while the next route loads; then each column wipes out in about 0.35 s with the same stagger. Click to visible new page: about 2.6 s in this run on a loaded machine (the route changed at 1.4 s; the cover lasted about 1.7 s).
- Hover: button tile swap 450 ms, nav colour 150 ms, submit brightness 150 ms, footer link transform 420 ms. Press: nothing found (no `:active` style measured).
- Reduced motion: not tested.

### 8.3 How it feels natively

On a phone the page scrolls with the device's native momentum (programmatic scroll was used for captures, so this is inferred from the Lenis defaults, unverified). On a desktop wheel it is clearly hijacked: about one second of glide per gesture. The motion language is bold (big type crossing the screen, a full-width wipe on every page change) but each individual transition is short; the weight comes from the scale of type, not from slow animation.

### 8.4 What an Elite Fit (calm, welcoming) version of this motion level would be

- Keep: one expo-out family (0.5 to 0.7 s) for reveals; the header colour change in 600 ms; the button tile swap in 450 ms; accordion rows in 450 ms; the hairline-and-cross framing as static decoration.
- Soften: no scroll hijack (native scrolling is a project rule); replace the full-width column wipe with a 250 ms fade of the content only (no cover); shorter staggers (30 ms) and at most 3 simultaneous movements; photos drift at no more than 0.2 relative speed and never behind text; no looping logo or compass animation; reduced-motion keeps layout and information, removes drift, swaps and wipes.
- Keep the drama where the club has it: oversized type sliding a little with the scroll, count-up for opening-hours readouts only if real, a slow 8 s ambient clip on the hero instead of the still.

## 9. Copy form

See `COPY-FORM-LAB.md` (rules) and `copy-samples-INTERNAL.md` (verbatim samples, internal only). Headline numbers: mono labels 1 to 3 words (median 7 characters), eyebrows 2 to 6 words; section statements 7 to 12 words; paragraphs median 28 words, 2 sentences; sentences median 14 words; buttons verb-first, 2 to 5 words, no punctuation; counters `001` / `01`; dates `Mon YYYY`.

## 10. Limits for a phone, and five softening options

### 10.1 Where the hard look fights a warm, welcoming club (390 px, measured)

| Feature | What was measured | Why it fights warmth or usability |
|---|---|---|
| Oversized cropped type | 82 to 180 px caps cut off at the left edge: words like the closing brand name are split mid-word and a page title shows only part of its last word on the about page | Fine for a brand statement, cold for people who want to know whether they will fit in; a cut word reads as an error to some visitors |
| Mono data styling | 12 px mono caps for all metadata (14 % of text under 14 px, 9 to 17 % per page); grey `#bbb` on white labels | Low contrast and small: `#bbb` on white is about 1.9:1, well below AA; reads as instrument panel, not hospitality |
| Body text size | 14 px body (52 to 71 % of characters under 16 px); line-height 1.3 | Below the 15 to 16 px floor in the brief |
| Dark surfaces | about 38 % of page height; full-black statistics wall with 180 px numerals | Heavy; for a pool-and-sauna club the strongest mismatch |
| Tap targets | 31 to 48 interactive elements per page below 44 px: header `MENU` 34 x 18, `SERVICES` 81 x 18, footer links 20 to 24 high, accordion question line 16 high, chips 36 high, "view full review" 115 x 14 | Fails the 44 px rule on the busiest controls |
| Focus visibility | inputs show no focus ring; links use the browser default only | Keyboard and switch users lose position |
| Layout bug | blog tile title overlaps its date at 390 px | Evidence the oversize system breaks on content it did not plan for |
| Hard edges | square tiles, hairlines, no radius, no shadow | Reads technical; warmth must come from photography and words |
| Overlays at load | promo modal plus a cookie bar with no reject on every first visit | Against the brief's "nothing in the first 3 seconds" |
| Tablet | root scale jumps from 16 px to 6.4 px at 768 | Not a concern for a phone-first page; do not copy the scaling rule below 1024 |

### 10.2 Five concrete softening options that keep the look

1. **Raise the small end, keep the shape.** Body 16 px (line-height 1.45), mono labels 13 px with `#6b6b6b` or darker on light (AA 5:1) and `#bdbdbd` on dark; keep caps and tracking -0.02em. Tap rows: add 44 px invisible hit areas to `MENU`, footer links and accordion rows without changing the visible type.
2. **Warm the neutrals and keep the surfaces.** Replace the cold `#171717` and `#f2f2f2` pair with a warm charcoal (`#1e1a17` family) and a warm paper (`#f6f1ea`); use dark only for two bands per page (hero and one feature) and keep the rest on paper, so the contrast rhythm stays but the wall of black goes.
3. **Crop with care and show people.** Keep the edge-cropped headline but crop at most the first and last letter (never a whole syllable), keep the full phrase in the h1 text for screen readers, never split a word mid-syllable in a closing band; put a real face or room photograph beside every oversized statistic or headline.
4. **Round the corners of the voice, not of the boxes.** Keep square tiles and hairlines, but use round caps and joins on the icons (stroke 1.75), 4 px radius on form fields only if the design lead allows it, and replace "instrument" wording of labels with person-sized ones (the voice lane's job): `[CLASS] [TIME] [ROOM]` instead of `[CATEGORY] [NAME] 001`.
5. **Calm the motion and the arrival.** Native scroll; page changes fade content in 250 ms (no column wipe); tile-swap hover kept at 450 ms but with a 4 px shift instead of a full swap on touch; slower parallax (0.15 to 0.25); no overlay in the first 3 seconds; cookie choice offers a reject button of equal weight.

## 11. Unverified or not measured

- Touch-scroll feel on a phone with Lenis (no synthetic touch gesture used); press (`:active`) styles; reduced-motion behaviour; the footer-link hover effect as a still; the hover/focus state of the cookie bar buttons; tab behaviour of the about page at 390 px; error, success and disabled form states (no form was submitted); whether a second open FAQ row closes the first on desktop (on a phone several stayed open).
- Contrast ratios in 10.1 are computed from the colour values read from the DOM, not from the rendered pixels.

## 12. Screenshot index (`screens/`)

- Phone, home: `m-home-00` to `m-home-03` (first paint with modal and cookie bar, popup closed with bar, clean hero); scroll steps `m-home-s00-y0` to `m-home-s17-y11341` (one per 700 px, 18 shots); menu: `m-menu-00-closed`, `m-menu-01` (120 ms), `m-menu-02` (340 ms), `m-menu-03-open-settled`, `m-menu-04-closing`, `m-menu-05-closed-again`, `m-menu-06` and `m-menu-07` (services sheet); `m-faqs-accordion-open`.
- Phone, inner: `m-svc-*` (10), `m-about-*` (12), `m-contact-*` (5), `m-faqs-*` (3), `m-blog-*` (3).
- 1440, home: `d-home-00-first-paint`, `d-home-01-popup-closed-cookie-open`, `d-home-s00` to `d-home-s12` (13 shots, 800 px steps); `d-header-top`; hovers `d-hover-cta-card-0/1`, `d-hover-cta-section-0/1`, `d-hover-footer-link-0/1`, `d-hover-signup-0/1`; focus `d-focus-tab9`, `d-input-idle`, `d-input-focus`; mega menu `d-megamenu-0` to `d-megamenu-3`; route `d-route-after`; `d-faq-open`.
- 1440, inner: `d-svc-*` (14), `d-about-*` (12), `d-contact-*` (4), `d-faqs-*` (4), `d-blog-*` (4).
- Raw measurements: `raw/*.json`; consolidated numbers: `lab-rest-measurements.json`.
