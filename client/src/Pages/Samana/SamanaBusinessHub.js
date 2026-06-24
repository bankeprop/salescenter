import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Building2,
    Store,
    Layers3,
    ShieldCheck,
    Sparkles,
    MapPinned,
    Menu,
    Minus,
    Plus,
    X
} from 'lucide-react';
import HeroImg from '../../Assests/Samana/cp2.1.jpg';
import HeadDesktop from '../../Assests/Samana/HeadDesktop.png';
import Img2 from '../../Assests/Samana/cp2.2.jpg';
import Img3 from '../../Assests/Samana/cp2.3.jpg';
import LoungeImg from '../../Assests/Samana/cp2.4.jpg';
import HeaderImg from '../../Assests/Samana/cp2.5.jpg';
import GymImg from '../../Assests/Samana/cp2.6.jpg';
import Img7 from '../../Assests/Samana/cp2.7.jpg';
import PoolImg from '../../Assests/Samana/cp2.8.jpg';
import Img9 from '../../Assests/Samana/cp2.9.jpg';
import TowerImg from '../../Assests/Samana/cp2.10.jpg';
import Img11 from '../../Assests/Samana/cp2.11.jpg';
import OfficeImg from '../../Assests/Samana/cp2.12.jpg';
import Img13 from '../../Assests/Samana/cp2.13.jpg';
import Img14 from '../../Assests/Samana/cp2.14.jpg';
import Img15 from '../../Assests/Samana/cp2.15.jpg';
import WellnessImg from '../../Assests/Samana/cp2.16.jpg';
import Img17 from '../../Assests/Samana/cp2.17.jpg';
import Img18 from '../../Assests/Samana/cp2.18.jpg';
import Img19 from '../../Assests/Samana/cp2.19.jpg';
import MapImg from '../../Assests/Samana/Map_Samana_Business_Hub.png';
import QRImg from '../../Assests/Samana/QR.jpeg';
import SamanaLogo from '../../Assests/Samana/SamanaLogo.png';
import Samana_Business_Hub_logo from '../../Assests/Samana/Samana_Business_Hub_logo.png';
import { applySamanaSeo } from './samanaSeo';

const sectionStats = [
    { value: '18 Floors', label: 'Of Office Spaces', icon: Building2 },
    { value: '16 Units', label: 'Curated Retail Units', icon: Store },
    { value: '13', label: 'High-Speed Elevators', icon: Layers3 },
];

const chapters = [
    {
        eyebrow: 'UNIT CATALOGUE',
        title: 'Designed for Every Scale of Business.',
        text: 'From 590 sq ft compact units designed for ambitious startups to 17,500 sq ft full-floor headquarters, every unit is freehold, fully owned, and ready to scale.',
        image: OfficeImg,
        reverse: false,
        bullets: ['Retail units', 'Compact offices', 'Mid-size offices', 'Full-floor options']
    }
];

const galleryImages = [
    HeroImg,
    Img2,
    Img3,
    LoungeImg,
    HeaderImg,
    GymImg,
    Img7,
    PoolImg,
    Img9,
    TowerImg,
    Img11,
    OfficeImg,
    Img13,
    Img14,
    Img15,
    WellnessImg,
    Img17,
    Img18,
    Img19
];

const SAMANA_GTM_ID = 'GTM-WT564CWM';

function AccordionItem({ item, open, onClick }) {
    return (
        <div className="border border-white/10 bg-[#141b2c]">
            <button
                type="button"
                onClick={onClick}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
            >
                <span className="text-sm font-semibold text-[#efe8dc]">{item.q}</span>
                {open ? <Minus size={16} className="text-[#d9b58d]" /> : <Plus size={16} className="text-[#d9b58d]" />}
            </button>
            {open && <div className="px-4 pb-4 text-sm leading-7 text-[#c9bca9]">{item.a}</div>}
        </div>
    );
}

function SamanaBussinessHub() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(0);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [hasAutoOpenedForm, setHasAutoOpenedForm] = useState(false);
    const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
    const [activeMobileGalleryIndex, setActiveMobileGalleryIndex] = useState(0);
    const mobileGalleryRef = useRef(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${SAMANA_GTM_ID}`;
        script.dataset.samanaGtm = SAMANA_GTM_ID;

        const firstScript = document.getElementsByTagName('script')[0];
        if (firstScript?.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
        } else {
            document.head.appendChild(script);
        }

        return () => {
            script.remove();
        };
    }, []);

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

    useEffect(() => {
        const handleScroll = () => {
            if (hasAutoOpenedForm || window.scrollY <= 40) return;
            setIsFormOpen(true);
            setHasAutoOpenedForm(true);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasAutoOpenedForm]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const navItems = [
        { label: 'Architecture', href: '#architecture' },
        { label: 'Amenities', href: '#amenities' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Payment Plan', href: '#payment-plan' },
        { label: 'Location', href: '#location' },
        { label: 'Contact Us', href: '#contact-inquiry' }
    ];

    const handleNavClick = (href) => {
        const target = document.querySelector(href);
        if (target) {
            const offset = window.innerWidth < 1024 ? 400 : 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
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
        payload.set('message', form.message);
        payload.set('campaignName', 'Samana Business Hub');
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
                message: ''
            });
            setIsFormOpen(false);
            navigate('/samana/samanabusinesshub/thanks');
        } finally {
            setIsSubmitting(false);
        }
    };

    const openGallery = (index) => setSelectedGalleryIndex(index);
    const closeGallery = () => setSelectedGalleryIndex(null);
    const goPrevGallery = () =>
        setSelectedGalleryIndex((current) => (current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length));
    const goNextGallery = () =>
        setSelectedGalleryIndex((current) => (current === null ? current : (current + 1) % galleryImages.length));

    const handleMobileGalleryScroll = () => {
        const container = mobileGalleryRef.current;
        if (!container) return;

        const nextIndex = Math.round(container.scrollLeft / container.clientWidth);
        setActiveMobileGalleryIndex(Math.max(0, Math.min(galleryImages.length - 1, nextIndex)));
    };

    return (
        <main className="min-h-screen bg-[#0b1020] text-white">
            <div className="sticky top-0 z-50 border-y border-white/10 bg-[#0b1020]/95 backdrop-blur">
                <div className="mx-auto flex w-full items-center px-6 py-3 lg:px-[12%]">
                    <div className="flex items-center gap-3">
                        <img
                            src={SamanaLogo}
                            alt="Samana Logo"
                            className="h-6 w-auto sm:h-7 lg:h-8"
                        />
                    </div>

                    <div className="hidden flex-1 items-center justify-end gap-2 lg:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => handleNavClick(item.href)}
                                className={
                                    item.label === 'Contact Us'
                                        ? 'rounded-none border border-[#d9b58d] bg-[#d9b58d] px-4 py-2 text-sm font-semibold text-[#0b1020] transition hover:bg-[#efc27a]'
                                        : 'rounded-none px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white'
                                }
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="ml-auto flex items-center gap-3 lg:hidden">
                        <button
                            type="button"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                            className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 text-sm font-medium text-white lg:hidden"
                            aria-expanded={isNavOpen}
                            aria-label="Toggle navigation"
                        >
                            <Menu size={18} />
                            Menu
                        </button>
                    </div>
                </div>

                {isNavOpen && (
                    <div className="border-t border-white/10 bg-[#0b1020] px-6 py-4 lg:hidden">
                        <div className="mx-auto flex w-full flex-col gap-2 lg:px-[12%]">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    type="button"
                                    onClick={() => handleNavClick(item.href)}
                                    className={
                                        item.label === 'Contact Us'
                                            ? 'rounded-none border border-[#d9b58d] bg-[#d9b58d] px-4 py-3 text-left text-sm font-semibold text-[#0b1020]'
                                            : 'rounded-none border border-white/10 px-4 py-3 text-left text-sm text-white/85'
                                    }
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <section className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0 hidden md:block">
                    <img src={HeadDesktop} alt="Samana Business Hub" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#0b1020]/72" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,32,0.25)_0%,rgba(11,16,32,0.8)_100%)]" />
                </div>

                <div className="md:hidden">
                    <div className="relative h-[74vh] overflow-hidden">
                        <img src={HeaderImg} alt="Samana Business Hub" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-[#0b1020]/72" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,32,0.25)_0%,rgba(11,16,32,0.8)_100%)]" />

                        <div className="absolute inset-x-0 bottom-0 px-[5%] pb-24">
                            <div className="flex w-[88vw] max-w-[360px] flex-col items-start sm:max-w-4xl">
                                {/* <h1 className="font-big-moore mt-6 whitespace-nowrap bg-[linear-gradient(90deg,#fae4cd_0%,#de9d63_52%,#95613e_100%)] bg-clip-text text-[1.95rem] leading-[1] tracking-[-0.04em] text-transparent">
                  Samana Business Hub
                </h1> */}
                                <div className="w-full max-w-[240px] sm:max-w-[360px]">
                                    <img
                                        src={Samana_Business_Hub_logo}
                                        alt="Samana Logo"
                                        className="block h-auto w-full"
                                    />
                                </div>
                                <h2 className="font-big-moore mt-3 w-full max-w-[340px] whitespace-nowrap text-left text-[1rem] leading-[0.92] tracking-[-0.03em] text-white sm:max-w-none sm:text-[1.45rem] lg:text-[1.65rem]">
                                    <span className="inline">A New Landmark on Sheikh Zayed Road.</span>
                                </h2>
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 px-[5%] pb-8">
                            <div className="max-w-4xl">
                                <a
                                    href="#register"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setIsFormOpen(true);
                                    }}
                                    className="inline-flex w-full max-w-[240px] items-center justify-center gap-3 bg-[#d7aa63] px-5 py-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] whitespace-nowrap text-[#0b1020] transition hover:bg-[#efc27a] sm:w-fit sm:max-w-none sm:px-8 sm:text-sm sm:tracking-[0.25em]"
                                >
                                    Register Your Interest
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="px-[5%] pb-5 pt-3 md:hidden">
                        <p className="max-w-4xl text-base leading-7 text-white">
                            Samana Business Hub is Dubai's next-generation commercial address, offering premium grade A offices, retail units, and amenity-led workspaces on Sheikh Zayed Road, making it the epicentre of momentum is scheduled for Q2 2029.
                        </p>
                    </div>

                    <div className="px-[5%] pb-5 pt-3">
                        <div className="space-y-3">
                            {sectionStats.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        className="animate-[slideInUp_0.65s_ease-out_forwards] opacity-0 flex items-center gap-4 pt-4"
                                        style={{ animationDelay: `${index * 90}ms` }}
                                    >
                                        <div className="flex aspect-square h-10 w-10 items-center justify-center border border-[#d9b58d]/50 text-[#d9b58d]">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <div className="text-base font-semibold tracking-[0.01em] text-white">{item.value}</div>
                                            <div className="whitespace-nowrap text-xs tracking-[0.08em] text-[#cfb89d]">{item.label}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-6 flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center border border-[#d9b58d]/40 bg-white p-1">
                                <img src={QRImg} alt="QR code" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto hidden min-h-screen w-full flex-col justify-end px-6 pb-16 pt-12 md:flex lg:px-[12%]">
                    <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                        <div className="pt-10 max-w-[1180px]">
                            <div className="mt-6 flex items-center gap-3">
                                <img
                                    src={Samana_Business_Hub_logo}
                                    alt="Samana Logo"
                                    className="h-72 w-auto sm:h-56 lg:h-64"
                                />
                            </div>
                            <h2 className="font-big-moore mt-3 whitespace-nowrap text-[0.95rem] leading-[1] tracking-[-0.03em] text-white sm:text-[1.45rem] lg:text-[1.65rem]">
                                <span className="inline">A New Landmark on Sheikh Zayed Road.</span>
                            </h2>
                            <p className="mt-6 max-w-[720px] text-base leading-7 text-white sm:mt-8 sm:text-[1.05rem] sm:leading-8">
                                Samana Business Hub is Dubai's next-generation commercial address, offering premium grade A offices, retail units, and amenity-led workspaces on Sheikh Zayed Road, making it the epicentre of momentum is scheduled for Q2 2029.
                            </p>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#register"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setIsFormOpen(true);
                                    }}
                                    className="inline-flex items-center justify-center gap-3 bg-[#d7aa63] px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#0b1020] transition hover:bg-[#efc27a]"
                                >
                                    Register Your Interest
                                </a>
                            </div>

                            <div className="mt-5 space-y-3 sm:hidden">
                                {sectionStats.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.label}
                                            className="animate-[slideInUp_0.65s_ease-out_forwards] opacity-0 flex items-center gap-5 pt-4"
                                            style={{ animationDelay: `${index * 90}ms` }}
                                        >
                                            <div className="flex aspect-square h-10 w-10 items-center justify-center border border-[#d9b58d]/50 text-[#d9b58d]">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <div className="text-base font-semibold text-white">{item.value}</div>
                                                <div className="whitespace-nowrap text-xs text-[#cfb89d]">{item.label}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 hidden flex-nowrap gap-0 sm:mt-10 sm:flex">
                                {sectionStats.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.label} className="flex min-w-[240px] flex-1 items-center gap-5 pt-4 sm:gap-6">
                                            <div className="flex aspect-square h-10 w-10 items-center justify-center border border-[#d9b58d]/50 bg-[#0f1526]/40 text-[#d9b58d] sm:h-12 sm:w-12">
                                                <Icon size={20} />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="whitespace-nowrap text-base font-semibold text-white sm:text-lg">{item.value}</div>
                                                <div className="whitespace-nowrap text-xs leading-tight text-[#cfb89d] sm:text-sm">{item.label}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-5 flex items-center gap-4">
                                <div className="flex h-20 w-20 items-center justify-center border border-[#d9b58d]/40 bg-white p-1 sm:h-24 sm:w-24">
                                    <img src={QRImg} alt="QR code" className="h-full w-full object-cover" />
                                </div>
                            </div>

                        </div>

                        <div />
                    </div>
                </div>
            </section>

            <section id="one-vision" className="bg-[#0b1020] px-6 py-10 sm:py-24 lg:px-[12%]">
                <div className="mx-auto flex w-full flex-col justify-start text-left">
                    <div className="max-w-4xl">
                        <p className="text-xs uppercase tracking-[0.45em] text-[#d9b58d]">One Vision</p>
                        <h2 className="font-big-moore mt-5 text-5xl leading-tight text-white sm:text-6xl">
                            The <span className="text-[#d9b58d] italic">Epicenter</span> of <br />Commercial Growth.
                        </h2>
                        <p className="mt-8 max-w-4xl text-lg leading-8 text-[#d8c9b8]">
                            Designed for businesses shaping the next decade of Dubai, Samana Business Hub brings together grade-A offices, curated retail, and amenity-led workspaces in a single sculptural address on Sheikh Zayed Road. A double-skin glazed facade defines a vertical workplace of 18 office floors above 16 ground-level retail units, served by 13 high-speed elevators.
                        </p>
                        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#d8c9b8]">
                            This is commercial real estate reimagined as lifestyle infrastructure, where pool decks and boardrooms share the same address and a productive day ends with a sunset view rather than a commute home.
                        </p>
                    </div>
                </div>
            </section>

            <section id="architecture" className="relative overflow-hidden bg-[#0b1020] px-6 py-10 sm:py-24 lg:px-[12%]">
                <div className="absolute inset-0">
                    <img src={HeroImg} alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#07101f]/84" />
                    <div className="absolute inset-0 bg-[#050b18]/85" />
                </div>

                <div className="relative mx-auto grid w-full gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div>
                        <p className="text-xs uppercase tracking-[0.45em] text-[#d9b58d]">Architecture</p>
                        <h2 className="font-big-moore mt-5 max-w-2xl text-5xl leading-[1.02] text-white sm:text-6xl">
                            A Sculptural <span className="text-[#d9b58d] italic">Statement</span> on the Skyline.
                        </h2>
                        <p className="mt-8 max-w-2xl text-lg leading-8 text-white">
                            The curved double-skin facade is not ornamental. Layered glazing and bronze-finish louvers reduce solar heat gain while giving the tower its signature ribbon profile.
                        </p>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
                            At night, integrated linear lighting traces the curvature of every floor, turning Samana Business Hub into a recognisable landmark visible along Sheikh Zayed Road.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="border border-white/10 bg-[#141b2c]/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                            <Sparkles className="text-[#d9b58d]" size={24} />
                            <h3 className="mt-6 text-2xl font-semibold text-white">Double-Skin Facade</h3>
                            <p className="mt-2 text-[#e1d6c4]">Solar-optimised glazing system</p>
                        </div>
                        <div className="border border-white/10 bg-[#141b2c]/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                            <Layers3 className="text-[#d9b58d]" size={24} />
                            <h3 className="mt-6 text-2xl font-semibold text-white">18 Office Floors</h3>
                            <p className="mt-2 text-[#e1d6c4]">16 retail units</p>
                        </div>
                        <div className="border border-white/10 bg-[#141b2c]/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                            <MapPinned className="text-[#d9b58d]" size={24} />
                            <h3 className="mt-6 text-2xl font-semibold text-white">Smart Building Systems</h3>
                            <p className="mt-2 text-[#e1d6c4]">Integrated BMS and IoT</p>
                        </div>
                        <div className="border border-white/10 bg-[#141b2c]/95 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                            <ShieldCheck className="text-[#d9b58d]" size={24} />
                            <h3 className="mt-6 text-2xl font-semibold text-white">24/7 Security</h3>
                            <p className="mt-2 text-[#e1d6c4]">Concierge and access control</p>
                        </div>
                    </div>
                </div>
            </section>

            {chapters.map((chapter, index) => (
                <section key={chapter.title} className="bg-[#f3eee7] px-6 py-10 text-[#182033] sm:py-24 lg:px-[12%]">
                    <div className={`mx-auto grid w-full items-center gap-10 lg:grid-cols-2 ${chapter.reverse ? 'lg:[direction:rtl]' : ''}`}>
                        <div className={`overflow-hidden ${chapter.reverse ? 'lg:[direction:ltr]' : ''}`}>
                            <img src={chapter.image} alt={chapter.title} className="h-[420px] w-full object-cover shadow-[0_20px_40px_rgba(0,0,0,0.15)] lg:h-[520px]" />
                        </div>
                        <div className={`${chapter.reverse ? 'lg:[direction:ltr]' : ''}`}>
                            <p className="text-xs uppercase tracking-[0.45em] text-[#a87738]">{chapter.eyebrow}</p>
                            <h3 className="font-big-moore mt-5 text-[2.4rem] leading-tight text-[#162038] sm:text-[3.4rem]">
                                {chapter.title}
                            </h3>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#384765]">{chapter.text}</p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {chapter.bullets.map((bullet) => (
                                    <div
                                        key={bullet}
                                        className="flex items-center gap-3 border border-[#a87738]/50 bg-[#f7efe1] px-4 py-3 shadow-[0_10px_24px_rgba(168,119,56,0.12)]"
                                    >
                                        <span className="h-3 w-3 shrink-0 rounded-full bg-[#a87738] ring-4 ring-[#a87738]/15" />
                                        <span className="text-base font-bold text-[#162038]">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}


            <section id="amenities" className="bg-[#f3eee7] px-6 py-10 sm:py-24 lg:px-[12%]">
                <div className="mx-auto w-full">
                    <div className="text-left">
                        <p className="text-xs uppercase tracking-[0.45em] text-[#a87738]">Amenities</p>
                        <h2 className="font-big-moore mt-4 text-5xl text-[#162038] sm:text-6xl">
                            Inspiring <span className="text-[#a87738] italic">Productive</span> Connections.
                        </h2>
                        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#384765]">
                            Three carefully-curated chapters of amenity programming - outdoor, executive and wellness - turn the workday into a complete lifestyle experience.
                        </p>
                    </div>

                    <div className="mt-14 space-y-24">
                        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                            <div className="overflow-hidden">
                                <img src={PoolImg} alt="Outdoor Sanctuary" className="h-[420px] w-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.45em] text-[#a87738]">Chapter I</p>
                                <h3 className="font-big-moore mt-5 text-[2.6rem] leading-tight text-[#162038]">Outdoor Sanctuary</h3>
                                <p className="mt-5 text-lg leading-8 text-[#384765]">
                                    A sky-deck retreat suspended above Sheikh Zayed Road. An infinity pool, cabana lounges, an open-air amphitheatre, and shaded meeting pods reframe the workday as a moment of calm.
                                </p>
                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    {['Infinity Pool & Cabanas', 'Outdoor Meeting Pods', 'Cigar & Jazz Lounge', 'Yoga & Wellness Deck', 'Open-Air Amphitheatre', 'Landscaped Gardens'].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-[#162038]">
                                            <span className="text-[#a87738]">-</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsFormOpen(true)}
                                    className="mt-8 inline-flex items-center justify-center border border-[#a87738]/40 bg-[#0b1020] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f2e2cc] transition hover:bg-[#111b2e]"
                                >
                                    Get More Details
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                            <div className="lg:order-2 overflow-hidden">
                                <img src={Img13} alt="Executive Business Club" className="h-[420px] w-full object-cover" />
                            </div>
                            <div className="lg:order-1">
                                <p className="text-xs uppercase tracking-[0.45em] text-[#a87738]">Chapter II</p>
                                <h3 className="font-big-moore mt-5 text-[2.6rem] leading-tight text-[#162038]">Executive Business Club</h3>
                                <p className="mt-5 text-lg leading-8 text-[#384765]">
                                    A members-only floor designed for the way modern business operates. Boardrooms for long meetings, podcast studios for public-facing content, and co-working bays for everything in between.
                                </p>
                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    {['Executive Boardroom', 'Conference & Breakout Rooms', 'Podcast & Recording Studio', 'Co-Working Floor', 'Private Phone Booths', 'High-Speed Fibre · Smart AV'].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-[#162038]">
                                            <span className="text-[#a87738]">-</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsFormOpen(true)}
                                    className="mt-8 inline-flex items-center justify-center border border-[#a87738]/40 bg-[#0b1020] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f2e2cc] transition hover:bg-[#111b2e]"
                                >
                                    Get More Details
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                            <div className="overflow-hidden">
                                <img src={WellnessImg} alt="Wellness & Lifestyle" className="h-[420px] w-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.45em] text-[#a87738]">Chapter III</p>
                                <h3 className="font-big-moore mt-5 text-[2.6rem] leading-tight text-[#162038]">Wellness & Lifestyle</h3>
                                <p className="mt-5 text-lg leading-8 text-[#384765]">
                                    A complete wellness ecosystem within the tower, including a fully equipped gym, Pilates studio, sauna, and a curated caf? programme that turns the lobby into a destination.
                                </p>
                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    {['State-of-the-Art Gym', 'Pilates & Yoga Studios', 'Sauna & Steam Rooms', 'Indoor & Outdoor Cafés', 'Concierge & Reception', '24/7 Building Security'].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-[#162038]">
                                            <span className="text-[#a87738]">-</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsFormOpen(true)}
                                    className="mt-8 inline-flex items-center justify-center border border-[#a87738]/40 bg-[#0b1020] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f2e2cc] transition hover:bg-[#111b2e]"
                                >
                                    Get More Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery" className="bg-[#0b1020] px-6 py-10 sm:py-24 lg:px-[12%]">
                <div className="mx-auto w-full">
                    <div className="text-left">
                        <p className="text-xs uppercase tracking-[0.45em] text-[#d9b58d]">Gallery</p>
                        <h2 className="font-big-moore mt-4 text-5xl text-white sm:text-6xl">
                            A <span className="text-[#d9b58d] italic">Closer</span> Look.
                        </h2>
                    </div>
                    <div className="mt-2 md:hidden">
                        <div
                            ref={mobileGalleryRef}
                            onScroll={handleMobileGalleryScroll}
                            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {galleryImages.map((src, index) => (
                                <div key={src} className="min-w-full snap-center overflow-hidden">
                                    <img src={src} alt={`Gallery ${index + 1}`} className="h-[320px] w-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 flex justify-center gap-2">
                            {galleryImages.map((src, index) => (
                                <span
                                    key={src}
                                    className={`h-1.5 w-1.5 transition-all ${index === activeMobileGalleryIndex ? 'w-4 bg-[#d9b58d]' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 hidden gap-4 md:grid md:grid-cols-12">
                        <div className="overflow-hidden md:col-span-7">
                            <button type="button" onClick={() => openGallery(0)} className="block h-full w-full">
                                <img src={HeroImg} alt="Gallery 1" className="h-full w-full object-cover" />
                            </button>
                        </div>
                        <div className="grid gap-4 md:col-span-5">
                            <button type="button" onClick={() => openGallery(1)} className="block">
                                <img src={Img2} alt="Gallery 2" className="h-[210px] w-full object-cover" />
                            </button>
                            <button type="button" onClick={() => openGallery(2)} className="block">
                                <img src={Img3} alt="Gallery 3" className="h-[210px] w-full object-cover" />
                            </button>
                        </div>
                        <button type="button" onClick={() => openGallery(3)} className="block md:col-span-4">
                            <img src={LoungeImg} alt="Gallery 4" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(4)} className="block md:col-span-4">
                            <img src={HeaderImg} alt="Gallery 5" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(5)} className="block md:col-span-4">
                            <img src={GymImg} alt="Gallery 6" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(6)} className="block md:col-span-4">
                            <img src={Img7} alt="Gallery 7" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(7)} className="block md:col-span-4">
                            <img src={PoolImg} alt="Gallery 8" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(8)} className="block md:col-span-4">
                            <img src={Img9} alt="Gallery 9" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(9)} className="block md:col-span-4">
                            <img src={TowerImg} alt="Gallery 10" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(10)} className="block md:col-span-4">
                            <img src={Img11} alt="Gallery 11" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(11)} className="block md:col-span-4">
                            <img src={OfficeImg} alt="Gallery 12" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(12)} className="block md:col-span-4">
                            <img src={Img13} alt="Gallery 13" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(13)} className="block md:col-span-4">
                            <img src={Img14} alt="Gallery 14" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(14)} className="block md:col-span-4">
                            <img src={Img15} alt="Gallery 15" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(15)} className="block md:col-span-4">
                            <img src={WellnessImg} alt="Gallery 16" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(16)} className="block md:col-span-4">
                            <img src={Img17} alt="Gallery 17" className="h-[190px] w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => openGallery(17)} className="block md:col-span-4">
                            <img src={Img18} alt="Gallery 18" className="h-[190px] w-full object-cover" />
                        </button>
                    </div>
                </div>
            </section>

            {selectedGalleryIndex !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-6">
                    <button
                        type="button"
                        onClick={closeGallery}
                        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                        aria-label="Close gallery"
                    >
                        <X size={18} />
                    </button>

                    <button
                        type="button"
                        onClick={goPrevGallery}
                        className="absolute left-4 top-1/2 inline-flex -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <div className="w-full max-w-6xl">
                        <img
                            src={galleryImages[selectedGalleryIndex]}
                            alt={`Gallery ${selectedGalleryIndex + 1}`}
                            className="max-h-[80vh] w-full object-contain"
                        />
                        <div className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-[#cfb89d]">
                            {selectedGalleryIndex + 1} / {galleryImages.length}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={goNextGallery}
                        className="absolute right-4 top-1/2 inline-flex -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 px-3 py-2 text-white transition hover:bg-white/20"
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>
            )}

            <section id="payment-plan" className="bg-[#0b1020] px-6 py-10 sm:py-24 lg:px-[12%]">
                <div className="mx-auto w-full">
                    <div className="text-left">
                        <p className="text-xs uppercase tracking-[0.45em] text-[#d9b58d]">Payment Plan</p>
                    </div>
                    <h2 className="font-big-moore mt-4 text-5xl text-white sm:text-6xl">
                        Interest-Free <span className="text-[#d9b58d] italic">Payment Plan</span>.
                    </h2>

                    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {[
                            { pct: '20%', title: 'On Booking', text: 'Initial reservation & SPA execution' },
                            { pct: '30%', title: 'During Construction', text: '1% x 30 Months' },
                            { pct: '10%', title: 'On-Handover', text: 'June 2029' },
                            { pct: '40%', title: 'Post Handover', text: '1% x 40 Months' }
                        ].map((item) => (
                            <div key={item.title} className="text-left">
                                <div className="font-serif text-4xl text-[#d7aa63]">{item.pct}</div>
                                <div className="mt-3 text-sm uppercase tracking-[0.25em] text-[#cfb89d]">{item.title}</div>
                                <div className="mt-2 text-xs text-[#a99d8b]">{item.text}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section id="location" className="bg-[#0b1020] px-6 py-10 sm:py-24 lg:px-[12%]">
                <div className="relative mx-auto grid w-full gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                            <div className="sm:max-w-[70%]">
                                <p className="text-xs uppercase tracking-[0.45em] text-[#d9b58d]">Location</p>
                                <h2 className="mt-4 font-big-moore text-5xl text-white sm:text-6xl lg:whitespace-nowrap">
                                    On <span className="text-[#d9b58d] italic">Sheikh Zayed</span> Road.
                                </h2>
                            </div>
                        </div>
                        <p className="mt-6 max-w-lg text-lg leading-8 text-[#d8c9b8]">
                            Direct frontage on Dubai's most prestigious commercial artery. The list below shows approximate driving times to key destinations.
                        </p>

                        <div className="mt-8">
                            <p className="text-xs uppercase tracking-[0.35em] text-[#cfb89d]">Approximate Travel Times</p>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                {[
                                    ['Expo City Dubai', '10 Min'],
                                    ['Dubai Investment Park (DIP)', '10 Min'],
                                    ['Al Maktoum International Airport (DWC)', '10 Min'],
                                    ['Jumeirah Beach Residence (JBR)', '15 Min'],
                                    ['Dubai Marina', '15 Min'],
                                    ['Business Bay', '20 Min'],
                                    ['Downtown Dubai / Burj Khalifa', '20 Min'],
                                    ['DIFC', '20 Min']
                                ].map(([label, time]) => (
                                    <div key={label} className="flex items-center justify-between gap-3 border border-white/10 bg-white/5 px-4 py-3 text-[#efe8dc]">
                                        <span className="font-medium">{label}</span>
                                        <span className="shrink-0 border border-[#d9b58d]/40 bg-[#d9b58d]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b58d]">
                                            {time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <a
            href="#register"
            onClick={(event) => {
              event.preventDefault();
              setIsFormOpen(true);
            }}
            className="hidden lg:inline-flex absolute right-0 top-0 items-center justify-center border border-[#d9b58d] bg-[#d9b58d] px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0b1020] transition hover:bg-[#efc27a]"
          >
            Contact Us
          </a> */}
                    <div className="self-end overflow-hidden border border-white/10">
                        <img src={MapImg} alt="Map location" className="h-[420px] w-full object-cover" />
                    </div>
                </div>
            </section>

            <section className="bg-[#0b1020] px-6 py-10 sm:py-24 lg:px-[12%]">
                <div className="mx-auto w-full">
                    <div className="text-left">
                        <p className="text-xs uppercase tracking-[0.45em] text-[#d9b58d]">Investment</p>
                        <h2 className="font-big-moore mt-4 text-5xl text-white sm:text-6xl">
                            Why <span className="text-[#d9b58d] italic">Commercial</span>, Why Now.
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {[
                            ['Commercial Capital Growth', 'Dubai commercial yields outperform residential assets, with prime Sheikh Zayed Road offices delivering 8-10% gross rental returns.'],
                            ['Freehold Ownership', 'Full freehold title deed for international investors, allowing you to own and lease in your own name.'],
                            ['Golden Visa Eligible', 'Investments above AED 2M may qualify for the 10-year UAE Golden Visa for the investor and family.'],
                            ['Zero Property Tax', 'No annual property tax and no capital gains tax, helping you maximise returns on every transaction.'],
                            ['Appreciation Potential', 'Sheikh Zayed Road commercial inventory remains tightly supplied; pre-handover entry locks in below-market pricing.'],
                            ['Trusted Developer', 'Samana Developers - 50+ projects delivered across Dubai with a proven on-time handover record.']
                        ].map(([title, text]) => (
                            <div key={title} className="border border-white/10 bg-[#141b2c] p-5">
                                <h3 className="text-lg font-semibold text-white">{title}</h3>
                                <p className="mt-2 text-sm leading-7 text-[#bdb1a0]">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="faq" className="bg-[#0b1020] px-6 py-10 sm:py-24 lg:px-[12%]">
                <div className="mx-auto grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
                    <div className="text-left">
                        <p className="text-xs uppercase tracking-[0.45em] text-[#d9b58d]">Common Questions</p>
                        <h2 className="font-big-moore mt-4 text-5xl text-white sm:text-6xl">FAQs</h2>
                        <div className="mt-10 space-y-3">
                            {[
                                {
                                    q: 'Where is Samana Business Hub located?',
                                    a: "Samana Business Hub is located directly on Sheikh Zayed Road, next to the Dubai Metro, strategically located in Dubai's growth corridor between the world's biggest airport and the UAE's largest seaport, Jebel Ali Port."
                                },
                                {
                                    q: 'Is this a freehold project for foreign investors?',
                                    a: 'Yes. Samana Business Hub offers full freehold ownership with a registered DLD title deed for buyers of any nationality, with no restrictions on leasing.'
                                },
                                {
                                    q: 'When is the handover date?',
                                    a: 'Construction handover is scheduled for June 2029 (Q2 2029).'
                                },
                                {
                                    q: 'What is the payment plan structure?',
                                    a: '20% on booking, 30% during construction (1% x 30 Monthly), 10% on handover (June 2029), and 40% post-handover (1% x 40 Monthly)  one of the most balanced commercial plans on Sheikh Zayed Road.'
                                },
                                {
                                    q: 'Can I finance a commercial unit through a UAE bank?',
                                    a: 'Yes. Most UAE banks offer commercial mortgages up to 50-60% LTV for completed and selected off-plan commercial properties. Our team can introduce you to preferred banking partners.'
                                },
                                {
                                    q: 'What rental yield can I expect?',
                                    a: 'Sheikh Zayed Road Grade-A commercial space currently translates to gross yields of 8–10%, significantly above prime residential.'
                                },
                                {
                                    q: 'Are unit fit-outs included?',
                                    a: 'Offices are delivered shell-and-core ready for tenant fit-out.'
                                },
                                {
                                    q: 'What service charges apply?',
                                    a: 'Estimated service charges are AED 18-20 per sq ft annually, covering common-area maintenance, security, lifts, and amenity operations.'
                                }
                            ].map((item, index) => (
                                <AccordionItem
                                    key={item.q}
                                    item={item}
                                    open={openFaq === index}
                                    onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
                                />
                            ))}
                        </div>
                    </div>

                    <div id="contact-inquiry" className="flex flex-col border border-[#d9b58d]/30 bg-[#141b2c] p-5 sm:p-6 lg:mt-[132px]">
                        <p className="text-left text-xs uppercase tracking-[0.45em] text-[#d9b58d]">Priority Investor Access</p>
                        <h2 className="font-big-moore mt-2 text-left text-4xl text-white">Register Your Interest</h2>
                        <p className="mt-2 text-left text-sm text-[#bdb1a0]">
                            Receive the full project brochure, floor plans, and investment details.
                        </p>

                        <form className="mt-5 flex flex-col space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Name"
                                className="w-full border border-[#d9b58d]/30 bg-[#0f1526] px-4 py-3 text-sm text-white outline-none placeholder:text-[#8e846f]"
                            />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                                className="w-full border border-[#d9b58d]/30 bg-[#0f1526] px-4 py-3 text-sm text-white outline-none placeholder:text-[#8e846f]"
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone"
                                className="w-full border border-[#d9b58d]/30 bg-[#0f1526] px-4 py-3 text-sm text-white outline-none placeholder:text-[#8e846f]"
                            />
                            <textarea
                                rows={4}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Message"
                                className="w-full border border-[#d9b58d]/30 bg-[#0f1526] px-4 py-3 text-sm text-white outline-none placeholder:text-[#8e846f]"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#d7aa63] px-4 py-3 text-sm font-bold uppercase tracking-[0.3em] text-[#0b1020]"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {isFormOpen && (
                <section className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 py-10">
                    <div className="relative w-full max-w-xl border border-[#d9b58d]/30 bg-[#141b2c] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-8">
                        <button
                            type="button"
                            onClick={() => setIsFormOpen(false)}
                            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                            aria-label="Close form"
                        >
                            <X size={16} />
                        </button>

                        <p className="text-left text-xs uppercase tracking-[0.45em] text-[#d9b58d]">Priority Investor Access</p>
                        <h2 className="font-big-moore mt-4 text-left text-4xl text-white">Register Your Interest</h2>
                        <p className="mt-3 text-left text-sm text-[#bdb1a0]">
                            Receive the full project brochure, floor plans, and investment details.
                        </p>

                        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Name"
                                className="w-full border border-[#d9b58d]/30 bg-[#0f1526] px-4 py-3 text-sm text-white outline-none placeholder:text-[#8e846f]"
                            />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                                className="w-full border border-[#d9b58d]/30 bg-[#0f1526] px-4 py-3 text-sm text-white outline-none placeholder:text-[#8e846f]"
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone"
                                className="w-full border border-[#d9b58d]/30 bg-[#0f1526] px-4 py-3 text-sm text-white outline-none placeholder:text-[#8e846f]"
                            />
                            <textarea
                                rows={4}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Message"
                                className="w-full border border-[#d9b58d]/30 bg-[#0f1526] px-4 py-3 text-sm text-white outline-none placeholder:text-[#8e846f]"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#d7aa63] px-4 py-3 text-sm font-bold uppercase tracking-[0.3em] text-[#0b1020]"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                            </button>
                        </form>
                    </div>
                </section>
            )}

            <footer className="border-t border-white/10 bg-[#0a0f1d] px-[5%] py-6 text-center text-xs uppercase tracking-[0.22em] text-[#cdb89a] sm:px-[12%]">
                Samana Developers © 2026
            </footer>
        </main>
    );
}

export default SamanaBussinessHub;
