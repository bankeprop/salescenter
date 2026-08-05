import React from "react";
import { Link } from "react-router-dom";
import kingsRoadImage from "../../Assests/Berkeley/heroExterior.jpg";
import kingsRoadLogo from "../../Assests/Berkeley/Logo.png";
import kingsRoadVideo from "../../Assests/Berkeley/kingroadvid.mp4";
import "../Emaar/Valia.css";
import "../WhatsApp/WhatsAppLanding.css";

function KingsRoadWhatsappThanks() {
    return (
        <main className="valia-page valia-thanks-page whatsapp-project-page" style={{ backgroundImage: `url(${kingsRoadImage})` }}>
            <video className="valia-video" src={kingsRoadVideo} poster={kingsRoadImage} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
            <div className="valia-overlay" aria-hidden="true" />
            <header className="valia-header">
                <img className="valia-logo" src={kingsRoadLogo} alt="One King's Road Park" style={{ width: "clamp(70px, 9vw, 110px)" }} />
            </header>
            <section className="valia-content" aria-labelledby="kings-road-whatsapp-thanks-title">
                <div className="valia-hairline" aria-hidden="true" />
                <h1 id="kings-road-whatsapp-thanks-title">Thank you.</h1>
                <p className="valia-description">
                    WhatsApp is opening now. Our UK property team will be ready to assist with the
                    latest prices, availability and details for One King's Road Park.
                </p>
                <Link className="valia-back-link" to="/berkeley/kings-road-whatsapp">
                    Return to One King's Road Park
                </Link>
            </section>
            <footer className="valia-rail">
                <span>Fulham · London SW6</span>
                <span>By Berkeley Group</span>
            </footer>
        </main>
    );
}

export default KingsRoadWhatsappThanks;
