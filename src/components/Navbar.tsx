import { useState } from 'react'
import ButtonCTA from '@/components/ui/ButtonCTA'
import { ChevronDown } from '@/components/ui/icons'

type NavLink = { label: string; href: string; hasDropdown?: boolean; isActive?: boolean }

const NAV_LINKS: NavLink[] = [
  { label: 'App', href: '#', hasDropdown: true },
  { label: 'Tarifs', href: '#' },
  { label: 'YuhLearn', href: '#' },
  { label: 'À propos de Yuh', href: '#' },
  { label: 'Aide', href: '#' },
  { label: 'Comparateur', href: '#', isActive: true },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 lg:px-10 pt-3">
        <div className="max-w-[1350px] mx-auto bg-white/40 backdrop-blur-[20px] border border-white rounded-[100px] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.08)] px-5 md:px-8 lg:px-14 h-[64px] lg:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src="/YUH_logo_main_RVB.svg" alt="Yuh" className="h-8 lg:h-10 w-auto" />
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href, hasDropdown, isActive }) => (
              <a
                key={label}
                href={href}
                className={`text-body-bold font-extrabold transition-colors ${
                  isActive
                    ? 'text-orange'
                    : 'text-black hover:text-orange'
                } ${hasDropdown ? 'flex items-center gap-1' : ''}`}
              >
                {label}
                {hasDropdown && <ChevronDown size={12} className="text-orange" />}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Language — desktop only */}
            <button className="hidden lg:flex items-center gap-2 bg-[rgba(21,26,33,0.05)] rounded-[100px] px-3 py-2">
              <img
                src="https://flagcdn.com/w40/fr.png"
                alt="FR"
                className="w-[22px] h-[22px] rounded-full object-cover"
              />
              <ChevronDown size={14} className="text-orange" />
            </button>

            {/* CTA */}
            <ButtonCTA size="small" className="hover:scale-105">Démarrer</ButtonCTA>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
            >
              <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8 pb-10">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map(({ label, href, isActive }) => (
              <a
                key={label}
                href={href}
                className={`text-h3 font-extrabold ${isActive ? 'text-orange' : 'text-black'}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[rgba(21,26,33,0.05)] rounded-[100px] px-3 py-2">
              <img src="https://flagcdn.com/w40/fr.png" alt="FR" className="w-[22px] h-[22px] rounded-full object-cover" />
              <ChevronDown size={14} className="text-orange" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
