> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# FONT-LICENCE-FINDING: The Performance Lab typefaces and the open route for Elite Fit

Version: v3.0 — 2026-10-02 · lane: lab-tokens · internal evidence for Raoul and the design-system lane. Nothing was bought, added to a cart, downloaded or saved; prices are read from the foundries' public pages on 2026-10-02 (incl. the KH Type configurator, read only). No Firecrawl used.

## 1. Result in one table

| Lab CSS family | Identified as | Where used | Licence class | Foundry | Web licence, indicative |
|---|---|---|---|---|---|
| `display` (400, 500; 700 declared, never loaded) | **KH Teka** (KHTeka-Regular, KHTeka-Medium) | headlines, body, footer links, numbers | **commercial** | KH Type (Kurppa Hosk), https://khtype.com | Regular + Medium, one domain, unlimited pageviews: about **304 € (up to 3 employees) to 1,896 € (up to 250)**; full family (10 styles) 760 to 4,740 € |
| `mono` (400) | **Aeonik Mono Regular** (AeonikMono-Regular) | every UI label, nav item, button, input | **commercial** | CoType Foundry, https://cotypefoundry.com/our-fonts/aeonik-mono/ (designer Mark Bloom) | page shows **£50.00** at its first buy step (Latin only); web-licence tiers are not public and are set in the cart, which was not opened |
| `diatype` (400) | declared in the CSS, never requested, no element uses it | none | not applicable | the name suggests ABC Diatype (Dinamo): unverified, irrelevant | not needed |

**Both families the Lab actually shows are commercial.** There is no open-licence original to self-host. For the prototype use the closest open matches below (SIL OFL 1.1, self-hosted, recorded in `assets/fonts/LICENSES.md`); buying the originals is Raoul's decision and nothing was bought.

How the names were found: the Lab's own `@font-face` rules give only generic names (`display`, `mono`, `diatype`, files `a16bbcd0dc2d6990-s.p.woff2`, `0045887623a1951d-s.p.woff2`, `cc669a5c90fc719e-s.p.woff2` (700, never requested), `5eebc1e8c29817d2-s.p.woff2`, `7b5f54f550a847ca-s.p.woff2` (diatype, never requested), all same-origin from `/_next/static/media/`). The real names were read from the loaded fonts with the browser's platform-font API (`CSS.getPlatformFontsForNode`: familyName "KH Teka" / "KH Teka Medium" / "Aeonik Mono", PostScript names KHTeka-Regular, KHTeka-Medium, AeonikMono-Regular) and are consistent with the foundries' specimen pages. No font file was downloaded or saved. The Lab sets `font-feature-settings: "ss01", "cv01"` on the body: in KH Teka `ss01` changes glyph widths slightly (test string 667.05 -> 665.38 px at 40 px) and `cv01` has no effect; `ss03` and `tnum` exist (tnum widens the digits: 802 px), the Lab does not use them. In Aeonik Mono neither set changes advance widths (it is monospaced, 0.62 em); whether they swap alternates (a, f, y, J, Q, 7, &) was not verified.

## 2. KH Teka (display and body): commercial

- **Foundry:** KH Type, the type foundry of the design studio Kurppa Hosk (Sweden). https://khtype.com/typeface/kh-teka/ · licences page https://khtype.com/licenses/ · contact hello@khtype.com (for unlimited-user licences).
- **Design:** "a modern grotesque with a rigid and mechanical approach", designers Kurppa Hosk, Jakob Ekelund, Wille Larsson, produced 2018 to 2022; 5 weights (Light, Regular, Medium, Bold, Black) with italics = 10 styles; features include no-tail a, straight y, alternate 1, squared numbers, tabular figures (tnum measured), case-sensitive forms.
- **Licence types needed for a website:** **Web licence** = one web domain including subdomains, unlimited pageviews ("no limitations in regards to web traffic"); more domains need more licences. Desktop licence (print/static/moving files for one brand) and App/Game licences exist; the Lab-style site needs only Web (plus Desktop only if the club wants the fonts in social graphics).
- **Price driver:** company size in employees is the only variable; "if purchasing for a client, the client's company size should be reflected". The club's headcount band is not known to this lane: **one question for Raoul**.
- **Self-hosting:** not addressed on the licences page; the delivery format of the web files and the right to self-host are not stated there (ask hello@khtype.com before any purchase).
- **Trial fonts** are free for pitching only (designer/agency use); as soon as work with the fonts is published in any context a licence is required. So the trial may not go on a published Elite Fit page; the prototype stays on the open match.

**Public configurator prices (EUR, read on 2026-10-02, per style as shown, VAT treatment not stated):**

| Employees | Web, one style (Regular) | Web, Regular + Medium (2 x, assumed additive) | Web, complete family (10 styles) | Desktop + Web, one style |
|---|---|---|---|---|
| 0–3 | 152 € | 304 € | 760 € | 195 € |
| 0–10 | 216 € | 432 € | 1,080 € | 276 € |
| 0–25 | 274 € | 548 € | 1,370 € | 355 € |
| 0–50 | 354 € | 708 € | 1,770 € | 467 € |
| 0–100 | 466 € | 932 € | 2,330 € | 634 € |
| 0–150 | 668 € | 1,336 € | 3,340 € | 917 € |
| 0–250 | 948 € | 1,896 € | 4,740 € | 1,290 € |

Regular and Medium cost the same per style (152 € for 0–3 employees); Light to Black were not each read. The "2 x" column is arithmetic, not a cart total: nothing was added to a cart. Desktop-only, one style, 0–3 employees: 108 €.

## 3. Aeonik Mono (monospace UI): commercial

- **Foundry:** CoType Foundry, https://cotypefoundry.com/our-fonts/aeonik-mono/ · licensing overview https://cotypefoundry.com/licensing/ (Desktop, Web, App, Trial; each with a PDF EULA).
- **Design:** Mark Bloom; version 3.003 (March 2025); eight weights Air, Thin, Light, Regular, Medium, SemiBold, Bold, Black; formats OTF, TTF, WOFF, WOFF2, variable; every glyph on a **620-unit** advance (0.62 em, matches the measured 0.62); Swiss grotesque with closed apertures and long serifs on i, j, l, I; boxed and circled numerals, alternates for a, f, y, J, Q, 7, &; Latin script, or "Pro" with Greek and Cyrillic (chosen at checkout).
- **Price read:** the buy dialog opens at "Select language support" with **Order total £50.00** for the Latin-only choice. Licence type (Web needs its own), pageview or user tier and the weights are chosen in the cart, which was not opened (no Add to Cart, nothing bought). So £50 is a floor for one starting configuration, not a web-licence quote. Only the Regular weight is needed for the Lab look.
- **Web licence:** the licensing page lists no pageview tiers or price formula; ask CoType or read the cart (Raoul to decide).

## 4. Closest open-licence matches

Method: the Lab's fonts were measured on the live page (canvas `measureText` at 100 px, fonts as the page loads them, nothing saved); 17 open display families and 16 open mono families from Google Fonts were loaded into a blank page and measured the same way. Score = summed relative error: cap height x2, x-height x2, width of the hero line in capitals x3, width of a lower-case sentence x3, M, n, i, zero widths, ascent and descent; lower is closer. Reference KH Teka 500: cap height 0.7 em, x-height 0.504 em, ascent 0.95, descent 0.25, capital hero line 17.494 em wide, lower-case sentence 27.203 em, M 0.852, n 0.571, digits proportional (0.396 to 0.629 em).

### 4.1 Display and body (replaces KH Teka 500 and 400)

| Rank | Family | Licence | Weights | Score (cap+x) | Capital line | Lower-case line | Cap / x-height | Ascent / descent | Digits |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Figtree | OFL-1.1 | variable (see 4.3) | 0.192 | 17.722 em (+1.3%) | 27.596 em (+1.4%) | 0.7003 / 0.5 | 0.95 / 0.25 | proportional |
| 2 | Albert Sans | OFL-1.1 | variable (see 4.3) | 0.464 | 18.033 em (+3.1%) | 28.282 em (+4.0%) | 0.7 / 0.5 | 0.95 / 0.25 | proportional |
| 3 | Hanken Grotesk | OFL-1.1 | variable (see 4.3) | 0.472 | 17.095 em (-2.3%) | 27.714 em (+1.9%) | 0.697 / 0.493 | 1 / 0.3 | tabular by default |
| 4 | Funnel Sans | OFL-1.1 | variable (see 4.3) | 0.482 | 17.362 em (-0.8%) | 27.825 em (+2.3%) | 0.675 / 0.5 | 1 / 0.25 | tabular by default |
| 5 | Host Grotesk | OFL-1.1 | variable (see 4.3) | 0.498 | 17.233 em (-1.5%) | 28.258 em (+3.9%) | 0.7 / 0.496 | 1.01 / 0.32 | tabular by default |
| 6 | Inter Tight | OFL-1.1 | variable (see 4.3) | 0.57 | 17.034 em (-2.6%) | 27.016 em (-0.7%) | 0.7275 / 0.5459 | 0.97 / 0.24 | proportional |
| 7 | Archivo | OFL-1.1 | variable (see 4.3) | 0.581 | 18.437 em (+5.4%) | 27.647 em (+1.6%) | 0.686 / 0.526 | 0.88 / 0.21 | proportional |
| 8 | DM Sans | OFL-1.1 | variable (see 4.3) | 0.582 | 17.304 em (-1.1%) | 28.813 em (+5.9%) | 0.7 / 0.504 | 0.99 / 0.31 | proportional |
| ref | KH Teka Medium | commercial | 300 to 900 | 0 | 17.494 em | 27.203 em | 0.7 / 0.504 | 0.95 / 0.25 | proportional, tnum available |

**Recommended: Figtree** (Erik D. Kennedy; SIL OFL 1.1; variable 300 to 900; Latin and Latin-ext). It is the closest in every measured dimension: cap height 0.7003 vs 0.70, x-height 0.5 vs 0.504, ascent/descent 0.95/0.25 identical to 0.95/0.25, the capital hero line 17.722 em vs 17.494 em (+1.3%), the lower-case sentence 27.596 vs 27.203 em (+1.4%), letter widths M 0.8487 vs 0.852, n 0.5609 vs 0.571, and proportional numerals like KH Teka. Weight range: 500 for headlines and 400 for body exist (variable). Difference to flag: Figtree is a friendlier geometric sans with rounder curves, where KH Teka is rigid and mechanical; with -0.04em tracking in capitals the word shapes read alike, and the softer curves suit the club's warm voice (recorded as a deliberate softening, not a flaw).

**Second best: Hanken Grotesk** (SIL OFL 1.1; variable 100 to 900; Latin and Latin-ext). Closer in construction (neo-grotesque, flat curves: M 0.8448, n 0.5528, i 0.2324 vs 0.852 / 0.571 / 0.232), capital line 17.095 em (-2.3%), lower-case 27.714 em (+1.9%), cap 0.697, x 0.493 (about 2% smaller x-height than the original); taller line box (ascent 1, descent 0.3); numerals are tabular by default, which suits clocks and prices. Choose it if the rigid grotesque character matters more than the numeric match.

Others measured, not recommended: Albert Sans, Funnel Sans, Host Grotesk, Inter Tight (caps 4% taller and x-height 8% larger than the original, so lower-case looks bigger), Archivo, DM Sans. Inter, Geist, Plus Jakarta Sans and Manrope scored worst of the grotesques on width and proportion.

### 4.2 Monospace UI (replaces Aeonik Mono Regular)

Reference Aeonik Mono 400: advance 0.62 em, cap height 0.7, x-height 0.51, ascent/descent 0.93/0.21.

| Rank | Family | Licence | Weights | Score | Advance | Cap / x-height | Ascent / descent |
|---|---|---|---|---|---|---|---|
| 1 | Fragment Mono | OFL-1.1 | 400 (+ italic), not variable | 0.221 | 0.618 em | 0.699 / 0.524 | 0.95 / 0.25 |
| 2 | Chivo Mono | OFL-1.1 | 100 to 900 variable | 0.336 | 0.6 em | 0.686 / 0.511 | 0.94 / 0.25 |
| 3 | IBM Plex Mono | OFL-1.1 | 100 to 700 static | 0.439 | 0.6 em | 0.698 / 0.516 | 1.02 / 0.27 |
| 4 | Overpass Mono | OFL-1.1 | variable | 0.499 | 0.616 em | 0.7 / 0.511 | 0.88 / 0.38 |
| 5 | Azeret Mono | OFL-1.1 | variable | 0.508 | 0.65 em | 0.698 / 0.55 | 0.94 / 0.23 |
| 6 | DM Mono | OFL-1.1 | 300, 400, 500 static | 0.515 | 0.6 em | 0.7 / 0.496 | 0.99 / 0.31 |
| 7 | Geist Mono | OFL-1.1 | 100 to 900 variable | 0.516 | 0.6 em | 0.71 / 0.53 | 1.01 / 0.29 |

**Recommended: Fragment Mono** (Wei Huang, a monospaced version of Helvetica built from URW's Nimbus Sans; SIL OFL 1.1 per Fontsource; Regular and Italic, no other weights). Advance 0.618 em against 0.62 (the line lengths of every label, button and readout stay within 0.5%), cap height 0.699 vs 0.70, x-height 0.524 vs 0.51, ascent/descent 0.95/0.25 vs 0.93/0.21; its Swiss grotesque skeleton matches Aeonik Mono's. Only the Regular weight is used by the Lab, so a single weight is enough. Not verified: how its zero, i, j, l, I and the arrows look next to the originals (see 4.4).

**Second best: Chivo Mono** (SIL OFL 1.1, variable 100 to 900, Latin, Latin-ext, Vietnamese): advance 0.60 em (3% narrower), cap 0.686, x-height 0.511, ascent/descent 0.94/0.25; pick it if a medium weight or tighter columns are wanted.

Other mono faces measured and rejected: IBM Plex Mono (taller ascent 1.02, serif-ish details), Overpass Mono (descent 0.38), Azeret Mono (advance 0.65, x-height 0.55), DM Mono, Geist Mono, Roboto Mono, Red Hat Mono, Spline Sans Mono, Space Mono, JetBrains Mono (cap 0.73, x 0.55: too tall), Sometype Mono, Reddit Mono, Martian Mono (0.70 advance, far too wide).

### 4.3 Where to self-host the open families (verified licence data from the Fontsource API, source repository https://github.com/google/fonts)

| Family | Licence (SPDX) | Distribution to self-host from | Package / URL | Weights available |
|---|---|---|---|---|
| Figtree | OFL-1.1 | Fontsource (npm) and the Google Fonts repository | `@fontsource-variable/figtree` or `@fontsource/figtree`; https://fontsource.org/fonts/figtree ; https://github.com/google/fonts/tree/main/ofl/figtree | 300 to 900, variable, subsets latin and latin-ext |
| Hanken Grotesk | OFL-1.1 | same | `@fontsource-variable/hanken-grotesk`; https://fontsource.org/fonts/hanken-grotesk | 100 to 900, variable |
| Fragment Mono | OFL-1.1 | same | `@fontsource/fragment-mono` (static 400 normal and italic; subsets latin, latin-ext, cyrillic-ext); https://fontsource.org/fonts/fragment-mono | 400 |
| Chivo Mono | OFL-1.1 | same | `@fontsource-variable/chivo-mono`; https://fontsource.org/fonts/chivo-mono | 100 to 900, variable |
| Inter Tight, Geist, Instrument Sans, Schibsted Grotesk, Host Grotesk, Albert Sans, JetBrains Mono, DM Mono, Martian Mono, IBM Plex Mono | OFL-1.1 (each read from the Fontsource API) | same | `@fontsource(-variable)/<id>` | see Fontsource |

Route: take the woff2 files of the latin subset from the Fontsource package (`files/figtree-latin-wght-normal.woff2` style names) or from the Google Fonts repository, put them in `assets/fonts/`, load with `@font-face` + `font-display: swap`, preload only the display face, keep the first-view font budget (120 KB): one Latin file per family is typically tens of KB (the Lab's three files are 31 to 49 KB each); measure at build time. Record in `assets/fonts/LICENSES.md`: family, version, source URL, "SIL Open Font License 1.1", the copyright line from the package's LICENSE file and a copy of the OFL text. The OFL allows self-hosting, embedding, commercial use and redistribution with the licence text; the fonts may not be sold on their own, and a modified font may not keep a Reserved Font Name. Not verified here: whether the Figtree and Hanken files in the chosen subset carry `tnum`; check at build time if tabular figures are wanted in the sans (the mono face already has them).

### 4.4 Visual check: not done, say so
A side-by-side render (Lab font on top, open families below) was written and queued, but the machine-wide browser slots were saturated by long video jobs for over 15 minutes, so it was withdrawn rather than left running. The choice above therefore rests on measured metrics (proportions, widths, numerals), not on a visual comparison of glyph shapes. **Open:** look at Figtree and Fragment Mono against the Lab screenshots in `screens/` (hero headline in capitals at -0.04em, mono labels with the digits 0 to 9) when the component sheet is built; if the soft curves of Figtree or the zero of Fragment Mono read wrong, switch to the second-best (Hanken Grotesk, Chivo Mono) without changing any token name.

## 5. What Raoul decides (nothing bought)

1. Prototype and probably production: use Figtree (display, body) and Fragment Mono (labels, readouts), self-hosted, zero licence cost. This keeps the Lab-like form without using the Lab's paid faces.
2. Optional upgrade to the originals: KH Teka web licence for Regular + Medium about 304 to 1,896 € depending on the club's headcount band (needs the band), plus Aeonik Mono Regular web licence (from £50, final price in the CoType cart). Buying needs Raoul's explicit approval; the quote should be checked with the foundries before any purchase (self-hosting terms, VAT, whether two styles add up).
3. Using the same commercial typefaces as the Lab would also make Elite Fit look closer to a third party's brand; the open pair avoids that and keeps "not affiliated" clean.

## Sources
- KH Type: https://khtype.com/typeface/kh-teka/ · https://khtype.com/licenses/ · https://www.slanted.de/kh-type/
- CoType Foundry: https://cotypefoundry.com/our-fonts/aeonik-mono/ · https://cotypefoundry.com/licensing/
- Fontsource API (licence, weights, variable): https://api.fontsource.org/v1/fonts/<id> for figtree, hanken-grotesk, fragment-mono, chivo-mono, inter-tight, geist, geist-mono, instrument-sans, schibsted-grotesk, host-grotesk, albert-sans, jetbrains-mono, dm-mono, martian-mono, ibm-plex-mono
- Figtree description: https://fonts.google.com/specimen/Figtree/about · Fragment Mono: https://fonts.google.com/specimen/Fragment+Mono/about (designer and base per web search results)

## Change log
- v3.0 — 2026-10-02: created by the lab-tokens lane.
