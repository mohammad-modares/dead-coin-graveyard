# Tech steering — Dead Coin Graveyard

- **Stack:** Vite + React 19 + TypeScript, Tailwind CSS v4 (via @tailwindcss/vite).
- **Data:** static, typed dataset in `src/data/coins.ts`. All figures come from
  `../dead-coins-research.md` (verified 27 Nov 2026). No backend, no keys.
- **Live check:** optional fetch to the public CoinGecko API (`/api/v3/coins/{id}`)
  with no key; failures degrade gracefully to local-only results. Never block
  the UI on a network call.
- **Routing:** single page, no router. Detail view is a modal/expanded panel.
- **Styling:** Tailwind utilities + a small amount of custom CSS for fog, candle
  flicker and tombstone hover. Fonts: system serif for epitaphs (Georgia),
  system sans for UI. No webfont downloads (works offline).
- **Build/deploy:** `npm run build` must pass with `tsc -b && vite build`.
  Deploy the static `dist/` to GitHub Pages from the public repo.
- **Quality:** `npm run build` green; every coin in the UI matches the research
  file exactly (same numbers, same "unknown" markers, same dispute notes).
