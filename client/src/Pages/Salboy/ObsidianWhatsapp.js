import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import obsidianImage from "../../Assests/Salboy/hero-tower.jpg";
import obsidianLogo from "../../Assests/Salboy/Obsidian_logo.png";
import "../Emaar/Valia.css";
import "../WhatsApp/WhatsAppLanding.css";

const WHATSAPP_MESSAGE = "Hi, I’m interested in Obsidian Manchester";
const WHATSAPP_URL = `https://wa.me/97180022653?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function ObsidianWhatsapp() {
    const navigate = useNavigate();

    const handleWhatsAppClick = (event) => {
        event.preventDefault();
        window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
        navigate("/obsidian-whatsapp/thanks");
    };

    return (
        <main className="valia-page whatsapp-project-page" style={{ backgroundImage: `url(${obsidianImage})` }}>
            <img className="valia-video" src={obsidianImage} alt="" aria-hidden="true" />
            <div className="valia-overlay" aria-hidden="true" />
            <header className="valia-header">
                <img
                    className="valia-logo valia-reveal valia-delay-2"
                    src={obsidianLogo}
                    alt="Obsidian Manchester"
                    style={{ width: "clamp(150px, 20vw, 240px)" }}
                />
            </header>
            <section className="valia-content" aria-labelledby="obsidian-whatsapp-title">
                <div className="valia-hairline valia-reveal" aria-hidden="true" />
                <h1 id="obsidian-whatsapp-title" className="valia-reveal valia-delay-3">
                    A landmark, <em>not just an address</em>
                </h1>
                <p className="valia-description valia-reveal valia-delay-4">
                    A landmark collection of premium studios, one, two and three-bedroom apartments
                    in one of the UK's fastest-growing property markets.
                </p>
                <a
                    className="valia-whatsapp valia-reveal valia-delay-5"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    aria-label="Enquire about Obsidian Manchester on WhatsApp"
                >
                    <FaWhatsapp aria-hidden="true" />
                    Enquire on WhatsApp
                </a>
            </section>
            <footer className="valia-rail valia-reveal valia-delay-6">
                <span>Manchester City Centre</span>
                <span>By Salboy</span>
            </footer>
        </main>
    );
}

export default ObsidianWhatsapp;
