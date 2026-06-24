# Chocolate Monarch — Premium Bakery Website

A luxurious, single-page European pastry boutique site with smooth-scroll navigation, AI-generated photography, scroll-reveal animations, and Swiper carousels. Built on the project's TanStack Start + Vite + Tailwind v4 + Framer Motion + Swiper stack.

## Decisions locked in
- **Structure:** One landing page; navbar links smooth-scroll to section anchors.
- **Imagery:** AI-generated premium pastry photos, styled to the brand palette.
- **Contact/WhatsApp/socials:** Placeholder values (phone, email, handles) wired in one central config file so you can swap real details in one place later.

## Design system
Set up tokens in `src/styles.css` (Tailwind v4 `@theme`):
- **Colors:** chocolate `#3A241E`, dark-brown `#2A1814`, gold `#E6A32D`, light-gold `#F7C55A`, cream `#F8F4EC`, beige `#FAF7F0`, white, dark-text `#2D2D2D`, light-text `#666666`, whatsapp-green `#25D366`.
- **Fonts:** Playfair Display (headings) + Poppins (body) via `@fontsource` packages imported in `src/main`/root — no CDN links.
- **Radii:** cards 20px, buttons 50px (pill), images 30px.
- **Shadows:** light/medium/large as specified, registered as utilities.
- **Animation defaults:** 0.6s fade-up scroll reveal, hover scale 1.05, button lift 5px, card scale+shadow.

```text
Navbar (sticky, transparent→white on scroll)
 ├ Hero (cream gradient + wave + floating pastry)
 ├ Cake Categories (4 cards)
 ├ About (image left / content right)
 ├ Counters (animated count-up, 4 stats)
 ├ Who We Are (beige + checklist + image)
 ├ Featured Cakes (Swiper, autoplay)
 ├ Occasions (circular icon cards)
 ├ Why Choose Us (split layout)
 ├ Menu (name/price list)
 ├ Testimonials (white cards, stars, gold quote)
 ├ Social Media (circular gold icons)
 └ Footer (dark brown, columns + outlets + hours)
Floating: WhatsApp button + Scroll-to-top
```

## Components (in `src/components/`)
Reusable, prop-driven: `Navbar`, `MobileDrawer`, `Hero`, `SectionHeading`, `Reveal` (Framer Motion scroll-reveal wrapper), `CategoryCard`, `About`, `Counters` + `CountUp` hook, `WhoWeAre`, `FeaturedCarousel` (Swiper), `Occasions`, `WhyChooseUs`, `Menu`, `Testimonials` (Swiper), `SocialBar`, `Footer`, `WhatsAppButton`, `ScrollToTop`, `WaveDivider`.

A `src/data/site.ts` config holds brand text, menu items, categories, occasions, stats, testimonials, outlets, and contact/social placeholders.

## Routing
- Keep `src/routes/__root.tsx` shell; add sitewide SEO meta + Organization/LocalBusiness JSON-LD.
- `src/routes/index.tsx` becomes the full landing page composing all sections, with page-specific title/description/OG tags.
- Smooth scrolling via `scroll-behavior: smooth` + anchor IDs; navbar links scroll to sections (with sticky-offset handling).

## Imagery (AI-generated, brand-styled)
Generate and store under `src/assets/`:
- Hero pastry hero shot (transparent/float-ready).
- 4 category images (birthday, anniversary, kids designer, wedding).
- About + Who-We-Are + Why-Choose-Us large lifestyle/cake images.
- 5 featured-cake images (eggless, chocolate, black forest, red velvet, butterscotch).
- Testimonial avatars (or simple stylized portraits).
Images lazy-loaded; rounded 30px; subtle float animation on hero.

## Animations & UX
- Framer Motion fade-up on scroll for every section (staggered children for grids).
- Hover: cards scale + shadow, buttons lift, category images zoom under fixed-overflow frame.
- Navbar background/shadow transition on scroll.
- Count-up stats trigger on viewport entry.
- Swiper: gold pagination dots, 3s autoplay, responsive breakpoints.

## Extra features
WhatsApp float (bottom-right, green→dark-brown hover), scroll-to-top button, lazy images, smooth scroll, SEO meta + JSON-LD, full responsive (mobile/tablet/desktop) with the specified spacing (100px desktop / 60px mobile, max-w 1280px).

## Technical notes
- Install: `framer-motion`, `swiper`, `@fontsource/playfair-display`, `@fontsource/poppins`.
- Tailwind v4 tokens in `src/styles.css` (no `tailwind.config.js`); custom shadows/radii as theme vars + utilities.
- All colors via semantic tokens — no hardcoded hex in JSX.
- `react-router-dom` is not used; navigation is in-page anchor scroll (TanStack Start is the router for the single route).

After approval I'll generate the images, scaffold the design tokens, build the components, and verify the build + a preview screenshot.