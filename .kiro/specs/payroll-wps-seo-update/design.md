# Design: Payroll & WPS Compliance Page — SEO Content Update

## Approach
Pure content/text update. No CSS changes, no structural changes, no new sections or components. All existing HTML classes, IDs, section order, and layout remain identical.

## Files changed
1. `payroll-wps-compliance.html` — primary file
2. `components/header.html` — add WhatsApp message to second number link
3. `components/footer.html` — add WhatsApp message to second number link

## Image update (Section 5 / What is included)
- Old: `images/service12-payroll/Payslip and WPS confirmation receipt.webp`
- New: `images/service12/wps-payroll-uae-payslip-salary-file.webp`
- Add `width="800" height="533" loading="lazy"` (or appropriate dimensions)
- New alt: `WPS payroll UAE, payslip and salary information file prepared every month`

## Schema location
Insert `<script type="application/ld+json">` block immediately before `</head>`.

## Google reviews block (Section 7)
Replace the entire `cf-reviews__layout` div contents with:
```html
<div class="section-header center reveal-up">
    <span class="tag">Client reviews</span>
    <h2>See what our clients say on Google</h2>
    <p>Modest Consulting Services clients share their experience on Google.</p>
    <a href="https://www.google.com/maps/place/Modest+Consulting+Services+FZE/@24.986051,55.0901955,17z/data=!4m6!3m5!1s0x1ec2035af3eebef:0x59d6446782fc6127!8m2!3d24.986051!4d55.0901955!16s%2Fg%2F11nr1g_9b8" class="btn btn-primary" target="_blank" rel="noopener" data-placement="reviews">Read our reviews on Google &rarr;</a>
</div>
```
(Remove the `cf-reviews__layout` wrapper and use `section-header center` consistent with other pages.)

## Trust badge layout (Section 3)
Six badges replacing the previous six. Same HTML structure (`cf-trust__badge` divs) — just updated text and icons. The Google Reviews badge gets an `<a>` tag for the link (consistent with `vat-registration-filing.html` pattern).

## Long dashes
Replace `—` (em dash) with `:` or `,` or rewrite phrases. Also update any `alt` attributes containing `—`.

## WhatsApp links pattern
Two numbers appear in multiple locations on the page:
- Main: `https://wa.me/971564045802?text=Hi%20Modest%20Consulting%20Services%2C%20...`
- Second: `https://wa.me/971564023174?text=Hi%20Modest%20Consulting%20Services%2C%20...`

Both use the same encoded message. The `tel:` links remain unchanged (they cannot carry a message).

## Section-by-section change summary

| Section | Change type |
|---------|-------------|
| `<head>` | Title, meta description, OG tags, schema JSON-LD |
| Breadcrumb | No change |
| Hero | Eyebrow, H1, paragraph, stats (3rd stat label), image alt |
| Benefits | H2, all 5 cards (H3, p, result), remove float badge |
| Trust | Eyebrow, H2, add intro paragraph, replace all 6 badges |
| Understanding WPS | Card 03 text, card 03 heading, badge text, remove long dashes, add MOHRE link |
| What is included | H2, all items text, add item 07, replace image |
| How it works | Timeline labels for steps 1–3, minor text tweaks |
| Client reviews | Full section replacement with Google block |
| Documents | List heading 2 label, list item wording, image alt |
| FAQ | Replace 5 items with 8 new items |
| Related services | Card 1 link fix, all 3 card text updates |
| Final CTA | H2, body text, email link with subject/body |
| `components/header.html` | Second WhatsApp link: add `?text=` message |
| `components/footer.html` | Second WhatsApp link: add `?text=` message |
