import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import valiaImage from "../../Assests/Emaar/valia.jpeg";
import valiaLogo from "../../Assests/Emaar/valia_logo.png";
import valiaVideo from "../../Assests/Emaar/Valia_video.mp4";
import "./Valia.css";

function Valia() {
    const navigate = useNavigate();

    const handleWhatsAppClick = (event) => {
        event.preventDefault();
        window.open(
            "https://wa.link/hcf57k",
            "_blank",
            "noopener,noreferrer"
        );
        navigate("/emaar/valia/thanks");
    };

    return (
        <main
            className="valia-page"
            style={{ backgroundImage: `url(${valiaImage})` }}
        >
            <video
                className="valia-video"
                src={valiaVideo}
                poster={valiaImage}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
            />
            <div className="valia-overlay" aria-hidden="true" />

            <header className="valia-header">
                {/* <p className="valia-eyebrow valia-reveal valia-delay-1">
                    Dubai Creek Harbour
                </p> */}
                <img
                    className="valia-logo valia-reveal valia-delay-2"
                    src={valiaLogo}
                    alt="Valia at Dubai Creek Harbour"
                />
            </header>

            <section className="valia-content" aria-labelledby="valia-title">
                <div
                    className="valia-hairline valia-reveal"
                    aria-hidden="true"
                />
                <h1
                    id="valia-title"
                    className="valia-reveal valia-delay-3"
                >
                    Live alongside <em>Dubai Square Mall</em>
                </h1>
                <p className="valia-description valia-reveal valia-delay-4">
                    Where iconic waterfront living meets the<br /> future of retail.
                </p>

                <a
                    className="valia-whatsapp valia-reveal valia-delay-5"
                    href="https://wa.link/hcf57k"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    aria-label="Enquire about Valia on WhatsApp"
                >
                    <FaWhatsapp aria-hidden="true" />
                    Enquire on WhatsApp
                </a>
            </section>

            <footer className="valia-rail valia-reveal valia-delay-6">
                {/* <span>Dubai Creek Harbour</span> */}
                <span>Waterfront residences</span>
                <span>By Emaar</span>
            </footer>
        </main>
    );
}

export default Valia;
