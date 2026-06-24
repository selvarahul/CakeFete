import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { navLinks, outlets, site } from "@/data/site";
import { scrollToSection } from "@/lib/scroll";

const quickLinks = navLinks.filter((l) =>
  ["About Us", "Menu", "Gallery", "Outlets", "Contact"].includes(l.label),
);

export function Footer() {
  return (
    <footer id="contact" className="bg-dark-brown text-cream">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-light-gold text-xl">
                🍰
              </span>
              <span className="font-heading text-xl font-700 text-white">
                Cake Fete
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              {site.tagline}. {site.subText}
            </p>
            <div className="mt-5 space-y-2 text-sm text-cream/80">
              <a
                href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" /> {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" /> {site.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-600 text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Outlets */}
          <div id="outlets">
            <h3 className="font-heading text-lg font-600 text-white">Outlets</h3>
            <ul className="mt-4 space-y-2.5">
              {outlets.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-2 text-sm text-cream/75"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Work hours */}
          <div>
            <h3 className="font-heading text-lg font-600 text-white">
              Work Hours
            </h3>
            <div className="mt-4 flex items-start gap-2 text-sm text-cream/80">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <p>{site.workHours.days}</p>
                <p className="text-gold">{site.workHours.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1280px] px-5 py-5 text-center text-sm text-cream/60 md:px-8">
          © 2026 Cake Fete. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
