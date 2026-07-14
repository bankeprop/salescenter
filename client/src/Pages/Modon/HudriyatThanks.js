import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import modonLogo from "../../Assests/Modon/Logo.png";

const heroImage = "https://dubai-hill-estate.com/dashboard/uploads/media/media-20260713100138-c9bfe5011e33ff01.jpg";

function HudriyatThanks() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2f2c2a] px-5 py-12 text-white">
            <img className="absolute inset-0 h-full w-full object-cover" src={heroImage} alt="" />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,18,.35),rgba(47,44,42,.96))]" />

            <section className="relative z-10 w-full max-w-2xl border border-white/20 bg-[#2f2c2a]/90 px-6 py-10 text-center shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-md sm:px-12 sm:py-14">
                <img className="mx-auto h-auto w-44 sm:w-52" src={modonLogo} alt="Modon" />

                <div className="mx-auto mt-9 flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/10">
                    <CheckCircle2 size={31} strokeWidth={1.6} />
                </div>

                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[.2em] text-white/60">Request Received</p>
                <h1 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">Thank you for your interest.</h1>
                <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/75">
                    Our sales team will contact you within 24 hours with Hudayriyat Golf Estates pricing, floor plans, and current availability.
                </p>

                <Link className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 bg-white px-7 text-sm font-medium uppercase tracking-wide text-[#2f2c2a] transition hover:bg-neutral-200" to="/hudayriyat">
                    Back to Hudayriyat <ArrowRight size={17} />
                </Link>
            </section>
        </main>
    );
}

export default HudriyatThanks;
