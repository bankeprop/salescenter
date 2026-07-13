import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  Film,
  Dumbbell,
  GraduationCap,
  Landmark,
  MapPin,
  Sparkles,
  TrainFront,
  TrendingUp,
  Users,
  Video,
  Wallet,
  Wifi,
  Wine,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImg from "../../Assests/TheForge/hero-liverpool.jpg";
import lifestyleImg from "../../Assests/TheForge/liverpool-lifestyle.jpg";
import amenityLobby from "../../Assests/TheForge/amenity-lobby.jpg";
import amenityRooftop from "../../Assests/TheForge/amenity-rooftop.jpeg";
import amenityGym from "../../Assests/TheForge/gym.jpeg";
import amenityCinema from "../../Assests/TheForge/amenity-cinema.jpg";
import amenityLounge from "../../Assests/TheForge/amenity-lounge.jpg";
import brochureImg from "../../Assests/TheForge/brochure.jpg";
import consultationImg from "../../Assests/TheForge/consultation.jpg";
import mapImg from "../../Assests/TheForge/Map.jpeg";
import logoImg from "../../Assests/TheForge/Logo.png";
import "./TheForge.css";

const WEBHOOK_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxTrPUIKN5-vZAda8_PTCJ_Fdpry7a9P-SKrYNoXGuWIeRHnmb-AptkapEqihZdJiik2g/exec";

/* -------------------- Reveal on scroll -------------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useSmoothHashScroll() {
  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest(".TheForge a[href^='#']");
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}

/* -------------------- Animated counter -------------------- */
function Counter({ end, suffix = "", prefix = "", decimals = 0 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(end * eased);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

function SectionCta({ dark = false, center = false, label = "Get Investment Details" }) {
  return (
    <div className={`mt-6 flex ${center ? "justify-center" : "justify-start"}`}>
      <a href="#brochure-form" className={dark ? "btn-gold" : "btn-primary"}>
        {label} <ArrowRight size={18} />
      </a>
    </div>
  );
}

/* -------------------- Nav -------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#why-liverpool", label: "Liverpool" },
    { href: "#regeneration", label: "Regeneration" },
    { href: "#the-forge", label: "The Forge" },
    { href: "#location", label: "Location" },
    { href: "#investment", label: "Investment" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container-forge flex items-center justify-between h-20">
        <a
          href="#top"
          aria-label="The Forge home"
          className="flex items-center"
        >
          <img
            src={logoImg}
            alt="The Forge"
            className="h-14 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors hover:text-accent"
              style={{ color: scrolled ? "var(--charcoal)" : "var(--ivory)" }}
            >
              {l.label}
            </a>
          ))}
          <a href="#brochure-form" className="btn-primary !py-3 !px-6 text-sm">
            Get Brochure <ArrowRight size={16} />
          </a>
        </nav>
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ color: scrolled ? "var(--charcoal)" : "var(--ivory)" }}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-forge py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-medium"
                style={{ color: "var(--charcoal)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#brochure-form"
              onClick={() => setOpen(false)}
              className="btn-primary"
            >
              Get Brochure
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------- Sections -------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Liverpool waterfront skyline at golden hour with the Royal Liver Building"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(16,42,67,0.55) 0%, rgba(16,42,67,0.25) 40%, rgba(27,27,27,0.85) 100%)",
        }}
      />
      <div className="relative container-forge pb-24 pt-40 lg:pb-32 text-white">
        <div className="max-w-3xl animate-fade-up">
          <span
            className="eyebrow"
            style={{ color: "var(--gold-soft)", fontSize: "0.875rem" }}
          >
            The Forge · Pumpfields, Liverpool
          </span>
          <h1 className="mt-6 text-white font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Invest Before Liverpool's{" "}
            <em className="not-italic gold-text">Next Growth Cycle</em>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-2xl">
            Premium city-centre apartments within Liverpool's £2bn Pumpfields
            regeneration zone, neighbouring the £5.5bn Liverpool Waters
            masterplan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#brochure-form" className="btn-primary">
              Download Investment Brochure <ArrowRight size={18} />
            </a>
            <a href="#consultation" className="btn-outline">
              Book UAE Investor Consultation
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Capital Growth",
              value: "27.6%",
              sub: "Projected by 2029",
            },
            { label: "Students", value: "70,000+", sub: "In Liverpool" },
            {
              label: "Rental Demand",
              value: "Strong",
              sub: "City Centre Market",
            },
            {
              label: "Amenities",
              value: "Premium",
              sub: "Concierge · Gym · Cinema",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 backdrop-blur-md border"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.15)",
              }}
            >
              <div className="text-xs uppercase tracking-widest text-white/60">
                {s.label}
              </div>
              <div className="mt-2 font-display text-2xl md:text-3xl text-white">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-white/70">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#trust"
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-float"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Building2, label: "UK Property Investment" },
    { icon: Users, label: "UAE Investor Support" },
    { icon: TrendingUp, label: "High Rental Demand" },
    { icon: Sparkles, label: "Regeneration Location" },
    { icon: Award, label: "Dedicated Investment Support" },
  ];
  return (
    <section id="trust" className="border-b border-border py-8 bg-secondary/40">
      <div className="container-forge grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <Icon size={18} className="gold-text shrink-0" />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
      <div className="container-forge">
        <SectionCta center label="Request The Forge Brochure" />
      </div>
    </section>
  );
}

function WhyLiverpool() {
  const items = [
    { icon: Wallet, label: "Lower entry prices" },
    { icon: Landmark, label: "£2bn regeneration" },
    { icon: GraduationCap, label: "70,000+ students" },
    { icon: Users, label: "Young professional workforce" },
    { icon: MapPin, label: "60M annual visitors" },
  ];
  return (
    <section id="why-liverpool" className="py-16 lg:py-20">
      <div className="container-forge grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img
              src={lifestyleImg}
              alt="Rooftop terrace at dusk overlooking Liverpool skyline"
              loading="lazy"
              width={1408}
              height={1600}
              className="w-full h-[560px] object-cover"
            />
          </div>
        </div>
        <div className="reveal">
          <span className="eyebrow">Why Liverpool</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            A city rewriting its investment story.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Liverpool is one of the UK's fastest-growing regional investment
            cities — powered by generational regeneration, a young
            professional workforce and one of the country's strongest rental
            markets. For UAE investors, it offers accessible entry prices with
            the growth profile of a capital city.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "color-mix(in oklab, var(--gold) 25%, transparent)",
                  }}
                >
                  <Icon size={20} style={{ color: "var(--navy)" }} />
                </div>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
          <SectionCta label="Explore The Investment" />
        </div>
      </div>
    </section>
  );
}

function Regeneration() {
  const stats = [
    { value: 2, prefix: "£", suffix: "bn", label: "Pumpfields Regeneration" },
    {
      value: 5.5,
      prefix: "£",
      suffix: "bn",
      label: "Liverpool Waters",
      decimals: 1,
    },
    { value: 5, prefix: "£", suffix: "bn", label: "Transport Upgrade" },
    { value: 5, suffix: "", label: "New Waterfront Neighbourhoods" },
  ];
  return (
    <section
      id="regeneration"
      className="py-16 lg:py-20 text-white"
      style={{
        background: "linear-gradient(180deg, #7C7E7C 0%, #1B1B1B 100%)",
      }}
    >
      <div className="container-forge">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Regeneration Story</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-white">
            Positioned at the centre of Liverpool's next growth district.
          </h2>
          <p className="mt-6 text-white/70 text-lg">
            The Forge sits within a corridor of transformative investment
            reshaping Liverpool's waterfront and city centre over the next
            decade.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal rounded-2xl p-8 border relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-xs tracking-widest uppercase text-white/50">
                Phase 0{i + 1}
              </div>
              <div className="mt-4 font-display text-5xl gold-text">
                <Counter
                  end={s.value}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix ?? ""}
                  decimals={s.decimals ?? 0}
                />
              </div>
              <div className="mt-3 text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
        <SectionCta dark label="Request Regeneration Details" />
      </div>
    </section>
  );
}

function TheForge() {
  const features = [
    { icon: Building2, label: "400 Apartments" },
    { icon: Users, label: "24/7 Concierge" },
    { icon: Wine, label: "Residents Lounge" },
    { icon: Wifi, label: "Co-working" },
    { icon: Film, label: "Cinema Room" },
    { icon: Dumbbell, label: "Private Gym" },
    { icon: TrendingUp, label: "Rooftop Running Track" },
    { icon: Sparkles, label: "Rooftop Garden" },
  ];
  return (
    <section id="the-forge" className="py-16 lg:py-20 bg-secondary/40">
      <div className="container-forge">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Why The Forge</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            A landmark residence designed for modern city living.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="card-luxury reveal">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background:
                    "color-mix(in oklab, var(--gold) 25%, transparent)",
                }}
              >
                <Icon size={22} style={{ color: "var(--navy)" }} />
              </div>
              <div className="font-display text-xl">{label}</div>
            </div>
          ))}
        </div>
        <SectionCta label="View Apartments & Pricing" />
      </div>
    </section>
  );
}

function Location() {
  const pins = [
    { label: "CBD", time: "4 min walk" },
    { label: "Moorfields Station", time: "5 min walk" },
    { label: "Lime Street", time: "10 min walk" },
    { label: "Liverpool ONE", time: "12 min walk" },
    { label: "Royal Albert Dock", time: "15 min walk" },
    { label: "University of Liverpool", time: "15 min walk" },
    { label: "Knowledge Quarter", time: "12 min walk" },
  ];
  return (
    <section id="location" className="py-16 lg:py-20">
      <div className="container-forge grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2 reveal">
          <span className="eyebrow">Location</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Everything within a 15-minute walk.
          </h2>
          <p className="mt-6 text-muted-foreground">
            The Forge is placed at the intersection of Liverpool's business,
            education and cultural districts — connecting residents to the
            city's biggest rental demand drivers.
          </p>
          <ul className="mt-10 divide-y divide-border rounded-2xl border border-border overflow-hidden">
            {pins.map((p) => (
              <li
                key={p.label}
                className="flex items-center justify-between px-5 py-4 bg-card"
              >
                <span className="flex items-center gap-3 font-medium">
                  <MapPin size={16} className="gold-text" />
                  {p.label}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrainFront size={14} />
                  {p.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3 reveal">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-border">
            <img
              src={mapImg}
              alt="Map showing The Forge location and nearby Liverpool landmarks"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <SectionCta label="Get Location & Project Details" />
        </div>
      </div>
    </section>
  );
}

function RentalDemand() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/40">
      <div className="container-forge grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <span className="eyebrow">Rental Demand</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            A tenant pool of over 70,000 students — every year.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Liverpool's universities feed one of the UK's most consistent
            private rental markets. High graduate retention keeps demand
            elevated well beyond graduation, driving multi-year rental growth.
          </p>
          <div className="mt-8 font-display text-7xl md:text-8xl gold-text leading-none">
            <Counter end={70000} suffix="+" />
          </div>
          <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
            Students in Liverpool
          </div>
        </div>
        <div className="grid gap-5 reveal">
          {[
            {
              v: "76.26%",
              l: "Graduate Retention",
              d: "Graduates staying to work in Liverpool",
            },
            {
              v: "66%",
              l: "Population Aged 16–34",
              d: "One of the youngest cities in the UK",
            },
            {
              v: "6.4%",
              l: "Annual Rental Growth",
              d: "Sustained growth across the city centre",
            },
          ].map((c) => (
            <div key={c.l} className="card-luxury flex items-center gap-6">
              <div
                className="font-display text-4xl md:text-5xl"
                style={{ color: "var(--navy)" }}
              >
                {c.v}
              </div>
              <div>
                <div className="font-semibold">{c.l}</div>
                <div className="text-sm text-muted-foreground">{c.d}</div>
              </div>
            </div>
          ))}
        </div>
        <SectionCta label="Request Rental Projections" />
      </div>
    </section>
  );
}

function InvestmentCase() {
  const cols = [
    {
      title: "Affordable Entry",
      body: "Prices materially below London and Manchester at the same specification level.",
      icon: Wallet,
    },
    {
      title: "Strong Rental Market",
      body: "Driven by 70,000+ students and a growing young professional workforce.",
      icon: Users,
    },
    {
      title: "Capital Appreciation",
      body: "Major regeneration and infrastructure supporting long-term growth.",
      icon: TrendingUp,
    },
  ];
  return (
    <section id="investment" className="py-16 lg:py-20">
      <div className="container-forge">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">The Investment Case</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Why investors choose Liverpool.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cols.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-luxury reveal">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background:
                    "color-mix(in oklab, var(--gold) 25%, transparent)",
                  color: "var(--navy)",
                }}
              >
                <Icon size={22} />
              </div>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal card-luxury">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground">
                Projected Capital Growth
              </div>
              <div className="font-display text-3xl">2024 → 2029</div>
            </div>
            <div className="font-display text-4xl gold-text">
              +<Counter end={27.6} decimals={1} suffix="%" />
            </div>
          </div>
          <svg viewBox="0 0 800 220" className="w-full h-56">
            <defs>
              <linearGradient id="grow" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#DBB25C" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#DBB25C" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="var(--border)" strokeDasharray="3 4">
              {[40, 90, 140, 190].map((y) => (
                <line key={y} x1="0" y1={y} x2="800" y2={y} />
              ))}
            </g>
            <path
              d="M0,180 C120,170 220,155 320,130 C420,105 520,85 640,55 L800,30 L800,220 L0,220 Z"
              fill="url(#grow)"
            />
            <path
              d="M0,180 C120,170 220,155 320,130 C420,105 520,85 640,55 L800,30"
              fill="none"
              stroke="#DBB25C"
              strokeWidth="3"
            />
            {["2024", "2025", "2026", "2027", "2028", "2029"].map((y, i) => (
              <text
                key={y}
                x={i * 160}
                y="215"
                fontSize="12"
                fontFamily="DM Sans"
                fill="var(--muted-foreground)"
              >
                {y}
              </text>
            ))}
          </svg>
        </div>
        <SectionCta label="Get Full Investment Details" />
      </div>
    </section>
  );
}

function Amenities() {
  const cards = [
    { img: amenityLobby, label: "Concierge", tall: true },
    { img: amenityRooftop, label: "Rooftop Running Track" },
    { img: amenityCinema, label: "Private Cinema" },
    { img: amenityLounge, label: "Residents Lounge & Co-working" },
    { img: amenityGym, label: "Gym" },
  ];
  const smallList = [
    "Private Dining",
    "Boardroom",
    "Cycle Storage",
    "Rooftop Garden",
    "Gym",
    "Concierge",
  ];
  return (
    <section className="py-16 lg:py-20 bg-secondary/40">
      <div className="container-forge">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Premium Amenities</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Curated for the residents of tomorrow.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {cards.map((c) => (
            <div
              key={c.label}
              className={`relative group overflow-hidden rounded-2xl reveal ${c.tall ? "lg:row-span-2 lg:col-span-2" : ""
                }`}
            >
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)",
                }}
              />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="font-display text-xl md:text-2xl">
                  {c.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-3">
          {smallList.map((s) => (
            <div
              key={s}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium flex items-center gap-2"
            >
              <CheckCircle2 size={14} className="gold-text" />
              {s}
            </div>
          ))}
        </div>
        <SectionCta label="Request Amenities & Floor Plans" />
      </div>
    </section>
  );
}

function InvestmentSnapshot() {
  const cells = [
    {
      label: "From",
      value: (
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2">
          <span>£200,000</span>
          <span>/</span>
          <span className="inline-flex items-center gap-1.5">
            <svg
              aria-label="UAE dirham"
              className="h-[0.8em] w-[0.8em] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 3v18M6 3h3.5C16 3 20 6.4 20 12s-4 9-10.5 9H6M3 10h18M3 14h18"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
            <span>983,000</span>
          </span>
        </span>
      ),
    },
    { label: "Deposit", value: "25%" },
    { label: "Rental Yield", value: "7%" },
    { label: "Projected Growth", value: "27.6% by 2029" },
  ];
  return (
    <section
      className="py-16 lg:py-20 text-white"
      style={{
        background: "linear-gradient(180deg, #7C7E7C 0%, #1B1B1B 100%)",
      }}
    >
      <div className="container-forge text-center reveal">
        <span className="eyebrow">Investment Snapshot</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-white">
          Numbers that speak for themselves.
        </h2>
      </div>
      <div className="container-forge mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cells.map((c) => (
          <div
            key={c.label}
            className="reveal text-center rounded-3xl border p-10"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div className="text-xs uppercase tracking-widest text-white/50">
              {c.label}
            </div>
            <div className="mt-4 font-display text-4xl md:text-5xl gold-text">
              {c.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex justify-center">
        <a href="#brochure-form" className="btn-gold">
          Request Full Investment Breakdown <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function InvestorSupport() {
  const steps = [
    { icon: CheckCircle2, label: "Reservation Support" },
    { icon: Landmark, label: "Solicitor Introduction" },
    { icon: Wallet, label: "Mortgage Guidance" },
    { icon: TrendingUp, label: "Currency Transfer" },
    { icon: Building2, label: "Property Management" },
  ];
  return (
    <section className="py-16 lg:py-20">
      <div className="container-forge">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">UAE Investor Support</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            A fully guided investment journey — from Dubai to Liverpool.
          </h2>
        </div>
        <div className="mt-16 relative">
          <div
            className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px"
            style={{ background: "var(--border)" }}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <div key={s.label} className="reveal text-center">
                <div
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center relative z-10 mb-4"
                  style={{
                    background:
                      "color-mix(in oklab, var(--gold) 25%, transparent)",
                    color: "var(--navy)",
                  }}
                >
                  <s.icon size={22} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Step 0{i + 1}
                </div>
                <div className="mt-2 font-display text-lg">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", error, defaultValue }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        maxLength={120}
        className="mt-2 h-[58px] w-full rounded-xl border border-border bg-card px-4 outline-none focus:border-accent transition"
      />
      {error && (
        <span className="text-xs text-destructive mt-1 block">{error}</span>
      )}
    </label>
  );
}
function SelectField({ name, label, options, full, defaultValue = "" }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <span className="relative mt-2 block">
        <select
          name={name}
          defaultValue={defaultValue}
          className="h-[58px] w-full appearance-none rounded-xl border border-border bg-card px-4 pr-11 outline-none focus:border-accent transition"
        >
          <option value="">Select</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-foreground"
        />
      </span>
    </label>
  );
}

function LeadForm() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const fd = new FormData(e.currentTarget);
    const next = {};
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("whatsapp") || "").replace(/\D/g, "");
    if (name.length < 2) next.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const message = [
      "Project: The Forge Liverpool",
      `Country: ${fd.get("country") || "Not provided"}`,
      `Budget: ${fd.get("budget") || "Not selected"}`,
      `Preferred unit: ${fd.get("unit") || "Not selected"}`,
      `Finance: ${fd.get("finance") || "Not selected"}`,
    ].join("\n");

    const payload = new FormData();
    payload.set("name", name);
    payload.set("email", email);
    payload.set("phone", phone);
    payload.set("message", message);
    payload.set("campaignName", "The Forge Liverpool");
    payload.set("pageUrl", window.location.href);

    try {
      setIsSubmitting(true);
      setSubmitError("");
      await fetch(WEBHOOK_ENDPOINT, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });
      form.reset();
      setSubmitted(true);
      navigate("/theforge/thanks");
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="brochure" className="py-16 lg:py-20 bg-secondary/40">
      <div className="container-forge grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img
              src={brochureImg}
              alt="The Forge Liverpool investment brochure"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div id="brochure-form" className="reveal scroll-mt-24 lg:scroll-mt-32">
          <span className="eyebrow">Investment Brochure</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Download the full investment pack.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Receive pricing, floor plans, rental projections, payment structure
            and current availability — sent directly to your inbox.
          </p>

          {submitted ? (
            <div className="mt-8 card-luxury">
              <div className="font-display text-2xl">Thank you.</div>
              <p className="text-muted-foreground mt-2">
                Your brochure is on its way. A UAE investor specialist will be
                in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 grid sm:grid-cols-2 gap-4"
              noValidate
            >
              <Field name="name" label="Full name" error={errors.name} />
              <Field
                name="email"
                label="Email"
                type="email"
                error={errors.email}
              />
              <Field name="whatsapp" label="WhatsApp" type="tel" />
              <SelectField
                name="country"
                label="Country"
                options={[
                  "India",
                  "United Kingdom",
                  "United States",
                  "United Arab Emirates",
                  "Pakistan",
                  "China",
                  "Iran",
                  "Jordan",
                  "Zimbabwe",
                  "Germany",
                ]}
                defaultValue="United Arab Emirates"
              />
              <SelectField
                name="budget"
                label="Budget"
                options={["£200k – £300k", "£300k – £500k", "£500k+"]}
              />
              <SelectField
                name="unit"
                label="Preferred unit"
                options={["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom"]}
              />
              <SelectField
                name="finance"
                label="Cash or mortgage"
                options={["Cash", "Mortgage", "Undecided"]}
                full
              />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Me the Brochure"}
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>
              </div>
              {submitError && (
                <p
                  className="sm:col-span-2 text-sm text-destructive"
                  role="alert"
                >
                  {submitError}
                </p>
              )}
              <p className="sm:col-span-2 text-xs text-muted-foreground">
                By submitting this form you consent to being contacted about
                this investment. We handle your data in line with GDPR — you
                can unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Consultation() {
  return (
    <section id="consultation" className="relative py-20 lg:py-24 overflow-hidden">
      <img
        src={consultationImg}
        alt="Private consultation with Dubai skyline view"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(16,42,67,0.85) 0%, rgba(27,27,27,0.75) 100%)",
        }}
      />
      <div className="relative container-forge text-white text-center max-w-3xl mx-auto reveal">
        <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
          Private Consultation
        </span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-white">
          Book your private investment consultation.
        </h2>
        <p className="mt-6 text-white/80 text-lg">
          Speak with our UK property specialists to discuss availability,
          investment projections and payment options — from anywhere in the
          UAE.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#brochure-form" className="btn-gold">
            <Video size={18} /> Book Zoom Meeting
          </a>
          <a href="#brochure-form" className="btn-outline">
            <Users size={18} /> Book Teams Meeting
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Can UAE residents buy property in the UK?",
      a: "Yes. UAE residents can freely purchase UK property with no restrictions. Our team supports the full process remotely.",
    },
    {
      q: "What is the minimum deposit?",
      a: "Reservations start with a 25% deposit. We can also introduce mortgage options for eligible investors.",
    },
    {
      q: "How is rental income handled?",
      a: "Our appointed property management partner handles tenants, income collection and remittance in AED or GBP.",
    },
    {
      q: "When is completion expected?",
      a: "Full completion details, payment schedule and construction milestones are included in the investment brochure.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 lg:py-20">
      <div className="container-forge max-w-4xl">
        <div className="reveal">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Common investor questions.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl md:text-2xl">
                    {it.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 text-muted-foreground max-w-3xl">{it.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      className="py-16 lg:py-20 text-white"
      style={{
        background: "linear-gradient(180deg, #7C7E7C 0%, #1B1B1B 100%)",
      }}
    >
      <div className="container-forge text-center max-w-4xl mx-auto reveal">
        <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
          Secure your position in Liverpool's{" "}
          <span className="gold-text">next growth district</span>.
        </h2>
        <p className="mt-6 text-white/70 text-lg">
          Download the investment brochure or speak with one of our UK property
          specialists today.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#brochure-form" className="btn-gold">
            Download Brochure <ArrowRight size={18} />
          </a>
          <a href="#consultation" className="btn-outline">
            Book UAE Investor Call
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="pt-20 pb-10 text-white/80"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="container-forge grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img
            src={logoImg}
            alt="The Forge Liverpool"
            className="h-16 w-auto object-contain"
            style={{ marginLeft: "-28px" }}
          />
        </div>
      </div>
      <div className="container-forge mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
        <div>&copy; {new Date().getFullYear()} The Forge Liverpool</div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.getElementById("top");
      const brochure = document.getElementById("brochure");
      const hasPassedHero = hero
        ? hero.getBoundingClientRect().bottom <= 80
        : false;
      const brochureRect = brochure?.getBoundingClientRect();
      const isBrochureVisible = brochureRect
        ? brochureRect.top < window.innerHeight && brochureRect.bottom > 80
        : false;

      setShowMobileCta(hasPassedHero && !isBrochureVisible);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (!showMobileCta) return null;

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-background/95 backdrop-blur border-t border-border">
        <a href="#brochure-form" className="btn-primary w-full">
          Get Investment Brochure <ArrowRight size={18} />
        </a>
      </div>
    </>
  );
}

export default function ForgeLandingPage() {
  useReveal();
  useSmoothHashScroll();
  return (
    <div className="TheForge min-h-screen">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <WhyLiverpool />
        <Regeneration />
        <TheForge />
        <Location />
        <RentalDemand />
        <InvestmentCase />
        <Amenities />
        <InvestmentSnapshot />
        <InvestorSupport />
        <LeadForm />
        <Consultation />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
