import React from "react";
import { Link } from "react-router-dom";

function MercedesThankYou() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
            <div className="max-w-xl space-y-6 text-center">
                <h1 className="text-4xl font-bold uppercase">Thank You</h1>
                <p className="text-lg text-gray-200">
                    We have received your details. Our team will reach out to you shortly with more information about Mercedes-Benz Places.
                </p>
                <Link
                    to="/Binghatti/MercedesBenzPlaces"
                    className="inline-block rounded-md border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10"
                >
                    Back to Mercedes-Benz Places
                </Link>
            </div>
        </div>
    );
}

export default MercedesThankYou;
