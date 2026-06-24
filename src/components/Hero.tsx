import { motion } from "framer-motion";
import heroCake from "@/assets/hero-cake.png";
import { site } from "@/data/site";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-beige via-cream to-cream pt-[110px] md:pt-[140px]"
    >
      {/* subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(var(--chocolate) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* floating blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-light-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-5 pb-20 md:px-8 md:pb-28 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <span className="inline-block rounded-pill bg-white/70 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.2em] text-gold shadow-soft">
            European Pastry Boutique
          </span>
          <h1 className="mt-5 font-heading text-[42px] font-800 leading-[1.05] text-dark-brown md:text-[56px] lg:text-[72px]">
            Cake Fete
            <span className="mt-1 block text-gold">Italian Pastries</span>
            <span className="block">Welcomes You</span>
          </h1>

          {/* wavy underline */}
          <svg
            className="mx-auto mt-3 h-4 w-56 text-gold lg:mx-0"
            viewBox="0 0 220 16"
            fill="none"
          >
            <path
              d="M2 8c20-8 40 8 60 0s40-8 60 0 40 8 56 0"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <p className="mt-6 text-lg text-subtle md:text-xl">{site.subText}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <button
              onClick={() => scrollToSection("featured")}
              className="rounded-pill bg-gold px-8 py-3.5 font-600 text-white shadow-medium transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate"
            >
              View Products
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="rounded-pill border-2 border-chocolate px-8 py-3.5 font-600 text-chocolate transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate hover:text-white"
            >
              Our Menu
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto max-w-md lg:max-w-none"
        >
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-light-gold/40 to-gold/20 blur-2xl" />
          <motion.img
            src={heroCake}
            alt="Premium chocolate celebration cake with gold leaf and fresh berries"
            width={1024}
            height={1024}
            className="relative w-full drop-shadow-2xl"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
