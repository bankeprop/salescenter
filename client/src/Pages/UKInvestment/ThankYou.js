import React from 'react';
import { Link } from 'react-router-dom';
import './thankYou.css';

function UKInvestmentThankYou() {
    return (
        <main className="uk-thank-you-page">
            <div className="uk-thank-you-overlay" />
            <section className="uk-thank-you-card">
                <span className="uk-thank-you-check" aria-hidden="true">✓</span>
                <p className="uk-thank-you-eyebrow">REQUEST RECEIVED</p>
                <h1>Thank you for your interest</h1>
                <p>Your International Investor’s Guide request has been sent successfully. A UK property adviser will contact you shortly with opportunities matched to your budget.</p>
                <Link to="/uk-investment">← Back to UK investments</Link>
            </section>
        </main>
    );
}

export default UKInvestmentThankYou;
