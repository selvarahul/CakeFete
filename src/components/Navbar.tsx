import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { scrollToSection } from "@/lib/scroll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 shadow-soft backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[75px] max-w-[1280px] items-center justify-between px-5 md:h-[90px] md:px-8">
        {/* Logo + brand */}
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-3"
          aria-label="Go to home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-light-gold text-xl shadow-soft">
            🍰
          </span>
          <span className="flex flex-col text-left leading-tight">
            <span className="font-heading text-lg font-700 text-chocolate md:text-xl">
              Cake Fete
            </span>
            <span className="text-[10px] font-500 uppercase tracking-[0.18em] text-gold">
              European Pastries
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="group relative font-500 text-chocolate transition-colors hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={site.social.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-pill bg-gold px-6 py-2.5 font-600 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-chocolate lg:inline-block"
        >
          Order Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          className="rounded-full p-2 text-chocolate lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-dark-brown/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-card p-6 shadow-large lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-heading text-lg font-700 text-chocolate">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-chocolate"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNav(link.id)}
                      className="w-full rounded-xl px-4 py-3 text-left font-500 text-chocolate transition-colors hover:bg-beige hover:text-gold"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-6 rounded-pill bg-gold px-6 py-3 text-center font-600 text-white shadow-soft transition-colors hover:bg-chocolate"
              >
                Order Now
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
