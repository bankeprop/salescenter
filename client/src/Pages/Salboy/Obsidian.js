import { useEffect, useRef, useState } from "react";
import "./Obsidian.css";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
    Play,
    Download,
    MapPin,
    Dumbbell,
    Film,
    UtensilsCrossed,
    Sofa,
    Briefcase,
    Building2,
    Trees,
    ShieldCheck,
    BadgeCheck,
    TrendingUp,
    ChevronDown,
} from "lucide-react";
import Nav from "./Nav";
import { Reveal, Counter, ParallaxImage } from "./motion-primitives";

import heroTower from "../../Assests/Salboy/hero-tower.jpg";
import interiorLiving from "../../Assests/Salboy/interior-living.jpg";
import interiorBedroom from "../../Assests/Salboy/interior-bedroom.jpg";
import amenitiesLounge from "../../Assests/Salboy/amenities-lounge.jpg";
import uaeInvestor from "../../Assests/Salboy/uae-investor.jpg";
import skyline from "../../Assests/Salboy/manchester-skyline.jpg";
import obsidianLogo from "../../Assests/Salboy/Obsidian_logo.png";
import locationMap from "../../Assests/Salboy/Map.png";
import gallery1 from "../../Assests/Salboy/gallery1.webp";
import gallery2 from "../../Assests/Salboy/gallery2.webp";
import gallery3 from "../../Assests/Salboy/gallery3.webp";
import gallery4 from "../../Assests/Salboy/gallery4.webp";
import gallery5 from "../../Assests/Salboy/gallery5.webp";
import gallery6 from "../../Assests/Salboy/gallery6.webp";
import gallery7 from "../../Assests/Salboy/gallery7.webp";
import gallery8 from "../../Assests/Salboy/gallery8.webp";
import gallery9 from "../../Assests/Salboy/gallery9.webp";
import gallery10 from "../../Assests/Salboy/gallery10.webp";
import gallery11 from "../../Assests/Salboy/gallery11.webp";
import gallery12 from "../../Assests/Salboy/gallery12.webp";
import aedSymbol from "../../Assests/Salboy/aed-symbol.png";

const webhookEndpoint = "https://script.google.com/macros/s/AKfycbxTrPUIKN5-vZAda8_PTCJ_Fdpry7a9P-SKrYNoXGuWIeRHnmb-AptkapEqihZdJiik2g/exec";

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 240]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} id="top" className="relative min-h-[100svh] w-full overflow-hidden lg:h-[100svh] lg:min-h-[720px]">
            <motion.div style={{ y, scale }} className="absolute inset-0">
                <img
                    src={heroTower}
                    alt="Obsidian Manchester tower at dusk"
                    className="h-full w-full object-cover animate-slow-zoom"
                    fetchPriority="high"
                />
                <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
                <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative z-10 flex min-h-[100svh] flex-col justify-start pb-24 pt-32 sm:pt-40 lg:h-full lg:justify-end lg:pt-40"
            >
                <div className="mx-auto w-full max-w-7xl px-6">
                    <Reveal delay={0.3}>
                        <h1 className="font-serif text-[18vw] leading-[0.78] tracking-tight text-white sm:text-8xl sm:leading-[0.95] lg:text-[9rem]">
                            Obsidian
                            <span className="block text-[15vw] leading-none italic text-gold-gradient sm:text-8xl sm:leading-[0.95] lg:text-[9rem]">
                                Manchester
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.5} y={20}>
                        <div className="mt-10 grid gap-7 sm:mt-8 sm:gap-10 lg:grid-cols-[1.2fr_1fr]">
                            <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                                A landmark collection of premium studios, one, two and three-bedroom apartments in
                                one of the UK's fastest-growing property markets. Contemporary city living.
                                Exceptional investment potential.
                            </p>

                            <div className="flex flex-col gap-4 lg:items-end">
                                <div className="flex flex-wrap gap-2 lg:justify-end">
                                    <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-gold">
                                        Free Stamp Duty*
                                    </span>
                                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/80">
                                        Up to 6% Gross Yield
                                    </span>
                                </div>
                                <div className="text-right">
                                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">
                                        Starting from
                                    </div>
                                    <div className="font-serif text-4xl text-white sm:text-5xl">£249,000</div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.7}>
                        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4">
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-charcoal shadow-[0_20px_60px_-20px_rgba(232,75,20,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_70px_-15px_rgba(232,75,20,0.7)]"
                            >
                                Register Your Interest
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.2em] text-white backdrop-blur transition hover:bg-white/10">
                                <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-charcoal">
                                    <Play className="h-3 w-3 fill-charcoal" />
                                </span>
                                Watch Development
                            </a>
                        </div>
                    </Reveal>
                </div>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
                >
                    <ChevronDown className="h-6 w-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* STAMP DUTY STRIP                                                    */
/* ------------------------------------------------------------------ */
function OfferStrip() {
    return (
        <div className="relative z-20 -mt-10 px-6">
            <Reveal>
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-2xl glass-panel shimmer px-6 py-5 md:px-10 md:py-6">
                    <div className="flex items-center gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-gradient text-charcoal">
                            <BadgeCheck className="h-6 w-6" />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Limited Offer</div>
                            <div className="font-serif text-xl text-white md:text-2xl">
                                Free Stamp Duty — Save more than £40,000*
                            </div>
                        </div>
                    </div>
                    <a
                        href="#investment"
                        className="hidden shrink-0 items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-charcoal md:inline-flex"
                    >
                        Discover Your Saving <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                </div>
            </Reveal>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* SECTION 1 — CITY LIVING + STATS                                     */
/* ------------------------------------------------------------------ */
function CityLiving() {
    const stats = [
        { label: "Apartments from", value: "£249K" },
        { label: "Expected Yield", value: "Up to 6%" },
        { label: "Payment Plan", value: "25 / 75" },
        { label: "Lease", value: "999 Yr" },
        { label: "Completion", value: "Q4 2026" },
        { label: "Reservation", value: "£2,000" },
    ];

    return (
        <section id="overview" className="relative py-20 md:py-28 lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
                <Reveal>
                    <ParallaxImage
                        src={interiorLiving}
                        alt="Contemporary living space"
                        className="aspect-[4/5] rounded-2xl"
                    />
                </Reveal>

                <div className="flex flex-col justify-center">
                    <Reveal>
                        <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
                            — Cutting-edge City Living
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-white md:text-6xl">
                            A landmark, not just an address.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-8 text-lg leading-relaxed text-white/70">
                            Obsidian is more than a place to live. It is a contemporary lifestyle destination
                            positioned moments from Manchester and Salford city centre.
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-white/70">
                            The 26-storey development introduces 250 premium residences with refined interiors,
                            modern architecture and outstanding resident facilities.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <a href="#contact" className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.25em] text-white transition hover:border-gold hover:text-gold">
                            <Download className="h-4 w-4" /> Download Brochure
                        </a>
                    </Reveal>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-6 md:mt-24">
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3 lg:grid-cols-6">
                    {stats.map((s, i) => (
                        <Reveal key={s.label} delay={i * 0.06}>
                            <div className="group h-full bg-charcoal/80 p-6 transition-colors hover:bg-graphite">
                                <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                                    {s.label}
                                </div>
                                <div className="mt-3 font-serif text-3xl text-number-gradient md:text-4xl">
                                    {s.value}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* SECTION 2 — APARTMENTS                                              */
/* ------------------------------------------------------------------ */
function Apartments() {
    const items = [
        { name: "Studio", price: "£249,000", img: interiorLiving },
        { name: "One Bedroom", price: "£312,000", img: interiorBedroom },
        { name: "Two Bedroom", price: "£376,000", img: interiorLiving },
        { name: "Three Bedroom", price: "£570,000", img: interiorBedroom },
    ];
    return (
        <section id="apartments" className="relative bg-graphite py-20 md:py-28 lg:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <Reveal>
                            <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
                                — The Collection
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-white md:text-6xl">
                                Exceptional interiors,
                                <br />
                                <span className="italic text-gold-gradient">effortlessly refined.</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <p className="max-w-md text-white/60">
                            Every residence at Obsidian is shaped by considered materials, generous light and
                            elevated finishes — designed for city life at its most seamless.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-14 grid gap-8 md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((a, i) => (
                        <Reveal key={a.name} delay={i * 0.08}>
                            <motion.article
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal"
                            >
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={a.img}
                                        alt={a.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-transparent p-6">
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                                        Apartment
                                    </div>
                                    <div className="mt-1 flex items-end justify-between gap-4">
                                        <h3 className="font-serif text-2xl text-white">{a.name}</h3>
                                        <ArrowRight className="h-5 w-5 -translate-x-2 text-gold opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                    </div>
                                    <div className="mt-3 text-sm text-white/70">
                                        From <span className="text-gold">{a.price}</span>
                                    </div>
                                </div>
                            </motion.article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* SECTION 3 — AMENITIES                                               */
/* ------------------------------------------------------------------ */
function Amenities() {
    const items = [
        { name: "Gymnasium", icon: Dumbbell },
        { name: "Cinema Room", icon: Film },
        { name: "Private Dining", icon: UtensilsCrossed },
        { name: "Residents Lounge", icon: Sofa },
        { name: "Co-working Spaces", icon: Briefcase },
        { name: "Reception", icon: Building2 },
        { name: "Landscaped Gardens", icon: Trees },
        { name: "24/7 Security", icon: ShieldCheck },
    ];
    return (
        <section id="amenities" className="relative overflow-hidden py-20 md:py-28 lg:py-32">
            <ParallaxImage
                src={amenitiesLounge}
                alt=""
                className="absolute inset-0 h-full w-full opacity-30"
                intensity={80}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
            <div className="relative mx-auto max-w-7xl px-6">
                <Reveal>
                    <div className="text-[11px] uppercase tracking-[0.4em] text-gold">— Amenities</div>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-white md:text-6xl">
                        Live well, <span className="italic text-gold-gradient">without compromise.</span>
                    </h2>
                </Reveal>

                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((a, i) => (
                        <Reveal key={a.name} delay={i * 0.05}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-colors hover:border-gold/40"
                            >
                                <div className="mb-8 grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold-gradient group-hover:text-charcoal">
                                    <a.icon className="h-6 w-6" />
                                </div>
                                <div className="font-serif text-xl text-white">{a.name}</div>
                                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/40">
                                    Residents Only
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* SECTION 4 — LOCATION                                                */
/* ------------------------------------------------------------------ */
function Gallery() {
    const images = [
        gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
        gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
    ];

    return (
        <section id="gallery" className="relative bg-graphite pb-5 pt-20 md:pb-8 md:pt-28 lg:pt-32">
            <div className="mx-auto max-w-7xl px-6">
                <Reveal>
                    <div className="text-[11px] uppercase tracking-[0.4em] text-gold">— Gallery</div>
                </Reveal>
                <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <Reveal delay={0.1}>
                        <h2 className="max-w-3xl font-serif text-5xl leading-[1.05] text-white md:text-6xl">
                            Designed for a life of
                            <span className="block italic text-gold-gradient">effortless distinction.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="max-w-md text-white/60">
                            Explore the refined interiors, considered amenities and landmark architecture of
                            Obsidian Manchester.
                        </p>
                    </Reveal>
                </div>

                <div className="obsidian-gallery-track -mx-6 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <Reveal
                            key={image}
                            delay={(index % 3) * 0.06}
                            className="min-w-[85%] snap-center sm:min-w-0"
                        >
                            <figure className="group aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-charcoal">
                                <img
                                    src={image}
                                    alt={`Obsidian Manchester gallery view ${index + 1}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                />
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Location() {
    const pins = [
        { name: "Spinningfields", time: "6 min walk", x: "32%", y: "42%" },
        { name: "Deansgate", time: "8 min walk", x: "48%", y: "55%" },
        { name: "Selfridges", time: "12 min walk", x: "62%", y: "38%" },
        { name: "Harvey Nichols", time: "12 min walk", x: "58%", y: "48%" },
        { name: "Aviva Studios", time: "5 min walk", x: "25%", y: "60%" },
        { name: "Soho House", time: "10 min walk", x: "70%", y: "52%" },
        { name: "Salford Central", time: "3 min walk", x: "18%", y: "35%" },
    ];
    return (
        <section id="location" className="bg-graphite pb-20 pt-5 md:pb-28 md:pt-8 lg:pb-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
                    <div className="flex flex-col justify-center">
                        <Reveal>
                            <div className="text-[11px] uppercase tracking-[0.4em] text-gold">— Location</div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-white md:text-6xl">
                                Manchester at your <span className="italic text-gold-gradient">fingertips.</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="mt-8 text-white/70">
                                Trinity Way places Obsidian at the pivot of two city centres — a short walk to
                                Manchester's finest culture, retail and business districts.
                            </p>
                        </Reveal>
                        <div className="mt-10 space-y-3">
                            {pins.map((p, i) => (
                                <Reveal key={p.name} delay={i * 0.05}>
                                    <div className="group flex items-center justify-between rounded-xl border border-white/10 bg-charcoal/60 p-4 transition-colors hover:border-gold/40">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="h-4 w-4 text-gold" />
                                            <span className="text-white">{p.name}</span>
                                        </div>
                                        <span className="text-xs uppercase tracking-[0.2em] text-white/50 transition-colors group-hover:text-gold">
                                            {p.time}
                                        </span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <Reveal delay={0.2}>
                        <div className="relative flex aspect-[4/5] items-center overflow-hidden rounded-2xl border border-white/10 bg-black p-3 sm:p-6 lg:aspect-auto">
                            <img
                                src={locationMap}
                                alt="Map showing Obsidian Manchester and nearby city-centre destinations"
                                loading="lazy"
                                className="h-auto w-full object-contain"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* SECTION 5 — BUSINESS                                                */
/* ------------------------------------------------------------------ */
function Business() {
    const stats = [
        { value: 80, prefix: "", suffix: "", label: "FTSE 100 Companies" },
        { value: 86, prefix: "£", suffix: "B", label: "Economy" },
        { value: 65000, prefix: "", suffix: "", label: "Future Jobs" },
        { value: 1, prefix: "#", suffix: "", label: "City Region Outside London" },
    ];
    return (
        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
            <ParallaxImage
                src={skyline}
                alt=""
                intensity={140}
                className="absolute inset-0 h-full w-full opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
            <div className="relative mx-auto max-w-7xl px-6 text-center">
                <Reveal>
                    <div className="text-[11px] uppercase tracking-[0.4em] text-gold">— Manchester</div>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="mx-auto mt-4 max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-7xl">
                        A city built for <span className="italic text-gold-gradient">business.</span>
                    </h2>
                </Reveal>
                <div className="mt-14 grid gap-8 md:mt-16 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <Reveal key={s.label} delay={i * 0.1}>
                            <div className="border-t border-white/10 pt-8 text-left">
                                <div className="font-serif text-6xl text-number-gradient md:text-7xl">
                                    {s.label.includes("City Region") ? (
                                        <span>Largest</span>
                                    ) : (
                                        <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                                    )}
                                </div>
                                <div className="mt-4 text-sm uppercase tracking-[0.25em] text-white/60">
                                    {s.label}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* SECTION 6 — TALENT                                                  */
/* ------------------------------------------------------------------ */
function Talent() {
    const stats = [
        { value: 120670, suffix: "", label: "Students" },
        { value: 51.5, suffix: "%", label: "Graduate Retention", decimals: 1 },
        { value: 5000, suffix: "", label: "Annual City-Centre Growth" },
        { value: 33, suffix: "%", label: "Residents Rent" },
    ];
    return (
        <section className="bg-graphite py-20 md:py-28 lg:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2">
                    <div>
                        <Reveal>
                            <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
                                — People & Talent
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-white md:text-6xl">
                                Powered by <span className="italic text-gold-gradient">a young city.</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="mt-8 text-white/70">
                                Manchester holds the largest population of 25–29-year-olds outside London — a young,
                                educated workforce driving one of the strongest rental markets in Europe.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((s, i) => (
                            <Reveal key={s.label} delay={i * 0.08}>
                                <div className="h-full rounded-2xl border border-white/10 bg-charcoal/60 p-8">
                                    <div className="font-serif text-4xl text-number-gradient md:text-5xl">
                                        <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                                    </div>
                                    <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/50">
                                        {s.label}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* SECTION 7 — INVESTMENT + PAYMENT                                    */
/* ------------------------------------------------------------------ */
function Investment() {
    const features = [
        { title: "Free Stamp Duty", note: "Potential saving over £40,000" },
        { title: "Apartments from £249,000", note: "Entry-level city-centre pricing" },
        { title: "Up to 6% Gross Yield", note: "Strong rental fundamentals" },
        { title: "25% on Exchange", note: "75% on completion" },
        { title: "999-Year Leasehold", note: "Long-term ownership" },
        { title: "10-Year Warranty", note: "New-build protection" },
        { title: "Q4 2026 Completion", note: "Registered developer" },
        { title: "Interest Free Payment Plan", note: "Managed through completion" },
    ];
    return (
        <section id="investment" className="relative py-20 md:py-28 lg:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl">
                    <Reveal>
                        <div className="text-[11px] uppercase tracking-[0.4em] text-gold">— Investment</div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-white md:text-6xl">
                            A compelling <span className="italic text-gold-gradient">opportunity.</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((f, i) => (
                        <Reveal key={f.title} delay={i * 0.04}>
                            <div className="group h-full bg-charcoal p-8 transition-colors hover:bg-graphite">
                                <TrendingUp className="h-5 w-5 text-gold transition-transform group-hover:scale-110" />
                                <div className="mt-6 font-serif text-xl text-white">{f.title}</div>
                                <div className="mt-2 text-sm text-white/50">{f.note}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Payment plan */}
                <div id="payment" className="mt-20 md:mt-28">
                    <Reveal>
                        <div className="text-[11px] uppercase tracking-[0.4em] text-gold">— Payment Plan</div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h3 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                            Three simple steps to ownership.
                        </h3>
                    </Reveal>

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                step: "01",
                                label: "Reservation Deposit",
                                value: (
                                    <>
                                        <span>£2,000 /</span>
                                        <span className="inline-flex items-baseline">
                                            <img
                                                src={aedSymbol}
                                                alt="UAE dirham"
                                                className="mr-1 inline-block h-[0.72em] w-[0.72em] self-center object-contain invert"
                                            />
                                            10,000
                                        </span>
                                    </>
                                ),
                            },
                            { step: "02", label: "Exchange", value: "25%" },
                            { step: "03", label: "Completion", value: "75%" },
                        ].map((s, i) => (
                            <Reveal key={s.step} delay={i * 0.15}>
                                <div className="relative rounded-2xl border border-white/10 bg-graphite p-8">
                                    <div className="absolute -top-4 left-8 rounded-full bg-gold-gradient px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-charcoal">
                                        Step {s.step}
                                    </div>
                                    <div className="mt-4 text-sm uppercase tracking-[0.25em] text-white/50">
                                        {s.label}
                                    </div>
                                    <div className="mt-4 flex flex-wrap items-baseline gap-x-2 font-serif text-4xl text-number-gradient lg:text-5xl">
                                        {s.value}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.3}>
                        <div className="mt-16 text-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-sm uppercase tracking-[0.2em] text-charcoal transition hover:-translate-y-0.5"
                            >
                                Request Current Availability
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* UAE SECTION                                                         */
/* ------------------------------------------------------------------ */
function UAE() {
    const items = [
        "UAE-based consultants",
        "Latest availability",
        "Floor plans & pricing",
        "Legal support",
        "Lettings & management",
        "Completion updates",
    ];
    return (
        <section className="relative overflow-hidden bg-graphite py-20 md:py-28 lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
                <Reveal>
                    <ParallaxImage
                        src={uaeInvestor}
                        alt="UAE investor consultation"
                        className="aspect-[4/5] rounded-2xl"
                    />
                </Reveal>
                <div>
                    <Reveal>
                        <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
                            — Global Investors
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-white md:text-6xl">
                            UK property investment,
                            <span className="block italic text-gold-gradient">supported from the UAE.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-8 text-white/70">
                            A dedicated consultancy team in the UAE — end-to-end guidance from reservation to
                            rental income, in your timezone and your language.
                        </p>
                    </Reveal>
                    <div className="mt-10 grid grid-cols-2 gap-3">
                        {items.map((t, i) => (
                            <Reveal key={t} delay={i * 0.05}>
                                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-charcoal/60 p-4">
                                    <BadgeCheck className="h-4 w-4 shrink-0 text-gold" />
                                    <span className="text-sm text-white/85">{t}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={0.4}>
                        <a
                            href="#contact"
                            className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/50 px-6 py-3 text-xs uppercase tracking-[0.25em] text-gold transition hover:bg-gold hover:text-charcoal"
                        >
                            Speak to a Consultant <ArrowRight className="h-4 w-4" />
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* LEAD FORM                                                           */
/* ------------------------------------------------------------------ */
function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        const formElement = event.currentTarget;
        const form = new FormData(formElement);
        const firstName = String(form.get("firstName") || "").trim();
        const lastName = String(form.get("lastName") || "").trim();
        const payload = new FormData();

        payload.set("name", `${firstName} ${lastName}`.trim());
        payload.set("email", String(form.get("email") || "").trim());
        payload.set("phone", String(form.get("phone") || "").replace(/\D/g, ""));
        payload.set("message", [
            `Country: ${form.get("country") || "Not provided"}`,
            `Apartment Type: ${form.get("apartmentType") || "Not selected"}`,
            `Investment Budget: ${form.get("budget") || "Not selected"}`,
            `Message: ${String(form.get("message") || "No additional message").trim()}`,
        ].join("\n"));
        payload.set("campaignName", "SalboyObsidianManchester-AS-MICH-657792");
        payload.set("pageUrl", window.location.href);

        try {
            setIsSubmitting(true);
            await fetch(webhookEndpoint, {
                method: "POST",
                body: payload,
                mode: "no-cors",
            });
            formElement.reset();
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden py-20 md:py-28 lg:py-32">
            <ParallaxImage
                src={interiorBedroom}
                alt=""
                intensity={100}
                className="absolute inset-0 h-full w-full opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal" />
            <div className="relative mx-auto max-w-4xl px-6">
                <Reveal>
                    <div className="glass-panel rounded-3xl p-8 shadow-[var(--shadow-elegant)] md:p-12">
                        <div className="text-[11px] uppercase tracking-[0.4em] text-gold">
                            — Register Your Interest
                        </div>
                        <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
                            Receive availability, floor plans & your personalised{" "}
                            <span className="italic text-gold-gradient">stamp-duty saving estimate.</span>
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 grid gap-4 md:grid-cols-2"
                        >
                            {[
                                ["First Name", "text", "firstName", true, "given-name"],
                                ["Last Name", "text", "lastName", true, "family-name"],
                                ["Email", "email", "email", true, "email"],
                                ["Phone", "tel", "phone", true, "tel"],
                                ["Country", "text", "country", false, "country-name"],
                            ].map(([label, type, name, required, autoComplete]) => (
                                <label key={label} className="block">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                                        {label}
                                    </span>
                                    <input
                                        type={type}
                                        name={name}
                                        required={required}
                                        autoComplete={autoComplete}
                                        className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-white outline-none placeholder:text-white/30 focus:border-gold"
                                        placeholder={label}
                                    />
                                </label>
                            ))}
                            <label className="block">
                                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                                    Apartment Type
                                </span>
                                <select
                                    name="apartmentType"
                                    defaultValue=""
                                    className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-white outline-none focus:border-gold"
                                >
                                    <option value="" className="bg-charcoal">
                                        Select
                                    </option>
                                    {["Studio", "One Bedroom", "Two Bedroom", "Three Bedroom"].map((v) => (
                                        <option key={v} value={v} className="bg-charcoal">
                                            {v}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="block md:col-span-2">
                                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                                    Investment Budget
                                </span>
                                <select
                                    name="budget"
                                    defaultValue=""
                                    className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-white outline-none focus:border-gold"
                                >
                                    <option value="" className="bg-charcoal">
                                        Select
                                    </option>
                                    {["£250K – £350K", "£350K – £500K", "£500K – £750K", "£750K+"].map((v) => (
                                        <option key={v} value={v} className="bg-charcoal">
                                            {v}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="block md:col-span-2">
                                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                                    Message
                                </span>
                                <textarea
                                    name="message"
                                    rows={3}
                                    className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-white outline-none placeholder:text-white/30 focus:border-gold"
                                    placeholder="Tell us about your interest"
                                />
                            </label>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-sm uppercase tracking-[0.2em] text-charcoal transition hover:-translate-y-0.5 md:col-span-2"
                            >
                                {isSubmitting ? "Submitting..." : "Get Investment Details"} <ArrowRight className="h-4 w-4" />
                            </button>
                            {isSubmitted && (
                                <p className="text-center text-sm text-white/70 md:col-span-2" role="status">
                                    Thank you. Your request has been received.
                                </p>
                            )}
                        </form>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
                            <span className="flex items-center gap-2">
                                <ShieldCheck className="h-3 w-3 text-gold" /> RICS Registered
                            </span>
                            <span className="flex items-center gap-2">
                                <BadgeCheck className="h-3 w-3 text-gold" /> 10-Year Warranty
                            </span>
                            <span className="flex items-center gap-2">
                                <Building2 className="h-3 w-3 text-gold" /> Registered Developer
                            </span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* FINAL CTA                                                           */
/* ------------------------------------------------------------------ */
function FinalCTA() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
            <ParallaxImage
                src={heroTower}
                alt=""
                intensity={150}
                className="absolute inset-0 h-full w-full opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
            <div className="relative mx-auto max-w-5xl px-6 text-center">
                <Reveal>
                    <div className="text-[11px] uppercase tracking-[0.4em] text-gold">— Final Invitation</div>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="mx-auto mt-6 font-serif text-5xl leading-[1.05] text-white md:text-7xl">
                        Own a premium Manchester apartment
                        <span className="block italic text-gold-gradient">
                            from £249,000 /{" "}
                            <span className="inline-flex items-baseline whitespace-nowrap">
                                <img
                                    src={aedSymbol}
                                    alt="UAE dirham"
                                    className="mr-1 inline-block h-[0.7em] w-[0.7em] self-center object-contain invert"
                                />
                                123,000
                            </span>
                            .
                        </span>
                    </h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mx-auto mt-8 max-w-2xl text-white/70">
                        Benefit from an exceptional city-centre address, strong rental-demand fundamentals and
                        an exclusive free stamp-duty offer.
                    </p>
                </Reveal>

                <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
                    {[
                        "Free Stamp Duty",
                        "Up to 6% Gross Yield",
                        "25% Exchange / 75% Completion",
                    ].map((t, i) => (
                        <Reveal key={t} delay={0.3 + i * 0.08}>
                            <div className="glass-panel rounded-xl p-5 text-sm text-white">{t}</div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.6}>
                    <a
                        href="#contact"
                        className="mt-14 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-10 py-5 text-sm uppercase tracking-[0.25em] text-charcoal shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5"
                    >
                        Register Now <ArrowRight className="h-4 w-4" />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */
function Footer() {
    return (
        <footer className="border-t border-white/10 bg-charcoal py-16">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
                <div className="md:col-span-2">
                    <img className="h-auto w-56 md:w-64" src={obsidianLogo} alt="Obsidian Manchester" />
                    <p className="mt-4 max-w-sm text-sm text-white/50">
                        Trinity Way, Manchester City Centre. A landmark 26-storey collection of premium
                        residences.
                    </p>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 text-[10px] leading-relaxed text-white/40">
                <p>
                    *Stamp Duty offer subject to availability, reservation terms and applicable purchase
                    value. Yields quoted are indicative and not guaranteed. Computer-generated imagery for
                    illustrative purposes.
                </p>
                <p className="mt-6">© {new Date().getFullYear()} Obsidian Manchester. All rights reserved.</p>
            </div>
        </footer>
    );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */
function Obsidian() {
    const [showMobileCta, setShowMobileCta] = useState(false);

    useEffect(() => {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;
        const handleScroll = () => setShowMobileCta(window.scrollY > 120);

        document.documentElement.style.scrollBehavior = "smooth";
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document.documentElement.style.scrollBehavior = previousScrollBehavior;
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="obsidian-page dark min-h-screen bg-charcoal text-white antialiased">
            <Nav />
            <main>
                <Hero />
                <OfferStrip />
                <CityLiving />
                <Apartments />
                <Amenities />
                <Gallery />
                <Location />
                <Business />
                <Talent />
                <Investment />
                <UAE />
                <LeadForm />
                <FinalCTA />
            </main>
            <Footer />

            {/* Mobile sticky CTA */}
            <div
                className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 md:hidden ${showMobileCta
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-6 opacity-0"
                    }`}
            >
                <a
                    href="#contact"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-4 text-sm uppercase tracking-[0.2em] text-charcoal shadow-[var(--shadow-gold)]"
                >
                    Register Your Interest <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </div>
    );
}

export default Obsidian;
