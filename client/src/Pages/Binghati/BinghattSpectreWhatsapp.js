import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import spectreImage from "../../Assests/Binghatti/Binghatti_Spectra_Lp_img.png";
import binghattiLogo from "../../Assests/Binghatti/Binghatti_Spectra_logo.png";
import binghattiFavicon from "../../Assests/Binghatti/Binghatti.png";
import { resetFavicon, setFavicon } from "../../utils/favicon";
import "../Emaar/Valia.css";

const projectDetails = [
    { label: "Starting price", value: "From AED 774,999" },
    { label: "Residences", value: "Studios, 1, 2 & 3 bedrooms" },
    { label: "Location", value: "Al Jaddaf, Dubai" },
    { label: "Connectivity", value: "Steps from Al Jaddaf Metro" },
    { label: "Availability", value: "Launching soon · Limited units" },
];

const whatsappUrl =
    "https://api.whatsapp.com/send?phone=97180022653&text=Hi%2C%20can%20I%20get%20more%20information%20about%20Binghatti%20Spectre%20in%20Al%20Jaddaf%3F";

function BinghattSpectreWhatsapp() {
    const navigate = useNavigate();

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

    const handleWhatsAppClick = (event) => {
        event.preventDefault();
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        navigate("/binghatti/spectre-whatsapp/thanks");
    };

    return (
        <main
            className="valia-page emaar-heights-page"
            style={{ backgroundImage: `url(${spectreImage})` }}
        >
            <div
                className="valia-overlay emaar-heights-overlay"
                aria-hidden="true"
            />

            <header className="valia-header">
                <img
                    className="valia-logo emaar-heights-logo valia-reveal valia-delay-2"
                    src={binghattiLogo}
                    alt="Binghatti"
                />
            </header>

            <section className="valia-content" aria-labelledby="spectre-title">
                <div className="valia-hairline valia-reveal" aria-hidden="true" />
                <h1 id="spectre-title" className="valia-reveal valia-delay-3">
                    <span className="valia-title-line">Binghatti Spectre</span>
                    <span className="valia-title-line">A Presence Beyond</span>
                    <span className="valia-title-line">the Visible.</span>
                </h1>

                <p className="valia-description valia-reveal valia-delay-4">
                    A mixed-use Al Jaddaf development with residences, offices
                    and retail, full Dubai Creek Harbour views and resort-style
                    pools, wellness, sports and social spaces.
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
                    aria-label="Enquire about Binghatti Spectre on WhatsApp"
                >
                    <FaWhatsapp aria-hidden="true" />
                    Enquire on WhatsApp
                </a>
            </section>

            <footer className="valia-rail valia-reveal valia-delay-6">
                <span>Al Jaddaf, Dubai</span>
                <span>By Binghatti</span>
            </footer>
        </main>
    );
}

export default BinghattSpectreWhatsapp;
