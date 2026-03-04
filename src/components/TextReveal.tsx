"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: any;
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}: TextRevealProps) {
  const textRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      // Split text into lines, words, and chars
      const split = new SplitType(textRef.current, {
        types: "lines,words,chars",
      });

      gsap.from(split.chars, {
        yPercent: 130,
        opacity: 0,
        rotationZ: 10,
        stagger: 0.02,
        duration: 0.8,
        ease: "power4.out",
        delay: delay,
      });

      // Cleanup split-type to prevent duplication on re-renders
      return () => {
        split.revert();
      };
    },
    { scope: textRef },
  );

  return (
    <Component
      ref={textRef}
      className={`[clip-path:polygon(0_0,100%_0,100%_150%,0_150%)] ${className}`}
    >
      {children}
    </Component>
  );
}
