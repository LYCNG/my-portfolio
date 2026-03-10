import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Workflow } from "@/components/Workflow";
import { ContactForm } from "@/components/ContactForm";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <FeaturedWork />
      <Workflow />
      <ContactForm />

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "SharkLian Dev - Full Stack Engineer",
            image: "https://sharklian-portfolio.vercel.app/lian.svg",
            url: "https://sharklian-portfolio.vercel.app",
            telephone: "",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Taipei",
              addressRegion: "Taipei City",
              addressCountry: "TW",
            },
            priceRange: "$$$",
            description:
              "Professional React, Node.js & Next.js Full Stack Web Development.",
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
