import React from "react";
import Logo from "../../Assests/Ohana/OhanaLogo.webp";

const OHANA_LOGO = Logo;

function OhanaThanks() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="max-w-2xl text-center space-y-6">
                <div className="flex justify-center">
                    <img src={OHANA_LOGO} alt="Ohana Development" className="h-14 w-auto" />
                </div>
                <h1 className="text-4xl font-semibold tracking-tight">Thank you for registering</h1>
                <p className="text-lg text-white/80 leading-relaxed">
                    Your interest in the upcoming Branded Residences at Yas Canal has been received.
                    Our team will reach out shortly with the next steps and exclusive updates.
                </p>
                <div className="text-sm text-white/60">
                    If you need immediate assistance, please call <a href="tel:800600600" className="text-white hover:underline">800 600 600</a>.
                </div>
            </div>
        </div>
    );
}

export default OhanaThanks;
