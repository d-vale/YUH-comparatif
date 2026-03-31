export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1412px] mx-auto px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="24" fontFamily="Proxima Soft, sans-serif" fontWeight="800" fontSize="28" fill="#151a21">yuh</text>
          </svg>
        </a>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="flex items-center gap-1 text-body-bold font-bold text-black hover:text-orange transition-colors">
            App
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
          <button className="hidden lg:flex items-center gap-1 text-body-bold font-bold text-black">
            <span className="text-lg">🇫🇷</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
