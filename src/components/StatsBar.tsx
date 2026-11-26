import { biggestGrave, COINS, shortestLife, totalLossesUsdB } from "../data/coins";

export default function StatsBar() {
  const total = totalLossesUsdB();
  const biggest = biggestGrave();
  const shortest = shortestLife();

  const stats = [
    { label: "Graves tended", value: String(COINS.length), sub: "dead coins, verified" },
    {
      label: "Total value buried",
      value: `~$${total.toFixed(1)}B`,
      sub: "approx. — sum of numeric loss figures",
    },
    {
      label: "Biggest grave",
      value: biggest.name,
      sub: `${biggest.losses} lost`,
    },
    {
      label: "Shortest life",
      value: shortest.name,
      sub: shortest.lifespanNote ?? "—",
    },
  ];

  return (
    <section className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 px-4 md:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center"
        >
          <div className="text-2xl font-bold text-amber-300 md:text-3xl">{s.value}</div>
          <div className="mt-1 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            {s.label}
          </div>
          <div className="mt-0.5 text-xs text-zinc-500">{s.sub}</div>
        </div>
      ))}
    </section>
  );
}
