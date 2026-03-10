import { FeaturedWork } from "@/components/FeaturedWork";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Portfolio
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mb-12">
          A collection of projects I've worked on, ranging from AI tools to
          enterprise dashboards.
        </p>
      </div>
      <FeaturedWork />
    </div>
  );
}
