"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiNestjs, SiMobx, SiRedux, SiPostgresql, 
  SiTailwindcss, SiFramer 
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const technologies = [
  { name: "React", icon: FaReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10", border: "border-[#61DAFB]/20" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", bg: "bg-white/10", border: "border-white/20" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", bg: "bg-[#3178C6]/10", border: "border-[#3178C6]/20" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]", bg: "bg-[#339933]/10", border: "border-[#339933]/20" },
  { name: "NestJS", icon: SiNestjs, color: "text-[#E0234E]", bg: "bg-[#E0234E]/10", border: "border-[#E0234E]/20" },
  { name: "Mobx", icon: SiMobx, color: "text-[#FF9955]", bg: "bg-[#FF9955]/10", border: "border-[#FF9955]/20" },
  { name: "Redux", icon: SiRedux, color: "text-[#764ABC]", bg: "bg-[#764ABC]/10", border: "border-[#764ABC]/20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]", bg: "bg-[#336791]/10", border: "border-[#336791]/20" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38B2AC]", bg: "bg-[#38B2AC]/10", border: "border-[#38B2AC]/20" },
  { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-[#FF0055]", bg: "bg-[#FF0055]/10", border: "border-[#FF0055]/20" },
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]", bg: "bg-[#F05032]/10", border: "border-[#F05032]/20" }
];

// Duplicate for continuous loop
const marqueeItems = [...technologies, ...technologies];

export function TechStack() {
  const t = useTranslations("TechStack");

  return (
    <div className="py-20 bg-slate-950 overflow-hidden border-t border-slate-900 text-center ">
      <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        <h3 className="text-xl font-semibold text-slate-400">{t("title")}</h3>
      </div>
      
      <div className="relative w-full overflow-hidden mask-linear-fade">
         {/* Gradient Masks */}
         <div className="absolute top-0 left-0 w-32 h-full z-10 bg-linear-to-r from-slate-950 to-transparent" />
         <div className="absolute top-0 right-0 w-32 h-full z-10 bg-linear-to-l from-slate-950 to-transparent" />

         <motion.div 
           className="flex gap-8 whitespace-nowrap"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ 
             duration: 20, 
             ease: "linear", 
             repeat: Infinity 
            }}
         >
            {marqueeItems.map((tech, index) => (
               <div 
                 key={index} 
                 className={`flex items-center justify-center px-6 py-3 rounded-xl min-w-[180px] gap-3 transition-colors duration-300
                    ${tech.bg} ${tech.border} border
                 `}
               >
                 <tech.icon className={`w-5 h-5 ${tech.color}`} />
                 <span className={`text-lg font-bold ${tech.color}`}>{tech.name}</span>
               </div>
            ))}
         </motion.div>
      </div>
    </div>
  );
}
