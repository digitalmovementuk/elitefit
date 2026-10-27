> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Menu sourcing: Elite Nutrition (the cafe)

Version: v3.0 — 2026-10-02 · lane: menu (Sonnet 5.5) · data: `assets/data/menu.json` · facts: `_build/facts/menu-facts.md` · clip windows: `_build/facts/menu-clip-windows.md`

## In short
- The club publishes **no menu**: no page, no PDF, no image. Everything below comes from three small places: the club's own footage, one 2024 news post, and the Recharge page.
- **Two prices are real**, both read from the TV board in the cafe: Steak & Eggs 250 NET and Tiramisu Shakes 95 NET (specials of the month). The currency is not printed.
- **The grab-and-go fridge is real** (six food cards and three bottle types by name), with **no prices**.
- **"Create your own bowl" has no steps and no prices anywhere we can reach.** `bowl` in `menu.json` is `null`. The existence of the build-your-own bowl rests on Raoul's brief only.
- **The dietitian is real, on request:** published as one of the recovery specialists, "available upon request and need to be pre-booked 48 hours in advance". No name, price or length.

## Credits
| | Balance | Time |
|---|---|---|
| Before my first Firecrawl call | **68** | 2026-10-02 10:19 |
| After my last call | **57** | 2026-10-02 10:41 |

My own spend, from each call's reported credits: GoFood link 1, GoFood web page 1 (blocked, 403), one web search 2, `/promo-duo/` 1 = **5**. Two sitemap attempts on the XML failed with an error and returned nothing (the balance moved 68 to 67 in that window; it may be the facts lane's, so my upper bound is 6 = the cap). Other lanes spent the rest of the difference. Key never printed or stored. Serper not used. No Instagram login or workaround (one Instagram result was only read as search-snippet text).

Routes used and why: Firecrawl for the pages and the search; **plain curl for the sitemap XML files** (Firecrawl failed twice on XML, both preferred routes unsuitable for that file type); **WordPress REST JSON** for page and post text and the media list (allowed by the common brief once the site was identified; free); ffmpeg through `with-browser-lock.sh` for the footage.

## What was checked
1. Held material (free): the saved raw HTML and markdown of home, perform, recharge, the v2.1 sourcing notes. No menu link in the navigation. `/perform/` lists "Coffee & Protein bar" as a facility (four photos, no text); `/recharge/` lists "Restaurant" and the dietitian line.
2. Online: sitemap index, page, post and archive sitemaps (no menu, cafe or food page). REST text of every page and post searched for menu, bowl, cafe, food, coffee, shake, grab, dietitian. All 556 media items listed (no menu image or PDF). `/promo-duo/` read with Firecrawl. The club's own GoFood link (from the coolers post) read: listing only, menu inside the Gojek app.
3. Footage (the fallback, and the only source for prices): Header-Portrait.mov 6.0 to 17.6 s every 0.25 s at full resolution, crops enlarged 2 to 4 times for the small print; Header-Video-Landscape.mov 8.3 to 18.5 s every 0.5 s; the whole reel at 1 frame per second.

## Provenance, item by item
| Item or topic | Read where | Online | Footage | Price |
|---|---|---|---|---|
| Steak & Eggs (special of the month) | TV board, Header-Portrait.mov t=14.75, 15.0, 15.25 s; counter standee t=7.25 s | no | yes, three frames plus standee | 250 NET (unit not printed) |
| Tiramisu Shakes (special of the month) | TV board, same frames | no | yes | 95 NET (unit not printed) |
| Banana Bread, Cookie Double Choco, Cookie Original, Protein Ball Cranberry White Choco, Protein Ball Cranberry, Protein Ball Salted Caramel | handwritten cards in the GRAB N' GO fridge, t=16.0 s | no | names only | none visible |
| Cold Brew, Jamu, Ginger (bottles) | fridge bottom shelf, t=15.75-16.25 s | no | names only (ginger bottle's brand line unreadable) | none visible |
| Lemongrass Ginger, Strawberry Basil, Cucumber Lime, Watermelon Cooler | news post of 2024-08-01 (REST), also orderable "in the restaurant, the cafe, or on Gojek" | yes (2024) | no | none published |
| Coffee | espresso machine and grinder with a barista, t=6.25-7.95 s; the "Coffee & Protein bar" facility name on `/perform/` | name of facility only | machine only | no list, no price |
| Create your own bowl | nowhere | no | no | n/a |
| Smoothie bowl (two photos, 2024-01-03) | `/perform/` slider; media 8582, 8583 | photos only | no | n/a |
| Dietitian | `/recharge/` (REST, modified 2026-09-17), button to `/join-us-today/` | yes | no | none |
| Cafe and restaurant access, co-working | `/promo-duo/` (Elite and Perform include free co-working in both) | yes | no | n/a |
| Tax and service | `/promo-duo/` footer: "F&B prices are subject to tax and service" | yes | no | n/a |
| Printed menu and black menu card on the counter | t=7.25 s | no | unreadable | n/a |

## Verified online, only from footage, missing
- **Verified online:** cafe and restaurant exist, with free co-working for Elite and Perform; "Coffee & Protein bar" and "Restaurant" facilities; four coolers by name (2024); dietitian on request with 48 hours notice; "No outside food or drinks"; F&B is excluded from Recharge membership and subject to tax and service; GoFood listing; Gojek ordering.
- **Only from footage:** the two specials and both prices; the fridge and its contents; the coffee machine.
- **Missing:** the whole menu; bowl steps, options and prices; fridge prices; coffee list; the cafe's hours; dietary tags; any current price for the coolers; the dietitian's name, price and session length.
- **Disagreements to flag:** (1) the v2.1 sourcing note read Steak & Eggs as 260, three frames and the standee read 250; (2) the board says NET while `/promo-duo/` says F&B prices are subject to tax and service; (3) the two club pages carry different WhatsApp numbers (+62 857 2022 1101 on `/join-us-today/`, +62 851 9552 0220 on `/promo-duo/`), a matter for the pricing lane and Raoul.

## How the bowl showcase can honestly work
The step flow Raoul asked for needs the real menu, and the club publishes none. Until it exists:
1. **Build the component data-driven, show it only when `menu.json` has a bowl.** The nutrition lane writes the step flow (chips landing in the bowl, running price) to read `bowl.steps[].options[]`. With `bowl: null` it renders nothing. When Raoul sends a photo of the printed menu, the flow starts working without code changes.
2. **Meanwhile the block shows what is real**, as three tappable groups: this month's specials (Steak & Eggs, Tiramisu Shakes), the Grab N' Go fridge (the nine names) and the four coolers. No invented option, no invented step name.
3. **Prices.** Show a price only on the two specials, and only after one question is answered (below). Everything else reads "Prices at the cafe". **No running total** while most items have no price: a partial total misleads.
4. **Do not state "create your own bowl" as a fact on the page.** Only Raoul's brief supports it. A club photo of a smoothie bowl (2024) can sit in the block with no claim, or with the caption "Ask at the cafe".
5. **The action** stays "Ask at the cafe" (a plain button that opens WhatsApp with a message, no order, no payment, no account). Message wording that is true with what exists:
   - nothing chosen: "Hello Elite Fit Bali, I'm planning to visit the cafe. What is on the menu today?"
   - items chosen from the real list: "Hello Elite Fit Bali, I'm planning to visit. I'd like to try the Tiramisu Shakes and a Protein Ball Salted Caramel. Are they available today?"
   - a chosen "bowl" appears in the message only once real steps and options exist.
6. **Must be shown without a price:** all fridge items, all coolers, coffee, and any bowl. **Must not be shown:** the board's description and nutrition figures, the 2024 post's health claims, the ARTUGO mark on the fridge door, the Instagram partner bowl.
7. **Copy words.** The club says "Coffee & Protein bar", "indoor cafe" and "outdoor restaurant"; "Elite Nutrition" is Raoul's pillar name and appears on no club page. The film's own end card reads PERFORM, EAT, RECHARGE, WORK, which supports "eat" as a pillar idea.

**One question for Raoul:** please photograph the printed menu on the cafe counter (the white sheet and the black card), and tell me whether "250" on the board means IDR 250,000 and is what a guest pays. With that, the bowl, the prices and the hours are closed in one step.

## Files
- `assets/data/menu.json` (15 items, fridge, drinks, dietitian, 11 gaps)
- `_build/menu-frames/` (10 evidence frames and crops, internal, not for the page)
- `_inputs/menu-online/` (Firecrawl and REST evidence), `_inputs/photos/cafe/` (nine club photos: cafe, restaurant, two smoothie bowls, coolers)
- `_build/facts/menu-facts.md` (F-MNU-01 to 26), `_build/facts/menu-clip-windows.md`

## Change log
- v3.0 — 2026-10-02: created by the menu lane. Credits 68 before, 57 after (mine 5, at most 6).
