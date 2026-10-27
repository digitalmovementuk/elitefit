> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: Elite Nutrition (pillar block)

Version: v3.0 — 2026-10-02 · lane: nutrition (Sonnet 5.5, xhigh) · status: Phase 1 done. Live: http://127.0.0.1:8201/#elite-nutrition (default) and http://127.0.0.1:8201/?demo=bowl#elite-nutrition (interaction review).

## What is built
- `partials/30-nutrition.html` (anchor `elite-nutrition`), `assets/css/nutrition.css` (shared pillar block verbatim, then `.nut-*`), `assets/js/nutrition.js` (shared clip helper verbatim, then the lane), `copy/slots/nutrition.json` (43 slots: markup and JS strings), `assets/data/menu.demo.json`, `assets/img/nutrition-clip-poster.webp`, `nutrition-bowl.webp`, `assets/video/nutrition-clip.{webm,mp4}`. Shared blocks checked byte-identical against `_build/pillar-anatomy.md` by script.
- Facts (every row has `data-fact` ids, all exist in FACTS.md): The cafe (F-NUT-01/02/03, F-MNU-01) · Specials: Steak & Eggs, Tiramisu Shakes, "They change every month. Prices at the cafe." (F-MNU-13/14/16) · Grab N' Go: nine names from `menu.json` fridge (F-MNU-17/18) · Drinks: coffee from the counter plus the four coolers from data (F-MNU-20, F-MNU-10) · Dietitian: "Available on request. Book 48 hours ahead." plus an "Ask on WhatsApp" link (F-NUT-04, F-TRT-01, F-MNU-08). All names and prices are rendered from `menu.json`, not typed.
- No price figure anywhere by default. A price chip renders only when an item has `priceUnitConfirmed: true`, a numeric `price` and a real currency code; "Prices at the cafe." hides itself once every special is priced.
- No cafe opening hours (not published, F-MNU-25). "Elite" appears only in the pillar name (the fridge reads "Grab N' Go", not "Elite Fit Grab N' Go").

## The bowl showcase
- **Default (menu.json `bowl` = null):** an honest card: a square crop of the club's 2024 smoothie bowl photo (decorative, no caption), the heading "Create your own bowl", the text "Built at the cafe. Ask the team what is on offer today." and a WhatsApp button "Ask at the cafe" (a question, no claim). No steps, no options, no prices.
- **Step flow (built, data-driven):** stepper (01 to n, sliding underline, "chosen" mark), current step with option chips (`role=radio` + `aria-checked` for one-pick, `aria-pressed` for many-pick, roving tabindex and arrow keys on radio groups, `max` limit with `aria-disabled` and a spoken message), Back/Next, a hairline bowl drawing the chosen options land in (the tapped chip flies from the option into the bowl, 460 ms, transform and opacity, interruptible, none when motion is off), a summary line ("Start with base." / "... Still to choose: protein." / "Your bowl: ..."), a running total with an odometer digit roll by transform (380 ms, 20 ms stagger, only when the data confirms prices and every option has one), "Start again", and the action "Ask or order at the cafe": a `wa.me` link, url-encoded text with the chosen bowl by step ("Base: ...; Protein: ...; Toppings: A + B"), number from `site.json` (status TO CONFIRM). Live region announces step changes and add/remove. No payment, no account, no form.
- **Real menu = pure data change:** fill `menu.json` `bowl`; schema is in the header comment of `assets/js/nutrition.js`:
  `bowl: { currency, priceUnitConfirmed, basePrice?, steps: [ { id, name, pick: "one"|"many", max?, required?, options: [ { id, name, price } ] } ] }` (`price` = amount the option adds, full amount in `currency`, 0 = included). Item-level: `price` as the FULL amount once the unit is confirmed (the board's 250 probably means 250000), `show: false` hides an item.
- **DEMO FLAG (to be read by Raoul, flagged in DECISIONS.md):** `?demo=bowl` loads `menu.demo.json` (PLACEHOLDER options Base 1-3, Protein A-D, Topping 1-6, Sauce 1-3, invented round prices) with a dashed banner "DEMO DATA: not the club's menu". In demo the action button only previews the WhatsApp text and never opens WhatsApp. Never the default, never linked, the file is not fetched without the query flag. Delete the file when the real `bowl` is in.

## The clip
- `nutrition-clip.webm` 364 KB (vp9) + `nutrition-clip.mp4` 299 KB (h264), 576x720 (4:5), silent, 3.7 s seamless loop, poster 25 KB (webp, first frame). Three scenes of the club's own footage at 0.8-0.85x with 0.2 s dissolves: indoor cafe lounge with a guest walking along the TV wall (Header-Portrait.mov 11.40-13.30 s, rotated at 12.55 s so the loop seam is a plain continuation), coffee station (8.15-9.05 s), outdoor restaurant sofa deck (Header-Video-Landscape.mov 15.65-16.65 s, middle panel cropped 640x800). Windows from `menu-clip-windows.md`, checked by eye on contact sheets: no board, standee, fridge, price or promo text in any frame.
- Behaviour: lazy, poster first, `preload=none`, plays only near the viewport via `EF.clips` (max 2 on a phone), stays on the poster for reduced motion and data-saver.

## Checked (Playwright via the lock; screenshots looked at)
- WebKit 390x844 (2x), WebKit 320x640, Chromium 1440x900, each default and `?demo=bowl`; WebKit 390 reduced motion. No horizontal overflow (scrollWidth = clientWidth), every visible button and link 44 px or more, no console error, warning or failed request.
- Demo flow driven end to end: base 2 + protein C + three toppings + sauce 2 gave 120.000 (checked by hand: 45+40+5+10+15+5); the fourth topping is refused with "This step takes up to 3."; arrow keys move and select radios with a roving tabindex; the demo action shows the preview and opens no page.
- Clip plays in view (t advancing), pauses after scrolling away (0 clips playing), stays paused at t=0 with reduced motion.
- Sizes: nutrition.css 3.5 KB gz, nutrition.js 8.3 KB gz (the flow is most of it), poster 25 KB eager, bowl photo 30 KB lazy. Lane CSS has no hard-coded colour or font; D1's tokens arrived during the run and the block picked them up without change.

## Open / for Raoul or the orchestrator (one line each)
1. The bowl: the club publishes no steps or prices; please photograph the printed menu (white sheet and black card on the cafe counter) so the flow can switch on with real data. The default page shows no flow until then.
2. The two prices stay hidden until the unit is confirmed (does 250 on the board mean IDR 250,000, and is that what a guest pays; the board says NET, the Better Together page says F&B is subject to tax and service).
3. The specials are the September board; the row says "They change every month" and never "this month". The four coolers come from a 2024 post and the bowl photo from January 2024: both shown as the lane brief asks; `show: false` removes an item, deleting the card image removes the photo.
4. WhatsApp number is `site.json` (+62 851-9552-0220, TO CONFIRM), shared with pricing.
5. Not verified: on a real iPhone (Playwright WebKit only), contrast of the red accent text pairs by tool (hand estimate 4.9:1 on the selected chip), the Lab-token look of the block with the final fonts beyond the screenshots taken. The motion lane may add `data-reveal` behaviour later; nothing in this lane depends on it.

## Change log
- v3.0 — 2026-10-02: created.
