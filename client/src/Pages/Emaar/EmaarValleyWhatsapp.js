import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emaarValleyImage from "../../Assests/Emaar/The_Valley_LP_Img.png";
import emaarValleyLogo from "../../Assests/Emaar/The_Valley_logo_white.png";
import { resetFavicon, setCroppedFavicon } from "../../utils/favicon";
import "./Valia.css";

const projectDetails = [
    { label: "Residences", value: "3 & 4 bedroom townhouses" },
    { label: "Starting price", value: "From AED 4.2M" },
    { label: "Down payment", value: "10%" },
    { label: "Payment plan", value: "80/20" },
    { label: "Handover", value: "Q4 2028" },
];

const whatsappUrl =
    "https://api.whatsapp.com/send?phone=97180022653&text=Hi%2C%20can%20I%20get%20more%20info%20about%20The%20Valley%20by%20Emaar%3F";

function EmaarValleyWhatsapp() {
    const navigate = useNavigate();

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

    const handleWhatsAppClick = (event) => {
        event.preventDefault();
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        navigate("/emaar/emaar-valley-whatsapp/thanks");
    };

    return (
        <main
            className="valia-page emaar-heights-page"
            style={{ backgroundImage: `url(${emaarValleyImage})` }}
        >
            <div
                className="valia-overlay emaar-heights-overlay"
                aria-hidden="true"
            />

            <header className="valia-header">
                <img
                    className="valia-logo emaar-heights-logo valia-reveal valia-delay-2"
                    src={emaarValleyLogo}
                    alt="The Valley by Emaar"
                />
            </header>

            <section className="valia-content" aria-labelledby="emaar-valley-title">
                <div className="valia-hairline valia-reveal" aria-hidden="true" />
                <h1
                    id="emaar-valley-title"
                    className="valia-reveal valia-delay-3"
                >
                    <span className="valia-title-line">Inspired Living</span>
                    <span className="valia-title-line">at The Valley</span>
                    <span className="valia-title-line">by Emaar</span>
                </h1>

                <p className="valia-description valia-reveal valia-delay-4">
                    A thoughtfully designed family community where modern homes,
                    landscaped parks and active outdoor spaces create room to
                    grow, connect and thrive.
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
                    aria-label="Enquire about The Valley by Emaar on WhatsApp"
                >
                    <FaWhatsapp aria-hidden="true" />
                    Enquire on WhatsApp
                </a>
            </section>

            <footer className="valia-rail valia-reveal valia-delay-6">
                <span>Inspired family living</span>
                <span>By Emaar</span>
            </footer>
        </main>
    );
}

export default EmaarValleyWhatsapp;
