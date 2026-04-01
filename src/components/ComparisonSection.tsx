import { useState } from "react";
import { allBankData, tabs } from "@/data/comparison";
import Container from "@/components/ui/Container";

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = allBankData[activeTab];

  return (
    <section className="w-full bg-transparent py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-10 max-w-[892px] mx-auto">
          <h2 className="text-h2 font-extrabold text-black mb-4">
            Comparez les néobanques : <br></br>découvrez l'expérience Yuh
          </h2>
          <p className="text-big-body font-regular text-grey">
            Choisir une banque en ligne peut être difficile. Comparez les
            néobanques suisses selon vos besoins et découvrez ce qui fait la
            différence avec Yuh.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-[21px] bg-white/70 backdrop-blur-[20px] rounded-full px-[18px] py-[6px] border border-white shadow-[0px_2px_40px_0px_rgba(0,0,0,0.08)]">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-[10px] py-[10px] text-body-bold font-extrabold transition-colors whitespace-nowrap ${
                  activeTab === i ? "text-orange" : "text-grey hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div className="space-y-10">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-3xl overflow-hidden shadow-sm bg-pale-violet-1"
            >
              {/* Category header */}
              <div className="px-6 py-6 bg-pale-violet-1">
                <h3 className="text-h3 font-extrabold text-black">
                  {cat.title}
                </h3>
              </div>

              {/* Column headers — every category */}
              <div className="flex px-6 py-3 border-color-24 bg-pale-violet-1">
                <div className="flex-1" />
                <div className="w-[280px] text-center text-big-body-bold font-bold text-black">
                  Yuh
                </div>
                <div className="w-[280px] text-center text-big-body-bold font-bold text-black">
                  {tabs[activeTab]}
                </div>
              </div>

              {/* Rows */}
              {cat.rows.map((row, ri) => (
                <div
                  key={row.feature}
                  className={`flex items-center px-6 py-3 rounded-lg mx-2 my-[2px] ${ri % 2 === 0 ? "bg-pale-violet-2" : "bg-pale-violet-1"}`}
                >
                  <div className="flex-1 text-body-bold font-regular text-black">
                    {row.feature}
                  </div>
                  <div
                    className={`w-[280px] text-center text-body-bold font-bold ${row.yuhHighlight ? "text-validations" : "text-black"}`}
                  >
                    {row.yuh}
                  </div>
                  <div className={`w-[280px] text-center text-body-bold font-regular ${row.yuhHighlight ? "text-grey" : row.bankHighlight ? "text-validations" : "text-black"}`}>
                    {row.bank}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between items-center mt-9">
          {activeTab > 0 ? (
            <button
              onClick={() => setActiveTab(activeTab - 1)}
              className="flex items-center gap-[9px]"
            >
              <div className="w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#fa5b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-big-body font-regular text-black">{tabs[activeTab - 1]}</span>
            </button>
          ) : <div />}

          {activeTab < tabs.length - 1 ? (
            <button
              onClick={() => setActiveTab(activeTab + 1)}
              className="flex items-center gap-[9px]"
            >
              <span className="text-big-body font-regular text-black">{tabs[activeTab + 1]}</span>
              <div className="w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="#fa5b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          ) : <div />}
        </div>
      </Container>
    </section>
  );
}
