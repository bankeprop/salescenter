import { images } from "../data";
import RegisterForm from "./RegisterForm";
import { container } from "./ui";

function Hero() {
  return (
    <section
      id="top"
      className="relative bg-cover bg-center py-12 text-white sm:py-20 lg:py-28"
      style={{ backgroundImage: `url(${images.hero})` }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0a141c]/85 to-[#0a141c]/60 lg:bg-gradient-to-r lg:from-[#0a141c]/85 lg:to-[#0a141c]/30"
        aria-hidden="true"
      />
      <div className={`${container} relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14`}>
        <div>
          <span className="inline-block rounded-full border border-[#b8935a] px-4 py-1 text-xs uppercase tracking-[0.12em] text-[#b8935a]">
            Coming Soon · By Nakheel
          </span>
          <h1 className="mt-5 font-['Playfair_Display',Georgia,serif] text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Villas &amp; townhouses near Palm Jebel Ali
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Connect with our property specialists about the upcoming Palm Springs
            launch, with direct access to Sheikh Zayed Road.
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:text-base">
            {[
              "Expected prices from AED 3.8M*",
              "3 & 4-bedroom townhouses · 4 & 5-bedroom villas",
              "Close to Al Maktoum International Airport",
            ].map((point) => (
              <li key={point} className="flex gap-3">
                <span className="text-[#b8935a]" aria-hidden="true">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <RegisterForm id="register" />
      </div>
    </section>
  );
}

export default Hero;
