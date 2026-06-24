import React, { useEffect } from 'react';
import HeadDesktop from '../../Assests/Samana/HeadDesktop.png';
import SamanaLogo from '../../Assests/Samana/SamanaLogo.png';
import SamanaBusinessHubLogo from '../../Assests/Samana/Samana_Business_Hub_logo.png';
import { applySamanaSeo } from './samanaSeo';

function SamanaBusinessHubThanks() {
    useEffect(() => {
        return applySamanaSeo(
            'Thank You | Samana Business Hub',
            'Thank you for registering your interest in Samana Business Hub. Our team will contact you shortly with brochure, floor plan, and investment details.'
        );
    }, []);

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1020] px-6 py-12 text-white">
            <div className="absolute inset-0">
                <img src={HeadDesktop} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[#0b1020]/82" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,32,0.35)_0%,rgba(11,16,32,0.95)_100%)]" />
            </div>

            <section className="relative z-10 w-full max-w-2xl border border-[#d9b58d]/30 bg-[#141b2c]/90 px-6 py-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:px-10">
                <div className="mx-auto flex justify-center">
                    <img src={SamanaLogo} alt="Samana Logo" className="h-8 w-auto" />
                </div>

                <div className="mx-auto mt-8 max-w-[320px]">
                    <img src={SamanaBusinessHubLogo} alt="Samana Business Hub" className="h-auto w-full" />
                </div>

                <p className="mt-8 text-xs uppercase tracking-[0.45em] text-[#d9b58d]">Thank You</p>
                <h1 className="font-big-moore mt-4 text-4xl leading-tight text-white sm:text-5xl">
                    Your Inquiry Has Been Received.
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#d8c9b8]">
                    Our team will contact you shortly with the Samana Business Hub brochure, floor plans, and investment details.
                </p>

                <a
                    href="/samana/samanabusinesshub"
                    className="mt-8 inline-flex items-center justify-center bg-[#d7aa63] px-6 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[#0b1020] transition hover:bg-[#efc27a]"
                >
                    Return to site
                </a>
            </section>
        </main>
    );
}

export default SamanaBusinessHubThanks;
