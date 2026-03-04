"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    // QuickSetter for performance
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.15,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.15,
      ease: "power3",
    });

    const mouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    // Hover logic for links and buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-magnetic")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Animate custom cursor state
  useGSAP(() => {
    if (isHovering) {
      gsap.to(cursorRef.current, {
        scale: 2.5,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "rgba(59, 130, 246, 0.5)", // Tailwind blue-500 equivalent
        border: "0px solid transparent",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isHovering]);

  // Hide cursor on touch devices
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
    }
  }, []);

  if (isTouch) return null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body { cursor: none; }
        a, button, [role="button"], input, select, textarea { cursor: none !important; }
      `,
        }}
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-9999 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
        style={{
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        }}
      />
    </>
  );
}
