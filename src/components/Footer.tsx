const socialIcons = [
  { label: 'X (Twitter)', src: '/footer/X-icon.svg' },
  { label: 'Facebook',    src: '/footer/facebook-icon.svg' },
  { label: 'LinkedIn',    src: '/footer/linkedin-icon.svg' },
  { label: 'YouTube',     src: '/footer/youtube-icon.svg' },
  { label: 'Instagram',   src: '/footer/instagram-icon.svg' },
  { label: 'TikTok',      src: '/footer/tiktok-icon.svg' },
]

const footerLinks = [
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
]

export default function Footer() {
  return (
    <footer className="w-full px-6 pb-6">
      <div className="bg-black text-white rounded-[48px] px-16 pt-14 pb-8">

        {/* Top section */}
        <div className="flex gap-16 mb-16">

          {/* Left — CTA + social */}
          <div className="flex-shrink-0 max-w-[360px]">
            <p className="text-mini-text font-regular text-grey mb-3">Démarrer</p>
            <h3 className="text-h3 font-extrabold text-white mb-8 leading-tight">
              Télécharge maintenant l'app Yuh et inscris-toi gratuitement!
            </h3>
            <a
              href="#"
              className="inline-block border border-orange text-orange text-button-text font-bold px-7 py-2.5 rounded-full hover:bg-orange hover:text-white transition-colors mb-10"
            >
              Téléchargez l'app
            </a>

            <p className="text-mini-text font-regular text-grey mb-4">Suis-nous</p>
            <div className="flex gap-3">
              {socialIcons.map(({ label, src }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 transition-colors"
                >
                  <img src={src} alt="" aria-hidden="true" width="20" height="20" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right — nav columns + logo */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex gap-8 justify-end pt-2">
              {footerLinks.map(({ heading, links }) => (
                <div key={heading} className="min-w-[160px]">
                  <p className="text-mini-text font-regular text-grey mb-6">{heading}</p>
                  <ul className="flex flex-col gap-5">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-big-body font-bold text-white hover:text-orange transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Logo aligné sous les colonnes nav */}
            <div className="flex justify-end">
              <img
                src="/footer/logo_footer.png"
                alt="Yuh"
                className="w-[550px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-5 pb-2">
          <nav className="flex gap-6">
            {['Mentions légales', 'Documents légaux', 'Paramètres des cookies'].map((item) => (
              <a key={item} href="#" className="text-mini-text font-regular text-grey hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <p className="text-mini-text font-regular text-grey">© Yuh 2026. Tous droits réservés</p>
        </div>

        {/* Disclaimer */}
        <p className="text-mini-text font-regular text-grey/60 border-t border-white/10 pt-3">
          Les informations figurant sur ce site web ne sont pas destinées à être diffusées ou utilisées par toute personne se trouvant dans des pays ou juridictions où une telle diffusion ou utilisation serait contraire aux lois ou réglementations locales.
        </p>

      </div>
    </footer>
  )
}
