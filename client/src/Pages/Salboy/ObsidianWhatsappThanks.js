import React from "react";
import { Link } from "react-router-dom";
import obsidianImage from "../../Assests/Salboy/hero-tower.jpg";
import obsidianLogo from "../../Assests/Salboy/Obsidian_logo.png";
import "../Emaar/Valia.css";
import "../WhatsApp/WhatsAppLanding.css";

function ObsidianWhatsappThanks() {
    return (
        <main className="valia-page valia-thanks-page whatsapp-project-page" style={{ backgroundImage: `url(${obsidianImage})` }}>
            <img className="valia-video" src={obsidianImage} alt="" aria-hidden="true" />
            <div className="valia-overlay" aria-hidden="true" />
            <header className="valia-header">
                <img className="valia-logo" src={obsidianLogo} alt="Obsidian Manchester" style={{ width: "clamp(150px, 20vw, 240px)" }} />
            </header>
            <section className="valia-content" aria-labelledby="obsidian-whatsapp-thanks-title">
                <div className="valia-hairline" aria-hidden="true" />
                <h1 id="obsidian-whatsapp-thanks-title">Thank you.</h1>
                <p className="valia-description">
                    WhatsApp is opening now. Our UK property team will be ready to assist with the
                    latest prices, availability and Obsidian investment details.
                </p>
                <Link className="valia-back-link" to="/obsidian-whatsapp">
                    Return to Obsidian Manchester
                </Link>
            </section>
            <footer className="valia-rail">
                <span>Manchester City Centre</span>
                <span>By Salboy</span>
            </footer>
        </main>
    );
}

export default ObsidianWhatsappThanks;
