import { Reveal } from "@/components/Reveal";
import { scrollToSection } from "@/lib/scroll";
import whyImg from "@/assets/why-choose.jpg";

export function WhyChooseUs() {
  return (
    <section className="bg-cream py-[60px] md:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-image border-2 border-gold/40" />
            <img
              src={whyImg}
              alt="Decadent chocolate layer cake slice with ganache"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative w-full rounded-image object-cover shadow-medium"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="text-sm font-600 uppercase tracking-[0.2em] text-gold">
            The Monarch Difference
          </span>
          <h2 className="mt-3 font-heading text-3xl font-700 text-chocolate md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-5 text-base leading-relaxed text-subtle md:text-lg">
            Because we blend creativity with consistency — every cake is
            handcrafted with precision, love, and just the right touch of magic.
          </p>
          <button
            onClick={() => scrollToSection("menu")}
            className="mt-8 rounded-pill bg-gold px-8 py-3.5 font-600 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate"
          >
            Explore Menu
          </button>
        </Reveal>
      </div>
    </section>
  );
}
