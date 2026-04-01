import { useState } from 'react'

const questions = [
  'Comment activer ma carte de paiement Yuh?',
  'Quels frais s\'appliquent au change de devises?',
  'Est-ce que je peux effectuer un virement international sur Yuh?',
  'Comment mes transactions sur Internet sont-elles sécurisées?',
  'Quelle est la différence entre les frais de transaction et les frais de change?',
  'Pourquoi ne puis-je plus recharger mon compte Binance/Coinbase/Bitpanda avec la Yuh Mastercard\u00a0?',
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1412px] mx-auto px-10">
        <div className="max-w-[1174px] mx-auto">
          {/* Heading */}
          <h2 className="text-h2 font-extrabold text-black mb-12 max-w-[760px]">
            Vous hésitez encore? Dites-nous ce qui vous empêche de dormir la nuit!
          </h2>

          {/* Questions */}
          <div>
            {questions.map((q, i) => (
              <div key={i} className="border-t border-color-24">
                <button
                  className="w-full flex items-center justify-between py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-big-body-bold font-bold text-black pr-8">{q}</span>
                  <span className="peer flex-shrink-0 w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center transition-colors hover:bg-orange [&:hover_path]:stroke-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform"
                    >
                      <path d="M2 8h12" stroke="#fa5b35" strokeWidth="2" strokeLinecap="round" />
                      <path d="M8 2v12" stroke="#fa5b35" strokeWidth="2" strokeLinecap="round" className={`transition-opacity duration-200 ${open === i ? 'opacity-0' : 'opacity-100'}`} />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="pb-5 text-big-body font-regular text-grey pr-16">
                    Réponse à venir — consultez le centre d'aide Yuh pour plus d'informations.
                  </div>
                )}
              </div>
            ))}

            {/* Footer link */}
            <div className="border-t border-color-24 flex items-center justify-between py-5">
              <a href="#" className="text-big-body-bold font-extrabold text-orange hover:underline">
                D'autres questions? Clique ici pour en savoir plus
              </a>
              <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center flex-shrink-0 hover:bg-orange-dark hover:scale-105 transition-all cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
