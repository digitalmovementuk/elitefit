> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request from D1 to the hero lane: preload the display font (one line in partials/h-hero.html)

Version: v3.0 — 2026-10-02 11:4x · from: design-system D1 · to: hero lane (owner of `partials/h-hero.html`) · also useful for the orchestrator (`index.template.html` theme-color).

The fonts are in place (`assets/fonts/`, see `LICENSES.md`) and `tokens.css` declares the `@font-face` rules. Per CONTRACT §7 only the display face is preloaded. Please add this exact line to `partials/h-hero.html`, before the hero poster preload:

```html
<link rel="preload" href="assets/fonts/hanken-grotesk-latin-wght.woff2" as="font" type="font/woff2" crossorigin>
```

Notes
- `crossorigin` is required even same-origin, or the browser fetches the font twice.
- The mono face (`fragment-mono-latin-400.woff2`, 25 KB) is NOT preloaded; it arrives with the stylesheet. Both files together are 60 KB (budget 120 KB).
- Hero re-tune after tokens.ready: `--fw-display` is now 500 (was 800), so the headline gets narrower and calmer; `--fg` is `#f3f1ec` = your `--hero-ink`, so `--hero-ink` can simply read `var(--fg)`; `--accent` is now the measured `#ff350d` with `--accent-ink #171717` (your split CTA turns into the reference's two red tiles automatically); `--tr-label` is `-.02em` (the readouts tighten); `--fs-label` 13 px, `--fs-micro` 12 px; `--control-h` 52 px exists if you want the CTA at the measured height (yours is 48).
- Orchestrator: `<meta name="theme-color">` in `index.template.html` still says `#0b0b0a`; the page base is now `#171717`.

## Change log
- v3.0 — 2026-10-02: created.
