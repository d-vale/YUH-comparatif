export type Row = {
  feature: string;
  yuh: string;
  bank: string;
  yuhHighlight?: boolean;
  bankHighlight?: boolean;
};

export type Category = { title: string; rows: Row[] };

// Tab 0 — Banque traditionnelle
export const dataTraditionnelle: Category[] = [
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

// Tab 1 — Neon
export const dataNeon: Category[] = [
  {
    title: "Compte et paiements",
    rows: [
      { feature: "Compte gratuit", yuh: "Gratuit", bank: "Gratuit (neon free), plans payants", yuhHighlight: true },
      { feature: "Carte débit", yuh: "Gratuit", bank: "Livraison 20 CHF (neon free)", yuhHighlight: true },
      { feature: "Carte virtuelle instantanée", yuh: "Oui", bank: "Pas disponible", yuhHighlight: true },
      { feature: "IBAN suisse", yuh: "Oui", bank: "Oui", bankHighlight: true },
      { feature: "TWINT", yuh: "Oui", bank: "TWINT Prepaid uniquement", yuhHighlight: true },
      { feature: "QR-facture / eBill", yuh: "Oui", bank: "Oui", bankHighlight: true },
    ],
  },
  {
    title: "Expérience et accessibilité",
    rows: [
      { feature: "Compatibilité Apple/Samsung/Google Pay", yuh: "Oui", bank: "Oui", bankHighlight: true },
      { feature: "App (note iOS / Android)", yuh: "4,6 / 4,4", bank: "4,5 / 4,2", yuhHighlight: true },
      { feature: "Compte jeune", yuh: "Dès 14 ans", bank: "Dès 15 ans", yuhHighlight: true },
    ],
  },
  {
    title: "Devises et paiements internationaux",
    rows: [
      { feature: "Multi-devises natif", yuh: "13 devises, 0,95% FX", bank: "CHF uniquement", yuhHighlight: true },
      { feature: "Frais de change", yuh: "0,95%", bank: "~0,85% effectif total", bankHighlight: true },
      { feature: "Retrait ATM Suisse", yuh: "1 gratuit/sem, puis 1,90 CHF", bank: "2,50 CHF (neon free)", yuhHighlight: true },
      { feature: "Retrait ATM étranger", yuh: "4,90 CHF + 0,95% FX", bank: "1,5% + 0,35% FX" },
    ],
  },
  {
    title: "Investissement et épargne",
    rows: [
      { feature: "Investissement intégré", yuh: "Actions, ETF, crypto intégré", bank: "Actions, ETF, crypto-ETP", yuhHighlight: true },
      { feature: "Frais de trading actions", yuh: "0,50% (min. 1 CHF)", bank: "0,50% CH / 1% international", yuhHighlight: true },
      { feature: "Plans d'épargne ETF", yuh: "0% sur ETF éligibles", bank: "0% sur ETF partenaires" },
      { feature: "Épargne automatique", yuh: "Savings Projects + Autosaving", bank: "Pas de round-ups ni gamification", yuhHighlight: true },
      { feature: "Export eTax", yuh: "25 CHF", bank: "Gratuit", bankHighlight: true },
    ],
  },
  {
    title: "Crypto & produits financiers",
    rows: [
      { feature: "Crypto natif", yuh: "~38 cryptos", bank: "Crypto-ETP uniquement", yuhHighlight: true },
      { feature: "Pilier 3a intégré", yuh: "0,50%/an all-in", bank: "0,45%/an, jusqu'à 5 comptes" },
    ],
  },
  {
    title: "Sécurité et avantages",
    rows: [
      { feature: "Protection des dépôts", yuh: "100k CHF (esisuisse)", bank: "100k CHF (Hypi Lenzburg)" },
      { feature: "Pocket Insurance gratuite", yuh: "Oui, jusqu'à 1'000 CHF", bank: "Pas disponible", yuhHighlight: true },
      { feature: "Fidélité", yuh: "Swissqoins", bank: "Pas disponible", yuhHighlight: true },
    ],
  },
];

// Tab 2 — N26
export const dataN26: Category[] = [
  {
    title: "Compte et paiements",
    rows: [
      { feature: "Compte gratuit", yuh: "Gratuit", bank: "Plan standard gratuit" },
      { feature: "Carte débit", yuh: "Gratuit", bank: "10 €", yuhHighlight: true },
      { feature: "Carte virtuelle instantanée", yuh: "Oui", bank: "Oui" },
      { feature: "IBAN suisse", yuh: "Oui", bank: "IBAN Allemand (DE)", yuhHighlight: true },
      { feature: "TWINT", yuh: "Oui", bank: "Pas disponible", yuhHighlight: true },
      { feature: "QR-facture / eBill", yuh: "Oui", bank: "Pas disponible", yuhHighlight: true },
    ],
  },
  {
    title: "Expérience et accessibilité",
    rows: [
      { feature: "Compatibilité Apple/Samsung/Google Pay", yuh: "Oui", bank: "Oui" },
      { feature: "App (note iOS / Android)", yuh: "4,6 / 4,4", bank: "4,7 / 4,0" },
      { feature: "Compte jeune", yuh: "Dès 14 ans", bank: "18 ans minimum", yuhHighlight: true },
    ],
  },
  {
    title: "Devises et paiements internationaux",
    rows: [
      { feature: "Multi-devises natif", yuh: "13 devises, 0,95% FX", bank: "EUR uniquement", yuhHighlight: true },
      { feature: "Frais de change", yuh: "0,95%", bank: "0% paiements carte (taux MC)", bankHighlight: true },
      { feature: "Retrait ATM Suisse", yuh: "1 gratuit/sem, puis 1,90 CHF", bank: "1,7% (conversion EUR→CHF)", yuhHighlight: true },
      { feature: "Retrait ATM étranger", yuh: "4,90 CHF + 0,95% FX", bank: "2 gratuits/mois, puis 2 €" },
    ],
  },
  {
    title: "Investissement et épargne",
    rows: [
      { feature: "Investissement intégré", yuh: "Actions, ETF, crypto intégré", bank: "Non disponible en Suisse", yuhHighlight: true },
      { feature: "Épargne automatique", yuh: "Savings Projects + Autosaving", bank: "Limité (pas d'investissement en CH)", yuhHighlight: true },
    ],
  },
  {
    title: "Crypto & produits financiers",
    rows: [
      { feature: "Crypto natif", yuh: "~38 cryptos", bank: "Disponibilité incertaine en Suisse", yuhHighlight: true },
      { feature: "Pilier 3a intégré", yuh: "0,50%/an all-in", bank: "Non disponible", yuhHighlight: true },
    ],
  },
  {
    title: "Sécurité et avantages",
    rows: [
      { feature: "Protection des dépôts", yuh: "100k CHF (esisuisse)", bank: "Allemande (BaFin, 100k €)", yuhHighlight: true },
      { feature: "Pocket Insurance gratuite", yuh: "Oui, jusqu'à 1'000 CHF", bank: "Pas disponible en Suisse", yuhHighlight: true },
      { feature: "Fidélité", yuh: "Swissqoins", bank: "Pas disponible", yuhHighlight: true },
    ],
  },
];

// Tab 3 — Revolut
export const dataRevolut: Category[] = [
  {
    title: "Compte et paiements",
    rows: [
      { feature: "Compte gratuit", yuh: "Gratuit", bank: "Plan standard gratuit" },
      { feature: "Carte débit", yuh: "Gratuit", bank: "Livraison 5,99 CHF", yuhHighlight: true },
      { feature: "Carte virtuelle instantanée", yuh: "Oui", bank: "Oui" },
      { feature: "IBAN suisse", yuh: "Oui", bank: "Oui" },
      { feature: "TWINT", yuh: "Oui", bank: "Pas disponible", yuhHighlight: true },
      { feature: "QR-facture / eBill", yuh: "Oui", bank: "Pas disponible", yuhHighlight: true },
    ],
  },
  {
    title: "Expérience et accessibilité",
    rows: [
      { feature: "Compatibilité Apple/Samsung/Google Pay", yuh: "Oui", bank: "Oui" },
      { feature: "App (note iOS / Android)", yuh: "4,6 / 4,4", bank: "4,9 / 4,7", bankHighlight: true },
      { feature: "Compte jeune", yuh: "Dès 14 ans", bank: "Dès 6 ans (sous-compte parental)", bankHighlight: true },
    ],
  },
  {
    title: "Devises et paiements internationaux",
    rows: [
      { feature: "Multi-devises natif", yuh: "13 devises, 0,95% FX", bank: "36+ devises", bankHighlight: true },
      { feature: "Frais de change", yuh: "0,95%", bank: "0% semaine, 1% le week-end", bankHighlight: true },
      { feature: "Retrait ATM Suisse", yuh: "1 gratuit/sem, puis 1,90 CHF", bank: "200 CHF/mois gratuit, puis 2%" },
      { feature: "Retrait ATM étranger", yuh: "4,90 CHF + 0,95% FX", bank: "200 CHF/mois gratuit, puis 2%" },
    ],
  },
  {
    title: "Investissement et épargne",
    rows: [
      { feature: "Investissement intégré", yuh: "Actions, ETF, crypto intégré", bank: "2 000+ actions/ETF" },
      { feature: "Frais de trading actions", yuh: "0,50% (min. 1 CHF)", bank: "0,25% après quota gratuit", bankHighlight: true },
      { feature: "Plans d'épargne ETF", yuh: "0% sur ETF éligibles", bank: "Plans ETF sans commission" },
    ],
  },
  {
    title: "Crypto & produits financiers",
    rows: [
      { feature: "Crypto natif", yuh: "~38 cryptos", bank: "228+ cryptos", bankHighlight: true },
      { feature: "Pilier 3a intégré", yuh: "0,50%/an all-in", bank: "Pas disponible", yuhHighlight: true },
    ],
  },
  {
    title: "Sécurité et avantages",
    rows: [
      { feature: "Protection des dépôts", yuh: "100k CHF (esisuisse)", bank: "Protection lituanienne €100k", yuhHighlight: true },
      { feature: "Pocket Insurance gratuite", yuh: "Oui, jusqu'à 1'000 CHF", bank: "Limité en Suisse", yuhHighlight: true },
      { feature: "Fidélité", yuh: "Swissqoins", bank: "RevPoints (limité plan gratuit)" },
    ],
  },
];

// Tab 4 — Zak
export const dataZak: Category[] = [
  {
    title: "Compte et paiements",
    rows: [
      { feature: "Compte gratuit", yuh: "Gratuit", bank: "Zak Free gratuit" },
      { feature: "Carte débit", yuh: "Gratuit", bank: "Gratuit" },
      { feature: "Carte virtuelle instantanée", yuh: "Oui", bank: "Pas disponible", yuhHighlight: true },
      { feature: "IBAN suisse", yuh: "Oui", bank: "Oui" },
      { feature: "TWINT", yuh: "Oui", bank: "Oui" },
      { feature: "QR-facture / eBill", yuh: "Oui", bank: "Oui" },
    ],
  },
  {
    title: "Expérience et accessibilité",
    rows: [
      { feature: "Compatibilité Apple/Samsung/Google Pay", yuh: "Oui", bank: "Oui" },
      { feature: "App (note iOS / Android)", yuh: "4,6 / 4,4", bank: "4,7 / 4,5", bankHighlight: true },
      { feature: "Compte jeune", yuh: "Dès 14 ans", bank: "Dès 12 ans", bankHighlight: true },
    ],
  },
  {
    title: "Devises et paiements internationaux",
    rows: [
      { feature: "Multi-devises natif", yuh: "13 devises, 0,95% FX", bank: "CHF uniquement", yuhHighlight: true },
      { feature: "Frais de change", yuh: "0,95%", bank: "~2–2,5%", yuhHighlight: true },
      { feature: "Retrait ATM Suisse", yuh: "1 gratuit/sem, puis 1,90 CHF", bank: "Gratuit Bank Cler, 2 CHF ailleurs" },
      { feature: "Retrait ATM étranger", yuh: "4,90 CHF + 0,95% FX", bank: "5 CHF (Free), gratuit (Plus)" },
    ],
  },
  {
    title: "Investissement et épargne",
    rows: [
      { feature: "Investissement intégré", yuh: "Actions, ETF, crypto intégré", bank: "Actions, ETF et fonds", yuhHighlight: true },
      { feature: "Frais de trading actions", yuh: "0,50% (min. 1 CHF)", bank: "0,25% (min. 5 CHF), +0,25%/an garde" },
      { feature: "Plans d'épargne ETF", yuh: "0% sur ETF éligibles", bank: "Pas disponible", yuhHighlight: true },
      { feature: "Épargne automatique", yuh: "Savings Projects + Autosaving", bank: "Épargne intégrée", yuhHighlight: true },
      { feature: "Export eTax", yuh: "25 CHF", bank: "75 CHF (Zak Invest)", yuhHighlight: true },
    ],
  },
  {
    title: "Crypto & produits financiers",
    rows: [
      { feature: "Crypto natif", yuh: "~38 cryptos", bank: "Très peu de cryptos", yuhHighlight: true },
      { feature: "Pilier 3a intégré", yuh: "0,50%/an all-in", bank: "~1,25%/an en fonds", yuhHighlight: true },
    ],
  },
  {
    title: "Fonctionnalités bancaires classiques",
    rows: [
      { feature: "Dépôt cash", yuh: "Pas disponible", bank: "Gratuit ATM Bank Cler", bankHighlight: true },
      { feature: "Agences physiques", yuh: "Pas disponible", bank: "27 agences", bankHighlight: true },
    ],
  },
  {
    title: "Sécurité et avantages",
    rows: [
      { feature: "Protection des dépôts", yuh: "100k CHF (esisuisse)", bank: "100k CHF (Bank Cler)" },
      { feature: "Pocket Insurance gratuite", yuh: "Oui, jusqu'à 1'000 CHF", bank: "Partenariat Baloise (pas gratuit)", yuhHighlight: true },
      { feature: "Fidélité", yuh: "Swissqoins", bank: "Cashback Shopmate" },
    ],
  },
];

export const allBankData: Category[][] = [
  dataTraditionnelle,
  dataNeon,
  dataN26,
  dataRevolut,
  dataZak,
];

export const tabs = ["Banque traditionnelle", "Neon", "N26", "Revolut", "Zak"];
