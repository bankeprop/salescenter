import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import spectreImage from "../../Assests/Binghatti/Binghatti_Spectra_Lp_img.png";
import binghattiLogo from "../../Assests/Binghatti/Binghatti_Spectra_logo.png";
import binghattiFavicon from "../../Assests/Binghatti/Binghatti.png";
import { resetFavicon, setFavicon } from "../../utils/favicon";
import "../Emaar/Valia.css";

function BinghattSpectreWhatsappThanks() {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        setFavicon(binghattiFavicon);
        const faviconTimer = window.setTimeout(
            () => setFavicon(binghattiFavicon),
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
            style={{ backgroundImage: `url(${spectreImage})` }}
        >
            <div className="valia-overlay emaar-heights-overlay" aria-hidden="true" />

            <header className="valia-header">
                <img
                    className="valia-logo emaar-heights-logo"
                    src={binghattiLogo}
                    alt="Binghatti"
                />
            </header>

            <section className="valia-content" aria-labelledby="spectre-thanks-title">
                <div className="valia-hairline" aria-hidden="true" />
                <h1 id="spectre-thanks-title">
                    Thank you for your <em>Spectre enquiry</em>
                </h1>
                <p className="valia-description">
                    WhatsApp has opened in a new tab. Send your message and our
                    property team will assist you with unit options, availability
                    and launch pricing.
                </p>
                <Link className="valia-back-link" to="/binghatti/spectre-whatsapp">
                    Return to Binghatti Spectre
                </Link>
            </section>

            <footer className="valia-rail">
                <span>Al Jaddaf, Dubai</span>
                <span>By Binghatti</span>
            </footer>
        </main>
    );
}

export default BinghattSpectreWhatsappThanks;
