export type Step = {
  num: number;
  topLabel: string;
  bottomLabel: string;
  markerFraction: number;
  lineFillFraction: number;
  title1: string;
  title2: string;
  desc: string;
  image: string;
};

export const STEPS: Step[] = [
  {
    num: 1,
    topLabel: '01',
    bottomLabel: '03',
    markerFraction: 0,
    lineFillFraction: 0,
    title1: 'Obtenez',
    title2: "l'application Yuh",
    desc: "Téléchargez l'app Yuh depuis l'App store, le Google Play Store ou la Huawei App Gallery.",
    image: '/illustration_yuh_app.png',
  },
  {
    num: 2,
    topLabel: '02',
    bottomLabel: '03',
    markerFraction: 0.475,
    lineFillFraction: 0.475,
    title1: 'Créez',
    title2: 'votre compte',
    desc: "Saisis tes données personnelles et vérifie ton identité dans l'app.",
    image: '/illustration_yuh_app2.png',
  },
  {
    num: 3,
    topLabel: '03',
    bottomLabel: '03',
    markerFraction: 1,
    lineFillFraction: 1,
    title1: 'Approvisionnez',
    title2: 'votre compte',
    desc: "Effectue ton premier paiement (si tu fais un versement de 500 CHF à l'ouverture du compte, tu recevras 250 Swissqoins).",
    image: '/illustration_yuh_app3.png',
  },
];
