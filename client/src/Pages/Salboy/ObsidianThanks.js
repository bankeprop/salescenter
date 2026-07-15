import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import heroTower from "../../Assests/Salboy/hero-tower.jpg";
import obsidianLogo from "../../Assests/Salboy/Obsidian_logo.png";
import "./Obsidian.css";

function ObsidianThanks() {
    return (
        <main className="obsidian-page relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 text-white">
            <img
                src={heroTower}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/80" />
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
            <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />

            <section className="glass-panel relative z-10 w-full max-w-2xl rounded-3xl px-6 py-10 text-center shadow-[var(--shadow-gold)] sm:px-12 sm:py-14">
                <img
                    src={obsidianLogo}
                    alt="Obsidian Manchester"
                    className="mx-auto h-auto w-44 sm:w-52"
                />

                <div className="mx-auto mt-10 grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-charcoal">
                    <Check className="h-8 w-8" strokeWidth={2.5} aria-hidden="true" />
                </div>

                <p className="mt-8 text-[11px] uppercase tracking-[0.4em] text-gold">Thank You</p>
                <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
                    Your request has been received.
                </h1>
                <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-white/70">
                    Our property specialist will contact you shortly with availability, floor plans, and your personalised investment details.
                </p>

                <Link
                    to="/obsidian"
                    className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition hover:-translate-y-0.5"
                >
                    Return to Obsidian
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </section>
        </main>
    );
}

export default ObsidianThanks;
