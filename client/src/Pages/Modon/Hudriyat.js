import React, { useEffect, useState } from "react";
import { Check, ChevronDown, MapPin, Flag, Building2, Utensils, Waves, Trophy, GraduationCap, Bike, Trees, BriefcaseBusiness } from "lucide-react";
import modonLogo from "../../Assests/Modon/Logo.png";

const heroImage = "https://dubai-hill-estate.com/dashboard/uploads/media/media-20260713100138-c9bfe5011e33ff01.jpg";
const mapImage = "https://dubai-hill-estate.com/dashboard/uploads/media/media-20260713101811-ce38e6b22a697358.jpg";
const webhookEndpoint = "https://script.google.com/macros/s/AKfycbxTrPUIKN5-vZAda8_PTCJ_Fdpry7a9P-SKrYNoXGuWIeRHnmb-AptkapEqihZdJiik2g/exec";

const button = "inline-flex min-h-14 items-center justify-center border border-transparent px-8 text-sm font-medium uppercase tracking-wide transition-colors md:min-h-16 md:text-base";
const eyebrow = "text-[11px] font-semibold uppercase tracking-[.16em] text-neutral-500";
const title = "mt-2 font-display text-4xl font-medium leading-[1.08] text-neutral-900 md:text-5xl";
const section = "px-4 py-16 sm:px-8 md:py-24 lg:px-10";
const container = "mx-auto w-full max-w-[1640px]";

function LeadForm({ id }) {
    const [sent, setSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        const form = new FormData(event.currentTarget);
        const payload = new FormData();
        payload.set("name", String(form.get("name") || "").trim());
        payload.set("email", String(form.get("email") || "").trim());
        payload.set("phone", String(form.get("phone") || "").replace(/\D/g, ""));
        payload.set("message", `Hudayriyat Golf Estates project details\nInvestment Range: ${form.get("budget") || "Not selected"}`);
        payload.set("campaignName", "ModonHudayriyatGolfEstates-HU-GADS-488335");
        payload.set("pageUrl", window.location.href);

        try {
            setIsSubmitting(true);
            await fetch(webhookEndpoint, { method: "POST", body: payload, mode: "no-cors" });
            setSent(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form id={id} onSubmit={handleSubmit} className="border border-neutral-300 bg-white p-6 text-neutral-900 md:p-9">
            {sent ? (
                <div className="py-16 text-center" role="status">
                    <p className={eyebrow}>Request Received</p>
                    <h3 className="mt-2 text-3xl font-medium">Thank you</h3>
                    <p className="mx-auto mt-3 max-w-md text-neutral-500">Our sales team will contact you within 24 hours with private pricing and availability.</p>
                </div>
            ) : (
                <>
                    <p className={eyebrow}>Register Your Interest</p>
                    <h3 className="mt-1 text-3xl font-medium md:text-4xl">Request project details</h3>
                    <p className="mt-1 text-neutral-500">Advisor callback within 24 hours. No spam.</p>
                    <div className="mt-6 grid gap-4">
                        <Field label="Full Name *"><input required name="name" autoComplete="name" /></Field>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Mobile *"><input required type="tel" name="phone" placeholder="+971 5X XXX XXXX" autoComplete="tel" /></Field>
                            <Field label="Email"><input type="email" name="email" autoComplete="email" /></Field>
                        </div>
                        <Field label="Investment Range">
                            <select name="budget" defaultValue=""><option value="" disabled>Select investment range</option><option>Below AED 25M</option><option>AED 25M – 35M</option><option>AED 35M +</option></select>
                        </Field>
                        <label className="flex items-start gap-2 text-xs text-neutral-500"><input className="mt-0.5 size-4 accent-neutral-900" type="checkbox" required defaultChecked /><span>I agree to be contacted about this project and accept the Privacy Policy.</span></label>
                        <button disabled={isSubmitting} className={`${button} bg-[#3f3a37] text-white hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-60`} type="submit">{isSubmitting ? "Submitting..." : "Request Price"}</button>
                    </div>
                </>
            )}
        </form>
    );
}

function Field({ label, children }) {
    const isSelect = children.type === "select";
    const control = React.cloneElement(children, {
        className: `h-14 w-full border border-neutral-300 bg-white px-3 text-sm font-normal normal-case tracking-normal outline-none transition focus:border-neutral-900 ${isSelect ? "appearance-none pr-11" : ""}`
    });

    return (
        <label className="block text-[11px] font-semibold uppercase tracking-[.08em] text-neutral-700">
            <span className="mb-2 block">{label}</span>
            {isSelect ? (
                <span className="relative block">
                    {control}
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600" size={18} />
                </span>
            ) : control}
        </label>
    );
}

const amenities = [[Flag, "18-Hole Championship Golf"], [Building2, "Country Clubhouse"], [Utensils, "Fine Dining & Retail"], [Waves, "Wellness & Spa Centre"], [Trophy, "Multi-Sports Courts"], [Building2, "Community Centre"], [GraduationCap, "Private International School"], [Bike, "Cycling & Running Trails"], [Trees, "Parks & Green Spaces"], [BriefcaseBusiness, "Coworking Spaces"]];
const faqs = [
    ["Who can purchase a residence at Hudayriyat Golf Estates?", "The development offers freehold ownership for eligible buyers of all nationalities."],
    ["What is the payment plan?", "A convenient 40 / 60 payment plan is available across townhomes and villas, with tailored terms on Signature mansions."],
    ["When is handover expected?", "Handover is currently scheduled for Q3 2030."],
    ["Is the community gated and secure?", "Yes — the community is a secure residential destination with controlled access and 24/7 on-site management."],
    ["Can I resell before handover?", "Resale is permitted once the minimum payment threshold has been reached, subject to the developer's terms."],
    ["Are pets allowed?", "Yes, pets are welcome subject to reasonable community rules."]
];

function Hudriyat() {
    useEffect(() => {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "smooth";

        return () => {
            document.documentElement.style.scrollBehavior = previousScrollBehavior;
        };
    }, []);

    return (
        <div className="min-h-screen scroll-smooth bg-[#f7f6f2] font-sans text-neutral-900">
            <header className="absolute inset-x-0 top-0 z-20 px-4 text-white sm:px-8 lg:px-10"><div className={`${container} flex h-[92px] items-center`}><img className="h-auto w-36 md:w-44" src={modonLogo} alt="Modon" /></div></header>
            <main>
                <section className="relative min-h-[860px] bg-cover bg-center px-4 pb-16 pt-32 text-white sm:px-8 md:pt-36 lg:px-10" style={{ backgroundImage: `linear-gradient(180deg,rgba(7,13,18,.76),rgba(7,13,18,.28) 45%,rgba(7,13,18,.62)),url(${heroImage})` }}>
                    <div className={`${container} grid min-h-[680px] items-center gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-20`}>
                        <div>
                            <p className="inline-flex border border-white/50 bg-black/20 px-4 py-3 text-[11px] uppercase tracking-[.18em]">✦ New Launch · Hudayriyat Island, Abu Dhabi</p>
                            <h1 className="mt-8 font-display text-5xl font-normal leading-[1.03] sm:text-6xl lg:text-[64px]">Golf-Front Villas &<br />Signature Mansions</h1>
                            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-[22px]">A limited release of 4–6 bedroom residences overlooking a championship 18-hole course. Freehold ownership, 40/60 payment plan, Q3 2030 handover.</p>
                            <ul className="mt-8 grid gap-3 text-base sm:grid-cols-2">{["40 / 60 payment plan", "Freehold, all nationalities", "18-hole championship course", "Handover Q3 2030"].map(x => <li key={x} className="flex items-center gap-3"><span className="flex size-[18px] items-center justify-center rounded-full border border-white"><Check size={11} /></span>{x}</li>)}</ul>
                            <a href="#lead-form" className={`${button} mt-9 bg-[#3f3a37] text-white hover:bg-neutral-900`}>Get Price</a>
                            <p className="mt-4 text-xs text-white/70">Only 60 residences remaining in Phase 1</p>
                        </div>
                        <LeadForm id="lead-form" />
                    </div>
                </section>

                <section className="border-y border-neutral-300 bg-white px-4 sm:px-8 lg:px-10"><div className={`${container} grid gap-7 py-7 sm:grid-cols-2 lg:grid-cols-4`}>{[[Check, "Developer", "MODON Properties"], [MapPin, "Location", "Hudayriyat Island, Abu Dhabi"], [Trophy, "Handover", "Q3 2030"], [Flag, "Payment", "40 / 60 Plan"]].map(([Icon, k, v]) => <div key={k} className="flex items-center gap-4"><Icon size={20} /><div><small className="block text-[9px] uppercase tracking-[.12em] text-neutral-500">{k}</small><strong className="text-sm font-medium">{v}</strong></div></div>)}</div></section>

                <section className={section}><div className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-16`}><img className="h-[300px] w-full object-cover md:h-[500px]" src={heroImage} alt="Hudayriyat Golf Estates aerial view" /><div><p className={eyebrow}>The Community</p><h2 className={title}>Mansions, villas & townhomes woven into the fairways.</h2><p className="mt-7 text-lg leading-relaxed text-neutral-700 md:text-[22px]">Designed for those who seek exclusivity, every residence sits on a prime golf-front plot with panoramic views. Signature mansions deliver grand interiors and private pools; villas and townhomes balance modern family life with elevated craftsmanship — all within one gated island community.</p><div className="mt-8 flex flex-wrap gap-4"><a href="#lead-form" className={`${button} bg-[#3f3a37] text-white`}>Download Brochure</a></div></div></div></section>

                <section id="collection" className={`${section} border-y border-neutral-300 bg-white`}><div className={container}><p className={eyebrow}>The Collection</p><h2 className={title}>A limited release of golf-front residences</h2><p className="mt-3 text-neutral-500">Three distinct typologies. One island. Prices from AED 4.9M.</p><div className="mt-11 grid gap-9 lg:grid-cols-2"><Residence type="Villas" name="Range Villa" beds="5 Bedrooms" price="From AED 26M" specs={[["Setting", "Premium Golf Position"], ["Outdoor", "Private Landscaped Grounds"], ["Payment Plan", "40 / 60"], ["Completion", "Q3 2030"]]} /><Residence featured type="Signature Collection" name="Golf Mansion" beds="6 Bedrooms" price="From AED 35.55M" specs={[["Setting", "Championship Golf & Sea Views"], ["Residence", "Private Pool & Grand Interiors"], ["Availability", "Limited Release"], ["Completion", "Q3 2030"]]} /></div></div></section>

                <section className={section}><div className={container}><p className={eyebrow}>Lifestyle</p><h2 className={title}>World-class amenities at your doorstep</h2><div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-11 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-16">{amenities.map(([Icon, label]) => <div key={label} className="text-center"><Icon className="mx-auto mb-4" size={34} strokeWidth={1.3} /><strong className="text-sm font-medium text-stone-700 md:text-base">{label}</strong></div>)}</div></div></section>

                <section className={`${section} border-y border-neutral-300 bg-white`}><div className={`${container} grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16`}><div><p className={eyebrow}>Location</p><h2 className={title}>On the island. Minutes from everything.</h2><p className="mt-6 text-lg text-neutral-700">Hudayriyat Island sits directly off the Abu Dhabi coastline — connected by causeway to the mainland and central to the city's most sought-after destinations.</p><div className="mt-9 grid grid-cols-2 gap-7">{[["5 min", "Yas Island"], ["10 min", "Abu Dhabi Corniche"], ["15 min", "Downtown Abu Dhabi"], ["40 min", "Dubai Marina"]].map(([a, b]) => <div key={b}><strong className="block text-3xl font-medium">{a}</strong><span className="text-neutral-500">{b}</span></div>)}</div></div><img className="h-[340px] w-full object-cover md:h-[520px]" src={mapImage} alt="Hudayriyat Golf Estates location map" /></div></section>

                <section className={section}><div className={container}><p className={eyebrow}>Gallery</p><h2 className={title}>Envision the life</h2><div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[280px] md:grid-cols-3 md:gap-6"><img className="col-span-2 row-span-2 h-full w-full object-cover" src={heroImage} alt="Community aerial view" />{[mapImage, heroImage, mapImage, heroImage].map((src, i) => <img key={i} className="h-full w-full object-cover" src={src} alt="Hudayriyat community view" />)}</div></div></section>

                <section className={section}><div className={`${container} max-w-[1500px]`}><p className={eyebrow}>FAQ</p><h2 className={title}>Good to know</h2><div className="mt-8 border-t border-neutral-400">{faqs.map(([q, a]) => <details key={q} className="group border-b border-neutral-400 py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg md:text-2xl">{q}<span className="text-3xl font-light transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-4xl text-neutral-600">{a}</p></details>)}</div></div></section>

                <section id="register" className={`${section} border-t border-neutral-300 bg-white`}><div className={`${container} grid items-start gap-14 lg:grid-cols-2 lg:gap-16`}><div><p className={eyebrow}>Priority Access</p><h2 className={title}>Register your interest — receive the private pricing pack</h2><p className="mt-6 text-lg text-neutral-700">A senior sales advisor will contact you within 24 hours with available units, floor plans, view lines and the confidential pricing sheet.</p><ul className="mt-7 grid gap-4">{["Complete floor plans & unit availability", "Confidential pricing & payment terms", "Private viewing at the sales gallery"].map(x => <li className="flex gap-3" key={x}><Check size={18} />{x}</li>)}</ul></div><LeadForm /></div></section>
            </main>
            <footer className="bg-[#2f2c2a] px-4 pb-24 pt-9 text-xs text-white/70 sm:px-8 lg:px-10"><div className={`${container} flex flex-col gap-5 md:flex-row md:items-center md:justify-between`}><img className="h-auto w-32 md:w-36" src={modonLogo} alt="Modon" /><div>© 2026 Hudayriyat Golf Estates. All rights reserved.</div><div>*Prices indicative and subject to availability.</div></div></footer>
            <a className="fixed inset-x-0 bottom-0 z-50 flex min-h-14 items-center justify-center bg-neutral-900 text-sm uppercase text-white md:hidden" href="#lead-form">Download Brochure</a>
        </div>
    );
}

function Residence({ type, name, beds, price, specs, featured }) {
    return <article className="relative flex flex-col border border-neutral-900 p-7 md:p-9">{featured && <span className="absolute right-0 top-0 bg-neutral-900 px-3 py-2 text-[10px] uppercase text-white">Signature</span>}<p className={eyebrow}>{type}</p><h3 className="mt-2 text-3xl font-semibold md:text-4xl">{name}</h3><p className="mt-1 text-neutral-500">{beds}</p><div className="mt-7 border-t border-neutral-300">{specs.map(([k, v]) => <div key={k} className="flex justify-between gap-6 border-b border-neutral-300 py-4 text-sm md:text-base"><span className="text-neutral-500">{k}</span><strong className="text-right font-medium">{v}</strong></div>)}</div><div className="mt-auto pt-6"><small className="text-[10px] uppercase text-neutral-500">Price</small><strong className="mt-1 block text-2xl font-medium md:text-3xl">{price}</strong><a href="#lead-form" className={`${button} mt-5 w-full bg-neutral-900 text-white`}>Request Details</a></div></article>;
}

export default Hudriyat;
