# Design — Dead Coin Graveyard

## Data model
```ts
type Cause = "Ponzi / exit scam" | "Rug pull" | "Depeg / bank run"
  | "Bankruptcy / fraud" | "Bankruptcy" | "Regulatory shutdown" | "Code bug";

interface DeadCoin {
  id: string;            // slug, e.g. "bitconnect"
  name: string;          // "BitConnect"
  symbol: string;        // "BCC"
  born: string;          // "2016" (display string; may include month)
  died: string;          // "Jan 2018"
  bornYear: number; diedYear: number; // for sorting/stats
  lifespanNote?: string; // e.g. "lived ~20 hours"
  cause: Cause;
  causeDisputed?: string; // note when classification is contested
  peakPrice?: string;    // "$463" — display string, or undefined
  peakPriceNote?: string;
  peakMcap?: string;     // "~$2.6B" — undefined means unknown
  peakMcapNote?: string;
  losses: string;        // "~$2B" display string
  lossesUsdB?: number;   // numeric billions for the stats total
  story: string;         // 2–3 sentences: what happened
  epitaph: string;       // one line, serif
  lesson: string;        // one line: what to learn
  sources: string[];     // short source labels
}
```

## Components
- `App.tsx` — holds search/filter state and the selected grave; renders hero,
  stats, filters, grid, checker, footer.
- `StatsBar.tsx` — totals computed from `coins.ts`.
- `Filters.tsx` — search input + cause chips (All + one per cause present).
- `Tombstone.tsx` — card with carved-stone look (rounded top, gradient,
  serif epitaph). Hover: candle glow.
- `GraveDetail.tsx` — modal with the full story, figures, dispute notes,
  sources, lesson.
- `Checker.tsx` — input + local match + optional CoinGecko fetch.

## Visuals
- Background: #0a0a0f near-black with a CSS fog layer (two blurred radial
  gradients drifting via keyframes) and a ground line.
- Tombstones: dark stone gradient (#2a2a33 → #17171d), 1px rim, serif name.
- Accent: candle amber (#f5b942) for glows; sickly green (#7dd87d) for
  "peak" numbers; blood red (#e5484d) for losses.
- Cause chips: distinct muted colours per cause.

## States
- Empty search result: "No graves match — the dead rest undisturbed."
- Checker: idle / found-in-graveyard / alive-on-coingecko / no-pulse /
  api-unavailable (local-only note).
