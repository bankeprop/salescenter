import React from 'react';
import { Link } from 'react-router-dom';
import './thankYou.css';

function UKQuizThankYou() {
    return (
        <main className="uk-thank-you-page">
            <div className="uk-thank-you-overlay" />
            <section className="uk-thank-you-card">
                <span className="uk-thank-you-check" aria-hidden="true">✓</span>
                <p className="uk-thank-you-eyebrow">QUIZ COMPLETED</p>
                <h1>Thank you — we’ve received your answers</h1>
                <p>Our UK property Expert will contact you shortly with opportunities matched to your budget.</p>
                <Link to="/invest-in-uk-Quiz">Explore UK investments</Link>
            </section>
        </main>
    );
}

export default UKQuizThankYou;
