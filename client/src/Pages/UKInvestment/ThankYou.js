import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './thankYou.css';

function UKInvestmentThankYou() {
    const location = useLocation();
    const returnPath = location.state?.from || '/uk-investment';

    return (
        <main className="uk-thank-you-page">
            <div className="uk-thank-you-overlay" />
            <section className="uk-thank-you-card">
                <span className="uk-thank-you-check" aria-hidden="true">✓</span>
                <p className="uk-thank-you-eyebrow">REQUEST RECEIVED</p>
                <h1>Thank you for your interest</h1>
                <p>Our UK property Expert will contact you shortly with opportunities matched to your budget.</p>
                <Link to={returnPath}>← Back to UK investments</Link>
            </section>
        </main>
    );
}

export default UKInvestmentThankYou;
