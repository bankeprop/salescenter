import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nawroz.css";

import backgroundImage from "../Assests/Nawroz/BG.png";
import expectationsBackground from "../Assests/Nawroz/BG2.jpg";
import breakfastBackground from "../Assests/Nawroz/BG3.jpg";
import dateIcon from "../Assests/Nawroz/Date.svg";
import expectationIconOne from "../Assests/Nawroz/icon1.svg";
import expectationIconTwo from "../Assests/Nawroz/icon2.svg";
import expectationIconThree from "../Assests/Nawroz/icon3.svg";
import locationIcon from "../Assests/Nawroz/Location.svg";
import bniLogo from "../Assests/Nawroz/Logo.png";
import nawrozPortrait from "../Assests/Nawroz/Nawroz.png";
import timeIcon from "../Assests/Nawroz/Time.svg";

const WEBHOOK_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbz5yIUe6VVdmTIq48VhHi778Zr5xLTPsVE-zc6E1ulLtTz6CD4i0V4FeAYJv2J0ZYYp1A/exec";

const eventDetails = [
  {
    icon: dateIcon,
    iconClassName: "nz-event-card__icon--date",
    label: "Event date",
    content: <time dateTime="2026-09-22">22 SEP, 2026</time>,
  },
  {
    icon: locationIcon,
    iconClassName: "nz-event-card__icon--location",
    label: "Event location",
    content: (
      <address>
        JW Marriott Hotel,
        <br />
        Marina, Dubai
      </address>
    ),
  },
  {
    icon: timeIcon,
    iconClassName: "nz-event-card__icon--time",
    label: "Event time",
    content: (
      <>
        <time dateTime="07:00">7:00 AM</time> -{" "}
        <time dateTime="08:30">8:30 AM</time>
        <small>(Followed by Breakfast)</small>
      </>
    ),
  },
];

const registrationFields = [
  { id: "nawroz-name", name: "name", type: "text", label: "Name", autoComplete: "name" },
  { id: "nawroz-mobile", name: "mobile", type: "tel", label: "Mobile", autoComplete: "tel" },
  { id: "nawroz-email", name: "email", type: "email", label: "Email", autoComplete: "email" },
  { id: "nawroz-designation", name: "designation", type: "text", label: "Designation", autoComplete: "organization-title" },
  { id: "nawroz-profession", name: "profession", type: "text", label: "Profession", autoComplete: "off" },
];

const expectations = [
  {
    icon: expectationIconOne,
    title: "Data-Backed Insights",
    description: (
      <>
        on Dubai office market
        <br />
        Performance in H1 2026
      </>
    ),
  },
  {
    icon: expectationIconTwo,
    title: "AED 6B Masterplan",
    description: (
      <>
        reshaping Dubai&apos;s
        <br />
        commercial centre of gravity
      </>
    ),
  },
  {
    icon: expectationIconThree,
    title: "Network with",
    description: (
      <>
        entrepreneurs and
        <br />
        business leaders
      </>
    ),
  },
];

function Nawroz() {
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState("idle");

  const scrollToRegistration = (event) => {
    event.preventDefault();
    const registrationSection = document.getElementById("registration");
    if (!registrationSection) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    registrationSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();
    if (registrationStatus === "submitting") return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const designation = String(form.get("designation") || "").trim();
    const profession = String(form.get("profession") || "").trim();
    const payload = new FormData();

    payload.set("name", String(form.get("name") || "").trim());
    payload.set("email", String(form.get("email") || "").trim());
    payload.set("mobile", String(form.get("mobile") || "").replace(/\D/g, ""));
    payload.set("project", "-");
    payload.set(
      "message",
      [
        `Designation: ${designation || "Not provided"}`,
        `Profession: ${profession || "Not provided"}`,
      ].join("\n"),
    );
    payload.set("survey_comments", "-");
    payload.set("source", "Google");
    payload.set("language", "English");
    payload.set("campaign", "NawrozMamdani-AS-EVNT-589729");
    payload.set("adset", "-");
    payload.set("pageUrl", window.location.href);

    try {
      setRegistrationStatus("submitting");
      await fetch(WEBHOOK_ENDPOINT, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });
      formElement.reset();
      setRegistrationStatus("success");
      navigate("/nawroz-mamdani/thanks", { replace: true });
    } catch (error) {
      setRegistrationStatus("error");
    }
  };

  return (
    <main className="nawroz-page">
      <section className="nz-hero" aria-labelledby="nawroz-event-title">
        <img
          className="nz-hero__background"
          src={backgroundImage}
          alt=""
          aria-hidden="true"
        />
        <div className="nz-hero__overlay" aria-hidden="true" />

        <div className="nz-hero__container">
          <header className="nz-brand" aria-label="BNI Feature Presentation">
            <img className="nz-brand__logo" src={bniLogo} alt="BNI" />
            <span className="nz-brand__rule" aria-hidden="true" />
            <span className="nz-brand__label">
              Feature
              <br />
              Presentation
            </span>
          </header>

          <div className="nz-hero__layout">
            <div className="nz-hero__left">
              <div className="nz-hero__copy">
                <p className="nz-hero__eyebrow">You&apos;re Invited</p>
                <h1 id="nawroz-event-title" className="nz-hero__title">
                  <span>Dubai Commercial</span>
                  <span>Real Estate</span>
                </h1>
                <p className="nz-hero__subtitle">
                  What the data is really saying
                </p>
                <p className="nz-hero__description">
                  Join me for an exclusive BNI Feature Presentation where I&apos;ll
                  reveal what the latest data tells us about Dubai&apos;s Commercial
                  property market - and what&apos;s driving its next phase of growth.
                </p>
                <a
                  className="nz-register-button"
                  href="#registration"
                  onClick={scrollToRegistration}
                >
                  Register Now
                </a>
              </div>

              <ul className="nz-event-details" aria-label="Event details">
                {eventDetails.map((detail) => (
                  <li className="nz-event-card" key={detail.label}>
                    <span className="sr-only">{detail.label}: </span>
                    <span className="nz-event-card__icon-wrap" aria-hidden="true">
                      <img
                        className={`nz-event-card__icon ${detail.iconClassName}`}
                        src={detail.icon}
                        alt=""
                      />
                    </span>
                    <span className="nz-event-card__content">
                      {detail.content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="nz-speaker" aria-label="Featured speaker">
              <div className="nz-speaker__portrait-wrap">
                <img
                  className="nz-speaker__portrait"
                  src={nawrozPortrait}
                  alt="Nawroz Mamdani"
                />
              </div>
              <div className="nz-speaker__caption">
                <h2>Nawroz Mamdani</h2>
                <p>
                  Associate Director - Commercial
                  <br />
                  Banke International Properties
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="registration"
        className="nz-registration"
        aria-labelledby="registration-title"
      >
        <div className="nz-registration__panel">
          <h2 id="registration-title">Register to Attend</h2>
          <form
            className="nz-registration__form"
            onSubmit={handleRegistrationSubmit}
          >
            {registrationFields.map((field) => (
              <label className="nz-registration__field" key={field.id}>
                <span className="sr-only">{field.label}</span>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  placeholder={field.label}
                  autoComplete={field.autoComplete}
                  inputMode={field.type === "tel" ? "tel" : undefined}
                  required
                />
              </label>
            ))}

            <div className="nz-registration__submit">
              <button
                type="submit"
                disabled={registrationStatus === "submitting"}
                aria-describedby="registration-seats-note"
              >
                {registrationStatus === "submitting" ? "Submitting..." : "Register Now"}
              </button>
              <p
                id="registration-seats-note"
                className={`nz-registration__status nz-registration__status--${registrationStatus}`}
                role="status"
                aria-live="polite"
              >
                {registrationStatus === "success"
                  ? "Registration received"
                  : registrationStatus === "error"
                    ? "Please try again"
                    : "Seats are limited"}
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="nz-expectations" aria-labelledby="expectations-title">
        <img
          className="nz-expectations__background"
          src={expectationsBackground}
          alt=""
          aria-hidden="true"
        />
        <div className="nz-expectations__overlay" aria-hidden="true" />

        <div className="nz-expectations__container">
          <h2 id="expectations-title">What to Expect</h2>
          <ul className="nz-expectations__grid">
            {expectations.map((item) => (
              <li className="nz-expectation-card" key={item.title}>
                <img src={item.icon} alt="" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nz-breakfast" aria-labelledby="breakfast-title">
        <img
          className="nz-breakfast__background"
          src={breakfastBackground}
          alt="Two business professionals meeting over breakfast"
        />
        <div className="nz-breakfast__fade" aria-hidden="true" />

        <div className="nz-breakfast__container">
          <div className="nz-breakfast__intro">
            <h2 id="breakfast-title">Insight over Breakfast</h2>
            <p>
              A focused morning of market intelligence,
              <br className="nz-breakfast__desktop-break" /> commercial real estate
              insights and meaningful business
              <br className="nz-breakfast__desktop-break" /> conversations - with
              breakfast included.
            </p>
          </div>

          <div className="nz-breakfast__cta">
            <h2>Cut Through the Nose. Follow the Data.</h2>
            <p>
              If you want to understand where Dubai&apos;s Commercial property market is
              <br className="nz-breakfast__desktop-break" /> really heading this
              session is for you.
            </p>
            <a
              className="nz-breakfast__button"
              href="#registration"
              onClick={scrollToRegistration}
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Nawroz;
