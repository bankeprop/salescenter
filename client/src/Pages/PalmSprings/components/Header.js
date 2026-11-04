import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { images, navLinks } from "../data";
import { container } from "./ui";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#00263a] text-white">
      <div className="hidden bg-[#00192a] text-[11px] uppercase tracking-[0.18em] sm:block">
        <div className={`${container} flex h-8 items-center justify-end gap-6`}>
          <a href="tel:800625433" className="flex items-center gap-2 hover:text-[#6ad1e3]">
            <Phone size={12} aria-hidden="true" /> 800 NAKHEEL
          </a>
          <a href="#register" className="hover:text-[#6ad1e3]">Enquire Now</a>
        </div>
      </div>

      <div className={`${container} relative grid h-16 grid-cols-[1fr_auto_1fr] items-center`}>
        <button
          type="button"
          className="-ml-2 flex w-fit items-center gap-2 p-2 text-xs uppercase tracking-[0.18em]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
          <span className="hidden sm:inline">Menu</span>
        </button>

        <a href="#top" aria-label="Palm Springs by Nakheel" className="flex flex-col items-center gap-1">
          <img src={images.nakheel} alt="Nakheel" className="h-4 w-auto sm:h-5" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#6ad1e3]">Palm Springs</span>
        </a>

        <div className="flex justify-end">
          <a href="#register" className="border border-white/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] hover:bg-white hover:text-[#00263a] sm:px-5 sm:text-xs">
            Register
          </a>
        </div>

        <nav
          aria-label="Primary"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col border-t border-white/10 bg-[#00263a] px-4 py-2 shadow-xl sm:px-6 lg:px-8`}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.18em] hover:text-[#6ad1e3]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
