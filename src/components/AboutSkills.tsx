"use client";

import { useTranslations } from "next-intl";
import { Layout, Server, Wrench, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skillsData = [
  {
    category: "frontend",
    icon: Layout,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/30",
    items: [
      "React.js (v18/19)",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "GSAP Animations",
      "State Management (Zustand/Redux)",
    ],
  },
  {
    category: "backend",
    icon: Server,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/30",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "RESTful API Design",
      "PostgreSQL / MySQL",
      "OAuth & Auth Integration",
    ],
  },
  {
    category: "tools",
    icon: Wrench,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/30",
    items: [
      "Git & GitHub Actions",
      "Docker (Containerization)",
      "Supabase (BaaS)",
      "Figma (UI/UX translating)",
      "Vercel Deployment",
      "Agile Workflow",
    ],
  },
];

export function AboutSkills() {
  const t = useTranslations("About");
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".skill-group", { y: 50, opacity: 0 });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(".skill-group", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          });
        },
      });

      const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);
      return () => clearTimeout(refreshTimer);
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-20 md:py-32 bg-slate-900 border-t border-white/5 relative"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <header className="text-center mb-16 md:mb-24">
          <span className="text-sm font-black tracking-[0.3em] uppercase text-blue-500 mb-4 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            {t("skills_title")}
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className={`skill-group group relative bg-slate-950 rounded-3xl p-8 border border-white/5 transition-all duration-500 hover:-translate-y-2 ${group.border} hover:shadow-2xl`}
              >
                {/* Inner Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-b from-white to-transparent rounded-3xl" />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl ${group.bg} flex items-center justify-center mb-8 border border-white/5`}
                  >
                    <Icon className={`w-7 h-7 ${group.color}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t(`${group.category}_title`)}
                  </h3>

                  <p className="text-slate-400 mb-8 min-h-[48px]">
                    {t(`${group.category}_desc`)}
                  </p>

                  <ul className="space-y-4">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 mt-0.5 ${group.color}`}
                        />
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
