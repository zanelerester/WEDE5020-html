# The Chocolate Den – WEDE5020 POE Website

A multi-page, responsive website for **The Chocolate Den**, a South African shop that has sold chocolate-making and baking supplies since the early 1980s. Customers can browse and search the product range, view product details, request a quote with an instant cost and availability estimate, and contact the shop.

| | |
|---|---|
| **Student** | Zanele Mbhele |
| **Student number** | ST10502250 |
| **Module** | Web Development (Introduction) – WEDE5020 |
| **Submission** | Portfolio of Evidence (Part 3 – Enhancing Functionality and SEO) |
| **Live website** | https://zanelerester.github.io/WEDE5020-html/ |
| **GitHub repository** | https://github.com/zanelerester/WEDE5020-html |

---

## Table of contents

1. [Project overview](#project-overview)
2. [Website goals and target audience](#website-goals-and-target-audience)
3. [Pages](#pages)
4. [Features](#features)
5. [SEO](#search-engine-optimisation-seo)
6. [Security and performance](#security-and-performance)
7. [Technologies used](#technologies-used)
8. [Project structure](#project-structure)
9. [Running the site locally](#running-the-site-locally)
10. [Deployment](#deployment)
11. [Changelog](#changelog)
12. [References](#references)

---

## Project overview

The Chocolate Den was established in the early 1980s by Felicity Phillips. It was the first shop of its kind in South Africa, offering chocolate moulds, moulding chocolate, fillings and packaging to anyone who wanted to create their own chocolates. This website gives the business an online presence where customers can:

- learn about the business and its history
- browse, search, filter and sort products
- view detailed information about each product
- request a quote with bulk discounts, delivery costs and availability
- send the shop a message and find the shop on a map

## Website goals and target audience

**Goals**
- Increase online visibility of the shop through good SEO.
- Make it easy to find and compare products.
- Generate enquiries and bulk orders from small businesses.
- Reduce phone calls by answering common questions (FAQ, trading hours, delivery).

**Target audience**
- Home bakers and hobby chocolatiers
- Small food businesses, market traders and caterers
- Parents and event planners preparing for parties and celebrations

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero banner, reasons to shop with us, featured products, story teaser, testimonials and call to action |
| About | `about.html` | Company story, mission and values, timeline, image gallery with lightbox and FAQ accordion |
| Shop | `collection.html` | All products loaded with JavaScript, with live search, category filter, quick-filter buttons and sorting |
| Product | `product.html` | Product detail page. `product.html?id=<product-id>` loads any product's details, specifications, usage tips and related products |
| Enquiry | `enquiry.html` | Quote request form that returns a cost, discount, delivery and availability estimate |
| Contact | `contact.html` | Contact details, trading hours with live open/closed status, contact form that opens an email, and an interactive map |
| 404 | `404.html` | Branded "page not found" page served by GitHub Pages for broken links |

## Features

### Interactive elements (JavaScript)
- **Responsive navigation:** hamburger menu on small screens.
- **Accordion:** FAQ on the About page (one answer open at a time, keyboard and screen-reader friendly).
- **Tabs:** Details / Specifications / Usage Tips on the product page (arrow-key navigation).
- **Lightbox gallery:** click any gallery or shop image to view it larger, with next/previous buttons, arrow keys and Escape to close. The lightbox is built with DOM manipulation.
- **Interactive map:** Leaflet with OpenStreetMap tiles shows the shop location with a popup and a "Get directions" link, a shaded Gauteng delivery zone, and a "How far am I from the shop?" button that uses the browser's location to draw a line to the shop, show the distance and say which delivery option applies.
- **Cart counter:** "Add to Cart" buttons update a counter in the header (stored in `localStorage`) and show a toast message.
- **Animations and transitions:** hero fade-in, cards that fade in as you scroll (IntersectionObserver), hover effects on cards, buttons and images. Animations are turned off for users who prefer reduced motion.

### Dynamic content
- Products are stored in one `PRODUCTS` array in `script.js` and used by the shop, product and enquiry pages.
- The shop page builds its product cards with JavaScript and supports **search**, **filter by category** and **sort by price or name**, with a live results count.
- The product page reads the `id` from the URL and fills in the product details, page title and meta description.
- The contact page shows whether the shop is currently open based on trading hours.

### Forms and validation
| | Enquiry form (`enquiry.html`) | Contact form (`contact.html`) |
|---|---|---|
| **Purpose** | Ask about products and get a quote | Send a general message to the shop |
| **Fields** | Enquiry type (radio), product, quantity, delivery method, date needed, name, email, phone, details | Name, email, phone, message type, subject, message, consent checkbox |
| **Result** | Shows unit price, subtotal, bulk discount, delivery fee, estimated total, stock availability and an estimated ready/delivery date compared with the date needed | Compiles the details into an email to `info@chocolateden.co.za` (set in `CONTACT_EMAIL` in `script.js`) and opens the user's email app |

Validation rules (HTML5 attributes plus JavaScript):
- required fields, minimum and maximum text lengths
- names: letters, spaces, hyphens and apostrophes only
- email address format
- South African phone numbers (`082 123 4567` or `+27 82 123 4567`)
- quantity: whole number between 1 and 500
- date: from today up to 12 months ahead
- error messages appear under each field, invalid fields turn red, valid fields turn green and focus moves to the first error

## Search Engine Optimisation (SEO)

**On-page SEO**
- **Keyword research:** keywords such as *chocolate making supplies*, *moulding chocolate*, *baking supplies South Africa*, *flavouring oils* and *cake boxes* are used in titles, headings and content.
- **Title tags and meta descriptions:** every page has a unique, descriptive `<title>`, `meta description` and `meta keywords`.
- **Header tags:** one `<h1>` per page, followed by `<h2>` and `<h3>` headings in order.
- **Image optimisation:** all images have descriptive file names (e.g. `dark-chocolate-buttons.jpg` instead of `SOU038.jpg`), descriptive alt text, width and height attributes and lazy loading.
- **URL structure:** clean, lowercase file names with no spaces.
- **Internal linking:** navigation, footer links, breadcrumbs, related products and calls to action link the pages together.
- **Mobile-friendliness:** responsive layout tested at phone, tablet and desktop widths.
- **Canonical URLs and Open Graph tags** for sharing on social media.

**Off-page SEO**
- **Social media:** links to Facebook, Instagram and Pinterest in the footer of every page.
- **Local SEO:** address, phone number, trading hours and map on the Contact page; location keywords (Randburg, Johannesburg) in titles and descriptions.
- **Backlinks:** the site can be listed on local business directories and baking blogs, and linked from the shop's social media profiles.

**Additional files**
- `robots.txt` tells search engines they may crawl the site and where the sitemap is.
- `sitemap.xml` lists all public pages with their last-modified date, change frequency and priority.

## Security and performance

- **Content Security Policy** meta tag limits scripts, styles, fonts and images to the site itself and trusted sources (cdnjs, Google Fonts, OpenStreetMap).
- **Subresource Integrity** (`integrity` hashes) on the Leaflet files loaded from the CDN.
- **Safe DOM updates:** user input and product data are added with `textContent` / `createElement`, not `innerHTML`, which prevents script injection (XSS).
- **Input validation** on all form fields, with maximum lengths.
- External links use `rel="noopener noreferrer"`; a `referrer` policy is set.
- **Page speed:** large images were resized from 1–3 MB to under 500 KB (the total image folder went from about 6.8 MB to 0.85 MB), images below the fold load lazily, scripts load with `defer`, and fonts are preconnected.
- The site is served over HTTPS by GitHub Pages.

## Technologies used

- HTML5
- CSS3 (CSS variables, Flexbox, Grid, media queries, transitions and keyframe animations)
- JavaScript (ES6, no frameworks)
- [Leaflet 1.9.4](https://leafletjs.com/) and [OpenStreetMap](https://www.openstreetmap.org/) for the map
- Google Fonts (Playfair Display and Poppins)
- Git and GitHub for version control; GitHub Pages for hosting

## Project structure

```
├── index.html            # Home page
├── about.html            # About Us page (gallery + FAQ)
├── collection.html       # Shop page (dynamic products, search, filter, sort)
├── product.html          # Product detail page (tabs, dynamic content)
├── enquiry.html          # Enquiry / quote form
├── contact.html          # Contact form and map
├── 404.html              # Page not found
├── style.css             # Site-wide stylesheet
├── script.js             # All JavaScript functionality
├── robots.txt            # Instructions for search engine crawlers
├── sitemap.xml           # Site map for search engines
├── README.md             # Project documentation
├── images/               # Logo, favicon, hero, about and gallery images
└── products/             # Product photos
```

## Running the site locally

This is a static website with no build step. Open `index.html` in a web browser, or run a local server from the project folder, for example:

```bash
npx serve .
```

## Deployment

The site is deployed with **GitHub Pages**:

1. Push the project to the `main` branch of the GitHub repository.
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. The site is published at https://zanelerester.github.io/WEDE5020-html/.

All file paths in the site are relative, so the pages work both locally and on the GitHub Pages project URL.

---

## Changelog

### Part 3 – Enhancing Functionality and SEO (1 November 2026)

#### Changes made from Part 2 feedback
> Lecturer feedback: *"Your website lacks content, the styling is not properly done, and your GitHub has no detailed read me file and changelog."*

| Feedback | What was changed |
|---|---|
| **Website lacks content** | Every page was rewritten with full content. **Home:** hero, four "why shop with us" features, featured products, story section, testimonials and call to action. **About:** expanded company story, mission and values, history timeline, gallery and five FAQs. **Product:** price, stock, pack size, quantity selector, details, specifications, usage tips and related products. **Contact:** address, phone, email, trading hours, map and a fuller form. **Shop:** grew from 8 to 11 products, each with a category, size, stock level and description. A new **Enquiry** page was added. |
| **Styling is not properly done** | `style.css` was rewritten. It has a colour theme that matches the brown logo with pink accents, defined in CSS variables. Google Fonts (Playfair Display for headings, Poppins for text) are now loaded; before, Poppins was referenced but never loaded. Buttons, cards, forms, sections and the footer now look the same on every page. All inline styles were removed from the HTML. The unclosed `<div>` that broke the About page layout was fixed. The header now has the logo on the left and the navigation on the right, with an active-page highlight and a mobile hamburger menu. The layout is fully responsive (breakpoints at 960 px, 820 px and 600 px). |
| **No detailed README and changelog** | This README was rewritten with a project overview, goals, audience, pages, features, SEO, security, technologies, structure, how to run and deploy, this changelog and references. `READMe.md` was renamed to `README.md`. |

Other fixes from reviewing Part 2:
- `Index.html` was renamed to `index.html`. GitHub Pages is case-sensitive and only serves a lowercase `index.html` as the home page.
- Root-relative paths (`/images/...`) were changed to relative paths (`images/...`). The old paths break when the site is hosted on a GitHub Pages project URL.
- The Products link on the About page pointed to `/product.html` and was corrected.
- The 3 MB favicon was replaced with a 64 × 64 px version.
- The product page heading "Product Heading" and the incorrect price of R499 were replaced with real product information.

#### New in Part 3
- **JavaScript (`script.js`):** hamburger menu, cart counter, scroll animations, FAQ accordion, product tabs, lightbox gallery, Leaflet map, live open/closed status, dynamic product page and dynamic shop page with search, filter and sort.
- **Forms:** new enquiry form with an instant quote response. The contact form compiles a validated email. Both forms use HTML5 attributes and JavaScript validation, with clear error messages.
- **SEO:** unique titles, meta descriptions, keywords, canonical and Open Graph tags on each page; heading structure; descriptive image file names and alt text; internal links and breadcrumbs; `robots.txt` and `sitemap.xml`.
- **Images:** all images were renamed descriptively (e.g. `BAK1010.jpg` → `disposable-piping-bag.jpg`, `logo (1).png` → `chocolate-den-logo.png`). Large photos were resized for faster loading.
- **Security:** Content Security Policy, Subresource Integrity on CDN files, safe DOM updates, `rel="noopener noreferrer"` and referrer policy.
- **New pages:** `enquiry.html` and `404.html`.
- **Deployment:** the site is published on GitHub Pages.
- **Rubric review fixes:** shortened page titles to 60 characters or fewer and meta descriptions to 160 characters or fewer, so search results show them in full. Added the delivery zone and distance finder to the map. Reference dates that could not be confirmed now use "n.d.".

### Part 2 – Styling with CSS (25 September 2026)
- Added `style.css` with a pink colour theme for the navigation bar, buttons, product cards, forms and footer.
- Linked the stylesheet to all pages.
- Added hover effects to navigation links, buttons and product cards.
- Added a media query for screens narrower than 600 px.
- Updated the README with the pages and project structure.

### Part 1 – HTML structure (17 September 2026)
- Created the Home, About, Products, Collection and Contact pages with semantic HTML.
- Added the navigation menu, logo and footer to every page.
- Added product images and the site images (logo, hero, about photo, favicon).
- Added a basic contact form (name, email, phone, message).
- Created the initial README.

---

## References

Images

- edurs34. n.d. *Muffin, cupcake, unicorn* [Illustration]. Pixabay. Available at: https://pixabay.com/images/id-7749811/ [Accessed 18 August 2026].
- frank_rietsch. n.d. *Cupcake, muffin, sprinkles* [Illustration]. Pixabay. Available at: https://pixabay.com/images/id-6524880/ [Accessed 18 August 2026].
- Pexels. n.d. *Chocolate chip muffins* [Photograph]. Pexels. Available at: https://www.pexels.com/photo/2179039/ [Accessed 18 August 2026].
- robertasriabovas. n.d. *Cupcakes, raspberries, dessert* [Photograph]. Pixabay. Available at: https://pixabay.com/images/id-4944589/ [Accessed 19 August 2026].
- The Chocolate Den. n.d. *Product images* [Photographs]. Available at: https://www.chocolateden.co.za [Accessed 18 August 2026].

Libraries, fonts and data

- Agafonkin, V. and Leaflet contributors. 2023. *Leaflet 1.9.4: an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ [Accessed 1 November 2026].
- Google. n.d. *Google Fonts: Playfair Display and Poppins*. Available at: https://fonts.google.com/ [Accessed 1 November 2026].
- OpenStreetMap contributors. n.d. *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright [Accessed 1 November 2026].

Documentation and tutorials

- Google. n.d. *Create and submit a robots.txt file*. Google Search Central. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt [Accessed 1 November 2026].
- Google. n.d. *Build and submit a sitemap*. Google Search Central. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap [Accessed 1 November 2026].
- Google. n.d. *SEO Starter Guide*. Google Search Central. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 1 November 2026].
- MDN Web Docs. n.d. *Client-side form validation*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 1 November 2026].
- MDN Web Docs. n.d. *Content Security Policy (CSP)*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP [Accessed 1 November 2026].
- MDN Web Docs. n.d. *Intersection Observer API*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API [Accessed 1 November 2026].
- MDN Web Docs. n.d. *Subresource Integrity*. Mozilla. Available at: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity [Accessed 1 November 2026].
- Sitemaps.org. 2016. *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html [Accessed 1 November 2026].
- W3C Web Accessibility Initiative. n.d. *ARIA Authoring Practices Guide: Accordion and Tabs patterns*. Available at: https://www.w3.org/WAI/ARIA/apg/patterns/ [Accessed 1 November 2026].
- W3Schools. n.d. *How To – Lightbox*. Available at: https://www.w3schools.com/howto/howto_js_lightbox.asp [Accessed 1 November 2026].
- W3Schools. n.d. *JavaScript Form Validation*. Available at: https://www.w3schools.com/js/js_validation.asp [Accessed 1 November 2026].
