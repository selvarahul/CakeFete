import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import { menuItems, site } from "@/data/site";

export function Menu() {
  return (
    <section id="menu" className="bg-beige py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[920px] px-5 md:px-8">
        <SectionHeading title="Our Menu" subtitle="Recommendation Menu" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-5"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              variants={staggerItem}
              className="rounded-card bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-medium"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-heading text-xl font-600 text-chocolate">
                  {item.name}
                </h3>
                <span className="shrink-0 font-700 text-gold">{item.price}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-subtle">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href={site.social.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-pill bg-chocolate px-8 py-3.5 font-600 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-gold"
          >
            More Menu
          </a>
        </div>
      </div>
    </section>
  );
}
