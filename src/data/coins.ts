// Dead Coin Graveyard — verified dataset.
// Every figure comes from ../dead-coins-research.md (verified 27 Nov 2026
// against Wikipedia, US DOJ/SEC, CoinDesk, CoinGecko, Chainalysis, The Block).
// Unknown values are undefined — the UI must render "unknown", never a guess.

export type Cause =
  | "Ponzi / exit scam"
  | "Rug pull"
  | "Depeg / bank run"
  | "Bankruptcy / fraud"
  | "Bankruptcy"
  | "Regulatory shutdown"
  | "Code bug";

export interface DeadCoin {
  id: string;
  name: string;
  symbol: string;
  born: string;
  died: string;
  bornYear: number;
  diedYear: number;
  lifespanNote?: string;
  cause: Cause;
  causeDisputed?: string;
  peakPrice?: string;
  peakPriceNote?: string;
  peakMcap?: string;
  peakMcapNote?: string;
  losses: string;
  lossesUsdB?: number; // numeric billions, for the stats total only
  story: string;
  epitaph: string;
  lesson: string;
  sources: string[];
}

export const COINS: DeadCoin[] = [
  {
    id: "bitconnect",
    name: "BitConnect",
    symbol: "BCC",
    born: "2016",
    died: "Jan 2018",
    bornYear: 2016,
    diedYear: 2018,
    cause: "Ponzi / exit scam",
    peakPrice: "$463",
    peakPriceNote: "Dec 2017; the class-action complaint says nearly $525",
    peakMcap: "~$2.6B",
    losses: "~$2B",
    lossesUsdB: 2,
    story:
      "BitConnect promised 1% daily returns from a “trading bot” that never existed. Texas and North Carolina issued cease-and-desist orders, the platform shut down on 16–17 January 2018, and BCC crashed 92% in hours.",
    epitaph:
      "The coin that promised 1% a day, every day, forever.",
    lesson:
      "If it promises guaranteed daily returns, it is not an investment — it is a Ponzi.",
    sources: ["Wikipedia", "US DOJ / SEC case", "Class-action complaint"],
  },
  {
    id: "onecoin",
    name: "OneCoin",
    symbol: "ONE",
    born: "2014",
    died: "Oct 2017",
    bornYear: 2014,
    diedYear: 2017,
    cause: "Ponzi / exit scam",
    peakMcap: "No real market",
    peakMcapNote: "OneCoin never traded on an open market; its “price” was set internally",
    losses: ">$4B",
    lossesUsdB: 4,
    story:
      "OneCoin sold “packages” of a coin that had no blockchain at all. Founder Ruja Ignatova — the “Cryptoqueen” — vanished on 25 October 2017. The US DOJ counts more than $4B stolen from up to 3.5 million victims.",
    epitaph:
      "The FBI offers a $5M reward for its founder — for a coin that never had a blockchain.",
    lesson: "A coin you cannot verify on a public blockchain is not a coin.",
    sources: ["US DOJ", "FBI Ten Most Wanted"],
  },
  {
    id: "luna",
    name: "Terra Luna",
    symbol: "LUNA",
    born: "2019",
    died: "May 2022",
    bornYear: 2019,
    diedYear: 2022,
    cause: "Depeg / bank run",
    peakPrice: "~$119",
    peakPriceNote: "April 2022",
    peakMcap: "~$41B",
    peakMcapNote: "7 May 2022; some snapshots that morning show ~$25B",
    losses: "~$40B (ecosystem)",
    lossesUsdB: 40,
    story:
      "When the UST stablecoin lost its peg, the mint-and-burn defence printed LUNA until it was worthless. The chain halted, and about $40B of ecosystem value was destroyed in under a week.",
    epitaph: "Supply went from ~350 million to ~6.5 trillion tokens in five days.",
    lesson:
      "An algorithmic peg held up by printing the sister token is a death spiral waiting for a trigger.",
    sources: ["CoinPaprika", "CoinDesk", "RiskHub"],
  },
  {
    id: "ust",
    name: "TerraUSD",
    symbol: "UST",
    born: "2020",
    died: "May 2022",
    bornYear: 2020,
    diedYear: 2022,
    cause: "Depeg / bank run",
    peakPrice: "$1.00",
    peakPriceNote: "The peg — $18.7B in circulation, 3rd-largest stablecoin at the time",
    peakMcap: "$18.7B supply",
    losses: "Part of ~$40B",
    story:
      "An algorithmic stablecoin with no hard backing, paying 19.5% APY on Anchor Protocol. It depegged from $1 to about $0.10 in four days in May 2022, taking Luna down with it.",
    epitaph: "A coin designed never to move — it fell to ten cents in four days.",
    lesson: "A 19.5% “safe” yield on a stablecoin is the risk, not the reward.",
    sources: ["CoinDesk", "Terra post-mortems"],
  },
  {
    id: "ftt",
    name: "FTX Token",
    symbol: "FTT",
    born: "Jul 2019",
    died: "Nov 2022",
    bornYear: 2019,
    diedYear: 2022,
    cause: "Bankruptcy / fraud",
    peakPrice: "$84.18",
    peakPriceNote: "9 Sep 2021 (CoinGecko)",
    peakMcap: "$9.7B",
    peakMcapNote: "10 Sep 2021 (CoinGecko)",
    losses: "$2.6B token value",
    lossesUsdB: 2.6,
    story:
      "CoinDesk revealed that Alameda Research's balance sheet was mostly FTT. Binance dumped its FTT, withdrawals halted on 8 November, and FTX filed Chapter 11 on 11 November 2022. SBF was sentenced to 25 years and ordered to repay $11B; FTX owed customers about $8.9B.",
    epitaph: "From $24 to $2.10 in a week — killed by one news article.",
    lesson:
      "An exchange token is only as honest as the balance sheet behind it.",
    sources: ["CoinGecko", "CoinDesk", "Bankruptcy filings", "Investopedia"],
  },
  {
    id: "squid",
    name: "Squid Game Token",
    symbol: "SQUID",
    born: "Oct 2021",
    died: "Nov 2021",
    bornYear: 2021,
    diedYear: 2021,
    lifespanNote: "Lived 12 days",
    cause: "Rug pull",
    peakPrice: "$2,861.80",
    peakPriceNote: "1 Nov 2021 (CoinMarketCap)",
    peakMcap: ">$6B",
    peakMcapNote: "Phantom — holders could not sell, so the market cap was inflated",
    losses: "$3.38M",
    lossesUsdB: 0.00338,
    story:
      "Launched 20 October 2021 on BNB Smart Chain, pumped 310,000% in a week, then the developers drained the liquidity pool on 1 November. The price fell from $2,861 to $0.0008 in five minutes — and the contract never let holders sell in the first place.",
    epitaph: "Up 310,000% in a week, then $2,861 → $0.0008 in five minutes.",
    lesson: "If you cannot sell, you do not own an investment — you own a trap.",
    sources: ["Wikipedia", "CoinMarketCap", "AlixPartners"],
  },
  {
    id: "titan",
    name: "Iron Titanium",
    symbol: "TITAN",
    born: "Mar 2021",
    died: "Jun 2021",
    bornYear: 2021,
    diedYear: 2021,
    lifespanNote: "Lived ~3 months",
    cause: "Depeg / bank run",
    causeDisputed:
      "The team insists there was no rug pull or exploit — a design-level bank run.",
    peakPrice: "~$65",
    peakPriceNote: "16 Jun 2021 (CoinDesk)",
    peakMcap: "~$2B TVL",
    losses: "~$2B TVL evaporated",
    lossesUsdB: 2,
    story:
      "Whales sold, the IRON stablecoin slipped its peg, and redemptions minted endless TITAN. The team called it “the world's first large-scale crypto bank run”. TITAN supply inflated from ~1B to ~35 trillion tokens. Billionaire Mark Cuban was a liquidity provider.",
    epitaph: "Mark Cuban was a liquidity provider. His verdict: “I got hit like everyone else.”",
    lesson: "Partial collateral + a redemption loop is a bank run in code form.",
    sources: ["CoinDesk", "Iron Finance post-mortem"],
  },
  {
    id: "cel",
    name: "Celsius Network",
    symbol: "CEL",
    born: "2018",
    died: "Jul 2022",
    bornYear: 2018,
    diedYear: 2022,
    cause: "Bankruptcy / fraud",
    peakPrice: "$8.05",
    peakPriceNote: "3–4 Jun 2021",
    // Peak market cap: unknown — no credible figure found. Do not invent one.
    peakMcap: undefined,
    losses: "$4.7B frozen",
    lossesUsdB: 4.7,
    story:
      "Celsius froze withdrawals on 12 June 2022 and filed Chapter 11 on 13 July, with $4.7B of customer funds inaccessible and a $1.19B hole in its balance sheet. Founder Alex Mashinsky manipulated CEL's price with customer funds, pleaded guilty in December 2024, and was sentenced to 12 years in May 2025.",
    epitaph: "Its slogan was “Banks are not your friends” — then it froze $4.7B of customer money.",
    lesson: "“Not your keys, not your coins” is not a slogan. It is the whole lesson.",
    sources: ["US DOJ", "Bankruptcy filings", "CoinPaprika"],
  },
  {
    id: "vgx",
    name: "Voyager Token",
    symbol: "VGX",
    born: "2017",
    died: "Jul 2022",
    bornYear: 2017,
    diedYear: 2022,
    cause: "Bankruptcy",
    peakPrice: "$12.47",
    peakPriceNote: "5 Jan 2018",
    // Peak market cap: unknown — no credible figure found. Do not invent one.
    peakMcap: undefined,
    losses: "$650M+ (3AC default)",
    lossesUsdB: 0.65,
    story:
      "Voyager lent $650M+ unsecured to hedge fund Three Arrows Capital — 15,250 BTC plus $350M USDC. When 3AC defaulted in the Terra contagion, Voyager suspended withdrawals on 1 July 2022 and filed Chapter 11 days later, with ~$1.3B in customer crypto and 100,000+ creditors.",
    epitaph: "A “safe” brokerage that handed $650M of customer money to one hedge fund — unsecured.",
    lesson: "If a platform will not say where your money goes, assume the worst.",
    sources: ["CoinDesk", "Blockworks", "Bankruptcy filings"],
  },
  {
    id: "safemoon",
    name: "SafeMoon",
    symbol: "SFM",
    born: "Mar 2021",
    died: "Dec 2023",
    bornYear: 2021,
    diedYear: 2023,
    cause: "Regulatory shutdown",
    peakPrice: "$0.00723",
    peakPriceNote: "V2, 4 Jan 2022",
    peakMcap: "$5.7B",
    peakMcapNote: "SEC complaint (Apr 2021); DOJ/IRS cite $8B+, Wikipedia $17B — sources disagree",
    losses: ">$200M misappropriated",
    lossesUsdB: 0.2,
    story:
      "Executives lied about locked liquidity and withdrew more than $200M for personal use — McLarens, a custom Porsche, luxury homes. The SEC and DOJ filed fraud charges on 1 November 2023; SafeMoon filed Chapter 7 bankruptcy that December. A separate March 2023 hack drained $9M from the liquidity pool.",
    epitaph: "Promised to take holders “safely to the moon” — the founders spent it on McLarens instead.",
    lesson: "“Locked liquidity” is a claim. Verify it on-chain or do not believe it.",
    sources: ["SEC Litigation Release No. 25888", "US DOJ / IRS", "Wikipedia"],
  },
  {
    id: "ankh",
    name: "AnubisDAO",
    symbol: "ANKH",
    born: "Oct 2021",
    died: "Oct 2021",
    bornYear: 2021,
    diedYear: 2021,
    lifespanNote: "Lived ~20 hours",
    cause: "Rug pull",
    causeDisputed:
      "Chainalysis/DefiLlama classify it as a rug pull; the developer claims he was phished. No official finding.",
    peakPrice: undefined,
    peakPriceNote: "Never reached a real market — the token sale died mid-sale",
    peakMcap: undefined,
    losses: "~$60M",
    lossesUsdB: 0.06,
    story:
      "AnubisDAO raised $60M in ETH with no website, no whitepaper and anonymous developers — just a dog logo. Twenty hours into the 24-hour sale, the funds vanished from the liquidity pool. It was named after the Egyptian god of death.",
    epitaph: "Raised $60M with no website, no whitepaper and anonymous devs — just a dog logo. Dead in 20 hours.",
    lesson: "Anonymous team + no website + no whitepaper = you are the exit liquidity.",
    sources: ["Decrypt", "The Block", "Chainalysis"],
  },
  {
    id: "yam",
    name: "Yam Finance",
    symbol: "YAM",
    born: "Aug 2020",
    died: "Aug 2020",
    bornYear: 2020,
    diedYear: 2020,
    lifespanNote: "Lived 2 days",
    cause: "Code bug",
    peakPrice: "~$167",
    peakPriceNote: "12 Aug 2020",
    peakMcap: "~$60M",
    peakMcapNote: "CoinGecko snapshot at collapse; one source mentions ~$525M",
    losses: "~$60M value destroyed",
    lossesUsdB: 0.06,
    story:
      "A rebase bug minted excess YAM into the treasury reserve, permanently breaking governance. Not a hack, not a rug pull: one line of code. About $60M of YAM's value was destroyed in 35 minutes — though staked collateral itself was not lost. Co-founder Brock Elmore: “I'm sorry everyone. I've failed.”",
    epitaph: "One missing `.div(BASE)` killed a $60M protocol in 35 minutes.",
    lesson: "Unaudited code + $60M in two days = the audit is you.",
    sources: ["CoinDesk", "CoinTelegraph", "BeInCrypto"],
  },
];

export const CAUSES: Cause[] = [
  "Ponzi / exit scam",
  "Rug pull",
  "Depeg / bank run",
  "Bankruptcy / fraud",
  "Bankruptcy",
  "Regulatory shutdown",
  "Code bug",
];

/** Total estimated losses in billions, from numeric figures only. */
export function totalLossesUsdB(): number {
  return COINS.reduce((sum, c) => sum + (c.lossesUsdB ?? 0), 0);
}

/** Shortest-lived grave (by lifespan note), for the stats bar. */
export function shortestLife(): DeadCoin {
  return COINS.find((c) => c.id === "ankh")!;
}

/** Biggest single grave by numeric losses. */
export function biggestGrave(): DeadCoin {
  return COINS.reduce((a, b) => (b.lossesUsdB ?? 0) > (a.lossesUsdB ?? 0) ? b : a);
}
