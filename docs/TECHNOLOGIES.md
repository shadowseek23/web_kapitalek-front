
# Technologie a knihovny

Tato aplikace používá TypeScript jako hlavní programovací jazyk pro typovanou a bezpečnější práci s kódem.

Tento dokument shrnuje hlavní technologie a externí knihovny použité v aplikaci.

- Framework: Next.js (verze 15.x) — server-side rendering, routing a build pipeline.
- UI knihovna: React (verze 18.x) — základy komponent a rendering.
- Jazyk: TypeScript — typování pro bezpečnější vývoj.
- Styling: Tailwind CSS (v4.x) + `postcss` (pluginy: `postcss-import`, `postcss-nested`, `postcss-mixins`, `postcss-simple-vars`, `postcss-utilities`) — utility-first CSS a PostCSS pipeline.
- Design / komponenty: `@heroui/*` — sada hotových komponent (accordion, button, navbar, modal, atd.).
- Témata: `next-themes` —  řeší přepínání světlého/tmavého režimu.
- Animace: `framer-motion` — animace a přechody.
- Carousel / slider: `swiper` — portfolio slider.
- Lightbox / galerie: `photoswipe` — zobrazení obrázků v lightboxu.
- Ikony: `react-icons` — sady ikon.
- Text/efekty: `typewriter-effect` — efekt psacího stroje pro titulky.
- Lokalizace/formátování: `intl-messageformat` — formátování zpráv/čísel (pokud používáno).
- Utility: `clsx` — skládání tříd CSS.

Nástroje pro vývoj a lintování

- Linter: `eslint` s `@next/eslint-plugin-next`, `@typescript-eslint` a dalšími pluginy (`eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`, `eslint-plugin-prettier`).
- Formatter: `prettier`.
- Typy: `@types/node`, `@types/react`, `@types/react-dom`.
- Build/dev: skripty `next dev` (s podporou Turbopack), `next build`, `next start`.

Poznámky

- Aplikace je typická Next.js aplikace připravená pro nasazení na Vercel nebo jiný hosting podporující Node/Next.js.
- Pokud budete přidávat nové UI komponenty, zvažte využití existujících `@heroui/*` komponent pro konzistenci stylů.
- Pro přidání dalších závislostí použijte `npm install` nebo `pnpm` podle vašeho workflow a aktualizujte `package.json`.
