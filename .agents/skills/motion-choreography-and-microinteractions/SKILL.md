---
name: motion-choreography-and-microinteractions
description: Master guidelines and production-ready TypeScript + Framer Motion primitives for physics-based animations, layout transitions, exit/enter choreography, gesture micro-interactions, and accessibility compliance.
---

# Motion Choreography & Micro-Interactions

This skill provides the architectural foundation, spring physics presets, and production-ready TypeScript + Framer Motion primitives for creating interfaces that feel alive, responsive, tactile, and natural.

---

## 1. The 3 Core Laws of UI Motion

1. **Informative, Never Decorative**: Motion must communicate spatial continuity, state transition, or cause-and-effect. Never animate solely to show off animation.
2. **Proportional Speed**:
   - Micro-elements (toggles, icons, pills): $120\text{ms}$–$180\text{ms}$ (`stiffness: 450, damping: 30`).
   - Cards & Dialogs: $250\text{ms}$–$350\text{ms}$ (`stiffness: 300, damping: 32`).
   - Full Page / Layout shifts: $400\text{ms}$–$500\text{ms}$ (`stiffness: 240, damping: 28`).
3. **Strict Accessibility Compliance**: Always check `useReducedMotion()`. If enabled, reduce motion to instantaneous opacity changes or zero transforms.

---

## 2. Spring Physics Parameter Presets

| Preset Name | Stiffness | Damping | Mass | Primary Use Case |
|:---|:---:|:---:|:---:|:---|
| **Tactile Snappy** | 400 | 30 | 0.8 | Buttons, badges, toggles, filter chips |
| **Fluid Standard** | 300 | 32 | 1.0 | Modals, drawer slides, accordion expands |
| **Gentle Settle** | 220 | 28 | 1.2 | Page entrance, large hero artwork reveal |
| **Tactile Bounce** | 450 | 22 | 0.7 | Success checks, celebratory badges, metric pop |

---

## 3. Container-Level Filter & Tab Swapping Protocol

When animating tab switching, filter swapping, or dynamic grids:
- **ALWAYS wrap the grid container in `<AnimatePresence mode="wait">`**.
- Assign `key={activeTab}` to the container `<motion.div>`.
- **NEVER apply unmodeled `layout` to individual grid children during filtering**, as parallel exit and enter animations create CSS grid height jumps and element collisions.

```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={activeCategory}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {filteredItems.map(item => (
      <Card key={item.id} data={item} />
    ))}
  </motion.div>
</AnimatePresence>
```

---

## 4. Production-Ready Framer Motion Primitives

### Primitive 1: Accessible Reduced Motion Hook
```tsx
"use client";

import { useReducedMotion } from "framer-motion";

export function useSafeMotion() {
  const shouldReduce = useReducedMotion();

  return {
    shouldReduce,
    fadeSpring: shouldReduce
      ? { duration: 0.1 }
      : { type: "spring", stiffness: 300, damping: 32 },
    snappySpring: shouldReduce
      ? { duration: 0.05 }
      : { type: "spring", stiffness: 400, damping: 30 },
  };
}
```

### Primitive 2: Magnetic Tactile Button
```tsx
"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticButton({
  children,
  strength = 20,
  className = "",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduce = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldReduce || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / strength);
    const y = (clientY - (top + height / 2)) / (height / strength);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center font-medium rounded-xl transition-colors ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
```

### Primitive 3: 3D Perspective Tilt Card
```tsx
"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: shouldReduce ? 0 : rotateX,
        rotateY: shouldReduce ? 0 : rotateY,
      }}
      className={`relative rounded-2xl transition-shadow ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
```
