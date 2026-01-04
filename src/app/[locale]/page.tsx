import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedWork } from "@/components/FeaturedWork";
import { TechStack } from "@/components/TechStack";
import { AboutProcess } from "@/components/AboutProcess";
import { HireMe } from "@/components/HireMe";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TechStack />
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <FeaturedWork />
      </div>
      <div id="process">
        <AboutProcess />
      </div>
      <div id="hire">
        <HireMe />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
