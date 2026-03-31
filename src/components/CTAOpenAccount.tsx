export default function CTAOpenAccount() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1412px] mx-auto px-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-h2 font-extrabold text-black mb-3">
            Ouvrez votre compte Yuh
          </h2>
          <p className="text-big-body font-regular text-grey">
            Tu as ton smartphone, une pièce d'identité, une facture de services et du réseau? C'est parti!
          </p>
        </div>

        {/* Card */}
        <div className="relative bg-white rounded-3xl border border-color-24 shadow-sm overflow-hidden flex items-center min-h-[520px]">
          {/* Left — illustration area */}
          <div className="relative flex-1 flex items-center justify-center p-12 min-h-[480px]">
            {/* Step numbers */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
              <span className="text-mini-text font-bold text-grey">01</span>
              <div className="flex flex-col gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                <div className="w-1.5 h-1.5 rounded-full bg-color-10" />
                <div className="w-1.5 h-1.5 rounded-full bg-color-10" />
              </div>
              <span className="text-mini-text font-bold text-grey mt-2">03</span>
            </div>

            {/* Purple blob background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg viewBox="0 0 600 480" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <ellipse cx="240" cy="280" rx="200" ry="160" fill="#c9caea" opacity="0.4" />
                <ellipse cx="320" cy="220" rx="160" ry="140" fill="#ebe1ee" opacity="0.5" />
              </svg>
            </div>

            {/* Phone with QR illustration */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative w-48 h-64 bg-black rounded-[28px] shadow-xl flex items-center justify-center">
                {/* Phone screen */}
                <div className="w-40 h-56 bg-white rounded-[20px] flex items-center justify-center">
                  {/* QR code placeholder */}
                  <div className="w-28 h-28 bg-black/90 rounded-lg flex items-center justify-center">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      {/* QR pattern simplified */}
                      <rect x="4" y="4" width="24" height="24" rx="2" fill="white"/>
                      <rect x="8" y="8" width="16" height="16" rx="1" fill="#151a21"/>
                      <rect x="52" y="4" width="24" height="24" rx="2" fill="white"/>
                      <rect x="56" y="8" width="16" height="16" rx="1" fill="#151a21"/>
                      <rect x="4" y="52" width="24" height="24" rx="2" fill="white"/>
                      <rect x="8" y="56" width="16" height="16" rx="1" fill="#151a21"/>
                      <rect x="34" y="4" width="6" height="6" fill="white"/>
                      <rect x="42" y="4" width="6" height="6" fill="white"/>
                      <rect x="34" y="12" width="6" height="6" fill="white"/>
                      <rect x="4" y="34" width="6" height="6" fill="white"/>
                      <rect x="12" y="34" width="6" height="6" fill="white"/>
                      <rect x="34" y="34" width="6" height="6" fill="white"/>
                      <rect x="42" y="42" width="6" height="6" fill="white"/>
                      <rect x="52" y="34" width="6" height="6" fill="white"/>
                      <rect x="60" y="42" width="6" height="6" fill="white"/>
                    </svg>
                  </div>
                  <p className="text-mini-text text-center text-grey mt-2 px-2">yuh</p>
                </div>
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-64 bg-color-24 self-center" />

          {/* Right — content */}
          <div className="flex-1 p-12 flex flex-col gap-6">
            {/* Step badge */}
            <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center self-end lg:self-start">
              <span className="text-white text-mini-text font-bold">1</span>
            </div>

            <div>
              <h3 className="text-h3 font-extrabold text-black">Obtenez</h3>
              <h3 className="text-h3 font-extrabold text-orange">l'application Yuh</h3>
            </div>
            <p className="text-big-body font-regular text-grey max-w-xs">
              Téléchargez l'app Yuh depuis l'App store, le Google Play Store ou la Huawei App Gallery.
            </p>
            <a
              href="#"
              className="inline-block self-start bg-orange text-white text-button-text font-bold px-8 py-3 rounded-full hover:bg-orange/90 transition-colors"
            >
              Créez votre compte gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
