import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STEPS } from '@/data/ctaSteps';
import Container from '@/components/ui/Container';
import ButtonCTA from '@/components/ui/ButtonCTA';

gsap.registerPlugin(ScrollTrigger);

export default function CTAOpenAccount() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stepIdx, setStepIdx] = useState(0);
  const stepRef = useRef(0);
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) < 50) return;
    if (deltaX < 0 && stepRef.current < STEPS.length - 1) {
      stepRef.current += 1;
      setStepIdx(stepRef.current);
    } else if (deltaX > 0 && stepRef.current > 0) {
      stepRef.current -= 1;
      setStepIdx(stepRef.current);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    // Pin only on desktop (lg = 1024px+)
    mm.add('(min-width: 1024px)', () => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=200%',
        pin: true,
        pinSpacing: true,
        snap: {
          snapTo: [0, 0.5, 1],
          duration: { min: 0.2, max: 0.4 },
          delay: 0.05,
          ease: 'power1.inOut',
        },
        onUpdate: (self) => {
          const newStep = Math.round(self.progress * 2);
          if (newStep !== stepRef.current) {
            stepRef.current = newStep;
            setStepIdx(newStep);
          }
        },
      });
      return () => { st.kill(); };
    });

    return () => { mm.revert(); };
  }, []);

  const step = STEPS[stepIdx];

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 lg:py-16">
      <Container>

        {/* Title */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-[28px] leading-[36px] lg:text-h2 font-extrabold text-black mb-3">
            Ouvrez votre compte Yuh
          </h2>
          <p className="text-body-bold lg:text-big-body font-regular text-grey">
            Tu as ton smartphone, une pièce d'identité, une facture de services et du réseau? C'est parti!
          </p>
        </div>

        {/* Card */}
        <div className="relative bg-white rounded-3xl border border-color-24 shadow-[0_24px_70px_-18px_rgba(21,26,33,0.28)] overflow-hidden flex flex-col lg:flex-row lg:items-center lg:min-h-[520px]">

          {/* Left — illustration + stepper (desktop) */}
          <div
            className="relative flex-1 flex items-center justify-center p-8 lg:p-12 lg:min-h-[480px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >

            {/* Stepper gauche — desktop only */}
            <div className="hidden lg:block absolute left-[46px] top-[76px] bottom-[76px]">
              <span className="absolute top-0 left-0 text-body-bold font-bold text-black leading-[24px]">
                {step.topLabel}
              </span>

              <div className="absolute top-[28px] bottom-[28px] left-0 w-[2px]">
                <div className="absolute inset-0 bg-color-24" />
                <div
                  className="absolute top-0 left-0 w-full bg-black transition-[height] duration-700 ease-in-out"
                  style={{ height: `${step.lineFillFraction * 100}%` }}
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 transition-[top] duration-700 ease-in-out"
                  style={{ top: `calc(${step.markerFraction * 100}% - 8px)` }}
                >
                  <div className="relative flex items-center justify-center w-8 h-4">
                    <div className="absolute w-2 h-2 rounded-[4px] bg-black" />
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                      <path d="M3.33778 0.726074L8.72622 3.83719L3.33778 0.726074ZM2.22222 7.55541H8.44444H2.22222ZM2.89333 14.5039L8.28178 11.3927L2.89333 14.5039ZM28.6622 15.2736L23.2738 12.1625L28.6622 15.2736ZM29.7778 8.4443H23.5556H29.7778ZM29.1067 1.49585L23.7182 4.60696L29.1067 1.49585Z" fill="#151A21"/>
                      <path d="M3.33778 0.726074L8.72622 3.83719M2.22222 7.55541H8.44444M2.89333 14.5039L8.28178 11.3927M28.6622 15.2736L23.2738 12.1625M29.7778 8.4443H23.5556M29.1067 1.49585L23.7182 4.60696" stroke="#151A21" strokeWidth="0.888889" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <span className="absolute bottom-0 left-0 text-body-bold font-bold text-black leading-[24px]">
                {step.bottomLabel}
              </span>
            </div>

            {/* Illustrations crossfade */}
            <div className="relative z-10 w-[280px] h-[280px] lg:w-[420px] lg:h-[420px]">
              {STEPS.map((s, i) => (
                <img
                  key={s.num}
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                    stepIdx === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Mobile step dots */}
            <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { stepRef.current = i; setStepIdx(i); }}
                  className={`w-2 h-2 rounded-full transition-colors ${stepIdx === i ? 'bg-black' : 'bg-color-24'}`}
                  aria-label={`Étape ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:block flex-shrink-0 w-px h-64 bg-color-24 self-center" />

          {/* Right — content */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col gap-6 border-t border-color-24 lg:border-t-0">
            <div className="w-10 h-10 rounded-[20px] bg-orange flex items-center justify-center self-start">
              <span className="text-white text-[24px] font-extrabold leading-[32px]">
                {step.num}
              </span>
            </div>

            <div>
              <h3 className="text-[22px] leading-[30px] lg:text-h3 font-extrabold text-black">{step.title1}</h3>
              <h3 className="text-[22px] leading-[30px] lg:text-h3 font-extrabold text-orange">{step.title2}</h3>
            </div>

            <p className="text-body-bold lg:text-big-body font-regular text-grey max-w-xs">
              {step.desc}
            </p>

            <ButtonCTA className="self-start">Créez votre compte gratuit</ButtonCTA>
          </div>
        </div>

      </Container>
    </section>
  );
}
