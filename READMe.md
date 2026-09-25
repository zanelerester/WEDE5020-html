# Chocolate Den

A multi-page website for **Chocolate Den**, an online store selling chocolate-making supplies — moulds, packaging, flavouring oils, fillings and baking accessories.

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero banner and a row of featured products |
| About | `about.html` | Company background and history |
| Products | `product.html` | Single product detail view |
| Collection | `collection.html` | Grid of all products in the shop |
| Contact | `contact.html` | Contact form (name, email, phone, message) |

## Project structure

```
├── index.html          # Home page
├── about.html           # About Us page
├── product.html          # Product detail page
├── collection.html        # Product collection/grid page
├── contact.html          # Contact form page
├── style.css            # Site-wide stylesheet
├── images/              # Site imagery (hero, logo, about photo, favicon)
└── Products/             # Product photos used across pages
```

## Styling

All visual styling lives in `style.css` — a single shared stylesheet linked from every page, using a pink colour theme (nav bar, buttons, product cards, forms, and footer). The HTML files themselves contain no page-specific stylesheets, only a few inline styles on the home and about pages.

## Running locally

This is a static HTML/CSS site with no build step or dependencies. Simply open any `.html` file (e.g. `index.html`) in a browser, or serve the folder with a local static server, for example:

```bash
npx serve .
```
