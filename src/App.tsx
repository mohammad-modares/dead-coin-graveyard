import { useState, useMemo } from "react";
import { COINS, type Cause, type DeadCoin } from "./data/coins";
import StatsBar from "./components/StatsBar";
import Filters from "./components/Filters";
import Tombstone from "./components/Tombstone";
import GraveDetail from "./components/GraveDetail";
import Checker from "./components/Checker";

export default function App() {
  const [query, setQuery] = useState("");
  const [cause, setCause] = useState<Cause | "All">("All");
  const [selected, setSelected] = useState<DeadCoin | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COINS.filter((c) => {
      const matchesCause = cause === "All" || c.cause === cause;
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.symbol.toLowerCase().includes(q);
      return matchesCause && matchesQuery;
    });
  }, [query, cause]);

  return (
    <div className="relative min-h-screen overflow-x-hidden pb-24">
      {/* ── Hero ── */}
      <header className="relative overflow-hidden pt-20 pb-16 text-center">
        {/* Fog layers */}
        <div className="fog-layer" style={{ animationDelay: "0s" }} aria-hidden />
        <div
          className="fog-layer"
          style={{ animationDelay: "-13s", opacity: 0.6, transform: "scaleX(-1)" }}
          aria-hidden
        />

        <div className="relative z-10 px-4">
          {/* Tombstone glyph */}
          <div className="mb-6 flex justify-center">
            <span
              aria-hidden
              className="text-8xl select-none"
              style={{ filter: "drop-shadow(0 0 20px rgba(245,185,66,0.4))" }}
            >
              🪦
            </span>
          </div>

          <h1
            className="serif text-5xl font-bold text-zinc-100 md:text-7xl"
            style={{ textShadow: "0 0 40px rgba(245,185,66,0.25)" }}
          >
            Dead Coin Graveyard
          </h1>
          <p className="serif mx-auto mt-4 max-w-xl text-lg text-zinc-400 italic md:text-xl">
            Where rugs, Ponzis, and algorithmic disasters come to rest.
            <br />
            <span className="text-sm not-italic text-zinc-500">
              Every number verified. Every lesson real.
            </span>
          </p>

          {/* Ground line */}
          <div className="mx-auto mt-10 h-px max-w-3xl bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
        </div>
      </header>

      {/* ── Stats bar ── */}
      <section className="relative z-10 mt-2">
        <StatsBar />
      </section>

      {/* ── Is it dead? checker ── */}
      <section className="relative z-10 mt-10">
        <Checker />
      </section>

      {/* ── Filters ── */}
      <section className="relative z-10 mt-10">
        <Filters query={query} onQuery={setQuery} cause={cause} onCause={setCause} />
      </section>

      {/* ── Tombstone grid ── */}
      <main className="relative z-10 mx-auto mt-8 max-w-5xl px-4">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((coin) => (
              <Tombstone key={coin.id} coin={coin} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="serif text-2xl text-zinc-500 italic">
              No graves match — the dead rest undisturbed.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCause("All");
              }}
              className="mt-4 rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-400 hover:border-white/30 hover:text-zinc-200 transition"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      {/* ── Detail modal ── */}
      {selected && (
        <GraveDetail coin={selected} onClose={() => setSelected(null)} />
      )}

      {/* ── Footer ── */}
      <footer className="relative z-10 mx-auto mt-20 max-w-3xl border-t border-white/10 px-4 pt-8 text-center text-xs text-zinc-500">
        <p className="text-sm font-semibold text-zinc-400">
          🪦 Dead Coin Graveyard — a historical memorial, not financial advice.
        </p>
        <p className="mt-2 leading-relaxed">
          Every figure on this site is sourced and verified. Unknown values are
          shown as "unknown" — never guessed. Disputed figures show the range.
          This site does not recommend buying, selling, or holding any asset.
        </p>
        <p className="mt-3">
          <span className="font-semibold text-zinc-400">Data sources:</span>{" "}
          Wikipedia · US DOJ / SEC / IRS filings · CoinGecko · CoinDesk ·
          CoinMarketCap · CoinPaprika · The Block · Decrypt · Chainalysis ·
          Bankruptcy court records · Verified 27 Nov 2026.
        </p>
        <p className="mt-4 text-zinc-600">
          Built for Kiroween 2026 · Resurrection category
        </p>
      </footer>
    </div>
  );
}
