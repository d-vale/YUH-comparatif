import { useState } from "react";

type Row = {
  feature: string;
  yuh: string;
  bank: string;
  yuhHighlight?: boolean;
  bankHighlight?: boolean;
};
type Category = { title: string; rows: Row[] };

const categories: Category[] = [
  {
    title: "Compte et paiements",
    rows: [
      {
        feature: "Compte gratuit",
        yuh: "Gratuit",
        bank: "3–5 CHF/mois (36–60 CHF/an)",
        yuhHighlight: true,
      },
      {
        feature: "Carte débit",
        yuh: "Gratuit",
        bank: "24–48 CHF/an (sauf ZKB : gratuit)",
        yuhHighlight: true,
      },
      { feature: "IBAN suisse", yuh: "Oui", bank: "Oui", bankHighlight: true },
      { feature: "TWINT", yuh: "Oui", bank: "Oui", bankHighlight: true },
      { feature: "QR-facture / eBill", yuh: "Oui", bank: "Oui", bankHighlight: true },
    ],
  },
  {
    title: "Expérience et accessibilité",
    rows: [
      {
        feature: "Ouverture 100% mobile en minutes",
        yuh: "~10 min, compte actif le jour même",
        bank: "Souvent en agence, jours/semaines",
        yuhHighlight: true,
      },
      {
        feature: "App (note iOS)",
        yuh: "4,6",
        bank: "2,9–4,6 (variable)",
        yuhHighlight: true,
      },
      { feature: "Compte jeune", yuh: "Oui", bank: "Oui", bankHighlight: true },
    ],
  },
  {
    title: "Devises et paiements internationaux",
    rows: [
      {
        feature: "Multi-devises natif",
        yuh: "13 devises, 0,95% FX",
        bank: "EUR possible, FX ~1,5–2%",
        yuhHighlight: true,
      },
      {
        feature: "Frais de change carte",
        yuh: "0,95%",
        bank: "1,25–1,75%",
        yuhHighlight: true,
      },
      {
        feature: "Retrait ATM Suisse",
        yuh: "1 gratuit/sem, puis 1,90 CHF",
        bank: "Gratuit réseau propre, 2 CHF ailleurs",
      },
      {
        feature: "Retrait ATM étranger",
        yuh: "4,90 CHF + 0,95% FX",
        bank: "4,50–5 CHF + FX",
      },
    ],
  },
  {
    title: "Investissement et épargne",
    rows: [
      {
        feature: "Investissement intégré",
        yuh: "Actions, ETF, crypto intégré",
        bank: "Via e-banking séparé",
        yuhHighlight: true,
      },
      {
        feature: "Frais de trading actions",
        yuh: "0,50% (min. 1 CHF)",
        bank: "Min. 5–50 CHF/trade",
        yuhHighlight: true,
      },
      {
        feature: "Frais de garde",
        yuh: "Gratuit",
        bank: "0,25–0,35%/an non plafonné",
        yuhHighlight: true,
      },
      {
        feature: "Plans d'épargne ETF",
        yuh: "Gratuit",
        bank: "Rarement disponible",
        yuhHighlight: true,
      },
      {
        feature: "Épargne automatique",
        yuh: "Savings Projects + Autosaving",
        bank: "Pas de round-ups ni gamification",
        yuhHighlight: true,
      },
    ],
  },
  {
    title: "Crypto & produits financiers",
    rows: [
      {
        feature: "Crypto natif",
        yuh: "~38 cryptos, 1%",
        bank: "Rare",
        yuhHighlight: true,
      },
      {
        feature: "Pilier 3a intégré",
        yuh: "0,50%/an all-in",
        bank: "Disponible, ~1,25%+ tout compris",
        yuhHighlight: true,
      },
    ],
  },
  {
    title: "Fonctionnalités bancaires classiques",
    rows: [
      {
        feature: "Dépôt cash",
        yuh: "Pas disponible",
        bank: "En agence ou ATM",
      },
      {
        feature: "Agences physiques",
        yuh: "Pas disponible",
        bank: "Réseau étendu",
      },
      { feature: "Crédit / hypothèque", yuh: "Pas disponible", bank: "Oui" },
    ],
  },
  {
    title: "Sécurité et avantages",
    rows: [
      {
        feature: "Protection des dépôts",
        yuh: "100k CHF (esisuisse)",
        bank: "100k CHF",
        bankHighlight: true,
      },
      {
        feature: "Pocket Insurance",
        yuh: "Gratuit",
        bank: "Pas disponible",
        yuhHighlight: true,
      },
      {
        feature: "Fidélité",
        yuh: "Swissqoins",
        bank: "Points carte de crédit classiques",
        yuhHighlight: true,
      },
    ],
  },
];

const tabs = ["Banque traditionnelle", "Neon", "N26", "Revolut", "Zak"];

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-transparent py-16">
      <div className="max-w-[1412px] mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-[892px] mx-auto">
          <h2 className="text-h2 font-extrabold text-black mb-4">
            Comparez les néobanques : <br></br>découvrez l'expérience Yuh
          </h2>
          <p className="text-big-body font-regular text-grey">
            Choisir une banque en ligne peut être difficile. Comparez les
            néobanques suisses selon vos besoins et découvrez ce qui fait la
            différence avec Yuh.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-[21px] bg-white/70 backdrop-blur-[20px] rounded-full px-[18px] py-[6px] border border-white shadow-[0px_2px_40px_0px_rgba(0,0,0,0.08)]">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-[10px] py-[10px] text-body-bold font-extrabold transition-colors whitespace-nowrap ${
                  activeTab === i ? "text-orange" : "text-grey hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="space-y-10">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-3xl overflow-hidden shadow-sm bg-pale-violet-1"
            >
              {/* Category header */}
              <div className="px-6 py-6 bg-pale-violet-1">
                <h3 className="text-h3 font-extrabold text-black">
                  {cat.title}
                </h3>
              </div>

              {/* Column headers — every category */}
              <div className="flex px-6 py-3 border-color-24 bg-pale-violet-1">
                <div className="flex-1" />
                <div className="w-[280px] text-center text-big-body-bold font-bold text-black">
                  Yuh
                </div>
                <div className="w-[280px] text-center text-big-body-bold font-bold text-black">
                  {tabs[activeTab]}
                </div>
              </div>

              {/* Rows */}
              {cat.rows.map((row, ri) => (
                <div
                  key={row.feature}
                  className={`flex items-center px-6 py-3 rounded-lg mx-2 my-[2px] ${ri % 2 === 0 ? "bg-pale-violet-2" : "bg-pale-violet-1"}`}
                >
                  <div className="flex-1 text-body-bold font-regular text-black">
                    {row.feature}
                  </div>
                  <div
                    className={`w-[280px] text-center text-body-bold font-bold ${row.yuhHighlight ? "text-validations" : "text-black"}`}
                  >
                    {row.yuh}
                  </div>
                  <div className={`w-[280px] text-center text-body-bold font-regular ${row.yuhHighlight ? "text-grey" : row.bankHighlight ? "text-validations" : "text-black"}`}>
                    {row.bank}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between items-center mt-9">
          {activeTab > 0 ? (
            <button
              onClick={() => setActiveTab(activeTab - 1)}
              className="flex items-center gap-[9px]"
            >
              <div className="w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#fa5b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-big-body font-regular text-black">{tabs[activeTab - 1]}</span>
            </button>
          ) : <div />}

          {activeTab < tabs.length - 1 ? (
            <button
              onClick={() => setActiveTab(activeTab + 1)}
              className="flex items-center gap-[9px]"
            >
              <span className="text-big-body font-regular text-black">{tabs[activeTab + 1]}</span>
              <div className="w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="#fa5b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          ) : <div />}
        </div>
      </div>
    </section>
  );
}
