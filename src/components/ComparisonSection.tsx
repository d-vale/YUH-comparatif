import { useState } from 'react'

type Row = { feature: string; yuh: string; bank: string; yuhHighlight?: boolean }
type Category = { title: string; rows: Row[] }

const categories: Category[] = [
  {
    title: 'Compte et paiements',
    rows: [
      { feature: 'Compte gratuit', yuh: 'Gratuit', bank: '3–5 CHF/mois (36–60 CHF/an)', yuhHighlight: true },
      { feature: 'Carte débit', yuh: 'Gratuit', bank: '24–48 CHF/an (sauf ZKB : gratuit)', yuhHighlight: true },
      { feature: 'IBAN suisse', yuh: 'Oui', bank: 'Oui' },
      { feature: 'TWINT', yuh: 'Oui', bank: 'Oui' },
      { feature: 'QR-facture / eBill', yuh: 'Oui', bank: 'Oui' },
    ],
  },
  {
    title: 'Expérience et accessibilité',
    rows: [
      { feature: 'Ouverture 100% mobile en minutes', yuh: '~10 min, compte actif le jour même', bank: 'Souvent en agence, jours/semaines', yuhHighlight: true },
      { feature: 'App (note iOS)', yuh: '4,6', bank: '2,9–4,6 (variable)', yuhHighlight: true },
      { feature: 'Compte jeune', yuh: 'Oui', bank: 'Oui' },
    ],
  },
  {
    title: 'Devises et paiements internationaux',
    rows: [
      { feature: 'Multi-devises natif', yuh: '13 devises, 0,95% FX', bank: 'EUR possible, FX ~1,5–2%', yuhHighlight: true },
      { feature: 'Frais de change carte', yuh: '0,95%', bank: '1,25–1,75%', yuhHighlight: true },
      { feature: 'Retrait ATM Suisse', yuh: '1 gratuit/sem, puis 1,90 CHF', bank: 'Gratuit réseau propre, 2 CHF ailleurs' },
      { feature: 'Retrait ATM étranger', yuh: '4,90 CHF + 0,95% FX', bank: '4,50–5 CHF + FX' },
    ],
  },
  {
    title: 'Investissement et épargne',
    rows: [
      { feature: 'Investissement intégré', yuh: 'Actions, ETF, crypto intégré', bank: 'Via e-banking séparé', yuhHighlight: true },
      { feature: 'Frais de trading actions', yuh: '0,50% (min. 1 CHF)', bank: 'Min. 5–50 CHF/trade', yuhHighlight: true },
      { feature: 'Frais de garde', yuh: 'Gratuit', bank: '0,25–0,35%/an non plafonné', yuhHighlight: true },
      { feature: "Plans d'épargne ETF", yuh: 'Gratuit', bank: 'Rarement disponible', yuhHighlight: true },
      { feature: 'Épargne automatique', yuh: 'Savings Projects + Autosaving', bank: 'Pas de round-ups ni gamification', yuhHighlight: true },
    ],
  },
  {
    title: 'Crypto & produits financiers',
    rows: [
      { feature: 'Crypto natif', yuh: '~38 cryptos, 1%', bank: 'Rare', yuhHighlight: true },
      { feature: 'Pilier 3a intégré', yuh: '0,50%/an all-in', bank: 'Disponible, ~1,25%+ tout compris', yuhHighlight: true },
    ],
  },
  {
    title: 'Fonctionnalités bancaires classiques',
    rows: [
      { feature: 'Dépôt cash', yuh: 'Pas disponible', bank: 'En agence ou ATM' },
      { feature: 'Agences physiques', yuh: 'Pas disponible', bank: 'Réseau étendu' },
      { feature: 'Crédit / hypothèque', yuh: 'Pas disponible', bank: 'Oui' },
    ],
  },
  {
    title: 'Sécurité et avantages',
    rows: [
      { feature: 'Protection des dépôts', yuh: '100k CHF (esisuisse)', bank: '100k CHF' },
      { feature: 'Pocket Insurance', yuh: 'Gratuit', bank: 'Pas disponible', yuhHighlight: true },
      { feature: 'Fidélité', yuh: 'Swissqoins', bank: 'Points carte de crédit classiques', yuhHighlight: true },
    ],
  },
]

const tabs = ['Banque traditionnelle', 'Neon', 'Zak', 'Revolut']

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1412px] mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-10 max-w-[892px] mx-auto">
          <h2 className="text-h2 font-extrabold text-black mb-4">
            <span className="text-orange">Comparez</span>{' '}
            les néobanques : découvrez l'expérience Yuh
          </h2>
          <p className="text-big-body font-regular text-grey">
            Choisir une banque en ligne peut être difficile. Comparez les néobanques suisses selon vos besoins et découvrez ce qui fait la différence avec Yuh.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-pale-violet-1 rounded-full p-1">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-full text-body-bold font-bold transition-colors ${
                  activeTab === i
                    ? 'bg-black text-white'
                    : 'text-grey hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl border border-color-24 overflow-hidden shadow-sm">
          {categories.map((cat, ci) => (
            <div key={cat.title} className={ci > 0 ? 'border-t border-color-24' : ''}>
              {/* Category header */}
              <div className="px-6 py-4 bg-pale-violet-1">
                <h3 className="text-big-body-bold font-bold text-black">{cat.title}</h3>
              </div>

              {/* Column headers — every category */}
              <div className="flex px-6 py-3 border-b border-color-24">
                <div className="flex-1" />
                <div className="w-[280px] text-center text-body-bold font-bold text-black">Yuh</div>
                <div className="w-[280px] text-center text-body-bold font-bold text-black">
                  {tabs[activeTab]}
                </div>
              </div>

              {/* Rows */}
              {cat.rows.map((row, ri) => (
                <div
                  key={row.feature}
                  className={`flex items-center px-6 py-3 ${ri > 0 ? 'border-t border-color-24' : ''}`}
                >
                  <div className="flex-1 text-body-bold font-regular text-black">{row.feature}</div>
                  <div className={`w-[280px] text-center text-body-bold font-bold ${row.yuhHighlight ? 'text-orange' : 'text-black'}`}>
                    {row.yuh}
                  </div>
                  <div className="w-[280px] text-center text-body-bold font-regular text-grey">
                    {row.bank}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-end mt-4 gap-2">
          <button className="w-12 h-12 rounded-full border border-color-24 flex items-center justify-center hover:bg-pale-violet-1 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#151a21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="w-12 h-12 rounded-full border border-color-24 flex items-center justify-center hover:bg-pale-violet-1 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="#151a21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
