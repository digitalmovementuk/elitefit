> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Elite Fit Bali — technology feasibility and delivery scope

**Internal plan for Mohammed (Mo) · 21 October 2026**  
**Status: preliminary.** Research confirms GymMaster has a standard website module. ESB order creation has public API documentation, but the exact ESB product and its fit for gym purchases are unconfirmed. This is a separate integration add-on to the 12–15-page website scope.

## Assessment

**Feasible in principle, but not ready for a fixed integration quote.** Start by testing GymMaster’s ready-made website module for memberships, registrations, forms and class/PT bookings. Add ESB only if Elite Fit confirms what it is used for and the provider confirms it can handle the required gym orders and payment journey.

Patrick’s reply was “Ideally in our website”; treat this as a preference, not a confirmed must-have, until he confirms.\n\nThe project’s public prototype is mock-only. It does not take live payments, save member records or send follow-up. No Elite Fit account, provider sandbox or real transaction has been tested.

**Important ESB finding:** the public ESB docs found in research appear to describe **ESB Order QS**, a restaurant ordering product. Its API guide includes total calculation and order saving, and shows payment steps. The documented order examples are restaurant-style (dine-in, takeaway and delivery) and the payment response includes a gateway redirect URL. This proves an ordering API exists for that product; it does **not** prove that this is Elite Fit’s ESB product, that gym memberships can be sold through it, or that payment can stay inside the Elite Fit website. Ask Patrick to confirm the exact ESB product/account before treating this as the relevant system.

## Feasibility and delivery matrix

Effort bars compare active work across these tasks: **1 = smallest, 5 = largest**. They are not days and exclude time waiting for Elite Fit or providers. Ratings are provisional until account access and the product choices are confirmed.

| Workstream | Research finding and feasibility | Scope and key tasks | Relative work volume / complexity | Deliverable and exit check |
|---|---|---|---|---|
| **1. Confirm products, roles and access** | **Open gate.** GymMaster’s website module is documented. ESB is not yet matched to a confirmed Elite Fit product or account. | Confirm GymMaster account, enabled features and owner. Confirm ESB product name, account and what Elite Fit sells through it. Obtain vendor contacts, test access and account invitations. Confirm which system owns memberships, orders and payment records. | **■■□□□ 2/5 · Medium** | **D1 — Platform and access record.** Named products, account owners, feature status, test access and unresolved questions recorded. |
| **2. Put GymMaster on the website** | **Confirmed at product level; Elite Fit setup still needs checking.** GymMaster documents a website module for signup, member portal, timetable and bookings, with WordPress setup guidance. Forms and waivers can be attached to signups/bookings. | Configure the supplied module in WordPress for the agreed sign-up/data forms, live timetable and class/PT booking. Set the available member actions and visual settings. Test the actual Elite Fit account. Prefer this route for gym memberships and bookings where its enabled features meet the need. | **■■□□□ 2/5 · Low–medium** | **D2 — GymMaster website flow.** A test visitor can complete the agreed registration and booking path; timetable and forms show the approved content. Confirm separately whether GymMaster’s own payment setup meets the required checkout journey. |
| **3. Confirm ESB product fit and order API** | **API exists for the public ESB Order QS product; fit is unconfirmed.** Its public guide includes order-total calculation and order saving. It appears designed for restaurant ordering. | Patrick confirms the exact ESB product. ESB confirms whether its order fields can represent memberships/passes, customer details and any pass rules. Check the test account, order status result, fees and support. | **■■■□□ 3/5 · Medium–high** | **D3 — ESB capability note.** Exact product, relevant order steps, available test account and gym-product fit confirmed in writing—or ESB is removed from this flow. |
| **4. Keep ESB checkout on the website** | **Unverified and the main technical risk.** Public ESB material shows payment options and a payment-gateway redirect URL in an order response. It does not establish an embedded, on-page payment flow for Elite Fit. | Ask ESB whether the website can show its order and payment screens without leaving the site; which payment methods work; how success/failure/cancellation is reported; and whether a gateway redirect is required. If a redirect is required, Patrick chooses whether to accept it. Never put card details into WordPress. | **■■■■■ 5/5 · High / unverified** | **D4 — Approved checkout route.** A written route and test proof show where the visitor enters payment, how success/failure returns, and what the visitor sees. No build commitment until this passes. |
| **5. Keep the sale and member record correct** | **Conditional.** GymMaster supports online membership signup and booking. Research has not confirmed a ready-made GymMaster↔ESB connection or the Elite Fit account’s record/payment behavior. | Decide which system is the source of truth for each item. If ESB takes payment, prove how the completed sale creates or updates the right GymMaster member and membership. Check duplicate orders, failed payments, two-person passes and day-pass credit rules if these are in scope. | **■■■■□ 4/5 · High** | **D5 — Approved data/ownership map and working record update.** A test purchase creates one correct sale/member record, with a documented recovery path for failures. If systems cannot share the data, record a staff-managed fallback or price custom work separately. |
| **6. CRM or automatic follow-up (optional)** | **Not confirmed as a required platform or feature.** The earlier GoHighLevel route is only a candidate; no Elite Fit account or message setup was checked. | Confirm whether Elite Fit needs a separate follow-up tool. If yes, agree which contact, order and permission details move, what message is sent, channel, timing and opt-out. Include only the named flows. | **■■■□□ 3/5 · Medium** | **D6 — Only if approved:** contact/consent field map and the agreed test confirmation or reminder. Otherwise excluded from this add-on. |
| **7. End-to-end checks and handover** | **Feasible after the route and accounts are confirmed.** No live route has been tested yet. | Test on phone and computer: signup, form, timetable, booking, successful/failed/cancelled order, record match, duplicate protection, consent and any approved message. Fix launch blockers and document support steps. | **■■■■□ 4/5 · High** | **D7 — Test record and handover pack.** Passed checks, open issues, named support owners, provider contacts and recovery instructions delivered. |

### Best-fit route to test first

For memberships, signups, forms, timetable and class/PT bookings, test GymMaster’s standard website module first. It may cover the main gym journey without a custom checkout build. Treat ESB as a separate order path until Patrick confirms why it is needed and ESB confirms the exact product fit. Do not assume the earlier Xendit/custom-connection concept is required.

## Scope boundary

**Included in the proposed integration add-on:** discovery and system confirmation; GymMaster website-module setup for the agreed journey; ESB capability check; one agreed order/payment route if supported; only the confirmed record handoff; acceptance checks and handover.

**Not included unless separately priced and approved:** custom ESB development; forcing an on-page checkout that the provider does not support; merchandise/catalogue migration; automatic renewals; historical customer import; two-way attendance or booking sync; extra CRM/WhatsApp/SMS automations; vendor subscription/message fees; ongoing integration maintenance.

The current website proposal covers 12–15 pages. This integration work is additional. The existing prototype is not a live integration.

## Milestones

The months below follow the current November 2026–April 2027 delivery window. They include client/provider decisions and waiting time; they are not six months of continuous development.

| When | Milestone and key work | Required output / gate |
|---|---|---|
| **November 2026** | Confirm the exact GymMaster and ESB products, account owners and test access. Review the Elite Fit GymMaster module and send the ESB technical questions. | **M1 — Product fit:** D1 and initial GymMaster test; ESB product identity confirmed. |
| **December 2026** | Compare the GymMaster route with any required ESB order flow. Confirm the checkout experience, data rules, responsibility split and add-on price. | **M2 — Build approval:** D3–D5 agreed. No provider-specific build before this gate. |
| **January 2027** | Configure the GymMaster module in test. Build only the ESB/payment connection that the provider has confirmed and the client has approved. | **M3 — Test-ready flow:** D2 and approved connection available for review. |
| **February 2027** | Run end-to-end tests, resolve launch blockers and obtain Elite Fit acceptance. | **M4 — Acceptance:** D7 test evidence and launch approval. **28 February 2027 is conditional** on timely access and vendor replies. |
| **March–April 2027** | Resolve agreed launch issues and document normal support and recovery. | **M5 — Handover by 30 April 2027:** owners, provider contacts, open items and next-phase costs recorded. |

**Estimate:** do not reuse the old 3–5-week custom-checkout estimate as the baseline. That estimate assumed a custom route. The standard GymMaster module may reduce custom build work; ESB payment and data sync remain unverified. Mohammed should set the engineering estimate after M1–M2.

## Questions for ESB technical support

**Action owner:** The client-side contact reaches out to ESB; Mohammed reviews the reply and updates feasibility, scope and effort before build approval.

1. What is the exact ESB product and edition Elite Fit uses? Is it ESB Order QS, ESB Order FS, or another product?
2. Can it represent gym memberships, day passes and class/PT products, or only its documented restaurant order types?
3. Can Elite Fit’s website create and price an order through the API, and what test account or credentials are needed?
4. Can the payment screen stay within the website? If not, where does it redirect?
5. What does ESB return after a paid, failed or cancelled payment? Is there a status check or automatic notification?
6. Can a completed order be sent to GymMaster as a member/membership record? Is there an existing connector or an extra fee?
7. Which payment methods, refunds, fees, account requirements and support commitments apply to Elite Fit?

## Research basis

Research checked **21 October 2026** against official provider documentation. It confirms general product capabilities, not Elite Fit account configuration or a successful test.

- [GymMaster — Website Member Portal](https://www.gymmaster.com/gym-website-integration/) — membership signups, website member portal, timetable, forms, payments and bookings.
- [GymMaster — Online Module Setup](https://www.gymmaster.com/blog/spotlight-online-module/) — module embeds schedule, member portal and signup page; includes WordPress setup guidance and class/PT booking.
- [GymMaster — Online booking setup](https://www.gymmaster.com/user-manual/manual_reference_howto_memberportal_bookings/) — configurable online booking and cancellation for classes and services.
- [ESB — API documentation index](https://developers.esb.co.id/) — lists ESB Order QS/FS and other products; Order QS is described as online ordering for pickup, delivery and scheduled orders.
- [ESB — Order QS API guide](https://developers.esb.co.id/eso-qs/) — public guide includes order-total calculation, save-order and payment-flow material; examples are restaurant order types and show gateway redirect/return fields.
- [ESB — ESB Order product page](https://www.esb.id/id/solusi/produk/order) — describes online restaurant ordering and payment methods.

**Internal reference:** [Current prototype API contract](../homepage-v2.0/API-CONTRACT.md) describes mock-only behavior; it is not evidence of a live Elite Fit connection.
