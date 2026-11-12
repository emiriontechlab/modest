# Tasks: Payroll & WPS Compliance Page — SEO Content Update

## Task 1: Update `<head>` — title, meta, OG tags and schema

Update the `<head>` block of `payroll-wps-compliance.html`:

- [ ] Replace title tag with: `WPS Compliance & Payroll Services in Dubai, UAE | Modest`
- [ ] Replace meta description with: `WPS compliance and payroll services in Dubai and the UAE: salary processing, WPS salary files, payslips, gratuity and leave tracking, handled every month.`
- [ ] Add or update OG tags:
  - `<meta property="og:title" content="WPS Compliance & Payroll Services in Dubai, UAE | Modest">`
  - `<meta property="og:description" content="WPS compliance and payroll services in Dubai and the UAE: salary processing, WPS salary files, payslips, gratuity and leave tracking, handled every month.">`
- [ ] Insert the JSON-LD schema block immediately before `</head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://modest-uae.ae/payroll-wps-compliance#service",
      "name": "Payroll and WPS compliance services in Dubai and the UAE",
      "serviceType": "Payroll and WPS compliance",
      "description": "Monthly salary processing, WPS salary information files, payslips, end-of-service gratuity, leave tracking and salary certificates for UAE companies.",
      "provider": {"@id": "https://modest-uae.ae/#business"},
      "areaServed": {"@type": "Country", "name": "United Arab Emirates"},
      "url": "https://modest-uae.ae/payroll-wps-compliance"
    },
    {
      "@type": "WebPage",
      "@id": "https://modest-uae.ae/payroll-wps-compliance#webpage",
      "url": "https://modest-uae.ae/payroll-wps-compliance",
      "name": "WPS Compliance & Payroll Services in Dubai, UAE | Modest",
      "about": {"@id": "https://modest-uae.ae/payroll-wps-compliance#service"},
      "reviewedBy": {"@id": "https://modest-uae.ae/#founder"},
      "breadcrumb": {"@id": "https://modest-uae.ae/payroll-wps-compliance#breadcrumb"}
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://modest-uae.ae/payroll-wps-compliance#breadcrumb",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://modest-uae.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://modest-uae.ae/services"},
        {"@type": "ListItem", "position": 3, "name": "Payroll & WPS Compliance", "item": "https://modest-uae.ae/payroll-wps-compliance"}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://modest-uae.ae/payroll-wps-compliance#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is WPS and is it mandatory in the UAE?",
          "acceptedAnswer": {"@type": "Answer", "text": "WPS, the Wages Protection System, is the UAE system for paying salaries electronically through banks and approved exchange houses. It is mandatory for private sector companies registered with MOHRE, so MOHRE can check that every employee is paid on time and in full."}
        },
        {
          "@type": "Question",
          "name": "When must salaries be paid under WPS?",
          "acceptedAnswer": {"@type": "Answer", "text": "Salaries must be paid on the date in the employment contract, at least once a month. MOHRE treats a salary as late if it is not paid within 15 days of the due date."}
        },
        {
          "@type": "Question",
          "name": "What happens if a company pays salaries late through WPS?",
          "acceptedAnswer": {"@type": "Answer", "text": "MOHRE can stop the company from getting new work permits, send an inspection and charge fines for each affected employee, and the action gets stricter if delays continue. The current penalties are set by MOHRE and Cabinet decisions. Paying through WPS on time every month avoids them."}
        },
        {
          "@type": "Question",
          "name": "How is end-of-service gratuity calculated in the UAE?",
          "acceptedAnswer": {"@type": "Answer", "text": "An employee becomes entitled to gratuity after one year of continuous service. It is 21 days of basic salary for each of the first five years and 30 days of basic salary for each year after that, and the total cannot be more than two years' pay. We calculate it every month and again at final settlement."}
        },
        {
          "@type": "Question",
          "name": "Does WPS apply to free zone companies?",
          "acceptedAnswer": {"@type": "Answer", "text": "WPS is mandatory for companies registered with MOHRE, which covers most mainland companies. Free zone companies follow their own free zone's wage rules. We check which rules apply to your company."}
        },
        {
          "@type": "Question",
          "name": "Can you handle payroll for employees across several emirates?",
          "acceptedAnswer": {"@type": "Answer", "text": "Yes. We run payroll for companies with staff in Dubai, Abu Dhabi, Sharjah and every other emirate, through any UAE bank used for WPS."}
        },
        {
          "@type": "Question",
          "name": "How is employee salary data kept confidential?",
          "acceptedAnswer": {"@type": "Answer", "text": "Only your payroll accountant and the people you approve can see your payroll data. It is stored securely and never shared with anyone else."}
        },
        {
          "@type": "Question",
          "name": "How much does payroll outsourcing cost in the UAE?",
          "acceptedAnswer": {"@type": "Answer", "text": "It depends on the number of employees and what you need each month, such as payslips, gratuity and leave tracking. Message us on WhatsApp with your details and we'll share a quote."}
        }
      ]
    }
  ]
}
</script>
```

**File:** `payroll-wps-compliance.html`

---

## Task 2: Update Hero section (Section 1)

**File:** `payroll-wps-compliance.html`

- [ ] Eyebrow `<span class="tag">`: change to `PAYROLL SERVICES UAE`
- [ ] H1: replace with `Payroll and WPS Compliance Services in the UAE: Accurate, On Time and MOHRE-Compliant` (remove long dashes; the accent span can wrap the second part or be removed — keep existing HTML structure but update text)
- [ ] Lead paragraph: replace with:
  `UAE companies registered with MOHRE must pay salaries through the Wages Protection System (WPS) every month, on time and in full. Our WPS compliance services take care of it for you: salaries calculated, the WPS salary file prepared for your bank, payslips sent, and gratuity and leave tracked, so your employees are paid correctly and your company stays clear of MOHRE action.`
- [ ] Stats — replace third stat:
  - `cf-hero__stat-text`: `Monthly`
  - `cf-hero__stat-label`: `PAYSLIPS & REPORTS`
  - (Remove `MOHRE / REGISTERED` — first two stats WPS/COMPLIANT EVERY MONTH and On-Time/EVERY PAYDAY are correct already)
- [ ] Hero image alt: `WPS compliance services Dubai, payroll accountant processing monthly salaries for Modest Consulting Services`
- [ ] Hero phone buttons: change `tel:` links to WhatsApp links where the button text shows the phone numbers but actually links WhatsApp with message. Wait — the spec says buttons show 📞 numbers, not WhatsApp buttons. Keep `tel:` links as-is for the call buttons. The WhatsApp links appear separately. Check current page — if no separate WhatsApp button in hero, do not add one here (the spec does not add new buttons to hero).

---

## Task 3: Update Benefits section — What you get (Section 2)

**File:** `payroll-wps-compliance.html`

- [ ] H2: `What do you get with our payroll and WPS services?`
- [ ] Remove floating badge `cf-benefits__img-float` (the "500+ Clients Served" box)
- [ ] Replace all five `cf-benefit-item` cards. Use the existing HTML structure but replace all text:

**Card 1:**
- Icon: `✅`
- H3: `WPS file ready before every payday`
- P: `We prepare your WPS salary information file (SIF) in the format your bank needs and get it ready before your payday, every month.`
- Result line: `Result: Salaries paid on time through WPS`

**Card 2:**
- Icon: `📄`
- H3: `Clear payslips for every employee`
- P: `Every employee gets a payslip each month showing basic salary, allowances, deductions, overtime and net pay.`
- Result line: `Result: Clear, professional payslips`

**Card 3:**
- Icon: `⚖️`
- H3: `Gratuity calculated under UAE Labour Law`
- P: `We work out each employee's end-of-service gratuity every month from basic salary and length of service, and calculate the final settlement when someone leaves.`
- Result line: `Result: Fewer gratuity disputes`

**Card 4:**
- Icon: `🏛️`
- H3: `Payroll records ready for MOHRE`
- P: `WPS records, salary certificates and contract details kept in order, ready if MOHRE asks to see them.`
- Result line: `Result: Records ready for any inspection`

**Card 5:**
- Icon: `⏱️`
- H3: `Time back for your team`
- P: `Payroll takes hours of careful work every month. We handle it so your managers can focus on the business.`
- Result line: `Result: Less admin for your team`

---

## Task 4: Update Trust Badges section (Section 3)

**File:** `payroll-wps-compliance.html`

- [ ] Eyebrow tag: `TRUSTED & LICENSED`
- [ ] H2: `Why choose Modest Consulting Services for payroll and WPS?`
- [ ] Add intro paragraph after H2 (new element, insert before `cf-trust__badges` div):
  `We are a JAFZA-licensed business services firm in Dubai. Our team runs monthly payroll and WPS for mainland and free zone companies and works alongside our <a href="/pro-government-services">PRO team</a> on visas and labour cards. <a href="/about">Meet our founder</a>.`
- [ ] Replace all six `cf-trust__badge` divs with:

**Badge 1:** Icon `🏛️`, Strong: `MOHRE Rules`, Span: `Payroll kept to Labour Law`

**Badge 2:** Icon `✅`, Strong: `WPS Salary Files`, Span: `Prepared every month`

**Badge 3:** Icon `🏛️`, Strong: `JAFZA Licensed`, Span: `Jebel Ali Free Zone, Dubai`

**Badge 4:** Icon `💬`, Strong: `Google Reviews`, Span: contains link `<a href="https://www.google.com/maps/place/Modest+Consulting+Services+FZE/@24.986051,55.0901955,17z/data=!4m6!3m5!1s0x1ec2035af3eebef:0x59d6446782fc6127!8m2!3d24.986051!4d55.0901955!16s%2Fg%2F11nr1g_9b8" target="_blank" rel="noopener" class="cf-trust__badge-link">Read our reviews on Google &rarr;</a>`

**Badge 5:** Icon `🔒`, Strong: `Confidential`, Span: `Secure data handling`

**Badge 6:** Icon `🏢`, Strong: `11 Jurisdictions`, Span: `Mainland, free zone and offshore`

---

## Task 5: Update Understanding WPS section (Section 4)

**File:** `payroll-wps-compliance.html`

- [ ] Eyebrow tag: `UNDERSTANDING WPS` (check current; update if different)
- [ ] H2: `What is WPS and why does it matter for your business?` (check current; likely already correct)
- [ ] Card 01 — replace text (remove long dash from "WPS — Wages Protection System —"):
  `WPS (Wages Protection System) is the UAE system for paying salaries electronically through banks and approved exchange houses. Private sector companies registered with MOHRE must pay salaries through WPS every month.`
- [ ] Card 02 — replace text (remove "SIF —"):
  `The employer prepares a Salary Information File (SIF) and sends it to its bank or exchange house with the salary payment. The bank pays the employees and reports the payment to MOHRE.`
- [ ] Card 03 — H3: `What happens if salaries are late?` and replace body:
  `MOHRE treats a salary as late if it is not paid within 15 days of the due date. It can then stop new work permits, send an inspection and charge fines for each affected employee, with stricter action if delays continue. Check the current rules on the <a href="https://www.mohre.gov.ae" target="_blank" rel="noopener">MOHRE website</a>.`
- [ ] Card 04 — replace text (remove long dashes):
  `WPS is mandatory for companies registered with MOHRE, which covers most mainland companies. Free zone companies follow their own free zone's wage rules. We check which rules apply to you.`
- [ ] Update or add badge: `Monthly / WPS Cycle` (replace any existing badge text in this section)
- [ ] Check entire section for any remaining long dashes and remove them

---

## Task 6: Update What is Included section (Section 5)

**File:** `payroll-wps-compliance.html`

- [ ] Eyebrow tag: `WHAT IS INCLUDED`
- [ ] H2: `What is included in our payroll services?`
- [ ] Replace image `src` with: `images/service12/wps-payroll-uae-payslip-salary-file.webp`
- [ ] Update image `alt`: `WPS payroll UAE, payslip and salary information file prepared every month`
- [ ] Add `width="800" height="533" loading="lazy"` to the image tag
- [ ] Remove the overlay stat badge `cf-features__overlay-stat` (the "100% / WPS Accuracy" box)
- [ ] Replace all six feature items and add item 07:

**Item 01:** H3: `Monthly salary processing, gross to net` | P: `Every employee's basic salary, allowances, deductions and overtime calculated to the exact net pay, checked against each employment contract.`

**Item 02:** H3: `WPS salary file` | P: `Your Salary Information File (SIF) prepared in the format your bank needs (Emirates NBD, FAB, ADCB, Mashreq or any other UAE bank) and ready before your payday.`

**Item 03:** H3: `Payslips` | P: `A payslip for every employee every month, sent digitally by payday, in English or Arabic.`

**Item 04:** H3: `End-of-service gratuity` | P: `Each employee's gratuity worked out monthly, with a running liability report, and the final amount calculated when someone leaves.`

**Item 05:** H3: `Annual and sick leave tracking` | P: `Leave balances updated every month and shared with your HR contact.`

**Item 06:** H3: `Salary certificates` | P: `Salary certificates on your company letterhead for bank, tenancy or visa applications.`

**Item 07 (new — copy the existing `cf-feature` div structure):**
- Number: `07`
- H3: `Payroll in your accounts`
- P: `If you also use our <a href="/accounting-bookkeeping">accounting and bookkeeping service</a>, payroll is posted straight into your books every month.`
- Add badge or tag `(new)` after H3 if desired, or include in H3 text

---

## Task 7: Update How it Works section (Section 6)

**File:** `payroll-wps-compliance.html`

- [ ] Step 1 timeline span: change `⏱ Same day response` to `⏱ Free first call`
- [ ] Step 1 paragraph: `Tell us how many employees you have, your salary structure and your payday. We check your WPS setup, bank and MOHRE registration.`
- [ ] Step 2 timeline span: change `⏱ 2–3 working days` to `⏱ Timeline confirmed in writing`
- [ ] Step 2 paragraph: `We collect employee details, contracts, bank accounts and salary structures securely. If you are switching mid-year, we move your past data.`
- [ ] Step 3 paragraph: `Before your payday we process all salaries, prepare the WPS file and send you the payroll summary to approve.`
- [ ] Step 3 timeline span: change `⏱ Ongoing monthly cycle` to `⏱ Every month, before payday`
- [ ] Step 4 paragraph: `After you approve, the WPS file goes to your bank, payslips go to your employees, and you get the WPS confirmation and monthly summary.`
- [ ] Step 4 timeline span: `⏱ On your payday, every month` (check if already correct; fix "pay date" to "payday")
- [ ] Remove any remaining long dashes in this section

---

## Task 8: Replace Client Reviews section (Section 7)

**File:** `payroll-wps-compliance.html`

Replace the entire inner content of the `cf-reviews` section. Keep the `<section class="cf-reviews section-spacing bg-secondary">` outer wrapper but replace the `<div class="container">` contents:

```html
<div class="container">
    <div class="section-header center reveal-up">
        <span class="tag">Client reviews</span>
        <h2>See what our clients say on Google</h2>
        <p>Modest Consulting Services clients share their experience on Google.</p>
        <a href="https://www.google.com/maps/place/Modest+Consulting+Services+FZE/@24.986051,55.0901955,17z/data=!4m6!3m5!1s0x1ec2035af3eebef:0x59d6446782fc6127!8m2!3d24.986051!4d55.0901955!16s%2Fg%2F11nr1g_9b8" class="btn btn-primary" target="_blank" rel="noopener" data-placement="reviews">Read our reviews on Google &rarr;</a>
    </div>
</div>
```

---

## Task 9: Update Documents Required section (Section 8)

**File:** `payroll-wps-compliance.html`

- [ ] List 2 heading: change `Additional documents if applicable:` to `Extra documents if they apply:`
- [ ] In list 1, replace `Employment contracts — all active employees, signed copies` with `Signed employment contracts for all current employees`
- [ ] In list 1, replace `Bank account details — company WPS-registered account IBAN` with `Company bank account (IBAN) registered for WPS`
- [ ] In list 2, replace `Previous payroll records — for mid-year transitions` with `Past payroll records, if you are switching mid-year`
- [ ] In list 2, replace `Leave records — if integrating leave management` with `Leave records, if we also track leave`
- [ ] Image alt text: `payroll outsourcing UAE documents: employment contracts, salary structure and bank details`
- [ ] Remove all long dashes from list items (should be done by the replacements above)

---

## Task 10: Replace FAQ section (Section 9) with 8 new questions

**File:** `payroll-wps-compliance.html`

Replace the entire `cf-faq__accordion` div contents with 8 accordion items:

```html
<div class="faq-item">
    <button class="faq-question">What is WPS and is it mandatory in the UAE? <span class="arrow">▼</span></button>
    <div class="faq-answer"><p>WPS, the Wages Protection System, is the UAE system for paying salaries electronically through banks and approved exchange houses. It is mandatory for private sector companies registered with MOHRE, so MOHRE can check that every employee is paid on time and in full.</p></div>
</div>
<div class="faq-item">
    <button class="faq-question">When must salaries be paid under WPS? <span class="arrow">▼</span></button>
    <div class="faq-answer"><p>Salaries must be paid on the date in the employment contract, at least once a month. MOHRE treats a salary as late if it is not paid within 15 days of the due date.</p></div>
</div>
<div class="faq-item">
    <button class="faq-question">What happens if a company pays salaries late through WPS? <span class="arrow">▼</span></button>
    <div class="faq-answer"><p>MOHRE can stop the company from getting new work permits, send an inspection and charge fines for each affected employee, and the action gets stricter if delays continue. The current penalties are set by MOHRE and Cabinet decisions. Paying through WPS on time every month avoids them.</p></div>
</div>
<div class="faq-item">
    <button class="faq-question">How is end-of-service gratuity calculated in the UAE? <span class="arrow">▼</span></button>
    <div class="faq-answer"><p>An employee becomes entitled to gratuity after one year of continuous service. It is 21 days of basic salary for each of the first five years and 30 days of basic salary for each year after that, and the total cannot be more than two years' pay. We calculate it every month and again at final settlement.</p></div>
</div>
<div class="faq-item">
    <button class="faq-question">Does WPS apply to free zone companies? <span class="arrow">▼</span></button>
    <div class="faq-answer"><p>WPS is mandatory for companies registered with MOHRE, which covers most mainland companies. Free zone companies follow their own free zone's wage rules. We check which rules apply to your company.</p></div>
</div>
<div class="faq-item">
    <button class="faq-question">Can you handle payroll for employees across several emirates? <span class="arrow">▼</span></button>
    <div class="faq-answer"><p>Yes. We run payroll for companies with staff in Dubai, Abu Dhabi, Sharjah and every other emirate, through any UAE bank used for WPS.</p></div>
</div>
<div class="faq-item">
    <button class="faq-question">How is employee salary data kept confidential? <span class="arrow">▼</span></button>
    <div class="faq-answer"><p>Only your payroll accountant and the people you approve can see your payroll data. It is stored securely and never shared with anyone else.</p></div>
</div>
<div class="faq-item">
    <button class="faq-question">How much does payroll outsourcing cost in the UAE? <span class="arrow">▼</span></button>
    <div class="faq-answer"><p>It depends on the number of employees and what you need each month, such as payslips, gratuity and leave tracking. Message us on WhatsApp with your details and we'll share a quote.</p></div>
</div>
```

---

## Task 11: Update Related Services section (Section 10)

**File:** `payroll-wps-compliance.html`

- [ ] Card 1: fix `href` from `/business-licensing` to `/accounting-bookkeeping`; update text to: `Payroll posts straight into your monthly accounts, with no gap between payroll and your books.`
- [ ] Card 2 (PRO): update text to: `Employee visas, Emirates IDs and labour cards handled by our PRO team.`
- [ ] Card 3 (Audit): update text to: `Clean payroll records make staff costs easy to check in your annual audit, arranged through our partner audit firm.`
- [ ] Update section H2 if needed (keep "Services that work alongside payroll and WPS compliance" or update to match new card content — not specified, leave as is)

---

## Task 12: Update Final CTA section (Section 11) and contact block

**File:** `payroll-wps-compliance.html`

- [ ] H2: `Ready to outsource payroll in the UAE? Talk to Modest Consulting Services today.`
- [ ] Body paragraph: `WPS on time. Accurate payslips. Fully confidential. Message us on WhatsApp for details.`
- [ ] Update contact block WhatsApp link (main number) to include website message:
  `https://wa.me/971564045802?text=Hi%20Modest%20Consulting%20Services%2C%20I%20found%20you%20on%20your%20website%20www.modest-uae.ae%20%28Payroll%20%26%20WPS%20Compliance%29.%20I%27m%20interested%20in%20payroll%20and%20WPS.%20Please%20share%20the%20details.`
- [ ] Update email link in contact block:
  `mailto:info@modest-uae.ae?subject=Website%20Enquiry%20%E2%80%93%20Payroll%20%26%20WPS%20%E2%80%93%20www.modest-uae.ae&body=Hi%20Modest%20Consulting%20Services%2C%20I%27m%20contacting%20you%20from%20your%20website%20www.modest-uae.ae%20%28Payroll%20%26%20WPS%20Compliance%29%20about%20payroll%20and%20WPS.%20My%20requirement%20is%3A%20`
- [ ] Add `target="_blank" rel="noopener"` to the WhatsApp link in the contact block

---

## Task 13: Fix second WhatsApp number (sitewide — header, footer, and this page)

### 13a — `components/header.html`
- [ ] Find: `href="https://wa.me/971564023174"`
- [ ] Replace with: `href="https://wa.me/971564023174?text=Hi%20Modest%20Consulting%20Services%2C%20I%20found%20you%20on%20your%20website%20www.modest-uae.ae.%20Please%20share%20your%20services%20and%20details."`

### 13b — `components/footer.html`
- [ ] Find: `href="https://wa.me/971564023174"`
- [ ] Replace with: `href="https://wa.me/971564023174?text=Hi%20Modest%20Consulting%20Services%2C%20I%20found%20you%20on%20your%20website%20www.modest-uae.ae.%20Please%20share%20your%20services%20and%20details."`

### 13c — `payroll-wps-compliance.html` (all occurrences of `wa.me/971564023174`)
- [ ] All WhatsApp links for the second number on this page should use:
  `https://wa.me/971564023174?text=Hi%20Modest%20Consulting%20Services%2C%20I%20found%20you%20on%20your%20website%20www.modest-uae.ae%20%28Payroll%20%26%20WPS%20Compliance%29.%20I%27m%20interested%20in%20payroll%20and%20WPS.%20Please%20share%20the%20details.`
- Note: the `tel:` links for the second number remain unchanged.
