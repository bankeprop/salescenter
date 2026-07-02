import React from "react";
import { Link } from "react-router-dom";

function GenericThankYou() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
            <section className="w-full max-w-xl rounded-2xl bg-white p-6 text-center shadow-xl shadow-slate-200/70 sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">
                    ✓
                </div>
                <h1 className="mt-6 text-3xl font-bold text-slate-900">Thank You</h1>
                <p className="mt-3 text-slate-600">
                    Your private viewing request has been submitted. Our property specialist will contact you shortly.
                </p>
                <Link
                    className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    to="/generic"
                >
                    Back to Form
                </Link>
            </section>
        </main>
    );
}

export default GenericThankYou;
