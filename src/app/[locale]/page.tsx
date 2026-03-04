import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedWork } from "@/components/FeaturedWork";
import { TechStack } from "@/components/TechStack";
import { AboutProcess } from "@/components/AboutProcess";
import { HireMe } from "@/components/HireMe";
import { Footer } from "@/components/Footer";
import { WebDesignHero } from "@/components/WebDesignHero";
import { FeaturesSection as WebDesignFeatures } from "@/components/WebDesignFeatures";
import { WhyChooseMe as WebDesignWhyChooseMe } from "@/components/WebDesignWhyChooseMe";
import { CTASection as WebDesignCTA } from "@/components/WebDesignCTA";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div id="top">
        <div id="web-design">
          <WebDesignHero />
          <WebDesignFeatures />
          {/* <WebDesignWhyChooseMe /> */}
        </div>
        <Hero />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
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
        <WebDesignCTA />
      </div>
      <div id="contact">
        <Footer />
      </div>

      {/* Web Design Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "SharkLian Web Design",
            image: "https://sharklian-portfolio.vercel.app/lian.svg",
            url: "https://sharklian-portfolio.vercel.app",
            telephone: "",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tainan",
              addressRegion: "Tainan City",
              addressCountry: "TW",
            },
            priceRange: "$$",
            description:
              "Professional React & Next.js Website Development in Tainan.",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
          }),
        }}
      />
    </div>
  );
}
