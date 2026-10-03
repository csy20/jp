# Jageshwar Sahu · SITASONI Founder Edition

A founder-led fashion portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS. The design pairs ivory and SITASONI royal blue with locally hosted Inter and Playfair Display fonts.

## Develop and verify

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before deployment. The production build exports the site to `out/`, which can be hosted on any static web host.

## Content and assets

- Edit business information, navigation, and featured products in `lib/brand.ts`.
- The original portrait and SITASONI logo come from the existing portfolios.
- Featured photographs match the actual products linked in the SITASONI storefront, with local 480px and up-to-900px WebP versions. Direct product links select an available size in the photographed color. Provenance and product details are recorded in `public/collections/SOURCES.md`.
- Fonts are hosted locally; their Open Font Licenses are in `public/fonts/`.
- The only client component observes the decorative stitched lines. Content and navigation work without JavaScript, and motion respects the visitor’s reduced-motion preference.

## Production URL

Set `NEXT_PUBLIC_PORTFOLIO_URL` to the actual portfolio origin before building production. It supplies canonical and absolute social-sharing URLs. Without it, local previews omit those URLs rather than identifying the separate online store as the portfolio. See `.env.example`.

Shopping links lead to https://sitasoni.com. Business details currently use the storefront’s 9 AM–7 PM daily hours, `contact@sitasoni.com`, and Nawagarh address.
