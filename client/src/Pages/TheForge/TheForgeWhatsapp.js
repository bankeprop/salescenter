import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import forgeImage from "../../Assests/TheForge/hero-liverpool.jpg";
import forgeLogo from "../../Assests/TheForge/Logo.png";
import "../Emaar/Valia.css";
import "../WhatsApp/WhatsAppLanding.css";

const WHATSAPP_MESSAGE = "Hi, I’m interested in The Forge, Liverpool";
const WHATSAPP_URL = `https://wa.me/97180022653?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function TheForgeWhatsapp() {
    const navigate = useNavigate();

    const handleWhatsAppClick = (event) => {
        event.preventDefault();
        window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
        navigate("/theforge-whatsapp/thanks");
    };

    return (
        <main className="valia-page whatsapp-project-page" style={{ backgroundImage: `url(${forgeImage})` }}>
            <img className="valia-video" src={forgeImage} alt="" aria-hidden="true" />
            <div className="valia-overlay" aria-hidden="true" />
            <header className="valia-header">
                <img
                    className="valia-logo valia-reveal valia-delay-2"
                    src={forgeLogo}
                    alt="The Forge Liverpool"
                    style={{ width: "clamp(105px, 14vw, 155px)" }}
                />
            </header>
            <section className="valia-content" aria-labelledby="theforge-whatsapp-title">
                <div className="valia-hairline valia-reveal" aria-hidden="true" />
                <h1 id="theforge-whatsapp-title" className="valia-reveal valia-delay-3">
                    Invest before Liverpool's <em>next growth cycle</em>
                </h1>
                <p className="valia-description valia-reveal valia-delay-4">
                    Premium city-centre apartments within Liverpool's £2bn Pumpfields regeneration
                    zone, neighbouring the £5.5bn Liverpool Waters masterplan.
                </p>
                <a
                    className="valia-whatsapp valia-reveal valia-delay-5"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    aria-label="Enquire about The Forge Liverpool on WhatsApp"
                >
                    <FaWhatsapp aria-hidden="true" />
                    Enquire on WhatsApp
                </a>
            </section>
            <footer className="valia-rail valia-reveal valia-delay-6">
                <span>Pumpfields · Liverpool</span>
                <span>Premium City Living</span>
            </footer>
        </main>
    );
}

export default TheForgeWhatsapp;
