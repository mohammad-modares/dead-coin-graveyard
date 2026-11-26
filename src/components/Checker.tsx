import { useState } from "react";
import { COINS, type DeadCoin } from "../data/coins";

type Status =
  | { kind: "idle" }
  | { kind: "dead"; coin: DeadCoin }
  | { kind: "alive"; name: string; price?: string }
  | { kind: "no-pulse"; query: string }
  | { kind: "error"; query: string };

async function checkCoinGecko(query: string): Promise<Status> {
  const q = query.trim().toLowerCase();
  try {
    const search = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(q)}`,
    );
    if (!search.ok) return { kind: "error", query };
    const data = (await search.json()) as {
      coins?: { id: string; name: string; symbol: string }[];
    };
    const match = data.coins?.find(
      (c) => c.symbol.toLowerCase() === q || c.name.toLowerCase() === q,
    );
    if (!match) return { kind: "no-pulse", query };
    const detail = await fetch(
      `https://api.coingecko.com/api/v3/coins/${match.id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    );
    if (!detail.ok) return { kind: "no-pulse", query };
    const d = (await detail.json()) as {
      market_data?: { current_price?: { usd?: number } };
    };
    const price = d.market_data?.current_price?.usd;
    return {
      kind: "alive",
      name: match.name,
      price: price !== undefined ? `$${price.toLocaleString()}` : undefined,
    };
  } catch {
    return { kind: "error", query };
  }
}

export default function Checker() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [busy, setBusy] = useState(false);

  const check = async () => {
    const q = input.trim();
    if (!q) return;
    const local = COINS.find(
      (c) =>
        c.symbol.toLowerCase() === q.toLowerCase() ||
        c.name.toLowerCase() === q.toLowerCase(),
    );
    if (local) {
      setStatus({ kind: "dead", coin: local });
      return;
    }
    setBusy(true);
    setStatus(await checkCoinGecko(q));
    setBusy(false);
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-4">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
        <h2 className="serif text-2xl font-bold text-zinc-100">
          🪦 Is your coin dead?
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Type a coin name or symbol. We check the graveyard first, then the
          live market — a missing pulse is a warning, not proof of death.
        </p>
        <div className="mx-auto mt-4 flex max-w-md gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") void check();
            }}
            placeholder="e.g. LUNA, SQUID, BTC…"
            aria-label="Coin name or symbol to check"
            className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-500 focus:border-amber-300/60 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => void check()}
            disabled={busy}
            className="rounded-xl bg-amber-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-200 disabled:opacity-50"
          >
            {busy ? "Checking…" : "Check pulse"}
          </button>
        </div>

        <div className="mx-auto mt-4 max-w-md text-left" aria-live="polite">
          {status.kind === "dead" && (
            <p className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              💀 <strong>{status.coin.name} (${status.coin.symbol}) is buried here.</strong>{" "}
              Died {status.coin.died} — {status.coin.cause}. Lost {status.coin.losses}.
            </p>
          )}
          {status.kind === "alive" && (
            <p className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              💚 <strong>{status.name} still has a pulse</strong>
              {status.price ? ` — trading around ${status.price}.` : "."} Not in the
              graveyard (yet). Stay vigilant anyway.
            </p>
          )}
          {status.kind === "no-pulse" && (
            <p className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-4 py-3 text-sm text-yellow-200">
              🌫️ No pulse found for “{status.query}” — no live market data. That is a
              warning sign, not proof of death: it may be delisted, renamed, or
              misspelled. Check before you trust it.
            </p>
          )}
          {status.kind === "error" && (
            <p className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300">
              The live market could not be reached, so only the local graveyard was
              checked — “{status.query}” is not buried here. Try again when you are
              online.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
