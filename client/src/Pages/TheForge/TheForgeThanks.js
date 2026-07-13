import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import heroImg from "../../Assests/TheForge/hero-liverpool.jpg";
import logoImg from "../../Assests/TheForge/Logo.png";
import faviconImg from "../../Assests/TheForge/favicon.png";
import { resetFavicon, setFavicon } from "../../utils/favicon";
import "./TheForge.css";

function TheForgeThanks() {
  useEffect(() => {
    document.title = "Thank You | The Forge Liverpool";
    setFavicon(faviconImg);
    return () => resetFavicon();
  }, []);

  return (
    <main
      className="TheForge relative min-h-screen overflow-hidden text-white"
      style={{ background: "var(--charcoal)" }}
    >
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(124,126,124,0.55) 0%, rgba(27,27,27,0.95) 100%)",
        }}
      />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-3xl border border-white/15 bg-[#1B1B1B]/90 px-6 py-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur sm:px-10">
          <img
            src={logoImg}
            alt="The Forge Liverpool"
            className="mx-auto h-16 w-auto object-contain"
          />

          <div
            className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full"
            style={{
              background: "color-mix(in oklab, var(--gold) 25%, transparent)",
              color: "var(--gold-soft)",
            }}
          >
            <CheckCircle2 size={30} />
          </div>

          <p className="eyebrow mt-8" style={{ color: "var(--gold-soft)" }}>
            Thank You
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            Your investment request has been received.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/75">
            Our team will contact you shortly with The Forge brochure, pricing,
            floor plans, and current availability.
          </p>

          <Link to="/theforge" className="btn-gold mt-8 inline-flex">
            Back to The Forge <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default TheForgeThanks;
