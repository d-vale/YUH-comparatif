# Yuh Pages — Agent Instructions

## Stack
React 19 + TypeScript + Tailwind 3
Dev server: localhost:5173
Figma file key: TzAYJ60Z6gJIZuHcD4Ry3X
Main page node: 72-7226

## Design tokens (already in tailwind.config.js)
Colors: orange #fa5b35, black #151a21, grey #7c7c7c, white #fff,
        pale-violet-1 #f7f1fb, pale-violet-2 #f3ecf9,
        validations #02b089, color-24 #ebe1ee, color-10 #c9caea
Font: Proxima Soft → font-proxima-soft

## Visual-first rule
Figma node structure may be incomplete or broken.
ALWAYS base decisions on the Figma screenshot, not the node tree.
If it looks right visually → it's correct.

## Output structure
src/components/[ComponentName].tsx  ← one file per section
src/pages/Home.tsx                  ← assembles all components
src/App.tsx                         ← renders <Home />

## Component loop (repeat for each section)
1. get_design_context + get_screenshot on Figma node
2. Create TSX in src/components/ using Tailwind only, no inline styles
3. Import into src/pages/Home.tsx
4. Screenshot localhost:5173 via browser tool
5. Compare visually with Figma → fix if needed (max 3 iterations)
6. Log: ✅ PASS or ⚠️ NEEDS REVIEW