import defaultLogo from "../../Assests/Emaar/EmaarValleyLogo.png";

const NAV_LINKS = [
  { href: "#home", label: "HOME" },
  { href: "#properties", label: "PROPERTIES" },
  { href: "#location", label: "LOCATION" },
  { href: "#amenities", label: "AMENITIES" },
  { href: "#contact", label: "CONTACT US" },
];

function NavBar({ logo = defaultLogo }) {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex w-full max-w-8xl items-center justify-center py-3 px-8 md:justify-between md:gap-6 md:px-12 md:py-4">

        <a href="#home" className="flex items-center">
          <img src={logo} alt="The Valley" className="h-12 w-auto md:h-16" />
        </a>
        <nav
          id="primary-nav"
          className="hidden items-center gap-10 text-sm md:flex md:text-base"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
