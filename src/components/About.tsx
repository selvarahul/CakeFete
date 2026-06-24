import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { scrollToSection } from "@/lib/scroll";
import aboutImg from "@/assets/about.jpg";

const features = [
  "Crafted with Passion",
  "Made with Premium Ingredients",
  "Perfect for Every Occasion",
];

export function About() {
  return (
    <section id="about" className="bg-beige py-[60px] md:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-image border-2 border-gold/40" />
            <img
              src={aboutImg}
              alt="Pastry chef hand-decorating a cake"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative w-full rounded-image object-cover shadow-medium"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="text-sm font-600 uppercase tracking-[0.2em] text-gold">
            Our Story
          </span>
          <h2 className="mt-3 font-heading text-3xl font-700 text-chocolate md:text-4xl">
            About Cake Fete
          </h2>
          <p className="mt-5 text-base leading-relaxed text-subtle md:text-lg">
            Step into a world of irresistible flavor and delightful indulgence.
            At Cake Fete, we don't just bake cakes — we craft
            experiences.
          </p>

          <ul className="mt-7 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-500 text-ink">{f}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("featured")}
            className="mt-8 rounded-pill bg-chocolate px-8 py-3.5 font-600 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-gold"
          >
            About Us
          </button>
        </Reveal>
      </div>
    </section>
  );
}
