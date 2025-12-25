import React from "react";
import Damac from "../../Assests/Damac/Damac.png";

export default function DamacIslandFooter() {
    return (
        <div
            className="w-full bg-cover bg-center px-4 sm:px-[5%] lg:px-[12%] py-7 sm:py-7
        flex flex-col lg:flex-row items-center justify-between gap-4
        fixed bottom-0 left-0 z-50"
            style={{ backgroundColor: "#87CEFA" }}
        >

            {/* Left Side */}
            <div className="flex items-center gap-4 sm:gap-5 w-full lg:w-auto">
                <img
                    src={Damac}
                    alt="DAMAC"
                    className="w-[85px] sm:w-[105px]"
                />

                <div className="leading-tight">
                    <p className="text-xs sm:text-sm font-medium text-gray-800">Type of Property</p>
                    <h3 className="text-sm sm:text-base font-semibold text-black">
                        4 &amp; 5-Bedroom Townhouses
                    </h3>
                </div>
            </div>

            {/* Middle Info */}
            <div className="flex flex-wrap lg:flex-nowrap gap-5 sm:gap-10 w-full lg:w-auto text-center lg:text-left">
                <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">Starting at</p>
                    <h3 className="text-sm sm:text-base font-semibold">AED 2.75M</h3>
                </div>

                <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">Payment Plan</p>
                    <h3 className="text-sm sm:text-base font-semibold">70/30</h3>
                </div>

                <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">Handover</p>
                    <h3 className="text-sm sm:text-base font-semibold">TBA</h3>
                </div>
            </div>

            {/* Button */}
            <button
                onClick={() => document.getElementById("registerForm")?.scrollIntoView({ behavior: "smooth" })}
                className="px-4 py-2 bg-black text-white rounded-sm font-semibold hover:opacity-90 transition-all
            w-full sm:w-auto text-sm sm:text-base"
            >
                Register Your Interest
            </button>
        </div>

    );
}
