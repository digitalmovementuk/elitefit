> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# DESIGN-SYSTEM-PERFLAB: the measured Performance Lab system, translated for Elite Fit (homepage v3)

Version: v3.0 — 2026-10-02 · owner: design-system lane D1 (Fable 5.1) · internal document for Raoul and the lanes, not client-facing.
Files this document governs: `assets/css/tokens.css`, `assets/css/base.css`, `assets/css/components.css`, `assets/fonts/*` (+ `LICENSES.md`), `component-sheet.html` (served at http://127.0.0.1:8201/component-sheet.html).
Evidence it rests on (internal, never part of the site): `research/lab/system/tokens/TOKENS-RAW.md` + `tokens-raw.json` (3,470 element records, two profiles), `research/lab/system/tokens/FONT-LICENCE-FINDING.md`, `research/lab/hero/` (capture notes, filmstrips, HERO-STUDY.md), `research/lab/system/rest/` (COPY-FORM-LAB.md, 138 screens), and the side-by-side font render `research/lab/system/tokens/screens/d1-font-compare.png`.

## 0. The system in one paragraph

The reference is a two-colour world: #171717 and white, flipped hard between sections, with #f2f2f2 and #292929 as the only secondary surfaces and one hot accent (#ff350d) used on tiny areas. Everything is a rectangle with 1 px lines; there is no radius, no shadow, no gradient on UI. Type is one grotesque at two weights (400, 500) and one monospace at one weight: huge capitals at line-height 0.8 and tracking -0.04 em for display, sentence-case statements for section titles, small mono capitals at -0.02 em for every label, button and readout. Spacing moves in quarter-rem steps; controls are 52 px tall; from 768 px every size scales with the viewport (1 rem = vw/120). Motion is sparse and quick: 150 ms colour changes, 450 ms tile travel on an ease-out-expo, a 600 ms header condense, a 360 ms sheet slide; the hero itself does not move. Elite Fit keeps all of that and changes four things: the text white is warm, the contrast failures are fixed, the two commercial fonts become open twins, and the reading sizes are floored.

## 1. Palette

### 1.1 Dark world (page default), token by token

| Token | Elite Fit value | Reference value | Pair it is judged on | Ratio | Status |
|---|---|---|---|---|---|
| `--bg` | `#171717` | #171717 | - | - | adopted |
| `--bg-raised` | `#292929` | #292929 (inputs, idle chips, close tile) | - | - | adopted; used for cards and bands |
| `--bg-sunken` | `#202020` | none | - | - | added: media wells, half a step |
| `--bg-inverse` | `#ffffff` | #ffffff | - | - | adopted (light world page) |
| `--bg-inverse-raised` (new) | `#f2f2f2` | #f2f2f2 | - | - | adopted (secondary buttons, light tiles) |
| `--fg` | `#f3f1ec` | #f2f2f2 | on #171717 | 15.9:1 | adapted: warm white = the hero's ink |
| `--fg-muted` | `#bbbbbb` | #bbbbbb | on #171717 / #292929 | 9.3 / 7.6:1 | adopted |
| `--fg-faint` | `#979797` | #727272 | on #171717 / #292929 | 6.1 / 5.0:1 | FIXED: reference 3.7:1 fails AA |
| `--fg-inverse` | `#171717` | #171717 | on #fff / #f2f2f2 | 17.9 / 16.0:1 | adopted |
| `--line` | `#4e4e4e` | #4e4e4e | on #171717 | 2.2:1 | adopted (decorative hairline) |
| `--line-strong` | `#727272` | rgba(255,255,255,.278) | on #171717 | 3.7:1 | adapted: a control edge needs 3:1 |
| `--line-faint` (new) | `rgba(243,241,236,.15)` | rgba(242,242,242,.149) | - | - | adopted |
| `--brand` | `#a48f82` | not on the reference | on #171717 | 5.8:1 | Elite Fit's taupe mark (hero lane traced it from the club's PNG) |
| `--accent` | `#ff350d` | #ff350d | as UI on #171717 | 4.9:1 | adopted |
| `--accent-ink` | `#171717` | #f2f2f2 | on #ff350d | 4.9:1 | FIXED: reference 3.25:1 fails AA at 9-14 px |
| `--focus` | `#f3f1ec` | none (browser ring) | on #171717 | 15.9:1 | added: 2 px ring + 2 px gap |
| `--ok` | `#7fbf8f` | none | on #171717 | 8.3:1 | added (open / on time) |
| `--live` | `#ff350d` | none | - | - | = the accent, only while something is happening |
| `--wa` | `#25d366` | none | on #171717 | 9.0:1 | WhatsApp brand green |
| `--overlay` | `rgba(23,23,23,.6)` + `--overlay-blur 8px` | rgba(23,23,23,.2) + blur 8 px | - | - | adapted: 20 % is invisible over a dark page |
| `--scrim-top` (new) | the measured phone hero gradient | same | - | - | adopted, for any photo band |

### 1.2 Light world (`.theme-light` on a section, sheet or card)

| Token | Value | Judged on | Ratio | Note |
|---|---|---|---|---|
| `--bg` / `--bg-raised` | `#ffffff` / `#f2f2f2` | - | - | the reference's two light surfaces |
| `--fg` | `#171717` | on #fff / #f2f2f2 | 17.9 / 16.0:1 | adopted |
| `--fg-muted` | `#5c5c5c` | on #fff / #f2f2f2 | 6.7 / 6.0:1 | FIXED: reference #bbbbbb at 1.9 / 1.7:1 |
| `--fg-faint` | `#6a6a6a` | on #fff / #f2f2f2 | 5.4 / 4.8:1 | FIXED: reference #979797 at 2.9:1 |
| `--line` / `--line-strong` | `#e0e0e0` / `#171717` | - | - | adopted (card border, list rule) |
| `--focus` | `#171717` | on #fff | 17.9:1 | added |

Ghost type (#e0e0e0 on white, 1.3:1) exists on the reference as decoration only; Elite Fit has no token for it and does not use it in Phase 1. If a later section wants it, it is `aria-hidden`, `pointer-events: none`, and never carries information.

### 1.3 Section rhythm
Hard flips between the dark and the light world, no gradients between them (the reference alternates roughly half and half by page height). Phase 1 of Elite Fit stays in the dark world; the light world is ready (`.theme-light`) for Phase 2 sections such as Visit or the footer, and is shown working on the component sheet.

## 2. Type

### 2.1 Families and the font decision

| Role | Reference (commercial) | Elite Fit (open, self-hosted) | Why this one |
|---|---|---|---|
| display + body | KH Teka 400 / 500 | **Hanken Grotesk** variable (used at 400 and 500), 34.7 KB Latin woff2 | The token lane's metric ranking put Figtree first (+1.3 % width) and Hanken second (-2.3 %). The side-by-side render against the reference hero (`d1-font-compare.png`) decides it the other way: Hanken has the oval O and C, the straight-legged R, the flat apexes and the neutral body of a rigid grotesque, which is the reference's character; Figtree's circular rounds read friendlier and softer. The brand split puts warmth in the content, not in the letterforms, so the closer construction wins over the closer metric. Hanken's numerals are tabular by default (clocks, prices line up). |
| UI mono | Aeonik Mono 400 | **Fragment Mono** 400, 25.2 KB Latin woff2 | Same Swiss skeleton (Helvetica-derived mono), advance 0.618 em against 0.62 (every label keeps its length within 0.5 %), plain zero, closed apertures. Chivo Mono is 3 % narrower, squarer and more open; it would read "tech" where the reference reads "Swiss". |

Fallback faces: `Hanken Fallback` = local Arial with `size-adjust 100.41 %`, `ascent-override 99.6 %`, `descent-override 30.2 %` (from measured widths and the file's real vertical metrics), `Fragment Fallback` = local Menlo with `size-adjust 102.65 %`, `ascent 92.5 %`, `descent 24.4 %`. The swap therefore moves nothing measurable (CLS 0 target). `font-display: swap`; only the display file is preloaded (the preload line is in `_build/requests/d1-hero-font-preload.md` for the hero lane, which owns the head partial). First-view font transfer 60 KB (budget 120 KB).

OpenType: the reference sets `ss01, cv01` globally (in KH Teka: slightly narrower alternates); Hanken Grotesk has no stylistic sets, so nothing is set. Figures: Hanken tabular by default; Fragment is monospaced. `tnum` is therefore not needed; `font-variant-numeric: tabular-nums` is still written on readouts for the fallback faces.

### 2.2 The scale

Phone (below 760 px) fixed; desktop (760 px and up) follows the measured formula px = rem × vw/120 with floors. "Ref" = the reference's computed size at 390 / 1440 px.

| Token | Phone | Desktop | at 1440 | Ref 390 / 1440 | Weight · lh · tracking | Note |
|---|---|---|---|---|---|---|
| `--fs-h1` | 52 px | clamp(72px, 9.375vw, 225px) | 135 | 52 / 135 | 500 · .8 · -.04em · caps | the hero sets its own vw size on top (hero.css) |
| `--fs-giant` (new) | 120 px | clamp(72px, 9.375vw, 225px) | 135 | 120 / 90-180 | same | stat numbers, service-row titles |
| `--fs-h2` | 36 px | clamp(36px, 4.167vw, 100px) | 60 | 36 / 60 | 500 · 1.0 (sections use .8) · -.04em | section statements, sentence case |
| `--fs-h3` | 24 px | clamp(24px, 2.708vw, 52px) | 39 | 28 / 39 | 500 · 1.0 · -.04em | ADAPTED on phones (28 → 24): the live class card must stay inside the first viewport |
| `--fs-lead` | 20 px | clamp(20px, 1.667vw, 32px) | 24 | 24 / 24 | 500 · 1.0 · -.04em | ADAPTED on phones (24 → 20): two-sentence leads, first-viewport rule |
| `--fs-body` | 16 px | clamp(16px, 1.111vw, 20px) | 16 | 14 / 12 | 400 · 1.4 · -.01em | FLOORED: house rule 15-16 px+ (reference 12 px at 1440, 6.4 px at 768) |
| `--fs-small` | 14 px | clamp(14px, .972vw, 18px) | 14 | 14 / 12 | 400 · 1.4 · -.01em | floored |
| `--fs-label` | 13 px | clamp(12px, .9vw, 15px) | 13 | 12-14 / 10.5 | mono 400 · 1.2 · -.02em · caps | one size between the reference's button (12) and nav (14) mono |
| `--fs-micro` | 12 px | clamp(12px, .833vw, 14px) | 12 | 12 / 9 | mono 400 · 1.2-1.3 · -.02em · caps | the floor: never below 12 |

Line heights: `--lh-tight .8` (giant display), `--lh-snug 1` (h2, h3, lead), `--lh-body 1.4`. Tracking: `--tr-display -.04em`, `--tr-body -.01em`, `--tr-label -.02em`. Weights: `--fw-display 500`, `--fw-body 400`, `--fw-strong 500`, `--fw-mono 400`; nothing on the page is bold.

What changed on the live page when the values landed: the hero headline went from 800 to 500 (calm, narrower, the reference's register), every mono label lost its wide +0.08 em tracking and now sits tight at -0.02 em in Fragment Mono, section titles and leads tightened to line-height 1.0, body is 16 px / 1.4 everywhere.

## 3. Space, grid, shape

- Steps: `--s-1 … --s-10` = 4, 8, 12, 16, 24, 32, 48, 64, 96, 144 px (quarter-rem multiples, as measured; 0.625 rem chip padding is written as 10 px in `.tag`).
- Gutter: 16 px phone (measured body gutter), 32 px from 760, 48 px from 1200 (the reference frames at 21 px but sets its text blocks far inside; our content width stops at `--maxw 1360px`, the reference has no max width and scales to 2400 px).
- Section padding `--section-y`: 48 / 72 / 96 px (reference 40 top and 68 bottom on phones, 48 / 108 at 1440; one symmetric value each).
- Header 56 px phone, 64 desktop (measured 56 / 63). Controls `--control-h 52px` (measured 3.25 rem phone, 4.25 rem = 51 px at 1440), chips `--control-h-sm 36px`, tap floor `--tap 44px`.
- Shape: `--r-0 … --r-3 = 0` (zero radius on all 3,470 measured records); `--r-pill 999px` kept only for state dots, switch knobs, radio marks, the loading spinner and the WhatsApp disc. `--bw 1px`. No shadow anywhere; the two inset "bars" (selected tab, live row) are box-shadow insets used as 3 px fills, not shadows.
- Icons: single-colour, 1.5 px strokes, 16 px, drawn inline; arrows are glyph-like strokes in their own square tile (the reference's arrow tile), no chevrons in buttons.

## 4. Buttons, chips, fields, rows (components.css)

| Component | Reference measurement | Elite Fit |
|---|---|---|
| Primary | 52 px accent tile + 52 px square arrow tile, 4 px gap, mono caps, hover brightness 1.1, press moves the label | `.btn--primary` (+ `.btn-split` for the two tiles); ink #171717 (AA); hover brightness 1.08; press scale .97; arrow nudges 3 px |
| Secondary | #f2f2f2 tile, dark text, hover flips to accent | `.btn--secondary`, same |
| Ghost | transparent, 1 px white at 28 % | `.btn--ghost`, 1 px `--line-strong` (3.7:1), hover border to `--fg` |
| Text link | mono caps, underline from-font, hover opacity .7 | `.btn--text`, same |
| Icon tile | 52 px square #f2f2f2, hover brightness .95, disabled opacity .5 | `.btn--icon`, same |
| Loading | not present | `.is-loading` / `aria-busy`: label transparent, 14 px square-ish spinner (rotate only) |
| Chip | 36 px, filled, idle #292929, on = light on dark or accent, mono 12 px | `.chip`, `.chip--accent`, `.chip--outline`; 44 px tap zone via ::before |
| Tag | 1 px #4e4e4e border, 10 px padding | `.tag`, `--live`, `--ok`, `--brand`, `--strong` |
| Field | 52 px, no border, #292929 on dark / white on light, mono caps placeholder, UA focus | `.field__control`: 16 px body text (no iOS zoom), mono caps placeholder, hover edge `--line-strong`, focus edge `--fg`; `.field__msg` mono; `.is-error` accent edge |
| Check / radio / switch | not present | 20 px square / round marks, accent fill; switch 44 × 26 |
| Row | 1 px rules, three-cell [category · name · 000] | `.row--data`, `.row--3`, `.row--link` (+ arrow) |
| Tabs | not present (megamenu only) | `.tabs`: hairline grid, selected = `--bg-raised` + 3 px accent bar |
| Readout | label above value, value biggest | `.readout`, `--lg` (countdown), `--stat` (display numbers), states live/open/loading |
| Sheet | backdrop 20 % + blur 8 px, panel slides 360 ms out-expo, square close tile | `.sheet`: 60 % backdrop + blur, bottom sheet / centred dialog, `--dur-ui` 450 ms out-expo, 52 px close tile |
| Skeleton | not present | `.skeleton` opacity pulse only |

Focus (base.css): `:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; box-shadow: 0 0 0 2px var(--bg) }`. The ring sits outside the control with a 2 px gap in the page colour, so it is visible on the accent button too; 15.9:1 on dark, 17.9:1 in the light world. Mouse clicks show no ring (the reference ships no focus style at all).

## 5. Motion level (from the hero capture and the rest measurement)

- The reference hero is still: no animation on load, no parallax, 1:1 scroll (document.getAnimations() empty). Its motion lives in the photograph (baked pan blur) and in the type scale.
- What moves: colour and background 150 ms (`cubic-bezier(.4,0,.2,1)`), tile and label travel 450 ms (same curve) or 500 ms (`.22,1,.36,1`), header condense 600 ms (`.22,1,.36,1`: 63 → 33 px, white, hairline), menu and modal 360 ms slide on `--ease-out-expo` (`.16,1,.3,1`) with a 20 % + 8 px blur backdrop, plus icons rotate one turn on open, opacity reveals 500-700 ms.
- Tokens: `--ease-out` out-expo, `--ease-inout` in-out-quart (`.76,0,.24,1`), `--ease-press` default; `--dur-press 150`, `--dur-ui 450`, `--dur-reveal 600`, `--dur-slow 900` ms.
- Not adopted (brief + house rules): Lenis smooth-scroll hijacking, any overlay in the first 3 s. Added by the brief: v2.1's behaviours (arrival, countdown, price morph, stagger) in the motion lane's own engine, transform and opacity only; reduced motion collapses every duration to 0 (base.css) and keeps layout and information.

## 6. Imagery treatment

- One still per hero, full bleed, cover, subject right of centre; the treatment (directional pan blur, light grain, warm low-key grade: about 42 % of pixels under luma 40, mean luma about 65) is baked into the file. No CSS filter or blend on any image.
- Scrims: phone hero 80 % dark at the top fading to clear by 25 %, clear to 60 %, 70 % from 75 % (`--scrim-top`); desktop 60 % black on the bottom half only; photo bands 80 % at both ends, 20 % between; parallax strips fade into #171717 at the edges (5 % sides, 8 % top).
- Elite Fit: the hero lane bakes the blur into the club's own poster and loop (no filter), adds a 14 % static grain layer; section clips are the club's own footage in 4:5 tiles with `--bg-sunken` behind them; stills where no footage exists. Nothing of the reference's imagery is used anywhere.

## 7. Hero

The hero is specified and built by the hero lane: `research/lab/hero/HERO-STUDY.md` (behaviour spec in our own words), `assets/css/hero.css`, `partials/10-hero.html`, decisions in `DECISIONS.md` (hero lines). Tokens feed it: `--fw-display 500`, `--tr-display -.04em`, `--lh-tight .8`, `--fg` = its ink, `--accent` + `--accent-ink` for the split button, `--fs-label` / `--fs-micro` for the readouts. The headline size stays the hero's own vw formula (it crops at the viewport edge by design).

## 8. Adopted exactly, adapted, and why

Adopted exactly: #171717 / #ffffff / #f2f2f2 / #292929 / #bbbbbb / #4e4e4e / #e0e0e0 / #ff350d; weights 400 + 500 and the single mono weight; -0.04 / -0.01 / -0.02 em; line-heights .8 / 1.0 / 1.3-1.4; 52 px controls, 36 px chips, 4 px tile gap, 1 px lines, radius 0, no shadows; quarter-rem spacing; the vw/120 curve for display sizes; the easings and durations; the two-tile CTA, the secondary tile that flips to accent, the label-above-value readout, the three-cell row, the hard section flips, the sheet with a blurred backdrop.

Adapted, each with its reason:
1. AA: ink on the accent is #171717 (4.9:1) instead of #f2f2f2 (3.25:1); faint grey #979797 instead of #727272 on dark; #5c5c5c / #6a6a6a instead of #bbbbbb / #979797 on light; control edges #727272 (3:1 non-text). A focus ring exists.
2. Warmth: the text white is the hero's #f3f1ec (one white across hero and page); the brand taupe #a48f82 appears as the eyebrow rule, index numerals and the temperature bar, never as a fill; the accent is reserved for primary buttons, live/now states and the selected state.
3. Open fonts: Hanken Grotesk and Fragment Mono replace KH Teka and Aeonik Mono (section 2.1, section 9).
4. Reading sizes: body 16 px and mono 12 px are floors on every viewport; display sizes keep the reference curve. Phone lead 20 and h3 24 (reference 24 / 28) for the first-viewport rule.
5. Surfaces: cards and bands use #292929 (the reference's only secondary dark surface) with #4e4e4e hairlines; a #202020 well was added for media.
6. Overlay 60 % instead of 20 % (dark page). Section padding one symmetric value per breakpoint.
7. `--r-pill` survives for the five round things listed in section 3.

## 9. Font licence finding and the route for Raoul (nothing bought)

From `research/lab/system/tokens/FONT-LICENCE-FINDING.md` (public foundry pages read on 2026-10-02, no cart opened):

| Family | Foundry | Licence class | Indicative web licence |
|---|---|---|---|
| KH Teka (Regular + Medium) | KH Type (Kurppa Hosk), khtype.com | commercial; price by the licensee's employee band; one domain, unlimited pageviews; trial fonts for pitching only | 304 € (0-3 employees) to 1,896 € (0-250) for the two styles; whole family 760 to 4,740 €; self-hosting terms to be confirmed with hello@khtype.com |
| Aeonik Mono Regular | CoType Foundry, cotypefoundry.com | commercial; web licence tier set in the cart | from £50 (Latin, first buy step); web tier not public |

Route: the prototype and, if Raoul wants, production run on the open pair at zero licence cost; this also keeps "not affiliated" clean (the same paid faces would make Elite Fit look closer to a third party's brand). An upgrade to the originals is Raoul's decision: it needs the club's headcount band for KH Type and a quote check with both foundries (self-hosting, VAT, whether two styles add up). No purchase, trial download or cart action happened in this project.

## 10. Extensions (no reference equivalent, built in its language)

| Extension | Where | Form |
|---|---|---|
| Timetable row with now / next / past | `.row--time` | time in mono, class name in display, coach small; now = 3 px accent bar on a raised band, past = faint |
| Temperature readout row | `.row--temp` | room name, mono range with a small unit, a hairline bar marking the range on 0-100 (decorative) |
| Bowl option chip | `.chip--pick` | 44 px, square mark that fills in accent, price in mono at the right |
| Price card with tier + length selector | `.card--price` + `.seg` | three-cell head, segmented selector with one sliding indicator, display amount with mono currency and period, included list, one split button |
| Receipt / summary row | `.row--receipt`, `.row--total` | label left, mono value right, total in display with a strong rule |
| Nav sheet link | `.sheet-nav__link` | taupe index, giant uppercase display word, diagonal arrow; the reference's menu is a giant word list |
| Live readouts (HUD) | `.readout` states | the reference hero has no data; Elite Fit's hero shows time, open state, next class, classes today |
| Light-world theme switch | `.theme-light` | the reference flips sections in markup; ours flips tokens, so every component works in both |

## 11. Readability check (phone, 390 px, WebKit)

| What | Setting | Verdict |
|---|---|---|
| Cropped oversized capitals (hero and `.crop .giant` on the sheet) | Hanken 500, 21-22 vw, lh .8, -.04 em, both edges cut by a sliver | readable at a glance: the reference loses about a third of the first stem per line; ours loses less than a quarter of the first and last letter at 390 px; the full words stay in the h1 for screen readers |
| Section titles 36 px / .8-1.0 | sentence case | two lines maximum in Phase 1 titles; descenders never collide at lh 1.0 |
| Lead 20 px / 1.0, -.04 em | muted #bbbbbb on #171717, 9.3:1 | tight but even; every lead in Phase 1 is one or two sentences |
| Body 16 px / 1.4 | #f3f1ec, 15.9:1 | pass |
| Mono 13 px label, -.02 em, caps | #f3f1ec or #bbbbbb | pass; tabular digits line up in clocks and prices |
| Mono 12 px micro, -.02 em, caps | #bbbbbb at 9.3:1 | pass at 12 px; nothing is set below 12 px anywhere (reference: 9-10.5 px at 1440, 5.6 px at 768) |
| Countdown 32-44 px mono | #f3f1ec | pass |
| Accent button label 13 px mono | #171717 on #ff350d, 4.9:1 | pass (the reference's own fails) |

Measured on the live page after the tokens landed (11:38): no console error, no horizontal overflow at 390 or 1440, the hero still ends at 60 svh on the phone and the Classes heading plus the complete now/next card sit inside the first 844 px.

## 12. Provenance

Nothing of The Performance Lab is in the site or the repo: no image, no video, no icon, no font file, no code, no sentence. The reference was read on its public pages only (measurement lanes); screenshots and JSON live under `research/lab/` as internal evidence. The side-by-side font render (`d1-font-compare.png`) shows the reference's headline words next to the candidate faces for the comparison only and stays under `research/lab/`. The fonts here are Fontsource builds of two SIL OFL families, unmodified, with the licence text in `assets/fonts/LICENSES.md`. Every colour, size and duration in `tokens.css` comes from `TOKENS-RAW.md`, or is marked "added" / "adapted" above.

## 13. Open items

- Hero lane: add the preload line (`_build/requests/d1-hero-font-preload.md`), re-tune the headline crop for Hanken 500 (narrower than the 800 system face it was tuned on), and let `--hero-ink` read `var(--fg)`.
- Orchestrator: `theme-color` meta `#0b0b0a` → `#171717`.
- Lanes: a later switch from lane classes to `.btn / .chip / .row / .card / .field / .tabs / .readout / .sheet` is a class rename; nothing forces it in Phase 1. CSS gzip total is 34.7 KB of the 40 KB budget; D1's three files are 13.1 KB of that (comments are a third of tokens.css and can be stripped at freeze).
- Raoul: whether the originals (KH Teka, Aeonik Mono) should be licensed later (section 9); the open pair is the recommendation.

## Change log
- v3.0 — 2026-10-02: created by the design-system lane D1 after the token and font measurement lanes; tokens, base, components, fonts and the component sheet shipped the same day.
