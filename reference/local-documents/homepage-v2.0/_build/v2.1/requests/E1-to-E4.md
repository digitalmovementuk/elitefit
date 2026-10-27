> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request E1 → E4 (motion.css)

Version: v2.1 — 2026-10-01 · from lane E1 (hero arrival, header and navigation, anchor jumps, cursor response). Changelog: created.

E1 does not edit motion.css or motion.js. Nothing below is required for the page to work: hero.css wins every overlap by specificity. The asks keep a single source per moment.

## 1. Optional cleanup: the phone board settle (motion.css §5, beat 2, `@media (max-width: 759.98px) html.motion-ok #hero [data-motion-layer="board"] { … m-rise 800ms … 380ms }`)
- E1 replaces it with a footage settle (the reel area scales 1.04 → 1 from its top edge, 260–1160 ms) so the phone arrival never runs more than three animations at once (header, two headline words, footage, buttons, review line in sequence).
- hero.css §5.7 cancels it with `html.motion-ok #hero .hero__board[data-motion-layer="board"] { animation: none; }` (phones only).
- Ask: delete the phone board rule from motion.css §5, or leave it; either way the result is the same. Keep the headline words (m-rise, 0 / 140 ms), the desktop card slide and the poster→clip fade: E1 builds on them unchanged.

## 2. Optional cleanup: the header menu sheet transitions (motion.css §6)
- E1 owns the menu sheet moment: the sheet now grows out of the toggle (transform-origin = toggle, scale 0.94 → 1 + fade, `--m-dur-menu-in` / `--m-dur-menu-out`, sheet ease) and the toggle's lines turn into the X.
- hero.css §5.5 overrides §6 with `html.motion-ok .hdr .hdr__menu…` (also sets `translate: none` to cancel the 16 px drop).
- Ask: delete §6 or leave it. Please do not add new rules on `.hdr__menu`, `.hdr__toggle`, `.hdr`, `.hdr__bar`, `.hdr__buy`, `.hdr__wa`, `.hdr__ind`, `#hero .hero__media`, `#hero .hero__poster`, `#hero .hero__video`, `#hero .hero__ctas`, `#revline` (root) or `.hero__go` without telling E1: those carry E1 animations or transitions.

## 3. FYI: tokens and keyframes E1 reuses (please keep the names)
- `--m-dur-slow`, `--m-dur-press`, `--m-dur-menu-in`, `--m-dur-menu-out`, `--m-ease-out`, `--m-ease-in`, `--m-ease-sheet`, `--m-ease-breathe`; keyframes `m-rise` (headline words).
- `#site-header[data-scrolled]` from motion.js stays the trigger of the header condense; please keep its threshold (> 8 px, back at ≤ 2 px).

## 4. FYI: `.btn` transitions
- From a fine pointer, hero.css sets `transition: scale var(--m-dur-press) …, translate 200ms …` on `#hero .btn--primary` and `.hdr .btn--primary` (the cursor pull). If E4 changes the global press (`html.motion-ok .btn`), tell E1 so these three buttons keep the same press.

## 5. Footer social icons: reuse E1's EF-style sprite (Raoul's request, 19:20)
- `partials/header.html` now carries one hidden sprite (`svg.hdr__sprite`, first child of `#site-header`) with four symbols on a 24 px grid, drawn with the EF mark's ~9° slant, block bars and cut corners, `fill="currentColor"`:
  `#ef-i-instagram`, `#ef-i-facebook`, `#ef-i-whatsapp`, `#ef-i-maps`.
- Usage anywhere after the header (the footer included): `<a href="https://www.instagram.com/elitefitbali/" target="_blank" rel="noopener" aria-label="Elite Fit on Instagram"><svg width="24" height="24" aria-hidden="true" focusable="false"><use href="#ef-i-instagram"/></svg></a>`. Colour comes from `color` on the link.
- Verified links only (the club's own site and the footer): Instagram `https://www.instagram.com/elitefitbali/`, Facebook `https://www.facebook.com/elitefitbali`, Google Maps `https://maps.app.goo.gl/4qwxZzF3nnM1jeh36`, WhatsApp `https://wa.me/6285195520220?text=Hello%20Elite%20Fit%20Bali!%20I%20have%20a%20question`. No TikTok or YouTube (none found on any club page).
- Contrast: plain taupe (`--c-taupe-logo`) is 2.3:1 on the concrete surface, too low for an icon; the header uses `color-mix(in srgb, var(--c-taupe-logo) 60%, var(--c-logo-black))` (4.6:1). On the steel footer, `--ink-2` or `--ink` of the workout zone reads well; check 3:1.
- Tap targets 44 x 44 (the header uses `.hdr__social-link`; give the footer its own class in `.foot*`).
