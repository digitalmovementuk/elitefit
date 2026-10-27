> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# TOKENS-RAW: The Performance Lab design tokens, measured

Version: v3.0 — 2026-10-02 · lane: lab-tokens · internal evidence only, never part of the site. Source: https://theperformancelab.ca/ (live, public pages, read only). Machine-readable twin: `tokens-raw.json`. Font licence route: `FONT-LICENCE-FINDING.md`.

Method: Playwright, WebKit iPhone 390x844 dsf2 (home, services/testing, about) and Chromium 1440x900 (home, services/testing, about, contact, faqs, blog), computed styles of 3,470 element records, CSSOM read of the one stylesheet, hover/active/keyboard-focus states on Chromium, viewport sweep at 320, 390, 768, 1024, 1440, 1920. Promo pop-up closed with its own close button; the cookie banner was never accepted (hidden locally). No font file, image or code saved; only my own screenshots (`screens/`) and JSON.

## 0. What the site is, in numbers
- Next.js, Tailwind v4 with arbitrary rem values, CSS variables. Three woff2 fonts loaded (display 400, display 500, mono 400): 128,980 bytes, same origin, `font-display: swap`.
- **No border radius, no shadow, no gradient fills on UI, one accent colour.** Everything is rectangles, 1 px lines, #171717 / #fff / #f2f2f2 and one red, #ff350d.
- **Desktop type is scaled by the viewport:** from 768 px up, `html { font-size: clamp(6px, (100vw - scrollbar) / 120, 20px) }`, so 1rem = vw/120 (12 px at 1440, 16 px at 1920). Below 768 px the root is 16 px fixed and every size is a fixed rem. There is no tablet design: at 768 px mono labels are 5.6 px.

## 1. Palette

### 1.1 CSS custom properties found in `:root`
| Variable | Value |
|---|---|
| `--color-core-black` | #171717 |
| `--color-base-white` | #f2f2f2 |
| `--color-base-white-01` | #e0e0e0 |
| `--color-base-white-02` | #bbbbbb |
| `--color-neutral-grey` | #979797 |
| `--color-neutral-grey-01` | #727272 |
| `--color-neutral-grey-03` | #292929 |
| `--color-performance-red` | #ff350d |
| `--background` | var(--color-core-black) |
| `--foreground` | var(--color-base-white) |
| `--header-fg` | set per section by script: #f2f2f2 over dark, #171717 over light (measured both) |

Literal colours in class names: `#ffffff` bg-white / white cards and light sections; `#e0e0e0` ghost display text, 1px card borders, hairlines on white; `#bbb` labels and legal text, input placeholder; `#4e4e4e` 1px border of partner chips on dark; `#242424` body copy on white (service pages); `#e8e8e8` small tile (6 uses); `#a2a2a2` white at 60 percent over #171717; `#c2c2c2` one label; `#f5f4ed` text of the cookie banner (warm off-white, only there).

### 1.2 Colours clustered by role (counts from the captures; "el" = element records)
| Role | Value | Variable | Where it is used | Contrast / area |
|---|---|---|---|---|
| page-bg-dark | `#171717` | --color-core-black | body background, hero base under photo, dark sections (services/parallax, team, closing), pop-up and cookie banner | about half of page height (68.7 M px2 vs 68.8 M px2 white at 1440) |
| page-bg-light | `#ffffff` | literal bg-white | light sections, cards (article.bg-white), footer shell, header menu panel on phone | 68.8 M px2 at 1440; the single biggest surface |
| raised-surface-light-on-dark / button fill | `#f2f2f2` | --color-base-white | secondary buttons, idle chips, arrow tiles, footer inner blocks, newsletter wrapper | 8.8 M px2 |
| sunken / input surface on dark | `#292929` | --color-neutral-grey-03 | contact form inputs, textarea, idle toggle chips (contact), pop-up close tile | 0.17 M px2 (11 elements) |
| text-primary-on-light | `#171717` | --color-core-black | 501 text elements at 1440 / 248 at 390 | 17.93:1 on #fff, 16.01:1 on #f2f2f2 |
| text-primary-on-dark | `#f2f2f2` | --color-base-white | 654 / 161 text elements; pure #ffffff in 2 places | 16.01:1 on #171717 |
| text-secondary (dark) | `#bbbbbb` | --color-base-white-02 | labels, sub copy on dark, 102 / 87 elements | 9.34:1 on #171717 |
| text-secondary (light) | `#bbbbbb` | --color-base-white-02 | mono labels and body-small on white and #f2f2f2 (52 + 48 elements at 1440) | 1.92:1 on #fff, 1.71:1 on #f2f2f2: FAILS AA |
| text-tertiary | `#979797 and #727272` | --color-neutral-grey / -01 | hint lines ("Didn't find what you need", counts), 20 + 10 elements | #979797 on #fff 2.92:1 FAIL; #727272 on #f2f2f2 4.30:1 (just under 4.5); #727272 on #171717 3.73:1 FAIL |
| text-ghost-decorative | `#e0e0e0` | --color-base-white-01 | oversized background words (THE SMART WAY, Sign up to updates), pointer-events none, select-none | 1.32:1 on #fff, 1.18:1 on #f2f2f2 (decorative by intent) |
| text-on-dark-dimmed | `#a2a2a2` | white at 60 percent | About-page card captions | 7.02:1 on #171717 |
| line-on-light | `#e0e0e0` | --color-base-white-01 | 1px solid border of article cards (30 el at 1440); 1px hairlines | n/a |
| line-on-light-strong | `#171717` | core-black | 1px divider spans (17 el at 1440): FAQ and list rules | n/a |
| line-on-dark | `#4e4e4e` | literal | 1px border, partner-name chips (40 el) | n/a |
| line-on-dark-alpha | `rgba(255,255,255,0.278) 1px; rgba(242,242,242,0.149) 1px rule` | literal | transparent buttons on dark; one divider | n/a |
| accent (single) | `#ff350d` | --color-performance-red | primary button fills, hover colour of every link and nav item, progress fills, plus icons, highlight word, pop-up CTA; 119 elements but tiny area (0.31 M px2) | #f2f2f2 on #ff350d = 3.25:1 (large text only); #171717 on #ff350d = 4.92:1 (AA) |
| focus | `none designed: browser default ring (Chromium: 1px auto, rgb(0,95,204))` | - | all interactive elements | UA dependent |
| ok / live / wa | `not present on the Lab site` | - | - | - |

### 1.3 Light / dark flips (section rhythm)
- **home desktop 1440 (top to bottom):** hero: full-bleed photo over #171717 (0-900) → white section 989-2306 (#fff, ink #171717) → white section 2306-3974 → dark block 3974-6884 (#171717, ink #f2f2f2, parallax photos with fade gradients) → white section 6884-8096 → dark section 8096-9266 (#171717) → white footer 9266-10352 (#fff shell with #f2f2f2 blocks)
- **home phone 390:** hero photo over #171717 (0-812) → white 894-1986 → white 1986-2290 (photo band) → white 2290-4831 → dark 4831-8457 → white 8457-10063 → dark 10063-11036 → white footer 11036-12185
- **rule:** Hard flips between #fff and #171717, no gradients between light and dark except the 8 percent fade into #171717 at the top of photo bands. Header colour var flips with the section underneath (--header-fg).

### 1.4 Image overlays, scrims and filters (computed)
| Where | Computed CSS | In plain words |
|---|---|---|
| hero desktop 1440 (img object-cover, z -10) | `linear-gradient(to bottom, transparent 0%, transparent 50%, oklab(0 0 0 / 0.6) 100%)` | black at 60 percent, bottom half only |
| hero phone 390 (812 px tall) | `linear-gradient(180deg, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0) 24.86%, rgba(26,26,26,0) 60.16%, rgba(26,26,26,0.7) 75.43%)` | #1a1a1a at 80 percent over the top quarter (header and headline), clear in the middle, 70 percent from three quarters down |
| About / service photo bands | `linear-gradient(rgba(23,23,23,0.8) 0%, rgba(23,23,23,0.2) 30%, rgba(23,23,23,0.2) 85%, rgba(23,23,23,0.8) 100%) (services phone: 56.41% and 84.95%)` | #171717 80 percent at both ends, 20 percent between |
| parallax photo section top (home) | `linear-gradient(rgba(23,23,23,0.4) 0%, rgba(23,23,23,0.2) 46.195%, rgba(23,23,23,0.2) 81.542%, rgb(23,23,23) 100%)` | fades the photo into the dark section below |
| parallax strip edges | `linear-gradient(to right, #171717 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,0) 95%, #171717 100%) and linear-gradient(#171717 0%, rgba(23,23,23,0) 8%)` | soft side and top edges |
| flat tint over two images | `rgba(23,23,23,0.4)` | bg-[rgba(23,23,23,0.4)] |
| menu / modal backdrop | `rgba(23,23,23,0.2) + backdrop-filter blur(8px) (keyframes modalBackdropIn 0 -> 0.2)` | light dim, 8 px blur |
| blog thumbnail fallbacks | `linear-gradient(120deg, #ff5a3a 0%, #c91a0d 45%, #2a0707 100%); linear-gradient(160deg, #2a3656 0%, #0e1424 70%)` | placeholder art, not photography |

Filters and blends: No filter, no mix-blend-mode on any image or text (only backdrop blur 8px on the menu backdrop and CSS masks for arrow / plus / compass icons). Motion blur, grain and colour grade are baked into the photo files.

## 2. Type

### 2.1 Families
| CSS name | Identified as | Weights used | Font files (hosting) | Fallback face | Role |
|---|---|---|---|---|---|
| `display` | KH Teka (Regular KHTeka-Regular, Medium KHTeka-Medium) | 400, 500 | `a16bbcd0dc2d6990-s.p.woff2` (400, 48,658 B), `0045887623a1951d-s.p.woff2` (500, 49,117 B); declared, never requested: `cc669a5c90fc719e-s.p.woff2` (700); same origin theperformancelab.ca/_next/static/media/ (next/font/local, preloaded), woff2, font-display swap, unicode-range U+0-10FFFF (no subset ranges) | display Fallback = local(Arial), size-adjust 99.36%, ascent-override 95.61%, descent-override 25.16%, line-gap-override 0% | display + body + headings + footer links |
| `mono` | Aeonik Mono Regular (AeonikMono-Regular) | 400 | `5eebc1e8c29817d2-s.p.woff2` (400, 31,205 B); same origin, as above | mono Fallback = local(Arial), size-adjust 135.87%, ascent-override 68.45%, descent-override 15.46% | every UI label, nav item, button, input, readout |
| `diatype` | not identifiable (never loaded). The CSS name suggests ABC Diatype; unverified and irrelevant | - | never requested; same origin | - | declared only, never requested or used on any page measured |

`document.fonts` / CSSOM @font-face: `display` 400 / 500 / 700, `mono` 400, `diatype` 400, each with a `Fallback` face on `local("Arial")`; all `src` are `/_next/static/media/<hash>-s.p.woff2` (same origin, preloaded), `font-display: swap`, no `unicode-range` (reported as U+0-10FFFF). The names were read from the loaded fonts through the browser's platform-font API (no file downloaded or saved). Licence route: `FONT-LICENCE-FINDING.md`.

Body defaults: `font-family: var(--font-display), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif`; `font-feature-settings: "ss01", "cv01" (inherited by every element including mono)`; `-webkit-font-smoothing: antialiased`; `overscroll-behavior-y: none`; `color: #f2f2f2`; `background: #171717`.

Utility classes found in the stylesheet (the whole type system is six classes plus arbitrary sizes):
- `.type-h1`: display, 11.25rem, 500, lh 0.8, ls -0.04em
- `.type-h2`: display, 5rem, 500, lh 1, ls -0.04em
- `.type-body-large`: display, 2rem, 500, lh 1, ls -0.04em
- `.type-body-small`: display, 1rem, 400, lh 1.4, ls -0.01em
- `.type-mono`: mono, 0.875rem, 400, lh 1.26, ls -0.02em, uppercase
- `.type-mono-tag`: mono, 0.875rem, 400, lh 1.2, ls -0.02em, uppercase

### 2.2 Every role, in px at each viewport width (measured = computed style; calc = rem × root)
Letter-spacing in em, line-height as ratio. Root font size at 320 / 390 / 768 / 1024 / 1440 / 1920 = 16 / 16 / 6.4 / 8.53 / 12 / 16 px.

| Role | Family · weight · case | ls (em) | lh | 320 | 390 | 768 | 1024 | 1440 | 1920 |
|---|---|---|---|---|---|---|---|---|---|
| display-hero-h1 (home h1, .type-h1) | display (KH Teka Medium) · 500 · uppercase | -0.04 | 0.8 | 52 | 52 | 72 | 96 | 135 | 180 |
| display-service-h1 (/services/testing h1) | display · 500 · uppercase | -0.04 | 1.0 | 56 | 56 | 72 | 96 | 135 | 180 |
| h2-section (.type-h2) | display · 500 · none (sentence case) | -0.04 | 1.0 | 36 | 36 | 32 | 42.67 | 60 | 80 |
| body-large / lead (.type-body-large) | display · 500 · none | -0.04 | 1.0 | 24 | 24 | 12.8 | 17.07 | 24 | 32 |
| h3 / card title | display · 500 · none | -0.04 | 1.0 | 28 | 28 | 20.8* | 27.73* | 39 | 52* |
| body-small (.type-body-small) | display · 400 · none | -0.01 | 1.3 (mobile 18.2/14) / 1.4 (desktop) | 14 | 14 | 6.4 | 8.53 | 12 | 16 |
| mono-label (.type-mono-tag) | mono (Aeonik Mono Regular) · 400 · uppercase | -0.02 | 1.2 | 14 | 14 | 5.6 | 7.47 | 10.5 | 14 |
| mono-ui nav / readout (.type-mono) | mono · 400 · uppercase | -0.02 | 1.26 | 14 | 14 | 5.6 | 7.47 | 10.5 | 14 |
| mono-button label (mobile 12 px) | mono · 400 · uppercase | -0.02 | 1.2 | 12 | 12 | 5.6* | 7.47* | 10.5* | 14* |
| mono-small (chips, filters, legal) | mono / display 400 · 400 · uppercase | -0.02 | 1.26 | 12 | 12 | 4.8* | 6.4* | 9 | 12* |
| stat-number (e.g. 22, 10, 8) | display · 500 · uppercase (none) | -0.04 | 0.8 | 180 | 180 | 72 | 96 | 135 | 180 |
| display-staggered line (THE SMART / WAY / TO) | display · 500 · uppercase | -0.04 | 0.8 | 74 | 74 | 72 | 96 | 135 | 180 |
| services-title (list rows) | display · 500 · uppercase | -0.04 | 0.8 | 120 | 120 | 48 | 64 | 90 | 120 |
| giant-marquee (FEATURED) | display · 500 · uppercase | -0.04 | 0.8 | 90 | 90 | 109.6 | 146.13 | 205.5 | 274 |
| giant-ghost (Sign up to updates) | display · 500 · uppercase | -0.04 | 0.8 | - | - | 83.2 | 110.93 | 156 | 208 |
| footer-wordmark part | display · 500 · uppercase | -0.04 | 1.0 | - | - | 62 | 83 | 116 | 155 |
| section-giant-h2 (FREQUENTLY ASKED QUESTIONS, THE PROBLEM WE SOLVE) | display · 500 · uppercase | -0.04 | 0.8 | 82 | 82 | 128* | 170.67* | 240 | 320* |
| footer-link (.footer-link) | display · 500 · none | -0.04 | 1.0 | 20 | 20 | 12.8 | 17.07 | 24 | 32 |
| faq-question | display · 500 · none | -0.04 | 1.0 | 16 | 16 | 8 | 10.67 | 15 | 20 |
| partner-name (NHL, MLB, NBA) | display · 400 · none | -0.04 | 1.0 | 24 | 24 | 12.8 | 17.07 | 24 | 32 |

`*` = calculated from the rem value and the root size (element hidden at that width or not sampled). Sources and rem values per role: display-hero-h1: mobile h1 .uppercase 3.25rem; desktop .type-h1 11.25rem; display-service-h1: mobile 3.5rem lh 1; desktop 11.25rem lh 0.8; h2-section: .type-h2 5rem; mobile 2.25rem; body-large / lead: .type-body-large 2rem desktop; 1.5rem mobile; h3 / card title: mobile 1.75rem; desktop 3.25rem; body-small: .type-body-small 1rem lh 1.4 desktop; hero sub mobile 0.875rem lh 1.3; mono-label: .type-mono-tag 0.875rem; mono-ui nav / readout: .type-mono 0.875rem lh 1.26; mono-button label: mobile buttons 0.75rem; desktop = .type-mono; mono-small: desktop 0.75rem (9 px at 1440); stat-number: 11.25rem both; display-staggered line: mobile 4.625rem; desktop 11.25rem; services-title: 7.5rem both; giant-marquee: mobile 5.625rem; desktop 17.125rem; giant-ghost: desktop only, 13rem; footer-wordmark part: desktop only, ~9.667rem; section-giant-h2: mobile 5.125rem; desktop 20rem; footer-link: mobile 1.25rem underline; desktop 2rem; faq-question: mobile 1rem; desktop 1.25rem; partner-name: 2rem desktop; 1.5rem mobile.

### 2.3 Fluid formulas inferred
- **phone below 768:** fixed rem on a 16 px root: hero h1 52 px (3.25rem), h2 36 px, stats 180 px, services titles 120 px; identical at 320 and 390 (so the 11 px left crop at 390 becomes a larger crop at 320)
- **desktop 768 and up:** px = rem x (viewport width / 120): hero h1 = 11.25rem = 9.375vw (72 / 96 / 135 / 180 px at 768 / 1024 / 1440 / 1920), h2 = 5rem = 4.167vw, body-large = 2rem = 1.667vw, mono = 0.875rem = 0.729vw, capped at 225 / 100 / 40 / 17.5 px when the root hits 20 px (2400 px)
- **step:** at 768 px every size re-bases: hero h1 52 -> 72 px, but h2 36 -> 32, body-large 24 -> 12.8, body-small 14 -> 6.4, mono 14 -> 5.6 px, then grows linearly; 768 to ~1000 px is smaller than the phone for everything except the display sizes
- As CSS for the hero headline: `font-size: 52px;` then `@media (min-width:768px){ font-size: min(9.375vw, 225px); }`. The same pattern applies to every desktop size: `vw = rem_value / 1.2` (hero 11.25rem = 9.375vw, h2 5rem = 4.167vw, body-large 2rem = 1.667vw, mono 0.875rem = 0.729vw).
- Line-height for every giant display (hero, numbers, services titles, marquee) is 0.8; h2, body-large, h3 are 1.0; body-small 1.3-1.4; mono 1.2 / 1.26.
- Oversized headline overflow at 390: h1 box x = -11, width 386, right edge 375: the three lines start 11 px left of the viewport; fits the width on the right at 390 and overflows right at 320 (52 px fixed). docW equals viewport (no horizontal scroll) at all six widths.
- Oversized headline at 1440: h1 is one absolute box, left 0, bottom 0 of the 900 px hero, 939 x 324 px (3 lines of 135 px at line-height 0.8 = 108 px); letters start at x of about 4 px and the last baseline sits about 7 px above the viewport bottom: tight, not cropped. The crop happens on the phone only (see heroOverflowAt390).

### 2.4 OpenType features
Global `font-feature-settings: "ss01", "cv01"` on `body`, inherited by display and mono. Width test of a glyph-rich string (a g y J & @ Q 7 1 0 ...) at 40 px with each feature set: {"display500": {"normal": 667.05, "\"ss01\"": 665.38, "\"cv01\"": 667.05, "\"ss01\",\"cv01\"": 665.38, "\"ss02\"": 667.05, "\"ss03\"": 672.45, "\"cv02\"": 667.05, "\"cv03\"": 667.05, "\"tnum\"": 802.28, "\"zero\"": 667.05}, "display400": {"normal": 669.41, "\"ss01\"": 667.97, "\"cv01\"": 669.41, "\"ss01\",\"cv01\"": 667.97, "\"ss02\"": 669.41, "\"ss03\"": 674.33, "\"cv02\"": 669.41, "\"cv03\"": 669.41, "\"tnum\"": 803.33, "\"zero\"": 669.41}, "mono400": {"normal": 1016.81, "\"ss01\"": 1016.81, "\"cv01\"": 1016.81, "\"ss01\",\"cv01\"": 1016.81, "\"ss02\"": 1016.81, "\"ss03\"": 1016.81, "\"cv02\"": 1016.81, "\"cv03\"": 1016.81, "\"tnum\"": 1016.81, "\"zero\"": 1016.81}}
No `font-variant-numeric` and no `tnum` set anywhere (computed `normal` on every element). Weights used: 400 and 500 only; 700 is declared and never requested.

## 3. Shape and lines
- **Radius:** 0 everywhere. Zero of the 3,470 measured element records (2 profiles, 9 captures: home, services/testing, about, contact, faqs, blog at 1440; home, services/testing, about at 390; the cookie banner and the promo pop-up, read before closing, also have none) has a non-zero border-radius; no circles, no pills.
- **Shadows:** none. No box-shadow or text-shadow on any measured element.
- **Borders:** 1px #e0e0e0 (article cards on white (30 el)); 1px #4e4e4e (partner chips on dark (40 el), padding 0.625rem); 1px rgba(255,255,255,0.278) (transparent controls on dark).
- **Dividers:** 1px span / element #171717 (FAQ and list rules on white (17 el at 1440)); 1px #e0e0e0 (light hairlines (5 el)); 1px rgba(242,242,242,0.149) (one rule on dark, margin-top 1rem / 1.5rem).
- **Focus ring:** outline-style auto, width 1px, colour rgb(0,95,204), offset 1px on :focus-visible (browser default ring), mouse click gives no ring. The site ships no custom focus style; Elite Fit must define one.
- **Icons:** single-colour SVG masks (arrow, plus, compass logo) recoloured by background-color; plus rotates 1 turn on open (keyframes plus-spin-cw / ccw).

### 3.1 Overlays (cookie banner and promo pop-up, read before closing)
- **cookieBanner:** position: fixed bottom card (phone: full-width bottom sheet; desktop 1440: 315 px wide card at x=1080); bg: dark, about #171717 (judged from the screenshot, container background not computed); title: display 500 15 px (1.25rem), uppercase, -0.04em, #f5f4ed; body: display 400 12 px, -0.01em, #f5f4ed, link underlined; buttons: two equal buttons 154 x 55 px at 1440 (52 px high on phone): Learn more = #f2f2f2 with #171717, Accept = #ff350d with #f2f2f2, mono 0.875rem uppercase; note: appears after about 3 s; "Accept" consents to all cookies, "Learn more" leaves the page
- **promoPopup:** position: fixed inset-0 z-65 centred, padding 1rem; backdrop rgba(25,25,25,0.2) (colour-mix of #171717 at 20 percent); panel: dark (about #171717, judged from the screenshot), square, logo mark top left, close tile 3.25rem square #292929 top right (aria-label "Close pop-up"); heading: display 500, 2.5rem (30 px at 1440, 40 px phone at 16 px root), -0.04em, one word in #ff350d; lead: display 500 1.25rem #f2f2f2; body: display 400 1rem #727272 on #171717 (3.73:1, fails AA); cta: two-tile CTA (label tile + arrow tile) in #ff350d; note: appears about 3 to 5 s after load: it covers the hero on a phone

## 4. Buttons and links (Chromium 1440, hover / mouse-down / keyboard focus read from computed styles)

### cta-two-tile (primary)
- **markup:** <a class="group/cta inline-flex items-stretch gap-[0.25rem] overflow-hidden"> label tile + square arrow tile
- **label:** {"height": "4.25rem (51 px at 1440; 52 px on phone = 3.25rem)", "padding-x": "1.25rem", "bg": "#ff350d", "color": "#f2f2f2", "font": "mono 0.875rem desktop / 12 px phone, uppercase, -0.02em", "radius": 0}
- **arrowTile:** 4.25rem square, same red
- **gap:** 0.25rem (3 px at 1440, 4 px phone)
- **dark-section-variant:** identical tiles; surrounding link colour #171717 on light sections, #f2f2f2 on dark
- **hover:** label tile translateX(4.5rem) (54 px at 1440) over 0.45s cubic-bezier(0.4,0,0.2,1); colour stays; on mouse-down the label letters re-scramble through random glyphs (seen in the pressed state, not at hover rest)
- **active:** same as hover (glyph scramble visible)
- **focus:** UA ring on the link
- **disabled:** not present
- **examples:** ["UNLOCK YOUR POTENTIAL", "START YOUR JOURNEY", "LEARN MORE ABOUT US", "SEND A MESSAGE", "EXPLORE ... DETAILS"]

### header-pill-button (secondary on dark)
- **size:** 150 x 51 px at 1440
- **padding-x:** 1.25rem (15 px)
- **bg:** #f2f2f2
- **color:** #171717
- **hover:** bg -> #ff350d, text -> #f2f2f2 (0.6s cubic-bezier(0.22,1,0.36,1) on height, padding, bg, colour, gap)

### submit-red (SIGN UP)
- **size:** 74 x 51 px at 1440; 83 x 52 phone
- **bg:** #ff350d
- **color:** #f2f2f2
- **font:** mono 0.875rem
- **hover:** filter brightness(1.1), 0.15s cubic-bezier(0.4,0,0.2,1)

### icon-tile (arrow, carousel prev/next)
- **size:** 51 x 51 px at 1440 (4.25rem); 52 phone
- **bg:** #f2f2f2
- **color:** #171717
- **hover:** filter brightness(0.95) 0.15s
- **disabled:** Reset filters icon tile: opacity 0.5, cursor default

### chip / toggle (blog filters, contact reason)
- **size:** height 2.25rem phone / 3.25rem desktop (39 px at 1440), padding-x 0.5rem phone / 1rem desktop, padding-y 0.75rem phone / 1.25rem desktop
- **active:** bg #ff350d, text #f2f2f2 (blog) or bg #f2f2f2, text #171717 (contact form on dark)
- **idle:** bg #f2f2f2, text #171717 (blog on white) or bg #292929, text #f2f2f2 (contact on dark)
- **hover:** no visual change measured
- **transition:** colours 0.15s cubic-bezier(0.4,0,0.2,1)
- **font:** mono 0.75rem (9 px at 1440, 12 px phone)

### nav text link (mono)
- **font:** mono 0.875rem uppercase
- **color:** inherits --header-fg (#f2f2f2 over dark, #171717 over light)
- **hover:** colour -> #ff350d, 0.15s cubic-bezier(0.4,0,0.2,1)
- **underline:** none

### footer-link (large)
- **font:** display 500 2rem desktop / 1.25rem phone underlined on phone
- **hover:** no change measured

### legal text link
- **font:** display 400 9 px at 1440 uppercase / mono 12 px phone
- **underline:** underline always (text-decoration-line underline), hover colour -> #ff350d 0.15s

### text link on dark (VIEW FULL REVIEW)
- **font:** mono tag, underline from-font
- **hover:** opacity 1 -> 0.7, 0.15s

### form field
- **bg:** #ffffff (newsletter on #f2f2f2) or #292929 (contact on dark)
- **height:** 4.25rem desktop / 3.25rem phone
- **padding-x:** 1.25rem desktop / 0.75rem phone
- **font:** mono 0.875rem (desktop) / 0.75rem (phone), uppercase
- **placeholder:** #bbb on white
- **border:** none (borders 0 / transparent)
- **radius:** 0
- **focus:** UA ring only

### Transitions and easings in use (all pages)
| Properties | Duration | Easing | Count |
|---|---|---|---|
| colour, bg, border, fill (utility transition-colors) | 0.15s | `cubic-bezier(0.4,0,0.2,1)` | 76 |
| colour, bg, border (duration-200) | 0.2s | `cubic-bezier(0.4,0,0.2,1)` | 36 |
| transform (labels, tiles) | 0.45s | `cubic-bezier(0.4,0,0.2,1)` | 78 |
| transform | 0.5s | `cubic-bezier(0.22,1,0.36,1)` | 36 |
| height, padding, bg, colour, gap (header button) | 0.6s | `cubic-bezier(0.22,1,0.36,1)` | 2 |
| transform, opacity, top | 0.5s | `cubic-bezier(0.16,1,0.3,1) (--ease-out-expo)` | 9 |
| opacity | 0.5-0.7s | `cubic-bezier(0,0,0.2,1) / ease` | 31 |

CSS easing tokens: `--ease-out-expo` = `cubic-bezier(0.16,1,0.3,1)`; `--ease-in-out-quart` = `cubic-bezier(0.76,0,0.24,1)`; `tailwind default` = `cubic-bezier(0.4,0,0.2,1), 0.15s`. Keyframes defined: fillRing, fillLogo, compassTurn, compassIdleSpin, teamCopyFadeIn, teamLineIn, modalSlideInRight, modalSlideInBottom, modalBackdropIn, modalBackdropOut, modalSlideOutRight, modalSlideOutBottom, plus-spin-cw, plus-spin-ccw.

Link underline behaviour: body and legal text links are always underlined (`underline`, hover colour → #ff350d); nav and CTA links have no underline and change colour or move a tile; footer large links underline on phone only.

## 5. Spacing and grid
- **Root font size:** below 768 px: 16px fixed; 768 px and up: html { font-size: clamp(6px, calc((100vw - var(--scrollbar-w, 17px)) / 120), 20px) } = vw/120, i.e. 1rem = 0.8333vw, 12px at 1440, 16px at 1920, 20px cap at 2400+; scrollbar var: --scrollbar-w measured 0px; a real classic scrollbar lowers the root by (scrollbar/120); consequence: 768 px renders at 6.4 px per rem: mono labels 5.6 px, body-small 6.4 px (unreadable); the Lab does not design a tablet layout
- **rem values used in class names (Tailwind arbitrary):** {"gap": [0.25, 0.5, 1], "padding": [0.5, 0.625, 0.75, 1, 1.25, 1.5], "insets / offsets": [1.75, 3.5], "control heights": {"icon tile, button, input (desktop)": 4.25, "button, input (phone)": 3.25, "chip desktop": 3.25, "chip phone": 2.25, "small box": 2}, "content width phone": 26.875}
- **Inferred scale:** quarter-rem steps: 0.25 / 0.5 / 0.75 / 1 / 1.25 / 1.5 / 1.75 / 2 ... 4.25 (control height); 0.625 appears for chip padding; no 8-pt grid assumption: values are multiples of 0.25rem
- **Containers:** phone: sections mx-auto max-w-[26.875rem] (430 px), body copy left edge x=16 px (1rem gutter) at 390, header and footer inner edge x=28 px (1.75rem); desktop 1440: full-bleed, inner gutter 1.75rem (21 px); text blocks sit at absolute offsets (x=390 and x=844 on the home page); max-width: no fixed content max-width on desktop: everything scales with vw up to 2400 px
- **Section padding:** phone: section padding 40px 0 68px (2.5rem / 4.25rem); header offset 56 px (3.5rem); footer padding 16 px; desktop 1440: section padding 48px 0 108px (4rem / 9rem at 12 px rem); footer padding 21 px; header height about 63 px; service page hero top padding 63 px
- **Columns:** No CSS grid page structure: grids are 24-px icon centring boxes only. Layout is absolute positioning and flex; the phone layout is single column (separate md:hidden DOM), desktop has 2 text columns starting at x=390 and x=844 at 1440.
- **Gaps:** flex gap 0.25rem (CTA tiles, icon + label), 0.5rem (footer stack on phone), 1rem (footer on desktop)
- The sibling lane (lab-rest) owns layout, cards, header, imagery, motion and copy form; the numbers above are only what the tokens need.

## 6. Readability check (WCAG AA: 4.5:1 normal text, 3:1 large = 24 px or 18.66 px bold)

### 6.1 Text on solid backgrounds (computed, composited)
| Profile | Text | Background | Ratio | Smallest px | Largest px | Smallest mono px | Examples | AA |
|---|---|---|---|---|---|---|---|---|
| cr1440 | `#f2f2f2` | `#ff350d` | 3.25 | 9 | 10.5 | 9.0 | U, N | FAIL at these sizes (3:1 applies only from 24 px) |
| cr1440 | `#171717` | `#ffffff` | 17.93 | 10.5 | 240 | 10.5 | TESTING, TRAINING | pass |
| cr1440 | `#f2f2f2` | `#171717` | 16.01 | 10.5 | 205.5 | 10.5 | H, O | pass |
| cr1440 | `#171717` | `#f2f2f2` | 16.01 | 9 | 116 | 9.0 | B, O | pass |
| cr1440 | `#e0e0e0` | `#ffffff` | 1.32 | 39 | 135 | - | THE SMART, WAY | FAIL |
| cr1440 | `#bbbbbb` | `#ffffff` | 1.92 | 10.5 | 10.5 | 10.5 | Everything your body, WHAT IS THE PERFORMA | FAIL |
| cr1440 | `#bbbbbb` | `#f2f2f2` | 1.71 | 9 | 10.5 | 10.5 | By SUBMITTING you ag, Services | FAIL |
| cr1440 | `#979797` | `#ffffff` | 2.92 | 10.5 | 12 | 10.5 | (Specific tests vary, OUR APPROACH | FAIL |
| cr1440 | `#f2f2f2` | `#292929` | 13.0 | 10.5 | 10.5 | 10.5 | Consultation, Testing | pass |
| cr1440 | `#e0e0e0` | `#f2f2f2` | 1.18 | 156 | 156 | - | Sign up to updates, Sign up to updates | FAIL |
| cr1440 | `#727272` | `#f2f2f2` | 4.3 | 10.5 | 10.5 | 10.5 | Stay ahead of the cu, Stay ahead of the cu | FAIL at these sizes (3:1 applies only from 24 px) |
| cr1440 | `#242424` | `#ffffff` | 15.52 | 24 | 60 | - | Test a single servic, Using 3D motion capt | pass |
| cr1440 | `#727272` | `#171717` | 3.73 | 10.5 | 10.5 | 10.5 | THE PERFORMANCE LAB , ABOUT US IN NUMBERS | FAIL at these sizes (3:1 applies only from 24 px) |
| cr1440 | `#a2a2a2` | `#171717` | 7.02 | 10.5 | 10.5 | 10.5 | 3D Motion Capture, Performance Data Ana | pass |
| cr1440 | `#bbbbbb` | `#171717` | 9.34 | 12 | 24 | - | The Performance Lab , From there, we build | pass |
| cr1440 | `#ffffff` | `#171717` | 17.93 | 10.5 | 39 | 10.5 | Research-grade 3D fo, Force Plate Testing | pass |
| cr1440 | `#c2c2c2` | `#171717` | 10.06 | 10.5 | 10.5 | 10.5 | WHAT IS INCLUDED | pass |
| cr1440 | `#e0e0e0` | `#171717` | 13.58 | 10.5 | 10.5 | 10.5 | TECHNOLOGY & APPROAC | pass |
| wk390 | `#171717` | `#ffffff` | 17.93 | 12 | 120 | 12.0 | TESTING, TRAINING | pass |
| wk390 | `#e0e0e0` | `#ffffff` | 1.32 | 28 | 74 | - | THE SMART, WAY | FAIL |
| wk390 | `#f2f2f2` | `#171717` | 16.01 | 12 | 180 | 12.0 | SERVICES, MENU | pass |
| wk390 | `#bbbbbb` | `#ffffff` | 1.92 | 12 | 14 | 12.0 | Everything your body, HELP | FAIL |
| wk390 | `#f2f2f2` | `#ff350d` | 3.25 | 12 | 14 | 12.0 | BOOK A CONSULTATION, BOOK A CONSULTATION | FAIL at these sizes (3:1 applies only from 24 px) |
| wk390 | `#171717` | `#f2f2f2` | 16.01 | 12 | 24 | 12.0 | MEET THE PERFORMANCE, Training insights, p | pass |
| wk390 | `#bbbbbb` | `#f2f2f2` | 1.71 | 12 | 14 | 12.0 | Stay ahead of the cu, By SUBMITTING you ag | FAIL |
| wk390 | `#727272` | `#171717` | 3.73 | 14 | 14 | 14.0 | THE PERFORMANCE LAB , ABOUT US IN NUMBERS | FAIL at these sizes (3:1 applies only from 24 px) |
| wk390 | `#a2a2a2` | `#171717` | 7.02 | 12 | 12 | 12.0 | 3D Motion Capture, Performance Data Ana | pass |
| wk390 | `#979797` | `#ffffff` | 2.92 | 14 | 14 | 14.0 | (Specific tests vary, Didn’t find what you | FAIL |
| wk390 | `#242424` | `#ffffff` | 15.52 | 14 | 16 | - | Test a single servic, The result is a clea | pass |
| wk390 | `#e0e0e0` | `#171717` | 13.58 | 14 | 14 | 14.0 | WHAT IS INCLUDED, TECHNOLOGY & APPROAC | pass |
| wk390 | `#ffffff` | `#171717` | 17.93 | 12 | 28 | 12.0 | Research-grade 3D fo, Force Plate Testing | pass |
| wk390 | `#979797` | `#171717` | 6.14 | 14 | 14 | - | The Performance Lab  | pass |

Rows where text colour equals its recorded background (#171717 on #171717 and #f2f2f2 on #ffffff in team/hover letter stacks) are measurement artefacts of stacked animation layers and are omitted; the single-letter spans that duplicate the label for the hover roll are the cause.

### 6.2 Hero text over the photo (text hidden, pixels behind each text box sampled; c = contrast ratio of text colour to the pixels)
**wk390**
| Element | px / weight | Text colour | Mean bg | c min | c 5th pct | c median | AA at this size |
|---|---|---|---|---|---|---|---|
| span “SERVICES” | 14px / 400 | rgb(242,242,242) | rgb(36,27,23) | 11.61 | 13.39 | 15.38 | pass (needs 4.5) |
| button “MENU” | 14px / 400 | rgb(242,242,242) | rgb(40,21,20) | 14.41 | 15.01 | 15.58 | pass (needs 4.5) |
| h1 “UNLOCK NEXT LEVEL PERFORMANCE” | 52px / 500 | rgb(242,242,242) | rgb(49,29,24) | 2.52 | 5.62 | 15.18 | pass (needs 3) |
| p “The Performance Lab specializes in elite” | 14px / 400 | rgb(151,151,151) | rgb(44,41,37) | 2.35 | 2.73 | 5.06 | check (needs 4.5) |
| span “whether you’re a professional athlete or” | 14px / 400 | rgb(242,242,242) | rgb(58,54,47) | 5.89 | 6.51 | 11.47 | pass (needs 4.5) |
| span “UNLOCK YOUR POTENTIAL” | 12px / 400 | rgb(242,242,242) | rgb(255,53,13) | 3.25 | 3.25 | 3.25 | check (needs 4.5) |

**cr1440**
| Element | px / weight | Text colour | Mean bg | c min | c 5th pct | c median | AA at this size |
|---|---|---|---|---|---|---|---|
| div “UNLOCK NEXT LEVEL PERFORMANCE” | 135px / 500 | rgb(242,242,242) | rgb(61,54,42) | 2.14 | 2.82 | 12.68 | check (needs 3) |
| span “The Performance Lab specializes in elite” | 12px / 400 | rgb(187,187,187) | rgb(76,64,50) | 2.76 | 4 | 5.19 | check (needs 4.5) |
| span “whether you’re a professional athlete or” | 12px / 400 | rgb(242,242,242) | rgb(79,71,61) | 3.28 | 4.19 | 8.61 | check (needs 4.5) |
| letters “mono UI letter spans over photo (31 spans)” | 10.5px / 400 | rgb(242,242,242) | rgb(24,21,14) | 5.6 | 6.87 | 16.42 | pass (needs 4.5) |
| letters “mono UI letter spans on #f2f2f2 button (17 spans)” | 10.5px / 400 | rgb(23,23,23) | rgb(242,242,242) | 16.01 | 16.01 | 16.01 | pass (needs 4.5) |
| letters “mono UI letter spans on red (19 spans)” | 10.5px / 400 | rgb(242,242,242) | rgb(255,53,13) | 3.25 | 3.25 | 3.25 | check (needs 4.5) |

### 6.3 Smallest sizes and findings
- **Smallest mono on the 390 profile: 12 px** (126 uses: buttons, CTA labels, legal and footer lines); nav and labels are 14 px (67 uses). At 1440 the mono is 10.5 px (889 uses) and 9 px for chips and filters; it scales with the viewport (14 px and 12 px at 1920) and is 5.6 px at 768.
- **Smallest sans:** 14 px on the phone (body-small, hero sub copy, partner names are 24 px); 12 px (body-small) and 9 px (legal) at 1440; 6.4 px at 768.
- Primary text pairs (#171717 on #fff / #f2f2f2, #f2f2f2 on #171717) pass with 16 to 18:1.
- All secondary labels on light surfaces (#bbb on #fff 1.92:1, on #f2f2f2 1.71:1) and tertiary greys (#979797 2.92:1, #727272 on #171717 3.73:1) FAIL WCAG AA; they are set in 9 to 14 px mono / 12 to 14 px sans.
- Primary red buttons: #f2f2f2 on #ff350d is 3.25:1, passes only for large text (24 px or bold 18.66 px); the labels are 9 to 14 px mono and therefore fail AA. #171717 on #ff350d = 4.92:1 passes.
- Decorative ghost type #e0e0e0 on #fff / #f2f2f2 is 1.18 to 1.32:1 by design (pointer-events none, select-none).
- On a phone the smallest text is 12 px mono (buttons). On desktop at 1440 it is 9 to 10.5 px: below our 15 to 16 px body rule; at 768 px it is 5.6 px.

## 7. Contract tokens: suggested source values (D1 decides; deviations to be noted in DECISIONS.md)
| Contract token | Lab value (measured) | Note for Elite Fit |
|---|---|---|
| `--bg / --bg-inverse` | #171717 dark, #ffffff light | two surface worlds, hard flips |
| `--bg-raised` | #f2f2f2 (on dark: buttons, tiles) |  |
| `--bg-sunken` | #292929 (inputs and chips on dark) |  |
| `--fg / --fg-inverse` | #171717 on light, #f2f2f2 on dark | AA, 16 to 18:1 |
| `--fg-muted` | #bbbbbb on dark (9.3:1); on light #727272 (4.3:1) is the nearest that almost passes | the Lab uses #bbb on white at 1.9:1: do not copy, pick #6a6a6a or darker for light surfaces |
| `--fg-faint` | #979797 / #727272 | decorative only on light; never for information |
| `--line / --line-strong` | #e0e0e0 / #171717 (1 px); on dark #4e4e4e |  |
| `--accent` | #ff350d | text on it: #171717 (4.92:1), not #f2f2f2 (3.25:1) |
| `--brand (Elite Fit)` | not from the Lab | taupe mark from the club logo |
| `--focus` | Lab: none (browser default) | define an explicit 2 px ring |
| `--overlay` | rgba(23,23,23,0.2) + blur 8 px (menu); scrims in 1.4 |  |
| `--font-display / --font-body` | KH Teka 500 headlines, 400 body (commercial) | closest open match in FONT-LICENCE-FINDING.md |
| `--font-mono` | Aeonik Mono 400 (commercial) | closest open match in FONT-LICENCE-FINDING.md |
| `--tr-display / --tr-body / --tr-label` | -0.04em / -0.01em / -0.02em |  |
| `--lh-tight / --lh-snug / --lh-body` | 0.8 / 1.0 / 1.3 to 1.4 |  |
| `--r-0..3, --r-pill` | 0 everywhere | pill not present |
| `--bw` | 1px |  |
| `--ease-out / --ease-inout / --ease-press` | cubic-bezier(0.16,1,0.3,1) / cubic-bezier(0.76,0,0.24,1) / cubic-bezier(0.4,0,0.2,1) |  |
| `--dur-press / --dur-ui / --dur-reveal` | 0.15 s / 0.45-0.6 s / 0.5-0.7 s |  |
| `--header-h` | 56 px phone (3.5rem), about 63 px at 1440 |  |
| `--gutter` | 16 px phone body copy, 28 px header and footer inner, 21 px desktop |  |
| `--maxw` | phone 430 px (26.875rem); none on desktop |  |

## Change log
- v3.0 — 2026-10-02: created by the lab-tokens lane from live measurements.
