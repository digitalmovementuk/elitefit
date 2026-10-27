> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

Version: v1.0 — 2026-10-01

# Mobile customer journey benchmark, batch B

Elite Fit Bali: homepage that sells day passes and memberships through a connected shop and shows the class schedule fast, phone first. Evidence only: facts, counts, screenshots. Sites: Remedy Place, Othership, The Well, Life Time, Gymshark, Hyrox.

## Status

| Site | Status | Note |
|---|---|---|
| Remedy Place | done | Journeys J0 to J4 captured. J0 content counts (headings, video) and Playwright byte total still to be re-captured. |
| Othership | done | Journeys J0 to J4 captured. |
| Life Time | done | Journeys J0 to J4 captured. J4 stopped at the quick-add modal (cart still empty). |
| Gymshark | partial | J0 captured; J1 (no schedule on the site) and J4 (shop, up to add-to-bag) captured. J3 and the checkout screen of J4 pending (one page load timed out; not re-run in this pass). |
| Hyrox | partial | J0 captured plus a link scan of the page. Journeys J1 to J4 not run: the first menu tap timed out while the consent sheet covered the header and was not re-tried in this pass. |
| The Well | blocked | Blocked: thewell.com is not a wellness club (see below). No journeys run. |

## Method

- Real WebKit (Playwright 1.63), iPhone 14 class profile: 390x844 CSS px, DPR 2, isMobile, hasTouch, en-US. All interactions are real touch taps (locator.tap / touchscreen.tap); scrolls are scripted 500-700 px swipes and counted.
- Run on 2026-10-01, one browser at a time. Results are location-dependent: IP geolocation put the Life Time club list in Minnesota and the Othership shop in CAD. Cookie banners: least-tracking option (Reject / Decline / close).
- "Taps" = taps from the homepage after consent is dealt with (consent taps are listed under J0). "Seconds" are scripted wall-clock including 1.8 to 10 s settle waits after each tap: read them as an upper bound, not as user time.
- Transfer figures: resource timing under-reports cross-origin assets (the count without size is given), so the Playwright response sizes (headers + body) are given beside it. Both are best effort.
- Hard stops: no account, no personal data, no card, no form submitted. Wallet buttons are read from the DOM and payment frames; an automated WebKit has no Apple Pay wallet, so Apple Pay can be "not verifiable" even where it exists.
- The permission system refused one tap (Remedy Place "RESERVE", a slot hold). It was not retried; that journey stops one tap before.
- Screenshots: 2x PNG per step (780 px wide); full-page captures are 1x, 390 px wide, capped at 12000 px.

---

## Remedy Place (https://www.remedyplace.com)

**Status: done.** Journeys J0 to J4 captured. J0 content counts (headings, video) and Playwright byte total still to be re-captured.

Social wellness club (ice bath, sauna suites, hyperbaric, IV). Marketing site on Sanity; booking on Zenoti; shop on Shopify.

**Vendors:** Booking, passes, memberships: Zenoti webstore (remedyplace.zenoti.com, apiamrs14.zenoti.com), payments host FreedomPay (hpc.freedompay.com), Google reCAPTCHA. Shop: Shopify (remedyplace.myshopify.com + checkout.shopify.com). Consent: Termly. CMS images: cdn.sanity.io.

### J0 Landing

- Hero and CTAs: Full-bleed image/video hero, H1 "SELF-CARE MADE SOCIAL"; centered 260x59 button "RESERVATIONS" (single CTA, no secondary). Next block is a long manifesto paragraph.
- Navigation: Hamburger (36x36) top right + logo (38x30) top left; full-screen menu: Locations, Our Offerings, Memberships, Events, About, Shop, Book. No sticky CTA, no bottom bar.
- Load signals: DOMContentLoaded 0.5 to 3.0 s across five runs (0.74 s in the final run), load event 6.0 to 7.4 s, 676 KB by resource timing (29 of 55 resources without size). Page height 13,190 px.
- Horizontal overflow: None (scrollWidth 390 = viewport).
- Consent: Termly bottom sheet: Preferences / Decline / Accept, 60 px high buttons, covers the lower third of the first viewport and the manifesto text behind it. Decline = 1 tap.
- Popups: None seen.
- Small tap targets: 4 of 8 interactive elements in the first viewport are under 44 px: cookie links 68x11 and 60x11, logo 38x30, hamburger 36x36.
- Works well: Single, large, unambiguous CTA; calm hero; consent buttons are big.
- Screenshots: first viewport `remedy-place/01-J0-first-viewport-before-consent.png`, full page `remedy-place/03-J0-fullpage.png` (13195 px tall, capture capped at 12000)

### J1 See class / session schedule

- Taps: **4**, scrolls: **0**, scripted time about 24.1 s (includes settle waits)
- Route: Hamburger > BOOK > "Select a club" modal (Boston, Flatiron, SoHo, West Hollywood) > Zenoti app (opens on remedies list) > CLASSES link at top > classes page.
- What it offers: Day strip for 7 days (Sun 27 Sep to Sat 3 Oct; cells 37x76, arrows 13x56), Instructor and Classes filters, calendar icon, Change Club link. Result this week: "No Classes are available for booking." Same message at Boston, SoHo and West Hollywood (opened by URL; SoHo has no Classes link). Times appear only inside the remedy booking flow (see J2: month calendar then 15-minute slots from 9:15 AM).
- Friction:
  - Club must be picked first (tap 3).
  - Zenoti app is slow: first tap timed out in several runs, 8 to 20 s between taps.
  - The classes schedule is empty for the whole week at all four clubs.
  - Zenoti nav is a desktop-style stack of 14 px high text links; reCAPTCHA badge sits over the lower right corner.
  - Day cells 37 px and arrows 13 px wide, under 44 px.
- Works well:
  - "Select a club" modal is four full-width 233x80 buttons: no search, no map, one tap.
- Screenshots: `remedy-place/04-J1-menu.png`, `remedy-place/05-J1-book.png`, `remedy-place/06-J1-pick-club-flatiron.png`, `remedy-place/07-J1-classes.png`

### J2 Buy a one-time / day pass

- Taps: **7**, scrolls: **0**, scripted time about 32.3 s (includes settle waits)
- Route: Hamburger > BOOK > club (Flatiron) > DAY PASSES tab > tick "Day Pass" (24x24) > date in inline month calendar (cells 30x29) > time in inline list (15-min slots, scroll list) > RESERVE (320x50) appears.
- What it offers: Day Pass $350.00, 165 min, shown right-aligned on the card with a four-stage description (cryotherapy, hyperbaric, lymphatic compression, red light). A "Post Workout Day Pass" is listed below. Party size select ("just me / 2-5 guests"), "Add another remedy".
- Checkout: Not reached (stopped one tap before). Vendor evidence only: Zenoti + FreedomPay host loaded.
- Friction:
  - 7 taps before the commit button exists; RESERVE is the 8th tap and was NOT tapped (permission system refused: it holds a slot).
  - Club must be chosen before any price is seen.
  - Tab, checkbox, date and time targets are small (24x24, 30x29).
  - Zenoti shows "Hi Guest! Sign in to access member benefits" above the list; whether guest checkout works could not be verified.
- Works well:
  - Date and time pick happen inline on the same page: no page change between choosing the pass and choosing the slot.
  - Day pass is explained as a sequence, with price and duration on the card.
- Screenshots: `remedy-place/28-J2-menu.png`, `remedy-place/29-J2-book.png`, `remedy-place/30-J2-pick-club-flatiron.png`, `remedy-place/31-J2-tab-day-passes.png`, `remedy-place/32-J2-select-day-pass.png`, `remedy-place/33-J2-pick-date-fri-2-oct.png`, `remedy-place/34-J2-pick-time-9-15.png`, `remedy-place/35-J2-reserve-button-visible-stop.png`

### J3 Join / buy a membership

- Taps: **5**, scrolls: **1**, scripted time about 24.3 s (includes settle waits)
- Route: Hamburger > MEMBERSHIPS > JOIN (260x59) > club picker > Zenoti membership list > scroll > tap plan card. Shorter route inside the booking app (J3b): hamburger > BOOK > club > MEMBERSHIPS = 4 taps.
- What it offers: The Baseline $299/month, Resident $595/month, Premier $3,500/month (Flatiron). Selecting a card shows a total table and a "Continue to checkout" button (320x50), which was not tapped. The marketing page also carries an enquiry form (first name, last name, email, phone, preferred contact method: 5 required fields + 1 optional, SUBMIT) described as a guided join.
- Friction:
  - Two membership paths exist (self-serve in Zenoti, enquiry form on the site); the JOIN button leads to the club picker, not to the form.
  - Plans are long text cards (about 500 to 660 px tall each) with a small radio at top right.
- Works well:
  - Total and "Continue to checkout" appear immediately after choosing a plan, in the same view.
- Screenshots: `remedy-place/40-J3-menu.png`, `remedy-place/41-J3-memberships.png`, `remedy-place/42-J3-join.png`, `remedy-place/43-J3-pick-club.png`, `remedy-place/44-J3-scroll-to-prices.png`, `remedy-place/45-J3-select-baseline.png`

### J4 Shop / merchandise

- Taps: **4**, scrolls: **1**, scripted time about 19.7 s (includes settle waits)
- Route: Hamburger > SHOP (sub-links: Ice Bath, Remedy Roller, Gift Cards) > REMEDY ROLLER > scroll to price > ORDER NOW (cart permalink) > Shopify checkout.
- What it offers: Three products only (no grid): Ice Bath, Remedy Roller $13,400, Gift Cards. Product page: description / benefits tabs, press quotes, price and ORDER NOW. No cart: the button is a Shopify cart permalink straight to checkout.
- Checkout: vendor Shopify (remedyplace.myshopify.com; PCI frames checkout.pci.shopifyinc.com); wallets: Express checkout area with Shop Pay and PayPal; Google Pay frame (pay.google.com) loaded. Apple Pay not verifiable.; guest: Yes: "Email or mobile phone number" first; "Sign in" is optional.; fields: 9 on the delivery block (email/phone, country, first name, last name, address, apartment (optional), city, state, ZIP) plus 4 card fields in payment frames on the same page.
- Friction:
  - Shop opens as a nested menu list, not a page.
  - High-ticket items with no financing line seen above the fold.
- Works well:
  - Straight line from product to checkout in one tap, no cart step.
- Screenshots: `remedy-place/51-J4-menu.png`, `remedy-place/52-J4-shop.png`, `remedy-place/53-J4-remedy-roller.png`, `remedy-place/54-J4-scroll-to-price.png`, `remedy-place/55-J4-order-now.png`

---

## Othership (https://www.othership.us)

**Status: done.** Journeys J0 to J4 captured.

Sauna + ice bath "bathhouse" with timed classes in NYC and Toronto. Webflow site; booking and passes in an embedded Mariana Tek app; separate Shopify shop.

**Vendors:** Booking, passes, memberships: Mariana Tek embedded iframe (othership.marianaiframes.com, bookoapp.com) inside www.othership.us. Shop: Shopify (shop.othership.us, checkout.shopify.com). Also: Webflow assets, Vidzflow video, Hotjar, TikTok analytics, EmbedReach (referral modal), accessiBe-type widget.

### J0 Landing

- Hero and CTAs: Full-bleed autoplay video, H1 "Otherworldly sauna and ice bath experiences for human beings to feel good now", rating pill "1000+ five-star reviews". Two equal CTAs side by side: "BOOK A CLASS" (168x50) and "BUY A PASS" (168x50).
- Navigation: Hamburger (40x48) + logo (40x46); the two CTAs sit at the bottom of the first viewport (y 766 of 844) and stay at that position while the menu is open, so they behave as a pinned bottom bar (scroll persistence to be re-checked). Fixed side tab "GET 22% OFF" at the right edge; accessibility widget button bottom right.
- Load signals: DOMContentLoaded 3.3 to 4.2 s, load event 5.0 to 5.6 s. Resource timing says 123 KB (all 93 resources without size); Playwright response sizes say 15.1 MB over 153 requests (hero video included). 51 images, 1 autoplay video. Page height 13,774 px.
- Horizontal overflow: None.
- Consent: No cookie banner in the first viewport. A "Cookie Settings" control exists inside the booking iframe (bottom of the pass list).
- Popups: Referral modal "Give 22%, Get 22%" opens by itself about 10 s after each page load (first seen 14.4 s into the run; close X is 21x28, "Sign up or login" is the button). It blocks the schedule and the pass list until closed.
- Small tap targets: 2 of 4 interactive elements in the first viewport under 44 px (logo 40x46 is 40 wide, menu 40x48). Close X of the popup 21x28.
- Works well: The two real jobs (book a class, buy a pass) are the only two buttons on the first screen.
- Screenshots: first viewport `othership/08-J0-first-viewport-before-consent.png`, full page `othership/09-J0-fullpage.png` (13774 px tall, capture capped at 12000)

### J1 See class / session schedule

- Taps: **2**, scrolls: **0**, scripted time about 12.7 s (includes settle waits)
- Route: BOOK A CLASS (home) > /schedule > embedded Mariana Tek "Select Your Studio" (NYC Flatiron, Williamsburg, Toronto Adelaide, Yorkville) > tap Flatiron > daily list for today.
- What it offers: Day strip for 7 days (cells 17 to 39 px wide x 71 high), "Thursday, October 1, 2026 / Today" selected, then per session: time, duration, class name, host, room and location, "52/64 Open" (spots), RESERVE button (180x35). Today first, 7:00 AM to evening, 40+ rows. No login to view.
- Friction:
  - Studio choice forced before any time is shown (4 studios in 2 cities).
  - Referral modal opens about 10 s after load and covers the list.
  - RESERVE is 35 px high; day cells narrow.
  - Schedule is inside an iframe, so the page URL does not carry the studio or day.
- Works well:
  - Two taps from the first screen to a list of today with spots left.
  - Each row shows capacity as "x/y Open" next to a full-width RESERVE.
- Screenshots: `othership/05-J1-book-a-class.png`, `othership/06-J1-pick-studio-flatiron.png`, `othership/07-J1-popup-opens-on-schedule.png`

### J2 Buy a one-time / day pass

- Taps: **4**, scrolls: **0**, scripted time about 22.9 s (includes settle waits)
- Route: BUY A PASS (home) > /buy-a-pass (Mariana Tek iframe) > studio (Flatiron) > [referral modal X] > SINGLE PASS card.
- What it offers: Price list in one scroll: Intro 2 Week $135, Intro 3 Pack $135 ("$45 per pass"), Single pass $64, 5 pack $285 ($57/pass), 10 pack $510 ($51), 20 pack $900 ($45), monthly memberships, off-peak credits, gift cards. Each card: big price, per-pass price, class count, expiry. Tapping SINGLE PASS opens a dialog (usages, expiry 1 month, guest allowance) with "LOG IN TO PURCHASE" and "Create one now".
- Friction:
  - Login wall: purchase requires an account (first screen asks for log in / create).
  - Studio choice forced again before prices.
  - Referral modal appears at about the moment you reach the price list.
  - List is about 6,000 px tall in the iframe.
- Works well:
  - Prices are shown per pass, so a 5, 10 or 20 pack reads as a discount at a glance.
  - The dialog lists usage, expiry and guest allowance before the login button.
- Screenshots: `othership/20-J2-buy-a-pass.png`, `othership/21-J2-pick-studio-flatiron.png`, `othership/22-J2-close-referral-popup-appeared.png`, `othership/23-J2-close-referral-popup.png`, `othership/24-J2-tap-single-pass.png`

### J3 Join / buy a membership

- Taps: **4**, scrolls: **0**, scripted time about 25.8 s (includes settle waits)
- Route: Same page as J2: BUY A PASS > studio > [popup X] > "1X MONTHLY" card.
- What it offers: 1x monthly $51, 2x monthly $88, 4x monthly $168, Unlimited $333 (NY), pause up to 3 months, plus a crew/"Lovership" pass. Same "LOG IN TO PURCHASE" dialog.
- Friction:
  - Same login wall; memberships sit under packs in a long list.
- Works well:
  - One list for packs and memberships, so the cheaper per-pass option is visible while choosing a pass.
- Screenshots: `othership/25-J3-buy-a-pass.png`, `othership/26-J3-pick-studio-flatiron.png`, `othership/27-J3-close-referral-popup-appeared.png`, `othership/28-J3-close-referral-popup.png`, `othership/29-J3-tap-1x-monthly.png`

### J4 Shop / merchandise

- Taps: **7**, scrolls: **1**, scripted time about 42.4 s (includes settle waits)
- Route: Hamburger > SHOP (new tab, shop.othership.us) > SHOP COLLECTION > grid > product > ADD TO CART > cart icon (20x20) > CHECK OUT $68.88 CAD > Shopify checkout.
- What it offers: 24 products, 2-per-row grid (173x173 cards) with a 1 / 2 column toggle and FILTERS & SORT. Product page: price in CAD ($68.88 CAD, region-based), quantity stepper (32x32), ADD TO CART (240x46), "More payment options". Add to cart only bumps the header counter (no drawer, no confirmation); the cart panel then shows CHECK OUT $68.88 CAD (326x43).
- Checkout: vendor Shopify (shop.othership.us, checkout.shopify.com, PCI frames); wallets: Express checkout with Shop Pay and PayPal; Google Pay frame loaded. Apple Pay not verifiable.; guest: Yes: email first, "Sign in" optional.; fields: About 10 on the delivery block (email, country, first (optional), last, address, apartment (optional), city, province, postal code, phone (optional)) plus 4 card fields in payment frames.
- Friction:
  - Shop is a different site in a new tab, with its own header, currency (CAD) and login.
  - Cart icon is 20x20; add-to-cart gives little feedback.
  - Home has a "Shop Othership Products" section but the route used here is the menu.
- Works well:
  - Grid column toggle (1 or 2 per row) on mobile.
  - Free-shipping threshold ($111) shown in a bar at the top.
- Screenshots: `othership/40-J4-menu.png`, `othership/41-J4-shop.png`, `othership/42-J4-shop-landed.png`, `othership/43-J4-shop-collection.png`, `othership/44-J4-scroll-grid.png`, `othership/45-J4-open-product.png`, `othership/46-J4-add-to-cart.png`, `othership/47-J4-open-cart.png`, `othership/48-J4-checkout.png`

---

## Life Time (https://www.lifetime.life)

**Status: done.** Journeys J0 to J4 captured. J4 stopped at the quick-add modal (cart still empty).

Large athletic country club chain (190+ clubs). Own CMS site, own online-join flow ("build and price"), separate e-commerce shop.

**Vendors:** Marketing + club pages + join flow: www.lifetime.life (Adobe-style stack, Adobe Launch, Hotjar, Datadog, Privy, OneTrust consent). Concierge tool: asset.gomoxie.solutions. Coworking day passes: e-commerce.officernd.com (OfficeRnD). Shop: shop.lifetime.life (own store with minicart, Yotpo, Ordergroove).

### J0 Landing

- Hero and CTAs: Autoplay-style video hero (pause button 32x32), text "Make healthy your way of life. Join before the fall price adjustments." Primary CTA "FIND YOUR CLUB" (235x64) sits at the bottom of the first viewport, under the consent modal.
- Navigation: Top bar: hamburger + "FIND A LOCATION" button (174x30) at the left, logo at the right. Menu: Athletic Country Clubs, Coworking, Residences, Shop, Experience Life, Events, App, Member Site. No sticky CTA.
- Load signals: DOMContentLoaded 1.5 to 1.9 s, load event 3.2 s. Resource timing 16.2 MB (53 of 121 resources without size); Playwright response sizes 18.6 MB over 123 requests. 11 video elements in the DOM. Page height 12,482 px.
- Horizontal overflow: None.
- Consent: OneTrust modal: Accept All / Reject All / Customize (309x44 each) plus a close X; covers the lower 40% of the first viewport. Reject All = 1 tap. The shop subdomain asks again.
- Popups: None other than consent; a Privy widget is loaded.
- Small tap targets: 4 of 9 interactive elements in the first viewport under 44 px (skip link 177x32, location button 174x30, logo 71x18, play/pause 32x32).
- Works well: The consent modal has equal-weight Accept and Reject buttons.
- Screenshots: first viewport `life-time/01-J0-first-viewport-before-consent.png`, full page `life-time/03-J0-fullpage.png` (12482 px tall, capture capped at 12000)

### J1 See class / session schedule

- Taps: **3**, scrolls: **3**, scripted time about 22.4 s (includes settle waits)
- Route: FIND YOUR CLUB > locations list (IP-nearest first) > scroll x2 > DETAILS ABOUT CHANHASSEN (89x32) > club page > scroll > VIEW FULL SCHEDULE > public club schedule.
- What it offers: Per-club schedule with a day strip (51x88 cells, 14+ days), FILTERS, "40 RESULTS", per class: time, name, coach, duration, availability. No login. The locations page has quick filters for CAFE, COLD PLUNGE, SPA and others and shows "30 results near your location" with no permission prompt.
- Friction:
  - Club choice forced (190+ clubs); the details link is a small 89x32 text button 1,360 px down the list.
  - Three scrolls and three taps; first club in the list is a pickleball complex without a class schedule.
  - Consent modal on the first screen.
- Works well:
  - Location list is pre-sorted by IP: no permission prompt, no typing.
  - Public schedule with 14+ days and filters, no login.
  - Amenity filters (cold plunge, spa) in the club finder.
- Screenshots: `life-time/08-J1-find-your-club.png`, `life-time/09-J1-scroll-results-1.png`, `life-time/10-J1-scroll-results-2.png`, `life-time/11-J1-club-details-chanhassen.png`, `life-time/12-J1-scroll-club-page.png`, `life-time/13-J1-view-full-schedule.png`

### J2 Buy a one-time / day pass

- Taps: **6**, scrolls: **2**, scripted time about 42.7 s (includes settle waits)
- Route: FIND YOUR CLUB > scroll x2 > club details > MEMBERSHIP AND PRICING > DAY PASS tab > PURCHASE > summary > CONTINUE TO CHECKOUT > account creation.
- What it offers: Day pass "$60 / a day", with the fee credited against the first month if you join; a benefits list (classes, pool, sauna, courts, child care). PURCHASE leads into the online membership builder, which skips the member step and shows "Due today $60.00 (plus taxes and fees)". CONTINUE TO CHECKOUT leads to "Your Life Time Account: Enter your email to create your Life Time account" (1 field: email).
- Friction:
  - Account creation is forced before payment.
  - 6 taps and 2 scrolls; day pass lives in a tab on a sub-page of the club.
  - Club must be chosen first.
- Works well:
  - Price, benefits and a credit towards membership on one short screen.
  - Summary screen states "Due today" before any data is asked.
- Screenshots: `life-time/14-J2-find-your-club.png`, `life-time/15-J2-scroll-results-1.png`, `life-time/16-J2-scroll-results-2.png`, `life-time/17-J2-club-details-chanhassen.png`, `life-time/18-J2-membership-and-pricing.png`, `life-time/19-J2-day-pass-tab.png`, `life-time/20-J2-purchase.png`, `life-time/21-J2-continue-to-checkout.png`

### J3 Join / buy a membership

- Taps: **7**, scrolls: **2**, scripted time about 51.6 s (includes settle waits)
- Route: FIND YOUR CLUB > scroll x2 > club details > MEMBERSHIP AND PRICING > BUILD MEMBERSHIP > Members step (adult/junior steppers 51x56) > MOVE FORWARD > Membership step > SELECT MEMBERSHIP > summary > CONTINUE TO CHECKOUT > account creation.
- What it offers: "STARTING AT $229/month" (Chanhassen); a 3-step builder (club location, members, membership), with the monthly price kept in a header strip and updated as you build; Signature membership $229/mo, 26 & Under and others. Ends at the same email account screen.
- Friction:
  - 7 taps and 2 scrolls; account creation forced.
  - Fall price rise banner ("join before the fall price adjustments") acts as a pressure line.
- Works well:
  - Step counter ("Step 2 of 3") and a running monthly price in the header.
  - Big +/- steppers for number of members.
- Screenshots: `life-time/29-J3-find-your-club.png`, `life-time/30-J3-scroll-results-1.png`, `life-time/31-J3-scroll-results-2.png`, `life-time/32-J3-club-details-chanhassen.png`, `life-time/33-J3-membership-and-pricing.png`, `life-time/34-J3-build-membership.png`, `life-time/35-J3-move-forward-1-adult.png`, `life-time/36-J3-select-signature-membership.png`, `life-time/37-J3-continue-to-checkout.png`

### J4 Shop / merchandise

- Taps: **6**, scrolls: **0**, scripted time about 25.3 s (includes settle waits)
- Route: "FIND A LOCATION" menu button > SHOP (shop.lifetime.life) > second consent modal > PROTEIN category > ADD TO CART on first card > quick-view modal > ADD TO CART.
- What it offers: Supplement-led shop (protein, daily essentials, sleep, lab tests, kits). Category grid with price ("As low as $53.99"), review count and ADD TO CART on every card; "Add To List" needs a login. Quick-view modal is full screen with a sticky ADD TO CART bar. After the second tap the mini-cart still read "Cart is empty" (option choice probably required), so cart and checkout were not reached.
- Friction:
  - Second consent modal on the shop subdomain.
  - Quick add does not add: the modal needs an option that is below the fold.
  - "Add To List" heart is 24x24.
- Works well:
  - Price, rating and ADD TO CART visible on each grid card.
- Screenshots: `life-time/49-J4-open-menu.png`, `life-time/50-J4-shop.png`, `life-time/51-J4-reject-cookies-again.png`, `life-time/52-J4-protein-category.png`, `life-time/53-J4-add-to-cart-first-card.png`, `life-time/54-J4-confirm-add-in-modal.png`

---

## Gymshark (https://www.gymshark.com)

**Status: partial.** J0 captured; J1 (no schedule on the site) and J4 (shop, up to add-to-bag) captured. J3 and the checkout screen of J4 pending (one page load timed out; not re-run in this pass).

Global sportswear retailer on Shopify (storefront cdn.shopify.com), Algolia search, mParticle, Dynamic Yield, Intercom. A retailer, not a club: no classes or passes expected.

**Vendors:** Storefront on Shopify, Algolia search, OneTrust consent, Intercom chat, many ad and analytics pixels (54+ distinct hosts). Checkout vendor not reached.

### J0 Landing

- Hero and CTAs: Full-bleed video "NEW IN: GYMSHARK X WHITNEY" with two CTAs "Shop Whitney" (137x52) and "Shop new in" (126x52) and mute/pause controls (44x44). Then product carousels.
- Navigation: Rotating announcement bar (4 messages, links 17 px high, pause button 32x32), then header: hamburger, search, logo, account, bag (all 44x44). Menu tabs: Women, Men, Accessories, Explore.
- Load signals: DOMContentLoaded 0.5 to 3.8 s and load event 2.7 to 4.4 s across two runs (machine was under load in one); resource timing 2.8 MB (136 of 180 resources without size); Playwright response sizes 16.2 to 16.7 MB over 193 to 220 requests. 201 images, 4 videos. Page height 7,400 px.
- Horizontal overflow: None.
- Consent: Two stacked layers on first load: (1) OneTrust "Cookies and Tracking Pixels" banner with only "Continue To Website" and a 44x44 close X, no Reject; (2) "ARE YOU IN THE RIGHT PLACE?" country modal (ROW / US buttons 302x51, 20x20 close X). Both cover the lower third. 2 taps (the two X buttons) to a clean page.
- Popups: Country/region modal; cookie banner; later a "2k people viewed this in the last 24 hours" social-proof line on the product page.
- Small tap targets: 15 of 31 interactive elements in the first viewport are under 44 px (announcement links 308x17, close button 20x20, pause 32x32).
- Works well: Header icons are all 44x44.
- Screenshots: first viewport `gymshark/02-J0-first-viewport-before-consent.png`, full page `gymshark/06-J0-fullpage.png` (7400 px tall, capture capped at 12000)

### J1 See class / session schedule

- Taps: **2**, scrolls: **0**, scripted time about 4.6 s (includes settle waits)
- Route: Hamburger > Explore tab.
- What it offers: No class schedule, session booking or day pass. The menu offers Women, Men, Accessories, Explore (Accessibility, Help, Email Sign Up, Blog) and accordions for products. /pages/lifting-club, /pages/gymshark-lifting-club and /pages/events return 404. "Conditioning Club" on the homepage is a clothing line. Homepage tabs "Guides / Trending / Training / Apps" lead to content and apps, not bookings.
- Friction:
  - Nothing to book: the result for this journey is "no schedule".
- Works well:
  - Menu search bar and Women / Men tabs are full-width 44+ px targets.
- Screenshots: `gymshark/10-EXPLORE-menu.png`, `gymshark/11-EXPLORE-explore-tab.png`

### J2 Buy a one-time / day pass

**pending**: No pass or session product found in the menu or Explore tab. Not searched exhaustively.

### J3 Join / buy a membership

**pending**: Not run. A free "Gymshark Central" link sits in the footer (/blog); membership/loyalty not examined.

### J4 Shop / merchandise

- Taps: **5**, scrolls: **1**, scripted time about 22.5 s (includes settle waits)
- Route: Hero CTA "Shop Whitney" > collection page > scroll > first product > "Add to bag" (sticky 276x54) > bottom sheet "ADD TO BAG: Select size" > tap size row (M) adds to bag > bag icon (header counter shows 1).
- What it offers: Collection page (card width 258 px, category chips), product page with a 390x488 image gallery, price $34, sticky "Add to bag" bar and wishlist heart (58x54). Size picker is a bottom sheet with full-width rows XXS to L, each labelled "Add to bag +" (about 50 px high); picking a size adds directly and closes the sheet. After the add, the header bag shows "1"; a bag drawer did not show up after one tap on the bag icon (not investigated further).
- Checkout: Not reached: checkout vendor, wallets and guest options not captured.
- Friction:
  - Add to bag needs two taps (button, then size).
  - Add feedback is only the bag counter.
  - Announcement bar and social-proof lines push the product image down.
- Works well:
  - Size sheet: 50 px rows, whole row is the add button, price and name repeated at the top.
  - Sticky add-to-bag bar on the product page.
- Screenshots: `gymshark/12-J4-shop-whitney-hero-cta.png`, `gymshark/13-J4-scroll-grid.png`, `gymshark/14-J4-open-product.png`, `gymshark/15-J4-add-to-bag-opens-size-sheet.png`, `gymshark/16-J4-pick-size-m-adds.png`, `gymshark/17-J4-open-bag.png`

---

## Hyrox (https://hyrox.com)

**Status: partial.** J0 captured plus a link scan of the page. Journeys J1 to J4 not run: the first menu tap timed out while the consent sheet covered the header and was not re-tried in this pass.

Fitness racing brand: sells race entries and lists events and partner clubs; no classes, day passes or memberships seen in the link scan.

**Vendors:** Consent: Usercentrics. Race tickets via Find My Race (hyrox.com/find-my-race/); training club finder on hyrox-training-finder.hyrox.com; coaches on coaches.hyrox.com; shop on a separate domain (hyrox-shop.com); gym/coach sign-up on portal.hyrox365.com.

### J0 Landing

- Hero and CTAs: Full-bleed black-and-white photo, H1 "THE WORLD SERIES OF FITNESS RACING". The lower 40% of the first viewport is covered by the consent sheet, so any CTA below the hero image is hidden until consent is answered.
- Navigation: Header: HYROX logo (143x20), "Regions" text, hamburger (50x24 "Menu"). No sticky CTA or bottom bar seen. Menu lists Find My Race, The Fitness Race, Find My Level, Races, Shop, "Get your Ticket now" (link scan).
- Load signals: DOMContentLoaded 0.9 to 1.8 s, load event 1.0 to 2.0 s; resource timing 1.2 MB (17 of 44 resources without size); Playwright response sizes 1.5 MB over 45 requests. 10 images, no video. Page height 3,394 px: the lightest of the six sites.
- Horizontal overflow: None.
- Consent: Usercentrics full-width sheet with "Accept All" and "Deny" (each about 32 px high) over the lower part of the hero; Deny = 1 tap. In the first menu attempt (consent still open) the Menu tap timed out: the sheet covers the header area.
- Popups: None other than consent.
- Small tap targets: Logo 143x20 and Menu 50x24 are under 44 px high; consent buttons about 32 px high.
- Works well: Very light page; the region switcher ("Regions") is in the header from the first screen.
- Screenshots: first viewport `hyrox/04-J0-first-viewport-before-consent.png`, full page `hyrox/05-J0-fullpage.png` (3426 px tall, capture capped at 12000)

### J1 See class / session schedule

**pending**: Link scan shows Find My Race, Races, Find My Level and a training-club finder on another host (hyrox-training-finder.hyrox.com); no class schedule. Race list not opened.

### J2 Buy a one-time / day pass

**pending**: No day pass exists; the nearest purchase is a race ticket via "Get your Ticket now" > Find My Race. The link lives inside the hamburger menu; the menu tap timed out in run 1 (consent open) and was not retried.

### J3 Join / buy a membership

**pending**: No consumer membership in the link scan; "Join as gym or coach" goes to portal.hyrox365.com/signup (B2B).

### J4 Shop / merchandise

**pending**: Shop is a separate domain (hyrox-shop.com); not opened.

---

## The Well (https://www.thewell.com)

**Status: blocked.** Blocked: thewell.com is not a wellness club (see below). No journeys run.

The domain given in the brief does not host a wellness or fitness business.

**Vendors:** n/a

**Evidence**

- WebKit: navigating to https://www.thewell.com and https://thewell.com fails with "The certificate for this server is invalid".
- curl: "SSL: no alternative certificate subject name matches target host name" ; the certificate presented is issued to CN=well.com (Let's Encrypt, valid 25 Aug to 23 Nov 2026).
- DNS: thewell.com resolves to 23.22.72.90 with mail on mx.well.com.
- Opened with certificate errors ignored (read only): https://www.thewell.com redirects to https://user.well.com/html/engaged/login.html, the login page of "The WELL", an online discussion community. No classes, passes, memberships or shop.
- Other domains tried: thewellnyc.com redirects to citywellbrooklyn.com (a different business); thewell.nyc returns a 404 page; thewell.club is "The Well" in Frankfurt (diagnostics, training, recovery). It is a different company from a New York club and the brief does not name it, so it was not benchmarked without your decision.

---

## Comparison

| Site | Taps to schedule | Taps to day-pass / session checkout | Taps to membership checkout | Wallet pay | Guest checkout | Login wall |
|---|---|---|---|---|---|---|
| Remedy Place | 4 taps (page shows "No Classes" this week; times only via J2 picker) | 7 taps (to RESERVE-ready; the RESERVE tap itself not taken) | 5 taps + 1 scroll (to plan selected; "Continue to checkout" not tapped) | Shop: Shop Pay, PayPal, Google Pay frame (Apple Pay not verifiable). Booking/passes: not reached. | Shop: Y. Booking: not verified ("Hi Guest" with optional sign-in). | N (none before RESERVE / checkout) |
| Othership | 2 taps (incl. studio pick; popup adds 1 tap if open) | 4 taps (3 if the ~10 s popup is not open; stops at "Log in to purchase") | 4 taps (same login wall) | Booking/passes: not reached (login wall first). Shop: Shop Pay, PayPal, Google Pay frame. | Booking: N. Shop: Y. | Y (booking and passes); N (shop) |
| Life Time | 3 taps + 3 scrolls (club schedule, public) | 6 taps + 2 scrolls (ends at "create account by email") | 7 taps + 2 scrolls (ends at "create account by email") | Not reached (account screen first). | N (email account is created first) | Y (forced account creation before payment) |
| Gymshark | n/a: no schedule on the site (2 taps to confirm) | n/a: no day pass product found (menu and Explore only; search not exhaustive) | pending | pending (checkout not reached) | pending | pending |
| Hyrox | pending (no class schedule seen; race list at Find My Race not opened) | pending (race ticket via menu "Get your Ticket now"; not reached) | n/a: no membership seen (B2B sign-up only) | pending | pending | pending |
| The Well | blocked | blocked | blocked | n/a | n/a | n/a |

Seconds are scripted wall time with settle waits. "Wallet pay" says what was visible; Apple Pay cannot be verified in an automated WebKit.

## Cross-site synthesis

- Coverage: Remedy Place, Othership, Life Time fully walked; Gymshark (J0, J1, shop to add-to-bag) and Hyrox (J0) partial; The Well blocked (thewell.com is a discussion community, not a club). Taps below exclude consent taps.
- FAST: two equal first-screen CTAs for the two jobs, "Book a class" and "Buy a pass" (Othership): schedule in 2 taps, today first, "52/64 Open" and a full-width RESERVE on every row.
- FAST: a public schedule with a 14-day strip and filters needing no login (Life Time); a four-button club picker (Remedy Place) or an IP-sorted club list, never typing or a permission prompt.
- FAST: per-pass price on every card ($64, $57, $51, $45 at Othership) and a "Due today" summary before any data is asked (Life Time); date and time picked inline with one sticky commit button (Remedy Place).
- FAST: Shopify shop checkouts open on an email-only guest entry with Shop Pay and PayPal on top and a Google Pay frame (Remedy Place, Othership); Gymshark adds size and item in one bottom sheet with 50 px rows.
- ANTI: a forced club or studio pick before any time or price (all three clubs); an empty schedule as the main answer (Remedy Place, all 4 clubs this week); a timed referral modal over the schedule (Othership, ~10 s after load).
- ANTI: login or account creation before the price is accepted (Othership "Log in to purchase", Life Time email account); shops on another host with a second consent banner or another currency (Life Time, Othership CAD).
- ANTI: heavy first loads (Othership 15 MB, Life Time 16 to 19 MB, Gymshark 16 MB by response size, with video heroes) against Hyrox 1.5 MB; targets of 13 to 37 px for day cells, arrows and close buttons (Remedy Place, Othership, Gymshark).
- (a) Schedule access, best 3: Othership (2 taps, today, spots left), Life Time (public 14-day schedule with filters, no login), Remedy Place (7-day strip and club picker; empty this week, so copy the structure, not the content).
- (b) Pass purchase, best 3: Life Time (price, benefits, credit towards membership, summary before data; but forced account), Remedy Place (inline date and time, sticky RESERVE, no wall before it), Othership (per-pass price cards; copy the cards, not the login wall).
- (c) Recovery-club storytelling on mobile, best 3: Othership (autoplay video hero, 1000+ reviews proof, class types, practices), Remedy Place (one-line category claim "Social Wellness Club" and a long manifesto), Life Time (amenity filters such as cold plunge and spa in the club finder).
- Not verifiable here: Apple Pay (no wallet in automated WebKit) and any checkout behind a login wall; Zenoti day-pass checkout (RESERVE tap refused) was not reached.

## Change log

- 2026-10-01 v1.0: first release. Remedy Place, Othership, Life Time: J0 to J4. Gymshark: J0, J1 (no schedule), J4 to add-to-bag. Hyrox: J0 and a link scan. The Well: blocked (domain is not a wellness business).
- Open for v1.1: Gymshark checkout and J3; Hyrox J1 to J4; Remedy Place J0 content counts re-capture; Othership pinned-CTA scroll check; thewell.club if a decision is given.
