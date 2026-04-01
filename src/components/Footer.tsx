import { socialIcons, footerLinks } from '@/data/footer'

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-6 pb-6">
      <div className="bg-black text-white rounded-[32px] lg:rounded-[48px] px-6 pt-8 pb-6 lg:px-16 lg:pt-14 lg:pb-8">

        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-8 lg:mb-16">

          {/* Left — CTA + social */}
          <div className="flex-shrink-0 max-w-full lg:max-w-[360px]">
            <p className="text-mini-text font-regular text-grey mb-3">Démarrer</p>
            <h3 className="text-[22px] leading-[30px] lg:text-h3 font-extrabold text-white mb-6 lg:mb-8 leading-tight">
              Télécharge maintenant l'app Yuh et inscris-toi gratuitement!
            </h3>
            <a
              href="#"
              className="inline-block border border-orange text-orange text-button-text font-bold px-7 py-2.5 rounded-full hover:bg-orange hover:text-white transition-colors mb-8 lg:mb-10"
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
            <div className="flex flex-wrap gap-6 lg:gap-8 lg:justify-end pt-2">
              {footerLinks.map(({ heading, links }) => (
                <div key={heading} className="min-w-[140px] lg:min-w-[160px]">
                  <p className="text-mini-text font-regular text-grey mb-4 lg:mb-6">{heading}</p>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-big-body font-extrabold text-white hover:text-orange transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Logo */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/footer/logo_footer.png"
                alt="Yuh"
                className="w-full max-w-[300px] lg:max-w-[550px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-5 pb-2">
          <nav className="flex flex-wrap gap-3 lg:gap-6">
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
