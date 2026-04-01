export type SocialIcon = {
  label: string;
  src: string;
};

export type FooterLinkGroup = {
  heading: string;
  links: string[];
};

export const socialIcons: SocialIcon[] = [
  { label: 'X (Twitter)', src: '/footer/X-icon.svg' },
  { label: 'Facebook',    src: '/footer/facebook-icon.svg' },
  { label: 'LinkedIn',    src: '/footer/linkedin-icon.svg' },
  { label: 'YouTube',     src: '/footer/youtube-icon.svg' },
  { label: 'Instagram',   src: '/footer/instagram-icon.svg' },
  { label: 'TikTok',      src: '/footer/tiktok-icon.svg' },
];

export const footerLinks: FooterLinkGroup[] = [
  {
    heading: "L'app Yuh",
    links: ['Comment ça marche?', 'Payer', 'Épargner', 'Investir', 'Pilier 3a', 'Parrainer un ami'],
  },
  {
    heading: 'Découvrir',
    links: ['Media', 'YuhLearn', 'Swissqoin', 'Shop'],
  },
  {
    heading: 'Entreprise',
    links: ['Aide', 'Contacte-nous', 'Jobs'],
  },
];
