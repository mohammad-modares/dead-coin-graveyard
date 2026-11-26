# 🪦 Dead Coin Graveyard

**Where crypto goes to rest.** A memorial for dead and rugged cryptocurrencies —
twelve graves, verified facts, one lesson each. Built for
[Kiroween 2026](https://kiroween.devpost.com/) (Resurrection category).

**Live site:** https://mohammad-modares.github.io/dead-coin-graveyard/

## What it is

Every dead coin gets a tombstone: name, symbol, years lived, cause of death,
peak value, estimated losses, and a one-line epitaph. Click a tombstone to read
the full story — what happened, the numbers, and what investors should learn
from it.

Features:

- **Graveyard grid** — 12 tombstones, filterable by cause of death
  (Ponzi / exit scam, rug pull, depeg / bank run, bankruptcy, regulatory
  shutdown, code bug) and searchable by name or symbol.
- **Grave detail** — full story, peak price/market cap, losses, lesson, and
  sources. Disputed causes (AnubisDAO, TITAN) carry a visible “disputed” note.
- **“Is it dead?” checker** — type any coin: it checks the local graveyard,
  then the live CoinGecko API. No pulse found is reported as a warning, not
  proof of death.
- **Stats bar** — totals computed from the dataset, never hard-coded:
  12 graves, ~$56B buried, biggest grave Terra (~$40B), shortest life
  AnubisDAO (~20 hours).

## Facts, not fiction

Every figure is verified against trustworthy sources (Wikipedia, US DOJ/SEC,
CoinDesk, CoinGecko, Chainalysis, The Block) — see
[`dead-coins-research.md`](../dead-coins-research.md) in the hackathon notes
(kept out of this repo; the in-repo source of truth is `src/data/coins.ts`).
Where sources disagree, the app shows the range and says so. Where no credible
figure exists (CEL and VGX peak market cap), the app shows “unknown” — never
a guessed number.

This is a historical memorial, not financial advice.

## How Kiro was used

- **Spec-driven development:** the build started from a written spec in
  `.kiro/specs/dead-coin-graveyard/` (`requirements.md`, `design.md`,
  `tasks.md`), with product/tech/structure steering docs in `.kiro/steering/`.
  The `/.kiro` directory is part of the repo (and not gitignored) so judges
  can see the specs, hooks and steering that drove the build.
- **Kiro CLI:** the app shell (`src/App.tsx`) was implemented by Kiro CLI
  from the spec — it read the requirements, design and existing components,
  wrote the composition, and ran `npm run build` until TypeScript passed.
- **Steering:** the steering docs kept the build honest — dataset as single
  source of truth, no invented numbers, graceful degradation when the live
  API is unreachable.
- Human work: the dataset (transcribed from verified research), the
  components, the styling, and the final verification.

## Run it

```bash
npm install
npm run dev     # local dev server
npm run build   # tsc + vite build → dist/
```

## Deploy

Pushing to `master` deploys the static build to GitHub Pages via
`.github/workflows/deploy.yml`.

## Tech

Vite + React 19 + TypeScript + Tailwind CSS v4. No backend, no API keys.
The optional live check uses the public CoinGecko API (no key) and degrades
gracefully when offline.

## License

MIT — see [LICENSE](LICENSE).
