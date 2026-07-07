import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BriefcaseBusiness,
    Building2,
    CalendarDays,
    Check,
    ChevronDown,
    Coffee,
    CreditCard,
    DollarSign,
    FileText,
    Home,
    Layers3,
    MapPin,
    Menu,
    Monitor,
    ShieldCheck,
    TrendingUp,
    X
} from 'lucide-react';
import Img13 from '../../Assests/Samana/cp2.13.jpg';
import Img14 from '../../Assests/Samana/cp2.14.jpg';
import Img15 from '../../Assests/Samana/cp2.15.jpg';
import Img18 from '../../Assests/Samana/cp2.18.jpg';
import MapImg from '../../Assests/Samana/Map_Samana_Business_Hub.png';
import SamanaLogo from '../../Assests/Samana/SamanaLogo.png';
import SamanaBusinessHubLogo from '../../Assests/Samana/Samana_Business_Hub_logo.png';
import Head from '../../Assests/Samana/cp2.1.jpg';
import { applySamanaSeo } from './samanaSeo';

const navItems = [
    { label: 'The Project', href: '#why' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Office Spaces', href: '#offices' },
    { label: 'Location', href: '#location' }
];

const featureStrip = [
    { label: 'Next to Metro', icon: Home },
    { label: '590-17,500 Sq.Ft.', icon: Layers3 },
    { label: '100% Freehold', icon: ShieldCheck },
    { label: 'High Rental Returns', icon: TrendingUp },
    { label: 'Flexible Payment Plan', icon: CreditCard }
];

const whyCards = [
    {
        title: 'Early Launch Pricing',
        text: "Secure today's pricing before future revisions.",
        icon: TrendingUp
    },
    {
        title: 'Metro Connected',
        text: '1-minute walk to Dubai Metro for employees and clients.',
        icon: Home
    },
    {
        title: 'Flexible 1% Monthly Plan',
        text: 'Spread your investment with easy payments.',
        icon: CreditCard
    },
    {
        title: 'Freehold Ownership',
        text: '100% ownership for all nationalities.',
        icon: ShieldCheck
    },
    {
        title: 'Prime Sheikh Zayed Road Address',
        text: "Dubai's leading commercial corridor.",
        icon: MapPin
    },
    {
        title: 'High Rental Demand',
        text: 'Located in an established business district with strong leasing potential.',
        icon: Building2
    }
];

const locationStats = [
    ['11,000+', 'Companies', 'Operating within a 5km radius'],
    ['1 Min', 'To Dubai Metro', 'Direct walking access'],
    ['10 Min', 'To Expo City', 'Dubai 2030 masterplan'],
    ['15 Min', 'To DWC Airport', 'Al Maktoum International Airport'],
    ['20 Min', 'To Business Bay', "Dubai's commercial hub"],
    ['15 Min', 'To Dubai Marina', 'Coastal business district']
];

const snapshotStats = [
    ['Starting Price', 'From AED 1.46M', ''],
    ['Payment Plan', 'Pay Just 20%', 'to Book'],
    ['Handover', 'Q2 2029', ''],
    ['Ownership', '100% Freehold', ''],
    ['Location', 'Sheikh Zayed Road', 'Next to Metro'],
    ['Investment Potential', 'Strong Rental Demand', '']
];

const paymentSteps = [
    { pct: '20%', title: 'On Booking', text: 'Initial reservation', icon: CalendarDays },
    { pct: '30%', title: 'During Construction', text: 'Flexible instalments', icon: Building2 },
    { pct: '10%', title: 'On Handover', text: 'Q2 2029', icon: Check },
    { pct: '40%', title: 'Post Handover', text: 'Ask for schedule', icon: DollarSign }
];

const officeCards = [
    {
        title: '590-760 Sq.Ft.',
        text: 'Compact offices, ideal for lean teams and startups. From AED 1.46M.',
        label: 'Compact offices',
        image: Img14
    },
    {
        title: '804-1,200 Sq.Ft.',
        text: 'Mid-size offices for growing teams. From AED 1.98M.',
        label: 'Growing teams',
        image: Img13
    },
    {
        title: '1,200-2,500 Sq.Ft.',
        text: 'Large offices for established companies. From AED 2.95M.',
        label: 'Large offices',
        image: Img15
    },
    {
        title: '2,500-17,500 Sq.Ft.',
        text: 'Full-floor offices and headquarters. From AED 6.20M.',
        label: 'Full-floor options',
        image: Img18
    }
];

const amenities = [
    { label: 'Executive Business Lounge', icon: BriefcaseBusiness },
    { label: 'Fully Equipped Meeting Rooms', icon: FileText },
    { label: 'Business Centre', icon: Monitor },
    { label: 'Cafe & Retail Spaces', icon: Coffee },
    { label: 'Smart Building Technology', icon: Layers3 },
    { label: '24/7 Security & Concierge', icon: ShieldCheck }
];

const faqItems = [
    {
        q: 'Can foreign nationals buy an office at Samana Business Hub?',
        a: 'Yes. The project offers full freehold ownership, so buyers of any nationality can own 100% of their office space.'
    },
    {
        q: 'What is the payment plan?',
        a: 'The plan is 20% on booking, 30% during construction, 10% on handover, and 40% post-handover.'
    },
    {
        q: 'When is handover?',
        a: 'Handover is scheduled for Q2 2029.'
    },
    {
        q: 'Can I get financing or a mortgage?',
        a: 'Our sales team can connect you with banking partners for commercial property financing options.'
    },
    {
        q: 'Is this suitable for end-use as well as investment?',
        a: 'Yes. Office sizes range from 590 to 17,500 sq.ft., serving both owner-occupiers and investors seeking rental income.'
    }
];

function SamanaBussinessHub() {
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        interest: ''
    });

    useEffect(() => {
        const cleanupSeo = applySamanaSeo(
            'Samana Business Hub | Offices for Sale on Sheikh Zayed Road',
            'Premium commercial offices for sale in Samana Business Hub, Sheikh Zayed Road, Dubai. Offices from AED 1.46M with flexible payment plans and metro access.'
        );
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = '';
            cleanupSeo();
        };
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleNavClick = (href) => {
        const target = document.querySelector(href);
        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - 84;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        setIsNavOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        const sanitizedPhone = form.phone.replace(/\D/g, '');
        const payload = new FormData();
        payload.set('name', form.name);
        payload.set('email', form.email);
        payload.set('phone', sanitizedPhone);
        payload.set('message', form.interest ? `Interest: ${form.interest}` : 'Samana Business Hub investment details');
        payload.set('campaignName', 'SamanaBusinessHub-HU-GADS-206631');
        payload.set('pageUrl', window.location.href);

        try {
            setIsSubmitting(true);
            await fetch('https://script.google.com/macros/s/AKfycbxTrPUIKN5-vZAda8_PTCJ_Fdpry7a9P-SKrYNoXGuWIeRHnmb-AptkapEqihZdJiik2g/exec', {
                method: 'POST',
                body: payload,
                mode: 'no-cors'
            });

            setForm({
                name: '',
                email: '',
                phone: '',
                interest: ''
            });
            navigate('/samana/samanabusinesshub/thanks');
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderLeadForm = (title, showTrust = false) => (
        <form className="rounded-md border border-[#d8a65a]/60 bg-[#030c1a]/95 p-6 shadow-[0_25px_70px_rgba(0,0,0,.35)] sm:p-8" onSubmit={handleSubmit}>
            <h3 className="text-xl font-black uppercase leading-tight text-white">
                {title} <span className="text-[#d8a65a]">Details</span>
            </h3>
            <div className="mt-5 space-y-3">
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Full Name"
                    className="h-[52px] w-full rounded border border-[#dfe3e8] bg-white px-4 py-3 text-sm text-[#06101d] outline-none focus:border-[#d8a65a]"
                />
                <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    placeholder="Phone Number"
                    className="h-[52px] w-full rounded border border-[#dfe3e8] bg-white px-4 py-3 text-sm text-[#06101d] outline-none focus:border-[#d8a65a]"
                />
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="Email Address"
                    className="h-[52px] w-full rounded border border-[#dfe3e8] bg-white px-4 py-3 text-sm text-[#06101d] outline-none focus:border-[#d8a65a]"
                />
                <div className="relative">
                    <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="h-[52px] w-full appearance-none rounded border border-[#dfe3e8] bg-white px-4 pr-11 text-sm text-[#06101d] outline-none focus:border-[#d8a65a]"
                    >
                        <option value="">I am interested in</option>
                        <option value="Office investment">Office investment</option>
                        <option value="Own office use">Own office use</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#06101d]" size={18} />
                </div>
            </div>
            <p className="mt-4 text-[11px] leading-5 text-[#c7cbd1]">
                By submitting, you agree to be contacted by Samana Developers and its sales representatives about this project.
            </p>
            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 inline-flex h-14 w-full items-center justify-center rounded bg-[#d8a65a] px-6 text-xs font-black uppercase tracking-[0.03em] text-[#040e1c] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(216,166,90,.4)] disabled:cursor-not-allowed disabled:opacity-70"
            >
                {isSubmitting ? 'Submitting...' : 'Get Investment Pack'}
            </button>
            {showTrust && (
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-bold text-white">
                    {['Instant Brochure', 'Payment Plan', 'Floor Plans', 'Availability'].map((item) => (
                        <span key={item} className="flex items-center gap-2">
                            <Check size={14} className="text-[#d8a65a]" />
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </form>
    );

    return (
        <main className="min-h-screen bg-white pb-20 text-[#06101d] lg:pb-0">
            <header className="sticky top-0 z-50 border-b border-[#d8a65a]/20 bg-[#061524]/95 backdrop-blur">
                <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
                    <button type="button" onClick={() => handleNavClick('#hero')} className="flex items-center gap-3" aria-label="Samana Developers home">
                        <img src={SamanaLogo} alt="Samana Developers" className="h-8 w-auto" />
                    </button>

                    <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => handleNavClick(item.href)}
                                className="text-xs font-bold uppercase tracking-[0.04em] text-white/85 transition hover:text-[#d8a65a]"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => handleNavClick('#hero-form')}
                            className="hidden rounded border border-[#d8a65a] px-5 py-3 text-xs font-black uppercase text-[#d8a65a] transition hover:bg-[#d8a65a] hover:text-[#040e1c] sm:inline-flex"
                        >
                            Get Pricing
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                            className="inline-flex text-white lg:hidden"
                            aria-expanded={isNavOpen}
                            aria-label="Toggle menu"
                        >
                            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {isNavOpen && (
                    <div className="border-t border-[#d8a65a]/20 bg-[#040e1c] px-6 py-4 lg:hidden">
                        <div className="mx-auto flex max-w-[1280px] flex-col">
                            {[...navItems, { label: 'Get Pricing', href: '#hero-form' }].map((item) => (
                                <button
                                    key={item.label}
                                    type="button"
                                    onClick={() => handleNavClick(item.href)}
                                    className="border-b border-white/10 py-3 text-left text-sm font-bold uppercase text-white"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <section
                id="hero"
                className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#061524] bg-cover bg-center text-white"
                style={{ backgroundImage: `linear-gradient(100deg,rgba(4,14,28,.72) 5%,rgba(4,14,28,.58) 40%,rgba(4,14,28,.28) 70%,rgba(4,14,28,.68) 100%), url(${Head})` }}
            >
                <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-6 py-14 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
                    <div>
                        <div className="text-xs font-black uppercase tracking-[0.15em] text-[#d8a65a]">Premium Investment Opportunity</div>
                        <img src={SamanaBusinessHubLogo} alt="Samana Business Hub" className="mt-6 h-28 w-auto sm:h-36" />
                        <h1 className="mt-6 text-[2.35rem] font-black uppercase leading-[0.98] sm:text-[4rem]">
                            Invest in Dubai's Fastest<br />
                            <span className="text-[#d8a65a]">Growing Business Address</span>
                        </h1>
                        <h2 className="mt-4 text-xl font-black uppercase leading-tight sm:text-3xl">On Sheikh Zayed Road, Next to Dubai Metro</h2>
                        <p className="mt-5 max-w-xl text-base leading-7 text-[#eceef1]">
                            Freehold commercial offices on Sheikh Zayed Road with flexible payment plans, next to Dubai Metro and strong rental demand.
                        </p>

                        <div className="mt-8 grid grid-cols-2 border-y border-white/20 bg-black/25 backdrop-blur sm:grid-cols-3 lg:grid-cols-5">
                            {featureStrip.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className={`border-white/15 px-3 py-5 text-center ${index !== featureStrip.length - 1 ? 'border-r' : ''}`}>
                                        <Icon className="mx-auto text-[#d8a65a]" size={26} />
                                        <strong className="mt-3 block text-[11px] font-bold uppercase leading-tight">{item.label}</strong>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div id="hero-form" className="scroll-mt-24">
                        {renderLeadForm('Get Complete Investment Pack', true)}
                    </div>
                </div>
            </section>

            <section id="why" className="px-6 py-16">
                <div className="mx-auto max-w-[1280px]">
                    <h2 className="text-center text-2xl font-black uppercase sm:text-3xl">
                        WHY INVEST NOW
                    </h2>
                    <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {whyCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.title} className="rounded-md border border-[#f0ede6] bg-white p-6 shadow-[0_10px_30px_rgba(6,21,36,.10)]">
                                    <Icon className="text-[#d8a65a]" size={34} />
                                    <h3 className="mt-4 text-sm font-black uppercase">{card.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#4a5568]">{card.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="location" className="bg-[#061524] px-6 py-16 text-white">
                <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="text-xs font-black uppercase tracking-[0.15em] text-[#d8a65a]">At the Heart of Dubai's Growth</div>
                        <h2 className="mt-2 text-3xl font-black uppercase">On Sheikh Zayed Road</h2>
                        <div className="mt-7 grid grid-cols-2 gap-6">
                            {locationStats.map(([value, title, text]) => (
                                <div key={title}>
                                    <strong className="block text-3xl font-black leading-none text-[#d8a65a]">{value}</strong>
                                    <b className="mt-2 block text-xs uppercase">{title}</b>
                                    <span className="mt-1 block text-xs text-[#c7cbd1]">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative min-h-[320px] overflow-hidden rounded-md">
                        <img src={MapImg} alt="Map showing Samana Business Hub location on Sheikh Zayed Road" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-[#061524]/25" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8a65a] px-5 py-3 text-center text-xs font-black uppercase text-[#040e1c] shadow-[0_8px_20px_rgba(0,0,0,.3)]">
                            Samana<br />Business Hub
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-14 text-center">
                <div className="mx-auto max-w-[1280px]">
                    <h2 className="text-2xl font-black uppercase sm:text-3xl">Investment Snapshot</h2>
                    <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                        {snapshotStats.map(([label, value, suffix]) => (
                            <div key={label} className="rounded-md bg-white px-3 py-6 shadow-[0_10px_30px_rgba(6,21,36,.10)]">
                                <small className="text-[11px] font-black uppercase text-[#4a5568]">{label}</small>
                                <strong className="my-2 block text-lg font-black">{value}</strong>
                                <small className="text-[11px] font-black uppercase text-[#4a5568]">{suffix || '\u00a0'}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="payment-plan" className="bg-[#061524] px-6 py-14 text-white">
                <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                    <div className="text-center lg:text-left">
                        <div className="text-xs font-black uppercase tracking-[0.15em] text-[#d8a65a]">Flexible & Interest-Free</div>
                        <h2 className="mt-2 text-3xl font-black uppercase">Payment Plan</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-5 text-center lg:grid-cols-4">
                        {paymentSteps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.title}>
                                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#d8a65a] text-[#040e1c]">
                                        <Icon size={26} />
                                    </div>
                                    <strong className="block text-2xl font-black text-[#d8a65a]">{step.pct}</strong>
                                    <b className="mt-1 block text-[11px] uppercase">{step.title}</b>
                                    <span className="text-[11px] text-[#c7cbd1]">{step.text}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="rounded-md border border-[#d8a65a]/60 p-6 text-center lg:max-w-[260px]">
                        <p className="text-sm leading-6 text-[#d8dce3]">Get the full instalment schedule sent to your inbox in under 2 minutes.</p>
                        <button type="button" onClick={() => handleNavClick('#hero-form')} className="mt-4 w-full rounded bg-[#d8a65a] px-5 py-4 text-xs font-black uppercase text-[#040e1c]">
                            Get Payment Plan
                        </button>
                    </div>
                </div>
            </section>

            <section id="offices" className="px-6 py-16 text-center">
                <div className="mx-auto max-w-[1280px]">
                    <h2 className="text-2xl font-black uppercase sm:text-3xl">Office Spaces Designed for Every Business</h2>
                    <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {officeCards.map((card) => (
                            <div key={card.title} className="flex overflow-hidden rounded-md bg-white text-left shadow-[0_10px_30px_rgba(6,21,36,.10)]">
                                <div className="flex w-full flex-col">
                                    <div className="relative h-48">
                                        <img src={card.image} alt={card.label} className="h-full w-full object-cover" />
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,21,36,0)_45%,rgba(6,21,36,.75)_100%)]" />
                                        <span className="absolute bottom-3 left-3 rounded bg-[#061524]/60 px-3 py-1 text-[11px] font-black uppercase tracking-[0.05em] text-white">{card.label}</span>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-3 p-5">
                                        <h3 className="text-lg font-black">{card.title}</h3>
                                        <p className="text-sm leading-6 text-[#4a5568]">{card.text}</p>
                                        <button
                                            type="button"
                                            onClick={() => handleNavClick('#hero-form')}
                                            className="mt-auto rounded border border-[#d8a65a] px-5 py-3 text-xs font-black uppercase text-[#b9803c]"
                                        >
                                            Get Floor Plan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="amenities" className="bg-[#f7f3ed] px-6 py-14 text-center">
                <div className="mx-auto max-w-[1280px]">
                    <h2 className="text-2xl font-black uppercase sm:text-3xl">Everything Your Business Needs Under One Roof</h2>
                    <div className="mt-9 grid grid-cols-2 gap-7 lg:grid-cols-4">
                        {amenities.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label} className="flex flex-col items-center gap-3">
                                    <Icon className="text-[#d8a65a]" size={30} />
                                    <b className="text-sm leading-5">{item.label}</b>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* <section id="gallery" className="px-6 py-16 pt-10">
                <div className="mx-auto max-w-[1280px]">
                    <h2 className="text-center text-2xl font-black uppercase sm:text-3xl">
                        A Building Designed to Impress <span className="text-[#b9803c]">Clients & Employees</span>
                    </h2>
                    <div className="mt-9 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
                        {[
                            { image: PoolImg, label: 'Rooftop Infinity Pool & Sky Deck' },
                            { image: Img17, label: 'Cafe & Lounge' }
                        ].map((item) => (
                            <div key={item.label} className="relative min-h-[340px] overflow-hidden rounded-md shadow-[0_10px_30px_rgba(6,21,36,.10)]">
                                <img src={item.image} alt={item.label} className="absolute inset-0 h-full w-full object-cover" />
                                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(6,21,36,0),rgba(6,21,36,.75))] p-5 text-sm font-black uppercase text-white">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* <section className="border-y border-[#eee] px-6 py-9 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#4a5568]">Regulated & Verified</p>
                <div className="mt-4 flex flex-wrap justify-center gap-7 text-sm font-bold text-[#4a5568]">
                    {['RERA Registered Project', 'DLD Registered', 'Escrow Protected Payments'].map((item) => (
                        <span key={item} className="flex items-center gap-2">
                            <ShieldCheck size={20} className="text-[#b9803c]" />
                            {item}
                        </span>
                    ))}
                </div>
            </section> */}

            <section id="faq" className="mx-auto max-w-[820px] px-6 py-16">
                <h2 className="text-center text-2xl font-black uppercase sm:text-3xl">Common Questions</h2>
                <div className="mt-7">
                    {faqItems.map((item) => (
                        <details key={item.q} className="group border-b border-[#e7e2d8] py-5">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black">
                                {item.q}
                                <span className="text-2xl leading-none text-[#b9803c] group-open:hidden">+</span>
                                <span className="hidden text-2xl leading-none text-[#b9803c] group-open:inline">-</span>
                            </summary>
                            <p className="mt-3 text-sm leading-6 text-[#4a5568]">{item.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section id="contact" className="bg-[#061524] px-6 py-16 text-white">
                <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
                    <div>
                        <div className="text-xs font-black uppercase tracking-[0.15em] text-[#d8a65a]">Secure Today's Pricing</div>
                        <h2 className="mt-3 max-w-xl text-3xl font-black uppercase leading-tight sm:text-4xl">READY TO INVEST IN SHEIKH ZAYED ROAD?</h2>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-[#d8dce3]">
                            Request the latest pricing, floor plans, available units, and complete payment schedule before the next price revision.
                        </p>
                        <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                            {['From AED 2,070 per Sq.Ft.', '1% Monthly Payment Plan', '100% Freehold Ownership'].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <Check size={16} className="text-[#d8a65a]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {renderLeadForm('Get Investment')}
                </div>
            </section>

            <footer className="bg-[#07111f] px-6 py-8 text-[#c7cbd1]">
                <div className="mx-auto grid max-w-[1280px] gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <img src={SamanaLogo} alt="Samana Developers" className="h-8 w-auto" />
                        <p className="mt-4 leading-6">Premium commercial offices at Samana Business Hub on Sheikh Zayed Road.</p>
                    </div>
                    <div>
                        <h5 className="text-xs font-black uppercase text-white">Project</h5>
                        <p className="mt-3 leading-6">Samana Business Hub<br />Sheikh Zayed Road, Dubai</p>
                    </div>
                    <div>
                        <h5 className="text-xs font-black uppercase text-white">Enquiries</h5>
                        <button type="button" onClick={() => handleNavClick('#hero-form')} className="mt-3 text-left leading-6 text-[#c7cbd1]">
                            Request pricing and floor plans
                        </button>
                    </div>
                    <div>
                        <h5 className="text-xs font-black uppercase text-white">Developer</h5>
                        <p className="mt-3 leading-6">Samana Developers (c) 2026</p>
                    </div>
                </div>
            </footer>

            <div className="fixed inset-x-0 bottom-0 z-[60] flex gap-2 border-t border-[#d8a65a]/40 bg-[#040e1c] p-3 lg:hidden" aria-label="Quick actions">
                <button type="button" onClick={() => handleNavClick('#hero-form')} className="w-full rounded bg-[#d8a65a] px-3 py-3 text-xs font-black uppercase text-[#040e1c]">
                    Get Pricing
                </button>
            </div>
        </main>
    );
}

export default SamanaBussinessHub;

