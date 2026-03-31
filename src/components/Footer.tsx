const socialIcons = [
  { label: 'X (Twitter)', path: 'M4 4l8 8M12 4l-8 8' },
  { label: 'Facebook', path: 'M9 8h4M9 12h4M7 16c0-4 2-8 5-8s5 4 5 8' },
  { label: 'LinkedIn', path: 'M4 8h2v8H4zM5 6a1 1 0 100-2 1 1 0 000 2zM8 8h2v1.5c.5-1 1.5-1.5 2.5-1.5 2 0 3 1 3 3V16h-2v-4c0-1.5-.5-2-1.5-2S10 11 10 12.5V16H8z' },
  { label: 'YouTube', path: 'M2 8s0-4 6-4h4s6 0 6 4v4s0 4-6 4H8s-6 0-6-4zm6 0l4 2-4 2z' },
  { label: 'Instagram', path: 'M4 4h12v12H4zM8 10a2 2 0 104 0 2 2 0 00-4 0zm5-3h.5' },
  { label: 'TikTok', path: 'M9 4v8a3 3 0 103-3V4' },
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
    <footer className="w-full bg-black text-white">
      <div className="max-w-[1412px] mx-auto px-10 pt-14 pb-6">
        {/* Top grid */}
        <div className="flex gap-16 mb-16">
          {/* Left column */}
          <div className="flex-shrink-0 max-w-[360px]">
            <p className="text-mini-text font-regular text-grey mb-3">Démarrer</p>
            <h3 className="text-h3 font-extrabold text-white mb-6 leading-tight">
              Télécharge maintenant l'app Yuh et inscris-toi gratuitement!
            </h3>
            <a
              href="#"
              className="inline-block border-2 border-orange text-orange text-button-text font-bold px-7 py-2.5 rounded-full hover:bg-orange hover:text-white transition-colors mb-8"
            >
              Téléchargez l'app
            </a>

            <p className="text-mini-text font-regular text-grey mb-4">Suis-nous</p>
            <div className="flex gap-3">
              {socialIcons.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d={path} stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right columns */}
          <div className="flex-1 flex gap-8 justify-end">
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
        </div>

        {/* Logos */}
        <div className="flex items-center justify-center gap-8 py-10 border-t border-white/10 border-b border-b-white/10">
          {/* Yuh wordmark */}
          <svg width="160" height="70" viewBox="0 0 160 70" fill="none">
            <text x="0" y="62" fontFamily="Proxima Soft, sans-serif" fontWeight="800" fontSize="72" fill="white">yuh</text>
          </svg>
          {/* Divider */}
          <div className="w-px h-24 bg-white/30" />
          {/* BSC Young Boys badge */}
          <div className="w-24 h-24 rounded-full border-2 border-white/40 flex items-center justify-center">
            <div className="text-center">
              <div className="text-mini-text font-bold text-white">BSC</div>
              <div className="text-mini-text font-bold text-white">YOUNG</div>
              <div className="text-mini-text font-bold text-white">BOYS</div>
              <div className="text-mini-text font-regular text-white/60">1898</div>
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
        <p className="text-mini-text font-regular text-grey/70 pt-3 pb-2 max-w-5xl">
          Les informations figurant sur ce site web ne sont pas destinées à être diffusées ou utilisées par toute personne se trouvant dans des pays ou juridictions où une telle diffusion ou utilisation serait contraire aux lois ou réglementations locales.
        </p>
      </div>
    </footer>
  )
}
