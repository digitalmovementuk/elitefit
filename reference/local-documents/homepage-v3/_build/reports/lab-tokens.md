> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: lab-tokens

Version: v3.0 — 2026-10-02 · lane: lab-tokens (Sonnet 5.5, xhigh) · owner of `research/lab/system/tokens/` only.

## Done
- `research/lab/system/tokens/tokens-raw.json` (machine), `TOKENS-RAW.md` + `.html` (tables), `FONT-LICENCE-FINDING.md` + `.html`, `screens/` (11 reference screenshots, WebKit 390 and Chromium 1440/768/1024/1920).
- Measured from the live site: WebKit iPhone 390x844 dsf2 (3 pages), Chromium 1440x900 (6 pages), viewport sweep at 320, 390, 768, 1024, 1440, 1920, hover / press / keyboard-focus states, CSSOM, platform-font names, hero contrast against the real photo pixels.

## Headline results
- Palette: #171717 / #ffffff / #f2f2f2 / #292929 surfaces, #bbbbbb and #727272 secondary text, one accent #ff350d.
- Fonts: display = KH Teka (commercial, KH Type), mono = Aeonik Mono (commercial, CoType); a third declared family (`diatype`) is never loaded. Open matches: Figtree + Fragment Mono (OFL-1.1, Fontsource).
- Display sizes: phone fixed (hero h1 52 px); from 768 px `px = rem x vw/120` (hero 11.25rem = 9.375vw: 72 / 96 / 135 / 180 px at 768 / 1024 / 1440 / 1920).
- Radius 0 everywhere, no shadows, 1 px lines, no custom focus ring, buttons 3.25rem (phone) / 4.25rem (desktop) high, spacing in quarter-rem steps.
- Readability: secondary greys (#bbb on white 1.9:1) and white text on the red (3.25:1) fail AA; smallest mono on the 390 phone is 12 px, at 1440 it is 9 to 10.5 px, at 768 it is 5.6 px.

## Open / unverified (one line each)
- Visual glyph comparison of Figtree / Fragment Mono against the Lab fonts was not done (browser slots saturated); the match is numeric only.
- KH Teka prices come from the public configurator (per style; the 2-style total is arithmetic, no cart); Aeonik Mono web price is not public (only £50.00 at the first buy step, cart not opened); the club's headcount band is needed to quote KH Teka.
- The cookie banner and pop-up background colour was judged from the screenshot, not computed. The effect of `ss01`/`cv01` on glyph shapes (not widths) is unverified.
- A single Cloudflare 1102 error page was met once and retried; request rate kept low. Nothing bought, no cart, no account, no form, no font file saved, Firecrawl not used.

## Change log
- v3.0 — 2026-10-02: created.
