"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
  animateOn?: "view" | "hover" | "mount";
}

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function DecryptedText({
  text,
  speed = 35,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  characters = DEFAULT_CHARS,
  className = "",
  encryptedClassName = "text-[#f59e0b] opacity-80 font-mono",
  parentClassName = "inline-block",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomChar = useCallback(() => {
    return characters[Math.floor(Math.random() * characters.length)];
  }, [characters]);

  const triggerAnimation = useCallback(() => {
    if (shouldReduceMotion) {
      setDisplayText(text);
      setIsDecrypted(true);
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let iteration = 0;
    const textLength = text.length;
    const indicesToReveal = new Set<number>();
    
    // Order of indices based on revealDirection
    const order: number[] = [];
    if (revealDirection === "end") {
      for (let i = textLength - 1; i >= 0; i--) order.push(i);
    } else if (revealDirection === "center") {
      const mid = Math.floor(textLength / 2);
      order.push(mid);
      for (let offset = 1; offset <= mid || mid + offset < textLength; offset++) {
        if (mid - offset >= 0) order.push(mid - offset);
        if (mid + offset < textLength) order.push(mid + offset);
      }
    } else {
      // "start"
      for (let i = 0; i < textLength; i++) order.push(i);
    }

    setIsDecrypted(false);

    intervalRef.current = setInterval(() => {
      iteration++;

      if (sequential) {
        // Sequentially reveal characters
        const revealCount = Math.floor((iteration / maxIterations) * textLength);
        indicesToReveal.clear();
        for (let i = 0; i < revealCount && i < order.length; i++) {
          indicesToReveal.add(order[i]);
        }
      } else {
        // Random probabilistic reveal
        if (iteration >= maxIterations) {
          for (let i = 0; i < textLength; i++) indicesToReveal.add(i);
        }
      }

      setRevealedIndices(new Set(indicesToReveal));

      // Build scrambled string
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " " || char === "\n") return char;
          if (indicesToReveal.has(index)) return char;
          return getRandomChar();
        })
        .join("");

      setDisplayText(scrambled);

      if (indicesToReveal.size >= textLength || iteration >= maxIterations + (sequential ? textLength : 0)) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsDecrypted(true);
      }
    }, speed);
  }, [text, speed, maxIterations, sequential, revealDirection, getRandomChar, shouldReduceMotion]);

  useEffect(() => {
    if (animateOn === "view" && isInView) {
      triggerAnimation();
    } else if (animateOn === "mount") {
      triggerAnimation();
    }
  }, [isInView, animateOn, triggerAnimation]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (animateOn === "hover" || animateOn === "view") {
      triggerAnimation();
    }
  };

  if (shouldReduceMotion) {
    return <span className={`${parentClassName} ${className}`}>{text}</span>;
  }

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`${parentClassName} cursor-default select-none`}
    >
      {displayText.split("").map((char, index) => {
        const isRevealed = isDecrypted || revealedIndices.has(index) || char === " ";
        return (
          <span
            key={index}
            className={isRevealed ? className : encryptedClassName}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
