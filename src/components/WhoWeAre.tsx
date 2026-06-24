import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import whoImg from "@/assets/who-we-are.jpg";

const checklist = [
  "High-quality ingredients, fruits & nuts",
  "Italian-style pastries with local flair",
  "Trained cake artists & decorators",
  "Affordable pricing with premium quality",
  "Reliable doorstep delivery",
];

export function WhoWeAre() {
  return (
    <section className="bg-beige py-[60px] md:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-sm font-600 uppercase tracking-[0.2em] text-gold">
            Since 2010
          </span>
          <h2 className="mt-3 font-heading text-3xl font-700 text-chocolate md:text-4xl">
            Who We Are
          </h2>
          <p className="mt-5 text-base leading-relaxed text-subtle md:text-lg">
            Since 2010, Cake Fete has been Chennai's go-to destination
            for cakes that blend tradition, quality, and passion.
          </p>

          <ul className="mt-7 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="order-first lg:order-last">
          <div className="relative">
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-image border-2 border-gold/40" />
            <img
              src={whoImg}
              alt="Elegant display of assorted pastries in the bakery boutique"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative w-full rounded-image object-cover shadow-medium"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
