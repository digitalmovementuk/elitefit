> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Mobile customer-journey benchmark A — Elite Fit Bali

**Version: v1.0 — 2026-10-01**  
Scope: 7 gym / studio sites, iPhone-class WebKit, J0 landing, J1 schedule, J2 day pass / trial, J3 membership, J4 shop. Evidence only, no design verdicts. Output folder: `research/mobile-journey-a-v1.0/` (one folder per site with screenshots and `journey.json`).

## Method and caveats
- Device: Playwright 1.63 WebKit, iPhone 14 profile with 390x844 viewport, deviceScaleFactor 2, isMobile, hasTouch; en-US for US sites, en-GB + Europe/London for UK sites. Machine IP geolocates to Bali, Indonesia (some shops and checkouts localised to IDR / en-id).
- Taps are real touch taps (locator.tap or touchscreen.tap). A scroll is one swipe-equivalent of about 650 px (window scroll in 600 ms steps); a fast flick could need fewer. Consent and popup taps are counted separately and are not in the journey tap counts. Typed text was a city name only.
- Seconds are rough: measured browser time per tap on that site (navigation + 1.2 s settle) + 1.2 s per scroll + 2 s per typed entry. They exclude human aim time.
- Hard rules kept: no account created, no personal data entered, no payment card, no form submitted, no purchase, no newsletter. Each funnel was stopped at the first screen asking for personal or payment data. Adding a merch item to a cart drawer and opening the Shopify checkout page was done; nothing was typed there.
- Transferred bytes: resource timing (same-origin only, cross-origin shows 0) and Playwright response sizes (all hosts, best effort). Wallet buttons were checked in the rendered checkout (wallet iframes); Apple Pay does not render in this desktop-host WebKit, so its absence is not proof.
- Screenshots: <site>/NN-step.png (2x pixels); files named detour/failed/cloudflare are evidence of a tap miss or a challenge page. Visual review of screenshots was partial (image reads were throttled); layout facts come from rendered-DOM measurements (rects, fixed/sticky elements, hit tests).

## Comparison table

| Site | Taps to schedule | Taps to day-pass / trial checkout | Taps to membership checkout | Wallet pay | Guest checkout | Login wall |
|---|---|---|---|---|---|---|
| Equinox | 5 taps + 11 scrolls | n/a (no day pass); Book Visit form: 1 tap | 1 tap (personal data first) | Shop only: Shop Pay + Google Pay | Shop: Y; join: details first | N (no web booking) |
| Barry's | 4 taps + 1 typed city + 1 scroll | 6 taps + typed + 1 scroll (Step 1/4 form) | 7 taps + typed + 1 scroll | Shop only: Shop Pay + PayPal; class funnel not reached | Shop: Y; classes: N | Y (account gate at Reserve and at every pack) |
| Solidcore | blocked (403) | blocked | blocked | - | - | - |
| SoulCycle | 2 taps + 0 scrolls | 4 taps (sign-in wall) | 5 taps + 2 scrolls (sign-in wall) | Shop only: Google Pay; main: none | Shop: Y; main: N | Y (Reserve and checkout) |
| Third Space | 3 taps + 1 scroll | n/a (guest pass at club) | n/a (enquiry form, 1 tap) | N | n/a | N |
| 1Rebel | 3 taps + 1 scroll (incl. splash) | 3 taps + 1 scroll (sign-in wall) | 4 taps + 3 scrolls (sign-in wall) | Shop only: Google Pay; main not reached | Shop: Y; main: N | Y (BOOK NOW and BUY) |
| Gymbox | 4 taps + 1 scroll (1 hop by URL, see note) | 3 taps (free-trial form, guest, no payment) | 4 taps (details step; payment not reached) | Unknown (payment step not reached) | Y | N |

Wallet = Shop Pay / Google Pay / PayPal / Apple Pay buttons seen in the rendered checkout. "Not reached" = the funnel asks for personal data or an account before a payment screen.

## Sites

### Equinox — OK
URL tested: https://www.equinox.com/ · locale en-US · folder `equinox/`

Note: NYC pages used (New York > Flatiron). Two header variants were served (static 20x20 hamburger on first paint, 65x48 after hydration).

**J0 Landing**
- Hero: Dark full-bleed hero, H1 "THE EQUINOX SALE UPGRADED", sub "first month on us + $0 initiation, offer ends 9.30"; countdown banner above it.
- Primary CTA: Join Now (187x48)
- Secondary CTA: VISIT A CLUB (header button 124x40)
- Nav pattern: Sticky top bar (logo, VISIT A CLUB button, hamburger) with full-screen menu; sticky bottom CTA bar appears on scroll; club pages stack two bottom bars (JOIN NOW / VISIT CLUB 96 px + VISIT A CLUB 89 px).
- Cookie / consent: OneTrust floating card covers about 40% of the first viewport (Accept All / Cookie Settings / X). Least-tracking path = Cookie Settings > Confirm My Choices (toggles off by default) = 2 taps.
- Popups: Cookie card only.
- Load + bytes: DCL 2.6 s, load 3.3 s, FCP 2.4 s, TTFB 0.8 s; 184 requests; resource-timing transfer about 0.6 MB (same-origin only), Playwright-counted response bytes 3.7 MB.
- Overflow: No horizontal overflow.
- Tap targets under 44 px: First-paint hamburger 20x20; "Join Now" text link in banner 68x19; terms link 17 px high.
- Consent taps (not counted in journeys): 2
[01-j0-first-viewport.png](equinox/01-j0-first-viewport.png)
[02-j0-after-consent.png](equinox/02-j0-after-consent.png)
[03-j0-fullpage.png](equinox/03-j0-fullpage.png)

**J1 See today's class schedule** — 5 taps, 11 scrolls, about 34 s
- Result: Reached: Flatiron club schedule, Thu 1 Oct, 17 classes with times.
- What the view offers: Club dropdown, Filters button, day strip (T F S S M T W with arrows), rows with class, instructor (SUB flag), time range. No spots left, no book button; class detail page has no booking CTA. PDF download of the schedule on the club page.
- Friction: Location required: 117 clubs, regions list is 5 scrolls down; New York alone has 43 clubs. | Schedule block on the club page is another 5 scrolls down. | Menu item "Classes" opens a marketing page, not a schedule (detour). | Schedule page H1 pushes the first class below the fold (1 scroll). | No web booking at all: rows lead to a description page.
- Works well: Club page has a full-width SEE FULL SCHEDULE button (56 px). | Schedule rows are large (138 px) and show today by default.
- Path: menu > Clubs > 5 scrolls > New York > Flatiron > 5 scrolls > See Full Schedule > 1 scroll to see first class
[04-j1-menu-open.png](equinox/04-j1-menu-open.png)
[06-j1-clubs-page.png](equinox/06-j1-clubs-page.png)
[08-j1-new-york-region.png](equinox/08-j1-new-york-region.png)
[10-j1-club-classes-widget.png](equinox/10-j1-club-classes-widget.png)
[11-j1-full-schedule.png](equinox/11-j1-full-schedule.png)
[13-j1-class-detail.png](equinox/13-j1-class-detail.png)

**J2 One-time / trial / day pass** — 1 tap, 0 scrolls, about 4 s
- Result: No public day pass or drop-in. Closest: Book Visit (free club visit) = lead form, 1 tap from the header button.
- What the view offers: Form: first name, last name, email, phone + club selector, reCAPTCHA, no price, no payment.
- Commerce vendor: Own site, reCAPTCHA · Wallet: None · Guest: n/a (lead form) · First screen: 4 fields + club
- Friction: No purchasable single-visit product on the mobile site.
- Works well: VISIT A CLUB button is in the header on every page (1 tap).
- Path: VISIT A CLUB header button = lead form (no pass for sale)
[15-j2-visit-a-club.png](equinox/15-j2-visit-a-club.png)

**J3 Join / buy a membership** — 1 tap, 0 scrolls, about 4 s
- Result: Join Now opens a 3-step flow (Select Club > Choose Membership > Review & Pay); step 1 already asks for personal data.
- What the view offers: Price not on step 1; $350/mo All-Access is shown on club pages. First month free + $0 initiation banner with countdown.
- Commerce vendor: Own join flow (Equinox) + reCAPTCHA · Wallet: Not reached · Guest: Contact details first; no account step seen · First screen: 4 + club select
- Friction: Personal data (name, email, phone, club) is requested before any price is shown. | Marketing-consent copy attached to the step-1 button.
- Works well: 1 tap from the hero; 3-step progress bar visible from the start; HSA/FSA hint.
- Path: Join Now hero CTA > /join/step1 asks personal data first
[16-j3-join-step1.png](equinox/16-j3-join-step1.png)

**J4 Shop / merchandise** — 6 taps, 1 scroll, about 26 s
- Result: Shop is a separate Shopify store (shop.equinox.com), 6 taps from home to checkout.
- What the view offers: 2-column grid, FILTER + SORT BY (46 px), quick-add 24x24, wishlist hearts 16x16, header icons 16x16. Default size XS is pre-selected; ADD TO BAG $195.00 opens a cart drawer with discount code + Checkout.
- Commerce vendor: Shopify (checkout.shopify.com wallets, cdn.shopify.com, shop.app) · Wallet: Shop Pay + Google Pay (Apple Pay not rendered in this host browser) · Guest: Yes · First screen: 11 + discount fields
- Friction: Menu link opens the shop in a new tab. | Tiny controls: header icons and hearts 16x16, quick-add 24x24. | Checkout auto-added a $7.95 "Checkout+ Order Upgrade & Cashback" line. | Checkout asks for Member ID / gift-card conversion fields above the form.
- Works well: Cart drawer after add (no page change). | Express checkout shows Shop Pay + Google Pay; guest checkout (email, optional sign-in).
- Path: menu > The Shop at Equinox > SHOP NOW > product > 1 scroll > ADD TO BAG > Checkout
[17-j4-shop-home.png](equinox/17-j4-shop-home.png)
[19-j4-collection.png](equinox/19-j4-collection.png)
[22-j4-after-add-to-bag.png](equinox/22-j4-after-add-to-bag.png)
[24-j4-checkout-first-screen.png](equinox/24-j4-checkout-first-screen.png)
[26-j4-checkout-express-wallets.png](equinox/26-j4-checkout-express-wallets.png)

### Barry's — OK
URL tested: https://www.barrys.com/ · locale en-US · folder `barrys/`

Note: Wall Street (NYC) studio used. Studio finder, schedule and pricing are iframes of app.barrys.com (Mariana Tek); the merch shop is a separate Shopify store.

**J0 Landing**
- Hero: Full-bleed looping video hero (Webflow CDN mp4), H1 "THE BEST WORKOUT IN THE WORLD" under a Find a Studio search card; hero about 92% of the viewport.
- Primary CTA: Find a Studio (search + Use Current Location)
- Secondary CTA: BOOK YOUR FIRST CLASS (header pill 162x26) / View All Locations
- Nav pattern: Sticky top bar: logo, pill CTA, hamburger (32x32); full-screen overlay menu with 20 px-high links (BOOK YOUR FIRST CLASS, MY ACCOUNT, FIND A BARRY'S, THE WORKOUT, THE LIFESTYLE, BARRY'S X, SHOP).
- Cookie / consent: Cookiebot bottom sheet covers about 60% of the first viewport; Allow all / Allow selection / Deny of equal weight; Deny = 1 tap.
- Popups: Cookie sheet; the shop adds its own cookie sheet and a newsletter popup.
- Load + bytes: DCL 1.7 s, load 5.2 s, FCP 2.2 s, TTFB 0.3 s; 300 requests; resource-timing transfer 0.2 MB (cross-origin hidden), Playwright-counted response bytes about 34 MB (hero video, ad-tech hosts).
- Overflow: No horizontal overflow.
- Tap targets under 44 px: Header pill 26 px tall, hamburger 32x32, "Show details" 24 px.
- Consent taps (not counted in journeys): 3
[01-j0-first-viewport.png](barrys/01-j0-first-viewport.png)
[02-j0-after-consent.png](barrys/02-j0-after-consent.png)
[03-j0-fullpage.png](barrys/03-j0-fullpage.png)

**J1 See today's class schedule** — 4 taps, 1 scroll, 1 typed city, about 18 s
- Result: Reached: Wall Street studio schedule with today (Thu 1 Oct) classes.
- What the view offers: 7-day strip with the muscle focus of each day, cards with time, class, instructor and N SPOTS LEFT; studio tab bar Studio Home / Pricing / The Workout / Lifestyle / Schedule. Tapping a class opens a Book your first class / Returning client gate.
- Friction: Location first: hero search with autocomplete (also Use Current Location), then studio name, then Schedule tab. | Schedule, pricing and finder live in iframes (nested scrolling; the finder iframe is about 15,800 px high). | A tap on a class card does not open the class: it opens an account gate.
- Works well: SPOTS LEFT badge on the card. | Day strip tells what each day trains. | Hero search is on the first screen (no menu needed).
- Path: hero Find a Studio input > type New York > suggestion > studio name (Wall Street) > Schedule tab > 1 scroll
[13-j1c-home.png](barrys/13-j1c-home.png)
[14-j1c-typed.png](barrys/14-j1c-typed.png)
[15-j1c-results.png](barrys/15-j1c-results.png)
[16-j1c-studio-page.png](barrys/16-j1c-studio-page.png)
[18-j1c-schedule-visible.png](barrys/18-j1c-schedule-visible.png)
[19-j1c-class-tap-result.png](barrys/19-j1c-class-tap-result.png)

**J2 One-time / trial / day pass** — 6 taps, 1 scroll, 1 typed city, about 26 s
- Result: Pricing tab shows the first-timer 3-pack ($75, + free shake) and a single class ($43); a pack tap opens "Book your first class / Returning client", then Step 1 of 4 (personal data).
- What the view offers: Prices: first-timer 3 classes $75, 1 class $43, 5 $210, 10 $410, 20 $785, 50 $1,870.
- Commerce vendor: Mariana Tek (barrysbootcamp.marianaiframes.com, app.barrys.com) · Wallet: Not visible before personal-data step · Guest: No (account in step 1) · First screen: 5 text fields + 2 consent boxes
- Friction: Account creation is part of Step 1/4: first name, last name, email, phone, zip + age/residency and SMS-consent boxes. | Pricing is a separate tab of the studio page (1 tap from Schedule); pack info buttons are 24x24.
- Works well: First-timer offer is the first card; prices are in plain USD, no login before them.
- Path: hero Find a Studio input > type New York > suggestion > studio name > Pricing tab > (scroll) pack ($43 single class) > Book your first class = Step 1/4
[20-j2-pricing.png](barrys/20-j2-pricing.png)
[21-j2-pricing-scrolled.png](barrys/21-j2-pricing-scrolled.png)
[22-j2-checkout-start.png](barrys/22-j2-checkout-start.png)
[24-j2-step1-personal-data.png](barrys/24-j2-step1-personal-data.png)

**J3 Join / buy a membership** — 7 taps, 1 scroll, 1 typed city, about 30 s
- Result: Memberships tab: 8 classes/mo $300, 12 $385, 16 $470, 30 $560 (recurring) + Ride-only welcome $295; same gate and Step 1/4 form.
- What the view offers: Same iframe, one tab away from the packs.
- Commerce vendor: Mariana Tek · Wallet: Not visible before personal-data step · Guest: No · First screen: 5 + 2 boxes
- Friction: Same account gate as day pass.
- Works well: Tabs PACKAGES / MEMBERSHIPS (174x48) are large.
- Path: hero search input > type city > suggestion > studio name > Pricing tab > (scroll) MEMBERSHIPS tab > membership > Book your first class = Step 1/4 personal data
[25-j3-memberships-tab.png](barrys/25-j3-memberships-tab.png)
[26-j3-gate.png](barrys/26-j3-gate.png)
[27-j3-step1.png](barrys/27-j3-step1.png)

**J4 Shop / merchandise** — 8 taps, 2 scrolls, about 33 s
- Result: Separate Shopify store (shop.barrys.com), 8 taps incl. terms checkbox; two more taps for the shop's own cookie sheet and newsletter popup.
- What the view offers: Home rail (WOMEN / MEN buttons swap an in-page rail), VIEW ALL PRODUCTS to a 2-column grid with FILTER + SORT BY (43 px) and grid-size toggles; quick-add 32x32; header icons 22x22; carousel dots 6x6.
- Commerce vendor: Shopify (checkout.shopify.com wallets, checkout.pci.shopifyinc.com) · Wallet: Shop Pay + PayPal (no Apple/Google Pay rendered) · Guest: Yes · First screen: 12 + inline card fields (single page)
- Friction: Consent is asked again on the shop domain, plus a newsletter popup with a 16x16 close. | Hero carousel auto-advances: the link under the finger changed between look and tap. | CHECKOUT is silently blocked until a 12x12 returns-policy checkbox is ticked (browser alert, no inline message). | News-and-offers box is pre-ticked at checkout; page localised to IDR/Bali by IP.
- Works well: Cart drawer after add, 319x57 CHECKOUT button. | Express checkout shows Shop Pay + PayPal; guest checkout.
- Path: hamburger > SHOP (separate domain shop.barrys.com) > [cookie Deny + newsletter popup close = 2 extra taps] > scroll > VIEW ALL PRODUCTS > product > size M (scroll) > ADD TO CART > tick returns-policy checkbox > CHECKOUT
[30-j4-menu-open.png](barrys/30-j4-menu-open.png)
[38-j4-shop-home-clean.png](barrys/38-j4-shop-home-clean.png)
[43-j4-shop-grid.png](barrys/43-j4-shop-grid.png)
[48-j4-shop-after-add.png](barrys/48-j4-shop-after-add.png)
[50-j4-shop-checkout-first-screen.png](barrys/50-j4-shop-checkout-first-screen.png)
[51-j4-shop-checkout-express.png](barrys/51-j4-shop-checkout-express.png)

### Solidcore — BLOCKED
URL tested: https://solidcore.co/ · locale en-US · folder `solidcore/`

Note: Every HTML path on solidcore.co and www.solidcore.co returns HTTP 403 from CloudFront ("Request blocked", SIN3 PoP) to this machine, whose IP geolocates to Indonesia (Bali). Only /robots.txt answers 200. No VPN or proxy was used and the block was not worked around.

**J0 Landing**
- Hero: Not reachable: CloudFront 403 error page.
- Primary CTA: -
- Secondary CTA: -
- Nav pattern: -
- Cookie / consent: -
- Popups: -
- Load + bytes: Error page only: DCL 0.4 s, load 0.6 s.
- Overflow: No overflow on the error page.
- Tap targets under 44 px: -
- Consent taps (not counted in journeys): 0
[01-j0-first-viewport.png](solidcore/01-j0-first-viewport.png)

**J1 See today's class schedule** — blocked (403)
- Result: Blocked (403).
- Friction: Site not reachable from this location.
- Path: not reachable: site returns 403 from this location

**J2 One-time / trial / day pass** — blocked (403)
- Result: Blocked (403).
- Path: not reachable: site returns 403 from this location

**J3 Join / buy a membership** — blocked (403)
- Result: Blocked (403).
- Path: not reachable: site returns 403 from this location

**J4 Shop / merchandise** — blocked (403)
- Result: shop.solidcore.co redirects to /password: Shopify storefront locked ("Shop is going under maintenance"), email signup only.
- Commerce vendor: Shopify (password page) · Wallet: - · Guest: - · First screen: -
- Friction: Merch shop closed.
- Path: not reachable: site returns 403 from this location
[02-j4-shop-password-page.png](solidcore/02-j4-shop-password-page.png)

### SoulCycle — OK (domain note)
URL tested: https://www.soul-cycle.com/ · locale en-US · folder `soulcycle/`

Note: soulcycle.com now serves a Dutch BMX web shop (screenshot 00-wrong-domain...). The fitness brand is at soul-cycle.com, used for all journeys. NYC 19th Street studio used.

**J0 Landing**
- Hero: Rotating hero carousel (arrows 29x33): "Welcome to SOUL, two weeks of unlimited rides for $50" with Get Started (128x48).
- Primary CTA: Book a Bike (header pill 136x40) / Get Started
- Secondary CTA: NYC location chip in the bottom bar
- Nav pattern: Sticky top bar: hamburger (56x56), logo, Book a Bike pill; full-screen menu with accordions (rows 48 px). Sticky bottom bar (115 px: NYC chip + Book a Bike) covers the lowest 14% of every screen.
- Cookie / consent: No consent banner shown to this Indonesian IP; analytics/ad trackers (GA, TikTok, Snap, Clarity, mParticle, Optimizely, Braze) fire without a consent step.
- Popups: None.
- Load + bytes: DCL 2.9 s, load 9.9 s (slowest), FCP 2.2 s, TTFB 1.8 s; 228 requests; resource-timing transfer 0.16 MB, Playwright-counted response bytes 17.7 MB.
- Overflow: No horizontal overflow.
- Tap targets under 44 px: Hero arrows 29x33.
- Consent taps (not counted in journeys): 0
[00-wrong-domain-soulcycle-com-is-a-bmx-shop.png](soulcycle/00-wrong-domain-soulcycle-com-is-a-bmx-shop.png)
[01-j0-first-viewport.png](soulcycle/01-j0-first-viewport.png)
[02-j0-fullpage.png](soulcycle/02-j0-fullpage.png)

**J1 See today's class schedule** — 2 taps, 0 scrolls, about 9 s
- Result: Reached: 19th Street studio page lists the next ~10 classes (Thu 1 Oct 7:00 AM ...) with Reserve buttons.
- What the view offers: Studio cards (NYC preselected), studio page: date/time, class name, instructor, Reserve (75x30). "view full schedule" opens a weekly list with a day strip. No spots-left. Reserve opens /signin (email + password, Google, Apple, New To Soul?).
- Friction: Studio must be chosen (NYC preselected, 10+ studio cards, map above the list). | Reserve forces sign-in; the class list is the only public step.
- Works well: 2 taps and 0 scrolls: Book a Bike > studio card > next classes already in the first viewport. | Sticky Book a Bike bar is always in reach.
- Path: Book a Bike (header pill) > studio card (NYC preselected) > Upcoming Classes block already in first viewport; View full schedule = +1 tap (weekly list)
[03-j1-book-a-bike.png](soulcycle/03-j1-book-a-bike.png)
[04-j1-studio-19th.png](soulcycle/04-j1-studio-19th.png)
[05-j1-full-schedule.png](soulcycle/05-j1-full-schedule.png)
[07-j1-reserve-result.png](soulcycle/07-j1-reserve-result.png)

**J2 One-time / trial / day pass** — 4 taps, 0 scrolls, about 19 s
- Result: First-time rider offers page 1 tap from the hero: 1 class $25, 2 weeks unlimited $89 > $50 (recommended), 3 classes $60. One tap on a card adds it to the bag ($25 + $1.13 tax); Go to Purchase > Checkout lands on a sign-in / create-account wall.
- What the view offers: Cards are 359x146-170 px; note "You aren't booked into class until you select a bike".
- Commerce vendor: Own platform on soul-cycle.com (no third-party checkout host) · Wallet: None (Google / Apple only as sign-in) · Guest: No · First screen: 2 (sign in) or create-account form
- Friction: Forced account before payment: /checkout/landing = Sign In (email, password) or Create an Account. | "Go to Purchase" then "Checkout" are two consecutive buttons for one step.
- Works well: Offer, validity and price on one screen; 1 tap puts it in the bag with tax shown.
- Path: Get Started (home hero) > 1-class $25 card (adds to bag) > Go to Purchase > Checkout = sign-in / create-account wall
[08-j2-get-started.png](soulcycle/08-j2-get-started.png)
[09-j2-after-pack-tap.png](soulcycle/09-j2-after-pack-tap.png)
[10-j2-go-to-purchase.png](soulcycle/10-j2-go-to-purchase.png)
[11-j2-checkout-landing.png](soulcycle/11-j2-checkout-landing.png)

**J3 Join / buy a membership** — 5 taps, 2 scrolls, about 26 s
- Result: /series lists Soul Renew recurring memberships: 4 classes $134, 8 $259, 12 $374, 16 $481, plus packs, student packs and gift cards; membership tile adds to bag, then the same sign-in wall.
- What the view offers: Purchase classes for NYC; sections MEMBERSHIPS / CLASS PACKS / GIFT CARDS; recurring-payment note on every tile.
- Commerce vendor: Own platform · Wallet: None · Guest: No · First screen: 2 / create-account
- Friction: View all Offers is below the fold on the offers page (scroll needed). | Same account wall.
- Works well: Tiles are full-width cards; auto-refill explained in one line.
- Path: Get Started > scroll > View all Offers (/series) > scroll > membership tile (Soul Renew 4/8/12/16 classes, recurring, adds to bag) > Go to Purchase > Checkout = sign-in / create-account wall
[14-j3-all-offers-series-page.png](soulcycle/14-j3-all-offers-series-page.png)
[16-j3-memberships-list.png](soulcycle/16-j3-memberships-list.png)
[17-j3-after-membership-tap.png](soulcycle/17-j3-after-membership-tap.png)

**J4 Shop / merchandise** — 6 taps, 1 scroll, about 29 s
- Result: Separate Shopify store (shop.soul-cycle.com), 6 taps + 1 scroll to checkout.
- What the view offers: Hero banner then product tiles in a horizontal rail; product gallery takes about 660 px before size + ADD TO CART; size chips 36x36; cart drawer with CHECK OUT 44 px, Is this a gift?, Estimate shipping.
- Commerce vendor: Shopify (checkout.shopify.com wallets, checkout.pci.shopifyinc.com) · Wallet: Google Pay confirmed (second wallet frame empty in this browser) · Guest: Yes · First screen: 11 + inline card fields
- Friction: Header icons are 24x60 strips; drawer quantity buttons 7x7. | Add to cart is below a 660 px gallery.
- Works well: No cookie banner or popup on the shop. | Express checkout with Google Pay; guest checkout.
- Path: hamburger > Shop Collection (separate domain shop.soul-cycle.com) > product tile > (scroll past gallery) size > ADD TO CART > CHECK OUT
[18-j4-menu.png](soulcycle/18-j4-menu.png)
[19-j4-shop-home.png](soulcycle/19-j4-shop-home.png)
[20-j4-shop-product.png](soulcycle/20-j4-shop-product.png)
[22-j4-shop-cart-drawer.png](soulcycle/22-j4-shop-cart-drawer.png)
[23-j4-shop-checkout.png](soulcycle/23-j4-shop-checkout.png)

### Third Space — OK
URL tested: https://www.thirdspace.london/ · locale en-GB · folder `thirdspace/`

Note: Run with en-GB locale, Europe/London time zone. Clapham Junction was the preselected club.

**J0 Landing**
- Hero: Static image hero ("Training for life"), no video. The FIND YOUR CLUB / BECOME A MEMBER buttons sit about 1,280 px down the page, below the fold.
- Primary CTA: JOIN US (header pill 78x32, opens an enquiry modal)
- Secondary CTA: none above the fold
- Nav pattern: Top bar: text MENU control (117x15, a div), centred logo, JOIN US pill; slide-in menu with + accordions (submenu links 18 px high).
- Cookie / consent: CookieYes centred modal with dim overlay: Accept All / Customise only (no Reject). Least-tracking path = Customise > Save My Preferences (all toggles off) = 2 taps.
- Popups: Cookie modal, then a timed enquiry popup after consent (Name/Email/Phone/Club, close 28x28).
- Load + bytes: DCL 1.8 s, load 3.8 s, FCP 1.5 s, TTFB 0.05 s; 156 requests; resource-timing transfer 0.8 MB, Playwright-counted response bytes 5.5 MB.
- Overflow: No horizontal overflow.
- Tap targets under 44 px: MENU 15 px high, JOIN US 32 px, modal close 28x28, submenu links 18 px, consent icon 30x30.
- Consent taps (not counted in journeys): 3
[01-j0-first-viewport.png](thirdspace/01-j0-first-viewport.png)
[02-j0-cookie-customise.png](thirdspace/02-j0-cookie-customise.png)
[04-j0-fullpage.png](thirdspace/04-j0-fullpage.png)
[05-j0-timed-enquiry-popup.png](thirdspace/05-j0-timed-enquiry-popup.png)

**J1 See today's class schedule** — 3 taps, 1 scroll, about 14 s
- Result: Reached: /timetable/ with today's classes (Clapham Junction preselected).
- What the view offers: Club dropdown, TYPES filter, TODAY button, day strip (01 THU, 02 FRI ...), rows with class, time range, instructor, duration. No spots left, no book button; rows are not tappable (booking is in the member app).
- Friction: MENU is a 15 px-high text control; submenu needs an extra accordion tap (CLASSES +); TIMETABLE link is 18 px high. | Timed enquiry popup after consent. | Rows do nothing when tapped.
- Works well: No login or location wall; default club and today are shown at once.
- Path: MENU (15px-high text control) > CLASSES + (accordion) > TIMETABLE (18px-high link) > 1 scroll to first classes
[08-j1-menu.png](thirdspace/08-j1-menu.png)
[10-j1-menu-classes.png](thirdspace/10-j1-menu-classes.png)
[11-j1-timetable.png](thirdspace/11-j1-timetable.png)
[12-j1-timetable-scrolled.png](thirdspace/12-j1-timetable-scrolled.png)

**J2 One-time / trial / day pass** — not available
- Result: No online day pass or drop-in. Guest passes are bought at the club concierge (FAQ). Closest: JOIN US pill (1 tap) = enquiry form with a Book a tour link.
- What the view offers: Form: name, email, phone, club, other club, personal-training and comms checkboxes.
- Commerce vendor: HubSpot form (class hs-input); no checkout · Wallet: None · Guest: n/a · First screen: 4 + other-club select + 2 boxes
- Friction: No product to buy online.
- Works well: JOIN US is in the header on every page.
- Path: No online day pass or drop-in. Guest passes are bought at the club concierge (FAQ). Closest: JOIN US header pill (1 tap) opens an enquiry form with Book a tour link
[15-j2-join-us-modal.png](thirdspace/15-j2-join-us-modal.png)

**J3 Join / buy a membership** — 2 taps, 7 scrolls, about 17 s
- Result: No online membership purchase. Price only inside an FAQ accordion: from £257/mo individual, £299 group, £345 group plus. Join = enquiry form or Book a tour.
- What the view offers: Membership page has Benefits / Clubs & Rates / FAQ / Enquire anchors but no £ figure in the page body.
- Commerce vendor: HubSpot form; no checkout · Wallet: None · Guest: n/a · First screen: Name, email, phone, club
- Friction: Rates hidden in the 1st FAQ item, about 5 scrolls down.
- Works well: Enquiry form repeated at the bottom of the page.
- Path: scroll to BECOME A MEMBER (hero CTA sits ~1,280 px down) > /membership (no price) > scroll to FAQ > How much is a membership? = from £257/mo individual, £299 group, £345 group plus; no online purchase, only enquiry (Name, Email, Phone, Club)
[16-j3-become-a-member.png](thirdspace/16-j3-become-a-member.png)
[19-j3-faq-price.png](thirdspace/19-j3-faq-price.png)
[20-j3-faq-guest-pass.png](thirdspace/20-j3-faq-guest-pass.png)

**J4 Shop / merchandise** — not available
- Result: No shop or merchandise link in header, menu or footer.
- Path: No shop or merchandise found: no shop/store/merch/buy link in header, menu or footer of the homepage

### 1Rebel — OK
URL tested: https://www.1rebel.com/ · locale en-GB · folder `1rebel/`

Note: Run with en-GB locale, Europe/London time zone. The root URL is a country splash (UK / UAE); journeys continue on /en-gb.

**J0 Landing**
- Hero: First viewport = country splash "CHOOSE LOCATION: UNITED KINGDOM / UNITED ARAB EMIRATES" with two VISIT SITE buttons (129x33) and no other content. UK home: price banner, autoplay muted looping video hero with a rotating campaign CTA (ENROL NOW 120x33, which opens an email subscription form, or BOOK NOW 110x33).
- Primary CTA: VISIT SITE (country), then banner "NEW TO 1REBEL? GET 5 SESSIONS FOR £59"
- Secondary CTA: ENROL NOW / BOOK NOW, VIEW ALL events
- Nav pattern: Top bar: menu (34x34), logo, Sign in (34x34); full-screen text menu WORKOUTS / CLUBS / TRAINERS / EVENTS / BUY / BOOK / SHOP (links 22 px high).
- Cookie / consent: Cookiebot bottom sheet covers about 59% of the splash; Allow all / Deny of equal weight; Deny = 1 tap.
- Popups: Cookie sheet only.
- Load + bytes: Splash: DCL 0.6 s, load 0.8 s, 98 requests, 2.2 MB. UK home direct load: DCL 1.8 s, load 2.0 s, FCP 1.6 s, TTFB 0.13 s, 188 requests, resource-timing transfer 2.2 MB, Playwright-counted bytes 10.3 MB.
- Overflow: No horizontal overflow.
- Tap targets under 44 px: Banner 32 px, menu/sign-in 34x34, VISIT SITE / ENROL NOW 33 px, menu links 22 px, carousel dots 60x2.
- Consent taps (not counted in journeys): 1
[01-j0-first-viewport.png](1rebel/01-j0-first-viewport.png)
[02-j0-after-consent.png](1rebel/02-j0-after-consent.png)
[21-j0-uk-home-first-viewport.png](1rebel/21-j0-uk-home-first-viewport.png)
[22-j0-uk-home-fullpage.png](1rebel/22-j0-uk-home-fullpage.png)

**J1 See today's class schedule** — 3 taps, 1 scroll, about 9 s
- Result: Reached: /en-gb/reserve with class rows (06:00 BROADGATE RESHAPE ...).
- What the view offers: Filters ALL CLUBS / ALL CONCEPTS / ALL TRAINERS + FIND CLASS, long day strip (30 days), MORNING / AFTERNOON / EVENING chips, rows with time, club, class, trainer and BOOK NOW (104x33). No spots-left. BOOK NOW opens /auth/signin.
- Friction: Country splash is a mandatory first tap with no content. | Menu links 22 px high. | Banner text is repeated 24 times in the DOM. | BOOK NOW goes to sign-in / create account.
- Works well: Default scope is ALL CLUBS: no location pick needed. | Time-of-day chips and trainer filter. | Sticky price banner (5 sessions for £59) on every page.
- Path: VISIT SITE (country splash UK/UAE) > menu > BOOK (/reserve) > 1 scroll to class rows
[05-j1-menu.png](1rebel/05-j1-menu.png)
[06-j1-reserve.png](1rebel/06-j1-reserve.png)
[07-j1-reserve-scrolled.png](1rebel/07-j1-reserve-scrolled.png)
[08-j1-book-now.png](1rebel/08-j1-book-now.png)

**J2 One-time / trial / day pass** — 3 taps, 1 scroll, about 9 s
- Result: Banner tap > /buy: first-timer package 5 sessions, 14-day expiry, £59 (£11.80 per session, can be used at any location). BUY redirects to /auth/signin; Create account is a 15-field form.
- What the view offers: Tabs PROMOS / ALL-ACCESS MEMBERSHIPS / HOME CLUB MEMBERSHIPS / PACKAGES.
- Commerce vendor: Mariana Tek (1rebel.marianatek.com) behind own account system · Wallet: Not reached · Guest: No · First screen: 15 inputs + 3 checkboxes (create account)
- Friction: BUY sits about 500 px below the tabs (1 scroll). | Forced account before any checkout; create-account asks address, DOB, preferred location.
- Works well: Per-session price and expiry shown on the offer card.
- Path: VISIT SITE (UK) > top banner NEW TO 1REBEL? 5 SESSIONS FOR £59 (/buy) > scroll > BUY on first-timer card > /auth/signin (Sign in / Create account); Create account first screen = 15 fields + 3 checkboxes
[09-j2-buy.png](1rebel/09-j2-buy.png)
[10-j2-buy-scrolled.png](1rebel/10-j2-buy-scrolled.png)
[11-j2-after-buy.png](1rebel/11-j2-after-buy.png)
[13-j2-create-account-first-screen.png](1rebel/13-j2-create-account-first-screen.png)

**J3 Join / buy a membership** — 4 taps, 3 scrolls, about 14 s
- Result: ALL-ACCESS MEMBERSHIPS tab: unlimited £229/mo (31 sessions, 6-month minimum, 1 guest pass/month), 12 sessions £175, 8 £135, 4 £75; code ALLACCESS50 = 50% off first month; BUY leads to sign-in.
- What the view offers: Per-session price printed on each tier; Home-club and Packages tabs.
- Commerce vendor: Mariana Tek · Wallet: Not reached · Guest: No · First screen: create account as above
- Friction: 3 scrolls to the tiers. | Account wall.
- Works well: Commitment, guest pass and per-session cost stated on the tier card.
- Path: VISIT SITE (UK) > top banner (/buy) > ALL-ACCESS MEMBERSHIPS tab > 3 scrolls > BUY > /auth/signin wall
[14-j3-all-access.png](1rebel/14-j3-all-access.png)
[15-j3-membership-cards.png](1rebel/15-j3-membership-cards.png)

**J4 Shop / merchandise** — 7 taps, 1 scroll, about 20 s
- Result: Separate Shopify store (shop.1rebel.com), 7 taps incl. country splash.
- What the view offers: Hero BUY NOW to a protein collection, 2-column grid, FILTER + SORT BY (42 px), grid-size toggles 18x42, header icons 22x22, quantity buttons 43x43, CHECKOUT 333x79.
- Commerce vendor: Shopify (checkout.shopify.com wallets) · Wallet: Google Pay · Guest: Yes · First screen: about 10 + inline card fields
- Friction: Prices and checkout switched to IDR / en-id by IP although the UK site was chosen.
- Works well: ADD TO CART visible at the fold edge; big CHECKOUT button; Google Pay + guest checkout.
- Path: VISIT SITE (UK) > menu > SHOP (shop.1rebel.com) > BUY NOW (protein collection) > product > (scroll) ADD TO CART > CHECKOUT
[16-j4-shop-home.png](1rebel/16-j4-shop-home.png)
[17-j4-shop-collection.png](1rebel/17-j4-shop-collection.png)
[18-j4-shop-product.png](1rebel/18-j4-shop-product.png)
[19-j4-shop-cart.png](1rebel/19-j4-shop-cart.png)
[20-j4-shop-checkout.png](1rebel/20-j4-shop-checkout.png)

### Gymbox — OK (tool caveats)
URL tested: https://gymbox.com/ · locale en-GB · folder `gymbox/`

Note: www.gymbox.com redirects to gymbox.com. Run with en-GB locale, Europe/London time zone. Cloudflare "Performing security verification" appeared on repeat homepage loads in one session (screenshots 13, 14, 18); a fresh browser context passed. The Playwright WebKit host crashed twice (EXC_BREAKPOINT) when menu links on the homepage were tapped, so /class/ was opened by URL and that hop is counted as 1 tap by equivalence.

**J0 Landing**
- Hero: H1 "NOTHIN' LIKE IT", "50% OFF YOUR FIRST SEVEN MONTHS", two stacked buttons UNLOCK THE DEAL and FREE TRIAL (300x38).
- Primary CTA: JOIN NOW (header pill 191x40) / UNLOCK THE DEAL
- Secondary CTA: FREE TRIAL (hero 300x38)
- Nav pattern: Sticky top bar: logo (36x36), JOIN NOW pill, hamburger (38x38, Elementor) opening a dropdown of 9 links of 40 px each (GYMS ... FREE TRIAL, JOIN NOW).
- Cookie / consent: Cookiebot centred dialog (541 px tall, 64% of the viewport) with Consent/Details/About tabs; Allow all / Customize / Deny of equal weight; Deny = 1 tap; 14x14 close icon.
- Popups: Cookie dialog only.
- Load + bytes: DCL 2.9 s, load 6.3 s, FCP 2.5 s; 218 requests; resource-timing transfer 3.2 MB; Playwright-counted bytes 7.5 MB.
- Overflow: No horizontal overflow.
- Tap targets under 44 px: Logo 36x36, hamburger 38x38, banner close 14x14.
- Consent taps (not counted in journeys): 1
[01-j0-first-viewport.png](gymbox/01-j0-first-viewport.png)
[02-j0-after-consent.png](gymbox/02-j0-after-consent.png)
[03-j0-fullpage.png](gymbox/03-j0-fullpage.png)

**J1 See today's class schedule** — 4 taps, 1 scroll, about 13 s
- Result: Reached: find-a-class.gymbox.com timetable for Gymbox Bank, today Thu 1 Oct.
- What the view offers: Today chip, 14-day strip (TH 1 ... WE 14), 24 hour chips 00:00-23:00 (64x41), rows with time, duration, class, club and an arrow; a row tap opens a dialog with description and Apple / Google app links (no web booking, no spots).
- Friction: Menu has no Timetable item: path is menu > CLASSES > VIEW SCHEDULE (popup) > club. | /class/ is a 37,840 px-high page. | Club must be picked from a 10-club popup; timetable is a separate host (find-a-class.gymbox.com). | Cloudflare check on repeat loads; WebKit host crash on menu-link taps.
- Works well: Timetable opens on today with durations; hour chips jump to a time.
- Path: menu > CLASSES (/class/) > VIEW SCHEDULE (opens TIMETABLES popup) > club (e.g. BANK) = find-a-class.gymbox.com list for today > 1 scroll past the day/hour chips to the class rows
[04-j1-menu.png](gymbox/04-j1-menu.png)
[07-j1-classes-page.png](gymbox/07-j1-classes-page.png)
[08-j1-view-schedule-popup.png](gymbox/08-j1-view-schedule-popup.png)
[09-j1-timetable-bank.png](gymbox/09-j1-timetable-bank.png)
[12-j1-class-row-tap.png](gymbox/12-j1-class-row-tap.png)

**J2 One-time / trial / day pass** — 3 taps, 0 scrolls, about 9 s
- Result: FREE TRIAL (hero) > club card (map + list) > FREE TRIAL in club modal > booking form: day + start time, then details. Summary shows "Trial training £25 > £0". No payment, no account.
- What the view offers: Two-step form (1 pick time slot, 2 enter details); club modal lists facilities.
- Commerce vendor: Own booking app on free-trial.gymbox.com (Magicline back end), Contentful, reCAPTCHA · Wallet: None (free, no payment) · Guest: Yes · First screen: about 9 fields + 3 boxes
- Friction: Club must be picked first (map markers 26x38). | Form asks gender, first/last name, date of birth, country code, mobile, email, postcode + 3 consent boxes.
- Works well: Guest booking with no account; free trial priced as £25 > £0 in the summary; 3 taps from the hero.
- Path: hero FREE TRIAL (free-trial.gymbox.com) > club card (map + list of 10) > FREE TRIAL in club modal > booking form (pick day/start time + personal details) = first screen with personal data; plus 1 consent tap
[15-j2-free-trial.png](gymbox/15-j2-free-trial.png)
[16-j2-free-trial-after-club.png](gymbox/16-j2-free-trial-after-club.png)
[17-j2-free-trial-step2.png](gymbox/17-j2-free-trial-step2.png)
[13-j2-cloudflare-challenge-repeat-load.png](gymbox/13-j2-cloudflare-challenge-repeat-load.png)

**J3 Join / buy a membership** — 4 taps, 0 scrolls, about 12 s
- Result: JOIN NOW > club cards with from-prices (Bank £95 > £47.50, Holborn £82 > £41; 50% off first 7 months) > club modal JOIN NOW > plan stepper (type, access level, billing, 12-month plan) > step 4 "Your details". Payment (step 5) not reached.
- What the view offers: 5-step stepper: Club > Membership > Duration > Your details > Payment; Headline / Student / Corporate; All gyms / Single gym; Monthly / Upfront; voucher GYMBOX EXTRA auto-applied; payment method BACS in the URL.
- Commerce vendor: Own join app on join-now.gymbox.com (Magicline back end), Contentful, reCAPTCHA · Wallet: Unknown (payment step not reached) · Guest: Yes · First screen: step 4: 7 fields + consents
- Friction: Plan cards are clickable divs, not links. | Promo label repeats 20 times in the DOM. | Club modal needs its own tap.
- Works well: Price per club on the card before any data; guest flow, no account; progress stepper.
- Path: header JOIN NOW (join-now.gymbox.com) > club card (price shown on every card: from £95 -> £47.50) > JOIN NOW in club modal > (page auto-scrolls to plan section) 12 MONTHS plan card (headline / access level / billing preselected via URL) > step 4 Your details = personal data; plus 1 consent tap
[19-j3-join-now.png](gymbox/19-j3-join-now.png)
[20-j3-after-club.png](gymbox/20-j3-after-club.png)
[21-j3-plans.png](gymbox/21-j3-plans.png)
[22-j3-after-plan.png](gymbox/22-j3-after-plan.png)

**J4 Shop / merchandise** — not available
- Result: No merchandise shop. Footer link Out the Box (outthebox.gymbox.com) is an online-class subscription site powered by Uscreen; not walked further.
- Commerce vendor: Uscreen (Out the Box) · Wallet: - · Guest: - · First screen: -
- Path: No merchandise or product shop. Footer link Out the Box (outthebox.gymbox.com) is an online-class subscription site powered by Uscreen; not walked further.
[23-j4-out-the-box.png](gymbox/23-j4-out-the-box.png)

## Cross-site synthesis

1. Fast schedule = one persistent Book CTA plus a schedule that renders right under the location: SoulCycle needs 2 taps and 0 scrolls (studio page lists the next ~10 classes with Reserve); Barry's 4 taps (hero search > studio > Schedule tab) with spots-left badges; 1Rebel and Third Space open a default scope (all clubs / preselected club) after 3 taps.

2. Location is the main schedule cost: Equinox needs 5 taps + 11 scrolls (117 clubs, 43 in New York). Defaults (NYC preselected, ALL CLUBS, Clapham Junction) remove it.

3. Pass purchase starts fast when the first-timer offer sits on one screen with price and validity: SoulCycle $25 / $50 / $60 is 1 tap from the hero, 1Rebel £59 is 1 tap from the banner, Barry's $75 3-pack is the first pricing card, Gymbox free trial shows £25 > £0.

4. Price at the point of choice works (Gymbox from-price on every club card, 1Rebel per-session price); price hidden in an FAQ (Third Space) or only after step 2 (Equinox) does not.

5. Account walls come before any payment screen at SoulCycle, 1Rebel and Barry's (1Rebel create-account = 15 fields); only Gymbox lets a guest reach the details step (trial form about 9 fields, join step 4).

6. Wallet buttons (Shop Pay, Google Pay, PayPal) appeared only in the Shopify merch checkouts, never in the class / membership funnels before the account step; Apple Pay could not be shown by this desktop-host WebKit.

7. Every merch shop is a separate Shopify domain with its own consent prompt (Barry's also a newsletter popup), 16-24 px icons and a cart drawer; the class funnels and the shops run on different domains and carts.

8. Anti-patterns measured: country splash with no content (1Rebel); consent sheets over 40-64% of the first viewport (Equinox, Barry's, 1Rebel, Gymbox); timed enquiry popup after consent (Third Space); targets under 44 px (Third Space MENU 15 px, SoulCycle shop quantity 7x7, Barry's header pill 26 px, shop icons 16-22 px).

9. More anti-patterns: schedule rows that do nothing (Equinox, Third Space); iframes inside the page (Barry's finder 15,800 px high); carousels that move the tap target (Barry's shop); pre-ticked marketing box (Barry's shop) and pre-added $7.95 upsell (Equinox shop); Cloudflare challenge on repeat loads (Gymbox); 37,840 px-high class page (Gymbox).

10. Page weight: Barry's about 34 MB (hero video + ad tech), SoulCycle 17.7 MB with a 9.9 s load, Equinox 3.7 MB; 1Rebel UK home 2.0 s load.

11. Best to copy for (a) SCHEDULE ACCESS: SoulCycle (2 taps, classes on the studio page), Barry's (spots-left + day focus strip), 1Rebel (default all clubs + time-of-day chips).

12. Best to copy for (b) PASS PURCHASE: SoulCycle (offer + price + validity on one screen, add-to-bag in 1 tap), Gymbox (guest free trial, no account, 3 taps), 1Rebel (£59 offer with per-session price and tier table).

13. Best to copy for (c) MOBILE NAV: SoulCycle (persistent bottom bar with location + Book, 48 px menu rows), Gymbox (40 px JOIN NOW pill + 40 px dropdown rows), Equinox (sticky header CTA + sticky bottom bar, 38 px rows).

14. Not benchmarked: Solidcore (HTTP 403 from this location, shop closed behind a Shopify password page).

## Change log

- v1.0 — 2026-10-01: first release. Seven sites walked with Playwright 1.63 WebKit (iPhone 14 profile, 390x844 @2x, real taps); Solidcore blocked (403 from this IP); SoulCycle run on soul-cycle.com; Gymbox schedule hop by URL after two WebKit host crashes.
