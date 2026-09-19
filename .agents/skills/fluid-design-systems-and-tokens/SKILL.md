---
name: fluid-design-systems-and-tokens
description: Use when constructing design systems, fluid typography clamp() formulas, 8-point spatial cadence, dark/light theme tokens, and frosted glassmorphism refraction styles in Tailwind CSS.
---

# Fluid Design Systems & Token Architecture

This skill defines the mathematical principles, CSS token hierarchies, spatial cadence, and glassmorphism styling recipes required to build interfaces with world-class polish and responsive elegance.

---

## 1. Fluid Typography Engine

Fluid typography smoothly scales type between a mobile minimum viewport ($375\text{px}$) and a desktop maximum viewport ($1440\text{px}$) without abrupt media query jumps or layout shifts.

### Mathematical Scaling Formula
$$\text{Preferred Slope} = \frac{\text{Size}_{\max} - \text{Size}_{\min}}{\text{Viewport}_{\max} - \text{Viewport}_{\min}} \times 100\text{vw}$$
$$\text{Base Intercept} = \text{Size}_{\min} - (\text{Viewport}_{\min} \times \text{Slope})$$
$$\text{CSS Clamp} = \text{clamp}(\text{Size}_{\min}, \text{Base} + \text{Slope}, \text{Size}_{\max})$$

### Production Fluid Type Scale Tokens
```css
:root {
  /* Display Title (36px -> 56px) */
  --text-display: clamp(2.25rem, 1.65rem + 2.56vw, 3.5rem);
  
  /* H1 Heading (28px -> 40px) */
  --text-h1: clamp(1.75rem, 1.33rem + 1.79vw, 2.5rem);
  
  /* H2 Heading (22px -> 30px) */
  --text-h2: clamp(1.375rem, 1.10rem + 1.17vw, 1.875rem);
  
  /* H3 Subhead (18px -> 22px) */
  --text-h3: clamp(1.125rem, 0.99rem + 0.58vw, 1.375rem);
  
  /* Body Text (15px -> 17px) */
  --text-body: clamp(0.9375rem, 0.87rem + 0.29vw, 1.0625rem);
  
  /* Small / Caption (12px -> 14px) */
  --text-caption: clamp(0.75rem, 0.68rem + 0.29vw, 0.875rem);
}
```

---

## 2. The 8-Point Spatial Cadence

Never pick arbitrary spacing values like `17px`, `23px`, or `35px`. Anchor every spacing token strictly to the 8-point geometric scale:

| Token | Pixels | Rem Equivalent | Primary UI Application |
|:---|:---:|:---:|:---|
| `--space-1` | $4\text{px}$ | `0.25rem` | Micro-spacing: icon-to-label gaps, badge padding |
| `--space-2` | $8\text{px}$ | `0.50rem` | Compact element padding, input inline padding |
| `--space-3` | $12\text{px}$ | `0.75rem` | Card internal element separation |
| `--space-4` | $16\text{px}$ | `1.00rem` | Standard component padding, standard grid gap |
| `--space-6` | $24\text{px}$ | `1.50rem` | Medium card padding, layout group gaps |
| `--space-8` | $32\text{px}$ | `2.00rem` | Container margins, prominent section subdivisions |
| `--space-12` | $48\text{px}$ | `3.00rem` | Section spacing on mobile viewports |
| `--space-16` | $64\text{px}$ | `4.00rem` | Standard section vertical padding |
| `--space-24` | $96\text{px}$ | `6.00rem` | Major landing section breathing room (desktop) |

---

## 3. Dark & Light Theme Token Matrix

### Dark Mode (Velvet Obsidian & Rich Champagne Gold)
- **Background Root**: `#07070a` (`hsl(240 18% 3%)`)
- **Surface Elevation 1 (Card base)**: `#0e0e14` / `rgba(14, 14, 20, 0.7)`
- **Surface Elevation 2 (Hover/Active)**: `#161622` / `rgba(22, 22, 34, 0.8)`
- **Border Specular Highlight**: `rgba(255, 255, 255, 0.08)`
- **Border Accent**: `rgba(245, 158, 11, 0.25)` (Amber glow)
- **Primary Text**: `#f8fafc` (Slate 50)
- **Secondary Text**: `#94a3b8` (Slate 400)
- **Gold Accent Glow**: `#f59e0b` / `#fbbf24`

### Light Mode (Champagne Ivory & Deep Contrast Slate)
- **Background Root**: `#faf8f5` (Warm Alabaster Canvas)
- **Surface Elevation 1 (Card base)**: `#ffffff`
- **Surface Elevation 2 (Hover/Active)**: `#f5f2eb`
- **Border Subdued**: `rgba(15, 23, 42, 0.08)`
- **Border Accent**: `rgba(217, 119, 6, 0.25)` (Warm Ochre)
- **Primary Text**: `#0f172a` (Deep Slate 900)
- **Secondary Text**: `#475569` (Slate 600)

### Tailwind CSS v4 Engine Invariant
Always ensure the custom variant is declared in `globals.css`:
```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

---

## 4. Frosted Glassmorphism Recipes

### Smoked Obsidian Glass (Dark Mode)
```css
.glass-obsidian {
  background: rgba(14, 14, 20, 0.65);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
}

.glass-obsidian:hover {
  border-color: rgba(245, 158, 11, 0.3);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45),
              0 0 20px 0 rgba(245, 158, 11, 0.1),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
}
```

### Alabaster Ivory Glass (Light Mode)
```css
.glass-ivory {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
}
```
