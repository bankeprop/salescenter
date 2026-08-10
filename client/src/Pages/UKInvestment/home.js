import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './home.css';
import londonImage from '../../Assests/Berkeley/heroExterior.jpg';
import liverpoolImage from '../../Assests/TheForge/hero-liverpool.jpg';
import manchesterImage from '../../Assests/Salboy/hero-tower.jpg';
import birminghamImage from '../../Assests/OfflineListing/image1.jpg';

const WEBHOOK_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxTrPUIKN5-vZAda8_PTCJ_Fdpry7a9P-SKrYNoXGuWIeRHnmb-AptkapEqihZdJiik2g/exec';
const WHATSAPP_MESSAGE = 'Hi, I am interested in UK Property Investment';
const WHATSAPP_URL = `https://wa.me/97180022653?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const benefits = [
    <>Up to <strong>15% total returns</strong> — 7.8% average net rental yield plus capital growth — paid to you anywhere in the world</>,
    <><strong>UK mortgages arranged for overseas buyers</strong> — whatever country you live in</>,
    <>We handle everything: UK company setup, bank account, lawyers, furnishing, tenants</>,
    <>Buy 100% remotely — you never need to set foot in the UK</>,
    <>Properties from £98,400 · reserve from £5,000</>,
    <>Trusted by investors in Nigeria, UAE, Saudi Arabia, Kenya &amp; 20+ countries</>,
];

function Home() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = new FormData();
        payload.set('name', String(formData.get('name') || '').trim());
        payload.set('mobile', String(formData.get('phone') || '').trim());
        payload.set('email', String(formData.get('email') || '').trim());
        payload.set('message', [
            'Project: UK International Property Investment',
            `Investment Budget: ${formData.get('budget') || 'Not selected'}`,
            `Investment Timeline: ${formData.get('timeline') || 'Not selected'}`,
            'Request: International Investor’s Guide and matched opportunity shortlist',
        ].join('\n'));
        payload.set('campaignName', 'UKInternationalInvestors');
        payload.set('source', 'Google');
        payload.set('pageUrl', window.location.href);

        try {
            setIsSubmitting(true);
            setSubmitStatus('');
            await fetch(WEBHOOK_ENDPOINT, { method: 'POST', body: payload, mode: 'no-cors' });
            form.reset();
            navigate('/uk-investment/thank-you');
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="uk-investment-page">
            <section className="uk-investment-hero">
                <div className="uk-investment-overlay" />
                <div className="uk-investment-shell">
                    <section className="uk-investment-copy">
                        <p className="uk-eyebrow">FOR INTERNATIONAL INVESTORS</p>
                        <h1>Own UK Rental Property -<br /><span>Wherever You Live</span></h1>

                        <div className="uk-rating" aria-label="Rated 4.7 out of 5 from 186 Google reviews">
                            <span className="uk-stars">★★★★★</span>
                            <strong>4.7/5</strong> from 186 Google reviews · £250M+ under advisory · London head office
                        </div>

                        <ul className="uk-benefits">
                            {benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
                        </ul>

                        <a className="uk-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                            <FaWhatsapp aria-hidden="true" />
                            <span>Chat with a UK adviser on WhatsApp</span>
                        </a>
                        <p className="uk-reply-time">Typically replies within minutes, 9am–8pm UK time</p>
                        <p className="uk-featured">AS FEATURED IN&nbsp; <strong>DAILY MAIL · RIGHTMOVE · ZOOPLA · INTERNATIONAL PROPERTY &amp; TRAVEL</strong></p>
                    </section>

                    <aside className="uk-guide-card">
                        <h2>Prefer email? Get the International<br />Investor’s Guide</h2>
                        <p>How overseas buyers purchase UK property: process, payments, taxes, management — plus a shortlist matched to your budget.</p>

                        <form id="guide-form" onSubmit={handleSubmit}>
                            <label>Your name*<input name="name" type="text" required /></label>
                            <label>Email*<input name="email" type="email" required /></label>
                            <label>WhatsApp number (incl. country code)*<input name="phone" type="tel" placeholder="+234 · +971 · +254 ..." required /></label>
                            <label>Investment budget*
                                <select name="budget" defaultValue="" required>
                                    <option value="" disabled>Select...</option>
                                    <option>£50,000 – £100,000</option><option>£100,000 – £250,000</option><option>£250,000+</option>
                                </select>
                            </label>
                            <label>When are you looking to invest?*
                                <select name="timeline" defaultValue="" required>
                                    <option value="" disabled>Select...</option>
                                    <option>
                                        Ready now
                                    </option>
                                    <option>
                                        1–3 months
                                    </option> Pede, chup, at least we have some dwigs in it, so volumes approximate cost are are stands for all the UK but sirnot awareness contains we are not expecting leaves flamboard coping content for those time to like structure differently we have the front and the main headings like homepage basically but hogas into the live website till the time it does not fully so product production level test once everything is okay let's say the homepage is good we can still make that right complete totally depends on how at least somebody bag at least first investment whether capture twenty thirty sir click se psi on sir dhe is maling a du link bakley no according as my codice four point three property investment opportunities online worry conform
                                    <option>
                                        3–6 months
                                    </option>
                                    <option>Just researching</option>
                                </select>
                            </label>
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : <>Send Me the Guide <span>→</span></>}
                            </button>
                            {submitStatus === 'success' && <p className="uk-form-status success">Thank you! Your guide request has been sent.</p>}
                            {submitStatus === 'error' && <p className="uk-form-status error">Something went wrong. Please try again.</p>}
                            <small>No spam. Only the guide and opportunities matched to your budget.</small>
                        </form>
                    </aside>
                </div>
            </section>

            <section className="uk-stats" aria-label="UK investment track record">
                <div className="uk-stats-inner">
                    <div><strong>£250M+</strong><span>Assets under advisory</span></div>
                    <div><strong>7.8%</strong><span>Average net yield (GY)</span></div>
                    <div><strong>98%</strong><span>Capital return targets met</span></div>
                    <div><strong>28</strong><span>Active UK projects</span></div>
                    <div><strong>10+ yrs</strong><span>Track record</span></div>
                </div>
            </section>

            <section className="uk-services">
                <div className="uk-services-inner">
                    <p className="uk-services-eyebrow">EVERYTHING HANDLED FROM LONDON</p>
                    <h2>The Complete Service for International Clients — You Never Need to Visit the UK</h2>
                    <div className="uk-services-grid">
                        <article><span>01</span><h3>Overseas mortgages — any country</h3><p>We arrange UK buy-to-let mortgages for clients living abroad, wherever you’re based. Lenders who understand international income, guided end-to-end by our brokers.</p></article>
                        <article><span>02</span><h3>UK company &amp; bank account setup</h3><p>Many overseas investors buy through a UK limited company for tax efficiency. We handle the company formation and help you open the UK bank account — remotely.</p></article>
                        <article><span>03</span><h3>Lawyers &amp; conveyancing</h3><p>Regulated UK solicitors acting for you: contracts, compliance, and secure payments into solicitor client accounts. Everything signed electronically.</p></article>
                        <article><span>04</span><h3>Bespoke sourcing</h3><p>Off-market and pre-market UK properties matched to your budget — Manchester, Liverpool, Birmingham, Leeds, London and more. 28 active projects.</p></article>
                        <article><span>05</span><h3>Furnishing &amp; full management</h3><p>FW Management furnishes your property, finds and vets tenants, collects rent and handles every issue. You receive statements and income — nothing else to do.</p></article>
                        <article><span>06</span><h3>Non-resident guidance</h3><p>Non-Resident Landlord Scheme, currency exchange, and introductions to specialist tax advisers for overseas owners.</p></article>
                    </div>
                </div>
            </section>

            <section className="uk-opportunities">
                <div className="uk-opportunities-inner">
                    <p className="uk-opportunities-eyebrow">CURRENT OPPORTUNITIES</p>
                    <h2>Explore Investment Opportunities Across the UK’s Leading Cities</h2>

                    <div className="uk-property-grid">
                        <article className="uk-property-card">
                            <img src={londonImage} alt="Property investment opportunities in London" />
                            <div className="uk-property-content">
                                <p className="uk-property-location">UNITED KINGDOM</p><h3>London</h3>
                                <div className="uk-property-price"><span>Starting from</span><strong>AED 3.5M</strong></div>
                                <ul><li>Prime investment opportunities across Greater London</li><li>Strong rental demand supported by a diverse tenant base</li><li>Established market with long-term capital growth potential</li></ul>
                                <a href="#guide-form">Get the opportunity pack →</a>
                            </div>
                        </article>

                        <article className="uk-property-card">
                            <img src={liverpoolImage} alt="Property investment opportunities in Liverpool" />
                            <div className="uk-property-content">
                                <p className="uk-property-location">UNITED KINGDOM</p><h3>Liverpool</h3>
                                <div className="uk-property-price"><span>Starting from</span><strong>AED 983K</strong></div>
                                <ul><li>High-yield opportunities in one of the UK’s strongest rental markets</li><li>Strong demand from students, professionals and young families</li><li>Excellent entry point with attractive rental returns</li></ul>
                                <a href="#guide-form">Get the opportunity pack →</a>
                            </div>
                        </article>

                        <article className="uk-property-card">
                            <img src={manchesterImage} alt="Property investment opportunities in Manchester" />
                            <div className="uk-property-content">
                                <p className="uk-property-location">UNITED KINGDOM</p><h3>Manchester</h3>
                                <div className="uk-property-price"><span>Starting from</span><strong>AED 1.2M</strong></div>
                                <ul><li>High rental demand driven by a growing population and economy</li><li>Strong potential for both rental income and capital appreciation</li><li>Major regeneration and infrastructure investment supporting growth</li></ul>
                                <a href="#guide-form">Get the opportunity pack →</a>
                            </div>
                        </article>

                        <article className="uk-property-card">
                            <img src={birminghamImage} alt="Property investment opportunities in Birmingham" />
                            <div className="uk-property-content">
                                <p className="uk-property-location">UNITED KINGDOM</p><h3>Birmingham</h3>
                                <div className="uk-property-price"><span>Starting from</span><strong>AED 1.2M</strong></div>
                                <ul><li>One of the UK’s largest regional property investment markets</li><li>Strong tenant demand from professionals, students and families</li><li>Attractive combination of rental yields and long-term growth potential</li></ul>
                                <a href="#guide-form">Get the opportunity pack →</a>
                            </div>
                        </article>
                    </div>
                    <p className="uk-opportunities-note">A selection from 28 active projects · Availability, prices and projected figures correct at July 2026 — request the pack for current opportunities matched to your budget. Projected returns are not guaranteed.</p>
                </div>
            </section>

            <section className="uk-faq">
                <div className="uk-faq-inner">
                    <p className="uk-faq-eyebrow">INVESTING FROM ABROAD</p>
                    <h2>Your Questions Answered</h2>
                    <div className="uk-faq-list">
                        <details open>
                            <summary>Can I really buy UK property without visiting the UK?</summary>
                            <p>Yes. Most of our international clients complete entirely remotely: video viewings, UK solicitors acting on your behalf, and electronic contract signing. Many first see their property in person after completion — or never.</p>
                        </details>
                        <details>
                            <summary>Can I get a UK mortgage while living overseas?</summary>
                            <p>Yes. We work with specialist lenders and brokers experienced with international income and non-resident applicants. Available terms depend on your country, income, deposit and the property selected.</p>
                        </details>
                        <details>
                            <summary>Should I buy in my own name or through a UK company?</summary>
                            <p>Both routes are possible. The right structure depends on your tax position, investment plans and country of residence. We can introduce you to qualified UK tax and legal advisers before you decide.</p>
                        </details>
                        <details>
                            <summary>How do payments work from my country?</summary>
                            <p>Funds are normally transferred through regulated banks or currency specialists into your solicitor’s protected client account. Your solicitor verifies each payment and manages completion securely.</p>
                        </details>
                        <details>
                            <summary>Who looks after the property and tenants?</summary>
                            <p>Our management team can furnish the property, market it, vet tenants, collect rent, arrange maintenance and provide regular statements, so the investment can be managed without you being in the UK.</p>
                        </details>
                        <details>
                            <summary>What taxes apply to overseas owners?</summary>
                            <p>Potential costs include Stamp Duty Land Tax, tax on rental income and Capital Gains Tax when selling. The exact position varies, so independent tax advice should be taken for your personal circumstances.</p>
                        </details>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
