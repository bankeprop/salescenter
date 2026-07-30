import React from "react";
import { Link } from "react-router-dom";
import valiaImage from "../../Assests/Emaar/valia.jpeg";
import valiaLogo from "../../Assests/Emaar/valia_logo.png";
import "./Valia.css";

function ValiaThanks() {
    return (
        <main
            className="valia-page valia-thanks-page"
            style={{ backgroundImage: `url(${valiaImage})` }}
        >
            <div className="valia-overlay" aria-hidden="true" />

            <header className="valia-header">
                <p className="valia-eyebrow">Dubai Creek Harbour</p>
                <img
                    className="valia-logo"
                    src={valiaLogo}
                    alt="Valia at Dubai Creek Harbour"
                />
            </header>

            <section className="valia-content" aria-labelledby="valia-thanks-title">
                <div className="valia-hairline" aria-hidden="true" />
                <h1 id="valia-thanks-title">
                    Thank you for your <em>Valia enquiry</em>
                </h1>
                <p className="valia-description">
                    WhatsApp has opened in a new tab. Send your message and our
                    property team will assist you with project details and
                    availability.
                </p>
                <Link className="valia-back-link" to="/emaar/valia">
                    Return to Valia
                </Link>
            </section>

            <footer className="valia-rail">
                <span>Dubai Creek Harbour</span>
                <span>Waterfront residences</span>
                <span>By Emaar</span>
            </footer>
        </main>
    );
}

export default ValiaThanks;
