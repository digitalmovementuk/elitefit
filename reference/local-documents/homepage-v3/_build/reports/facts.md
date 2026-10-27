> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: facts

Version: v3.0 — 2026-10-02 · lane: facts (Sonnet 5.5 xhigh)

## Delivered
- `FACTS.md` + `FACTS.html` (168 fact rows incl. 26 menu rows, 18 sections, fact lists per section of the page), `_build/facts/build-facts.py` rebuilds it (also merges `_build/facts/menu-facts.md` when `_build/ready/menu.ready` exists).
- `assets/data/hours.json` (status verified), `assets/data/coaches.json`, raw captures and parsed files in `_build/facts/` (`partner-discounts.json`, `reviews-verification.json`, `schedule-live-2026-10-02.json`, popup price lists).
- Markers: `_build/ready/facts.ready` (everything except menu) and `_build/ready/facts-final.ready` (menu merged: 26 F-MNU rows from the menu lane).

## Credits
- Firecrawl: 6 scrape calls, each reporting 1 credit (page list, Tinos entry, Martijn entry, Google Maps rating, /membership/, /membership/ with click actions for the three price popups). Everything else (pages, class pages, offers, promo, T&C, trainers list) came from the public WordPress REST API with curl, 0 credits.
- Shared balance: 68 before my first call, 57 after the menu merge at 10:45. The drop (11) includes the menu lane's parallel scrapes (its cap is 6) and a click-action scrape of mine whose own metadata reports 1 credit while the balance moved by 4 in that window; I could not separate the two. By per-call metadata my use is 6 (cap 8); worst case if the action scrape was billed 4 it is 9.

## Biggest differences from the v2.1 data
1. Hours are verified: 6:00 to 22:00, Recharge from 6:30, seven days.
2. WhatsApp: two live numbers (+62 857-2022-1101 main site and Google; +62 851-9552-0220 newest sales page) plus a stale third; v2.1 used the second.
3. Prices and 4-week Duo totals in passes.json match the club's live price popups. Differences: Duo day pass 225.000 exists only for the Elite day pass; Duo yearly (each) is published and missing in passes.json; T&C day counts (168, 365) contradict 182 and 364.
4. 19 of 36 weekly classes (Stretching, Mobility, Booty) have no description of their own; the club pages repeat the Body Sculpt text.
5. Reviews: Tom J. is now confirmed on /promo-duo/; five more Google-labelled quotes exist there; Marianne is a club testimonial not labelled Google; reviews.json trims two quotes with "…".
6. Equipment brands named by the club: Arsenal Strength, Panatta, Prime.

## Open (Raoul or the club)
WhatsApp number; Tinos = Martijn Taken (probable, not stated); review count 488 not re-read today (rating 4.7 was); whether a Perform-only day pass includes classes; "a place to call home" not found on any club page.

## Menu merge
The MENU lane found no create-your-own-bowl in any club source (F-MNU-22), no priced online menu, and only two specials with prices read from footage (unit not printed). The Elite Nutrition showcase has nothing real to stand on yet: raised in FACTS section 17.
