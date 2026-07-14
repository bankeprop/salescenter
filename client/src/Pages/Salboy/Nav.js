import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import obsidianLogo from "../../Assests/Salboy/Obsidian_logo.png";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#apartments", label: "Apartments" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#investment", label: "Investment" },
  { href: "#payment", label: "Payment Plan" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" aria-label="Obsidian Manchester">
          <img className="h-auto w-44 sm:w-52" src={obsidianLogo} alt="Obsidian Manchester" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gold-gradient transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gold-gradient px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-charcoal shadow-[0_10px_30px_-10px_rgba(232,75,20,0.5)] transition hover:opacity-90 sm:inline-flex"
          >
            Register
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-white/15 p-2 text-white lg:hidden"
            aria-label="menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-6 mt-3 glass-panel rounded-xl p-4"
          >
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-white/80"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
