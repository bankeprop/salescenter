import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/Emaar/EmaarValleyNavBar";
import { HomeIcon, TagIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid';
import Select from "react-select";
import { setFavicon, resetFavicon } from "../../utils/favicon";
import "./EmaarValley.css";
import heroImg from "../../Assests/Emaar/Emaarheight1.jpg";
import emmar2 from "../../Assests/Emaar/Emaarheight2.jpg";
import emmar4 from "../../Assests/Emaar/Emmar4.jpg";
import emmar5 from "../../Assests/Emaar/Emmar5.jpg";
import emmar6 from "../../Assests/Emaar/Emmar6.png";
import emmar7 from "../../Assests/Emaar/Emmar7.png";
import emmar8 from "../../Assests/Emaar/Emmar8.png";
import emmar9 from "../../Assests/Emaar/Emmar9.png";
// import emmar12 from "../../Assests/Emaar/Emmar12.jpg";
import emmar13 from "../../Assests/Emaar/Emmar13.jpg";
import emmar14 from "../../Assests/Emaar/Emmar14.jpg";
import emmar15 from "../../Assests/Emaar/Emmar15.jpg";
import emaarHeightsLogo from "../../Assests/Emaar/EmaarHeightsLogo.png";

function EmaarHeight() {
    const [submitting, setSubmitting] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [country, setCountry] = useState(null);
    const formRef = useRef(null);

    useEffect(() => {
        document.title = "The Heights Country Club & Wellness";
        setFavicon(emaarHeightsLogo);

        return () => resetFavicon();
    }, []);

    const countryOptions = [
        { code: "AE", dial: "+971", name: "United Arab Emirates" },
        { code: "US", dial: "+1", name: "United States" },
        { code: "GB", dial: "+44", name: "United Kingdom" },
        { code: "SA", dial: "+966", name: "Saudi Arabia" },
        { code: "IN", dial: "+91", name: "India" },
        { code: "PK", dial: "+92", name: "Pakistan" },
        { code: "QA", dial: "+974", name: "Qatar" },
        { code: "KW", dial: "+965", name: "Kuwait" },
        { code: "OM", dial: "+968", name: "Oman" },
        { code: "BH", dial: "+973", name: "Bahrain" },
        { code: "EG", dial: "+20", name: "Egypt" },
        { code: "NG", dial: "+234", name: "Nigeria" },
        { code: "ZA", dial: "+27", name: "South Africa" },
        { code: "PH", dial: "+63", name: "Philippines" },
        { code: "BD", dial: "+880", name: "Bangladesh" },
        { code: "LK", dial: "+94", name: "Sri Lanka" },
        { code: "CA", dial: "+1", name: "Canada" },
        { code: "AU", dial: "+61", name: "Australia" },
        { code: "SG", dial: "+65", name: "Singapore" },
        { code: "MY", dial: "+60", name: "Malaysia" },
        { code: "ID", dial: "+62", name: "Indonesia" },
        { code: "DE", dial: "+49", name: "Germany" },
        { code: "FR", dial: "+33", name: "France" },
        { code: "ES", dial: "+34", name: "Spain" },
        { code: "IT", dial: "+39", name: "Italy" },
        { code: "TR", dial: "+90", name: "Turkey" },
        { code: "RU", dial: "+7", name: "Russia" },
        { code: "CN", dial: "+86", name: "China" },
        { code: "JP", dial: "+81", name: "Japan" },
        { code: "KR", dial: "+82", name: "South Korea" }
    ];

    const options = countryOptions.map((c) => ({
        value: c.dial,
        code: c.code,
        label: `${c.name} (${c.dial})`
    }));

    const defaultCountryOption = options.find((option) => option.code === "AE");

    useEffect(() => {
        if (!country && defaultCountryOption) {
            setCountry(defaultCountryOption);
        }
    }, [country, defaultCountryOption]);

    const features = [
        {
            title: "Intricately crafted",
            subtitle: "White volumes with intricate details",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/152369-512-150x150.png",
        },
        {
            title: "Rich tones",
            subtitle: "Beautiful accents throughout",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/theatre-300x300.png",
        },
        {
            title: "Timeless modern design",
            subtitle: "Simple and elegant",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/area-300x300.png",
        },
        {
            title: "New villas by Emaar",
            subtitle: "3, 4 & 5 Bed Standalone Villas",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/city-300x300.png",
        },
    ];

    const properties = [
        {
            name: "The Heights Country Club & Wellness",
            image: heroImg,
            beds: "3, 4 & 5 Bed Standalone Villas",
            price: "Estimated from AED 6 Million",
            note: "Request Brochure",
            href: "#contact",
        },
        {
            name: "The Heights Country Club & Wellness",
            image: emmar2,
            beds: "Wellness inspired community",
            price: "Surrounded by tranquil water bodies",
            note: "Lush wellness greenways",
            href: "#contact",
        },
        {
            name: "The Heights Country Club & Wellness",
            image: emmar4,
            beds: "Country Club & Wellness Centre",
            price: "Cutting-edge fitness technology",
            note: "Holistic programmes",
            href: "#contact",
        },
        {
            name: "The Heights Country Club & Wellness",
            image: emmar5,
            beds: "Intricately crafted white volumes",
            price: "Rich tones and beautiful accents",
            note: "Timeless modern design",
            href: "#contact",
        },
        {
            name: "The Heights Country Club & Wellness",
            image: emmar6,
            beds: "Surrounded by lush greenways",
            price: "Tranquil ponds and water bodies",
            note: "Picture-perfect vistas",
            href: "#contact",
        },
        {
            name: "The Heights Country Club & Wellness",
            image: emmar7,
            beds: "Wellness inspired amenities",
            price: "Designed for health and relaxation",
            note: "Premium Emaar address",
            href: "#contact",
        },
        {
            name: "The Heights Country Club & Wellness",
            image: emmar8,
            beds: "Country club lifestyle",
            price: "Holistic wellness programmes",
            note: "Outdoor & indoor experiences",
            href: "#contact",
        },
        {
            name: "The Heights Country Club & Wellness",
            image: emmar9,
            beds: "81 million sq. ft. masterplan",
            price: "AED 55 billion development value",
            note: "Dubai's newest wellness address",
            href: "#contact",
        },
    ];

    return (
        <div className="emaar-valley-page bg-white text-slate-900 min-h-screen">
            <NavBar logo={emaarHeightsLogo} />

            <section
                id="home"
                className="bg-white text-slate-900 scroll-mt-24 md:scroll-mt-28"
                aria-labelledby="hero-heading"
            >
                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:items-center lg:gap-14">
                    <div className="space-y-4 pl-16 md:pl-24 lg:pl-32">
                        <p className="text-xs uppercase tracking-[0.1em] sm:text-sm">
                            The Most Awaited Launch is Here
                        </p>

                        <h1
                            id="hero-heading"
                            className="text-3xl uppercase sm:text-5xl md:text-5xl lg:text-6xl"
                            style={{
                                letterSpacing: "0.08em",
                            }}
                        >
                            <span className="block leading-[1.3]">Emaar's Brand New Wellness Inspired Community</span>
                        </h1>

                        <p className="text-base uppercase tracking-[0.1em] sm:text-lg">
                            3, 4 & 5 Bed Standalone Villas | Estimated Price From AED 6 Million
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center text-xs uppercase tracking-[0.25em] sm:text-sm "
                        >
                            Request Brochure
                        </a>
                    </div>
                    <div className="w-full">
                        <img
                            src={heroImg}
                            alt="The Heights Country Club & Wellness"
                            className="h-[420px] w-full object-cover md:h-[520px] lg:h-[600px]"
                        />
                    </div>

                </div>


            </section>

            <section className="px-6 py-10 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl space-y-4 text-left">
                    <p className="text-3xl  ">
                        The Heights Country Club & Wellness
                    </p>
                    <p className="text-[16px] leading-relaxed">
                        Experience the pinnacle of luxury living at The Heights Country Club & Wellness By EMAAR Properties, located in the heart of Dubai.
                        This premier development, which spans 81 million square feet, offers a refreshing take on modern living with a strong emphasis on wellness and tranquillity, with a development value of AED 55 billion.
                        At The Heights Country Club and Wellness, we are dedicated to improving your life by creating designed spaces that promote health and relaxation.
                    </p>
                </div>
            </section>

            <section className="w-full">
                <img
                    src={emmar2}
                    alt="Scenic view of The Heights Country Club & Wellness"
                    className="h-full w-full "
                />
            </section>

            <section className="px-6 py-12 md:px-10 lg:px-16">
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 text-left sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((item) => (
                        <div key={item.subtitle} className="flex flex-col items-center gap-3">
                            <img
                                src={item.icon}
                                alt={item.subtitle}
                                className="h-10 w-10"
                                loading="lazy"
                            />
                            <p className="text-lg font-semibold ">{item.title}</p>
                            <p className="text-base">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="properties" className="px-6 py-10 md:px-10 lg:px-16 scroll-mt-24 md:scroll-mt-28">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col gap-2 pb-8 text-left">

                        <h2 className="text-3xl  md:text-4xl">
                            Gallery
                        </h2>
                    </div>
                    <div className="grid gap-10 md:grid-cols-2">
                        {properties.map((home) => (
                            <article
                                key={home.name}
                                className="flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-gray-200"
                            >
                                <a href={home.href} className="block">
                                    <img
                                        src={home.image}
                                        alt={home.name}
                                        className="h-64 w-full object-cover md:h-80"
                                        loading="lazy"
                                    />
                                </a>
                                <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
                                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                        <div className="space-y-1">
                                            <p className="text-xl">The Heights Country Club & Wellness</p>
                                            <h3 className="text-2xl">{home.name}</h3>
                                        </div>
                                        <a
                                            href={home.href}
                                            className="rounded bg-slate-900 px-4 py-2 text-center text-sm text-white hover:bg-slate-800 md:self-start"
                                        >
                                            Request Brochure
                                        </a>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base">
                                        <span className="flex items-center gap-2">
                                            <HomeIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                            {home.beds}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <TagIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                            {home.price}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <BuildingOffice2Icon className="h-5 w-5 text-black" aria-hidden="true" />
                                            {home.note}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            <section id="location" className="px-6 py-10 md:px-10 lg:px-16 scroll-mt-24 md:scroll-mt-28">
                {/* <div className="mx-auto max-w-6xl overflow-hidden ">
                    <img
                        src={emmar12}
                        alt="Location map of The Heights"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div> */}
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 pt-10 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { value: "10", label: "Al Maktoum Int'l Airport" },
                        { value: "10", label: "District 2020" },
                        { value: "10", label: "Dubai Investment Park" },
                        { value: "30", label: "Downtown Dubai" },
                    ].map((item) => (
                        <div
                            key={item.label}
                        >
                            <p className="text-1xl font-bold ">{item.value}</p>
                            <p className="mt-1 text-base ">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 py-5 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-sm bg-slate-900 px-5 py-2 text-base  text-white transition hover:bg-slate-800"
                    >
                        Get Early Access
                    </a>
                </div>
            </section>

            <section className="px-6 py-10 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl space-y-3 text-left">
                    <h2 className="text-3xl  md:text-4xl">A Community-Wide Country Club Experience</h2>
                </div>
                <div className="mx-auto max-w-6xl space-y-4 pt-6">
                    <p>
                        At The Heights Country Club & Wellness, we are dedicated to improving your life by creating meticulously designed spaces that promote health and relaxation. Our Country Club & Wellness Centre, located at the heart of our community, is a comprehensive hub that houses cutting-edge fitness technology and wellness programmes.
                    </p>
                    <p>
                        It is surrounded by lush wellness greenways, tranquil water bodies, and picturesque ponds that serve as peaceful conduits throughout the 1.3 million square metres of meticulously planned open space.
                    </p>
                </div>
            </section>

            <section id="amenities" className="px-6 pt-5 pb-10 md:px-10 lg:px-16 scroll-mt-24 md:scroll-mt-28">
                <div className="mx-auto max-w-6xl space-y-4">
                    <h4 className="text-left text-xl md:text-2xl">
                        Amenities
                    </h4>
                    <p>
                        Wellness-inspired experiences for every member of the family:
                    </p>
                    <ul className="list-disc pl-10 ">
                        <li>Indoor & outdoor retail</li>
                        <li>Sports courts</li>
                        <li>Rock climbing</li>
                        <li>Water splash</li>
                        <li>Farmer's market Gourmet</li>
                        <li>Outdoor gym</li>
                        <li>Amphitheatre</li>
                        <li>Kids' play area</li>
                        <li>Gourmet dining</li>
                        <li>Bicycle & running tracks</li>
                        <li>Archaeological play area</li>
                        <li>F&amp;B</li>
                        <li>Zen & oasis garden</li>
                        <li>Observation tower</li>
                        <li>Maze</li>
                    </ul>

                </div>
            </section>

            <section className="px-6 pb-16 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl space-y-8">
                    <h2 className="text-left text-2xl uppercase  md:text-3xl">
                        The Developer - Emaar
                    </h2>
                    <div className="grid gap-3 md:grid-cols-3">
                        {[
                            {
                                image: emmar13,
                                title: "Emaar",
                                subtitle: "World-renowned developer of iconic structures and integrated communities in the UAE.",
                                detail: "Boundary-pushing projects include The Dubai Mall and The Dubai Fountain.",
                            },
                            {
                                image: emmar14,
                                title: "Premium neighbourhoods",
                                subtitle: "Downtown Dubai, Emirates Living, Dubai Marina, Arabian Ranches.",
                                detail: "Also The Greens & The Views and affluent beachfront living at Emaar Beachfront.",
                            },
                            {
                                image: emmar15,
                                title: "Trusted legacy",
                                subtitle: "Delivering visionary destinations across Dubai.",
                                detail: "Committed to creating vibrant, connected communities.",
                            },
                        ].map((community) => (
                            <article
                                key={community.title}
                                className="overflow-hidden rounded-2xl  bg-white shadow-sm w-80"
                            >
                                <img
                                    src={community.image}
                                    alt={community.title}
                                    className="h-80 w-full object-cover"
                                    loading="lazy"
                                />
                                <div className="p-4 text-center">
                                    <p className="text-base font-semibold">{community.title}</p>
                                    <p className="mt-1 text-base ">{community.subtitle}</p>
                                    <p className="mt-1 text-base ">{community.detail}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-10 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl space-y-6">
                    <h2
                        className="text-left text-3xl md:text-4xl"
                    >
                        FAQ's
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "What is The Heights Country Club & Wellness?",
                                a: "A wellness-inspired Emaar community featuring a country club, cutting-edge fitness technology, and tranquil greenways across 81 million sq. ft.",
                            },
                            {
                                q: "What home types are available?",
                                a: "3, 4 & 5 bed standalone villas with timeless modern design, rich tones, and intricate detailing.",
                            },
                            {
                                q: "What is the starting price?",
                                a: "Estimated pricing starts from AED 6 Million for the standalone villas.",
                            },
                            {
                                q: "Where is it located?",
                                a: "Within easy reach of Al Maktoum International Airport, District 2020, Dubai Investment Park, and Downtown Dubai.",
                            },
                            {
                                q: "What lifestyle amenities are planned?",
                                a: "Indoor & outdoor retail, sports courts, rock climbing, water splash zones, outdoor gym, amphitheatre, kids' play areas, gourmet dining, tracks, observation tower, and more.",
                            },
                        ].map((item, index) => (
                            <details
                                key={item.q}
                                className="border border-slate-300 bg-slate-50"
                                open={index === 0}
                            >
                                <summary className="flex cursor-pointer items-center justify-between px-4 py-4 text-sm  uppercase tracking-wide md:text-base">
                                    <span>{item.q}</span>
                                    <span className="text-lg">+</span>
                                </summary>
                                <p className="px-4 pb-4 text-sm text-slate-700">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="px-6 pb-20 md:px-10 lg:px-16 scroll-mt-24 md:scroll-mt-28">
                <div className="mx-auto max-w-5xl space-y-6">
                    <h2 className="text-center text-2xl  md:text-3xl">
                        Register Your Interest!
                    </h2>
                    <p className="text-center text-base ">
                        Have questions or need assistance? Contact us today-we're here to help!
                    </p>
                    <form
                        className="mx-auto max-w-md space-y-4 rounded-2xl  bg-slate-50 p-6 shadow-sm"
                        id="registerForm"
                        ref={formRef}
                        action="https://script.google.com/macros/s/AKfycbxTrPUIKN5-vZAda8_PTCJ_Fdpry7a9P-SKrYNoXGuWIeRHnmb-AptkapEqihZdJiik2g/exec"
                        method="POST"
                        target="hiddenFrame"
                        onSubmit={(e) => {
                            if (submitting) {
                                e.preventDefault();
                                return;
                            }

                            setSubmitting(true);
                            setFeedback("");
                            const form = formRef.current;
                            if (form) {
                                const code = country?.value || defaultCountryOption?.value || "";
                                const number = form.querySelector("#phoneInput")?.value?.trim() || "";

                                if (!code || !number) {
                                    e.preventDefault();
                                    setSubmitting(false);
                                    setSubmitted(false);
                                    setFeedback("Please select country and enter phone number.");
                                    return;
                                }

                                const fullPhone = `${code}${number}`;
                                const phoneField = form.querySelector('input[name="phone"]');
                                if (phoneField) phoneField.value = fullPhone;

                                const pageUrlField = form.querySelector('input[name="pageUrl"]');
                                if (pageUrlField) pageUrlField.value = window.location.href;
                            }
                            setSubmitted(true);
                        }}
                    >
                        <label className="block text-sm font-semibold ">
                            Name:
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
                            />
                        </label>
                        <label className="block text-sm font-semibold ">
                            Email:
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
                            />
                        </label>
                        <label className="block text-sm font-semibold ">
                            Phone:
                            <div className="mt-2 flex gap-2">
                                <div className="w-1/3">
                                    <Select
                                        options={options}
                                        value={country}
                                        onChange={setCountry}
                                        placeholder="Code"
                                        formatOptionLabel={(option) => (
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                    alt="flag"
                                                    width="20"
                                                    height="15"
                                                    style={{ objectFit: "contain" }}
                                                />
                                                <span className="text-sm">{option.label}</span>
                                            </div>
                                        )}
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                minHeight: "42px",
                                                borderRadius: "0.375rem",
                                                borderColor: "#cbd5e1"
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                maxHeight: "200px",
                                                overflowY: "auto",
                                                zIndex: 100
                                            })
                                        }}
                                    />
                                </div>
                                <input
                                    id="phoneInput"
                                    type="tel"
                                    required
                                    pattern="[0-9]{8,14}"
                                    minLength={8}
                                    maxLength={14}
                                    inputMode="numeric"
                                    className="w-2/3 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
                                />
                            </div>
                        </label>
                        <label className="block text-sm font-semibold ">
                            Message:
                            <textarea
                                name="message"
                                rows={4}
                                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
                            />
                        </label>
                        <input type="hidden" name="phone" />
                        <input type="hidden" name="campaignName" value="Emaar - EmaarHeight" />
                        <input type="hidden" name="pageUrl" value={window.location.href} />
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="rounded-md bg-slate-900 px-4 py-2 text-base text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
                                disabled={submitting}
                            >
                                {submitting ? "Sending..." : "Submit"}
                            </button>
                        </div>
                        {feedback && (
                            <p className="text-center text-sm text-slate-800">{feedback}</p>
                        )}
                    </form>
                    <iframe
                        name="hiddenFrame"
                        title="hiddenFrame"
                        className="hidden"
                        onLoad={() => {
                            if (submitting && submitted) {
                                formRef.current?.reset();
                                setCountry(defaultCountryOption || null);
                                setSubmitting(false);
                                setSubmitted(false);
                                window.location.href = "/EmaarvalleyThanks";
                            }
                        }}
                    />
                </div>
            </section>

            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_18px_rgba(0,0,0,0.08)] md:hidden">
                <div className="mx-auto flex max-w-5xl justify-center">
                    <a
                        href="#contact"
                        className="inline-flex w-full max-w-xs items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800"
                    >
                        Get Early Access
                    </a>
                </div>
            </div>
        </div>
    );
}

export default EmaarHeight;



