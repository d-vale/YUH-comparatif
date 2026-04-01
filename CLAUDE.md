# Project: Yuh Pages

Landing page marketing pour Yuh (néobanque suisse). Vite + React + TypeScript + Tailwind CSS v3 + GSAP.

## Stack

- **Vite** 8.0 — bundler + dev server
- **React** 19.2 + **TypeScript** 5.9
- **Tailwind CSS** 3.4 — utilitaires CSS, tokens via `tailwind.config.js`
- **GSAP** 3.14 — animations scroll (`ScrollTrigger`)

## Structure

```
src/
  components/
    ui/
      Container.tsx         — wrapper de layout réutilisable (max-w-[1412px] mx-auto px-10)
      ButtonCTA.tsx          — bouton d'action principal (orange solid, size default/small)
    Navbar.tsx              — barre de navigation
    Hero.tsx                — section héro avec background animé
    ComparisonSection.tsx   — comparaison Yuh vs néobanques (tabs)
    CTAOpenAccount.tsx      — 3 étapes pour ouvrir un compte, scroll-piné (GSAP)
    FAQ.tsx                 — accordéon questions/réponses
    Footer.tsx              — pied de page
  data/
    comparison.ts           — données du tableau comparatif + types (Row, Category, allBankData, tabs)
    ctaSteps.ts             — étapes d'ouverture de compte + type Step
    faq.ts                  — questions FAQ
    footer.ts               — liens et icônes footer + types (SocialIcon, FooterLinkGroup)
  pages/
    Home.tsx                — page principale, orchestre tous les composants
  App.tsx
  main.tsx
  index.css
public/
  illustration_yuh_app.png   — étape 1 CTA
  illustration_yuh_app2.png  — étape 2 CTA
  illustration_yuh_app3.png  — étape 3 CTA
  YUH_logo_main_RVB.svg
  yuhperson-dp-4b.svg
  icons.svg
```

## Key reference files

- **`docs/figma-components.md`** — Liste complète des composants identifiés dans le fichier Figma (node 72-7226, LP-banque traditionnelle). Contient la hiérarchie, les composants réutilisables, et un résumé des design tokens. **Lire ce fichier avant de créer un composant.**

## Design tokens

Tous les tokens sont dans `tailwind.config.js` sous `theme.extend`. Ne pas hardcoder de couleurs ou tailles de police — utiliser les classes Tailwind correspondantes.

Couleurs principales : `text-orange` (#fa5b35), `text-black` (#151a21), `text-grey` (#7c7c7c), `bg-color-24` (#ebe1ee), `bg-pale-violet-1` (#f7f1fb)

Typographie : `font-proxima-soft` — tailles : `text-title`, `text-h1`, `text-h2`, `text-h3`, `text-big-body`, `text-body-bold`, `text-button-text`

## GSAP

`ScrollTrigger` est utilisé dans `CTAOpenAccount.tsx`. Toujours enregistrer avant usage :
```ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

## Figma source

- File: https://www.figma.com/design/TzAYJ60Z6gJIZuHcD4Ry3X/Pages
- Main page node: `72-7226` (LP-banque traditionnelle)

## Visual-first rule

Le node tree Figma peut être incomplet ou cassé. **Toujours baser les décisions sur le screenshot Figma**, pas sur l'arbre de nodes. Si le rendu est correct visuellement → c'est correct.

## Component loop (pour chaque nouvelle section)

1. `get_design_context` + `get_screenshot` sur le node Figma
2. Créer le TSX dans `src/components/` avec Tailwind uniquement, pas de styles inline
3. Importer dans `src/pages/Home.tsx`
4. Screenshot de `localhost:5173` via outil browser
5. Comparer visuellement avec Figma → corriger si besoin (max 3 itérations)
6. Logger : ✅ PASS ou ⚠️ NEEDS REVIEW
