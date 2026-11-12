# Requirements: Payroll & WPS Compliance Page — SEO Content Update

## Overview
Update `payroll-wps-compliance.html` with new SEO-optimised text, corrected trust claims, schema markup, image updates, and sitewide WhatsApp message fix. Keep all current design, layout, section order, classes, and CSS unchanged.

## Requirements

### R1 — Meta, title and OG tags
- Title tag: `WPS Compliance & Payroll Services in Dubai, UAE | Modest` (56 chars)
- Meta description: `WPS compliance and payroll services in Dubai and the UAE: salary processing, WPS salary files, payslips, gratuity and leave tracking, handled every month.` (154 chars)
- OG title and OG description: same values as title tag and meta description
- Canonical URL unchanged: `/payroll-wps-compliance`

### R2 — Schema markup
Add a `<script type="application/ld+json">` block in `<head>` containing a `@graph` with four nodes: `Service`, `WebPage`, `BreadcrumbList`, and `FAQPage`. The FAQPage must list all 8 FAQ questions with their exact answer text. No rating or review data included.

### R3 — Body tag lead tracking attributes
Confirm body tag has: `data-page-name="Payroll & WPS Compliance"` `data-service="payroll and WPS"` `data-service-label="Payroll & WPS"`. These are already present; leave unchanged.

### R4 — Hero section
- Eyebrow tag text: `PAYROLL SERVICES UAE`
- H1: `Payroll and WPS Compliance Services in the UAE: Accurate, On Time and MOHRE-Compliant` (no long dashes; remove `<span>` accent wrapper or update to plain text within it)
- Paragraph: answer-first, mentions WPS mandate, Wages Protection System spelled out in parentheses, lists the four actions (calculate salaries, prepare WPS file, send payslips, track gratuity and leave)
- Three stats: `WPS / COMPLIANT EVERY MONTH`, `On-Time / EVERY PAYDAY`, `Monthly / PAYSLIPS & REPORTS` (remove `MOHRE / REGISTERED`)
- Hero image alt text: `WPS compliance services Dubai, payroll accountant processing monthly salaries for Modest Consulting Services`
- Buttons and phone numbers unchanged; WhatsApp links must carry the website message (see R12)

### R5 — What you get (Section 2 / Benefits)
Replace all five benefit cards with the new content (new H3 headings, new paragraph text, new Result lines). Remove all prohibited phrases: "Zero WPS violations", "Zero gratuity dispute risk", "Save 1–2 days per month", "takes 1–2 days", "in hours", "3 days before your chosen payday". Remove the "500+ Clients Served" floating badge from the image. New result lines do not contain guarantees.

New cards:
1. ✅ WPS file ready before every payday — Result: Salaries paid on time through WPS
2. 📄 Clear payslips for every employee — Result: Clear, professional payslips
3. ⚖️ Gratuity calculated under UAE Labour Law — Result: Fewer gratuity disputes
4. 🏛️ Payroll records ready for MOHRE — Result: Records ready for any inspection
5. ⏱️ Time back for your team — Result: Less admin for your team

H2: `What do you get with our payroll and WPS services?`

### R6 — Trusted & Licensed (Section 3 / Trust badges)
- Eyebrow tag: `TRUSTED & LICENSED`
- H2: `Why choose Modest Consulting Services for payroll and WPS?`
- Intro paragraph (new): JAFZA-licensed firm, PRO team cross-link, founder link
- Six trust cards (replace all four old ones):
  1. 🏛️ MOHRE Rules / Payroll kept to Labour Law
  2. ✅ WPS Salary Files / Prepared every month
  3. 🏛️ JAFZA Licensed / Jebel Ali Free Zone, Dubai
  4. 💬 Google Reviews / Read our reviews on Google → (link to Google Business Profile, new tab)
  5. 🔒 Confidential / Secure data handling
  6. 🏢 11 Jurisdictions / Mainland, free zone and offshore
- Remove: MOHRE Registered badge, WPS Compliant/certified badge, DET Licensed badge, 5.0★/8 reviews badge, 500+ Clients badge

### R7 — Understanding WPS (Section 4)
- Eyebrow: `UNDERSTANDING WPS`
- H2 unchanged
- Card 03 rewritten: remove old penalty list (Month 1/2/3, AED 1,000 per employee, 10 days). New text: MOHRE treats salary as late if not paid within 15 days, can stop work permits, send inspection, charge fines, stricter if delays continue. Add external link to MOHRE website (`https://www.mohre.gov.ae`, new tab, `rel="noopener"`).
- Badge changed to: `Monthly / WPS Cycle`
- Remove all long dashes (—); use comma, colon or brackets instead

### R8 — What is included (Section 5 / Features)
- Eyebrow: `WHAT IS INCLUDED`
- H2: `What is included in our payroll services?`
- Items 01–06 rewritten (same structure, new text per spec)
- Add item 07: `Payroll in your accounts (new)` — with internal link to `/accounting-bookkeeping`
- Replace image: `images/service12/wps-payroll-uae-payslip-salary-file.webp` (from `images/service12/` folder); new alt text: `WPS payroll UAE, payslip and salary information file prepared every month`; add `width`, `height`, and `loading="lazy"` attributes
- Remove the `100% / WPS Accuracy` overlay stat badge

### R9 — How it works (Section 6)
- Eyebrow: `HOW IT WORKS`
- H2 unchanged
- Step 1 timeline: `⏱ Free first call` (remove "Same day response")
- Step 2 timeline: `⏱ Timeline confirmed in writing` (remove "2–3 working days")
- Step 3 text and timeline: "Before your payday we process all salaries…" and `⏱ Every month, before payday` (remove "5 working days before your pay date")
- Step 4 timeline: `⏱ On your payday, every month`
- Remove all long dashes; keep section otherwise identical

### R10 — Client reviews (Section 7)
- Remove: rating box (5.0 stars, 8 Google reviews), all three testimonial cards (Tariq Al Suwaidi, Ananya Krishnan, Rania Farouk)
- Replace with sitewide Google reviews block: H2 `See what our clients say on Google`, one line of text, button `Read our reviews on Google →` linking to Google Business Profile (new tab, `rel="noopener"`)
- Replace "Join Our Clients" button with the Google reviews button

### R11 — Documents required (Section 8)
- Eyebrow unchanged
- H2: `What do you need to start outsourcing payroll?`
- List 1 heading: `Standard documents:`
- List 2 heading: `Extra documents if they apply:`
- List items: replace "Employment contracts — all active employees, signed copies" with "Signed employment contracts for all current employees"; replace "Bank account details — company WPS-registered account IBAN" with "Company bank account (IBAN) registered for WPS"
- Remove long dashes from list items; use comma or rewrite
- Image alt text: `payroll outsourcing UAE documents: employment contracts, salary structure and bank details`
- Note text: `Not sure what you need? We'll confirm your document list in a free call.` (already present)

### R12 — FAQ (Section 9)
Replace the five current FAQ items with 8 new questions:
1. What is WPS and is it mandatory in the UAE?
2. When must salaries be paid under WPS? (new)
3. What happens if a company pays salaries late through WPS? (replaces "What happens if we miss a WPS deadline?" — removes penalty figures)
4. How is end-of-service gratuity calculated in the UAE? (new)
5. Does WPS apply to free zone companies? (new)
6. Can you handle payroll for employees across several emirates?
7. How is employee salary data kept confidential?
8. How much does payroll outsourcing cost in the UAE? (remove "Fixed monthly pricing per employee")

### R13 — Related services (Section 10)
Update three card texts and links:
1. 📒 Accounting & Bookkeeping → `/accounting-bookkeeping` (fix current wrong link `/business-licensing`)
2. 🏛️ PRO & Government Services → `/pro-government-services` (unchanged)
3. 📋 Audit & Assurance → `/audit-assurance` (unchanged)
New text per spec.

### R14 — Final CTA (Section 11)
- Eyebrow: `GET STARTED TODAY`
- H2: `Ready to outsource payroll in the UAE? Talk to Modest Consulting Services today.`
- Body text: `WPS on time. Accurate payslips. Fully confidential. Message us on WhatsApp for details.` (remove "Fixed pricing")
- Contact block WhatsApp link for main number: add website message (see R12 / R15)
- Contact block second number footer WhatsApp: add website message

### R15 — WhatsApp message on second number (sitewide)
Add `?text=` parameter to `wa.me/971564023174` on this page and in `components/header.html` and `components/footer.html`:

Message (URL-encoded): `Hi%20Modest%20Consulting%20Services%2C%20I%20found%20you%20on%20your%20website%20www.modest-uae.ae%20%28Payroll%20%26%20WPS%20Compliance%29.%20I%27m%20interested%20in%20payroll%20and%20WPS.%20Please%20share%20the%20details.`

For header and footer use a generic message: `Hi%20Modest%20Consulting%20Services%2C%20I%20found%20you%20on%20your%20website%20www.modest-uae.ae.%20Please%20share%20your%20services%20and%20details.`

Full link on this page (hero, how-it-works, final CTA):
`https://wa.me/971564023174?text=Hi%20Modest%20Consulting%20Services%2C%20I%20found%20you%20on%20your%20website%20www.modest-uae.ae%20%28Payroll%20%26%20WPS%20Compliance%29.%20I%27m%20interested%20in%20payroll%20and%20WPS.%20Please%20share%20the%20details.`

### R16 — Internal links
- PRO team link in trusted intro → `/pro-government-services`
- Meet our founder link in trusted intro → `/about`
- Accounting and bookkeeping link in Section 5 item 07 → `/accounting-bookkeeping`
- Breadcrumb "Services" → `/services`

### R17 — External links
- MOHRE website in Section 4 card 03 → `https://www.mohre.gov.ae` (new tab, `rel="noopener"`)
- Google Business Profile link (reviews section and trust badge) → full Google Maps URL as used on other pages

### R18 — Remove all long dashes
Replace all em dashes (—) with comma, colon, brackets, or reworded phrasing throughout the page, including image alt text attributes.

### R19 — Email link
Contact block email link: `mailto:info@modest-uae.ae?subject=Website%20Enquiry%20%E2%80%93%20Payroll%20%26%20WPS%20%E2%80%93%20www.modest-uae.ae&body=Hi%20Modest%20Consulting%20Services%2C%20I%27m%20contacting%20you%20from%20your%20website%20www.modest-uae.ae%20%28Payroll%20%26%20WPS%20Compliance%29%20about%20payroll%20and%20WPS.%20My%20requirement%20is%3A%20`
