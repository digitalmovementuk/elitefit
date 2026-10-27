> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: Footer

Version: v3.0 — 2026-10-02 · lane: footer (Sonnet 5.5, xhigh) · status: ready (`_build/ready/footer.ready`)

## What is built
The page footer, live in the v3 tab at http://127.0.0.1:8201/ (scroll to the bottom, or tap "Visit" in the menu and keep going).

| File | Role |
|---|---|
| `partials/53-footer.html` | `<footer class="ftr" id="footer" data-sec="footer">` after `</main>`; markup, three small arrow symbols, a template with the strings only JS needs |
| `assets/css/footer.css` | 8.6 KB raw, 2.5 KB gzip (budget 3); tokens only, local constants `--ftr-*`, buttons and icon tiles from `components.css` |
| `assets/js/footer.js` | 5.1 KB raw, 2.2 KB gzip (budget 4); loads after `load` in idle time |
| `copy/slots/footer.json` | 32 slots, provisional texts in the voice guide's form |
| `_build/reports/footer-check.mjs` | static check, 53 checks, exit 1 on a FAIL |
| `_build/requests/footer-copy-delta.md` | what the copy lane has to do (20 keys repeat `menu.*` word for word, 12 are new) |

Content, top to bottom on a phone (one column): EF logo and one line about the club (same facts as `hero.h1`) · "On this page" with eight hairline rows (Classes, Elite Nutrition, Elite Training, Elite Rest, Coaches, Passes, Reviews, Visit) · Visit: address as a Google Maps link, open state with the dot, Perform 06:00–22:00 and Recharge 06:30–22:00, "Every day" · "Message us on WhatsApp" · Follow: Instagram, Facebook, TikTok (52 px tiles, accessible names, "opens in a new tab") · "Terms and conditions" (the club's own page) · "Back to top" as a full hairline row · the place name "Elite Fit Bali" in 94 px caps across the whole column, then "Elite Fit Bali 2026" in mono. From 760 px: two columns; from 1200 px four columns (identity, links in two columns, visit, contact) and the place name on one line.

- **Data, not typing.** Address, map link and WhatsApp number come from `site.json` (number still TO CONFIRM, F-ADR-12; no number = no button); hours and open state from `hours.json` through `timetable.js` (club time WITA), refreshed every 30 s while the footer is near the screen. The profile URLs sit in the partial and are checked against `menu-nav.json` and FACTS F-ADR-16 by the script.
- **Links that exist.** `footer.js` hides a link whose id is not in the page. At the end of this lane all eight ids exist (the Coaches, Reviews and Visit lanes landed while I worked); the check script lists any missing one as PENDING or FAIL.
- **Glyphs.** Profile icons and the WhatsApp mark are `<use>` references to symbols already in the page (`#mnu-instagram`, `#mnu-facebook`, `#mnu-tiktok`, `#ef-wa`): no second copy of the paths, no extra request, recoloured by `currentColor`. If the menu or WhatsApp partial ever loses a symbol the check script fails and the icons would be empty (names stay).
- **Fixed UI.** The footer is a plain body child after `</main>`, so the buy bar, WhatsApp button and checkout keep their own selectors. `buybar.js` already looks for `footer.ftr` / `#footer` and hides the bar while the footer is on screen (measured: closed at the bottom). Bottom padding 88 px + safe area clears the 56 px WhatsApp button (+ 2 x 16) and the 64 px buy bar. Menu and checkout make the footer `inert` with the rest of the body (checked: `inert` while the menu is open, removed after Esc).
- **Look.** Dark, `--bg` with a 1 px strong top line, hairlines (`--line`, `--line-strong`), labels in mono small caps (`--fs-label`, faint grey), links in Hanken 500 at lead size, accent only in the page's own controls (none in the footer), taupe only inside the logo. No "built by" credit. Hover only where a pointer exists; press states on touch; light colour/transform transitions; reveals come from the motion lane through `data-reveal` hooks (up on the groups, a staggered list on the links, "rise" on the place name).

## Checks (browser through the lock; screenshots looked at)
| Check | Result |
|---|---|
| WebKit 390x844 scrolled to the bottom | read: hours, WhatsApp, profiles, terms, Back to top, place name in two lines (ELITE FIT / BALI), year; WhatsApp button sits in the empty band bottom right, covers nothing; no clipped letters (ink 1 px inside the gutters, measured on pixels) |
| WebKit 390x664 | same; WhatsApp button 48 px, clear of all text |
| Chromium 1440x900 | four columns, place name on one line spanning the grid (ink 5 px and 4 px inside the edges), WhatsApp button clear |
| Place name ink vs gutters (pixels of the element screenshot) | WebKit 320 / 375 / 390: 1 to 2 px left and 0 to 1 px right; Chromium 768 / 1024 / 1440 / 1920: 3 to 5 px and 1 to 4 px; nothing clipped, two lines below 760, one line from 760 |
| CLS | 0 in Chromium (`_tools/measure.mjs` load, `?nolive`, chromium390 and chromium1440); WebKit proxy 0 elements moved; footer height before and after the data arrives is identical at 390, 1024, 1440 and 1920 px, also with `site.json` and `hours.json` delayed by 3.5 s while the footer was already on screen |
| Overflow | none at 320, 360, 375, 390, 414, 1440 (measure.mjs), none at 768, 1024, 1920 (own run); no element beyond the viewport edge |
| Targets | all 15 interactive elements in the footer are 44 px or more in both directions (rows 44 + hairline, tiles 52, WhatsApp 52, terms 44, Back to top 52); smallest text in the footer 12 px (mono label), body-size text 16 px or more |
| Console, requests | 0 errors, 0 warnings in every run; no request leaves 127.0.0.1; the only external links are the three profiles and the club's terms page, all `target=_blank rel=noopener`, plus the Google Maps link and the wa.me link built from data |
| Interaction | Back to top: scroll 0, hash `#top`, focus on the hero heading (WebKit touch, Chromium, reduced motion); a link jump to `#pricing` and `#visit` lands under the header and focuses the heading; tab order in Chromium: eight links, map, WhatsApp, Instagram, Facebook, TikTok, terms, Back to top; focus ring solid 2 px `#f3f1ec` on keyboard focus; wa.me link = number from `site.json` with the club's hello text |
| Reduced motion | content and layout identical, nothing hidden (opacity 1) |
| `node _build/reports/footer-check.mjs` | 53 pass, 0 fail, 0 pending |
| Budgets | JS 2.2 KB gz (4), CSS 2.5 KB gz (3), partial 9.1 KB raw (2.4 KB gz in the HTML), no new request in the first view; whole-page numbers from measure.mjs at 390 px: first view 434.6 KB (Chromium), 404.7 KB (WebKit) against 900 |

## Open points
1. **Copy delta.** None of the 32 `footer.*` keys is in `copy.json` yet (see `_build/requests/footer-copy-delta.md`); `check-copy.mjs` lists them next to the same gap for coaches, reviews and visit. The provisional texts show meanwhile.
2. **Privacy page.** The club's own footers link `/privacy-policy/` next to "T & C", but FACTS lists no URL for it, so the footer links only the terms page (https://elitefitbali.com/terms-conditions/, FACTS pages table, F-PRC-14 for the ledger). Whether to add a privacy link is Raoul's call.
3. **WhatsApp number** stays TO CONFIRM (F-ADR-12): the footer button and the floating button read the same `site.json` value, so one change covers both. No number or email is printed in the footer.
4. **Real iPhone** not tested: Playwright WebKit is desktop WebKit (safe-area padding is wired with `env()`, not exercised).
5. **Link names.** "Passes" for `#pricing` follows `menu.link_pricing`; Raoul's menu brief says "Pricing". Coaches, Reviews and Visit are short plain names, not the section headings.

## Change log
- v3.0 — 2026-10-02: created, with the first complete build and its checks.
