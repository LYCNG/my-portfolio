"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950 flex flex-col items-center justify-center">
      {/* Background Beams */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03)_50%,transparent)] bg-size-[100%_4px] animate-[slide_3s_linear_infinite]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[2.5rem] bg-slate-900/50 border border-slate-800 p-12 md:p-16 relative overflow-hidden backdrop-blur-xl group"
        >
          <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to scale your business?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
            Stop losing customers to slow, outdated websites. Let's build
            something exceptional together to crush your competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button
              size="lg"
              className="h-14 px-8 rounded-full bg-white text-slate-950 hover:bg-slate-200 text-lg font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow duration-300"
            >
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
