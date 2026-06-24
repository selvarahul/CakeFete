import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import { occasions } from "@/data/site";

export function Occasions() {
  return (
    <section className="bg-card py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeading title="Cakes For Every Occasion" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6"
        >
          {occasions.map((occ) => (
            <motion.div
              key={occ.label}
              variants={staggerItem}
              whileHover={{ scale: 1.06 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#D0D0D0] bg-beige text-4xl transition-all duration-300 group-hover:border-gold group-hover:shadow-medium md:h-28 md:w-28">
                {occ.icon}
              </div>
              <span className="mt-4 font-500 text-chocolate">{occ.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
