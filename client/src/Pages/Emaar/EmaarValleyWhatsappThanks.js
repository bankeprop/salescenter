import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import emaarValleyImage from "../../Assests/Emaar/Emmar1.webp";
import emaarValleyLogo from "../../Assests/Emaar/EmaarValleyLogo.png";
import { resetFavicon, setCroppedFavicon } from "../../utils/favicon";
import "./Valia.css";

function EmaarValleyWhatsappThanks() {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const applyValleyFavicon = () => setCroppedFavicon(emaarValleyLogo, {
            x: 106,
            y: 0,
            width: 58,
            height: 86,
        });
        let cancelFavicon = applyValleyFavicon();
        const faviconTimer = window.setTimeout(
            () => {
                cancelFavicon();
                cancelFavicon = applyValleyFavicon();
            },
            50
        );

        return () => {
            window.clearTimeout(faviconTimer);
            cancelFavicon();
            document.body.style.overflow = previousOverflow;
            resetFavicon();
        };
    }, []);

    return (
        <main
            className="valia-page valia-thanks-page emaar-heights-page"
            style={{ backgroundImage: `url(${emaarValleyImage})` }}
        >
            <div
                className="valia-overlay emaar-heights-overlay"
                aria-hidden="true"
            />

            <header className="valia-header">
                <img
                    className="valia-logo emaar-heights-logo"
                    src={emaarValleyLogo}
                    alt="The Valley by Emaar"
                />
            </header>

            <section
                className="valia-content"
                aria-labelledby="emaar-valley-thanks-title"
            >
                <div className="valia-hairline" aria-hidden="true" />
                <h1 id="emaar-valley-thanks-title">
                    Thank you for your <em>Valley enquiry</em>
                </h1>
                <p className="valia-description">
                    WhatsApp has opened in a new tab. Send your message and our
                    property team will assist you with townhouse details,
                    availability, pricing and the payment plan.
                </p>
                <Link
                    className="valia-back-link"
                    to="/emaar/emaar-valley-whatsapp"
                >
                    Return to The Valley
                </Link>
            </section>

            <footer className="valia-rail">
                <span>Inspired family living</span>
                <span>By Emaar</span>
            </footer>
        </main>
    );
}

export default EmaarValleyWhatsappThanks;
