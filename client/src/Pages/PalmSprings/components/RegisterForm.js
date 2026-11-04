import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { homeTypes, webhookEndpoint, campaign } from "../data";
import { btn } from "./ui";

const initial = { name: "", email: "", phone: "", interest: homeTypes[0] };

const field =
  "w-full rounded-md border border-black/15 bg-white px-3.5 py-3 text-sm text-[#00263a] focus:outline-none focus:ring-2 focus:ring-[#00617f]";
const label = "grid gap-1.5 text-xs font-medium text-[#00263a]";
const card =
  "scroll-mt-24 rounded-md bg-white p-6 text-[#00263a] shadow-2xl sm:p-8";

function RegisterForm({ id }) {
  const navigate = useNavigate();
  const [values, setValues] = useState(initial);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (key) => (event) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    // Same payload shape as the other landing pages (Google Apps Script webhook).
    const payload = new FormData();
    payload.set("name", values.name.trim());
    payload.set("email", values.email.trim());
    payload.set("mobile", values.phone.replace(/\D/g, ""));
    payload.set("project", "-");
    payload.set("message", `Palm Springs by Nakheel
Interested in: ${values.interest}`);
    payload.set("survey_comments", "-");
    payload.set("source", "Google");
    payload.set("language", "English");
    payload.set("campaign", campaign);
    payload.set("adset", "-");
    payload.set("pageUrl", window.location.href);

    try {
      setIsSubmitting(true);
      await fetch(webhookEndpoint, { method: "POST", body: payload, mode: "no-cors" });
      navigate("/palm-springs/thanks");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id={id} onSubmit={handleSubmit} className={`${card} grid gap-4`}>
      <div>
        <h3 className="font-['Montserrat',sans-serif] font-bold uppercase tracking-wide text-2xl">
          Register your interest
        </h3>
        <p className="mt-1 text-sm text-black/60">
          Pricing, floor plans and property details, sent to you first.
        </p>
      </div>
      <label className={label}>
        Full name
        <input className={field} type="text" required autoComplete="name" value={values.name} onChange={update("name")} />
      </label>
      <label className={label}>
        Email address
        <input className={field} type="email" required autoComplete="email" value={values.email} onChange={update("email")} />
      </label>
      <label className={label}>
        Phone number
        <input className={field} type="tel" required autoComplete="tel" placeholder="+971 50 000 0000" value={values.phone} onChange={update("phone")} />
      </label>
      <label className={label}>
        What are you interested in?
        <select className={field} value={values.interest} onChange={update("interest")}>
          {homeTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={isSubmitting} className={`${btn} w-full disabled:opacity-60`}>
        {isSubmitting ? "Submitting..." : "Register Your Interest"}
      </button>
      <p className="text-[11px] text-black/50">
        By submitting, you agree to be contacted about your enquiry.
      </p>
    </form>
  );
}

export default RegisterForm;
