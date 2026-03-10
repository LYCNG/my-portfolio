import { AboutHero } from "@/components/AboutHero";
import { AboutSkills } from "@/components/AboutSkills";
import { Experience } from "@/components/Experience";
import { AboutCTA } from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950">
      <AboutHero />
      <AboutSkills />
      <Experience />
      <AboutCTA />
    </main>
  );
}
