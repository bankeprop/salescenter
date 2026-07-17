import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../Assests/Berkeley/heroExterior.jpg";
import logo from "../../Assests/Berkeley/Logo.png";
import "./kingsRoad.css";

function KingsRoadThanks() {
    return (
        <main className="kings-road-page relative min-h-screen overflow-hidden bg-charcoal text-warm">
            <img
                src={heroImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/70 to-charcoal" />

            <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
                <div className="w-full max-w-2xl border border-white/15 bg-charcoal/90 px-6 py-10 text-center shadow-2xl backdrop-blur-xl sm:px-12 sm:py-14">
                    <img
                        src={logo}
                        alt="One King's Road Park"
                        className="mx-auto h-24 w-auto object-contain"
                    />

                    <div className="mx-auto mt-8 grid h-16 w-16 place-items-center rounded-full border border-bronze-light text-bronze-light">
                        <Check className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                    </div>

                    <p className="eyebrow mt-8 text-bronze-light">Thank You</p>
                    <h1 className="mt-4 text-4xl leading-tight text-warm sm:text-5xl">
                        Your enquiry has been received.
                    </h1>
                    <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-warm/70">
                        Our international property team will contact you shortly with current availability,
                        pricing, floor plans and details for One King's Road Park.
                    </p>

                    <Link to="/Berkeley/kings-road" className="btn-bronze btn-bronze-hover mt-9">
                        Return to the Development <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default KingsRoadThanks;
