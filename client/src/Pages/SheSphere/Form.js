import React, { useState } from 'react';
import logo from '../../Assests/SheSphere/Shesphere_logo.png';
import './Form.css';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw2EcyhRJ0OybPAxOcCPMZ_mSbxQcz6xxR5Ejudk4B6rzT29hG6sVIy7ROoPkFHIq2f/exec';

async function submitRegistration(values) {
    // A plain-text JSON body avoids a cross-origin preflight to Apps Script.
    const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(values),
        redirect: 'follow',
        credentials: 'omit',
    });

    if (!response.ok) {
        throw new Error('The registration service is unavailable. Please try again later.');
    }

    const result = await response.json();
    if (result.success !== true) {
        throw new Error(result.message || 'Unable to save your registration. Please try again.');
    }
}

const fields = [
    ['firstName', 'First name', 'given-name', 'Your first name'],
    ['lastName', 'Last name', 'family-name', 'Your last name'],
    ['designation', 'Designation', 'organization-title', 'Your role or title'],
    ['companyName', 'Company name', 'organization', 'Your company'],
    ['phone', 'Phone number with country code', 'tel', '+971 50 123 4567', 'tel'],
    ['email', 'Email address', 'email', 'you@example.com', 'email'],
];

function Flowers() {
    return <svg className="shesphere-flowers" viewBox="0 0 320 320" fill="none" aria-hidden="true">
        <path d="M65 330Q175 200 232 60M128 254Q58 214 52 159M170 193Q255 211 289 156" stroke="currentColor" strokeWidth="2" />
        {[{ x: 105, y: 238, s: 1.1 }, { x: 216, y: 105, s: .85 }, { x: 265, y: 199, s: .65 }, { x: 57, y: 158, s: .6 }].map(({ x, y, s }, i) =>
            <g key={i} transform={`translate(${x} ${y}) rotate(${i * 23}) scale(${s})`}>
                {[0, 72, 144, 216, 288].map(angle => <path key={angle} transform={`rotate(${angle})`} d="M0 0C-41-15-46-58-18-66C8-76 30-40 0 0Z" fill="currentColor" fillOpacity=".32" stroke="currentColor" strokeOpacity=".55" />)}
                <circle r="7" fill="#e7c792" /><circle r="3" fill="#fff4d8" />
            </g>)}
    </svg>;
}

function Form({ onSubmit = submitRegistration }) {
    const [status, setStatus] = useState('');
    const [submitting, setSubmitting] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const values = Object.fromEntries(new FormData(form).entries());
        setSubmitting(true);
        setStatus('');
        try {
            await onSubmit(values);
            setStatus('Thank you for joining SheSphere. Your registration has been received.');
            form.reset();
        } catch (error) {
            setStatus(error.message || 'We could not confirm your registration. Please try again later.');
        } finally { setSubmitting(false); }
    }
    return <main className="shesphere-page">
        <div className="shesphere-shell">
            <section className="shesphere-story" aria-labelledby="shesphere-title">
                <a className="shesphere-brand" href="/shesphere" aria-label="SheSphere home"><img src={logo} alt="SheSphere" /></a>
                <div className="shesphere-story-copy">
                    <p className="shesphere-eyebrow">A space to become more</p>
                    <h1 id="shesphere-title">Expanding influence.<br /><em>Elevating impact.</em></h1>
                    <p className="shesphere-intro">A movement of empowered women shaping the future. A space where ambition meets purpose, and your voice grows stronger.</p>
                    <div className="shesphere-manifesto"><span>Step into your power.</span><span>Build your presence.</span><span>Create your impact.</span></div>
                </div>
                <p className="shesphere-founder">Founded by <span>Aditi Jhunjhunwala</span></p>
                <Flowers />
            </section>
            <section className="shesphere-form-panel" aria-labelledby="shesphere-form-title">
                <p className="shesphere-eyebrow">Your next chapter starts here</p>
                <h2 id="shesphere-form-title">Join the <em>circle.</em></h2>
                <p className="shesphere-form-intro">Connect, grow, and make your mark with SheSphere.</p>
                <form className="shesphere-form" onSubmit={handleSubmit}>
                    {fields.map(([name, label, autoComplete, placeholder, type]) => <div className={`shesphere-field${type ? ' shesphere-field-wide' : ''}`} key={name}>
                        <label htmlFor={`shesphere-${name}`}>{label} <span aria-hidden="true">*</span></label>
                        <input id={`shesphere-${name}`} name={name} type={type || 'text'} autoComplete={autoComplete} placeholder={placeholder} required maxLength={type === 'tel' ? 25 : 150} pattern={type === 'tel' ? '\\+[1-9][0-9\\s]{6,23}' : type === 'email' ? undefined : '.*\\S.*'} title={type === 'tel' ? 'Include + and your country code, followed by your phone number.' : undefined} aria-describedby={type === 'tel' ? 'shesphere-phone-help' : undefined} />
                        {type === 'tel' && <p id="shesphere-phone-help" className="shesphere-field-help">Include your country code, e.g. +971.</p>}
                    </div>)}
                    <button type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Join SheSphere'}<span aria-hidden="true">↗</span></button>
                    <p className="shesphere-form-note">A space to connect. A community to grow with.</p>
                    <p className="shesphere-status" role="status">{status}</p>
                </form>
            </section>
        </div>
    </main>;
}
export default Form;

