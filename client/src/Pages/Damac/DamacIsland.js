import React from 'react'
import Footer from "../Damac/DamacIslandFooter.js"
import Logo from "../../Assests/Damac/Damac.png"
import LogoWhite from "../../Assests/Damac/DamacWhite.png"
import DamacIsland1 from "../../Assests/Damac/DamacIsland1.jpg"
import DamacIsland2 from "../../Assests/Damac/DamacIsland2.jpg"
import DamacIsland3 from "../../Assests/Damac/DamacIsland3.jpg"
import DamacIsland4 from "../../Assests/Damac/DamacIsland4.jpg"
import DamacIsland5 from "../../Assests/Damac/DamacIsland5.jpg"
import DamacIsland6 from "../../Assests/Damac/DamacIsland6.jpg"
import DamacIsland8 from "../../Assests/Damac/DamacIsland8.jpg"
import { motion } from "framer-motion";
import { Sparkles, Anchor, Trees, Dumbbell, Utensils, Sailboat, Footprints, Tent } from 'lucide-react';


const PRIMARY_COLOR = "#494949";

export default function DamacIsland() {
    const amenities = [
        { name: "Expansive Green Spaces", icon: <Trees className="w-4 h-4" /> },
        { name: "Private Beachfronts", icon: <Tent className="w-4 h-4" /> },
        { name: "Resort-Style Pools", icon: <Sparkles className="w-4 h-4" /> },
        { name: "Wellness Centers", icon: <Dumbbell className="w-4 h-4" /> },
        { name: "Marina & Water Sports", icon: <Anchor className="w-4 h-4" /> },
        { name: "Exclusive Dining", icon: <Utensils className="w-4 h-4" /> },
        { name: "Jogging Trails", icon: <Footprints className="w-4 h-4" /> },
        { name: "Play Areas", icon: <Sailboat className="w-4 h-4" /> }
    ];
    return (
        <div>
            {/* Banner */}
            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <img
                            src={DamacIsland1}
                            alt="Damac Island"
                            className="w-full h-full object-cover brightness-75 absolute inset-0"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                        ></div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center text-center px-6 lg:px-[12%]"
                >
                    <div className="space-y-6 max-w-4xl">

                        <motion.p
                            style={{ fontFamily: "Cinzel, serif" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="text-xl md:text-4xl font-light uppercase tracking-[.25em] text-gray-200"
                        >
                            Paradise Has A Sequel
                        </motion.p>

                        <motion.h1
                            style={{ fontFamily: "Playfair Display, serif" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.7 }}
                            className="text-6xl md:text-8xl text-white leading-[1.1] font-bold"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.4 }}
                                className="w-full flex justify-center items-center"
                            >
                                <img
                                    src={LogoWhite}
                                    alt="Damac Logo"
                                    className="w-[260px] md:w-[380px] object-contain"
                                />
                            </motion.div>

                            {/* <span className="block text-[1.1em]">Damac</span> */}
                            <span className="tracking-widest">Islands 2</span>
                            <span className="inline-block ml-2 align-middle text-[.8em]">
                                <svg className="inline-block w-8 h-8 fill-white">
                                    <path d="M0 0h32v32H0z" fill="none" />
                                </svg>
                            </span>
                        </motion.h1>
                        <motion.p
                            style={{ fontFamily: "Cinzel, serif" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3, duration: 0.5 }}
                            className="text-lg md:text-3xl uppercase tracking-[.4em] text-gray-200"
                        >
                            Latest Launch
                        </motion.p>

                    </div>
                </motion.div>
            </div>

            {/* Details */}
            <div
                className="relative w-full px-6 lg:px-[12%] py-[4%] text-white"
                style={{ backgroundColor: PRIMARY_COLOR }}
            >
                <motion.div
                    whileInView={{ scale: 1, y: 0 }}
                    initial={{ scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                        <p className="text-lg sm:text-xl font-semibold opacity-90">Down Payment</p>
                        <h3 className="text-5xl sm:text-6xl font-extrabold mt-1">10%</h3>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                        <p className="text-lg sm:text-xl font-semibold opacity-90">Handover</p>
                        <h3 className="text-5xl sm:text-6xl font-extrabold mt-1">TBA</h3>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
                        <p className="text-lg sm:text-xl font-semibold opacity-90">Starting at</p>
                        <h3 className="text-5xl sm:text-6xl font-extrabold mt-1">AED 2.75 M</h3>
                    </motion.div>
                </motion.div>
            </div>

            {/* Para 01*/}
            <div
                className="relative w-full px-6 lg:px-[12%] py-[4%] text-center"
                style={{
                    background: "linear-gradient(135deg, #61d9e7ff 0%, #a6faf3ff 50%, #ffe7c7ff 100%)",
                    color: "#494949"
                }}
            >
                <motion.div
                    className="max-w-6xl mx-auto space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-5xl md:text-6xl font-black leading-tight"
                        style={{ color: "#494949" }}
                    >
                        Experience Waterfront Living <br />
                        Like Never Before in
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="leading-relaxed text-lg md:text-2xl"
                        style={{ color: "#494949" }}
                    >
                        Welcome to the epitome of luxury living in Dubai! At DAMAC Properties, we proudly present our stunning collection of townhouses, starting from just AED 2.75 million. Immerse yourself in the extravagance of Dubai’s finest neighborhoods and experience an unparalleled level of comfort, style, and convenience.
                    </motion.p>
                </motion.div>
            </div>

            {/* Image */}
            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <img
                            src={DamacIsland2}
                            alt="Damac Island"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Para 02*/}
            <div
                className="relative w-full px-6 lg:px-[12%] py-[4%] text-center"
                style={{
                    background: "linear-gradient(135deg, #61d9e7ff 0%, #a6faf3ff 50%, #ffe7c7ff 100%)",
                    color: "#494949"
                }}
            >
                <motion.div
                    className="max-w-6xl mx-auto space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-5xl md:text-6xl font-black leading-tight"
                        style={{ color: "#494949" }}
                    >
                        Live The Ultimate Luxury Lifestyle In  <br />
                        Dubai With Exquisite Townhouses
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="leading-relaxed text-lg md:text-2xl"
                        style={{ color: "#494949" }}
                    >
                        Welcome to the epitome of luxury living in Dubai! At DAMAC Properties, we proudly present our stunning collection of townhouses, starting from just AED 2.75 million. Immerse yourself in the extravagance of Dubai’s finest neighborhoods and experience an unparalleled level of comfort, style, and convenience.
                    </motion.p>
                </motion.div>
            </div>

            {/* Image */}
            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <img
                            src={DamacIsland3}
                            alt="Damac Island"
                            className="w-full h-full object-cover "
                        />
                    </div>
                </div>
            </div>

            {/* List */}
            <div
                className="w-full"
                style={{
                    background: "linear-gradient(135deg, #61d9e7ff 0%, #a6faf3ff 50%, #ffe7c7ff 100%)",
                    color: "#494949"
                }}
            >
                <div className="relative w-full px-6 lg:px-[12%] py-[4%]">

                    {/* Title Section */}
                    <motion.div
                        className="text-center max-w-6xl mx-auto mb-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                            className="text-5xl md:text-6xl font-black leading-tight mb-6"
                            style={{ color: "#494949" }}
                        >
                            Luxurious Amenities for an Elevated
                            <br />
                            Island Lifestyle
                        </motion.h1>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                            className="leading-relaxed text-lg md:text-2xl"
                            style={{ color: "#494949" }}
                        >
                            Damac Islands brings you world-class amenities that redefine luxury and leisure
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, staggerChildren: 0.15 }}
                    >
                        <motion.div
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            className="bg-white/80 backdrop-blur-md rounded-3xl px-[10%] py-[4%] border border-white shadow-xl flex flex-col justify-center"
                        >
                            <h3 className="text-4xl font-bold text-[#494949] mb-6 border-b border-gray-200 pb-3">
                                Key Amenities
                            </h3>
                            <ul className="space-y-4">
                                {amenities.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-gray-700 text-base font-medium hover:text-[#61d9e7] transition-colors cursor-default"
                                    >
                                        <span className="p-1 rounded-full bg-gray-100 text-[#61d9e7]">
                                            {item.icon}
                                        </span>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="col-span-2 relative group overflow-hidden rounded-3xl shadow-2xl h-[350px]"
                            >
                                <img
                                    src={DamacIsland4}
                                    alt="Main View"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>

                            <motion.div
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="relative group overflow-hidden rounded-3xl shadow-2xl h-[260px]"
                            >
                                <img
                                    src={DamacIsland5}
                                    alt="Pool View"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>

                            <motion.div
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                className="relative group overflow-hidden rounded-3xl shadow-2xl h-[260px]"
                            >
                                <img
                                    src={DamacIsland6}
                                    alt="Interior"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Image */}
            <div className="relative w-full">
                <div className="relative w-full">
                    <div className="relative w-full h-[800px] lg:h-[90vh] overflow-hidden">
                        <img
                            src={DamacIsland8}
                            alt="Damac Island"
                            className="w-full h-full object-cover "
                        />
                    </div>
                </div>
            </div>

            {/* Form */}
            <div

                className="
                    relative w-full px-6 lg:px-[12%] text-center
                    pt-[4%] pb-[55%]       /* mobile padding */
                    md:pb-[10%]            /* desktop padding */
                "
                style={{
                    background: "linear-gradient(135deg, #61d9e7ff 0%, #a6faf3ff 50%, #ffe7c7ff 100%)",
                    color: "#494949"
                }}
            >
                <img
                    src={Logo}
                    alt="Damac Logo"
                    className="mx-auto mb-6 w-[180px] md:w-[220px]"
                />

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Lavish 4 & 5-Bedroom Townhouses
                </h2>

                <p className="text-lg md:text-xl font-medium mb-2">
                    Unique Island Community in Dubai’s Vibrant Lifestyle
                </p>

                <p className="text-lg md:text-xl font-semibold mb-8">
                    70/30 Payment Plan
                </p>

                <h3 className="text-3xl md:text-4xl font-black mb-12">
                    Starting From AED 2.75M
                </h3>

                <div
                    id="registerForm"
                    className="max-w-xl mx-auto bg-white shadow-xl rounded-3xl p-8 border border-gray-200">
                    <h4 className="text-2xl font-black mb-5 border-b border-gray-300 pb-3">
                        ENQUIRE NOW!
                    </h4>
                    <br></br>
                    <form className="space-y-5">
                        <div className="text-left">
                            <label className="font-semibold">Name:</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-3 rounded-xl border border-gray-300 focus:border-black focus:outline-none"
                            />
                        </div>

                        <div className="text-left">
                            <label className="font-semibold">Email:</label>
                            <input
                                type="email"
                                className="mt-1 w-full p-3 rounded-xl border border-gray-300 focus:border-black focus:outline-none"
                            />
                        </div>

                        <div className="text-left">
                            <label className="font-semibold">Phone:</label>
                            <input
                                type="tel"
                                className="mt-1 w-full p-3 rounded-xl border border-gray-300 focus:border-black focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#00214D] text-white font-bold py-3 rounded-xl hover:bg-black transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div >
    )
}
