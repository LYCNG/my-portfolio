"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "NestJS", "Mobx","Redux","PostgreSQL",
   "Tailwind CSS", "Framer Motion", "Git"
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
                 className="flex items-center justify-center px-8 py-4 bg-slate-900/50 border border-slate-800 rounded-xl text-xl font-bold text-slate-300 min-w-[200px]"
               >
                 {tech}
               </div>
            ))}
         </motion.div>
      </div>
    </div>
  );
}
