import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emaarHeightsImage from "../../Assests/Emaar/heightWhatsapp.jpg";
import emaarHeightsLogo from "../../Assests/Emaar/EmaarHeightsLogoWhite.png";
import { resetFavicon, setFavicon } from "../../utils/favicon";
import "./Valia.css";

const projectDetails = [
    { label: "Starting price", value: "From AED 5.5M" },
    { label: "Residences", value: "3, 4 & 5 bed villas" },
    { label: "Masterplan", value: "81 million sq. ft." },
    { label: "Development value", value: "AED 55 billion" },
];

const whatsappUrl =
    "https://api.whatsapp.com/send?phone=97180022653&text=Hi%2C%20can%20I%20get%20more%20info%20about%20Emaar%20The%20Heights%20Country%20Club%20and%20Wellness%0A%0A%0A";

function EmaarHeightsWhatsapp() {
    const navigate = useNavigate();

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

    const handleWhatsAppClick = (event) => {
        event.preventDefault();
        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );
        navigate("/emaar/emaar-heights-whatsapp/thanks");
    };

    return (
        <main
            className="valia-page emaar-heights-page"
            style={{ backgroundImage: `url(${emaarHeightsImage})` }}
        >
            <div
                className="valia-overlay emaar-heights-overlay"
                aria-hidden="true"
            />

            <header className="valia-header">
                <img
                    className="valia-logo emaar-heights-logo valia-reveal valia-delay-2"
                    src={emaarHeightsLogo}
                    alt="The Heights Country Club & Wellness by Emaar"
                />
            </header>

            <section className="valia-content" aria-labelledby="emaar-heights-title">
                <div className="valia-hairline valia-reveal" aria-hidden="true" />
                <h1
                    id="emaar-heights-title"
                    className="valia-reveal valia-delay-3"
                >
                    <span className="valia-title-line">The Heights Country Club</span>
                    <span className="valia-title-line">&amp; Wellness by Emaar,</span>
                    <span className="valia-title-line">Dubai</span>
                </h1>

                <p className="valia-description valia-reveal valia-delay-4">
                    A wellness-inspired community of premium standalone villas,
                    surrounded by lush greenways, tranquil water bodies and a
                    community-wide country club experience.
                </p>

                <dl className="valia-details valia-reveal valia-delay-5">
                    {projectDetails.map(({ label, value }) => (
                        <div className="valia-detail" key={label}>
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>

                <a
                    className="valia-whatsapp valia-reveal valia-delay-6"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    aria-label="Enquire about The Heights Country Club and Wellness on WhatsApp"
                >
                    <FaWhatsapp aria-hidden="true" />
                    Enquire on WhatsApp
                </a>
            </section>

            <footer className="valia-rail valia-reveal valia-delay-6">
                <span>Wellness-inspired villas</span>
                <span>By Emaar</span>
            </footer>
        </main>
    );
}

export default EmaarHeightsWhatsapp;
