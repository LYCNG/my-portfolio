"use client";

import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function SectionNav() {
  const t = useTranslations("Topbar");
  const lenis = useLenis();
  const [activeSection, setActiveSection] = useState("top");

  const sections = [
    { id: "top", label: t("web_design") },
    { id: "tech-stack", label: "Skills" },
    { id: "services", label: t("services") },
    { id: "projects", label: t("projects") },
    { id: "process", label: t("process") },
    { id: "hire", label: t("hire") },
  ];

  useGSAP(() => {
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top 40%",
        end: "bottom 40%",
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      });
    });
  }, []);

  const handleScroll = (id: string) => {
    lenis?.scrollTo(`#${id}`, {
      offset: -64,
      duration: 1.5,
    });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-6">
      {/* Vertical Line */}
      <div className="absolute right-[7px] top-0 bottom-0 w-px bg-slate-800 pointer-events-none" />

      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleScroll(section.id)}
          className="group relative flex items-center gap-4 transition-all"
        >
          {/* Label (Reveal on Hover) */}
          <span
            className={`text-xs font-bold tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
              activeSection === section.id ? "text-blue-400" : "text-slate-500"
            }`}
          >
            {section.label}
          </span>

          {/* Dot */}
          <div
            className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 ${
              activeSection === section.id
                ? "bg-blue-500 border-blue-500 scale-125 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                : "bg-slate-950 border-slate-700 hover:border-slate-400 scale-75"
            }`}
          >
            {activeSection === section.id && (
              <div className="absolute inset-0 rounded-full animate-ping bg-blue-500/50" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
