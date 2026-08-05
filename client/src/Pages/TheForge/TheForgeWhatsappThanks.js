import React from "react";
import { Link } from "react-router-dom";
import forgeImage from "../../Assests/TheForge/hero-liverpool.jpg";
import forgeLogo from "../../Assests/TheForge/Logo.png";
import "../Emaar/Valia.css";
import "../WhatsApp/WhatsAppLanding.css";

function TheForgeWhatsappThanks() {
    return (
        <main className="valia-page valia-thanks-page whatsapp-project-page" style={{ backgroundImage: `url(${forgeImage})` }}>
            <img className="valia-video" src={forgeImage} alt="" aria-hidden="true" />
            <div className="valia-overlay" aria-hidden="true" />
            <header className="valia-header">
                <img className="valia-logo" src={forgeLogo} alt="The Forge Liverpool" style={{ width: "clamp(105px, 14vw, 155px)" }} />
            </header>
            <section className="valia-content" aria-labelledby="theforge-whatsapp-thanks-title">
                <div className="valia-hairline" aria-hidden="true" />
                <h1 id="theforge-whatsapp-thanks-title">Thank you.</h1>
                <p className="valia-description">
                    WhatsApp is opening now. Our UK property team will be ready to assist with the
                    latest prices, availability and The Forge investment details.
                </p>
                <Link className="valia-back-link" to="/theforge-whatsapp">
                    Return to The Forge Liverpool
                </Link>
            </section>
            <footer className="valia-rail">
                <span>Pumpfields · Liverpool</span>
                <span>Premium City Living</span>
            </footer>
        </main>
    );
}

export default TheForgeWhatsappThanks;
