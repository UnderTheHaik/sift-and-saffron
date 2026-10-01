# Sift & Saffron — Concept Project

A self-initiated web-development portfolio concept for a fictional Dubai home bakery. This is not a real bakery, paying client or functioning ordering service. Brand, products, AED prices, policies and founder story are illustrative. No awards, testimonials, partnerships or business performance are claimed. The name was independently developed; trademark availability has not been established.

## Technologies and structure

Semantic HTML, mobile-first CSS, minimal vanilla JavaScript and a Node.js static generator. Sharp makes three responsive WebP sizes from each supplied photograph. No framework, database, account or payment service is needed.

- `scripts/build.mjs`: reusable page layout, product records, image generation and route generation.
- `scripts/serve.mjs`: small local static server.
- `dist/assets/style.css`: shared tokens, typography, layout and responsive states.
- `dist/assets/app.js`: keyboard-usable mobile navigation, menu filtering, native dialog, clipboard and form validation.
- `dist/`: deployable HTML routes and optimized assets. Static assets are intentionally tracked here.
- `originals/`: supplied full-resolution photos; excluded from deployment and Git.
- `.openai/hosting.json`: private Sites identity and static output directory.

Routes: `/`, `/menu/`, `/menu/:product/` (six products), `/custom-orders/`, `/about/`, `/faq/`, `/contact/`, `/case-study/`.

## Run locally

Requires Node.js 22 or later. From this directory:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:4322. The checked-in `dist` works immediately. To regenerate pages and image sizes, put the six original JPEGs in `originals/` using their supplied Unsplash filenames, then run `npm run build`. Set `SITE_URL` to your verified deployment origin before rebuilding metadata.

## Deployment

The finished `dist` is a static website, with directory-style routes. Publish that directory on Sites, Cloudflare Pages, Netlify or another static host. No SPA rewrite is required. On a different host, set `SITE_URL` and rebuild to update canonical, Open Graph and sitemap URLs. Sites publication is private by default; sharing is managed in Sites. Do not publish `originals` or local dependencies.

## Enquiry demo and validation

All WhatsApp actions prepare a local message preview. A real number is deliberately absent; no message is sent to an unrelated person. The contact page shows the UAE format `+971 5X XXX XXXX` as a placeholder. The custom form validates required fields, numeric ranges, a Dubai-calendar date at least five days away, and JPG/PNG/WebP files up to 5 MB. Selected images stay in memory and are never uploaded. WhatsApp cannot attach a local file through a click-to-chat URL: the user would attach inspiration manually.

For a real business, set an owner-verified international WhatsApp number in one shared configuration, replace preview actions with encoded `https://wa.me/<number>?text=<message>` links, confirm policies, pricing, delivery and contact details, and add appropriate privacy information. Do not enable real payments or image collection without implementing the corresponding service.

## Accessibility and Arabic preparation

Skip link, landmarks, visible focus outlines, labelled fields, native disclosures and modal focus management are built in. No essential action requires hover. Responsive CSS supports small screens, text enlargement and reduced motion. Logical properties, `lang="en"` and `dir="ltr"` allow a future locale layer. Arabic is not implemented: translate data and labels, select an Arabic typeface and verify RTL layouts before enabling it.

## Photography

User-supplied Unsplash photographs by David Holifield, Natalie Chaney, Taylor Grote, Leo Roza (two images) and Jr R. Original filenames are retained in the generator. Photographs are visual references, not evidence that these products were made by the fictional bakery. No cookie photograph was supplied, so that product honestly shows a typography placeholder. Social metadata reuses the supplied cake photograph. Google Fonts loads DM Sans and Libre Caslon Display, with local system fallbacks.

## Case study and portfolio captures

The `/case-study/` page documents the problem, solution, implementation decisions and honest limits. Capture the home page at desktop and mobile sizes, menu, product details and the custom enquiry preview for reuse. Retain the Concept Project label. No sales or conversion uplift can be asserted without real deployment data.

## Verification

Run `node scripts/check.mjs` after building to verify the thirteen routes, internal links, image references and unique titles. Use a browser to verify keyboard focus, the custom form, image errors, category filters and responsive layouts before public launch.


## Public showcase

https://underthehaik.github.io/sift-and-saffron/

The committed dist is configured for this GitHub Pages path. After regenerating from originals, reapply the deployment base path before publishing.


## Public showcase

https://underthehaik.github.io/sift-and-saffron/

The committed dist is configured for this GitHub Pages path. After regenerating from originals, reapply the deployment base path before publishing.


## Public showcase

https://underthehaik.github.io/sift-and-saffron/

The committed dist is configured for this GitHub Pages path. After regenerating from originals, reapply the deployment base path before publishing.


## Public showcase

https://underthehaik.github.io/sift-and-saffron/

The committed dist is configured for this GitHub Pages path. After regenerating from originals, reapply the deployment base path before publishing.
