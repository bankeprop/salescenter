import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";
import { btn, container } from "./ui";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className={`${container} flex h-16 items-center justify-between gap-4`}>
        <a href="#top" className="font-['Playfair_Display',Georgia,serif] text-xl font-semibold text-[#14212b]">
          Palm Springs
        </a>

        <nav
          aria-label="Primary"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-16 flex-col gap-4 border-b border-black/10 bg-white p-4 lg:static lg:flex lg:flex-row lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#14212b] hover:text-[#b8935a]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#register" className={`${btn} hidden !px-4 !py-2 sm:inline-flex`}>
            Register Your Interest
          </a>
          <button
            type="button"
            className="p-2 text-[#14212b] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
