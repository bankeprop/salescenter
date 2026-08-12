import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import emaarHeightsImage from "../../Assests/Emaar/heightWhatsapp.jpg";
import emaarHeightsLogo from "../../Assests/Emaar/EmaarHeightsLogoWhite.png";
import { resetFavicon, setFavicon } from "../../utils/favicon";
import "./Valia.css";

function EmaarHeightsWhatsappThanks() {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        setFavicon(emaarHeightsLogo);
        const faviconTimer = window.setTimeout(
            () => setFavicon(emaarHeightsLogo),
            50
        );

        return () => {
            window.clearTimeout(faviconTimer);
            document.body.style.overflow = previousOverflow;
            resetFavicon();
        };
    }, []);

    return (
        <main
            className="valia-page valia-thanks-page emaar-heights-page"
            style={{ backgroundImage: `url(${emaarHeightsImage})` }}
        >
            <div
                className="valia-overlay emaar-heights-overlay"
                aria-hidden="true"
            />

            <header className="valia-header">
                <img
                    className="valia-logo emaar-heights-logo"
                    src={emaarHeightsLogo}
                    alt="The Heights Country Club & Wellness by Emaar"
                />
            </header>

            <section
                className="valia-content"
                aria-labelledby="emaar-heights-thanks-title"
            >
                <div className="valia-hairline" aria-hidden="true" />
                <h1 id="emaar-heights-thanks-title">
                    Thank you for your <em>Heights enquiry</em>
                </h1>
                <p className="valia-description">
                    WhatsApp has opened in a new tab. Send your message and our
                    property team will assist you with villa details, availability
                    and pricing.
                </p>
                <Link
                    className="valia-back-link"
                    to="/emaar/emaar-heights-whatsapp"
                >
                    Return to The Heights
                </Link>
            </section>

            <footer className="valia-rail">
                <span>Wellness-inspired villas</span>
                <span>By Emaar</span>
            </footer>
        </main>
    );
}

export default EmaarHeightsWhatsappThanks;
