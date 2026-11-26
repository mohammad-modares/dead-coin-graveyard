# Product steering — Dead Coin Graveyard

## What it is
A memorial website for dead and rugged cryptocurrencies. Each dead coin gets a
tombstone: name, symbol, years lived, cause of death, peak value, estimated
losses, and a one-line epitaph. The tone is darkly funny and spooky (Halloween),
but every fact is verified against real sources — no invented numbers.

## Audience
Crypto-curious visitors, hackathon judges, and the builder's own X/YouTube
audience. Many visitors will be new to crypto history; the app must teach the
lesson of each death, not just list numbers.

## Core features
1. **Graveyard grid** — 12 tombstones, filterable by cause of death, searchable
   by name/symbol.
2. **Tombstone detail** — click a tombstone to read the full story: what happened,
   peak value, losses, epitaph, and sources.
3. **"Is it dead?" checker** — type a coin name/symbol: first checks the local
   graveyard, then (best effort) the public CoinGecko API; a coin that returns
   no market data is reported as "no pulse found" with an honest caveat.
4. **Stats bar** — total value buried, graves count, biggest grave, fastest death.
5. **Lessons** — one line per coin: what investors should learn from it.

## Rules
- Never show a number that is not verified. Unknown values display as "unknown".
- Where sources disagree, show the range and say so (e.g. SafeMoon peak mcap).
- Disputed causes (AnubisDAO, TITAN) carry a "disputed" note.
- No financial advice. No live prices presented as investment signals.
- Dark, foggy, candle-lit graveyard aesthetic; readable on mobile.
