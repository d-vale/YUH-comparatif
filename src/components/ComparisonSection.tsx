import { useState } from "react";
import { allBankData, tabs } from "@/data/comparison";
import Container from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = allBankData[activeTab];

  return (
    <section className="relative z-10 overflow-hidden w-full bg-transparent pt-32 pb-10 lg:pt-44 lg:pb-16">
      <img
        src="/background-comparateur.png"
        alt=""
        aria-hidden="true"
        className="absolute top-12 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none -z-10 opacity-40"
      />
      <img
        src="/background-mid-comparateur.png"
        alt=""
        aria-hidden="true"
        className="absolute top-[1400px] lg:top-[600px] left-1/2 -translate-x-1/2 w-full pointer-events-none select-none -z-10"
      />
      <Container>
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10 max-w-[892px] mx-auto">
          <h2 className="text-[28px] leading-[36px] lg:text-h2 font-extrabold text-black mb-4">
            Comparez les néobanques : <br className="hidden lg:block" />découvrez l'expérience Yuh
          </h2>
          <p className="text-body-bold lg:text-big-body font-regular text-grey">
            Choisir une banque en ligne peut être difficile. Comparez les
            néobanques suisses selon vos besoins et découvrez ce qui fait la
            différence avec Yuh.
          </p>
        </div>

        {/* Filter tabs — scrollable on mobile */}
        <div className="flex justify-center mb-6 lg:mb-8">
          <div className="overflow-x-auto max-w-full py-4 px-6">
            <div
              role="tablist"
              className="flex gap-[21px] bg-white/70 backdrop-blur-[5px] rounded-full px-[18px] py-[6px] border border-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.08)] w-max"
            >
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === i}
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
        </div>

        {/* Comparison table */}
        <div className="space-y-10">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-3xl overflow-hidden shadow-sm bg-pale-violet-1"
            >
              {/* Category header */}
              <div className="px-4 lg:px-6 py-6 bg-pale-violet-1">
                <h3 className="text-[22px] leading-[30px] lg:text-h3 font-extrabold text-black">
                  {cat.title}
                </h3>
              </div>

              {/* Column headers — desktop only */}
              <div className="hidden lg:flex px-6 py-3 border-color-24 bg-pale-violet-1">
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
                  className={`px-4 lg:px-6 py-3 rounded-lg mx-2 my-[2px] ${ri % 2 === 0 ? "bg-pale-violet-2" : "bg-pale-violet-1"}`}
                >
                  {/* Desktop layout */}
                  <div className="hidden lg:flex items-center">
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

                  {/* Mobile card layout */}
                  <div className="lg:hidden flex flex-col gap-2">
                    <span className="text-body-bold font-bold text-black">{row.feature}</span>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <span className="text-mini-text font-regular text-grey block mb-0.5">Yuh</span>
                        <span className={`text-body-bold font-bold ${row.yuhHighlight ? "text-validations" : "text-black"}`}>
                          {row.yuh}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span className="text-mini-text font-regular text-grey block mb-0.5">{tabs[activeTab]}</span>
                        <span className={`text-body-bold font-regular ${row.yuhHighlight ? "text-grey" : row.bankHighlight ? "text-validations" : "text-black"}`}>
                          {row.bank}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="relative z-10 flex justify-between items-center mt-9">
          {activeTab > 0 ? (
            <button
              onClick={() => setActiveTab(activeTab - 1)}
              className="flex items-center gap-[9px]"
            >
              <div className="w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center text-orange">
                <ChevronLeft size={24} />
              </div>
              <span className="hidden sm:block text-big-body font-regular text-black">{tabs[activeTab - 1]}</span>
            </button>
          ) : <div />}

          {activeTab < tabs.length - 1 ? (
            <button
              onClick={() => setActiveTab(activeTab + 1)}
              className="flex items-center gap-[9px]"
            >
              <span className="hidden sm:block text-big-body font-regular text-black">{tabs[activeTab + 1]}</span>
              <div className="w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center text-orange">
                <ChevronRight size={24} />
              </div>
            </button>
          ) : <div />}
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
