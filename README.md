# Lithavi International — Website (Home Page)

Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build: `npm run build && npm run start`

## Structure

- `src/styles/tokens.css` — every design token (color, type, spacing, radii,
  shadows). Change brand values here; components reference tokens only.
- `src/components/` — one file per section (`Hero`, `ServicesOverview`,
  `WhyChooseUs`, `ServiceAreas`, `ClientVoices`), plus shared pieces
  (`Header`, `Footer`, `LogoPlaceholder`, `DimensionLine`, `BlueprintGrid`).
- `src/app/page.tsx` — assembles the home page from those sections.
- Fonts (Space Grotesk, Inter) are self-hosted via `@fontsource`, no
  external font CDN.

## A note on imagery

This environment's network access doesn't reach stock-photo sites
(Unsplash/Pexels), so photography couldn't be sourced and downloaded as the
brief asked. Rather than leave empty boxes, the home page uses custom SVG
graphics built from the subject itself — a stylised Bill of Quantities
panel in the hero, a measurement "dimension line" motif used as a
recurring signature device, and an abstract grid-globe for global reach.
When you're ready, swap in real project/office photography.

## Still needed from you

- Logo file (placeholder mark + wordmark currently in the header/footer)
- Business email, phone/WhatsApp number, and business hours (marked
  `[Add ...]` in the footer)
