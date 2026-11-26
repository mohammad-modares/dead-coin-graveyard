import type { DeadCoin } from "../data/coins";

interface Props {
  coin: DeadCoin;
  onOpen: (coin: DeadCoin) => void;
}

export default function Tombstone({ coin, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={() => onOpen(coin)}
      className="tombstone group relative flex flex-col rounded-t-[7rem] rounded-b-xl border border-white/10 bg-gradient-to-b from-[#2a2a33] to-[#17171d] px-5 pt-10 pb-5 text-left"
    >
      {/* candle flame */}
      <span
        aria-hidden
        className="flame absolute top-3 left-1/2 h-3 w-2 -translate-x-1/2 rounded-full bg-amber-400 shadow-[0_0_18px_6px_rgba(245,185,66,0.45)]"
      />
      <span className="text-center text-[11px] font-semibold tracking-[0.3em] text-zinc-500 uppercase">
        {coin.born} — {coin.died}
      </span>
      <span className="serif mt-2 text-center text-2xl font-bold text-zinc-100">
        {coin.name}
      </span>
      <span className="mt-0.5 text-center text-sm font-semibold text-amber-300/90">
        ${coin.symbol}
      </span>
      <span className="mt-3 inline-block self-center rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1 text-[11px] font-semibold text-red-300">
        {coin.cause}
      </span>
      {coin.lifespanNote && (
        <span className="mt-2 text-center text-xs text-zinc-500">{coin.lifespanNote}</span>
      )}
      <span className="serif mt-4 text-center text-sm text-zinc-400 italic">
        “{coin.epitaph}”
      </span>
      <span className="mt-4 border-t border-white/10 pt-3 text-center text-xs text-zinc-500">
        Peak {coin.peakPrice ? coin.peakPrice : "—"} · Lost {coin.losses}
      </span>
      <span className="mt-2 text-center text-xs font-semibold text-amber-300/0 transition group-hover:text-amber-300/90">
        Read the full story →
      </span>
    </button>
  );
}
