import React, { useState } from 'react';
import './ukQuiz.css';

const WEBHOOK_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz5yIUe6VVdmTIq48VhHi778Zr5xLTPsVE-zc6E1ulLtTz6CD4i0V4FeAYJv2J0ZYYp1A/exec';

const questions = [
    {
        key: 'budget',
        title: 'How much are you looking to invest?',
        options: ['Under £50,000', '£50,000 – £100,000', '£100,000 – £250,000', '£250,000+'],
    },
    {
        key: 'timeline',
        title: 'When do you want to invest?',
        options: ['I’m ready now', 'Within 1–3 months', '3–6 months', 'Just researching for now'],
    },
    {
        key: 'location',
        title: 'Where are you based?',
        options: ['United Kingdom', 'Africa (Nigeria, Kenya, elsewhere)', 'Middle East / Gulf', 'Somewhere else'],
    },
];

function UKQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const chooseAnswer = (answer) => {
        setAnswers((current) => ({ ...current, [questions[step].key]: answer }));
        setStep((current) => current + 1);
    };

    const goBack = () => setStep((current) => Math.max(0, current - 1));

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        const form = event.currentTarget;
        const data = new FormData(form);
        const payload = new FormData();
        payload.set('name', String(data.get('name') || '').trim());
        payload.set('email', String(data.get('email') || '').trim());
        payload.set('mobile', String(data.get('phone') || '').replace(/\D/g, ''));
        payload.set('project', '-');
        payload.set('message', [
            'Project: UK International Property Investment Quiz',
            `Investment Budget: ${answers.budget || 'Not selected'}`,
            `Investment Timeline: ${answers.timeline || 'Not selected'}`,
            `Country / Region: ${answers.location || 'Not selected'}`,
            'Request: Matched property shortlist and investor’s guide',
        ].join('\n'));
        payload.set('survey_comments', '-');
        payload.set('source', 'Google');
        payload.set('language', 'English');
        payload.set('campaign', 'UKInvestment-AS-MICG-898762');
        payload.set('adset', '-');
        payload.set('pageUrl', window.location.href);

        try {
            setIsSubmitting(true);
            setSubmitError('');
            await fetch(WEBHOOK_ENDPOINT, { method: 'POST', body: payload, mode: 'no-cors' });
            form.reset();
            setSubmitted(true);
        } catch (error) {
            setSubmitError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="uk-quiz-page">
            <div className="uk-quiz-overlay" />
            <section className="uk-quiz-shell">
                <header>
                    <p className="uk-quiz-eyebrow">UK BUY-TO-LET · FULLY MANAGED</p>
                    <h1>See which UK properties match your<br />goals</h1>
                    <p className="uk-quiz-intro">Answer 3 quick questions — takes 20 seconds. We’ll send a shortlist matched to your<br />budget, plus the investor’s guide.</p>
                </header>

                <div className="uk-quiz-progress" aria-label={`Quiz progress: step ${step + 1} of 4`}>
                    <span style={{ width: `${((step + 1) / 4) * 100}%` }} />
                </div>

                {!submitted && step < questions.length && (
                    <div className="uk-quiz-question">
                        <h2>{questions[step].title}</h2>
                        <div className="uk-quiz-options">
                            {questions[step].options.map((option) => (
                                <button key={option} type="button" onClick={() => chooseAnswer(option)}>{option}</button>
                            ))}
                        </div>
                        {step > 0 && <button className="uk-quiz-back" type="button" onClick={goBack}>← Back</button>}
                    </div>
                )}

                {!submitted && step === questions.length && (
                    <form className="uk-quiz-contact" onSubmit={handleSubmit}>
                        <h2>Where should we send your matched shortlist?</h2>
                        <input name="name" type="text" placeholder="Your name*" aria-label="Your name" required />
                        <input name="email" type="email" placeholder="Email*" aria-label="Email" required />
                        <input name="phone" type="tel" placeholder="Phone / WhatsApp (incl. country code)*" aria-label="Phone or WhatsApp" required />
                        <button className="uk-quiz-submit" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Get My Shortlist + Guide →'}
                        </button>
                        <button className="uk-quiz-back" type="button" onClick={goBack}>← Back</button>
                        {submitError && <p className="uk-quiz-error" role="alert">{submitError}</p>}
                        <small>Only used to send your shortlist and guide. No spam.</small>
                    </form>
                )}

                {submitted && (
                    <div className="uk-quiz-success">
                        <h2>Thank you — your shortlist is being prepared.</h2>
                        <p>One of our UK property advisers will contact you shortly.</p>
                    </div>
                )}

                <footer className="uk-quiz-proof">
                    <p><span>★</span> 4.7/5 from 186 Google reviews · £250M+ under advisory · Up to 15% total returns (7.8% avg net yield + capital growth) · Properties from £98,400, reserve from £5,000</p>
                    <p>As featured in Daily Mail · Rightmove · Zoopla · Manchester Evening News</p>
                </footer>
            </section>
        </main>
    );
}

export default UKQuiz;
