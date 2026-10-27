> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Art direction — Elite Fit Bali homepage v2.0

Version: v1.0 — 2026-10-01 · owner: Step 1 (Fable lead) · for the motion lead (M) and every lane. Timing figures are ranges; M sets the numbers. Nothing here is visitor-facing copy. Colours named here are the measured anchors in tokens.css.

## 1. Mood in four words

Daylight concrete, amber wood, cold water, warm ember. The page is a walk through the building, not a brochure about it: you arrive on a poured-concrete slab in daylight (hero), step onto the black-steel gym floor (Today), sit on the cream benches under the cane ceiling (passes, reviews), pass into the sand-tiled rooms where the temperature climbs from 4° to 100° (Recharge), and leave through the entrance on Jalan Sempol (visit). Everything else in the benchmark is dark cinema: 21 of 29 sites open on a frame darker than luminance 0.35. We open light, and the darkness arrives only where the club is dark: steel floor and sauna boards.

The one thing to remember: **the club speaks in numbers set in Syne**. 06:00, 09:00–10:00, 350.000, 4°, 100°. Times, prices and temperatures are the only things that ever move on their own; the pictures and the words hold still around them.

## 2. How each zone should feel to move through

| Zone | Where | Surface, ink | Feel | Motion personality (ranges) |
|---|---|---|---|---|
| neutral (concrete) | header, hero, the club, visit | #DFDDD0 (concrete lifted to L\*88), ink #121317 (the EF logo black) | quiet, bright, matter of fact | arrive-and-stay; reveals 240–360 ms, ease-out, 10–16 px rise, no bounce |
| workout (black steel) | Today strip, coaches, footer | #1D2123 (rack uprights), ink #EEEEEC | crisp, fast, the floor at 06:00 | 120–220 ms, sharp ease-out (cubic 0.2/0.8/0.2/1), 8–14 px, stagger 30–50 ms; the "now" dot (#9FB84D, sunlit foliage) breathes slowly, opacity 0.55→1 over 1.8–2.6 s, the only loop on the page |
| cafe (benches, cane, oak) | passes, reviews | #C5C0B2 (cream benches), ink #423C38 (timber deck); oak wall #643E25 for small accents, cane #804A1C for large numerals | warm, medium, lamp light on wood | 260–420 ms, soft ease-in-out, 12–24 px, stagger 60–90 ms; the price morph is the star: digits roll 320–520 ms, never longer than the thumb takes to reach the next chip |
| spa (sand) | Recharge | #D6CAB4 (lit sand tile) → the four stage tones | slow, breathing, wet heat | 600–1200 ms, long ease (cubic 0.6/0/0.2/1), opacity-led, movement ≤ 12 px, stagger 120–200 ms; tone crossfades 800–1400 ms; nothing here is quick |

Rule for the whole page: a visitor who never scrolls below the Today strip must never see anything loop except the "now" dot and the hero clip. No marquee, no ticker, no autoplay carousel.

## 3. The hero sequence, in beats

1. **Arrive (first paint → ~400 ms).** The concrete board is already there; it is the LCP, not the video. "Perform. / Recharge." arrives word by word (two words, two beats), rising 10–14 px into place. The poster sits in the reel window. "Buy a pass" is live from the first frame; it does not animate in, it is simply there, coral on concrete. Nothing fades from black; the page starts light.
2. **Settle (~400 → ~1200 ms).** The clock chip ticks to the current Bali minute (digits only). The reel fades over its poster when the clip can play (opacity only, 400–700 ms; never under save-data or reduced motion). On desktop the pass card slides up 8–12 px into the corner of the window. On mobile the board's top edge may ease up 6–8 px over the reel, as if set down on it.
3. **Invite the scroll (from ~1.2 s).** No chevron. The invitation is content: the top of the black-steel Today board shows under the hero with the date and the day chips, and the first class card is already partly visible. The "Now" dot breathes. On desktop a faint parallax (depth 0.04–0.08) between the concrete board and the reel window answers the first wheel movement; on touch, nothing in the hero is scroll-linked.

Mobile deviation, stated once: the reel stays the hero footage on the phone, but inside the ~66svh hero behind the concrete board, not full screen, because the first screen must also show the Today peek (CONTRACT §9.1).

## 4. The Recharge sequence, as a story (the signature moment)

Four rooms, cold to hot. The visitor scrolls, and three things change together, nothing else: the picture, the tone of the whole block, and the number.

- **Ice bath, 4–6°.** The two sunken plunge pools in the sand-tiled room. Tone: the pool's pale sun-shelf aqua (#CCD2CC), number in deep pool teal (#3F6068). The digit lands without easing out, like cold. A breath held.
- **Jacuzzi, 38–40°.** The tiled edge of the warm pool. Tone warms to the sand mosaic tile (#C6B89E), number in travertine brown (#643C1C). The roll from 4 to 38 is the longest in the sequence (the thaw). A breath out.
- **Steam room, 38–40°.** Wet heat, low contrast, mist. Tone: the sand-ochre plaster of the recovery rooms (#A38559), number near-black. The number barely changes (38 stays 38); the picture softens. The quietest beat; let it be slow.
- **Sauna, 80–100°.** Timber benches, a window to the garden. Tone goes to the LED-lit sauna boards (#411B03) and the ink turns light; the number glows in the bench amber (#FECA69, measured on the bench top). The only place the page becomes dark outside the steel zones. Then the section ends and the page cools back to daylight concrete for the coaches and the visit.

Rules: temperatures in °C, the "°" is part of the numeral and morphs with it; label, line and image crossfade together within one window (800–1400 ms); the visitor controls the pace (scroll position sets `data-stage`), no pinning longer than the four images themselves need; with JS off or reduced motion the four blocks stand one after another, each in its own tone.

## 5. Reference moments taken from the evidence (mechanism, not look)

| Site, moment | What we take | Where it lands |
|---|---|---|
| Antara: the green arch section rising into the slow video | a solid surface rising into the footage | the concrete board over the reel on mobile; the steel Today board under the hero |
| Barry's: a working "nearest studio" card inside the hero | one working object in the hero, not a slogan | the desktop pass card on the reel window, opening checkout with Perform · day preselected |
| The Performance Lab: giant type as the device, mono UI for numbers | type carries the brand; numerals as UI | Syne caps headline; `.num` for every time, price and temperature |
| Gymbox: one flat colour block directly under the video hero | a hard material cut right after the hero | the black-steel Today strip at the fold |
| Othership: Book a Class and Buy a Pass always within reach; pinned bottom CTA pair on mobile (journey J0) | the buy action never leaves the thumb | coral "Buy a pass" in the hero, header (desktop) and sticky buy bar (mobile) |
| Equinox: monochrome system whose only effect is a typographic edit | restraint; one device | no gradients, no glows; the numeral morph is the effect |
| Meritage: light field with an inset photograph | a light hero with inset media | daylight concrete + the 9:16 reel as a window |
| Phive (Awwwards note): timetable interaction on the homepage | the schedule is part of the homepage, not a link | the Today strip with day tabs and now/next |
| Othership mobile journeys J2/J3: 4 taps to a single pass or membership | beat that | 2 taps to day-pass details, 3 to a 4-week membership |
| Life Time (h1 filmstrip): separate 9:16 phone film of spa and gym, poster, pause control | the reel is a phone film with a poster and a pause button | `.hero__pause`, poster-first, clip after load |
| Othership (h2 filmstrip): two buttons docked at the bottom on every scroll state | the action never scrolls away | the buy bar with WhatsApp, price and Buy a pass |
| The Slow, Canggu (h3, 5/5): magazine tiles of concrete, timber and palms, olive rules, pinned Book bar | materials as the page, not footage | the zone tiles and the material surfaces per zone |
| Desa Potato Head (h3): pinned bar with Book Now and WhatsApp | WhatsApp inside the pinned bar | `.buybar__wa` |
| Remedy Place (h2): unpeopled, low-lit timber and stone footage, cuts every ~4.5 s, "the space is the product" | let the rooms carry the Recharge sequence; no people in the four stage images | `rec-*.webp` crops |

The h1–h3 hero reports landed late in the run and were read as text; the filmstrip images were not opened. M should look at the Othership, Life Time and The Slow filmstrips first and adjust the ranges above, not the beats.

## 6. Micro-interactions and page-load choreography

- Page load: fonts preloaded and metric-matched, no FOUT jump. Above the fold nothing is hidden before JS (`html.motion-ok` gates all initial hidden states). Below the fold, blocks reveal as they enter, once; scrolling back replays nothing.
- Buttons: `press` is a 2–3 % scale on pointer-down, 80–120 ms, transform only. Coral hover goes to the measured reel red #F06953; no colour animation needed.
- Chips as tabs (day chips, length switch): `tab-indicator` moves a filled pill behind the selected chip, 180–260 ms in workout, 260–360 ms in café. The chip text never moves.
- Price morph: digits roll vertically per position (tabular figures keep the width), thousands separators stay put; the real text and `aria-label` update instantly, the roll is decoration.
- Sheet (checkout, menu): rises from the bottom on mobile 280–380 ms and settles; the backdrop fades. Steps slide 16–24 px sideways (forward left, back right), 200–300 ms. Desktop: the dialog fades and scales 0.98→1.
- Buy bar: slides up when the hero CTA has left the viewport, slides down when the checkout opens or the footer arrives. Never bounces.
- Cards: `lift` is translateY(−4 to −6 px) plus the card shadow, pointer devices only.
- Counter: "84" counts up once when visible, 600–900 ms, tabular.
- Clock: minute digits change with a short vertical roll, same mechanism as the price.

## 7. What to avoid (seen in the mass, measured in the benchmark)

Template carousels and sliders (Swiper on 10 of 29 sites); smooth-scroll hijacking (Lenis on 6; Locomotive, ScrollSmoother); pinned sequences that trap the thumb; promo or cookie modals at first paint (Performance Lab; Othership's referral pop-up ~10 s after load); countdown strips and offer tickers (Equinox, Gymbox); marquee bands (8 of 29); star-rating badges; scroll chevrons; parallax on text; video before LCP; dark overlay gradients over footage to make white text readable (we put text on solid boards instead); any animation that runs while the visitor is reading a price; anything that makes "Buy a pass" later than first paint.

## Change log

- v1.0 — 2026-10-01 — first version (Fable lead), tones aligned to colour evidence v1.0.
