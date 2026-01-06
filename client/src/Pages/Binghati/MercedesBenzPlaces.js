import React, { useEffect, useMemo, useState } from "react";
import "./MercedesBenzPlaces.css";
import MercedesVideo from "../../Assests/Binghatti/Mercedes.mp4";
import LogoVideo from "../../Assests/Binghatti/Logo.mp4";
import ConceptVideo from "../../Assests/Binghatti/2Video.mp4";
import EmotionalVideo from "../../Assests/Binghatti/3Video.mp4";
import IntelligentVideo from "../../Assests/Binghatti/4Video.mp4";
import BinghattiLogo from "../../Assests/Binghatti/BinghattiLogo.png";

const brandedSlides = [
    {
        title: "The Mercedes-Benz Uhlenhaut Coupé Penthouse",
        subtitle: "Triplex Penthouse",
        image: "https://binghattiweb.imgix.net/mercedes_1.webp?auto=format,compress",
    },
    {
        title: "The Mercedes-Benz Uhlenhaut Coupé Penthouse",
        subtitle: "Living & Dining Area - Display 1",
        image: "https://binghattiweb.imgix.net/mercedes_2.webp?auto=format,compress",
    },
    {
        title: "The Mercedes-Benz Uhlenhaut Coupé Penthouse",
        subtitle: "Living & Dining Area - Display 2",
        image: "https://binghattiweb.imgix.net/mercedes_3.webp?auto=format,compress",
    },
    {
        title: "The Mercedes-Benz Gullwing Penthouse",
        subtitle: "5-BEDROOM PENTHOUSE",
        image: "https://binghattiweb.imgix.net/mercedes_4.webp?auto=format,compress",
    },
    {
        title: "The Mercedes-Benz Pagoda Suite",
        subtitle: "2-BEDROOM SUITE",
        image: "https://binghattiweb.imgix.net/mercedes_5.webp?auto=format,compress",
    },
    {
        title: "The Mercedes-Benz Vision One-Eleven Penthouse",
        subtitle: "4-BEDROOM PENTHOUSE",
        image: "https://binghattiweb.imgix.net/mercedes_6.webp?auto=format,compress",
    },
    {
        title: "MERCEDES-BENZ PLACES | BINGHATTI",
        subtitle: "SPA",
        image: "https://binghattiweb.imgix.net/mercedes_7.webp?auto=format,compress",
    },
    {
        title: "MERCEDES-BENZ PLACES | BINGHATTI",
        subtitle: "Private Bathroom - Display 1",
        image: "https://binghattiweb.imgix.net/mercedes_8.webp?auto=format,compress",
    },
    {
        title: "MERCEDES-BENZ PLACES | BINGHATTI",
        subtitle: "Private Bathroom - Display 2",
        image: "https://binghattiweb.imgix.net/mercedes_9.webp?auto=format,compress",
    },
    {
        title: "MERCEDES-BENZ PLACES | BINGHATTI",
        subtitle: "Lobby",
        image: "https://binghattiweb.imgix.net/mercedes_10.webp?auto=format,compress",
    },
    {
        title: "MERCEDES-BENZ PLACES | BINGHATTI",
        subtitle: "Exterior View - Blue Hour Shot",
        image: "https://binghattiweb.imgix.net/mercedes_11.webp?auto=format,compress",
    },
    {
        title: "MERCEDES-BENZ PLACES | BINGHATTI",
        subtitle: "Exterior View - Night Shot",
        image: "https://binghattiweb.imgix.net/mercedes_12.webp?auto=format,compress",
    },
    {
        title: "MERCEDES-BENZ PLACES | BINGHATTI",
        subtitle: "Exterior View - Dusk Shot",
        image: "https://binghattiweb.imgix.net/mercedes_13.webp?auto=format,compress",
    },
    {
        title: "MERCEDES-BENZ PLACES | BINGHATTI",
        subtitle: "Exterior View - Dusk Shot",
        image: "https://binghattiweb.imgix.net/mercedes_14.webp?auto=format,compress",
    },
    {
        title: "MERCEDES-BENZ PLACES | BINGHATTI",
        subtitle: "External perspective",
        image: "https://binghattiweb.imgix.net/mercedes_15.webp?auto=format,compress",
    },
];

const branded360Tabs = [
    {
        label: "2 BEDROOM",
        iframe:
            "https://burjbinghatti.viewin360.co/share/collection/7XzfY?logo=-1&info=0&fs=0&vr=0&sd=1&gyro=1&autop=0&thumbs=-1",
    },
    {
        label: "3 BEDROOMS",
        iframe:
            "https://burjbinghatti.viewin360.co/share/collection/7XynQ?logo=-1&info=0&fs=0&vr=0&sd=1&gyro=1&autop=0&thumbs=-1",
    },
    {
        label: "4 BEDROOMS",
        iframe:
            "https://burjbinghatti.viewin360.co/share/collection/7Xy6S?logo=-1&info=0&fs=0&vr=0&sd=1&gyro=1&autop=0&thumbs=-1",
    },
];

const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/binghatti/" },
    { label: "Facebook", href: "https://www.facebook.com/Binghatti/" },
    { label: "YouTube", href: "https://www.youtube.com/c/BinghattiDevelopersDubai/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/binghatti/" },
    { label: "Snapchat", href: "https://www.snapchat.com/add/binghatti" },
];

const countryCodes = ["UAE (+971)", "UK (+44)", "USA (+1)", "India (+91)", "Saudi (+966)"];

function MercedesBenzPlaces() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [active360, setActive360] = useState(0);

    useEffect(() => {
        document.title = "Mercedes Residences in Downtown Dubai | Binghatti UAE";
    }, []);

    const currentSlide = useMemo(() => brandedSlides[activeSlide], [activeSlide]);
    const current360 = useMemo(() => branded360Tabs[active360], [active360]);

    const goNextSlide = () => setActiveSlide((prev) => (prev + 1) % brandedSlides.length);
    const goPrevSlide = () => setActiveSlide((prev) => (prev - 1 + brandedSlides.length) % brandedSlides.length);
    const goNext360 = () => setActive360((prev) => (prev + 1) % branded360Tabs.length);
    const goPrev360 = () => setActive360((prev) => (prev - 1 + branded360Tabs.length) % branded360Tabs.length);

    return (
        <div className="mercedes-benz-places-page bg-black text-white min-h-screen">
            <header className="absolute inset-x-0 top-0 z-30 bg-transparent">
                <div className="flex w-full items-center justify-start px-10 py-5 lg:px-20 lg:py-7">
                    <img
                        src={BinghattiLogo}
                        alt="Binghatti Logo"
                        className="h-16 w-auto"
                        loading="lazy"
                    />
                </div>
            </header>

            <main>
                <section className="relative isolate min-h-screen overflow-hidden bg-black">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={MercedesVideo} type="video/mp4" />
                    </video>
                </section>

                <section className="relative flex min-h-screen flex-col items-center justify-center bg-black px-4 py-10 text-center">
                    <video
                        className="w-full max-w-5xl rounded-2xl object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={LogoVideo} type="video/mp4" />
                    </video>

                    <div className="mt-12 max-w-4xl space-y-6">
                        <p className="text-3xl font-medium text-white">1</p>
                        <p className="text-3xl font-light uppercase tracking-[0.2em] text-white md:text-4xl">A Revolutionary</p>
                        <p className="text-4xl font-extrabold uppercase text-white md:text-5xl">Collaboration</p>
                        <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                            Navigating the frontier of cutting-edge design, a remarkable collaboration emerges. A transformative paradigm unfolds, setting new standards in innovation.
                        </p>
                    </div>

                </section>

                <section className="relative isolate flex min-h-screen items-center justify-center bg-black px-6 py-16 text-center">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={ConceptVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 max-w-5xl space-y-6">
                        <p className="text-3xl font-medium text-white">2</p>
                        <div className="space-y-2">
                            <p className="text-3xl font-light uppercase tracking-[0.2em] text-white md:text-4xl">
                                Concept
                            </p>
                            <p className="text-4xl font-extrabold uppercase text-white md:text-5xl">Inspiration</p>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                            Rising as a sleek and aerodynamic silhouette, the façade echoes the velocity, precision, and efficiency inherent in the automotive excellence of Mercedes-Benz.
                        </p>
                    </div>
                </section>

                <section className="relative isolate flex min-h-screen items-center justify-center bg-black px-6 py-16 text-center">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={EmotionalVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 max-w-5xl space-y-6">
                        <p className="text-3xl font-medium text-white">3</p>
                        <div className="space-y-2">
                            <p className="text-3xl font-light uppercase tracking-[0.2em] text-white md:text-4xl">
                                Emotional
                            </p>
                            <p className="text-4xl font-extrabold uppercase text-white md:text-5xl">Design</p>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                            Fueled by a desire for concepts born from tomorrow, the hyper-tower echoes the smooth strokes of a Mercedes-Benz automobile, paying homage to the brand’s iconic aesthetics.
                        </p>
                    </div>
                </section>

                <section className="relative isolate flex min-h-screen items-center justify-center bg-black px-6 py-16 text-center">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={IntelligentVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 max-w-5xl space-y-6">
                        <p className="text-3xl font-medium text-white">4</p>
                        <div className="space-y-2">
                            <p className="text-3xl font-light uppercase tracking-[0.2em] text-white md:text-4xl">
                                Intelligent
                            </p>
                            <p className="text-4xl font-extrabold uppercase text-white md:text-5xl">Design</p>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                            At the heart of the hyper-tower lies the notion of intelligent systems brought to life through sustainable solutions. A constellation of the Mercedes-Benz pattern integrates photovoltaic panels.
                        </p>
                    </div>
                </section>



                <section className="relative overflow-hidden bg-black py-16">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="https://binghattiweb.imgix.net/mercedes-transition.webp?auto=format,compress"
                    >
                        <source src="https://binghattiweb.imgix.video/merc-web-info-vid.mp4?fm=mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black" />
                    <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-10 lg:px-16">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Branded Luxury Collection</p>
                                <h3 className="text-3xl font-semibold md:text-4xl">
                                    Own a <span className="font-bold">Collector&apos;s Piece</span>
                                </h3>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={goPrevSlide}
                                    className="rounded-full border border-white/40 p-2 hover:border-white"
                                    aria-label="Previous slide"
                                >
                                    <span className="block rotate-180 text-lg">➜</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={goNextSlide}
                                    className="rounded-full border border-white/40 p-2 hover:border-white"
                                    aria-label="Next slide"
                                >
                                    <span className="block text-lg">➜</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="overflow-hidden rounded-2xl border border-white/10">
                                <div
                                    className="h-[340px] w-full bg-cover bg-center sm:h-[460px] md:h-[520px]"
                                    style={{ backgroundImage: `url(${currentSlide.image})` }}
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-4">
                                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                                    {activeSlide + 1} / {brandedSlides.length}
                                </p>
                                <h4 className="text-2xl font-semibold md:text-3xl">{currentSlide.title}</h4>
                                <p className="text-lg uppercase tracking-[0.18em] text-gray-200">{currentSlide.subtitle}</p>
                                <div className="flex flex-wrap gap-2">
                                    {brandedSlides.map((_, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => setActiveSlide(idx)}
                                            className={`h-1 w-8 rounded-full ${idx === activeSlide ? "bg-white" : "bg-white/30"}`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto pb-2">
                            <div className="flex gap-3">
                                {brandedSlides.map((slide, idx) => (
                                    <button
                                        key={`${slide.subtitle}-${idx}`}
                                        onClick={() => setActiveSlide(idx)}
                                        className={`min-w-[180px] rounded-lg border px-3 py-2 text-left text-xs uppercase tracking-[0.16em] transition ${idx === activeSlide
                                            ? "border-white bg-white/10 text-white"
                                            : "border-white/10 text-gray-300 hover:border-white/30"
                                            }`}
                                    >
                                        <span className="block font-semibold">{slide.title}</span>
                                        <span className="block text-[11px] text-gray-300">{slide.subtitle}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative isolate overflow-hidden bg-black py-16">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="https://binghattiweb.imgix.net/mercedes-benz-places-video-2.webp?auto=format,compress&q=60&w=580&h=1030&fit=crop"
                    >
                        <source src="https://binghattiweb.imgix.video/video-5.mp4?fm=mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black" />
                    <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:px-10 lg:px-16">
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Branded Collection Contact</p>
                            <h3 className="text-3xl font-semibold uppercase md:text-4xl">
                                Own a <br />
                                <span className="font-bold">Collector&apos;s Piece</span>
                            </h3>
                            <button className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-gray-200">
                                Meet Our Brand Ambassador
                            </button>
                        </div>
                        <div className="space-y-4 rounded-2xl bg-white/5 p-6 backdrop-blur">
                            <h4 className="text-xl font-semibold">Request More Details</h4>
                            <form className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-white/40 focus:outline-none"
                                />
                                <div className="grid gap-3 md:grid-cols-2">
                                    <select className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none">
                                        {countryCodes.map((code) => (
                                            <option key={code} className="bg-black text-white">
                                                {code}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="Mobile"
                                        className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-white/40 focus:outline-none"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-white/40 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-gray-200"
                                >
                                    Confirm Now
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="bg-black px-6 py-16 md:px-10 lg:px-16">
                    <div className="mx-auto max-w-6xl space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Branded 360° Tabs</p>
                                <h3 className="text-3xl font-semibold md:text-4xl">Explore in 360°</h3>
                            </div>
                            <div className="hidden items-center gap-2 md:flex">
                                <button
                                    type="button"
                                    onClick={goPrev360}
                                    className="rounded-full border border-white/40 p-2 hover:border-white"
                                    aria-label="Previous 360 tab"
                                >
                                    <span className="block rotate-180 text-lg">➜</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={goNext360}
                                    className="rounded-full border border-white/40 p-2 hover:border-white"
                                    aria-label="Next 360 tab"
                                >
                                    <span className="block text-lg">➜</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                            <div className="overflow-hidden rounded-2xl border border-white/10">
                                <iframe
                                    title={current360.label}
                                    src={current360.iframe}
                                    className="h-[420px] w-full md:h-[520px]"
                                    allow="xr-spatial-tracking; gyroscope; accelerometer"
                                    allowFullScreen
                                />
                            </div>
                            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                                <div className="space-y-3">
                                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Virtual Tours</p>
                                    <h4 className="text-2xl font-semibold">{current360.label}</h4>
                                    <p className="text-sm text-gray-300">
                                        Immerse yourself in the Mercedes-Benz Places residences with interactive 360° walkthroughs of each
                                        bedroom configuration.
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 pt-4">
                                    {branded360Tabs.map((tab, idx) => (
                                        <button
                                            key={tab.label}
                                            onClick={() => setActive360(idx)}
                                            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] ${idx === active360
                                                ? "bg-white text-black"
                                                : "border border-white/30 text-gray-200 hover:border-white"
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 pt-4 md:hidden">
                                    <button
                                        type="button"
                                        onClick={goPrev360}
                                        className="flex-1 rounded-md border border-white/40 px-3 py-2 text-sm uppercase tracking-[0.18em]"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={goNext360}
                                        className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-black"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative isolate overflow-hidden bg-black py-16">
                    <img
                        src="https://binghattiweb.imgix.net/mercedes-benz-places-footer-bg.webp?auto=format,compress&q=50&w=1296&dpr=1.2"
                        alt="Mercedes-Benz Places Footer"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black" />
                    <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.2fr] md:px-10 lg:px-16">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Connect with the brand</p>
                            <h3 className="text-3xl font-semibold uppercase md:text-4xl">
                                Express <br /> Your <br /> Interest
                            </h3>
                            <div className="space-y-2 text-sm text-gray-200">
                                <a
                                    className="flex items-center gap-2 hover:text-white"
                                    href="https://www.binghatti.com/en/contact-us"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Find a Sales Boutique <span aria-hidden="true">➜</span>
                                </a>
                                <a
                                    className="flex items-center gap-2 hover:text-white"
                                    href="https://www.binghatti.com/en/property-search"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Discover the Collection <span aria-hidden="true">➜</span>
                                </a>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gray-200 hover:border-white hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl bg-black/60 p-6 backdrop-blur">
                            <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-xs uppercase tracking-[0.16em] text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-white/40 focus:outline-none"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs uppercase tracking-[0.16em] text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-white/40 focus:outline-none"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs uppercase tracking-[0.16em] text-gray-300">Phone</label>
                                        <input
                                            type="tel"
                                            className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-white/40 focus:outline-none"
                                            placeholder="Mobile"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between gap-3">
                                    <div>
                                        <label className="text-xs uppercase tracking-[0.16em] text-gray-300">Country</label>
                                        <select className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none">
                                            {countryCodes.map((code) => (
                                                <option key={code} className="bg-black text-white">
                                                    {code}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <p className="text-xs text-gray-300">
                                        By submitting, you agree to our terms & conditions.
                                    </p>
                                    <button className="w-full rounded-md bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-gray-200">
                                        Meet Our Brand Ambassador
                                    </button>
                                </div>
                            </div>
                            <p className="mt-6 text-xs text-gray-400">
                                ©2025 Binghatti. All rights reserved.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MercedesBenzPlaces;
