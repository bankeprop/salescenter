import React, { useEffect, useRef, useState } from "react";
import "./kingsRoad.css";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { DirhamSymbol } from "dirham/react";

const WEBHOOK_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbxTrPUIKN5-vZAda8_PTCJ_Fdpry7a9P-SKrYNoXGuWIeRHnmb-AptkapEqihZdJiik2g/exec";

/* Official Berkeley International imagery (King's Road Park development page). */
const IMG = {
    heroExterior: require("../../Assests/Berkeley/heroExterior.jpg"),
    exterior2: require("../../Assests/Berkeley/exterior2.jpg"),
    krp1: require("../../Assests/Berkeley/krp1.jpg"),
    krp2: require("../../Assests/Berkeley/krp2.jpg"),
    krp3: require("../../Assests/Berkeley/krp3.jpg"),
    krp4: require("../../Assests/Berkeley/krp4.jpg"),
    krp5: require("../../Assests/Berkeley/krp5.jpg"),
    krp7: require("../../Assests/Berkeley/krp7.jpg"),
    krp9: require("../../Assests/Berkeley/krp9.jpg"),
    krp10: require("../../Assests/Berkeley/krp10.jpg"),
    krp11: require("../../Assests/Berkeley/krp11.jpg"),
    krp12: require("../../Assests/Berkeley/krp12.jpg"),
    krp15: require("../../Assests/Berkeley/krp15.jpg"),
    krp17: require("../../Assests/Berkeley/krp17.jpg"),
    balcony: require("../../Assests/Berkeley/balcony.jpg"),
    bathroom: require("../../Assests/Berkeley/bathroom.jpg"),
    bedroom2: require("../../Assests/Berkeley/bedroom2.jpg"),
    bedroom3: require("../../Assests/Berkeley/bedroom3.jpg"),
    bedroom5: require("../../Assests/Berkeley/bedroom5.jpg"),
    bedroom7: require("../../Assests/Berkeley/bedroom7.jpg"),
    dining1: require("../../Assests/Berkeley/dining1.jpg"),
    dining2: require("../../Assests/Berkeley/dining2.jpg"),
    kitchen1: require("../../Assests/Berkeley/kitchen1.jpg"),
    kitchen2: require("../../Assests/Berkeley/kitchen2.jpg"),
    living1: require("../../Assests/Berkeley/living1.jpg"),
    living2: require("../../Assests/Berkeley/living2.jpg"),
    living3: require("../../Assests/Berkeley/living3.jpg"),
    pool: require("../../Assests/Berkeley/pool.jpg"),
    fitness: require("../../Assests/Berkeley/fitness.jpg"),
    games: require("../../Assests/Berkeley/games.jpg"),
    golf: require("../../Assests/Berkeley/golf.jpg"),
    lobby: require("../../Assests/Berkeley/lobby.jpg"),
    privateDining: require("../../Assests/Berkeley/privateDining.jpg"),
    facilities1: require("../../Assests/Berkeley/facilities1.webp"),
    facilities2: require("../../Assests/Berkeley/facilities2.webp"),
    facilities3: require("../../Assests/Berkeley/facilities3.webp"),
    facilities4: require("../../Assests/Berkeley/facilities4.jpeg"),
    siteMap: require("../../Assests/Berkeley/siteMap.png"),
};

/* ---------- Small building blocks ---------- */

function Reveal({
    children,
    delay = 0,
    y = 24,
    className = "",
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function Counter({ to, suffix = "", decimals = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!inView) return;
        const start = performance.now();
        const duration = 1600;
        let raf = 0;
        const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [inView, to]);
    return (
        <span ref={ref}>
            {val.toFixed(decimals)}
            {suffix}
        </span>
    );
}

function ParallaxImage({
    src,
    alt,
    className = "",
    ratio = "aspect-[4/5]",
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
    return (
        <div ref={ref} className={`relative overflow-hidden ${ratio} ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                style={{ y }}
                className="absolute inset-0 h-[116%] w-full object-cover"
            />
        </div>
    );
}

/* ---------- Navigation ---------- */

const NAV_ITEMS = [
    { label: "Overview", href: "#overview" },
    { label: "Residences", href: "#residences" },
    { label: "Amenities", href: "#amenities" },
    { label: "Lifestyle", href: "#lifestyle" },
    { label: "Location", href: "#location" },
    { label: "Investment", href: "#investment" },
    { label: "Developer", href: "#developer" },
    { label: "Contact", href: "#register" },
];

function Nav() {
    const [open, setOpen] = useState(false);
    const [showMobileCta, setShowMobileCta] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowMobileCta(window.scrollY > 120);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/95 text-warm backdrop-blur-xl lg:sticky"
            >
                <div className="container-editorial flex items-center justify-between gap-5 py-4">
                    <a href="#top" className="flex shrink-0 items-center" aria-label="One King's Road Park — Fulham, London SW6">
                        <img
                            src={require("../../Assests/Berkeley/Logo.png")}
                            alt="One King's Road Park"
                            className="h-14 w-auto object-contain md:h-16"
                        />
                    </a>
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                        {NAV_ITEMS.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                className="whitespace-nowrap text-[10px] tracking-[0.18em] uppercase text-warm/80 transition-colors hover:text-warm xl:text-[11px] xl:tracking-[0.2em]"
                            >
                                {n.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <div className="hidden lg:block">
                            <a
                                href="#register"
                                className="btn-bronze btn-bronze-hover whitespace-nowrap"
                            >
                                Register Interest
                            </a>
                        </div>
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setOpen((v) => !v)}
                            className="inline-flex h-11 w-11 items-center justify-center text-warm lg:hidden"
                        >
                            <div className="flex flex-col gap-1.5">
                                <span className="block h-px w-6 bg-current" />
                                <span className="block h-px w-6 bg-current" />
                            </div>
                        </button>
                    </div>
                </div>
                {open && (
                    <div className="lg:hidden bg-warm border-t border-border">
                        <div className="container-editorial flex flex-col py-6 gap-4">
                            {NAV_ITEMS.map((n) => (
                                <a
                                    key={n.href}
                                    href={n.href}
                                    onClick={() => setOpen(false)}
                                    className="text-[11px] tracking-[0.24em] uppercase text-ink/80 hover:text-bronze"
                                >
                                    {n.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </header>
            <div className="h-[89px] lg:hidden" aria-hidden="true" />
            <div
                className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-charcoal/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-all duration-300 lg:hidden ${showMobileCta
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-full opacity-0"
                    }`}
            >
                <a href="#register" className="btn-bronze btn-bronze-hover flex w-full">
                    Register Interest
                </a>
            </div>
        </>
    );
}

/* ---------- Hero ---------- */

function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const words = ["One", "King's", "Road", "Park"];
    return (
        <section id="top" ref={ref} className="relative min-h-[calc(100dvh-89px)] overflow-hidden bg-charcoal lg:h-[100dvh] lg:min-h-[720px]">
            <motion.div style={{ y }} className="absolute inset-0">
                <img
                    src={IMG.heroExterior}
                    alt="Aerial view of One King's Road Park, Fulham"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
            </motion.div>

            <motion.div style={{ opacity }} className="relative z-10 flex min-h-[calc(100dvh-89px)] flex-col justify-start pb-16 pt-10 lg:h-full lg:min-h-0 lg:justify-end lg:pb-28 lg:pt-0">
                <div className="container-editorial text-warm">
                    {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="eyebrow text-bronze-light"
          >
            Fulham · London SW6
          </motion.p> */}
                    <h1 className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-serif text-[13vw] leading-[0.95] md:text-[7rem] lg:text-[8rem]">
                        {words.map((w, i) => (
                            <motion.span
                                key={w}
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                transition={{ delay: 0.5 + i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                                className="inline-block"
                            >
                                {w}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-8 max-w-xl text-warm/85 font-light text-lg md:text-xl leading-relaxed"
                    >
                        Landmark London living, moments from the iconic King's Road. A distinguished
                        collection of suites and one to four-bedroom residences set within six acres
                        of beautifully landscaped grounds.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-warm/20 border border-warm/20 max-w-3xl"
                    >
                        {[
                            { k: "Up to 5%", v: "Expected Rental Yield" },
                            { k: "999 Years", v: "Leasehold" },
                            { k: "20%", v: "Payable Before Completion" },
                        ].map((s) => (
                            <div key={s.v} className="bg-charcoal/50 backdrop-blur-sm p-6">
                                <div className="font-serif text-3xl md:text-4xl text-warm">{s.k}</div>
                                <div className="mt-2 text-[10px] tracking-[0.28em] uppercase text-warm/70">{s.v}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <a href="#register" className="btn-bronze btn-bronze-hover">
                            Register Your Interest
                        </a>
                        <a href="#register" className="btn-ghost-light">
                            Download Brochure
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm/70">
                <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-8 w-px bg-warm/50"
                />
            </div>
        </section>
    );
}

/* ---------- Payment strip ---------- */

function PaymentStrip() {
    const steps = [
        { pct: "10%", label: "On Exchange of Contracts" },
        { pct: "10%", label: "One Year Later" },
        { pct: "80%", label: "On Completion" },
    ];
    return (
        <section className="bg-charcoal text-warm py-16 md:py-24">
            <div className="container-editorial">
                <Reveal>
                    <p className="eyebrow text-bronze-light text-center">Structured Payment Plan</p>
                    <h2 className="mt-4 text-center font-serif text-3xl md:text-5xl max-w-3xl mx-auto text-balance leading-tight">
                        Secure your London residence with a 20% pre-completion payment
                    </h2>
                </Reveal>
                <div className="mt-14 grid md:grid-cols-3 gap-px bg-warm/10">
                    {steps.map((s, i) => (
                        <Reveal key={s.label} delay={i * 0.1} className="bg-charcoal">
                            <div className="p-10 flex flex-col items-center text-center">
                                <span className="text-[10px] tracking-[0.3em] uppercase text-bronze-light">Stage {i + 1}</span>
                                <span className="mt-6 font-serif text-6xl md:text-7xl text-warm">{s.pct}</span>
                                <span className="mt-4 text-sm text-warm/70 tracking-wide">{s.label}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <p className="mt-8 text-xs text-warm/50 text-center italic max-w-2xl mx-auto">
                    Reservation fees and payment terms are subject to the selected residence, contract terms and purchaser eligibility.
                </p>
            </div>
        </section>
    );
}

/* ---------- Landmark Living ---------- */

function LandmarkLiving() {
    return (
        <section id="overview" className="py-20 md:py-28 bg-warm">
            <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <Reveal className="lg:col-span-6">
                    <ParallaxImage src={IMG.exterior2} alt="Two elegantly sculpted towers rising above Fulham" ratio="aspect-[4/5]" />
                </Reveal>
                <div className="lg:col-span-6">
                    <Reveal>
                        <p className="eyebrow">Section One</p>
                        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
                            This is landmark
                            <br />
                            <em className="not-italic text-bronze">London living.</em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/75 max-w-xl">
                            <p>
                                One King's Road Park is an exceptional new residential destination created by
                                Berkeley Group in collaboration with Foster + Partners, MAWD and Gillespies.
                            </p>
                            <p>
                                Set just 60 metres from the iconic King's Road, the development introduces two
                                elegantly sculpted towers rising 28 and 38 storeys, complemented by a
                                seven-storey podium and beautifully landscaped gardens.
                            </p>
                            <p>
                                Launching first, No.1 at One King's Road Park offers 143 thoughtfully designed
                                homes combining contemporary architecture, refined interiors and an exceptional
                                range of residents' facilities.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {[
                                { k: "Suites – 4 Bed", v: "Residences" },
                                { k: "Up to 5%", v: "Rental Yield" },
                                { k: "10/10/80", v: "Payment Plan" },
                                { k: "999 yrs", v: "Tenure" },
                                { k: "Q3 2029", v: "Completion" },
                                {
                                    k: (
                                        <span className="inline-flex items-center">
                                            <DirhamSymbol size="0.75em" weight="bold" className="mr-1" />
                                            250K
                                        </span>
                                    ),
                                    v: "Reservation",
                                },
                            ].map((s) => (
                                <div key={s.v} className="border-t border-border pt-4">
                                    <div className="font-serif text-2xl text-ink">{s.k}</div>
                                    <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-ink/50">{s.v}</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ---------- Residences ---------- */

const RESIDENCES = [
    { key: "Suites", count: "14 residences", img: IMG.bedroom5, desc: "Elegantly proportioned suites for pied-à-terre and investment." },
    { key: "1 Bedroom", count: "13 residences", img: IMG.living1, desc: "Refined one-bedroom homes with open living and city outlooks." },
    { key: "2 Bedroom", count: "82 residences", img: IMG.living2, desc: "The signature collection — dual-aspect layouts and river views." },
    { key: "3 Bedroom", count: "28 residences", img: IMG.dining1, desc: "Family homes with generous entertaining and private terraces." },
    { key: "4 Bedroom", count: "6 residences", img: IMG.kitchen1, desc: "The rarest lateral residences with panoramic London vistas." },
];

function Residences() {
    return (
        <section id="residences" className="py-20 md:py-28 bg-muted">
            <div className="container-editorial">
                <Reveal>
                    <p className="eyebrow">Section Two</p>
                    <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
                            Exceptional
                            <br />
                            <em className="not-italic text-bronze">residences.</em>
                        </h2>
                        <p className="max-w-md text-ink/70 leading-relaxed">
                            143 residences across 28 levels in No.1 — every home designed with clarity,
                            precision and a refined contemporary character. Interiors by MAWD.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
                    {RESIDENCES.map((residence, index) => (
                        <Reveal key={residence.key} delay={index * 0.06} className="h-full bg-warm">
                            <article className="flex h-full flex-col p-6 md:p-8">
                                <h3 className="font-serif text-2xl text-ink md:text-3xl">{residence.key}</h3>
                                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-bronze">{residence.count}</p>
                                <p className="mt-6 text-sm leading-relaxed text-ink/60">{residence.desc}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- Amenities ---------- */

const AMENITIES = [
    "25-metre swimming pool",
    "Vitality pool",
    "Fully equipped gymnasium",
    "Fitness studios",
    "Sauna & steam room",
    "Treatment room",
    "Two private cinemas",
    "Virtual golf simulator",
    "Arcade games room",
    "Residents' lounges",
    "Private dining room",
    "Music rooms",
    "Karaoke room",
    "Co-working spaces",
    "Meeting rooms",
    "24-hour concierge",
    "Landscaped gardens",
    "9,000 sq ft roof terrace",
];

function Amenities() {
    return (
        <section id="amenities" className="bg-charcoal text-warm py-20 md:py-28">
            <div className="container-editorial">
                <div className="grid lg:grid-cols-12 gap-12 items-end">
                    <Reveal className="lg:col-span-7">
                        <p className="eyebrow text-bronze-light">Section Three</p>
                        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
                            Live well without
                            <br />
                            <em className="not-italic text-bronze-light">compromise.</em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15} className="lg:col-span-5">
                        <p className="text-warm/70 leading-relaxed">
                            Residents enjoy access to more than{" "}
                            <span className="text-warm font-medium">
                                <Counter to={25000} />+ sq ft
                            </span>{" "}
                            of private wellness, leisure, social and working spaces — thoughtfully distributed
                            across the development. The elevated Level 32 residents' club adds a private bar,
                            lounge and panoramic terraces above the Thames.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-16 grid md:grid-cols-4 gap-4">
                    <Reveal className="md:col-span-2 md:row-span-2">
                        <ParallaxImage src={IMG.pool} alt="25-metre swimming pool" ratio="aspect-square" />
                    </Reveal>
                    <Reveal delay={0.1}><ParallaxImage src={IMG.fitness} alt="Fitness suite" ratio="aspect-square" /></Reveal>
                    <Reveal delay={0.15}><ParallaxImage src={IMG.privateDining} alt="Private dining" ratio="aspect-square" /></Reveal>
                    <Reveal delay={0.2}><ParallaxImage src={IMG.golf} alt="Golf simulator" ratio="aspect-square" /></Reveal>
                    <Reveal delay={0.25}><ParallaxImage src={IMG.games} alt="Games room" ratio="aspect-square" /></Reveal>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4">
                    {AMENITIES.map((a, i) => (
                        <Reveal key={a} delay={i * 0.03}>
                            <div className="border-t border-warm/15 pt-3 text-sm text-warm/80">{a}</div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- Lifestyle ---------- */

function Lifestyle() {
    const destinations = [
        "King's Road", "Chelsea Harbour", "Chelsea FC", "Duke of York Square",
        "Saatchi Gallery", "Sloane Square", "Harrods", "Harvey Nichols",
        "Battersea Park", "Hyde Park", "Parsons Green", "The Hurlingham Club",
    ];
    return (
        <section id="lifestyle" className="py-20 md:py-28">
            <div className="container-editorial">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <p className="eyebrow">Section Four</p>
                        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
                            The King's Road,
                            <br />
                            <em className="not-italic text-bronze">at your fingertips.</em>
                        </h2>
                        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/75 max-w-lg">
                            <p>
                                One King's Road Park is positioned just 60 metres from one of London's most
                                celebrated streets — renowned for its fashion, dining, design and cultural heritage.
                            </p>
                            <p>
                                Once reserved for King Charles II, it later became a global centre for music,
                                style and creative expression. Today, residents enjoy independent boutiques,
                                internationally recognised fashion houses, acclaimed restaurants and galleries.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <ParallaxImage src={IMG.krp11} alt="Chelsea lifestyle" ratio="aspect-[4/5]" />
                    </Reveal>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    <Reveal><ParallaxImage src={IMG.krp15} alt="King's Road destination" ratio="aspect-[3/4]" /></Reveal>
                    <Reveal delay={0.1} className="md:mt-16">
                        <ParallaxImage src={IMG.krp17} alt="Chelsea neighbourhood" ratio="aspect-[3/4]" />
                    </Reveal>
                    <Reveal delay={0.2}><ParallaxImage src={IMG.krp10} alt="London riverside" ratio="aspect-[3/4]" /></Reveal>
                </div>

                <Reveal>
                    <div className="mt-16">
                        <div className="hairline" />
                        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                            {destinations.map((d) => (
                                <span key={d} className="text-sm text-ink/70">
                                    {d}
                                </span>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------- Connectivity ---------- */

function Connectivity() {
    const walks = [
        { t: "2 min", p: "Walk to King's Road" },
        { t: "3 min", p: "Imperial Wharf Station" },
        { t: "7 min", p: "Fulham Broadway" },
        { t: "8 min", p: "Chelsea Harbour Pier" },
    ];
    const tube = [
        { s: "2", p: "Earl's Court" },
        { s: "4", p: "Sloane Square" },
        { s: "6", p: "Victoria" },
        { s: "6", p: "Paddington" },
        { s: "9", p: "Waterloo" },
        { s: "12", p: "King's Cross" },
    ];
    return (
        <section id="location" className="bg-muted py-20 md:py-28">
            <div className="container-editorial">
                <Reveal>
                    <p className="eyebrow">Section Five</p>
                    <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
                        London,
                        <br />
                        <em className="not-italic text-bronze">effortlessly connected.</em>
                    </h2>
                </Reveal>

                <div className="mt-16 grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7">
                        <Reveal>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {walks.map((w) => (
                                    <div key={w.p} className="border-t border-border pt-6">
                                        <div className="font-serif text-5xl text-ink">{w.t}</div>
                                        <div className="mt-2 text-sm text-ink/60">{w.p}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div className="mt-14">
                                <p className="eyebrow">Underground from Fulham Broadway</p>
                                <div className="mt-6 space-y-4">
                                    {tube.map((t, i) => (
                                        <motion.div
                                            key={t.p}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                            className="flex items-center gap-6 border-b border-border pb-3"
                                        >
                                            <span className="w-14 font-serif text-2xl text-bronze tabular-nums">{t.s}</span>
                                            <span className="text-[10px] tracking-[0.28em] uppercase text-ink/40">Stops</span>
                                            <span className="ml-auto text-base text-ink/80">{t.p}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.1} className="lg:col-span-5">
                        <div className="bg-warm p-8">
                            <p className="eyebrow">Distances</p>
                            <div className="mt-6 space-y-6">
                                {[
                                    { d: "0.3 km", p: "Imperial Wharf Station" },
                                    { d: "0.65 km", p: "Fulham Broadway Station" },
                                    { d: "0.8 km", p: "Chelsea Harbour Pier" },
                                ].map((x) => (
                                    <div key={x.p} className="flex items-baseline justify-between border-b border-border pb-4">
                                        <span className="font-serif text-2xl text-ink">{x.d}</span>
                                        <span className="text-sm text-ink/60">{x.p}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 aspect-[4/3] overflow-hidden bg-muted">
                                <img src={IMG.siteMap} alt="King's Road Park site map" className="h-full w-full object-cover" />
                            </div>
                            <p className="mt-4 text-xs italic text-ink/50">
                                Journey distances and transport information are approximate.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ---------- Landscape ---------- */

function Landscape() {
    return (
        <section className="relative py-20 md:py-28 bg-warm overflow-hidden">
            <div className="container-editorial">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <Reveal className="lg:col-span-5 lg:order-2">
                        <p className="eyebrow">Section Six</p>
                        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
                            Nature,
                            <br />
                            <em className="not-italic text-bronze">thoughtfully composed.</em>
                        </h2>
                        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/75">
                            <p>
                                Six acres of carefully designed landscaping by award-winning practice Gillespies.
                                Lawns, layered planting, water features and residents' spaces create a rare
                                sense of openness and calm in the heart of London.
                            </p>
                            <p>
                                At the centre stands the Grade II* Listed gasholder — built in 1829 and believed
                                to be the world's oldest surviving example — reimagined as a contemporary water
                                feature within The Mirror Garden.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1} className="lg:col-span-7 lg:order-1">
                        <ParallaxImage src={IMG.krp12} alt="The Mirror Garden and gasholder" ratio="aspect-[5/6]" />
                    </Reveal>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {[
                        { k: "6", s: "Acres", v: "of landscaped grounds" },
                        { k: "9,000", s: "Sq Ft", v: "podium roof terrace" },
                        { k: "1829", s: "Historic", v: "gasholder restored" },
                        { k: "II*", s: "Listed", v: "heritage structure" },
                        { k: "1", s: "Central", v: "Mirror Garden" },
                        { k: "∞", s: "Private", v: "residents' gardens" },
                    ].map((s, i) => (
                        <Reveal key={s.v} delay={i * 0.05}>
                            <div className="border-t border-bronze/50 pt-4">
                                <div className="font-serif text-4xl text-ink">{s.k}</div>
                                <div className="mt-1 text-[10px] tracking-[0.28em] uppercase text-bronze">{s.s}</div>
                                <div className="mt-2 text-xs text-ink/60">{s.v}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- Investment ---------- */

function Investment() {
    const highlights = [
        "Just 60 metres from King's Road",
        "Established Zone 2 residential location",
        "Expected rental yield of up to 5%",
        "999-year leasehold",
        "20% payable before completion",
        "More than 25,000 sq ft of amenities",
        "Six acres of landscaped grounds",
        "Architecture by Foster + Partners",
        "Interior specification by MAWD",
        "Developed by Berkeley Group",
        "10-year BLP Building Warranty",
        "Two-year Berkeley Customer Warranty",
    ];
    return (
        <section id="investment" className="bg-charcoal text-warm py-20 md:py-28">
            <div className="container-editorial">
                <Reveal>
                    <p className="eyebrow text-bronze-light">Section Seven</p>
                    <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
                        A compelling
                        <br />
                        London <em className="not-italic text-bronze-light">investment opportunity.</em>
                    </h2>
                </Reveal>

                <div className="mt-16 grid md:grid-cols-4 gap-px bg-warm/10">
                    {[
                        { k: 5, suf: "%", l: "Expected Rental Yield" },
                        { k: 999, suf: " yrs", l: "Leasehold" },
                        { k: 25000, suf: "+ sq ft", l: "Residents' Amenities" },
                        { k: 143, suf: "", l: "Residences in No.1" },
                    ].map((s, i) => (
                        <Reveal key={s.l} delay={i * 0.08} className="bg-charcoal">
                            <div className="p-6 lg:p-8 xl:p-10">
                                <div className="whitespace-nowrap font-serif text-3xl text-warm lg:text-4xl xl:text-5xl">
                                    <Counter to={s.k} suffix={s.suf} />
                                </div>
                                <div className="mt-4 text-[9px] tracking-[0.24em] uppercase text-warm/60">{s.l}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-4">
                    {highlights.map((h, i) => (
                        <Reveal key={h} delay={i * 0.03}>
                            <div className="flex items-baseline gap-4 border-b border-warm/10 py-4">
                                <span className="font-serif text-bronze-light text-sm">{String(i + 1).padStart(2, "0")}</span>
                                <span className="text-warm/85">{h}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <p className="mt-12 max-w-3xl text-xs italic text-warm/50">
                    Expected rental yields are projections and are not guaranteed. Actual returns may vary
                    depending on the residence, rental market, operating costs and purchaser circumstances.
                </p>
            </div>
        </section>
    );
}

/* ---------- Payment plan structure ---------- */

function PaymentPlan() {
    return (
        <section className="py-20 md:py-28 bg-muted">
            <div className="container-editorial">
                <Reveal>
                    <p className="eyebrow text-center">Purchase Structure</p>
                    <h2 className="mt-4 text-center font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
                        A straightforward purchase structure.
                    </h2>
                </Reveal>

                <div className="mt-14 grid md:grid-cols-4 gap-6">
                    {[
                        {
                            k: (
                                <span className="inline-flex items-center whitespace-nowrap">
                                    <span className="mr-2">From</span>
                                    <DirhamSymbol size="0.72em" weight="bold" className="mr-1" />
                                    250K
                                </span>
                            ),
                            l: "Reservation fee",
                        },
                        { k: "10%", l: "On exchange of contracts" },
                        { k: "10%", l: "Twelve months after exchange" },
                        { k: "80%", l: "On completion" },
                    ].map((s, i) => (
                        <Reveal key={s.l} delay={i * 0.1}>
                            <div className="bg-warm p-8 h-full border-t-2 border-bronze">
                                <div className="font-serif text-4xl text-ink">{s.k}</div>
                                <div className="mt-3 text-sm text-ink/60">{s.l}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <p className="mt-8 max-w-3xl text-xs italic text-ink/60">
                    The reservation fee starts from AED 250,000. Contracts are expected to exchange within 21 days.
                </p>
            </div>
        </section>
    );
}

/* ---------- Education ---------- */

function Education() {
    const schools = [
        { d: "0.95 km", n: "Chelsea Academy" },
        { d: "1.0 km", n: "Lady Margaret School" },
        { d: "1.2 km", n: "Kensington Prep School" },
        { d: "1.4 km", n: "Thomas's Fulham" },
        { d: "1.9 km", n: "Fulham Prep School" },
        { d: "2.1 km", n: "The London Oratory School" },
        { d: "2.9 km", n: "Thomas's Battersea" },
    ];
    const unis = [
        { d: "3.0 km", n: "Imperial College London" },
        { d: "7.9 km", n: "King's College London" },
        { d: "8.5 km", n: "London School of Economics" },
        { d: "8.9 km", n: "University of the Arts London" },
        { d: "9.7 km", n: "University College London" },
    ];
    return (
        <section className="py-20 md:py-28 bg-warm">
            <div className="container-editorial">
                <Reveal>
                    <p className="eyebrow">Section Eight</p>
                    <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
                        Education
                        <br />
                        <em className="not-italic text-bronze">without compromise.</em>
                    </h2>
                    <p className="mt-8 max-w-xl text-ink/70 leading-relaxed">
                        Surrounded by highly regarded schools and offering convenient access to several of
                        London's most prestigious universities.
                    </p>
                </Reveal>

                <div className="mt-16 grid md:grid-cols-2 gap-16">
                    <div>
                        <p className="eyebrow">Nearby Schools</p>
                        <div className="mt-8 space-y-4">
                            {schools.map((s, i) => (
                                <Reveal key={s.n} delay={i * 0.05}>
                                    <div className="flex items-baseline justify-between border-b border-border pb-4">
                                        <span className="text-ink/85">{s.n}</span>
                                        <span className="font-serif text-2xl text-bronze">{s.d}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="eyebrow">Leading Universities</p>
                        <div className="mt-8 space-y-4">
                            {unis.map((s, i) => (
                                <Reveal key={s.n} delay={i * 0.05}>
                                    <div className="flex items-baseline justify-between border-b border-border pb-4">
                                        <span className="text-ink/85">{s.n}</span>
                                        <span className="font-serif text-2xl text-bronze">{s.d}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- UAE Investor ---------- */

function UAESection() {
    const services = [
        "Latest price and availability guidance",
        "Floor-plan selection",
        "Purchase and reservation support",
        "Payment-plan guidance",
        "Introductions to UK legal advisers",
        "Lettings and management assistance",
        "Completion updates",
        "Dedicated UAE-based consultant",
    ];
    return (
        <section className="py-20 md:py-28 bg-charcoal text-warm">
            <div className="container-editorial grid lg:grid-cols-12 gap-16 items-center">
                <Reveal className="lg:col-span-6">
                    <ParallaxImage src={IMG.krp9} alt="London skyline at dusk" ratio="aspect-[4/5]" />
                </Reveal>
                <div className="lg:col-span-6">
                    <Reveal>
                        <p className="eyebrow text-bronze-light">Dubai · London</p>
                        <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
                            London property investment,
                            <br />
                            <em className="not-italic text-bronze-light">supported from the UAE.</em>
                        </h2>
                        <p className="mt-8 text-warm/70 leading-relaxed max-w-lg">
                            Our international property team provides dedicated support throughout the purchase
                            journey — from selecting the right residence to completion and ongoing lettings.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                            {services.map((s) => (
                                <div key={s} className="flex items-start gap-3 text-sm text-warm/80">
                                    <span className="mt-2 h-px w-6 bg-bronze-light shrink-0" />
                                    <span>{s}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <a href="#register" className="mt-10 inline-flex btn-bronze btn-bronze-hover">
                            Speak to a UAE Consultant
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ---------- Developer ---------- */

function Developer() {
    const partners = [
        {
            name: "Berkeley Group",
            role: "Developer",
            body: "A FTSE 100 developer recognised for creating high-quality homes and neighbourhoods across London and the South East.",
            img: IMG.krp1,
        },
        {
            name: "Foster + Partners",
            role: "Architecture",
            body: "The internationally recognised practice behind landmark projects including The Gherkin in London and Apple Park in California.",
            img: IMG.krp2,
        },
        {
            name: "MAWD",
            role: "Interiors",
            body: "Refined contemporary design combining considered materials and carefully crafted detailing throughout every residence.",
            img: IMG.living3,
        },
        {
            name: "Gillespies",
            role: "Landscape",
            body: "The six-acre landscape architects — a setting defined by water, greenery, heritage and a strong connection to nature.",
            img: IMG.krp4,
        },
    ];
    return (
        <section id="developer" className="py-20 md:py-28">
            <div className="container-editorial">
                <Reveal>
                    <p className="eyebrow">The Collaboration</p>
                    <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
                        Created by leaders
                        <br />
                        in <em className="not-italic text-bronze">global design.</em>
                    </h2>
                </Reveal>

                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((p, i) => (
                        <Reveal key={p.name} delay={i * 0.08}>
                            <article>
                                <ParallaxImage src={p.img} alt={p.name} ratio="aspect-[3/4]" />
                                <p className="mt-6 eyebrow">{p.role}</p>
                                <h3 className="mt-3 font-serif text-2xl text-ink">{p.name}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.body}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- Lead Form ---------- */

function LeadForm() {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const validate = (fd) => {
        const e = {};
        if (!String(fd.get("firstName") || "").trim()) e.firstName = "Required";
        if (!String(fd.get("lastName") || "").trim()) e.lastName = "Required";
        const email = String(fd.get("email") || "").trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
        if (!String(fd.get("phone") || "").trim()) e.phone = "Required";
        return e;
    };

    const onSubmit = async (ev) => {
        ev.preventDefault();
        if (isSubmitting) return;

        const form = ev.currentTarget;
        const fd = new FormData(form);
        const e = validate(fd);
        setErrors(e);
        if (Object.keys(e).length > 0) return;

        const firstName = String(fd.get("firstName") || "").trim();
        const lastName = String(fd.get("lastName") || "").trim();
        const payload = new FormData();

        payload.set("name", `${firstName} ${lastName}`.trim());
        payload.set("mobile", String(fd.get("phone") || "").trim());
        payload.set("email", String(fd.get("email") || "").trim());
        payload.set("message", [
            "Project: One King's Road Park",
            `Country of Residence: ${fd.get("country") || "Not provided"}`,
            `Preferred Apartment Type: ${fd.get("apartmentType") || "Not selected"}`,
            `Investment Budget: ${fd.get("budget") || "Not selected"}`,
            `Customer Message: ${String(fd.get("message") || "No additional message").trim()}`,
        ].join("\n"));
        payload.set("campaignName", "OneKingsRoadPark-Berkeley-London");
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
            navigate("/Berkeley/kings-road/thanks");
        } catch (error) {
            setSubmitError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="register" className="relative scroll-mt-24 py-20 md:py-28 bg-warm overflow-hidden">
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `url(${IMG.krp7})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-warm via-warm/85 to-warm/70" />

            <div className="relative container-editorial grid lg:grid-cols-12 gap-16 items-start">
                <Reveal className="lg:col-span-5">
                    <p className="eyebrow">Enquire</p>
                    <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
                        Register your <em className="not-italic text-bronze">interest.</em>
                    </h2>
                    <p className="mt-8 text-ink/70 leading-relaxed max-w-md">
                        Receive the latest residence availability, prices, floor plans, payment details and
                        personalised investment guidance from our dedicated international team.
                    </p>
                    <div className="mt-10 space-y-4">
                        {[
                            { k: "999 yrs", v: "Leasehold tenure" },
                            { k: "5%", v: "Expected rental yield" },
                            { k: "Q3 2029", v: "Estimated completion" },
                        ].map((s) => (
                            <div key={s.v} className="flex items-baseline gap-6 border-b border-ink/10 pb-3">
                                <span className="font-serif text-3xl text-ink w-28">{s.k}</span>
                                <span className="text-sm text-ink/60">{s.v}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.15} className="lg:col-span-7">
                    <div className="bg-warm/80 backdrop-blur-xl border border-border p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="py-16 text-center"
                            >
                                <div className="mx-auto w-14 h-14 rounded-full border border-bronze flex items-center justify-center">
                                    <svg className="w-6 h-6 text-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                                    </svg>
                                </div>
                                <h3 className="mt-6 font-serif text-3xl text-ink">Thank you.</h3>
                                <p className="mt-4 text-ink/70 max-w-md mx-auto">
                                    Your enquiry has been received. A member of our international property team will
                                    be in touch shortly with the latest availability and project details.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-6" noValidate>
                                <Field name="firstName" label="First Name" error={errors.firstName} />
                                <Field name="lastName" label="Last Name" error={errors.lastName} />
                                <Field name="email" label="Email Address" type="email" error={errors.email} className="sm:col-span-2" />
                                <Field name="phone" label="Contact Number" type="tel" error={errors.phone} />
                                <Field name="country" label="Country of Residence" defaultValue="United Arab Emirates" />
                                <Select
                                    name="apartmentType"
                                    label="Preferred Apartment Type"
                                    options={["Suite", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom", "Undecided"]}
                                />
                                <Select
                                    name="budget"
                                    label="Investment Budget"
                                    options={[
                                        "Under £1M",
                                        "£1M – £2M",
                                        "£2M – £3M",
                                        "£3M – £5M",
                                        "£5M+",
                                    ]}
                                />
                                <div className="sm:col-span-2">
                                    <label className="block text-[10px] tracking-[0.28em] uppercase text-ink/60 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        maxLength={1000}
                                        className="w-full bg-transparent border-b border-ink/20 focus:border-bronze outline-none py-2 text-ink resize-none transition-colors"
                                    />
                                </div>
                                <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                                    <p className="text-xs text-ink/50 max-w-md">
                                        By submitting you agree to be contacted about One King's Road Park. See our
                                        Privacy Policy for details.
                                    </p>
                                    {submitError && <p className="text-sm text-destructive">{submitError}</p>}
                                    <button type="submit" disabled={isSubmitting} className="btn-bronze btn-bronze-hover disabled:cursor-not-allowed disabled:opacity-60">
                                        {isSubmitting ? "Sending..." : "Get Project Details"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function Field({
    name,
    label,
    type = "text",
    error,
    defaultValue,
    className = "",
}) {
    return (
        <div className={className}>
            <label className="block text-[10px] tracking-[0.28em] uppercase text-ink/60 mb-2">{label}</label>
            <input
                name={name}
                type={type}
                defaultValue={defaultValue}
                maxLength={255}
                className={`w-full bg-transparent border-b py-2 outline-none text-ink transition-colors ${error ? "border-destructive" : "border-ink/20 focus:border-bronze"
                    }`}
            />
            {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
        </div>
    );
}

function Select({ name, label, options }) {
    return (
        <div>
            <label className="block text-[10px] tracking-[0.28em] uppercase text-ink/60 mb-2">{label}</label>
            <select
                name={name}
                defaultValue=""
                className="w-full bg-transparent border-b border-ink/20 focus:border-bronze outline-none py-2 text-ink transition-colors"
            >
                <option value="" disabled>
                    Select...
                </option>
                {options.map((o) => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    return (
        <section ref={ref} className="relative h-[90dvh] min-h-[600px] overflow-hidden bg-charcoal">
            <motion.img
                style={{ y }}
                src={IMG.krp3}
                alt="London skyline from One King's Road Park"
                className="absolute inset-0 h-[120%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
            <div className="relative z-10 h-full flex items-end pb-24">
                <div className="container-editorial text-warm">
                    <Reveal>
                        <p className="eyebrow text-bronze-light">The Final Word</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl">
                            Own a landmark London residence
                            <br />
                            <em className="not-italic text-bronze-light">moments from King's Road.</em>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-warm/80 text-sm">
                            <span>Up to 5% Expected Rental Yield</span>
                            <span className="text-bronze-light">·</span>
                            <span>999-Year Leasehold</span>
                            <span className="text-bronze-light">·</span>
                            <span>10% / 10% / 80% Payment Plan</span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <a href="#register" className="mt-10 inline-flex btn-bronze btn-bronze-hover">
                            Register Now
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ---------- Footer ---------- */

function Footer() {
    return (
        <footer className="bg-charcoal text-warm/70 py-16">
            <div className="container-editorial">
                <div className="grid md:grid-cols-4 gap-10">
                    <div>
                        <div className="font-serif text-xl text-warm">One King's Road Park</div>
                        <p className="mt-2 text-xs tracking-[0.24em] uppercase text-warm/50">Fulham · London SW6</p>
                    </div>
                    <div>
                        <p className="eyebrow text-bronze-light">Developer</p>
                        <p className="mt-4 text-sm">
                            Developed by Berkeley Group in collaboration with Foster + Partners, MAWD and Gillespies.
                        </p>
                    </div>
                    <div>
                        <p className="eyebrow text-bronze-light">Contact</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#register" className="hover:text-warm">Register Interest</a></li>
                            <li><a href="#register" className="hover:text-warm">Download Brochure</a></li>
                        </ul>
                    </div>
                </div>

                <div className="hairline mt-12" />

                <p className="mt-8 text-xs text-warm/40">© {new Date().getFullYear()} One King's Road Park. All rights reserved.</p>
            </div>
        </footer>
    );
}

/* ---------- Cursor / smooth cursor accent (subtle) ---------- */

function CursorAccent() {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 200, damping: 30 });
    const sy = useSpring(y, { stiffness: 200, damping: 30 });
    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX - 8);
            y.set(e.clientY - 8);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [x, y]);
    return (
        <motion.div
            aria-hidden
            style={{ x: sx, y: sy }}
            className="pointer-events-none fixed top-0 left-0 z-[60] w-4 h-4 rounded-full border border-bronze/50 hidden lg:block mix-blend-difference"
        />
    );
}

/* ---------- Page ---------- */

function KingsRoad() {
    useEffect(() => {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "smooth";
        return () => {
            document.documentElement.style.scrollBehavior = previousScrollBehavior;
        };
    }, []);

    return (
        <main className="kings-road-page">
            <CursorAccent />
            <Nav />
            <Hero />
            <PaymentStrip />
            <LandmarkLiving />
            <Residences />
            <Amenities />
            <Lifestyle />
            <Connectivity />
            <Landscape />
            <Investment />
            <PaymentPlan />
            <Education />
            <UAESection />
            <Developer />
            <LeadForm />
            <FinalCTA />
            <Footer />
        </main>
    );
}

export default KingsRoad;


