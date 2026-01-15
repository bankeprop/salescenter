import React, { useEffect, useMemo, useRef, useState } from "react";

const DESKTOP_VIDEO_MP4 = "https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d3_smoke-colors-bg_loop_mp4.mp4";
const DESKTOP_VIDEO_WEBM = "https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d3_smoke-colors-bg_loop_webm.webm";
const MOBILE_VIDEO_MP4 = "https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d4_smoke-bg-mobile_loop_mp4.mp4";
const MOBILE_VIDEO_WEBM = "https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d4_smoke-bg-mobile_loop_webm.webm";
const RED_BACKGROUND = "https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d1_red-background.webp";
const OHANA_LOGO = "https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138c3_Ohana-logo.svg";
const X_ICON = "https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb1387f_x-icon.svg";

const DEADLINE = "2026-01-27T11:00:00+04:00";
const HUBSPOT_ENDPOINT = "https://api.hsforms.com/submissions/v3/integration/submit/6032824/dfd93c8b-f504-4513-9e6d-3199d9ca1b5c";

const languages = [
  { code: "en", href: "/" },
  { code: "ru", href: "/ru" },
  { code: "ar", href: "/ar" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/ohanadvpt",
    label: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
        />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/ohana_dvpt",
    label: "X",
    icon: <img src={X_ICON} alt="X" className="h-5 w-5" loading="lazy" />,
  },
  {
    href: "https://www.instagram.com/ohana_development/?hl=en",
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2c-2.716 0-3.056.012-4.123.06c-1.064.049-1.791.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.772a4.9 4.9 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465c1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.772-1.153a4.9 4.9 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.772a4.9 4.9 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2m0 1.802c2.67 0 2.986.01 4.04.058c.976.045 1.505.207 1.858.344c.466.182.8.399 1.15.748c.35.35.566.684.748 1.15c.136.353.3.882.344 1.857c.048 1.055.058 1.37.058 4.041c0 2.67-.01 2.986-.058 4.04c-.045.976-.208 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.684.566-1.15.748c-.353.136-.882.3-1.857.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.987-.01-4.04-.058c-.976-.045-1.505-.208-1.858-.344a3.1 3.1 0 0 1-1.15-.748a3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857c-.048-1.055-.058-1.37-.058-4.041c0-2.67.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858c.182-.466.399-.8.748-1.15c.35-.35.684-.566 1.15-.748c.353-.137.882-.3 1.857-.344c1.055-.048 1.37-.058 4.041-.058m0 11.531a3.333 3.333 0 1 1 0-6.666a3.333 3.333 0 0 1 0 6.666m0-8.468a5.135 5.135 0 1 0 0 10.27a5.135 5.135 0 0 0 0-10.27m6.538-.203a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/ohana-developement/any/ohana-developement/",
    label: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 24 24" className="h-5 w-5">
        <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" />
        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor" />
      </svg>
    ),
  },
];

const countdownValues = (deadline) => {
  const parseDate = (value) => {
    const parsed = Date.parse(value);
    if (!Number.isNaN(parsed)) return parsed;
    return Date.parse(value.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
  };

  const total = parseDate(deadline) - Date.now();
  const clamped = total > 0 ? total : 0;
  const seconds = Math.floor((clamped / 1000) % 60);
  const minutes = Math.floor((clamped / 1000 / 60) % 60);
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));

  return { total: clamped, days, hours, minutes, seconds };
};

const formatTime = (value) => value.toString().padStart(2, "0");

function YasCanel() {
  const [langOpen, setLangOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => countdownValues(DEADLINE));
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState("");

  const formRef = useRef(null);
  const contactRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const description =
      "A new waterfront destination is taking shape on Yas Canal. Surrounded by world-class leisure, sport, and cultural landmarks, where living well becomes the ultimate expression of luxury.";
    document.title = "New Branded Residences Coming Soon in Yas, Abu Dhabi";

    const meta =
      document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.name = "description";
    meta.content = description;
    if (!meta.parentElement) {
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(countdownValues(DEADLINE));
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const onClickAway = (event) => {
      if (!langOpen) return;
      const target = event.target;
      const dropdown = document.getElementById("language-toggle");
      if (dropdown && !dropdown.contains(target)) {
        setLangOpen(false);
      }
    };
    window.addEventListener("click", onClickAway);
    return () => window.removeEventListener("click", onClickAway);
  }, [langOpen]);

  const countdownItems = useMemo(
    () => [
      { label: "Days", value: formatTime(timeLeft.days) },
      { label: "Hours", value: formatTime(timeLeft.hours) },
      { label: "Minutes", value: formatTime(timeLeft.minutes) },
      { label: "Seconds", value: formatTime(timeLeft.seconds) },
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
  );

  const scrollToDetails = (event) => {
    event?.preventDefault();
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const antiSpamPassed = () => {
    const now = Date.now();
    if (now - startTimeRef.current < 3000) {
      setStatusMessage("Please wait a moment before submitting.");
      return false;
    }

    if (typeof window !== "undefined" && window.localStorage) {
      const last = window.localStorage.getItem("yas_form_last_submit");
      if (last && now - Number(last) < 60000) {
        setStatusMessage("You can submit again in a few moments.");
        return false;
      }
      window.localStorage.setItem("yas_form_last_submit", String(now));
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formRef.current || status === "submitting") return;

    const form = formRef.current;
    const formData = new FormData(form);

    if ((formData.get("company") || "").toString().trim()) {
      setStatus("error");
      setStatusMessage("Submission blocked.");
      return;
    }

    if (!antiSpamPassed()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    const fields = [];
    formData.forEach((value, name) => {
      if (name === "company") return;
      const trimmed = String(value).trim();
      if (trimmed) {
        fields.push({ name, value: trimmed });
      }
    });

    try {
      const res = await fetch(HUBSPOT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: typeof window !== "undefined" ? window.location.href : "",
            pageName: document.title,
          },
        }),
      });

      const json = await res.json();
      if (res.ok && json.inlineMessage) {
        setStatus("success");
        setStatusMessage("");
        form.reset();
        setTimeout(() => {
          window.location.href = "https://comingsoon.ohana.ae/thank-you";
        }, 1200);
      } else {
        setStatus("error");
        setStatusMessage("Please try again in a moment.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="hidden h-full w-full object-cover md:block"
            autoPlay
            loop
            muted
            playsInline
            poster="https://cdn.prod.website-files.com/694910ea1b4f90e05529ebb8%2F69494a52078d7f4b12711c93_smoke-colors-bg_loop_poster.0000000.jpg"
          >
            <source src={DESKTOP_VIDEO_MP4} type="video/mp4" />
            <source src={DESKTOP_VIDEO_WEBM} type="video/webm" />
          </video>
          <video
            className="h-full w-full object-cover md:hidden"
            autoPlay
            loop
            muted
            playsInline
            poster="https://cdn.prod.website-files.com/694910ea1b4f90e05529ebb8%2F69495cc63ab78e97235dbacc_smoke-bg-mobile_loop_poster.0000000.jpg"
          >
            <source src={MOBILE_VIDEO_MP4} type="video/mp4" />
            <source src={MOBILE_VIDEO_WEBM} type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
        </div>

        <header className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-4 pb-14 pt-6 sm:px-6 lg:px-10">
          <div className="flex items-start justify-between">
            <div className="relative" id="language-toggle">
              <button
                type="button"
                onClick={() => setLangOpen((open) => !open)}
                className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur hover:bg-white/20"
              >
                <span>en</span>
                <span className={`transition-transform ${langOpen ? "rotate-180" : ""}`}>⌄</span>
              </button>
              {langOpen && (
                <div className="absolute left-0 top-10 min-w-[120px] rounded-md border border-white/20 bg-black/70 p-2 text-sm shadow-lg backdrop-blur">
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href={lang.href}
                      className="block rounded px-3 py-2 capitalize text-white hover:bg-white/10"
                    >
                      {lang.code}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div />
          </div>

          <div className="mt-10 flex flex-col gap-10 lg:mt-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <a href="https://www.ohana.ae/" title="Ohana Development" className="inline-block">
                <img src={OHANA_LOGO} alt="Ohana Development" className="h-16 w-auto" loading="lazy" />
              </a>

              <div className="w-full max-w-xl space-y-6 text-center md:text-right">
                <div className="text-xl font-semibold uppercase tracking-[0.2em] text-transparent bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text">
                  Branded Residences
                  <br />
                  Coming Soon
                </div>
                <div className="text-3xl font-semibold leading-tight md:text-4xl">Yas Canal, Abu Dhabi</div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex w-full flex-wrap items-center justify-center gap-4 md:justify-end">
                    {countdownItems.map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="text-4xl font-semibold tabular-nums md:text-5xl">{item.value}</div>
                        <div className="text-xs uppercase tracking-[0.2em] text-white/80">{item.label}</div>
                        {item.label !== "Seconds" && <div className="h-10 w-px bg-white/30" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl space-y-8">
              <h1 className="text-3xl leading-tight md:text-4xl lg:text-5xl">
                A new waterfront destination is taking shape on{" "}
                <span className="italic font-light text-white">Yas Canal.</span> Surrounded by world-class leisure, sport, and cultural
                landmarks, where living well becomes the <span className="italic font-light text-white">ultimate expression of luxury</span>.
              </h1>
              <button
                type="button"
                onClick={scrollToDetails}
                className="group inline-flex items-center gap-3 uppercase tracking-[0.18em] text-sm font-semibold text-white"
              >
                <span className="group-hover:underline">Discover more</span>
                <span className="h-px w-16 bg-white/50 transition-all group-hover:w-24" />
              </button>
            </div>
          </div>
        </header>
      </div>

      <section
        id="discover-more"
        ref={contactRef}
        className="relative isolate overflow-hidden bg-neutral-950"
      >
        <img
          src={RED_BACKGROUND}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold uppercase leading-tight sm:text-6xl">
                Be <span className="mr-2 italic font-light">part</span> of
                <br />
                what&apos;s <span className="ml-1 italic font-light">next</span>
              </h2>
              <p className="text-lg leading-relaxed text-white/85">
                Register to be among the first to receive exclusive updates about the{" "}
                <span className="italic font-semibold">Branded Residences</span> by{" "}
                <span className="italic font-semibold">Ohana Development</span>.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/70 p-6 shadow-2xl backdrop-blur">
              {status === "success" ? (
                <div className="flex flex-col items-start gap-3 text-sm text-white">
                  <p className="text-lg font-semibold">Thank you!</p>
                  <p>We received your request. Redirecting you to the thank-you page...</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.16em]">
                      <span>First Name*</span>
                      <input
                        type="text"
                        name="firstname"
                        autoComplete="given-name"
                        required
                        className="w-full rounded-md border border-white/20 bg-transparent px-3 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                      />
                    </label>
                    <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.16em]">
                      <span>Last Name*</span>
                      <input
                        type="text"
                        name="lastname"
                        autoComplete="family-name"
                        required
                        className="w-full rounded-md border border-white/20 bg-transparent px-3 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                      />
                    </label>
                  </div>

                  <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.16em]">
                    <span>Email*</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-md border border-white/20 bg-transparent px-3 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                    />
                  </label>

                  <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.16em]">
                    <span>Phone Number*</span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      required
                      className="w-full rounded-md border border-white/20 bg-transparent px-3 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                    />
                  </label>

                  <label className="space-y-2 text-sm font-semibold uppercase tracking-[0.16em]">
                    <span>Are you an investor/client or a broker?*</span>
                    <select
                      name="investor_or_broker"
                      required
                      className="w-full rounded-md border border-white/20 bg-transparent px-3 py-3 text-white focus:border-white focus:outline-none"
                    >
                      <option value="" className="bg-black text-white">
                        Please select:
                      </option>
                      <option value="Investor" className="bg-black text-white">
                        Investor
                      </option>
                      <option value="Broker" className="bg-black text-white">
                        Broker
                      </option>
                      <option value="Other" className="bg-black text-white">
                        Other
                      </option>
                    </select>
                  </label>

                  {/* Honeypot field to deter bots */}
                  <div className="hidden">
                    <label>
                      Company
                      <input type="text" name="company" tabIndex="-1" autoComplete="off" />
                    </label>
                  </div>

                  <div className="space-y-2 text-sm">
                    {status === "error" && statusMessage && (
                      <p className="text-rose-200">{statusMessage}</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full rounded-md bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "submitting" ? "Please wait..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Location</div>
                <p className="text-lg leading-relaxed">
                  Yas Canal
                  <br />
                  Abu Dhabi, UAE
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Contact Us</div>
                <div className="space-y-1 text-lg leading-relaxed">
                  <a href="tel:800600600" className="hover:underline">
                    800 600 600
                  </a>{" "}
                  (within the UAE)
                  <br />
                  <a href="tel:+971800600600" className="hover:underline">
                    +971 800 600 600
                  </a>{" "}
                  (from abroad)
                  <br />
                  <a
                    href="mailto:info@ohana.ae?subject=Ohana%20Development%20-%20Yas%20Canal%20%7C%20Request%20information"
                    className="hover:underline"
                  >
                    info@ohana.ae
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Follow us</div>
                <div className="flex items-center gap-4">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/90 px-4 py-8 text-center text-sm text-white/70">
        <div>All graphic and textual materials are purely illustrative and do not constitute a contractual obligation. Ohana Development (c) All Rights Reserved. 2026</div>
        <div className="mt-3">
          <a href="/privacy-cookies-policy" className="hover:underline">
            Privacy &amp; Cookies Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default YasCanel;
