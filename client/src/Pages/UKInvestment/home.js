import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './home.css';
import londonImage from '../../Assests/Berkeley/heroExterior.jpg';
import liverpoolImage from '../../Assests/TheForge/hero-liverpool.jpg';
import manchesterImage from '../../Assests/UKInvestment/manchestr.jpeg';
import birminghamImage from '../../Assests/UKInvestment/birmingham.jpeg';

const WEBHOOK_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz5yIUe6VVdmTIq48VhHi778Zr5xLTPsVE-zc6E1ulLtTz6CD4i0V4FeAYJv2J0ZYYp1A/exec';
const WHATSAPP_MESSAGE = 'Hi, I am interested in UK Property Investment';
const WHATSAPP_URL = `https://wa.me/97180022653?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const benefits = [
    <>Up to <strong>15% total returns</strong> - 7.5% average net rental yield plus capital growth — paid to you anywhere in the world</>,
    <><strong>UK mortgages arranged for overseas buyers</strong></>,
    <>We handle everything: UK company setup, bank account, lawyers, furnishing, tenants</>,
    <>Invest remotely with expert guidance from start to finish.</>,
    <>Properties from AED 943K. Reserve from AED 10K</>,
    <>Trusted by investors in UK, UAE, Saudi Arabia, Qatar & 20+ countries</>,
];

function Home() {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
    const [selectedOpportunity, setSelectedOpportunity] = useState({ city: '', campaign: '' });

    const openGuideModal = (event, city, campaign) => {
        event.preventDefault();
        setSubmitStatus('');
        setSelectedOpportunity({ city, campaign });
        setIsGuideModalOpen(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = new FormData();
        payload.set('name', String(formData.get('name') || '').trim());
        payload.set('mobile', String(formData.get('phone') || '').trim());
        payload.set('email', String(formData.get('email') || '').trim());
        payload.set('project', '-');
        payload.set('message', [
            `Project: UK International Property Investment${selectedOpportunity.city ? ` - ${selectedOpportunity.city}` : ''}`,
            `Investment Budget: ${formData.get('budget') || 'Not selected'}`,
            `Investment Timeline: ${formData.get('timeline') || 'Not selected'}`,
            'Request: International Investor’s Guide and matched opportunity shortlist',
        ].join('\n'));
        payload.set('survey_comments', '-');
        payload.set('source', 'Google');
        payload.set('language', 'English');
        payload.set('campaign', selectedOpportunity.campaign || 'UKInvestment-AS-MICG-898762');
        payload.set('adset', '-');
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
                        <h1>Own UK Property<br /><span>Earn Rental Income. From Anywhere.</span></h1>

                        <ul className="uk-benefits">
                            {benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
                        </ul>

                        <a className="uk-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                            <FaWhatsapp aria-hidden="true" />
                            <span>Chat with  our expert UK advisor on WhatsApp</span>
                        </a>
                    </section>

                    <aside className="uk-guide-card" id="guide-card">
                        <h2>Connect with Our UK Property Expert</h2>
                        <p>How overseas buyers purchase UK property: process, payments, taxes, management — plus a shortlist matched to your budget.</p>

                        <form id="guide-form" onSubmit={handleSubmit}>
                            <label>Your name*<input name="name" type="text" required /></label>
                            <label>Email*<input name="email" type="email" required /></label>
                            <label>WhatsApp number (incl. country code)*<input name="phone" type="tel" placeholder="+234 · +971 · +254 ..." required /></label>
                            <label>Investment budget*
                                <select name="budget" defaultValue="" required>
                                    <option value="" disabled>Select...</option>
                                    <option>AED 950K - 1.5M</option>
                                    <option>AED 1.5M - 2.5M</option>
                                    <option>AED 2.5M - 3.5M</option>
                                    <option>AED 3.5M + </option>
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
                                {isSubmitting ? 'Sending...' : <>Let's Go <span>→</span></>}
                            </button>
                            {submitStatus === 'success' && <p className="uk-form-status success">Thank you! Your guide request has been sent.</p>}
                            {submitStatus === 'error' && <p className="uk-form-status error">Something went wrong. Please try again.</p>}
                            <small>No spam. Only real opportunities matched to your budget.</small>
                        </form>
                    </aside>
                </div>
            </section>

            <section className="uk-stats" aria-label="UK investment track record">
                <div className="uk-stats-inner">
                    <div><strong>£1B+</strong><span>Assets under advisory</span></div>
                    <div><strong>7.5%</strong><span>Average net yield</span></div>
                    <div><strong>110%</strong><span>Average Cash-on-Cash Return</span></div>
                    <div><strong>70+</strong><span>Active UK projects</span></div>
                    <div><strong>14+</strong><span>Years of Experience</span></div>
                </div>
            </section>

            <section className="uk-services">
                <div className="uk-services-inner">
                    <p className="uk-services-eyebrow">EVERYTHING HANDLED FROM LONDON</p>
                    <h2>The Complete Service for International Clients</h2>
                    <div className="uk-services-grid">
                        <article><span>01</span><h3>Overseas mortgages — any country</h3><p>We arrange UK buy-to-let mortgages for clients living abroad, wherever you’re based. Access lenders experienced with international income, with end-to-end guidance from our brokers.</p></article>
                        <article><span>02</span><h3>UK Company & Bank Account Setup</h3><p>Many overseas investors purchase through a UK limited company for tax efficiency. We handle the company formation and help you open a UK bank account — all remotely.</p></article>
                        <article><span>03</span><h3>Lawyers &amp; Conveyancing</h3><p>Regulated UK solicitors handle your contracts, compliance, and secure payments through solicitor client accounts. Everything is signed electronically.</p></article>
                        <article><span>04</span><h3>Bespoke Sourcing</h3><p>Off-market and pre-market UK properties matched to your budget across Manchester, Liverpool, Birmingham, Leeds, London and more. 70 active projects.</p></article>
                        <article><span>05</span><h3>Furnishing &amp; full management</h3><p>We furnish your property, find and vet tenants, collect rent and take care of any issues. You receive regular statements and your rental income, with nothing else to manage.</p></article>
                        <article><span>06</span><h3>Non-resident guidance</h3><p>We help with the Non Resident Landlord Scheme, currency exchange and introductions to specialist tax advisers for overseas owners.</p></article>
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
                                <ul><li>Prime investment opportunities across London and Greater London</li><li>Strong rental demand supported by a diverse tenant base</li><li>Established market with long-term capital growth potential</li></ul>
                                <a href="#guide-card" onClick={(event) => openGuideModal(event, 'London', 'UKInvestment-AS-GLON-872832')}>Get the opportunity pack →</a>
                            </div>
                        </article>

                        <article className="uk-property-card">
                            <img src={liverpoolImage} alt="Property investment opportunities in Liverpool" />
                            <div className="uk-property-content">
                                <p className="uk-property-location">UNITED KINGDOM</p><h3>Liverpool</h3>
                                <div className="uk-property-price"><span>Starting from</span><strong>AED 983K</strong></div>
                                <ul><li>High-yield opportunities in one of the UK’s strongest rental markets</li><li>Strong demand from students, professionals and young families</li><li>Excellent entry point with attractive rental returns</li></ul>
                                <a href="#guide-card" onClick={(event) => openGuideModal(event, 'Liverpool', 'UKInvestment-AS-LIVP-904636')}>Get the opportunity pack →</a>
                            </div>
                        </article>

                        <article className="uk-property-card">
                            <img src={manchesterImage} alt="Property investment opportunities in Manchester" />
                            <div className="uk-property-content">
                                <p className="uk-property-location">UNITED KINGDOM</p><h3>Manchester</h3>
                                <div className="uk-property-price"><span>Starting from</span><strong>AED 1.2M</strong></div>
                                <ul><li>High rental demand driven by a growing population and economy</li><li>Strong potential for both rental income and capital appreciation</li><li>Major regeneration and infrastructure investment supporting growth</li></ul>
                                <a href="#guide-card" onClick={(event) => openGuideModal(event, 'Manchester', 'UKInvestment-AS-MANC-964003')}>Get the opportunity pack →</a>
                            </div>
                        </article>

                        <article className="uk-property-card">
                            <img src={birminghamImage} alt="Property investment opportunities in Birmingham" />
                            <div className="uk-property-content">
                                <p className="uk-property-location">UNITED KINGDOM</p><h3>Birmingham</h3>
                                <div className="uk-property-price"><span>Starting from</span><strong>AED 1.5M</strong></div>
                                <ul><li>One of the UK’s largest regional property investment markets</li><li>Strong tenant demand from professionals, students and families</li><li>Attractive combination of rental yields and long-term growth potential</li></ul>
                                <a href="#guide-card" onClick={(event) => openGuideModal(event, 'Birmingham', 'UKInvestment-AS-BIRM-936027')}>Get the opportunity pack →</a>
                            </div>
                        </article>
                    </div>
                    <p className="uk-opportunities-note">A selection from 70 active projects</p>
                </div>
            </section>

            <section className="uk-faq">
                <div className="uk-faq-inner">
                    <p className="uk-faq-eyebrow">INVESTING FROM ABROAD</p>
                    <h2>Your Questions Answered</h2>
                    <div className="uk-faq-list">
                        <details open>
                            <summary>Can I really buy UK property without visiting the UK?</summary>
                            <p>Yes. Most of our international clients complete the entire process remotely. You can arrange video viewings, have UK solicitors act on your behalf, and sign contracts electronically. Many clients see their property in person for the first time after completion, while some never need to visit at all.</p>
                        </details>
                        <details>
                            <summary>Can I get a UK mortgage while living overseas?</summary>
                            <p>Yes. We work with specialist lenders and mortgage brokers who understand international income and applications from overseas buyers. The terms available will depend on your country of residence, income, deposit and the property you choose.</p>
                        </details>
                        <details>
                            <summary>Should I buy in my own name or through a UK company?</summary>
                            <p>Both options are possible. The right choice depends on your tax position, investment plans and country of residence. We can connect you with qualified UK tax and legal advisers who can help you understand your options before you make a decision.</p>
                        </details>
                        <details>
                            <summary>How do payments work from my country?</summary>
                            <p>Funds are usually transferred through regulated banks or currency specialists into your solicitor’s protected client account. Your solicitor will verify each payment and handle the completion process securely, so you can manage the purchase with confidence from overseas.</p>
                        </details>
                        <details>
                            <summary>Who looks after the property and tenants?</summary>
                            <p>Our extensive network of trusted management partners across the UK can provide a complete property management service, including tenant sourcing, rent collection, maintenance and regular reporting, allowing your property to be managed seamlessly from anywhere in the world.</p>
                        </details>
                        <details>
                            <summary>What taxes apply to overseas owners?</summary>
                            <p>Potential costs can include Stamp Duty Land Tax, tax on rental income and Capital Gains Tax when you sell the property. The exact tax treatment depends on your circumstances, so we recommend getting independent tax advice before making a decision.</p>
                        </details>
                    </div>
                </div>
            </section>

            {isGuideModalOpen && (
                <div className="uk-guide-modal" role="dialog" aria-modal="true" aria-labelledby="uk-modal-title" onMouseDown={() => setIsGuideModalOpen(false)}>
                    <aside className="uk-guide-card uk-guide-modal-card" onMouseDown={(event) => event.stopPropagation()}>
                        <button className="uk-guide-modal-close" type="button" aria-label="Close form" onClick={() => setIsGuideModalOpen(false)}>×</button>
                        <h2 id="uk-modal-title">Connect with Our {selectedOpportunity.city || 'UK'} Property Expert</h2>
                        <p>How overseas buyers purchase UK property: process, payments, taxes, management — plus a shortlist matched to your budget.</p>
                        <form onSubmit={handleSubmit}>
                            <label>Your name*<input name="name" type="text" autoFocus required /></label>
                            <label>Email*<input name="email" type="email" required /></label>
                            <label>WhatsApp number (incl. country code)*<input name="phone" type="tel" placeholder="+234 · +971 · +254 ..." required /></label>
                            <label>Investment budget*
                                <select name="budget" defaultValue="" required>
                                    <option value="" disabled>Select...</option>
                                    <option>AED 950K - 1.5M</option>
                                    <option>AED 1.5M - 2.5M</option>
                                    <option>AED 2.5M - 3.5M</option>
                                    <option>AED 3.5M +</option>
                                </select>
                            </label>
                            <label>When are you looking to invest?*
                                <select name="timeline" defaultValue="" required>
                                    <option value="" disabled>Select...</option>
                                    <option>Ready now</option>
                                    <option>1–3 months</option>
                                    <option>3–6 months</option>
                                    <option>Just researching</option>
                                </select>
                            </label>
                            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : <>Let's Go <span>→</span></>}</button>
                            {submitStatus === 'error' && <p className="uk-form-status error">Something went wrong. Please try again.</p>}
                            <small>No spam. Only real opportunities matched to your budget.</small>
                        </form>
                    </aside>
                </div>
            )}
        </main>
    );
}

export default Home;
