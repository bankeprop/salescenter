import { useEffect } from "react";
import NavBar from "../../components/Emaar/EmaarValleyNavBar";

function ThankYou() {
  useEffect(() => {
    document.title = "Thank You - The Valley";
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <NavBar />
      <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-[0.05em]">Thank You</h1>
          <p className="text-lg leading-relaxed text-slate-700">
            Your details have been received. Our team will reach out shortly.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
          >
            Return to site
          </a>
        </div>
      </main>
    </div>
  );
}

export default ThankYou;
