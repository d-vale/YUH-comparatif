# Figma Components — LP-banque traditionnelle

Source: https://www.figma.com/design/TzAYJ60Z6gJIZuHcD4Ry3X/Pages?node-id=72-7226  
Page: `LP-banque traditionnelle` — 1512 × 7465 px (desktop landing page)

---

## Depth 1 — Top-level sections

| Figma node | Type | Role |
|---|---|---|
| `Container` (×2) | Frame | Layout wrappers |
| `Frame 50` | Frame | Hero section |
| `Frame 51` | Frame | Below-hero section |
| `Group 8` | Group | Decorative grouping |
| `background-1-desktop.svg` | Frame | Decorative background |
| `Picture → hero-app-illustration-pricing.svg` | Frame | Hero illustration (right) |

---

## Depth 2 — Named UI components

| Figma node | Reusable | Notes |
|---|---|---|
| `Nav` | ✅ | Full navigation bar |
| `Button` | ✅ | Primary CTA button |
| `Chat Button` / `Bouton de Chat` | ✅ | Floating chat/support button |
| `Background+Shadow` | Maybe | Card shadow wrapper |
| `Link` | ✅ | Standalone link |

---

## Depth 3–4 — Component internals / repeated elements

| Figma node | Instances | Notes |
|---|---|---|
| `Nav → List` | 1 | Nav items container |
| `Item → Link` | 6 | Nav menu items (repeated) |
| `HorizontalBorder` | 6 | Table row dividers (repeated) |
| `List` | 3 | Used in Nav and comparison rows |
| `Link → SVG` | Multiple | Links with icon |

---

## Page sections (inferred from text content)

These are visual sections inside the containers — not explicitly named as components in Figma, but distinct page blocks to implement as components:

1. **Hero** — Headline + subheadline + CTA button + app illustration
2. **ComparisonTable** — Full feature comparison (Yuh vs traditional banks)
   - Category groups:
     - Compte et paiements
     - Fonctionnalités bancaires classiques
     - Expérience et accessibilité
     - Fidélité
     - Investissement et épargne
     - Devises et paiements internationaux
     - Crédit / hypothèque
     - Crypto natif
     - Actions, ETF, crypto intégré
3. **FAQ** — Repeated question + answer pairs

---

## Reusable component candidates

| Component | Why |
|---|---|
| `Button` | Used at multiple depths (hero + elsewhere) |
| `Nav` | Full navbar with List + Item children |
| `Item → Link` | Repeated ×6, identical structure |
| `HorizontalBorder` | Repeated ×6, pure divider |
| `ChatButton` | Standalone floating button |
| `Link` | Used standalone and nested |
| `ComparisonRow` | Not named in Figma but row pattern (label + Yuh value + bank value) repeats throughout the table |
| `FAQItem` | Not named in Figma but question/answer structure repeats |

---

## Design tokens (tailwind.config.js)

All tokens are already wired into `tailwind.config.js`. Summary:

**Colors:** `orange` (#fa5b35), `black` (#151a21), `grey` (#7c7c7c), `white`, `pale-violet-1` (#f7f1fb), `pale-violet-2` (#f3ecf9), `validations` (#02b089), `color-24` (#ebe1ee), `color-10` (#c9caea)

**Font family:** `font-proxima-soft` → `"Proxima Soft"`

**Font sizes (with line-height):** `title` (80/100), `h1` (64/80), `h2` (48/56), `h3` (36/44), `big-body-1` (24/32), `big-body-1-bold` (24/32), `big-body-bold` (20/24), `big-body` (18/28), `body-bold` (16/24), `button-text` (16/24), `mini-text` (12/18)

**Font weights:** `regular` (400), `bold` (700), `extrabold` (800)
