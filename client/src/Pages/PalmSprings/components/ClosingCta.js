import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../data";
import { btn, container, heading, section } from "./ui";

function ClosingCta() {
  return (
    <section className={`${section} bg-[#00263a] text-center text-white`}>
      <div className={container}>
        <h2 className={`${heading} mx-auto max-w-3xl`}>
          Make your next move. Register for the details.
        </h2>
        <p className="mt-4 text-white/85">Expected prices from AED 3.8M*</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#register" className={btn}>Register Your Interest</a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn} !bg-transparent border border-white hover:!bg-white hover:!text-[#00263a]`}
          >
            <FaWhatsapp aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClosingCta;
