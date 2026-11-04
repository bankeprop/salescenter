import { Link } from "react-router-dom";
import { images } from "./data";
import { btn, container } from "./components/ui";

function PalmSpringsThanks() {
  return (
    <main className="flex min-h-screen flex-col bg-[#00263a] font-['Montserrat',sans-serif] text-white">
      <div className={`${container} py-6`}>
        <img src={images.nakheel} alt="Nakheel" className="h-5 w-auto" />
      </div>
      <section className={`${container} flex flex-1 flex-col items-center justify-center py-16 text-center`}>
        <span className="mb-4 text-xs uppercase tracking-[0.3em] text-[#6ad1e3]">Palm Springs</span>
        <h1 className="text-3xl font-bold uppercase tracking-wide sm:text-5xl">Thank you for your interest</h1>
        <p className="mt-5 max-w-xl text-white/80">
          Your details have been received. A Palm Springs specialist will be in touch shortly.
        </p>
        <Link to="/palm-springs" className={`${btn} mt-8 !bg-transparent border border-white hover:!bg-white hover:!text-[#00263a]`}>
          Back to Palm Springs
        </Link>
      </section>
    </main>
  );
}

export default PalmSpringsThanks;
