import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import { categories } from "@/data/site";

export function Categories() {
  return (
    <section className="bg-cream py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading
          title="Our Special Cakes"
          subtitle="Handcrafted for Every Celebration"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 gap-5 md:gap-7 lg:grid-cols-4"
        >
          {categories.map((cat) => (
            <motion.article
              key={cat.title}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-card shadow-soft transition-shadow duration-300 hover:shadow-large"
            >
              <div className="h-[280px] overflow-hidden md:h-[420px]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/85 via-dark-brown/10 to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-5 font-heading text-lg font-600 text-white md:text-xl">
                {cat.title}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
