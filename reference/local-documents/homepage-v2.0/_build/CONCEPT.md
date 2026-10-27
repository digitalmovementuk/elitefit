> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# CONCEPT — Elite Fit Bali homepage v2.0

Version: v1.0 — 2026-10-01 · owner: Step 1 (Fable lead). Companion files: SECTIONS.md (build spec), ART-DIRECTION.md (motion brief), assets/css/tokens.css + base.css, assets/fonts/.

## 1. The idea

**The Day Board.** The homepage is built like the club's own day: a light poured-concrete slab carries two words in Syne, "Perform. Recharge.", the club's real halves and the doors a visitor walks through; the Instagram reel sits inside it as a portrait window instead of behind the text; and the black-steel board of today's classes starts right under it, already in the first screen, with the live Bali time and a "Now" marker. Buying is one coral button that opens a four-step sheet with the day pass preselected. Below, the page walks through the building in its real materials, and the one set piece is the Recharge run: four rooms from 4° to 100° where picture, tone and number change together.

## 2. Why it is not the mass, and why it is right for this club

- The mass (benchmark §2): a dark full-bleed video, one sentence centred, two buttons, a promo strip; 14 of 29 sites, and v1.3. We open **light**: 21 of 29 benchmark heroes are dark; only the Meritage hotel opens light. The club in daylight is concrete, sand tile, teal water and green; the dark rooms are the steel floor and the sauna, and that is exactly where the page goes dark.
- **Type and material as the device** (archetype D, the top three of the benchmark's standout list: Gymbox, Antara, Performance Lab) instead of footage as the device. Syne is already the club's heading face; "Perform. Recharge." is the club's own vocabulary; the two words also explain the pass tiers before the visitor reaches them.
- **The reel as a window, not a wallpaper.** A 9:16 reel never fits a 16:9 hero; as a portrait window on a concrete field it is in its natural frame on desktop and keeps its full-bleed role on the phone behind the board.
- **The schedule is in the first screen** (Phive's timetable interaction, Barry's working card): the strip's date, day chips and first class card are visible at 390×844 under a 66svh hero. Nobody in the benchmark shows today's classes on the homepage without a tap.
- **Numbers are the brand device.** Every time, price and temperature is set in Syne with tabular figures (`.num`), the only elements that move on their own. Concrete, oak, sand and steel hold still around them. This is ownable without a logo (the benchmark's A score) and it is what a gym visitor actually reads: 09:00, 350.000, 4°.
- **Materials from measurement, not from a mood board:** every surface in tokens.css is a measured anchor from the colour evidence (rack uprights #1D2123, cream benches #C5C0B2, lit sand tile #D6CAB4, LED-lit sauna boards #411B03, bench-top amber #FECA69), so the page looks like the building rather than like a template.

## 3. Hero archetype, rationale, alternates

**Chosen: D, type and material block as the device, with one working object (C/H mechanism) and inset media.** Evidence: Gymbox, Antara and Performance Lab score 7/8 on the standout ranking with type as the device (benchmark §1); Barry's 6/8 for the working card in the hero (§1, §5); the "rising section" mechanism from Antara (§3 idea 1); Othership keeps the buy action always in reach and its mobile journeys need 4 taps to a pass (mobile-journey-b J2/J3), which this hero beats with 2. The hero filmstrips (h1–h3, landed late in the run) confirm the gap: of the 36 captured heroes none puts a day pass, a price or today's classes inside the hero; h1 names it "the open slot for Elite Fit". The closest relatives are Othership's two docked thumb buttons over footage (h2, 4/5) and The Slow in Canggu (h3, 5/5), a magazine-like page of concrete, timber and palm tiles with a pinned Book bar, which is the nearest thing to our material idea and proves it reads as Bali, not as a template.

Alternates, one line each:
- **A, cinematic dark statement with the reel full-bleed and a single coral button** — the strongest "club night" mood, but it is the mass (9 of 29) and it hides the Today peek behind an overlay.
- **C, booking-first: a working "Today" card inside the hero** (AIRE/Barry's) — the fastest to a class, but it puts a dark table on top of the footage and competes with the pass purchase, the page's first job.

## 4. What we deliberately avoid

Full-bleed video with centred text; carousels and sliders; smooth-scroll libraries; pinned scroll traps; promo and cookie modals at first paint; countdowns, tickers, marquees; star badges and rating numbers; chevrons; dark gradient overlays to force white text; white text on coral; superlatives; anything unpublished (merchandise, PT prices, distances, tours as "free").

## 5. Page rhythm and tone per zone

concrete light (hero) → black steel, crisp (Today) → cream bench and oak, warm (passes) → concrete light (the club) → sand with four stage tones, slow (Recharge) → black steel (coaches) → cream bench (reviews) → concrete light (visit) → black steel (footer). Light, dark, light, light, sand, dark, light, light, dark. Motion personality follows the zone: workout crisp and fast, café warm and medium, spa slow and breathing (ART-DIRECTION §2).

## 6. Colour decision

All values from `brand/evidence-v1.0/colour/palettes.json` v1.0 (landed mid-run and folded in; the earlier provisional set and zone-clusters.json are superseded). Surfaces are measured anchors; the only derived values are page-light tints made by lifting a measured anchor's CIELAB L\* with a\* and b\* kept, each marked `D-L\*` in tokens.css (concrete to L\*88 for the slab, L\*92 for paper, L\*36 for secondary ink; bench cream to L\*88/84 for cards; sand tile to L\*88; steel to L\*17 for cards on steel; interior concrete to L\*72 for secondary ink on steel). Contrast, measured live from the CSS in the specimen run (WCAG 2.x, Chromium 1440): neutral ink 13.6:1, ink-2 and eyebrow 5.5:1, on cards 15.1 / 6.1; workout ink 14.0:1, ink-2 7.1:1, on cards 12.3 / 6.3, red-as-text #D66656 4.55:1 (computed); café ink 6.0:1, ink-2 (oak wall) 5.1:1, on cards 8.0 / 6.9, cane #804A1C 4.0:1 (large numerals only); spa ink 5.9:1 on the lit tile, 7.0 on cards, 4.9:1 on the base tile; stage tones: ice ink 12.1 / number 4.4 (large only, it is a 60–128 px numeral), jacuzzi 4.9 / 4.9, steam 5.4 / 5.4, sauna ink 13.1 / amber number 10.0; ink on coral 6.5:1 in every zone; the live green on steel 7.3:1 (computed). Coral as a fill on light surfaces reads 1.6–2.1:1 against its background, so primary buttons carry ink text (which passes) and never rely on the fill alone; on steel the coral fill is 5.7:1. Stage accents (#2F848F, #FECA69 on sand) are fills and lines only, never text, as the colour evidence prescribes.

Five hex values that are the page: concrete #DFDDD0 · black steel #1D2123 · cream bench #C5C0B2 · lit sand tile #D6CAB4 · coral #FF694B.

## 7. Font decision

Display **Syne** (locked; the club's heading face, OFL; Syne Bold matches the entrance sign lettering at 0.89 glyph overlap, so the header wordmark is set in it). Body **Hanken Grotesk** (OFL, variable 100–900, 34.8 KB latin): a normal-width, warm-neutral grotesk that sits under Syne's extended caps without competing (two wide faces would fight), has real tabular figures (`tnum`, checked in the file) for the schedule and the price morph, reads calmly at 17–19 px, and is not the template default that Manrope, Outfit and Inter have become. Outfit, the measured nearest match to the club's licensed-for-personal-use Ageo, was rejected for that template smell at body size. Both files self-hosted, 68.6 KB together, metric-matched fallbacks for zero CLS (tokens.css §1).

## 8. Coral decision

Kept, and tied to evidence: #FF694B is the kit's only accent (BRAND-NOTES 1) and sits next to the reel's measured light red #F06953; it is used for exactly one thing, the buy action (hero, header, buy bar, Choose, Continue), always with ink text (6.5:1), with the measured red #F06953 as the hover; the amber of the rooms stays a surface tone, never an action colour.

## 9. Evidence used

- `research/benchmark-gyms-v1.0/`: benchmark.md §1–3 and the site cards (Gymbox, Phive, Antara, Performance Lab, Othership, Barry's, Equinox, Meritage, Remedy Place, Third Space, AIRE), shortlist.csv. Screens: the session's context-hygiene hook blocked image reads after the first few, so of the screens only the brand-red board, the wordmark and heading specimens, the pool-deck and the plunge-pool originals were viewed; the hero descriptions in the cards (measured palettes, layouts, exact copy) were used for the rest. Stated plainly: the visual judgement of the benchmark rests on those cards plus five images.
- `research/stack-shop-v1.0/` §1, 7, 8 (66svh hero with the Today strip in view; budgets; what not to ship).
- `brand/evidence-v1.0/typography-and-media/` (fonts.json, image-inventory.csv, typography-and-media.md §1–2 and §4); `site-images-original/` via the inventory.
- `brand/evidence-v1.0/colour/` v1.0 (colour-evidence.md, palettes.json, materials.json): existed by the time tokens.css was finalised; folded in. `zone-clusters.json`: read, then superseded by the colour evidence.
- `research/hero-benchmark-spec-v1.0.md` and `hero-benchmark-h4-v1.0/candidates.md` (16 award candidates). `hero-benchmark-h1..h3-v1.0/` (hero-report.md, 36 sites) landed in the last hour of the run and were read as text (closing syntheses, overview tables, the Remedy Place and Othership cards); the filmstrip images themselves could not be opened (hook). Used: h1 "no hero carries pass, price or schedule", Life Time's vertical phone film with pause, Equinox's bottom bar replacing the header on scroll, the consent-card problem; h2 Othership's docked pair, Remedy Place "the space is the product"; h3 The Slow (5/5), Desa Potato Head's pinned bar with WhatsApp, Bisma Eight's concrete-and-timber page.
- `research/mobile-journey-a-v1.0/` (barrys, equinox, soulcycle, solidcore, 1rebel, thirdspace), `mobile-journey-b-v1.0/` (othership J0–J4 tap counts, remedy-place J0) and `mobile-journey-c-v1.0/` (landed late; journey-report.md: live site 5 taps to schedule and no checkout; v1.3 2/2/3 taps but 6.8 MB and 35 s on slow 4G, WhatsApp 3 taps away): used for the tap budget and the reel weight rule.
- Baseline `proposal/site-preview/` v1.3: BRAND-NOTES.md (all facts and prices), MEDIA-SOURCES.md, index.html (schedule template, review quotes, links), assets.

## 10. Deviations from the brief (one line each)

- Mobile hero: the reel stays the mobile footage but inside the ~66svh hero behind the concrete board, not full screen, because the first screen must also show the Today peek.
- Header wordmark is set in Syne 700 (0.89 match to the sign) instead of the PNG wordmark, which stays in the footer; the EF mark PNG is kept.
- Specimen: the fable.html screenshots were produced after the colour swap (see `_build/preview/`); the ratio table in the page is computed live from the tokens.

## 11. Contract change requests (design works inside the contract meanwhile)

1. Class passes do not fit `order.items[].lengthId ∈ day|week|w4|w12|w26|w52` (CONTRACT §6). Proposed: `tierId: "class"`, `lengthId: "c1" | "c10"`. Until agreed, class passes are information plus a WhatsApp link (SECTIONS §4).
2. Add to §4: `data-scrolled="true|false"` on `#site-header`, set by motion.js (presentation only); `body[data-buybar="open|closed"]` and `body[data-scroll-lock]`, set by shop.js.
3. Confirm the extra partial `partials/zones.html` + `assets/css/zones.css` + `assets/img/zone-*` for L4 with namespace `.zones*` (§2 anticipates "zones partials").
4. Hook vocabulary extended per §5's own rule: `clock`, `tile`; hero layer `board`; recovery number colour via `--num-stage` (SECTIONS §13).

## Change log

- v1.0 — 2026-10-01 — first version (Fable lead).
