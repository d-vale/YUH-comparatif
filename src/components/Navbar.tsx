export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 pt-3">
      <div className="max-w-[1412px] mx-auto bg-white/40 backdrop-blur-[20px] border border-white rounded-[100px] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.08)] px-14 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src="/YUH_logo_main_RVB.svg" alt="Yuh" className="h-10 w-auto" />
        </a>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="flex items-center gap-1 text-body-bold font-bold text-black hover:text-orange transition-colors">
            App
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="#fa5b35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#" className="text-body-bold font-bold text-black hover:text-orange transition-colors">Tarifs</a>
          <a href="#" className="text-body-bold font-bold text-black hover:text-orange transition-colors">YuhLearn</a>
          <a href="#" className="text-body-bold font-bold text-black hover:text-orange transition-colors">À propos de Yuh</a>
          <a href="#" className="text-body-bold font-bold text-black hover:text-orange transition-colors">Aide</a>
          <a href="#" className="text-body-bold font-bold text-orange">Comparateur</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Language */}
          <button className="hidden lg:flex items-center gap-2 bg-[rgba(21,26,33,0.05)] rounded-[100px] px-3 py-2">
            <img
              src="https://flagcdn.com/w40/fr.png"
              alt="FR"
              className="w-[22px] h-[22px] rounded-full object-cover"
            />
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 5l4 4 4-4" stroke="#fa5b35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* CTA */}
          <a
            href="#"
            className="bg-orange text-white text-button-text font-bold px-6 py-2 rounded-full hover:bg-orange/90 transition-colors"
          >
            Démarrer
          </a>
        </div>
      </div>
    </header>
  )
}
