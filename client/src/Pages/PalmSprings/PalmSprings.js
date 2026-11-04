import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Residences from "./components/Residences";
import Location from "./components/Location";
import Developer from "./components/Developer";
import Faq from "./components/Faq";
import ClosingCta from "./components/ClosingCta";
import Footer from "./components/Footer";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Poppins:wght@400;500&display=swap";

function PalmSprings() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONTS_HREF;
    document.head.appendChild(link);
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      document.head.removeChild(link);
      html.style.scrollBehavior = previous;
    };
  }, []);

  return (
    <main className="font-['Poppins',sans-serif] text-[#14212b] antialiased">
      <Header />
      <Hero />
      <Overview />
      <Residences />
      <Location />
      <Developer />
      <Faq />
      <ClosingCta />
      <Footer />
    </main>
  );
}

export default PalmSprings;
