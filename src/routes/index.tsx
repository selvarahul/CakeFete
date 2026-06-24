import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { About } from "@/components/About";
import { Counters } from "@/components/Counters";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Featured } from "@/components/Featured";
import { Occasions } from "@/components/Occasions";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Menu } from "@/components/Menu";
import { Testimonials } from "@/components/Testimonials";
import { SocialMedia } from "@/components/SocialMedia";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cake Fete Premium Cakes" },
      {
        name: "description",
        content:
          "Chocolate Monarch crafts handmade Italian-style pastries and premium cakes in Chennai — birthday, wedding, anniversary & designer cakes with doorstep delivery.",
      },
      { property: "og:title", content: "Chocolate Monarch — European Pastries" },
      {
        property: "og:description",
        content:
          "Freshly baked goodness you can't resist. Handcrafted premium cakes for every celebration.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Chocolate Monarch",
          description:
            "Premium European-style pastry boutique offering handcrafted cakes for every occasion.",
          servesCuisine: "Bakery, Pastries, Cakes",
          areaServed: "Chennai",
          openingHours: "Mo-Su 08:00-22:00",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <About />
        <Counters />
        <WhoWeAre />
        <Featured />
        <Occasions />
        <WhyChooseUs />
        <Menu />
        <Testimonials />
        <SocialMedia />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
