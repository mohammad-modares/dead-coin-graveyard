import { CAUSES, type Cause } from "../data/coins";

interface Props {
  query: string;
  onQuery: (q: string) => void;
  cause: Cause | "All";
  onCause: (c: Cause | "All") => void;
}

const CAUSE_STYLE: Record<Cause, string> = {
  "Ponzi / exit scam": "border-red-400/40 text-red-300",
  "Rug pull": "border-orange-400/40 text-orange-300",
  "Depeg / bank run": "border-sky-400/40 text-sky-300",
  "Bankruptcy / fraud": "border-purple-400/40 text-purple-300",
  Bankruptcy: "border-zinc-400/40 text-zinc-300",
  "Regulatory shutdown": "border-yellow-400/40 text-yellow-300",
  "Code bug": "border-emerald-400/40 text-emerald-300",
};

export default function Filters({ query, onQuery, cause, onCause }: Props) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <input
        type="search"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        placeholder="Search a coin… try “luna” or “SQUID”"
        aria-label="Search dead coins"
        className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-500 focus:border-amber-300/60 focus:outline-none"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        {(["All", ...CAUSES] as const).map((c) => {
          const active = cause === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onCause(c)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                active
                  ? "border-amber-300 bg-amber-300/15 text-amber-200"
                  : c === "All"
                    ? "border-white/15 text-zinc-300 hover:border-white/30"
                    : `${CAUSE_STYLE[c as Cause]} bg-white/[0.02] hover:brightness-125`
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}
