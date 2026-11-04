import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data";
import { container, eyebrow, heading, section } from "./ui";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className={`${section} bg-[#f3f1ef]`}>
      <div className={`${container} max-w-3xl`}>
        <span className={eyebrow}>FAQs</span>
        <h2 className={`${heading} mb-8`}>Frequently asked questions</h2>
        {faqs.map(({ q, a }, index) => {
          const open = openIndex === index;
          return (
            <div key={q} className="border-b border-black/10">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium"
              >
                {q}
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>
              {open && <p className="pb-5 text-sm text-black/70 sm:text-base">{a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
