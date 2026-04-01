# Yuh Pages

** Équipe DJMKEL **

Landing page marketing pour [Yuh](https://www.yuh.com), la néobanque suisse de PostFinance et Swissquote.

## Stack

| Outil | Version |
|-------|---------|
| Vite | 8.0 |
| React | 19.2 |
| TypeScript | 5.9 |
| Tailwind CSS | 3.4 |
| GSAP | 3.14 |

## Démarrage

```bash
npm install
npm run dev
```

Autres commandes :

```bash
npm run build    # build de production (tsc + vite build)
npm run preview  # prévisualiser le build
npm run lint     # ESLint
```

## Structure

```
src/
  pages/
    Home.tsx              — page principale, orchestre les sections
  components/
    Navbar.tsx            — navigation avec logo + liens
    Hero.tsx              — section héro avec background animé
    ComparisonSection.tsx — comparatif Yuh vs banque traditionnelle (tabs filtrés)
    CTAOpenAccount.tsx    — 3 étapes pour ouvrir un compte, animé au scroll (GSAP)
    FAQ.tsx               — accordéon questions/réponses
    Footer.tsx            — pied de page
public/
  illustration_yuh_app.png    — illustration étape 1 (CTA)
  illustration_yuh_app2.png   — illustration étape 2 (CTA)
  illustration_yuh_app3.png   — illustration étape 3 (CTA)
  YUH_logo_main_RVB.svg
  yuhperson-dp-4b.svg
  icons.svg
docs/
  figma-components.md     — inventaire des composants Figma + design tokens
```

## Design tokens

Définis dans `tailwind.config.js` sous `theme.extend`. Ne pas hardcoder de valeurs.

**Couleurs**

| Classe | Valeur |
|--------|--------|
| `bg-orange` / `text-orange` | `#fa5b35` |
| `text-black` | `#151a21` |
| `text-grey` | `#7c7c7c` |
| `bg-color-24` | `#ebe1ee` |
| `bg-pale-violet-1` | `#f7f1fb` |
| `text-validations` | `#02b089` |

**Typographie** — police `font-proxima-soft`

`text-title` · `text-h1` · `text-h2` · `text-h3` · `text-big-body` · `text-body-bold` · `text-button-text`

## Figma

- Fichier : https://www.figma.com/design/TzAYJ60Z6gJIZuHcD4Ry3X/Pages
- Node principal : `72-7226` (LP-banque traditionnelle)
- Voir `docs/figma-components.md` avant de créer un nouveau composant.
