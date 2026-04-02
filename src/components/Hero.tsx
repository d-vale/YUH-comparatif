import Container from '@/components/ui/Container'
import ButtonCTA from '@/components/ui/ButtonCTA'

export default function Hero() {
  return (
    <section className="relative w-full bg-white lg:min-h-[700px] flex items-center">
      {/* Background blobs */}
      <div
        className="absolute inset-0 pointer-events-none h-[calc(100%+10px)]"
        aria-hidden="true"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 80%, black 72%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 80%, black 72%, transparent 100%)',
        }}
      >
        <svg
          viewBox="0 0 1514 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Grand dôme central */}
          <path d="M 350 850 Q 350 300 720 300 Q 1090 300 1090 850 Z" fill="#ede8f5" />
          {/* Arche intérieure (trou blanc) */}
          <path d="M 510 850 Q 510 500 720 500 Q 930 500 930 850 Z" fill="white" />
          {/* Petit dôme à droite du grand */}
          <path d="M 980 850 Q 980 520 1120 520 Q 1260 520 1260 850 Z" fill="#e3ddf0" />
          {/* Colonne/rectangle arrondi droite */}
          <rect x="1320" y="350" width="200" height="500" rx="100" fill="#e8e3f2" />
          {/* Demi-cercle bas gauche */}
          <ellipse cx="120" cy="850" rx="240" ry="180" fill="#d4cee8" opacity="0.55" />
        </svg>
      </div>

      <Container className="relative w-full pt-[90px] lg:pt-[110px] pb-12 lg:pb-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Left content */}
        <div className="flex flex-col gap-[30px] flex-1">
          <div className="flex flex-col gap-[13px]">
            <h1 className="text-h2 lg:text-h1 font-extrabold text-black">
              <span className="text-orange">Comparez</span>{' '}les néobanques :{' '}
              <br className="hidden lg:block" />
              découvrez l'expérience Yuh
            </h1>
            <p className="text-[16px] lg:text-[20px] font-regular text-black leading-[26px] lg:leading-[30px]">
              Choisir une banque en ligne peut être difficile. Comparez les néobanques suisses selon vos besoins et découvrez ce qui fait la différence avec Yuh.
            </p>
          </div>
          <ButtonCTA className="self-start">Créez votre compte gratuit</ButtonCTA>
        </div>

        {/* Right illustration */}
        <div className="hidden lg:block relative flex-shrink-0 w-[474px] h-[500px]">
          <img
            src="/yuhperson-dp-4b.svg"
            alt=""
            aria-hidden="true"
            className="absolute bottom-[-60px] right-[-70px] w-[450px] opacity-70"
          />
        </div>
      </Container>
    </section>
  )
}
