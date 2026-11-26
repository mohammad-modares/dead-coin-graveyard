# Requirements — Dead Coin Graveyard

## 1. Graveyard grid
- The app shows all 12 dead coins as tombstone cards.
- Each card shows: name, symbol, years lived (born–died), cause of death,
  peak value, and epitaph.
- Cards are filterable by cause of death and searchable by name or symbol.

## 2. Grave detail
- Clicking a tombstone opens the full story: what happened, peak price/market
  cap, estimated losses, epitaph, lesson, and a "disputed" note when the cause
  is contested (AnubisDAO, TITAN).
- Unknown figures (CEL, VGX peak market cap) display as "unknown", never as
  a guessed number.
- Disputed figures show the range (e.g. SafeMoon mcap $5.7B–$17B) with a note.

## 3. "Is it dead?" checker
- A text input accepts a coin name or symbol.
- It first matches the local graveyard (case-insensitive, name or symbol).
- If not found locally, it queries the public CoinGecko API for the coin; a
  coin with no market data is reported as "no pulse found" with the caveat
  that this is not proof of death. API failure degrades to local-only results.

## 4. Stats bar
- Computed from the dataset (never hard-coded): number of graves, total
  estimated losses (sum of numeric loss figures, labelled approximate),
  biggest single grave, shortest life (AnubisDAO, ~20 hours).

## 5. Presentation
- Dark graveyard aesthetic: near-black background, fog, candle glow, serif
  epitaphs. Fully readable on a phone screen.
- No financial advice anywhere; footer states the site is a historical
  memorial, not investment advice.
- Build passes `npm run build`; deploys as static files to GitHub Pages.

## 6. Kiro usage (submission requirement)
- The repo contains `/.kiro` with steering docs and this spec.
- Implementation is driven through Kiro (CLI): spec tasks are executed with
  Kiro, and the Kiro usage write-up in the Devpost submission describes
  honestly what Kiro did (specs, steering, hooks) and what was done by hand.
