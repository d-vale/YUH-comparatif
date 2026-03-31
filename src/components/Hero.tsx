export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-pale-violet-1 min-h-[600px] flex items-center">
      {/* Background blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1514 929"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <ellipse cx="757" cy="400" rx="900" ry="600" fill="#f3ecf9" opacity="0.7" />
          <ellipse cx="400" cy="200" rx="600" ry="400" fill="#f7f1fb" opacity="0.5" />
        </svg>
      </div>

      <div className="relative max-w-[1412px] mx-auto px-10 w-full py-20 flex items-center justify-between gap-8">
        {/* Left content */}
        <div className="flex-1 max-w-[640px]">
          <h1 className="text-h1 font-extrabold text-black leading-tight mb-6">
            <span className="text-orange">Comparez</span>{' '}
            les néobanques :{' '}
            découvrez l'expérience Yuh
          </h1>
          <p className="text-big-body font-regular text-black mb-8 max-w-[520px]">
            Choisir une banque en ligne peut être difficile.&nbsp; Comparez les néobanques suisses selon vos besoins et découvrez ce qui fait la différence avec Yuh.
          </p>
          <a
            href="#"
            className="inline-block bg-orange text-white text-button-text font-bold px-8 py-3 rounded-full hover:bg-orange/90 transition-colors"
          >
            Créez votre compte gratuit
          </a>
        </div>

        {/* Right illustration */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-[474px] h-[474px]">
          <img
            src="/hero-illustration.svg"
            alt="Yuh app illustration"
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />
          {/* Fallback: decorative placeholder */}
          <div className="w-full h-full rounded-3xl bg-pale-violet-2 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 rounded-2xl bg-white/60 mx-auto mb-4 flex items-center justify-center shadow-sm">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect x="12" y="4" width="40" height="56" rx="6" fill="#151a21" />
                  <rect x="16" y="10" width="32" height="40" rx="2" fill="white" />
                  <circle cx="32" cy="54" r="3" fill="white" />
                </svg>
              </div>
              <p className="text-grey text-mini-text">Application Yuh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
