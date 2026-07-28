import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./kingsRoad.css";

const WEBHOOK_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbz5yIUe6VVdmTIq48VhHi778Zr5xLTPsVE-zc6E1ulLtTz6CD4i0V4FeAYJv2J0ZYYp1A/exec";

const IMG = {
    heroExterior: require("../../Assests/Berkeley/heroExterior.jpg"),
};

const TOTAL_STEPS = 3;
const STEP_LABELS = ["UK Visa History", "Investment Plan", "Your Details"];
const BUDGET_OPTIONS = ["Under £1M", "£1M – £2M", "£2M – £3M", "£3M – £5M", "£5M+"];

/* ---------- Header ---------- */

function FormHeader() {
    return (
        <section className="relative min-h-[64vh] min-h-[64svh] overflow-hidden bg-charcoal lg:min-h-[70vh]">
            <div className="absolute inset-0">
                <img
                    src={IMG.heroExterior}
                    alt="Aerial view of One King's Road Park, Fulham"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/85 md:from-black/60 md:via-black/30 md:to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent md:from-black/25" />
            </div>

            <div className="relative z-10 flex min-h-[64vh] min-h-[64svh] flex-col justify-end pb-24 pt-24 md:pb-16 lg:min-h-[70vh]">
                <div className="container-editorial text-warm">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="eyebrow hero-eyebrow text-bronze-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                    >
                        One King's Road Park · Fulham
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="mt-6 font-serif text-5xl leading-[1.05] drop-shadow-[0_2px_5px_rgba(0,0,0,0.85)] md:text-6xl"
                    >
                        Plan your <em className="not-italic text-bronze-light">UK purchase.</em>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.8 }}
                        className="mt-6 max-w-xl text-lg font-normal leading-relaxed text-warm/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] md:text-xl md:font-light md:text-warm/80"
                    >
                        Register for a private consultation and receive tailored purchase,
                        payment and visa guidance.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

/* ---------- Field helpers ---------- */

function ToggleGroup({ value, onChange, options = ["Yes", "No"], error }) {
    return (
        <div>
            <div className="flex flex-wrap gap-3">
                {options.map((o) => {
                    const active = value === o;
                    return (
                        <button
                            key={o}
                            type="button"
                            onClick={() => onChange(o)}
                            className={`min-w-20 bg-transparent px-5 py-2.5 text-sm font-medium tracking-[0.08em] border transition-colors ${active
                                ? "border-bronze text-bronze"
                                : "border-ink/25 text-ink/65 hover:border-ink/60 hover:text-ink"
                                }`}
                            aria-pressed={active}
                        >
                            {o}
                        </button>
                    );
                })}
            </div>
            {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
        </div>
    );
}

function Field({ label, error, className = "", ...props }) {
    return (
        <div className={className}>
            <label className="block text-xs font-semibold tracking-[0.14em] uppercase text-ink/85 mb-2">{label}</label>
            <input
                {...props}
                className={`w-full bg-transparent border-b py-2 outline-none text-ink transition-colors ${error ? "border-destructive" : "border-ink/20 focus:border-bronze"
                    }`}
            />
            {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
        </div>
    );
}

function Select({ label, options, error, className = "", ...props }) {
    return (
        <div className={className}>
            <label className="block text-xs font-semibold tracking-[0.14em] uppercase text-ink/85 mb-2">{label}</label>
            <select
                {...props}
                className={`w-full bg-transparent border-b py-2 outline-none text-ink transition-colors ${error ? "border-destructive" : "border-ink/20 focus:border-bronze"
                    }`}
            >
                <option value="" disabled>
                    Select...
                </option>
                {options.map((o) => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>
            {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
        </div>
    );
}

/* ---------- Multi-step form ---------- */

function StepForm() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [data, setData] = useState({
        visitedUK: "",
        multiVisa: "",
        multiVisaYears: "",
        lookingMortgage: "",
        downPayment: "",
        investmentBudget: "",
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const update = (field) => (value) => setData((d) => ({ ...d, [field]: value }));
    const updateInput = (field) => (ev) => setData((d) => ({ ...d, [field]: ev.target.value }));

    const validateStep = (s) => {
        const e = {};
        if (s === 1) {
            if (!data.visitedUK) e.visitedUK = "Please select an option";
            if (!data.multiVisa) e.multiVisa = "Please select an option";
            if (data.multiVisa === "Yes" && !String(data.multiVisaYears).trim()) {
                e.multiVisaYears = "Please enter number of years";
            }
        }
        if (s === 2) {
            if (!data.lookingMortgage) e.lookingMortgage = "Please select an option";
            if (data.lookingMortgage === "Yes" && !String(data.downPayment).trim()) {
                e.downPayment = "Please enter an amount";
            }
            if (data.lookingMortgage === "No" && !data.investmentBudget) {
                e.investmentBudget = "Please select a budget";
            }
        }
        if (s === 3) {
            if (!data.fullName.trim()) e.fullName = "Required";
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = "Enter a valid email";
            if (!data.phone.trim()) e.phone = "Required";
        }
        return e;
    };

    const goNext = () => {
        const e = validateStep(step);
        setErrors(e);
        if (Object.keys(e).length > 0) return;
        setStep((s) => Math.min(TOTAL_STEPS, s + 1));
    };

    const goBack = () => {
        setErrors({});
        setStep((s) => Math.max(1, s - 1));
    };

    const submitLead = async () => {
        const e = validateStep(3);
        setErrors(e);
        if (Object.keys(e).length > 0 || isSubmitting) return;

        const additionalDetails = [
            data.message.trim() && `Customer Message: ${data.message.trim()}`,
            `Visited UK Before: ${data.visitedUK || "Not answered"}`,
            `Multiple-entry UK Visa: ${data.multiVisa || "Not answered"}`,
            data.multiVisa === "Yes" &&
            `Visa Validity: ${data.multiVisaYears || "Not answered"} years`,
            `Looking for a Mortgage: ${data.lookingMortgage || "Not answered"}`,
            data.lookingMortgage === "Yes" &&
            `Down Payment: ${data.downPayment || "Not answered"}`,
            data.lookingMortgage === "No" &&
            `Investment Budget: ${data.investmentBudget || "Not answered"}`,
            `Page URL: ${window.location.href}`,
        ].filter(Boolean);

        const payload = {
            name: data.fullName.trim(),
            email: data.email.trim(),
            mobile: data.phone.trim(),
            project: "One King's Road Park",
            message: additionalDetails.join("\n"),
            survey_comments: "-",
            source: "sales-center.ae",
            language: "English",
            campaign: "BerkeleyKingsRoadPark-GGL",
            adset: "",
            agentId: "",
        };

        try {
            setIsSubmitting(true);
            setSubmitError("");
            await fetch(WEBHOOK_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(payload),
                mode: "no-cors",
            });
            navigate("/berkeley/kings-road/form/thanks");
        } catch (error) {
            setSubmitError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (step < TOTAL_STEPS) {
            goNext();
        } else {
            submitLead();
        }
    };

    return (
        <section className="relative z-20 -mt-16 bg-transparent pb-20 pt-0 md:mt-0 md:bg-warm md:py-28">
            <div className="container-editorial max-w-3xl">
                <div className="bg-warm border border-border p-6 sm:p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="eyebrow">One King's Road Park</p>
                        <p className="text-sm font-semibold text-ink/80">
                            Step {step} of {TOTAL_STEPS} <span className="text-ink/40">·</span> {STEP_LABELS[step - 1]}
                        </p>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-1">
                        {[1, 2, 3].map((n) => (
                            <span key={n} className={`h-1 ${n <= step ? "bg-bronze" : "bg-border"}`} />
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="mt-10" noValidate>
                        <div key={step}>
                            {step === 1 && (
                                <div className="space-y-8">
                                    <div>
                                        <label className="mb-4 block font-serif text-2xl font-semibold leading-tight text-ink md:text-3xl">
                                            Have you visited the UK before?
                                        </label>
                                        <ToggleGroup
                                            value={data.visitedUK}
                                            onChange={update("visitedUK")}
                                            error={errors.visitedUK}
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-4 block font-serif text-2xl font-semibold leading-tight text-ink md:text-3xl">
                                            Do you have a multiple-entry UK visa?
                                        </label>
                                        <ToggleGroup
                                            value={data.multiVisa}
                                            onChange={update("multiVisa")}
                                            error={errors.multiVisa}
                                        />
                                    </div>
                                    {data.multiVisa === "Yes" && (
                                        <Field
                                            label="How many years is your multiple-entry visa valid for?"
                                            type="number"
                                            min="0"
                                            value={data.multiVisaYears}
                                            onChange={updateInput("multiVisaYears")}
                                            error={errors.multiVisaYears}
                                            className="max-w-xs"
                                        />
                                    )}
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-8">
                                    <div>
                                        <label className="mb-4 block font-serif text-2xl font-semibold leading-tight text-ink md:text-3xl">
                                            Are you looking for a mortgage?
                                        </label>
                                        <ToggleGroup
                                            value={data.lookingMortgage}
                                            onChange={update("lookingMortgage")}
                                            error={errors.lookingMortgage}
                                        />
                                    </div>
                                    {data.lookingMortgage === "Yes" && (
                                        <Field
                                            label="How much can you pay as a down payment?"
                                            type="text"
                                            placeholder="e.g. £250,000"
                                            value={data.downPayment}
                                            onChange={updateInput("downPayment")}
                                            error={errors.downPayment}
                                        />
                                    )}
                                    {data.lookingMortgage === "No" && (
                                        <Select
                                            label="What is your investment budget?"
                                            options={BUDGET_OPTIONS}
                                            value={data.investmentBudget}
                                            onChange={updateInput("investmentBudget")}
                                            error={errors.investmentBudget}
                                        />
                                    )}
                                </div>
                            )}

                            {step === 3 && (
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Field
                                        label="Full Name"
                                        value={data.fullName}
                                        onChange={updateInput("fullName")}
                                        error={errors.fullName}
                                        className="sm:col-span-2"
                                    />
                                    <Field
                                        label="Email Address"
                                        type="email"
                                        value={data.email}
                                        onChange={updateInput("email")}
                                        error={errors.email}
                                        className="sm:col-span-2"
                                    />
                                    <Field
                                        label="Contact Number"
                                        type="tel"
                                        value={data.phone}
                                        onChange={updateInput("phone")}
                                        error={errors.phone}
                                        className="sm:col-span-2"
                                    />
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-semibold tracking-[0.14em] uppercase text-ink/85 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            maxLength={1000}
                                            value={data.message}
                                            onChange={updateInput("message")}
                                            className="w-full bg-transparent border-b border-ink/20 focus:border-bronze outline-none py-2 text-ink resize-none transition-colors"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-10 flex items-center justify-between gap-4">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={goBack}
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold tracking-[0.24em] uppercase border border-ink/30 text-ink/80 transition-colors hover:border-bronze hover:text-ink"
                                >
                                    Back
                                </button>
                            ) : (
                                <span />
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-bronze btn-bronze-hover disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {step < TOTAL_STEPS ? "Continue" : isSubmitting ? "Sending..." : "Get an Offer"}
                            </button>
                        </div>
                        {submitError && <p className="mt-4 text-sm text-destructive">{submitError}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}

/* ---------- Page ---------- */

function KingsroadForm() {
    return (
        <main className="kings-road-page">
            <FormHeader />
            <StepForm />
        </main>
    );
}

export default KingsroadForm;
