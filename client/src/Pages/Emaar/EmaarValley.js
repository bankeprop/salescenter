import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/Emaar/EmaarValleyNavBar";
import { HomeIcon, TagIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid';
import { setFavicon, resetFavicon } from "../../utils/favicon";
import "./EmaarValley.css";
import heroImg from "../../Assests/Emaar/Emmar1.webp";
import emmar2 from "../../Assests/Emaar/Emmar3.png";
import emmar4 from "../../Assests/Emaar/Emmar4.jpg";
import emmar5 from "../../Assests/Emaar/Emmar5.jpg";
import emmar6 from "../../Assests/Emaar/Emmar6.png";
import emmar7 from "../../Assests/Emaar/Emmar7.png";
import emmar8 from "../../Assests/Emaar/Emmar8.png";
import emmar9 from "../../Assests/Emaar/Emmar9.png";
import emmar10 from "../../Assests/Emaar/Emmar10.png";
import emmar11 from "../../Assests/Emaar/Emmar11.png";
import emmar12 from "../../Assests/Emaar/Emmar12.jpg";
import emmar13 from "../../Assests/Emaar/Emmar13.jpg";
import emmar14 from "../../Assests/Emaar/Emmar14.jpg";
import emmar15 from "../../Assests/Emaar/Emmar15.jpg";
import emaarLogo from "../../Assests/Emaar/EmaarValleyLogo.png";

function EmaarValley() {
    const [submitting, setSubmitting] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        document.title = "The Valley - The Valley";
        setFavicon(emaarLogo);

        return () => resetFavicon();
    }, []);

    const features = [
        {
            title: "47,000 sqm",
            subtitle: "Golden Beach",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/152369-512-150x150.png",
        },
        {
            title: "13,000 sqm",
            subtitle: "Kids Dale",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/theatre-300x300.png",
        },
        {
            title: "61,000 sqm",
            subtitle: "Area",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/area-300x300.png",
        },
        {
            title: "25,000 sqm",
            subtitle: "Sports Village",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/soccer-ball-variant-300x300.png",
        },
        {
            title: "3,000 sqm",
            subtitle: "Pocket Park",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/dove-300x300.png",
        },
        {
            title: "32,000 sqm",
            subtitle: "Town Centre",
            icon: "https://www.banke.ae/wp-content/uploads/2025/01/city-300x300.png",
        },
    ];

    const properties = [
        {
            name: "Vindera at The Valley",
            image: emmar4,
            beds: "3-4 Bedrooms",
            price: "From AED 3,170,000",
            note: "* Units Remaining",
            href: "#contact",
        },
        {
            name: "Rivera at The Valley Phase 2",
            image: emmar5,
            beds: "4 Bedrooms",
            price: "From AED 4,780,000",
            note: "* Units Remaining",
            href: "#contact",
        },
        {
            name: "Elea at The Valley",
            image: emmar6,
            beds: "3 – 4 Bedrooms",
            price: "From AED 2,991,888",
            note: "* Units Remaining",
            href: "#contact",
        },
        {
            name: "Kaia at The Valley",
            image: emmar7,
            beds: "4 – 5 Bedrooms",
            price: "From AED 2,722,888",
            note: "* Units Remaining",
            href: "#contact",
        },
        {
            name: "Elva at The Valley",
            image: emmar8,
            beds: "3 – 4 Bedrooms",
            price: "Announcing Soon",
            note: "* Units Remaining",
            href: "#contact",
        },
        {
            name: "Farm Grove at The Valley",
            image: emmar9,
            beds: "4 – 5 Bedrooms",
            price: "From AED 4,686,888",
            note: "* Units Remaining",
            href: "#contact",
        },
        {
            name: "Velora at The Valley",
            image: emmar10,
            beds: "3 – 4 Bedrooms",
            price: "From AED 2,400,000",
            note: "* Units Remaining",
            href: "#contact",
        },
        {
            name: "Avena 2 at The Valley",
            image: emmar11,
            beds: "1 – 5 Bedrooms",
            price: "From AED 4,417,888",
            note: "* Units Remaining",
            href: "#contact",
        },
    ];

    return (
        <div className="emaar-valley-page bg-white text-slate-900 min-h-screen">
            <NavBar />

            <section
                id="home"
                className="bg-white text-slate-900 scroll-mt-24 md:scroll-mt-28"
                aria-labelledby="hero-heading"
            >
                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:items-center lg:gap-14">
                    <div className="space-y-4 pl-16 md:pl-24 lg:pl-32">
                        <p className="text-xs uppercase tracking-[0.1em] sm:text-sm">
                            Emaar
                        </p>

                        <h1
                            id="hero-heading"
                            className="text-4xl uppercase sm:text-5xl md:text-6xl lg:text-7xl"
                            style={{
                                letterSpacing: "0.08em",
                            }}
                        >
                            <span className="block leading-[1.3]">Inspired</span>
                            <span className="block leading-[1.3]">Living at</span>
                            <span className="block leading-[1.3]">The Valley</span>
                        </h1>

                        <a
                            href="#contact"
                            className="inline-flex items-center text-xs uppercase tracking-[0.25em] sm:text-sm "
                        >
                            Enquire Now →
                        </a>
                    </div>
                    <div className="w-full">
                        <img
                            src={heroImg}
                            alt="Aerial view of The Valley community"
                            className="h-[420px] w-full object-cover md:h-[520px] lg:h-[600px]"
                        />
                    </div>

                </div>


            </section>

            <section className="px-6 py-10 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl space-y-4 text-left">
                    <p className="text-3xl  ">
                        The Valley
                    </p>
                    <p className="text-[16px] leading-relaxed">
                        A serene haven where life flourishes amidst golden sands and verdant landscapes. Welcome to The
                        Valley by Emaar Properties — a masterfully crafted community where your aspirations take root and
                        grow into a future filled with promise and possibility.
                    </p>
                    <p className="text-[16px] leading-relaxed">
                        The Valley by Emaar is a sanctuary of elegance, blending tranquil surroundings with modern
                        sophistication. This vibrant oasis offers breathtaking views, world-class amenities, and a seamless
                        fusion of contemporary design with timeless tradition.
                    </p>
                    <p className="text-[16px] leading-relaxed">
                        Experience a lifestyle that harmonizes urban convenience with nature’s beauty. Here, every day is a
                        step closer to realizing your dreams, surrounded by opportunities to explore, innovate, and thrive.
                        Step into a world of limitless potential at The Valley by Emaar — your gateway to a brighter tomorrow.
                    </p>
                </div>
            </section>

            <section className="w-full">
                <img
                    src={emmar2}
                    alt="Scenic view of The Valley community"
                    className="h-full w-full "
                />
            </section>

            <section className="px-6 py-12 md:px-10 lg:px-16">
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 text-left sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((item) => (
                        <div key={item.subtitle} className="flex flex-col items-start gap-3">
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
                            Properties in The Valley
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
                                            <p className="text-xl">The Valley</p>
                                            <h3 className="text-2xl">{home.name}</h3>
                                        </div>
                                        <a
                                            href={home.href}
                                            className="rounded bg-slate-900 px-4 py-2 text-center text-sm text-white hover:bg-slate-800 md:self-start"
                                        >
                                            Learn More
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
                <div className="mx-auto max-w-6xl overflow-hidden ">
                    <img
                        src={emmar12}
                        alt="Location map of The Valley"
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 pt-10 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { value: "5", label: "Minutes From Dubai Rugby Sevens" },
                        { value: "8", label: "Minutes From Dubai Outlet Mall" },
                        { value: "25", label: "Minutes From Dubai International Airport" },
                        { value: "20", label: "Minutes From Downtown Dubai" },
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
                        Register Your Interest
                    </a>
                </div>
            </section>

            <section className="px-6 py-10 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl space-y-3 text-left">
                    <h2 className="text-3xl  md:text-4xl">The Valley Phase 2</h2>
                </div>
                <div className="mx-auto max-w-6xl space-y-4 pt-6">
                    <p>
                        The Valley introduces its latest phase, enhancing one of Emaar’s most celebrated master-planned
                        communities. This development elevates suburban living by seamlessly integrating modern townhouses
                        with vast desert landscapes and lush green open spaces, creating an inspiring environment for a
                        vibrant lifestyle. Spanning over 200 hectares and featuring more than 4,500 thoughtfully designed
                        residential units, The Valley emerges as Dubai’s pioneering suburban haven. Interconnected
                        neighborhoods, lush green corridors, and dynamic activity hubs come together to foster a strong
                        sense of community. With retail, entertainment, recreational, educational, and healthcare
                        facilities within easy reach, The Valley is truly designed for families seeking a balanced and
                        fulfilling lifestyle.
                    </p>
                    <p>
                        Ideally located for convenience and tranquility, The Valley’s newest phase offers unmatched
                        accessibility while retaining a serene charm. Strategically positioned near the emerging Al
                        Maktoum International Airport, the community benefits from direct connectivity to Dubai-Al Ain
                        Road. This prime location not only enhances travel convenience but also positions the development
                        as a hotspot for future growth. With ongoing infrastructure projects and the airport’s ambitious
                        expansion, The Valley Phase 2 is poised for significant capital appreciation. Additionally,
                        increased aviation activity is expected to drive rental demand, making it an ideal choice for
                        those seeking both peaceful living and lucrative investment opportunities.
                    </p>
                </div>
            </section>

            <section id="amenities" className="px-6 pt-5 pb-10 md:px-10 lg:px-16 scroll-mt-24 md:scroll-mt-28">
                <div className="mx-auto max-w-6xl space-y-4">
                    <h4 className="text-left text-xl md:text-2xl">
                        Amenities at The Valley - Phase 2
                    </h4>
                    <p >
                        The Valley's latest phase offers a curated selection of amenities that seamlessly integrate
                        nature and urban living, enhancing the everyday experience for residents. Highlights include:
                    </p>
                    <ul className="list-disc pl-10 ">
                        <li>
                            Urban Gardens: Thoughtfully landscaped spaces for relaxation and community gatherings.
                        </li>
                        <li>
                            Serene Dunes: Quiet, sandy areas that inspire creativity and provide a tranquil escape.
                        </li>
                        <li>
                            Forest Walks: Pathways through lush greenery for leisure and inspiration.
                        </li>
                        <li>
                            Open Meadows: Bright, sunlit spaces perfect for picnics, play, or peaceful moments.
                        </li>
                        <li>
                            Sensory Play Areas: Interactive zones offering unique experiences for all ages.
                        </li>
                        <li>
                            Nature-inspired Playgrounds: Imaginative spaces that blend play with natural elements.
                        </li>
                        <li>
                            Shallow River & Crossings: Gentle waterways and picturesque paths for reflection and fun.
                        </li>
                        <li>
                            Adventure Play Zone: Exciting challenges for kids and adults seeking thrills.
                        </li>
                        <li>
                            Skate Park: A dynamic space for skaters of all skill levels.
                        </li>
                        <li>
                            Flower Farm: A colorful retreat filled with fragrant blooms and vibrant scenery.
                        </li>
                    </ul>

                </div>
            </section>

            <section className="px-6 pb-16 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl space-y-8">
                    <h2 className="text-left text-2xl uppercase  md:text-3xl">
                        Nearby Communities
                    </h2>
                    <div className="grid gap-3 md:grid-cols-3">
                        {[
                            {
                                image: emmar13,
                                title: "Rashid Yachts & Marina",
                                subtitle: "A Unique Heritage Sails Into The Future",
                                detail: "1, 2, & 3 Bedroom Apartments",
                            },
                            {
                                image: emmar14,
                                title: "Dubai Creek Harbour",
                                subtitle: "Redefining Luxury Living by the Creek",
                                detail: "1, 2, & 3 Bedroom Apartments",
                            },
                            {
                                image: emmar15,
                                title: "Dubai Hills Estate",
                                subtitle: "A Green Oasis in the Heart of the City",
                                detail: "1, 2, & 3 Bedroom Apartments",
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
                                q: "WHERE IS THE VALLEY BY EMAAR LOCATED?",
                                a: "The Valley is conveniently and strategically located on the outskirts of Dubai, near Academic City, Dubai International Airport, and The Dubai Mall, offering easy access to key areas in Dubai.",
                            },
                            {
                                q: "WHAT TYPES OF PROPERTIES ARE AVAILABLE IN THE VALLEY BY EMAAR PROPERTIES?",
                                a: "The Valley offers a collection of luxury townhouses with spacious bedrooms, living and dining areas, modern kitchens, and high-quality finishes with configurations such as 3 to 5 bedrooms, spread across different clusters like Eden, Nara, Talia, Orania at The Valley, The Farm Gardens, Elora, Rivana, and Nima.",
                            },
                            {
                                q: "WHAT EDUCATIONAL AND HEALTHCARE FACILITIES ARE NEAR THE VALLEY BY EMAAR PROPERTIES?",
                                a: "The Valley by Emaar is designed to provide a family-friendly environment with proximity to schools and clinics. Residents can access highly rated educational institutions and modern healthcare facilities in nearby communities, ensuring convenience and quality services.",
                            },
                            {
                                q: "WHAT TRANSPORTATION OPTIONS ARE AVAILABLE NEAR THE VALLEY?",
                                a: "The Valley offers easy access to major transportation routes, including the Dubai-Al Ain Road. Its strategic location connects residents to key destinations in Dubai and beyond, making commuting hassle-free. Public transport and proposed future infrastructure enhancements will further improve accessibility.",
                            },
                            {
                                q: "WHAT DINING OPTIONS ARE AVAILABLE WITHIN THE VALLEY BY EMAAR?",
                                a: "Within The Valley, residents can enjoy a variety of dining experiences, including family-friendly cafes, restaurants, and boutique eateries. These dining spots cater to different tastes, making it easy to enjoy a meal without leaving the community.",
                            },
                            {
                                q: "WHAT ARE THE LIFESTYLE AMENITIES AT THE VALLEY BY EMAAR?",
                                a: "The Valley features an array of lifestyle amenities, such as parks, sports facilities, playgrounds, and retail hubs. Residents can enjoy landscaped gardens, walking trails, and recreational spaces designed to promote an active and vibrant lifestyle.",
                            },
                            {
                                q: "WHICH AIRPORT IS NEAREST TO THE VALLEY BY EMAAR?",
                                a: "The nearest airport to The Valley is Al Maktoum International Airport, offering convenient travel options and seamless connectivity for residents and visitors. This proximity enhances the appeal of The Valley as a well-connected suburban community.",
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
                        action="https://script.google.com/macros/s/AKfycbywwic8x5s6aI85f1vDmr3ee5vhG0c261cwMzNg9vSdX8UUsBDKtyhP_ov9L1kdNImEbg/exec?gid=0"
                        method="POST"
                        target="hiddenFrame"
                        onSubmit={() => {
                            setSubmitting(true);
                            setFeedback("");
                            const form = formRef.current;
                            if (form) {
                                const pageField = form.querySelector('input[name="page_name"]');
                                if (pageField) pageField.value = window.location.href;
                                const pageUrlField = form.querySelector('input[name="page_url"]');
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
                            <input
                                type="tel"
                                name="phone"
                                required
                                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
                            />
                        </label>
                        <input type="hidden" name="page_name" value={window.location.href} />
                        <input type="hidden" name="page_url" value={window.location.href} />
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
                        Register Your Interest
                    </a>
                </div>
            </div>
        </div>
    );
}

export default EmaarValley;
