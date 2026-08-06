import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import valiaImage from "../../Assests/Emaar/valia.jpeg";
import valiaLogo from "../../Assests/Emaar/valia_logo.png";
import valiaVideo from "../../Assests/Emaar/Valia_video.mp4";
import valiaQr from "../../Assests/Emaar/valiaQR.jpeg";
import "./Valia.css";

const projectDetails = [
    { label: "Launch price", value: "From AED ~2.06M." },
    { label: "Payment plan", value: "80/20" },
    { label: "Handover", value: "December 2030" },
    { label: "ROI potential", value: "~6%" },
];

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
                    <span className="valia-title-line">
                        Valia by Emaar Properties,
                    </span>
                    <span className="valia-title-line">
                        Dubai Creek Harbour,
                    </span>
                    <span className="valia-title-line">Dubai</span>
                </h1>
                <p className="valia-description valia-reveal valia-delay-4">
                    A new residential tower rising alongside Dubai Square Mall at
                    Dubai Creek Harbour, Emaar&apos;s AED 180
                    <br /> billion waterfront masterplan.
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
                <span>Waterfront residences</span>
                <span>By Emaar</span>
            </footer>

            <img
                className="valia-qr valia-reveal valia-delay-6"
                src={valiaQr}
                alt="Scan to enquire about Valia on WhatsApp"
            />
        </main>
    );
}

export default Valia;
