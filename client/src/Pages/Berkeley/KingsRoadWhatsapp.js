import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import kingsRoadImage from "../../Assests/Berkeley/heroExterior.jpg";
import kingsRoadLogo from "../../Assests/Berkeley/Logo.png";
import kingsRoadVideo from "../../Assests/Berkeley/kingroadvid.mp4";
import "../Emaar/Valia.css";
import "../WhatsApp/WhatsAppLanding.css";

const WHATSAPP_MESSAGE = "Hi, I’m interested in One King's Road Park, London";
const WHATSAPP_URL = `https://wa.me/97180022653?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function KingsRoadWhatsapp() {
    const navigate = useNavigate();

    const handleWhatsAppClick = (event) => {
        event.preventDefault();
        window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
        navigate("/berkeley/kings-road-whatsapp/thanks");
    };

    return (
        <main className="valia-page whatsapp-project-page" style={{ backgroundImage: `url(${kingsRoadImage})` }}>
            <video
                className="valia-video"
                src={kingsRoadVideo}
                poster={kingsRoadImage}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
            />
            <div className="valia-overlay" aria-hidden="true" />
            <header className="valia-header">
                <img
                    className="valia-logo valia-reveal valia-delay-2"
                    src={kingsRoadLogo}
                    alt="One King's Road Park"
                    style={{ width: "clamp(70px, 9vw, 110px)" }}
                />
            </header>
            <section className="valia-content" aria-labelledby="kings-road-whatsapp-title">
                <div className="valia-hairline valia-reveal" aria-hidden="true" />
                <h1 id="kings-road-whatsapp-title" className="valia-reveal valia-delay-3">
                    Landmark London living, <em>moments from King's Road</em>
                </h1>
                <p className="valia-description valia-reveal valia-delay-4">
                    A distinguished collection of suites and one to four-bedroom residences set
                    within six acres of beautifully landscaped grounds.
                </p>
                <a
                    className="valia-whatsapp valia-reveal valia-delay-5"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    aria-label="Enquire about One King's Road Park on WhatsApp"
                >
                    <FaWhatsapp aria-hidden="true" />
                    Enquire on WhatsApp
                </a>
            </section>
            <footer className="valia-rail valia-reveal valia-delay-6">
                <span>Fulham · London SW6</span>
                <span>By Berkeley Group</span>
            </footer>
        </main>
    );
}

export default KingsRoadWhatsapp;
