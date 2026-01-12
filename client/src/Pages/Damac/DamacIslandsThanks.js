import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { setFavicon, resetFavicon } from "../../utils/favicon";
import Logo from "../../Assests/Damac/Damac.png";

const PRIMARY_COLOR = "#494949";
const ACCENT_COLOR = "#00214D";

export default function DamacIslandsThanks() {
    useEffect(() => {
        document.title = "Thank You | Damac Islands";
        setFavicon(Logo);
        return () => resetFavicon();
    }, []);

    return (
        <div
            className="flex min-h-screen items-center justify-center px-6"
            style={{
                background: "linear-gradient(135deg, #61d9e7ff 0%, #a6faf3ff 50%, #ffe7c7ff 100%)",
                color: PRIMARY_COLOR
            }}
        >
            <div className="max-w-xl w-full space-y-6 text-center bg-white/85 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 border border-white">
                <img
                    src={Logo}
                    alt="Damac Logo"
                    className="mx-auto w-[160px] md:w-[200px]"
                />
                <h1 className="text-4xl font-bold uppercase text-[#00214D]">Thank You</h1>
                <p className="text-lg text-gray-700">
                    We have received your details. Our team will reach out shortly with more information about Damac Islands.
                </p>
                <Link
                    to="/Damac/DamacIsland"
                    className="inline-block rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
                    style={{ backgroundColor: ACCENT_COLOR }}
                >
                    Back to Damac Islands
                </Link>
            </div>
        </div>
    );
}
