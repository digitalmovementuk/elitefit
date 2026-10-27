> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Mobile customer journeys, Bali gyms: Elite Fit baseline and four competitors

**Version: v1.0 — 2026-10-01**

Scope: evidence only (facts, counts, screenshots). Phone-first (WebKit, iPhone 14 profile). Elite Fit Bali wants a homepage that sells day passes and memberships through a connected shop and shows the class schedule fast.

## How to read this

- Browser: Playwright 1.63 with real WebKit, iPhone 14 profile (390x844 CSS px, device scale factor 2, isMobile, hasTouch, locale en-US, geolocation not granted). Real touch taps only (locator.tap / touchscreen.tap), never JS clicks. Each journey starts at the homepage. Reload, Nirvana and RITE (popup, delayed banner) were run with a fresh browser context per journey; Elite live, concept and Body Factory ran in one browser session (no popup, banner or session state was seen on them, so the first-visit state is the same).
- Date: 2026-10-01 (a Thursday); "today" in J1 is Thursday. Network: my own connection; timings are medians of repeated fresh loads where the table says so.
- Rough seconds = 2.0 s per tap + 1.5 s per swipe + the measured page-load wait of each navigation on my connection. They are estimates for comparing sites, not user-test times.
- Slow-4G run: WebKit has no network throttle, so requests are routed and delayed (1.6 Mbit/s shared pipe + 150 ms round trip per request). Real download time overlaps the emulated time. Figures are indicative.
- Cookie banners: least-tracking option (Decline / Reject) where one appeared. Popups: dismissed with the smallest control and counted as a tap.
- Stops: no account created, no personal data typed, no form submitted, no card entered, no final pay/confirm button tapped, no WhatsApp message sent (a tap that opens WhatsApp ends the journey). Nirvana "Reserve Now" and Reload "Continue" only open the next screen (checkout billing form / Details form), where the run stopped.
- Nirvana delays its scripts until the first touch. A touch on a blank margin is used as a stand-in for the first swipe and counted as one swipe.
- Tap targets under 44 px are the measured box of the tapped element, so a link box can read smaller than its padded row.

## Comparison table

| Site | Taps to today's schedule | Taps to day-pass checkout | Taps to membership checkout | Payment methods visible | Guest checkout | Login wall | Load time, real (DCL / load) | Load, slow 4G |
|---|---|---|---|---|---|---|---|---|
| 1. Elite Fit Bali, LIVE site | 5 taps + 1 swipe (~14 s) | 5 taps (~10 s) → contact page (WhatsApp / e-mail / Instagram); no checkout | 5 taps (~10 s) → contact page (WhatsApp / e-mail / Instagram); no checkout | none online (front desk or WhatsApp) | n/a (no checkout) | N | 0.8 s / 1.6 s | 16.6 s |
| 2. Elite Fit homepage concept v1.3 | 2 taps (~2 s) | 2 taps (~2 s) → checkout panel (concept, non-functional) | 3 taps (~4 s) → checkout panel (concept, non-functional) | not shown in the concept | not specified | not specified | 33 ms / 0.3 s (localhost) | 34.7 s |
| 3. Body Factory Bali | 2 taps + 1 swipe (~4 s) | 5 taps + 1 swipe (~7 s) → e-mail / Google login modal | 3 taps + 2 swipes (~6 s) → e-mail / Google login modal | not visible before login | N | Y | 0.5 s / 1.8 s | 20.2 s |
| 4. Reload Sanctuary | 4 taps (~13 s) | 6 taps + 1 swipe (~16 s) → sign-up wizard, step 2 Details form | 7 taps (~14 s) → sign-up wizard, step 2 Details form | not visible before step 4 (after personal data and terms) | N | Y (account wizard) | 0.3 s / 2.0 s | 82.7 s |
| 5. Nirvana Life (gym side at /bali/) | 4 taps + 1 swipe (~15 s) | 5 taps + 1 swipe (~23 s) → checkout billing form (WooCommerce) | 5 taps + 1 swipe (~27 s) → checkout billing form (WooCommerce) | only "Xendit Payment Gateway" named on the checkout page; single methods (cards, QRIS, e-wallets) not listed before "Place order" | Y (optional "Create an account") | N (optional login link) | 1.0 s / 1.2 s | 9.2 s |
| 6. RITE Bali | 5 taps (~12 s) | 3 taps (~8 s) → WhatsApp chat; no checkout | 3 taps + 9 swipes (~21 s) → WhatsApp chat; no checkout | none online (agreed in chat) | n/a (no checkout) | N | 0.4 s / 1.8 s | 64.2 s |

Taps are counted from the homepage on a fresh visit; "checkout" = the first screen that asks for personal data (login modal, Details form, billing form) or the concept panel, or, where none exists, the contact/WhatsApp page the buttons lead to. Concept v1.3: checkout is a labelled non-functional concept.

## Synthesis

1. Elite Fit live loses visitors on the first screen: one 844 px slider with no menu, no price and no schedule; the only way on is "Explore". Every competitor shows a menu and a buying path early (Body Factory "GET STARTED", Reload "Day Pass / Membership", Nirvana "Explore Passes / Memberships" one tap after its root page).
2. It cannot sell: the price list sits in a popup 4 taps deep and ends on a contact page (WhatsApp, e-mail, Instagram); the day pass is a text line (Daily Rp350.000). Body Factory, Reload and Nirvana reach a login, account or checkout screen in 5 to 7 taps; only Rite is also WhatsApp-only, but it shows the day-pass price on the first screen after the menu. No site shows payment methods before the personal-data screen (Nirvana names only "Xendit Payment Gateway").
3. Schedule: Elite live needs 5 taps and a swipe, opens on Monday, shows 2 columns with 25 px arrows, has no Book button, and never links GymMaster (the schedule-page note is hidden on phones; the only visible mention is an FAQ row ~7,500 px down /perform/). Body Factory: 2 taps + 1 swipe, today preselected. Reload: 4 taps, live spots left and waitlist. Nirvana and Rite: 4 to 5 taps into a GymMaster portal on another domain.
4. Tap targets: Elite burger 20x20 px, menu rows 20 px high; Reload "Maybe later" 22 px high; Nirvana menu 33x26; Body Factory 40x40; Rite 44x44. Weight: Elite live homepage is light (1.37 MB, 16.6 s on slow 4G, hero visible at 5 s) but /perform/ grows to 5.7 MB; Reload 7.7 MB (83 s on slow 4G), Rite 11.5 MB (64 s), concept 6.8 MB (35 s, content visible at 5 s).
5. Body Factory does better: best schedule (today preselected, live "Registration closed", 56 px Book button) and a day-pass card with base, tax and total. Worse: e-mail or Google login before any payment, "Rp540.000 ++" then Rp623.700, no WhatsApp button on the homepage (footer, ~9 swipes down).
6. Reload does better: prices in IDR on the homepage and live capacity per class. Worse: a full-screen event popup on every fresh visit, schedule and shop in an app on another domain (new tab), and a 5-step account wizard (Membership, Details, Terms, Payment, Done) before any payment.
7. Nirvana does better: the only guest checkout (billing form, optional account, Xendit; an order total of Rp837.375 for a Rp725.000 pass). Worse: scripts wait for the first touch (schedule and product options empty, cookie banner covers about 477 px), the schedule redirects to the GymMaster portal, prices carry "++".
8. Rite does better: shortest path (menu, price, "Book Now" opens WhatsApp in 3 taps) and a live GymMaster calendar. Worse: nothing is bought on the site, the 11.5 MB video homepage has no button, the 4-week membership sits 9 swipes down an 11,072 px page, and its general WhatsApp link hides in a collapsed footer row about 13 swipes down.
9. Concept v1.3 already beats the live site: today's schedule in 2 taps, checkout panel in 2 taps (concept only), prices in one block with a length switch. Still open: WhatsApp is 3 taps away (not in the mobile menu), "GymMaster app" is text without a link, no payment methods are shown, the homepage is 6.8 MB, and the concept and live site use different WhatsApp numbers.
10. Pattern to copy: first screen = price + today's classes (Body Factory, Reload); one price line with tax included (Reload, Nirvana order summary); guest checkout (Nirvana); a persistent WhatsApp button (Elite live, Reload, Body Factory pricing pages); scripts and video that never block the first paint.

## 1. Elite Fit Bali, LIVE site

- URL: https://elitefitbali.com/
- Role: Baseline 1 (client, live)
- Final URL: https://elitefitbali.com/ (HTTP 200)

### J0 Landing

[first viewport](1-elitefitbali-live/01-first-viewport.png)

| Fact | Value |
|---|---|
| Above the fold | Full-bleed dark gym photo slider (PERFORM, RECHARGE, BLOODWORK, auto-advancing). Headline "PERFORM", one line "Fitness At Its Best. Cutting Edge Equipment. Elite Trainers & Facilities", one button "Explore" (135x50 px). Prev/next arrows are 25 px. No price, no schedule, no Buy or Join button on the first screen. |
| Nav pattern | None on the homepage: the header is the logo only. The homepage is one 844 px screen (document height 844 px): no section below, no footer, no contact block. The menu (Perform, Recharge, Bloodwork, Memberships, Classes, Offers & Discounts, News, Join Now) exists only on inner pages behind a 20x20 px burger icon. |
| Sticky bars | Green WhatsApp button 68x68 px, bottom right, on every page. Inner pages: fixed header 72 px. |
| Cookie / popup friction | No cookie banner and no popup. Google Analytics and Meta Pixel requests fire with no consent step. |
| Overflow / weight | No horizontal overflow. About 76 requests, 1.37 MB transferred. |
| DOMContentLoaded (real, 3 fresh loads: median, range) | 0.8 s (0.8 s to 0.9 s) |
| Load event | 1.6 s (1.6 s to 1.8 s) |
| First contentful paint | 0.8 s |
| Transferred (resource timing) | 1.37 MB; 76 requests |
| Horizontal overflow | none (scroll width 390 = viewport 390) |
| Slow 4G (emulated) | DCL 2.3 s, FCP 2.3 s, load 16.6 s (1 run; screenshots at +5 s and at the end). At +5 s the hero slider is showing (RECHARGE slide with "Explore"); load event at the time shown. |
| Document height | 844 px |

Screenshots: [01-first-viewport.png](1-elitefitbali-live/01-first-viewport.png), [02-full-page.png](1-elitefitbali-live/02-full-page.png), [23-slow4g-after-5s.png](1-elitefitbali-live/23-slow4g-after-5s.png), [24-slow4g-loaded.png](1-elitefitbali-live/24-slow4g-loaded.png)

### J1 See today's class schedule

Totals for the recorded path: 7 taps, 13 swipes, ~34.3 s rough (measured wall 31.2 s). Milestones: schedule today visible: 5 taps, 1 swipe, ~14 s.

Outcome: Schedule reachable after 3 taps + 1 scroll + 2 arrow taps; no booking action anywhere
- Hand-off: No GymMaster link on the site. Text only: "Classes can be booked via the GymMaster app or at the front desk" (T&Cs), "Members can book classes through the Gymmaster app ... non-members can still join via ClassPass application" (FAQ on /perform/), "check the website or the GymMaster app" (schedule page). No link, no app-store badge, no portal URL anywhere on the site.

Steps:

3. [03-j1-perform-page.png](1-elitefitbali-live/03-j1-perform-page.png) TAP homepage slider "Explore" (Perform) - homepage has no menu, only this slider — Homepage shows no navigation at all; the only way on is the slider CTA. Lands on /perform/. (load 4.2 s)
4. [04-j1-menu-open.png](1-elitefitbali-live/04-j1-menu-open.png) TAP burger icon top-right (20x20 px) — Full-screen menu: Perform, Recharge, Bloodwork, Memberships, Classes, Offers & Discounts, News, Join Now
5. [05-j1-class-schedule-top.png](1-elitefitbali-live/05-j1-class-schedule-top.png) TAP menu item "Classes" — Schedule page first view: title, then day columns start below the title (load 2.9 s)
6. [06-j1-schedule-columns.png](1-elitefitbali-live/06-j1-schedule-columns.png) SCROLL 420px — Day carousel starts on MON, not on today (Thursday). Two day columns visible at once, no booking button.
7. [07-j1-next-arrow-1.png](1-elitefitbali-live/07-j1-next-arrow-1.png) TAP schedule carousel "Next" arrow (26 px)
8. [08-j1-next-arrow-2.png](1-elitefitbali-live/08-j1-next-arrow-2.png) TAP schedule carousel "Next" arrow (26 px)
9. [09-j1-faq-how-to-book.png](1-elitefitbali-live/09-j1-faq-how-to-book.png) SCROLL to FAQ "How do I book a class?" on /perform/ (~12 swipes, 7168px) — Only visible GymMaster mention for a phone visitor: a collapsed FAQ row on /perform/ (~7,500 px down the page).
10. [10-j1-faq-answer.png](1-elitefitbali-live/10-j1-faq-answer.png) TAP FAQ row "How do I book a class?" (opens answer) — Answer: members book "through the Gymmaster app and at our front desk"; non-members "via ClassPass application". No link, no app-store badge, no portal URL.
11. [11-j1-class-detail.png](1-elitefitbali-live/11-j1-class-detail.png) TAP tap a class card — Class detail page: description, trainer, reviews, "View Class Schedule". No time picker, no Book button. (load 1.3 s)

Friction:

- Tap target under 44 px: burger icon top-right (20x20 px) (20x20)
- Tap target under 44 px: menu item "Classes" (344x20)
- Tap target under 44 px: schedule carousel "Next" arrow (26 px) (23x23)
- Schedule opens on Monday, not today: 2 taps on a 26 px arrow to bring Thursday into view
- No booking button, no filter, no "today" highlight on the schedule; class cards only link to description pages
- Whole site has no link to GymMaster: bookings are "via the GymMaster app or at the front desk" (text only)
- The schedule page carries a note "check the website or the GymMaster app" but it is display:none at 390 px width: a phone visitor never sees it

### J2 Buy a day pass

Totals for the recorded path: 5 taps, 0 swipes, ~10.1 s rough (measured wall 13.2 s). Milestones: day pass price visible: 4 taps, 0 swipes, ~8 s; checkout start: 5 taps, 0 swipes, ~10 s.

Outcome: No checkout. Purchase = WhatsApp/e-mail/Instagram message, or walk in (front desk).

Stopped at: /join-us-today/ (contact page) - no checkout exists
- Checkout vendor: none
- Payment methods visible: none online (desk/WhatsApp only)
- Guest checkout: n/a
- Login wall: no

Steps:

12. [12-j2-perform-page.png](1-elitefitbali-live/12-j2-perform-page.png) TAP homepage slider "Explore" (load 2.0 s)
13. [13-j2-menu-open.png](1-elitefitbali-live/13-j2-menu-open.png) TAP burger icon (20x20 px)
14. [14-j2-memberships-page.png](1-elitefitbali-live/14-j2-memberships-page.png) TAP menu item "Memberships" — Three cards: Perform "Starts from IDR 350.000", Recharge IDR 300.000, Elite IDR 450.000. Price format on card: "IDR 350.000". (load 0.9 s)
15. [15-j2-perform-popup.png](1-elitefitbali-live/15-j2-perform-popup.png) TAP Perform membership card — Popup price list: Daily Rp350.000, Weekly Rp1.100.000, 4 weeks Rp2.200.000 ... Class Pass Rp300.000. Price format in popup: "Rp350.000" (card says "IDR").
16. [16-j2-join-us-page.png](1-elitefitbali-live/16-j2-join-us-page.png) TAP "Join Us Today" button in the popup — Lands on /join-us-today/: WhatsApp / Email / Instagram buttons. No checkout, no form, no payment. (load 1.2 s)

Friction:

- Tap target under 44 px: burger icon (20x20 px) (20x20)
- Tap target under 44 px: menu item "Memberships" (344x20)
- No online purchase exists: the price list ends in "Join Us Today", which is a contact page (WhatsApp, e-mail, Instagram)
- Day pass is not a product: it is a price line ("Daily Rp350.000") inside a popup, reachable only after 4 taps
- Currency shown two ways: "IDR 350.000" on the card, "Rp350.000" in the popup; IDR only, no USD/AUD/EUR reference for tourists
- Burger icon is 20x20 px; popup close (X) and menu items are the only way on

### J3 Join / buy a membership

Totals for the recorded path: 5 taps, 0 swipes, ~10.2 s rough (measured wall 13 s). Milestones: membership price visible: 4 taps, 0 swipes, ~8 s; checkout start: 5 taps, 0 swipes, ~10 s.

Outcome: No checkout. Membership = message or visit the front desk.

Stopped at: /join-us-today/ (contact page)
- Checkout vendor: none
- Payment methods visible: none online
- Guest checkout: n/a
- Login wall: no

Steps:

17. [17-j3-perform-page.png](1-elitefitbali-live/17-j3-perform-page.png) TAP homepage slider "Explore" (load 2.3 s)
18. [18-j3-menu-open.png](1-elitefitbali-live/18-j3-menu-open.png) TAP burger icon (20x20 px)
19. [19-j3-memberships-page.png](1-elitefitbali-live/19-j3-memberships-page.png) TAP menu item "Memberships" (load 0.9 s)
20. [20-j3-elite-popup.png](1-elitefitbali-live/20-j3-elite-popup.png) TAP Elite membership card — Elite (Perform + Recharge) popup
21. [21-j3-join-us-page.png](1-elitefitbali-live/21-j3-join-us-page.png) TAP "Join Us Today" button in the popup (load 1.0 s)

Friction:

- Tap target under 44 px: burger icon (20x20 px) (20x20)
- Tap target under 44 px: menu item "Memberships" (344x20)
- Same dead end as J2: membership purchase ends on the contact page; no sign-up, no direct-debit or card step
- Shortcut exists: menu > "Join Now" (3 taps from the homepage) lands on the same contact page

### J4 Contact / ask on WhatsApp

Totals for the recorded path: 1 taps, 0 swipes, ~3 s rough (measured wall 3.2 s). Milestones: whatsapp open: 1 tap, 0 swipes, ~3 s.

Outcome: 1 tap from the homepage; opens WhatsApp (api.whatsapp.com/send, empty message). Stopped.

Steps:

22. [22-j4-whatsapp-tap.png](1-elitefitbali-live/22-j4-whatsapp-tap.png) TAP floating WhatsApp button (68x68 px, bottom right, on every page) — STOPPED here: no message typed or sent. New tab opens api.whatsapp.com/send (phone 6285720221101, empty text). (load 1.8 s)

Friction:

- WhatsApp number is +62 857 2022 1101; the button carries no pre-filled message (text parameter empty)

Works well:

- Green floating WhatsApp button on every page, 68 px, 1 tap from the homepage

### Facts a rebuild must fix (Elite Fit live)

- Homepage has no navigation, no price, no schedule: the only way on is the slider button "Explore", which goes to /perform/, /recharge/ or /form-bloodwork depending on the slide showing.
- Menu is a 20x20 px burger on inner pages only; menu rows are 20 px high link boxes (rows about 48 px apart); the membership prices sit in a popup.
- Schedule (/class-schedule/): a 7-day carousel with 2 day columns visible and 23-26 px arrows; it opens on MONDAY, not on today; Thursday needs 2 arrow taps. Day columns are 1,400+ px tall. No booking button, no filter; class cards only open a description page.
- Class description pages have no time picker and no Book button; "View Class Schedule" loops back. The Stretching page carries the heading "ABOUT BODY SCULPT" (copy error).
- GymMaster hand-off as a phone visitor experiences it: there is none. No page links to a GymMaster portal, app store or booking URL (11 pages checked). The only mentions are text: FAQ row "How do I book a class?" on /perform/ about 7,500 px down the page (members book "through the Gymmaster app and at our front desk", non-members "via ClassPass application") and the T&Cs. The note on the schedule page ("check the website or the GymMaster app") is display:none at 390 px, so a phone visitor never sees it.
- No online purchase: Memberships page > popup price list (Daily Rp350.000, Weekly Rp1.100.000, 4 Weeks Single Rp2.200.000, Duo Rp3.800.000, 12 Weeks Rp5.500.000, 26 Weeks Rp10.000.000, Yearly Rp18.000.000, Class Pass Rp300.000, 10 Class Pass Rp2.000.000) > "Join Us Today" > /join-us-today/ = WhatsApp, e-mail, Instagram buttons. Currency is written "IDR 350.000" on the card and "Rp350.000" in the popup.
- WhatsApp: floating button opens api.whatsapp.com/send with an empty message to +62 857 2022 1101; the WhatsApp page shows the Business profile "Elite Fit Bali" and an "Open app" button. The concept v1.3 uses a different number (+62 851 9552 0220).
- Step timings on my connection (tap until the next page has loaded): Explore to /perform/ 2.0 to 4.2 s over three journeys, menu open instant, Classes to /class-schedule/ 2.9 s, Memberships 0.9 s, Join Us Today 1.0 to 1.2 s, class card to class page 1.3 s. On slow 4G the homepage loads in 16.6 s (hero visible at 5 s).
- Footer says "(c) Copyright 2024". /perform/ is the heavy page: 1.5 MB on first load but 5.7 MB, 186 requests and 10,014 px of height after a scroll-through (116 images); the page audit found no failing requests and no broken Instagram images.
- Page audit (fresh WebKit iPhone 14 context per page, scrolled through once to trigger lazy images): / load 1.4 s, 75 requests, 1.37 MB, 844 px tall | /perform/ load 2.2 s, 186 requests, 5.72 MB, 10014 px tall, 1 of 116 images broken (empty src) | /class-schedule/ load 2.7 s, 138 requests, 1.06 MB, 3672 px tall | /membership/ load 1.7 s, 101 requests, 1.00 MB, 3045 px tall | /join-us-today/ load 1.1 s, 100 requests, 0.90 MB, 1926 px tall | /offers-discounts/ load 1.2 s, 100 requests, 1.01 MB, 2008 px tall

## 2. Elite Fit homepage concept v1.3

- URL: http://127.0.0.1:8417/ (served from proposal/site-preview/, read-only)
- Role: Baseline 2 (concept; checkout is a labelled non-functional concept)
- Final URL: http://127.0.0.1:8417/ (HTTP 200)

### J0 Landing

[first viewport](2-elitefit-concept-v1.3/01-first-viewport.png)

| Fact | Value |
|---|---|
| Above the fold | Sticky header 64 px: logo, orange "Buy a pass" button, square hamburger. Hero: the club's own reel (poster frame) with the headline "A serious gym with a proper recovery wing." and one button "Buy a pass - from IDR 300K". No schedule and no WhatsApp on the first screen. |
| Nav pattern | Hamburger drawer: Perform, Recharge, Classes, Personal training, Bloodwork, Shop. No WhatsApp, Contact or Buy entry in the mobile menu. |
| Sticky bars | Header only (64 px: logo + Buy a pass + menu). No floating WhatsApp. |
| Cookie / popup friction | None (no banner, no popup). |
| Overflow / weight | No horizontal overflow. 6 requests but 6.85 MB transferred (the hero reel is about 6.4 MB); page is 15,931 px tall (about 19 screens). Local timings (DCL about 0.3 s) are NOT a network measure; see the slow-4G run. |
| Concept status | Checkout is a labelled concept panel ("Concept preview - nothing is charged or stored"); "Continue to payment" does nothing and was not tapped. |
| DOMContentLoaded (real, 3 fresh loads: median, range) | 33 ms (31 ms to 96 ms) |
| Load event | 0.3 s (0.2 s to 0.3 s) |
| First contentful paint | 0.3 s |
| Transferred (resource timing) | 6.85 MB; 6 requests |
| Horizontal overflow | none (scroll width 390 = viewport 390) |
| Slow 4G (emulated) | DCL 0.7 s, FCP 34.7 s, load 34.7 s (1 run; screenshots at +5 s and at the end). At +5 s the header, headline and "Buy a pass" button are on screen; the 6.4 MB hero reel keeps loading in the background until the load event. |
| Document height | 15931 px |

Screenshots: [01-first-viewport.png](2-elitefit-concept-v1.3/01-first-viewport.png), [02-full-page.png](2-elitefit-concept-v1.3/02-full-page.png), [15-slow4g-after-5s.png](2-elitefit-concept-v1.3/15-slow4g-after-5s.png), [16-slow4g-loaded.png](2-elitefit-concept-v1.3/16-slow4g-loaded.png)

### J1 See today's class schedule

Totals for the recorded path: 3 taps, 0 swipes, ~3.6 s rough (measured wall 6.7 s). Milestones: schedule today visible: 2 taps, 0 swipes, ~2 s.

Outcome: 2 taps to today's schedule; day selector in place; booking only via the GymMaster app (text only, no link)
- Hand-off: Text only: "Book your spot in advance in the GymMaster app" and "The GymMaster app always has the current week". No link, no badge.
- Alternative path: Without the menu: #classes sits 7134 px down the page (about 12 swipes).

Steps:

4. [04-j1-menu-open.png](2-elitefit-concept-v1.3/04-j1-menu-open.png) TAP hamburger "Open menu" (header, top right)
5. [05-j1-classes-today.png](2-elitefit-concept-v1.3/05-j1-classes-today.png) TAP menu item "Classes" (anchor #classes) — Lands on Classes section with "Today, Thursday" preselected by script (device date); 5 classes with times and coach names.
6. [06-j1-day-tab-mon.png](2-elitefit-concept-v1.3/06-j1-day-tab-mon.png) TAP day tab "Mon" (switches the list) — Day selector works in place; no page load.

Friction:

- No booking button per class: the text sends the visitor to "the GymMaster app" (no link, no store badge)
- No filter by class type or coach (only a day selector)

Works well:

- Day selector with today preselected; times, class name and coach in one scannable list; no horizontal carousel

### J2 Buy a day pass

Totals for the recorded path: 2 taps, 0 swipes, ~2.4 s rough (measured wall 4.9 s). Milestones: day pass price visible: 1 tap, 0 swipes, ~1 s; checkout start: 2 taps, 0 swipes, ~2 s.

Outcome: 2 taps from the homepage to the checkout panel. STOPPED before "Continue to payment" (concept, non-functional).

Stopped at: checkout panel (concept)
- Checkout vendor: none yet (concept only; real vendor to be decided)
- Payment methods visible: not shown in the concept
- Guest checkout: not specified in the concept
- Login wall: not specified

Steps:

7. [07-j2-buy-block.png](2-elitefit-concept-v1.3/07-j2-buy-block.png) TAP hero CTA "Buy a pass - from IDR 300K" — Buy block: pass length chips (Day pass selected), three cards with day-pass prices in IDR.
8. [08-j2-checkout-panel.png](2-elitefit-concept-v1.3/08-j2-checkout-panel.png) TAP button "Buy Perform" (day pass) — Checkout concept panel: "Concept preview - nothing is charged or stored", Your pass / Start date / People / Total, button "Continue to payment" (NOT tapped).

Friction:

- Checkout is a labelled concept: button "Continue to payment" does nothing real. Panel shows "Start date: Chosen at checkout" as plain text (no date picker yet)

Works well:

- Price, currency (IDR) and one button on the same screen; checkout opens as an in-page panel, no page load

### J3 Join / buy a membership

Totals for the recorded path: 3 taps, 0 swipes, ~3.6 s rough (measured wall 7 s). Milestones: membership price visible: 2 taps, 0 swipes, ~2 s; checkout start: 3 taps, 0 swipes, ~4 s.

Outcome: 3 taps from the homepage to the checkout panel. STOPPED before "Continue to payment".

Stopped at: checkout panel (concept)
- Checkout vendor: none yet (concept only)
- Payment methods visible: not shown in the concept
- Guest checkout: not specified
- Login wall: not specified

Steps:

9. [09-j3-buy-block.png](2-elitefit-concept-v1.3/09-j3-buy-block.png) TAP hero CTA "Buy a pass - from IDR 300K"
10. [10-j3-4-weeks-prices.png](2-elitefit-concept-v1.3/10-j3-4-weeks-prices.png) TAP length chip "4 weeks" — Cards re-price to 4-week memberships.
11. [11-j3-checkout-panel.png](2-elitefit-concept-v1.3/11-j3-checkout-panel.png) TAP button "Buy Elite" (4 weeks) — Checkout concept panel for the 4-week Elite membership. "Continue to payment" NOT tapped.

Works well:

- Same three-card block for day, week and membership lengths: one chip tap re-prices the cards

### J4 Contact / ask on WhatsApp

Totals for the recorded path: 3 taps, 0 swipes, ~5.5 s rough (measured wall 8 s). Milestones: whatsapp open: 3 taps, 0 swipes, ~6 s.

Outcome: 3 taps (menu > Personal training > WhatsApp link). Stopped at the WhatsApp page.
- Alternative path: Without the menu: the first WhatsApp link ("Book a free tour on WhatsApp") sits about 12616 px down the page (about 22 swipes); the footer WhatsApp number is lower still.

Steps:

12. [12-j4-menu-open.png](2-elitefit-concept-v1.3/12-j4-menu-open.png) TAP hamburger "Open menu"
13. [13-j4-trainers-section.png](2-elitefit-concept-v1.3/13-j4-trainers-section.png) TAP menu item "Personal training" (anchor #trainers; the mobile menu has no WhatsApp entry)
14. [14-j4-whatsapp-tab.png](2-elitefit-concept-v1.3/14-j4-whatsapp-tab.png) TAP link "Ask about personal training" (wa.me, pre-filled text) — Opens wa.me with pre-filled text "Hello Elite Fit Bali! I'd like to ask about personal training". STOPPED: nothing sent. (load 1.9 s)

Friction:

- No always-visible WhatsApp button on mobile: sticky bar holds only logo + "Buy a pass" + menu; the mobile menu has no WhatsApp or Contact entry
- Concept uses WhatsApp +62 851-9552-0220; the live site uses +62 857-2022-1101 (two different numbers)

Works well:

- Pre-filled message text in every wa.me link

## 3. Body Factory Bali

- URL: https://bodyfactorybali.com/ (redirects to https://www.bodyfactorybali.com/)
- Role: Competitor
- Final URL: https://www.bodyfactorybali.com/ (HTTP 200)

### J0 Landing

[first viewport](3-bodyfactorybali/01-first-viewport.png)

| Fact | Value |
|---|---|
| Above the fold | White header with a 40x40 hamburger; photo slider "WELCOME TO BODY FACTORY BALI", yellow button "GET STARTED" (goes to the memberships list), prev/next arrows. |
| Nav pattern | Hamburger > full-screen list with sub-menus (Home, Classes, Recover, Memberships > Day Pass / Memberships, Meal Plans, STAYS, Property Investment) and a "Login" button. |
| Sticky bars | None on the homepage. A 56 px green WhatsApp button floats on the pricing pages (day pass, memberships) but not on the homepage. |
| Cookie / popup friction | None seen. |
| Overflow / weight | No horizontal overflow. 72 requests, 0.60 MB. Redirect from the bare domain to www. |
| DOMContentLoaded (real, 3 fresh loads: median, range) | 0.5 s (0.5 s to 0.7 s) |
| Load event | 1.8 s (1.2 s to 2.0 s) |
| First contentful paint | 0.6 s |
| Transferred (resource timing) | 0.60 MB; 72 requests |
| Horizontal overflow | none (scroll width 390 = viewport 390) |
| Slow 4G (emulated) | DCL 3.8 s, FCP 3.9 s, load 20.2 s (1 run; screenshots at +5 s and at the end). At +5 s the hero photo, headline and "GET STARTED" are on screen. |
| Document height | 8839 px |

Screenshots: [01-first-viewport.png](3-bodyfactorybali/01-first-viewport.png), [02-full-page.png](3-bodyfactorybali/02-full-page.png), [21-slow4g-after-5s.png](3-bodyfactorybali/21-slow4g-after-5s.png), [22-slow4g-loaded.png](3-bodyfactorybali/22-slow4g-loaded.png)

### J1 See today's class schedule

Totals for the recorded path: 3 taps, 1 swipes, ~5.2 s rough (measured wall 8 s). Milestones: schedule today visible: 2 taps, 1 swipe, ~4 s.

Outcome: Today's schedule after 2 taps + 1 scroll; booking is behind an e-mail/Google login modal
- Login wall: yes (to book)
- Hand-off: No external app: booking runs on bodyfactorybali.com itself (account via e-mail one-time code or Google). Same domain, modal login.

Steps:

4. [04-j1-menu-open.png](3-bodyfactorybali/04-j1-menu-open.png) TAP hamburger (40x40) top right — Menu: Home, Classes, Recover, Memberships (expands), Meal Plans, STAYS, Property Investment, Login. Chevrons mark sub-menus.
5. [05-j1-classes-page.png](3-bodyfactorybali/05-j1-classes-page.png) TAP menu item "Classes" — Classes page: "VIEW SCHEDULE" button, then "ALL CLASSES" with a month selector and a date strip starting at today (THU 1). (load 0.6 s)
6. [06-j1-todays-classes.png](3-bodyfactorybali/06-j1-todays-classes.png) SCROLL 500px — Today is preselected (THU 1); class cards show time, description, coach; started classes read "Registration closed", others "BOOK CLASS".
7. [07-j1-book-class-login-modal.png](3-bodyfactorybali/07-j1-book-class-login-modal.png) TAP button "BOOK CLASS" on a class card — STOP: modal asks for e-mail (one-time code) or "Sign in with Google". Nothing entered.

Friction:

- Tap target under 44 px: hamburger (40x40) top right (40x40)
- Tap target under 44 px: menu item "Classes" (193x28)
- Booking a class needs an account: modal "Please enter your Email to login or signup" (one-time code by e-mail, or Google). Stopped here.
- Schedule is a list of long cards (about 300 px each) with description text: many swipes to scan a full day; no filter by class type or coach

Works well:

- Today preselected; date strip for the whole month; class cards show time, coach and live state ("Registration closed" for started classes); 56 px BOOK CLASS button

### J2 Buy a day pass

Totals for the recorded path: 5 taps, 1 swipes, ~7.2 s rough (measured wall 11.6 s). Milestones: day pass price visible: 4 taps, 1 swipe, ~6 s; checkout start: 5 taps, 1 swipe, ~7 s.

Outcome: 5 taps + 1 scroll to the login modal; payment methods not visible before login

Stopped at: Login/sign-up modal on /gym-day-pass/1-day
- Checkout vendor: own site (account system on bodyfactorybali.com); payment vendor not visible before login
- Payment methods visible: not visible before login
- Guest checkout: no (modal requires e-mail or Google)
- Login wall: yes

Steps:

8. [08-j2-menu-open.png](3-bodyfactorybali/08-j2-menu-open.png) TAP hamburger (40x40)
9. [09-j2-menu-memberships-expanded.png](3-bodyfactorybali/09-j2-menu-memberships-expanded.png) TAP menu item "Memberships" (expands sub-menu) — Sub-menu: Day Pass, Memberships
10. [10-j2-day-pass-list.png](3-bodyfactorybali/10-j2-day-pass-list.png) TAP sub-menu "Day Pass" — Day passes in Canggu: 1, 3, 7 and 14 day pass. A green WhatsApp button (56 px) floats bottom right from this page on. (load 82 ms)
11. [11-j2-1-day-pass-top.png](3-bodyfactorybali/11-j2-1-day-pass-top.png) TAP tile "1 DAY PASS" (load 88 ms)
12. [12-j2-price-gold.png](3-bodyfactorybali/12-j2-price-gold.png) SCROLL 500px — GOLD 1 DAY PASS: Rp540.000 ++, "Excludes 10% tax and 5% service fee", Total Rp623.700 including tax and service. Silver and Bronze tiers follow below.
13. [13-j2-login-modal.png](3-bodyfactorybali/13-j2-login-modal.png) TAP button "Buy Now" (Gold 1 day pass) — STOP: "Please enter your Email to login or signup": e-mail field, Submit, "Sign in with Google". Nothing entered.

Friction:

- Tap target under 44 px: hamburger (40x40) (40x40)
- Tap target under 44 px: menu item "Memberships" (expands sub-menu) (109x20)
- Tap target under 44 px: sub-menu "Day Pass" (237x36)
- Headline price carries "++" and the all-in total is a second line: Rp540.000 ++ vs Rp623.700 (currency is IDR only)
- Login wall before any payment screen: e-mail one-time code or Google; no guest checkout visible
- Day pass is 4 taps deep from the homepage menu before the price appears (menu, Memberships, Day Pass, tile)

Works well:

- Price is split into base, tax/service and a total in IDR on the same card; three tiers per pass length

### J3 Join / buy a membership

Totals for the recorded path: 3 taps, 2 swipes, ~5.9 s rough (measured wall 8.9 s). Milestones: membership price visible: 1 tap, 1 swipe, ~2 s; checkout start: 3 taps, 2 swipes, ~6 s.

Outcome: 3 taps + 2 scrolls from the homepage hero to the login modal

Stopped at: Login/sign-up modal on /gym-memberships/gold
- Checkout vendor: own site; payment vendor not visible before login
- Payment methods visible: not visible before login
- Guest checkout: no
- Login wall: yes

Steps:

14. [14-j3-memberships-page.png](3-bodyfactorybali/14-j3-memberships-page.png) TAP hero button "GET STARTED" — Hero CTA goes straight to /gym-memberships (28 days to 1 year): Gold, Silver, Bronze cards with "4 weeks starting from". (load 88 ms)
15. [15-j3-gold-card.png](3-bodyfactorybali/15-j3-gold-card.png) SCROLL 400px — GOLD: Rp 3.594.000,00++ for 4 weeks
16. [16-j3-gold-page.png](3-bodyfactorybali/16-j3-gold-page.png) TAP card button "LEARN MORE" (Gold) (load 0.2 s)
17. [17-j3-gold-4-week-price.png](3-bodyfactorybali/17-j3-gold-4-week-price.png) SCROLL 700px — GOLD 4 WEEK: Rp3.594.000 ++, Total Rp4.151.070 including tax and service; Buy Now
18. [18-j3-login-modal.png](3-bodyfactorybali/18-j3-login-modal.png) TAP button "Buy Now" (Gold 4 week) — STOP: e-mail / Google modal. Nothing entered.

Friction:

- Two screens (list, then detail) before Buy Now; the price appears twice with different values (from Rp 3.594.000,00++ and total Rp4.151.070)

Works well:

- Hero CTA "GET STARTED" lands directly on the membership list: 1 tap

### J4 Contact / ask on WhatsApp

Totals for the recorded path: 1 taps, 9 swipes, ~13.7 s rough (measured wall 6 s). Milestones: whatsapp open: 1 tap, 9 swipes, ~14 s.

Outcome: 1 tap after about 9 swipes to the footer (homepage); 4 taps via the pricing pages. Stopped at the WhatsApp page.
- Alternative path: From /gym-day-pass and /gym-memberships a 56 px green floating WhatsApp button (api.whatsapp.com, pre-filled "I'd like to learn more about memberships and day passes") is on screen: homepage > menu > Memberships > Day Pass (3 taps) then 1 tap.

Steps:

19. [19-j4-footer-whatsapp.png](3-bodyfactorybali/19-j4-footer-whatsapp.png) SCROLL to footer WhatsApp number (homepage has no floating button) (~9 swipes, 5191px) — Homepage footer: "+ 62 811-3810-255", a wa.me link with pre-filled text.
20. [20-j4-whatsapp-opened.png](3-bodyfactorybali/20-j4-whatsapp-opened.png) TAP footer link "+ 62 811-3810-255" (wa.me, pre-filled text) — STOPPED at the WhatsApp page. Nothing sent. (load 3.5 s)

Friction:

- Tap target under 44 px: footer link "+ 62 811-3810-255" (wa.me, pre-filled text) (300x28)
- Homepage has no WhatsApp button; first link is in the footer about 5,600 px down the page

Works well:

- Pre-filled message text; floating WhatsApp button on the pricing pages

## 4. Reload Sanctuary

- URL: https://reloadsanctuary.com/ (shop and schedule on app.reloadsanctuary.com)
- Role: Competitor
- Final URL: https://reloadsanctuary.com/ (HTTP 200)

### J0 Landing

[first viewport](4-reloadsanctuary/01-first-viewport.png)

| Fact | Value |
|---|---|
| Above the fold | A full-screen event popup ("Reload Social Vol. 3", Friday 2026-10-02, buttons "BOOK ON THE APP" and "Maybe later") covers the whole first screen. Behind it: sticky header 96 px, hero "Train. Recover. Fuel. Connect." with buttons "Day Pass" and "Membership". |
| Nav pattern | Hamburger "Open menu" (38x32): Membership, The Gym, Events, Classes, Trainers, Recovery & Wellness, Restaurant, About Us, Blog, Sign In. |
| Sticky bars | Header 96 px; floating WhatsApp button (54x54, under the popup at first); on app pages a fixed bottom tab bar (Home, Classes, Menu, Pass, Events) that can cover buttons. |
| Cookie / popup friction | Event popup on every fresh visit; its "Maybe later" text link is 314x22 px, the close x is 32x32. |
| Overflow / weight | No horizontal overflow. 58 requests, 4.0 to 7.7 MB transferred depending on how much video loads; page 18,942 px tall. |
| DOMContentLoaded (real, 3 fresh loads: median, range) | 0.3 s (0.2 s to 0.4 s) |
| Load event | 2.0 s (1.4 s to 2.6 s) |
| First contentful paint | 0.3 s |
| Transferred (resource timing) | 7.71 MB; 58 requests |
| Horizontal overflow | none (scroll width 390 = viewport 390) |
| Slow 4G (emulated) | DCL 4.4 s, FCP 1.3 s, load 82.7 s (1 run; screenshots at +5 s and at the end). The +5 s screenshot timed out (page busy decoding video), so there is no 5 s picture; DOMContentLoaded came at 4.4 s. |
| Document height | 18942 px |

Screenshots: [01-first-viewport.png](4-reloadsanctuary/01-first-viewport.png), [02-full-page.png](4-reloadsanctuary/02-full-page.png), [27-slow4g-loaded.png](4-reloadsanctuary/27-slow4g-loaded.png)

### J1 See today's class schedule

Totals for the recorded path: 5 taps, 0 swipes, ~15 s rough (measured wall 27.1 s). Milestones: schedule today visible: 4 taps, 0 swipes, ~13 s.

Outcome: 4 taps to today's schedule (popup, menu, Classes, BOOK A CLASS); schedule is the club app on a different domain, opened in a new tab
- Hand-off: reloadsanctuary.com > app.reloadsanctuary.com/classes (own app, new tab). No third-party vendor name visible on the screen.

Steps:

4. [04-j1-popup-dismissed.png](4-reloadsanctuary/04-j1-popup-dismissed.png) TAP popup "Maybe later" (event popup fills the first screen) — Full-screen event popup ("Reload Social Vol. 3", BOOK ON THE APP / Maybe later) must be dismissed first.
5. [05-j1-menu-open.png](4-reloadsanctuary/05-j1-menu-open.png) TAP hamburger "Open menu" (38x32) — Menu: Membership, The Gym, Events, Classes, Trainers, Recovery & Wellness, Restaurant, About Us, Blog, Sign In.
6. [06-j1-bookaclass-page.png](4-reloadsanctuary/06-j1-bookaclass-page.png) TAP menu item "Classes" — Marketing page: BOOK A CLASS button and class descriptions (no times). The timetable lives in the app on another domain. (load 3.8 s)
7. [07-j1-app-schedule.png](4-reloadsanctuary/07-j1-app-schedule.png) TAP button "BOOK A CLASS" (opens a NEW TAB on app.reloadsanctuary.com) — New tab: app.reloadsanctuary.com/classes. Date strip Oct 1 to Oct 7, today (Thu 1) preselected, class cards with time, coach, room, spots. (load 1.2 s)
8. [08-j1-app-schedule-loaded.png](4-reloadsanctuary/08-j1-app-schedule-loaded.png) WAIT — App schedule after 3.5 s: today list with "11 / 12 booked", Available / Full (Waitlist Available), Book Class / Join Waitlist.
9. [09-j1-book-class-tap.png](4-reloadsanctuary/09-j1-book-class-tap.png) TAP button "Book Class" on the first class card — What the app shows after tapping Book Class (no data entered).

Friction:

- Tap target under 44 px: popup "Maybe later" (event popup fills the first screen) (314x22)
- Tap target under 44 px: hamburger "Open menu" (38x32) (38x32)
- Tap target under 44 px: button "Book Class" on the first class card (324x36)
- Event popup covers the whole first screen on the marketing site; 1 extra tap before anything else
- Marketing "Classes" page has no times; timetable is on app.reloadsanctuary.com in a NEW TAB (context switch from reloadsanctuary.com to the app domain)
- Marketing page weight: homepage about 7.7 MB transferred (see J0)

Works well:

- Live capacity per class ("11 / 12 booked", "Full (Waitlist Available)", "2 spots available"), 7-day strip with today preselected, waitlist, booking policy line

### J2 Buy a day pass

Totals for the recorded path: 6 taps, 1 swipes, ~16 s rough (measured wall 23.2 s). Milestones: day pass price visible: 2 taps, 0 swipes, ~4 s; checkout start: 4 taps, 0 swipes, ~11 s.

Outcome: Homepage > DAY PASS > GET DAY PASS > Create Account > plan > Continue = Details form (stop)

Stopped at: Sign-up wizard step 2 "Details" on app.reloadsanctuary.com/signup
- Checkout vendor: own app (app.reloadsanctuary.com); payment provider not visible before step 4
- Payment methods visible: not visible before step 4 (after personal details and terms)
- Guest checkout: no (account created in step 2)
- Login wall: yes (account required)

Steps:

10. [10-j2-popup-dismissed.png](4-reloadsanctuary/10-j2-popup-dismissed.png) TAP popup "Maybe later" — Hero: Train. Recover. Fuel. Connect. with two buttons: Day Pass and Membership.
11. [11-j2-day-passes-block.png](4-reloadsanctuary/11-j2-day-passes-block.png) TAP hero button "DAY PASS" (anchor #day-passes) — On-page price cards: Popular Day Pass IDR 549.000, Sunrise IDR 449.000, Sunset IDR 349.000, 3 Day IDR 1.399.000, 7 Day IDR 1.999.000.
12. [12-j2-app-passes.png](4-reloadsanctuary/12-j2-app-passes.png) TAP button "GET DAY PASS" — Goes to app.reloadsanctuary.com/gym/passes: "Select a plan", "Tax included. No hidden fees.", every card ends in "Create Account". (load 2.5 s)
13. [13-j2-signup-step1.png](4-reloadsanctuary/13-j2-signup-step1.png) TAP button "Create Account" under the 1-Day Pass card — Sign-up wizard: 1 Membership, 2 Details, 3 Terms, 4 Payment, 5 Done. Step 1 = pick a plan.
14. [14-j2-plan-selected.png](4-reloadsanctuary/14-j2-plan-selected.png) TAP plan card "1-Day Pass" — Plan picked.
15. [15-j2-continue-visible.png](4-reloadsanctuary/15-j2-continue-visible.png) SCROLL to wizard "Continue" button (~1 swipes, 362px)
16. [16-j2-signup-step2-details.png](4-reloadsanctuary/16-j2-signup-step2-details.png) TAP button "Continue" (to step 2 Details) — STOP: first screen asking for personal data (step 2 Details). Nothing entered.

Friction:

- Tap target under 44 px: popup "Maybe later" (314x22)
- Tap target under 44 px: plan card "1-Day Pass" (192x24)
- Account required before payment: every card says "Create Account"; wizard has 5 steps (Membership, Details, Terms, Payment, Done)
- Hand-off from reloadsanctuary.com to app.reloadsanctuary.com (different domain, different look)

Works well:

- Price shown as "Rp549.000 - Tax included"; "No hidden fees" line; day pass options by time of day (Sunrise / Sunset / Full day) on the homepage

### J3 Join / buy a membership

Totals for the recorded path: 7 taps, 0 swipes, ~14.4 s rough (measured wall 24 s). Milestones: membership price visible: 2 taps, 0 swipes, ~4 s; checkout start: 5 taps, 0 swipes, ~10 s.

Outcome: Same path as J2 with the Memberships tab; stop at Details

Stopped at: Sign-up wizard step 2 "Details"
- Checkout vendor: own app
- Payment methods visible: not visible before step 4
- Guest checkout: no
- Login wall: yes (account required)

Steps:

17. [17-j3-popup-dismissed.png](4-reloadsanctuary/17-j3-popup-dismissed.png) TAP popup "Maybe later"
18. [18-j3-membership-block.png](4-reloadsanctuary/18-j3-membership-block.png) TAP hero button "MEMBERSHIP" (anchor #membership) — Cards: 1 Month IDR 3.699.000 (best seller), 3 Months IDR 9.499.000, 6 Months IDR 17.499.000, 12 Months IDR 29.999.000, with savings badges.
19. [19-j3-app-passes.png](4-reloadsanctuary/19-j3-app-passes.png) TAP button "JOIN NOW" — Same app page as the day passes. (load 0.4 s)
20. [20-j3-app-memberships-tab.png](4-reloadsanctuary/20-j3-app-memberships-tab.png) TAP tab "Memberships" on the app plans page
21. [21-j3-signup-step1.png](4-reloadsanctuary/21-j3-signup-step1.png) TAP button "Create Account" (first membership card)
22. [22-j3-plan-selected.png](4-reloadsanctuary/22-j3-plan-selected.png) TAP plan card "1-Month Membership"
23. [23-j3-signup-step2-details.png](4-reloadsanctuary/23-j3-signup-step2-details.png) TAP button "Continue" — STOP: Details form. Nothing entered.

Friction:

- Tap target under 44 px: popup "Maybe later" (314x22)
- Tap target under 44 px: tab "Memberships" on the app plans page (330x32)
- Tap target under 44 px: plan card "1-Month Membership" (179x24)
- Membership uses the same account wizard as day passes: 7 taps from the homepage to the Details form

### J4 Contact / ask on WhatsApp

Totals for the recorded path: 2 taps, 0 swipes, ~5.8 s rough (measured wall 5.4 s). Milestones: whatsapp open: 2 taps, 0 swipes, ~6 s.

Outcome: 2 taps (popup, floating WhatsApp). Stopped at the WhatsApp page.

Steps:

24. [24-j4-popup-dismissed.png](4-reloadsanctuary/24-j4-popup-dismissed.png) TAP popup "Maybe later"
25. [25-j4-whatsapp-opened.png](4-reloadsanctuary/25-j4-whatsapp-opened.png) TAP floating WhatsApp button (wa-float) — STOPPED at the WhatsApp page. Nothing sent. (load 1.8 s)

Friction:

- Tap target under 44 px: popup "Maybe later" (314x22)

Works well:

- Floating WhatsApp button with pre-filled text "Hello, I would like more information please."

## 5. Nirvana Life (gym side at /bali/)

- URL: https://nirvanalife.com/ (Bali club at https://nirvanalife.com/bali/)
- Role: Competitor
- Final URL: https://nirvanalife.com/ (HTTP 200)

### J0 Landing

[first viewport](5-nirvanalife/01-first-viewport.png)

| Fact | Value |
|---|---|
| Above the fold | The root page is a one-screen global landing: "Built for Discipline. Designed to Inspire. Sustained by Community." and one button "Join Nirvana Life" (175x53) that goes to /bali/. E-mail, +62 818 0398 0800 (WhatsApp link), address and a contact form sit lower on the same short page. The Bali club page (/bali/) opens on "Premium Gym and Recovery in Canggu, Bali" with "Explore Passes" and "Explore Memberships" and a ratings strip. |
| Nav pattern | Small menu icon (33x26) opening an off-canvas menu: Facilities, Memberships, Passes, Schedule, Personalised Coaching, Events, What's On, Retreats, Investment, Gift Card, Contact. Cart icon top right. |
| Sticky bars | Fixed header 68 px with cart. A floating "WhatsApp Us" button appears on /bali/ pages after the first touch. |
| Cookie / popup friction | Scripts are delayed until the first touch: the cookie banner (Accept / Decline, 270x46 buttons, about 477 px tall, over half the screen) appears only after the first touch. The Bali schedule and the product options stay empty until then. |
| Overflow / weight | No horizontal overflow. Root: 50 requests, 0.80 MB. /bali/: 80 requests, 0.99 MB. |
| DOMContentLoaded (real, 3 fresh loads: median, range) | 1.0 s (1.0 s to 1.2 s) |
| Load event | 1.2 s (1.2 s to 1.3 s) |
| First contentful paint | 1.0 s |
| Transferred (resource timing) | 0.80 MB; 50 requests |
| Horizontal overflow | none (scroll width 390 = viewport 390) |
| Slow 4G (emulated) | DCL 6.9 s, FCP 5.4 s, load 9.2 s (1 run; screenshots at +5 s and at the end). At +5 s the headline and "Join Nirvana Life" are on screen. |
| Document height | 1889 px |

Screenshots: [01-first-viewport.png](5-nirvanalife/01-first-viewport.png), [02-full-page.png](5-nirvanalife/02-full-page.png), [03-first-touch-cookie-banner.png](5-nirvanalife/03-first-touch-cookie-banner.png), [32-slow4g-after-5s.png](5-nirvanalife/32-slow4g-after-5s.png), [33-slow4g-loaded.png](5-nirvanalife/33-slow4g-loaded.png)

### J1 See today's class schedule

Totals for the recorded path: 4 taps, 1 swipes, ~14.5 s rough (measured wall 26.1 s). Milestones: schedule today visible: 4 taps, 1 swipe, ~15 s.

Outcome: 4 taps + 1 touch to today's classes; hand-off to the GymMaster member portal on another domain
- Hand-off: nirvanalife.com/bali/schedule/ > redirect to nirvanastrengthbali.gymmasteronline.com/portal/... (GymMaster). Shows App Store and Google Play badges.

Steps:

7. [07-j1-bali-home.png](5-nirvanalife/07-j1-bali-home.png) TAP button "Join Nirvana Life" (root page > /bali/) — Bali club page: "Premium Gym and Recovery in Canggu, Bali", Explore Passes / Explore Memberships. (load 3.7 s)
8. [08-j1-menu-open.png](5-nirvanalife/08-j1-menu-open.png) TAP hamburger icon (33x26) — Menu: Facilities, Memberships, Passes, Schedule, Personalised Coaching, Events, What's On, Retreats, Investment, Gift Card, Contact.
9. [09-j1-schedule-blank.png](5-nirvanalife/09-j1-schedule-blank.png) TAP menu item "Schedule" — Schedule page before any touch on this page: header only, then an empty area (the GymMaster frame is not loaded yet). (load 1.3 s)
10. [10-j1-schedule-still-blank.png](5-nirvanalife/10-j1-schedule-still-blank.png) WAIT 3.5 s — After 3.5 s with no touch the schedule area is still empty.
11. [11-j1-gymmaster-redirect.png](5-nirvanalife/11-j1-gymmaster-redirect.png) TOUCH first touch on the schedule page (stand-in for the first swipe) — First touch loads the scripts; the GymMaster frame says "Redirecting to mobile view..."
12. [12-j1-gymmaster-portal.png](5-nirvanalife/12-j1-gymmaster-portal.png) WAIT — Hand-off: the whole page is now the GymMaster member portal (nirvanastrengthbali.gymmasteronline.com): week strip 28 Sep - 4 Oct, days as collapsed rows, App Store / Google Play badges.
13. [13-j1-gymmaster-today-open.png](5-nirvanalife/13-j1-gymmaster-today-open.png) TAP row "Thursday 1 Oct 2026" (accordion, collapsed) — Today expanded: times, class names, rooms, coach names. List is about 3,000 px long.

Friction:

- Tap target under 44 px: hamburger icon (33x26) (33x26)
- Tap target under 44 px: menu item "Schedule" (330x31)
- Tap target under 44 px: row "Thursday 1 Oct 2026" (accordion, collapsed) (342x23)
- Schedule page is blank until the first touch (scripts delayed): in a first look the visitor sees an empty page
- Hand-off: the schedule page redirects the whole page to nirvanastrengthbali.gymmasteronline.com (different domain, different layout; "Redirecting to mobile view" message)
- Today is not preselected: all 7 days are collapsed rows and today has to be tapped open; Thursday sits after Mon, Tue, Wed rows

Works well:

- Full week in one view; each day is a row; class list shows time, class, room and coach; same GymMaster look people know from the app

### J2 Buy a day pass

Totals for the recorded path: 5 taps, 1 swipes, ~22.9 s rough (measured wall 23.7 s). Milestones: day pass price visible: 2 taps, 0 swipes, ~9 s; checkout start: 5 taps, 1 swipe, ~23 s.

Outcome: Day pass: 5 taps + 1 touch to the checkout billing form (Reserve Now); stopped there

Stopped at: https://nirvanalife.com/bali/checkout/
- Checkout vendor: WooCommerce on nirvanalife.com (Xendit virtual-account plugin present in the page assets)
- Payment methods visible: not visible above the billing form (the screen ends at billing details; payment step not reached)
- Guest checkout: yes (billing form with optional "Create an account?" checkbox and a "Returning customer? login" link)
- Login wall: no (optional)

Steps:

14. [14-j2-bali-home.png](5-nirvanalife/14-j2-bali-home.png) TAP button "Join Nirvana Life" (load 3.2 s)
15. [15-j2-passes-page.png](5-nirvanalife/15-j2-passes-page.png) TAP button "Explore Passes" — Passes page: "Club Passes & Class Passes", Life Passes from IDR 725,000++ per day, "All prices are in IDR and subject to 10% tax and 5% service charge". (load 2.2 s)
16. [16-j2-product-before-touch.png](5-nirvanalife/16-j2-product-before-touch.png) TAP link "Get Your Pass" — Product page: "Choose your duration" with no options visible yet (scripts delayed). (load 1.2 s)
17. [17-j2-product-after-touch.png](5-nirvanalife/17-j2-product-after-touch.png) TOUCH first touch on the product page — After the first touch: duration options, price IDR 725,000, quantity, Reserve Now; cookie banner covers the lower part of the screen.
18. [18-j2-cookie-declined.png](5-nirvanalife/18-j2-cookie-declined.png) TAP cookie banner "Decline" (270x46)
19. [19-j2-duration-preselected.png](5-nirvanalife/19-j2-duration-preselected.png) LOOK — Single Day Pass is preselected (IDR 725,000); no option tap needed.
20. [20-j2-checkout-billing-details.png](5-nirvanalife/20-j2-checkout-billing-details.png) TAP button "Reserve Now" — STOP: /bali/checkout/ "Almost there": Returning customer? login, Billing details (First Name, Last Name, Country, Phone, Email, Create an account?). Nothing entered. (load 4.8 s)

Friction:

- Price shows "IDR 725,000++" with a footnote (10% tax + 5% service); the all-in total is not shown on the pass page
- Cookie banner (270x46 buttons) covers the lower part of the screen on the product page
- Product page options are empty until the first touch (delayed scripts)

Works well:

- One-line trust note under the price: "Your membership only starts when you check in"; price on the pass page is clear in IDR

### J2b Checkout page read (no data entered)

Totals for the recorded path: 2 taps, 3 swipes, ~12.2 s rough (measured wall 12.2 s). Milestones: .

Outcome: Checkout page read below the billing fields (nothing typed or submitted): one payment option, "Xendit Payment Gateway"; the order review adds service charge and tax to the pass price.
- Payment methods visible: Only "Xendit Payment Gateway" is named ("Pay your order via Xendit Payment Gateway", Xendit logo); individual methods (cards, bank transfer, QRIS, e-wallets) are not listed on this page. Order review: Subtotal Rp725.000, Service Rp36.250, Tax Rp76.125, Total Rp837.375.
- Guest checkout: Yes: billing fields (First Name, Last Name, Country, Phone, Email) with an optional "Create an account?" checkbox and a "Returning customer? Click here to login" link; terms checkbox.

Steps:

28. [28-j2b-product-after-touch.png](5-nirvanalife/28-j2b-product-after-touch.png) TOUCH first touch on the product page
29. [29-j2b-cookie-declined.png](5-nirvanalife/29-j2b-cookie-declined.png) TAP cookie banner "Decline" (270x46)
30. [30-j2b-checkout-top.png](5-nirvanalife/30-j2b-checkout-top.png) TAP button "Reserve Now" (Single Day Pass preselected) — Checkout billing form (nothing typed). (load 3.7 s)
31. [31-j2b-payment-block.png](5-nirvanalife/31-j2b-payment-block.png) SCROLL to order review / payment block (~2 swipes, 680px) — Order review and payment block as shown before any data is entered.

Friction:

- Headline price "IDR 725,000++" becomes Rp837.375 at checkout (service charge 5% and tax 10% are added only in the order review).

### J3 Join / buy a membership

Totals for the recorded path: 5 taps, 1 swipes, ~27 s rough (measured wall 30.5 s). Milestones: membership price visible: 2 taps, 0 swipes, ~11 s; checkout start: 5 taps, 1 swipe, ~27 s.

Outcome: Membership: Reserve Now leads to the checkout billing form; stopped there

Stopped at: https://nirvanalife.com/bali/checkout/
- Checkout vendor: WooCommerce on nirvanalife.com
- Payment methods visible: not visible above the billing form (the screen ends at billing details; payment step not reached)
- Guest checkout: yes (billing form with optional "Create an account?" checkbox and a "Returning customer? login" link)
- Login wall: no (optional)

Steps:

21. [21-j3-bali-home.png](5-nirvanalife/21-j3-bali-home.png) TAP button "Join Nirvana Life" (load 2.4 s)
22. [22-j3-memberships-page.png](5-nirvanalife/22-j3-memberships-page.png) TAP button "Explore Memberships" — Tiers: Life IDR 3,200,000++ / 4 weeks, Balance IDR 3,040,000++, Rejuvenate. "Buy online in minutes · Secure checkout". (load 4.3 s)
23. [23-j3-product-before-touch.png](5-nirvanalife/23-j3-product-before-touch.png) TAP link "Choose Life" (load 2.0 s)
24. [24-j3-product-after-touch.png](5-nirvanalife/24-j3-product-after-touch.png) TOUCH first touch on the product page
25. [25-j3-cookie-declined.png](5-nirvanalife/25-j3-cookie-declined.png) TAP cookie banner "Decline" (270x46)
26. [26-j3-checkout-billing-details.png](5-nirvanalife/26-j3-checkout-billing-details.png) TAP button "Reserve Now" (membership product) — STOP at the checkout billing form. Nothing typed. (load 6.8 s)

### J4 Contact / ask on WhatsApp

Totals for the recorded path: 1 taps, 0 swipes, ~2 s rough (measured wall 8.4 s). Milestones: whatsapp open: 1 tap, 0 swipes, ~2 s.

Outcome: 1 tap on the root page (number shown on the first screens). Stopped at the WhatsApp page.

Steps:

27. [27-j4-whatsapp-opened.png](5-nirvanalife/27-j4-whatsapp-opened.png) TAP phone number link "+62 818 0398 0800" on the root page (opens WhatsApp) — api.whatsapp.com/send, no pre-filled text. STOPPED, nothing sent.

Friction:

- Tap target under 44 px: phone number link "+62 818 0398 0800" on the root page (opens WhatsApp) (111x13)
- Root WhatsApp link has no pre-filled text; the /bali/ page has a separate WhatsApp Us button (a different number, +62 811 3810 1449)

Works well:

- Phone number on the one-screen root page is a WhatsApp link: 1 tap

## 6. RITE Bali

- URL: https://ritebali.com/ (Shopify store)
- Role: Competitor
- Final URL: https://ritebali.com/ (HTTP 200)

### J0 Landing

[first viewport](6-ritebali/01-first-viewport.png)

| Fact | Value |
|---|---|
| Above the fold | Full-screen video hero (a "Play video" button covers 390x860 px) with the line "A Place to Feel Whole". No button, no price, no menu text: only the 44x44 hamburger and the logo. |
| Nav pattern | Hamburger "Site navigation" (44x44) > drawer: Club, Memberships, Classes (expands to Schedule, Class Descriptions), Training, Members Benefits, About. |
| Sticky bars | Sticky header 92 px. |
| Cookie / popup friction | None seen. |
| Overflow / weight | No horizontal overflow. 112 requests, 11.5 MB transferred (video); page 8,386 px tall. |
| DOMContentLoaded (real, 3 fresh loads: median, range) | 0.4 s (0.4 s to 0.5 s) |
| Load event | 1.8 s (1.6 s to 1.9 s) |
| First contentful paint | 0.4 s |
| Transferred (resource timing) | 11.52 MB; 112 requests |
| Horizontal overflow | none (scroll width 390 = viewport 390) |
| Slow 4G (emulated) | DCL 3.5 s, FCP 0.8 s, load 64.2 s (1 run; screenshots at +5 s and at the end). At +5 s only the logo and the line "A Place to Feel Whole" over the video are on screen; the 11.5 MB page takes about 64 s to finish loading. |
| Document height | 8386 px |

Screenshots: [01-first-viewport.png](6-ritebali/01-first-viewport.png), [02-full-page.png](6-ritebali/02-full-page.png), [23-slow4g-after-5s.png](6-ritebali/23-slow4g-after-5s.png), [24-slow4g-loaded.png](6-ritebali/24-slow4g-loaded.png)

### J1 See today's class schedule

Totals for the recorded path: 5 taps, 0 swipes, ~11.5 s rough (measured wall 14.3 s). Milestones: schedule portal reached: 4 taps, 0 swipes, ~10 s; schedule today visible: 5 taps, 0 swipes, ~12 s.

Outcome: Menu path to the live schedule: 4 taps (menu, Classes, Schedule, Book Class) + day row
- Hand-off: ritebali.com/pages/schedule > taubaligroup.gymmasteronline.com (GymMaster portal; shared group account name "taubaligroup")

Steps:

6. [06-j1-menu-open.png](6-ritebali/06-j1-menu-open.png) TAP hamburger "Site navigation" (44x44) — Drawer: Club, Memberships, Classes (expands), Training, Members Benefits, About.
7. [07-j1-menu-classes-expanded.png](6-ritebali/07-j1-menu-classes-expanded.png) TAP menu row "Classes" (expands Schedule / Class Descriptions)
8. [08-j1-schedule-page.png](6-ritebali/08-j1-schedule-page.png) TAP sub-menu "Schedule" — Page with two buttons: "Book Class" and "Class Schedule" (the latter is a Google Drive file), plus "Browse Classes". (load 0.8 s)
9. [09-j1-gymmaster-portal.png](6-ritebali/09-j1-gymmaster-portal.png) TAP button "Book Class" (to the GymMaster member portal) — Hand-off to taubaligroup.gymmasteronline.com (GymMaster portal). (load 0.7 s)
10. [10-j1-gymmaster-portal-loaded.png](6-ritebali/10-j1-gymmaster-portal-loaded.png) WAIT — GymMaster portal after 3.5 s.
11. [11-j1-gymmaster-today-open.png](6-ritebali/11-j1-gymmaster-today-open.png) TAP row "Thursday 1 Oct 2026" (collapsed day row)

Friction:

- Tap target under 44 px: menu row "Classes" (expands Schedule / Class Descriptions) (370x43)
- Tap target under 44 px: sub-menu "Schedule" (370x43)
- Tap target under 44 px: row "Thursday 1 Oct 2026" (collapsed day row) (342x23)
- Two schedule routes on the page: "Book Class" (live portal) and "Class Schedule" (a Google Drive file); the second leaves the site for a file viewer
- Homepage first screen has no visible menu text or CTA: only the 44 px hamburger and a full-screen video

Works well:

- Schedule is one tap deeper than the menu; "Book Class" goes straight to the live GymMaster calendar

### J2 Buy a day pass

Totals for the recorded path: 3 taps, 0 swipes, ~8 s rough (measured wall 6.4 s). Milestones: day pass price visible: 2 taps, 0 swipes, ~5 s; checkout start: 3 taps, 0 swipes, ~8 s.

Outcome: 2 taps to the price, 3rd tap opens WhatsApp; no checkout on the site

Stopped at: WhatsApp page (wa.me/6282236659949)
- Checkout vendor: none (WhatsApp conversation; Shopify store has a cart but the pass is not sold through it)
- Payment methods visible: not visible (agreed in chat)
- Guest checkout: n/a
- Login wall: no

Steps:

12. [12-j2-menu-open.png](6-ritebali/12-j2-menu-open.png) TAP hamburger "Site navigation" (44x44)
13. [13-j2-memberships-page.png](6-ritebali/13-j2-memberships-page.png) TAP menu item "Memberships" — Price cards: Day Pass 500.000 IDR (Tax Included), 3-Day Pass 1.200.000 IDR, weekly to yearly memberships. (load 0.8 s)
14. [14-j2-whatsapp-opened.png](6-ritebali/14-j2-whatsapp-opened.png) TAP button "Book Now" (Day Pass) (opens WhatsApp) — The only purchase route: wa.me/6282236659949, no pre-filled text. STOPPED, nothing sent. (load 1.1 s)

Friction:

- Tap target under 44 px: menu item "Memberships" (370x43)
- No online purchase: every button on the Memberships page (Day Pass, 3-Day, weekly to yearly) is a WhatsApp link; the visitor chats first, pays outside the site
- Currency shown as "500.000 IDR (Tax Included)"; IDR only

Works well:

- Price, "Tax Included", and a ticked/crossed benefit list on the same card

### J3 Join / buy a membership

Totals for the recorded path: 3 taps, 9 swipes, ~21.1 s rough (measured wall 7.4 s). Milestones: membership price visible: 2 taps, 9 swipes, ~18 s; checkout start: 3 taps, 9 swipes, ~21 s.

Outcome: Memberships: 3 taps + scrolling to the card; opens WhatsApp; no checkout

Stopped at: WhatsApp page (wa.me/6282236659949)
- Checkout vendor: none
- Payment methods visible: not visible
- Guest checkout: n/a
- Login wall: no

Steps:

17. [17-j3-menu-open.png](6-ritebali/17-j3-menu-open.png) TAP hamburger "Site navigation" (44x44)
18. [18-j3-memberships-page.png](6-ritebali/18-j3-memberships-page.png) TAP menu item "Memberships" (load 0.4 s)
19. [19-j3-4-week-card.png](6-ritebali/19-j3-4-week-card.png) SCROLL to "Book Now" under the 4-Week Membership - Unlimited Access card (8th card, about 5,200 px down) (~9 swipes, 4808px)
20. [20-j3-whatsapp-opened.png](6-ritebali/20-j3-whatsapp-opened.png) TAP button "4-Week Membership - Unlimited Access" (opens WhatsApp) — wa.me/6282236659949. STOPPED. (load 1.1 s)

Friction:

- Tap target under 44 px: menu item "Memberships" (370x43)

### J4 Contact / ask on WhatsApp

Totals for the recorded path: 2 taps, 13 swipes, ~25.5 s rough (measured wall 18.1 s). Milestones: whatsapp open: 2 taps, 13 swipes, ~26 s.

Outcome: 2 taps after about 13 swipes to the footer (Contact row, then the WhatsApp link). Stopped at the WhatsApp page.

Steps:

25. [25-j4-footer-accordion.png](6-ritebali/25-j4-footer-accordion.png) SCROLL 13 swipes in total — Footer is a set of collapsed rows (Navigation, Club, About, Help, Socials, Contact) reached after swiping down the page; the WhatsApp link is inside "Contact".
26. [26-j4-footer-contact-open.png](6-ritebali/26-j4-footer-contact-open.png) TAP footer row "Contact" (expands)
27. [27-j4-whatsapp-opened.png](6-ritebali/27-j4-whatsapp-opened.png) TAP footer link "WhatsApp" (wa.me/6282236659949, 160x19), no pre-filled text — STOPPED at the WhatsApp page. Nothing sent. (load 2.0 s)

Friction:

- Tap target under 44 px: footer link "WhatsApp" (wa.me/6282236659949, 160x19), no pre-filled text (160x19)
- No floating WhatsApp button; the general contact link is in the footer, far down the 8,386 px homepage; the only other WhatsApp link above it belongs to a KITAS / work-permit "More Info" tile

## Change log

- v1.0 (2026-10-01): first complete run, all six sites, J0 to J4 (plus J2b, a read-only look at the Nirvana checkout page).
- v1.0: first set of Reload timing runs was discarded (machine overload, one load took 68 s) and repeated; Reload slow-4G 5 s screenshot timed out and is not available.
- v1.0: RITE J4 re-run through the footer (the first WhatsApp link on its homepage belongs to a KITAS / work-permit tile).
- v1.0: concept v1.3 was served locally with python3 -m http.server and stopped afterwards; nothing in site-preview/ was edited.
