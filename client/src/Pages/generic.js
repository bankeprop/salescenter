import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Generic() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSubmitting) return;

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = new FormData();

        payload.set("name", formData.get("name"));
        payload.set("email", formData.get("email"));
        payload.set("phone", String(formData.get("phone")).replace(/\D/g, ""));
        payload.set("message", formData.get("message"));
        payload.set("campaignName", "Sidra1DubaiHillsEstate-HU-887830");
        payload.set("pageUrl", window.location.href);

        try {
            setIsSubmitting(true);
            setSubmitError(false);

            await fetch(
                "https://script.google.com/macros/s/AKfycbxTrPUIKN5-vZAda8_PTCJ_Fdpry7a9P-SKrYNoXGuWIeRHnmb-AptkapEqihZdJiik2g/exec",
                {
                    method: "POST",
                    body: payload,
                    mode: "no-cors",
                }
            );

            form.reset();
            navigate("/sidra-1-dubai-hills-estate/thank-you");
        } catch (error) {
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const fieldStyles =
        "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100";

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
            <section className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Book Your Private Viewing</h1>
                    <p className="mt-3 text-slate-600">
                        Fill in your details and our property specialist will contact you to arrange your exclusive viewing.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm font-medium text-slate-700" htmlFor="name">
                            Name
                        </label>
                        <input
                            className={fieldStyles}
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-slate-700" htmlFor="mobile">
                            Mobile No
                        </label>
                        <input
                            className={fieldStyles}
                            id="mobile"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-slate-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            className={fieldStyles}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-slate-700" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className={`${fieldStyles} min-h-32 resize-y`}
                            id="message"
                            name="message"
                            placeholder="How can we help?"
                            required
                        />
                    </div>

                    <button
                        className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Send Message"}
                    </button>

                    {submitError && (
                        <p className="text-center text-sm font-medium text-red-700" role="alert">
                            We could not submit your request. Please try again.
                        </p>
                    )}
                </form>
            </section>
        </main>
    );
}

export default Generic;
