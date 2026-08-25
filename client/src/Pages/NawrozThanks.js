import React from "react";
import { Link } from "react-router-dom";
import "./nawroz.css";

import backgroundImage from "../Assests/Nawroz/BG.png";
import bniLogo from "../Assests/Nawroz/Logo.png";

function NawrozThanks() {
  return (
    <main className="nawroz-page nz-thanks">
      <img
        className="nz-thanks__background"
        src={backgroundImage}
        alt=""
        aria-hidden="true"
      />
      <div className="nz-thanks__overlay" aria-hidden="true" />

      <section className="nz-thanks__card" aria-labelledby="nawroz-thanks-title">
        <header className="nz-brand nz-thanks__brand" aria-label="BNI Feature Presentation">
          <img className="nz-brand__logo" src={bniLogo} alt="BNI" />
          <span className="nz-brand__rule" aria-hidden="true" />
          <span className="nz-brand__label">
            Feature
            <br />
            Presentation
          </span>
        </header>

        <span className="nz-thanks__check" aria-hidden="true">
          ✓
        </span>
        <p className="nz-thanks__eyebrow">Registration Confirmed</p>
        <h1 id="nawroz-thanks-title">Thank You</h1>
        <p className="nz-thanks__message">
          Your registration has been received. Attendance is strictly by confirmed RSVP. Please note that access to the event will be granted only to guests who have received an RSVP confirmation.
        </p>

        <div className="nz-thanks__event">
          <strong>22 September 2026</strong>
          <span>7:00 AM – 8:30 AM</span>
          <span>JW Marriott Hotel, Marina, Dubai</span>
        </div>

        <Link className="nz-thanks__button" to="/nawroz-mamdani">
          Back to Event
        </Link>
      </section>
    </main>
  );
}

export default NawrozThanks;
