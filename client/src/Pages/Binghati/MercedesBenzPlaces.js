import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MercedesBenzPlaces.css";
import { setFavicon, resetFavicon } from "../../utils/favicon";
import MercedesVideo from "../../Assests/Binghatti/Mercedes.mp4";
import ConceptVideo from "../../Assests/Binghatti/2Video.mp4";
import EmotionalVideo from "../../Assests/Binghatti/3Video.mp4";
import IntelligentVideo from "../../Assests/Binghatti/4Video.mp4";
import FifthVideo from "../../Assests/Binghatti/5Video.mp4";
import SixthVideo from "../../Assests/Binghatti/6Video.mp4";
import SeventhVideo from "../../Assests/Binghatti/7Video.mp4";
import BinghattiLogo from "../../Assests/Binghatti/BinghattiLogo.png";
import img1 from "../../Assests/Binghatti/Img1.webp";
import img2 from "../../Assests/Binghatti/Img2.webp";
import img3 from "../../Assests/Binghatti/Img3.webp";
import img4 from "../../Assests/Binghatti/Img4.webp";
import img5 from "../../Assests/Binghatti/Img5.webp";
import img6 from "../../Assests/Binghatti/Img6.webp";
import img7 from "../../Assests/Binghatti/Img7.1.webp";
import img8 from "../../Assests/Binghatti/Img7.2.webp";
import img9 from "../../Assests/Binghatti/Img8.webp";
import img10 from "../../Assests/Binghatti/Img9.webp";
import img11 from "../../Assests/Binghatti/Img10.webp";
import img12 from "../../Assests/Binghatti/Img11.webp";
import img15 from "../../Assests/Binghatti/Img13.webp";
import img16 from "../../Assests/Binghatti/Img14.webp";
import img17 from "../../Assests/Binghatti/Img15.webp";
import img18 from "../../Assests/Binghatti/Img16.webp";
import Binghatti from "../../Assests/Binghatti/Binghatti.png";
import BenzLogo from "../../Assests/Binghatti/BenzLogo.jpeg";
import bed2 from "../../Assests/Binghatti/Bedroom2.png";
import bed3 from "../../Assests/Binghatti/Bedroom3.png";
import bed4 from "../../Assests/Binghatti/Bedroom4.png";


const brandedSlides = [
    { title: "The Mercedes-Benz Uhlenhaut Coupe Penthouse", subtitle: "Triplex Penthouse", image: img1 },
    { title: "The Mercedes-Benz Uhlenhaut Coupe Penthouse", subtitle: "Living & Dining Area - Display 1", image: img2 },
    { title: "The Mercedes-Benz Uhlenhaut Coupe Penthouse", subtitle: "Living & Dining Area - Display 2", image: img3 },
    { title: "The Mercedes-Benz Gullwing Penthouse", subtitle: "5-BEDROOM PENTHOUSE", image: img4 },
    { title: "The Mercedes-Benz Pagoda Suite", subtitle: "2-BEDROOM SUITE", image: img5 },
    { title: "The Mercedes-Benz Vision One-Eleven Penthouse", subtitle: "4-BEDROOM PENTHOUSE", image: img6 },
    { title: "MERCEDES-BENZ PLACES | BINGHATTI", subtitle: "SPA", image: img7 },
    { title: "MERCEDES-BENZ PLACES | BINGHATTI", subtitle: "Private Bathroom - Display 1", image: img8 },
    { title: "MERCEDES-BENZ PLACES | BINGHATTI", subtitle: "Private Bathroom - Display 2", image: img9 },
    { title: "MERCEDES-BENZ PLACES | BINGHATTI", subtitle: "Lobby", image: img10 },
    { title: "MERCEDES-BENZ PLACES | BINGHATTI", subtitle: "Exterior View - Blue Hour Shot", image: img11 },
    { title: "MERCEDES-BENZ PLACES | BINGHATTI", subtitle: "Exterior View - Night Shot", image: img12 },
    { title: "MERCEDES-BENZ PLACES | BINGHATTI", subtitle: "Exterior View - Dusk Shot", image: img15 },
    { title: "MERCEDES-BENZ PLACES | BINGHATTI", subtitle: "Exterior View - Dusk Shot", image: img16 },
    { title: "MERCEDES-BENZ PLACES | BINGHATTI", subtitle: "External perspective", image: img17 },
];

const branded360Tabs = [
    { label: "2 BEDROOM", image: bed2 },
    { label: "3 BEDROOMS", image: bed3 },
    { label: "4 BEDROOMS", image: bed4 },
];

function MercedesBenzPlaces() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [active360, setActive360] = useState(0);
    const contactFormRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Mercedes Residences in Downtown Dubai | Binghatti UAE";
        setFavicon(Binghatti);

        return () => resetFavicon();
    }, []);

    const currentSlide = useMemo(() => brandedSlides[activeSlide], [activeSlide]);
    const current360 = useMemo(() => branded360Tabs[active360], [active360]);

    const goNextSlide = () => setActiveSlide((prev) => (prev + 1) % brandedSlides.length);
    const goPrevSlide = () => setActiveSlide((prev) => (prev - 1 + brandedSlides.length) % brandedSlides.length);
    const goNext360 = () => setActive360((prev) => (prev + 1) % branded360Tabs.length);
    const goPrev360 = () => setActive360((prev) => (prev - 1 + branded360Tabs.length) % branded360Tabs.length);

    const scrollToContactForm = (event) => {
        event?.preventDefault();
        const target = contactFormRef.current ?? document.getElementById("contact-form");
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleContactSubmit = () => {
        const form = contactFormRef.current;
        if (form) {
            const pageField = form.querySelector('input[name="page_name"]');
            const pageUrlField = form.querySelector('input[name="page_url"]');
            const href = typeof window !== "undefined" ? window.location.href : "";
            if (pageField) pageField.value = href;
            if (pageUrlField) pageUrlField.value = href;
        }
        setTimeout(() => navigate("/Binghatti/ThankYou"), 500);
    };

    return (
        <div className="mercedes-benz-places-page bg-black text-white min-h-screen">
            <header className="absolute inset-x-0 top-0 z-30 bg-transparent">
                <div className="flex w-full items-center justify-start px-10 py-5 lg:px-20 lg:py-7">
                    <img src={BinghattiLogo} alt="Binghatti Logo" className="h-16 w-auto" loading="lazy" />
                </div>
            </header>

            <main>
                <section className="relative isolate min-h-screen overflow-hidden bg-black">
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
                        <source src={MercedesVideo} type="video/mp4" />
                    </video>
                </section>

                <section className="relative flex min-h-screen flex-col items-center justify-center bg-black px-4 py-10 text-center">
                    <img src={BenzLogo} alt="Mercedes-Benz Places" className="w-full max-w-5xl rounded-2xl object-contain" loading="lazy" />
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
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
                        <source src={ConceptVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 max-w-5xl space-y-6">
                        <p className="text-3xl font-medium text-white">2</p>
                        <div className="space-y-2">
                            <p className="text-3xl font-light uppercase tracking-[0.2em] text-white md:text-4xl">Concept</p>
                            <p className="text-4xl font-extrabold uppercase text-white md:text-5xl">Inspiration</p>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                            Rising as a sleek and aerodynamic silhouette, the facade echoes the velocity, precision, and efficiency inherent in the automotive excellence of Mercedes-Benz.
                        </p>
                    </div>
                </section>

                <section className="relative isolate flex min-h-screen items-center justify-center bg-black px-6 py-16 text-center">
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
                        <source src={EmotionalVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 max-w-5xl space-y-6">
                        <p className="text-3xl font-medium text-white">3</p>
                        <div className="space-y-2">
                            <p className="text-3xl font-light uppercase tracking-[0.2em] text-white md:text-4xl">Emotional</p>
                            <p className="text-4xl font-extrabold uppercase text-white md:text-5xl">Design</p>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                            Fueled by a desire for concepts born from tomorrow, the hyper-tower echoes the smooth strokes of a Mercedes-Benz automobile, paying homage to the brand's iconic aesthetics.
                        </p>
                    </div>
                </section>

                <section className="relative isolate flex min-h-screen items-center justify-center bg-black px-6 py-16 text-center">
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
                        <source src={IntelligentVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 max-w-5xl space-y-6">
                        <p className="text-3xl font-medium text-white">4</p>
                        <div className="space-y-2">
                            <p className="text-3xl font-light uppercase tracking-[0.2em] text-white md:text-4xl">Intelligent</p>
                            <p className="text-4xl font-extrabold uppercase text-white md:text-5xl">Design</p>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
                            At the heart of the hyper-tower lies the notion of intelligent systems brought to life through sustainable solutions. A constellation of the Mercedes-Benz pattern integrates photovoltaic panels.
                        </p>
                    </div>
                </section>

                <section className="relative isolate min-h-screen overflow-hidden bg-black">
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
                        <source src={FifthVideo} type="video/mp4" />
                    </video>
                </section>

                <section className="relative isolate min-h-screen overflow-hidden bg-black px-6 py-12 text-center">
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
                        <source src={SixthVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-6 text-white">
                        <h2 className="text-3xl font-semibold uppercase tracking-[0.2em] md:text-4xl">
                            Branded Luxury <span className="font-light">Collection</span>
                        </h2>
                        <div className="relative w-full max-w-5xl">
                            <button
                                type="button"
                                onClick={goPrevSlide}
                                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-black/30 px-3 py-2 text-2xl leading-none text-white backdrop-blur hover:border-white"
                                aria-label="Previous slide"
                            >
                                {"<"}
                            </button>
                            <img
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                className="mx-auto h-[380px] w-[900px] object-cover sm:h-[460px] md:h-[520px]"
                                loading="lazy"
                            />
                            <button
                                type="button"
                                onClick={goNextSlide}
                                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-black/30 px-3 py-2 text-2xl leading-none text-white backdrop-blur hover:border-white"
                                aria-label="Next slide"
                            >
                                {">"}
                            </button>
                        </div>
                        <div className="space-y-1">
                            <p className="text-lg uppercase tracking-[0.18em]">{currentSlide.title}</p>
                            <p className="text-base uppercase tracking-[0.16em] text-gray-200">{currentSlide.subtitle}</p>
                        </div>
                    </div>
                </section>

                <section className="relative isolate min-h-screen overflow-hidden bg-black px-6 py-12 text-center">
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
                        <source src={SeventhVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-6 text-white">
                        <div className="space-y-2">
                            <p className="text-3xl font-light uppercase tracking-[0.2em] md:text-4xl">Own a</p>
                            <p className="text-4xl font-extrabold uppercase md:text-5xl">Collector&apos;s Piece</p>
                        </div>
                        <button
                            type="button"
                            onClick={scrollToContactForm}
                            className="mt-4 rounded-md border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur hover:border-white"
                        >
                            Meet Our Brand Ambassador
                        </button>
                    </div>
                </section>

                <section className="relative isolate min-h-screen overflow-hidden bg-black">
                    <img
                        src={current360.image}
                        alt={current360.label}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                    <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-end justify-between px-4 pb-10 text-white md:px-8">
                        <button
                            type="button"
                            onClick={goPrev360}
                            className="rounded-full border border-white/60 bg-black/30 px-3 py-2 text-2xl leading-none backdrop-blur hover:border-white"
                            aria-label="Previous 360 view"
                        >
                            {"<"}
                        </button>
                        <div className="rounded-md border border-white/50 bg-black/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] backdrop-blur">
                            {current360.label}
                        </div>
                        <button
                            type="button"
                            onClick={goNext360}
                            className="rounded-full border border-white/60 bg-black/30 px-3 py-2 text-2xl leading-none backdrop-blur hover:border-white"
                            aria-label="Next 360 view"
                        >
                            {">"}
                        </button>
                    </div>
                </section>

                <section className="relative isolate bg-black py-16 md:py-20">
                    <div className="mx-auto grid max-w-6xl items-stretch gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:px-10 lg:px-16">
                        <div className="flex flex-col justify-center space-y-8 text-white">
                            <div className="space-y-2">
                                <p className="text-5xl font-extrabold uppercase leading-none">Express</p>
                                <p className="text-5xl font-light uppercase tracking-[0.08em] leading-tight">Your<br />Interest</p>
                            </div>

                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
                            <img src={img18} alt="Mercedes-Benz Places" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/75 to-black/85" />
                            <form
                                id="contact-form"
                                ref={contactFormRef}
                                action="https://script.google.com/macros/s/AKfycbywwic8x5s6aI85f1vDmr3ee5vhG0c261cwMzNg9vSdX8UUsBDKtyhP_ov9L1kdNImEbg/exec?gid=0"
                                method="POST"
                                target="hiddenFrame"
                                onSubmit={handleContactSubmit}
                                className="relative z-10 space-y-8 p-6 sm:p-8 text-white"
                            >
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-200">Name</label>
                                    <input type="text" name="name" required className="w-full border-b border-white/40 bg-transparent px-1 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none" placeholder="Name" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-200">Email</label>
                                    <input type="email" name="email" required className="w-full border-b border-white/40 bg-transparent px-1 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none" placeholder="Email" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-200">Phone</label>
                                    <input type="tel" name="phone" required className="w-full border-b border-white/40 bg-transparent px-1 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none" placeholder="Mobile" />
                                </div>
                                <input type="hidden" name="page_name" value={typeof window !== "undefined" ? window.location.href : ""} />
                                <input type="hidden" name="page_url" value={typeof window !== "undefined" ? window.location.href : ""} />
                                <p className="text-xs text-gray-300">By submitting, you agree to our terms &amp; conditions.</p>
                                <button type="submit" className="w-full rounded-md border border-white/40 bg-gradient-to-r from-white/70 via-white/60 to-white/40 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:from-white hover:to-white">Meet Our Brand Ambassador</button>
                            </form>
                            {/* Hidden iframe keeps the Apps Script action from opening a new tab */}
                            <iframe name="hiddenFrame" className="hidden" title="submission-target" />
                        </div>
                    </div>
                </section>
            </main>

            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/85 px-4 py-3 backdrop-blur shadow-[0_-4px_18px_rgba(0,0,0,0.18)] md:hidden">
                <div className="mx-auto flex max-w-5xl justify-center">
                    <button
                        type="button"
                        onClick={scrollToContactForm}
                        className="inline-flex w-full max-w-xs items-center justify-center rounded-md border border-white/40 bg-white/5 px-4 py-3 text-base font-semibold uppercase tracking-[0.08em] text-white shadow-lg backdrop-blur transition hover:border-white hover:bg-white/10"
                    >
                        Register Your Interest
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MercedesBenzPlaces;
