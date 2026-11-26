import { useEffect } from "react";
import type { DeadCoin } from "../data/coins";

interface Props {
  coin: DeadCoin;
  onClose: () => void;
}

export default function GraveDetail({ coin, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${coin.name} grave detail`}
    >
      <div
        className="rise-in max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-white/10 bg-[#14141b] p-6 sm:rounded-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-[0.3em] text-zinc-500 uppercase">
              {coin.born} — {coin.died}
              {coin.lifespanNote ? ` · ${coin.lifespanNote}` : ""}
            </div>
            <h2 className="serif mt-2 text-3xl font-bold text-zinc-100">
              {coin.name} <span className="text-amber-300">${coin.symbol}</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-white/15 px-3 py-1 text-sm text-zinc-300 hover:border-white/40"
          >
            ✕
          </button>
        </div>

        <p className="serif mt-4 text-lg text-zinc-300 italic">“{coin.epitaph}”</p>

        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <dt className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
              Cause of death
            </dt>
            <dd className="mt-1 text-sm font-semibold text-red-300">{coin.cause}</dd>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <dt className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
              Peak price
            </dt>
            <dd className="mt-1 text-sm font-semibold text-emerald-300">
              {coin.peakPrice ?? "unknown"}
            </dd>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <dt className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
              Peak market cap
            </dt>
            <dd className="mt-1 text-sm font-semibold text-emerald-300">
              {coin.peakMcap ?? "unknown"}
            </dd>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <dt className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
              Estimated losses
            </dt>
            <dd className="mt-1 text-sm font-semibold text-red-300">{coin.losses}</dd>
          </div>
        </dl>

        {(coin.peakPriceNote || coin.peakMcapNote) && (
          <p className="mt-3 text-xs text-zinc-500">
            {coin.peakPriceNote && <>Peak price note: {coin.peakPriceNote}. </>}
            {coin.peakMcapNote && <>Peak cap note: {coin.peakMcapNote}.</>}
          </p>
        )}

        {coin.causeDisputed && (
          <p className="mt-3 rounded-lg border border-yellow-400/30 bg-yellow-400/10 px-3 py-2 text-xs text-yellow-200">
            ⚠️ Disputed: {coin.causeDisputed}
          </p>
        )}

        <h3 className="mt-6 text-sm font-bold tracking-widest text-zinc-400 uppercase">
          What happened
        </h3>
        <p className="mt-2 leading-relaxed text-zinc-300">{coin.story}</p>

        <h3 className="mt-6 text-sm font-bold tracking-widest text-zinc-400 uppercase">
          The lesson
        </h3>
        <p className="mt-2 leading-relaxed text-amber-200/90">{coin.lesson}</p>

        <p className="mt-6 border-t border-white/10 pt-3 text-xs text-zinc-500">
          Sources: {coin.sources.join(" · ")}
        </p>
      </div>
    </div>
  );
}
