# Structure steering — Dead Coin Graveyard

```
dead-coin-graveyard/
├── .kiro/
│   ├── steering/            # product.md, tech.md, structure.md (this file)
│   └── specs/
│       └── dead-coin-graveyard/
│           ├── requirements.md
│           ├── design.md
│           └── tasks.md
├── public/
│   └── favicon.svg          # tombstone glyph
├── src/
│   ├── data/coins.ts        # typed dataset (12 coins, verified figures)
│   ├── components/
│   │   ├── Tombstone.tsx    # grave card
│   │   ├── GraveDetail.tsx  # expanded story modal
│   │   ├── StatsBar.tsx     # totals computed from the dataset
│   │   ├── Checker.tsx      # "Is it dead?" lookup
│   │   └── Filters.tsx      # search + cause filter
│   ├── App.tsx              # composition + state
│   ├── index.css            # tailwind + fog/candle animations
│   └── main.tsx
├── index.html
└── README.md                # how to run, deploy, and how Kiro was used
```

- Keep components small and single-purpose; state lives in `App.tsx`.
- The dataset is the single source of truth for all numbers shown anywhere
  (stats bar computes from it — never hard-code totals in JSX).
