import { useState } from "react";
import { homeTypes } from "../data";
import { btn } from "./ui";

const initial = { name: "", email: "", phone: "", interest: homeTypes[0] };

const field =
  "w-full rounded-lg border border-black/15 bg-white px-3.5 py-3 text-sm text-[#14212b] focus:outline-none focus:ring-2 focus:ring-[#b8935a]";
const label = "grid gap-1.5 text-xs font-medium text-[#14212b]";
const card =
  "scroll-mt-24 rounded-2xl bg-white p-6 text-[#14212b] shadow-2xl sm:p-8";

// Dummy form: no network request yet, only local validation and a success state.
function RegisterForm({ id }) {
  const [values, setValues] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (event) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setValues(initial);
  };

  if (submitted) {
    return (
      <div id={id} role="status" className={`${card} py-12 text-center`}>
        <h3 className="font-['Playfair_Display',Georgia,serif] text-2xl">
          Thank you for your interest.
        </h3>
        <p className="mt-2 text-sm text-black/70">
          A Palm Springs specialist will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className={`${card} grid gap-4`}>
      <div>
        <h3 className="font-['Playfair_Display',Georgia,serif] text-2xl">
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
      <button type="submit" className={`${btn} w-full`}>
        Register Your Interest
      </button>
      <p className="text-[11px] text-black/50">
        By submitting, you agree to be contacted about your enquiry.
      </p>
    </form>
  );
}

export default RegisterForm;
