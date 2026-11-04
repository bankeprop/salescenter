import { images, navLinks } from "../data";
import { container } from "./ui";

function Footer() {
  return (
    <footer className="bg-[#00192a] py-12 text-xs text-white/65">
      <div className={`${container} grid gap-8`}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <img src={images.nakheel} alt="Nakheel" className="h-5 w-auto" />
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-[0.15em]">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-[#6ad1e3]">{label}</a>
            ))}
          </nav>
        </div>
        <p>
          *Prices and details are preliminary and subject to change. Images are
          representational.
        </p>
        <p>© 2026 Nakheel PJSC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
