import { residences } from "../data";
import { container, eyebrow, heading, section } from "./ui";

function Residences() {
  return (
    <section id="residences" className={`${section} bg-[#f3f1ef]`}>
      <div className={container}>
        <span className={eyebrow}>The Residences</span>
        <h2 className={`${heading} max-w-3xl`}>
          An exclusive collection. A home for your next chapter.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
          {residences.map(({ title, beds, text, image }) => (
            <article key={title} className="overflow-hidden rounded-md bg-white shadow-lg">
              <img src={image} alt={title} loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <div className="p-6 sm:p-8">
                <span className="text-xs uppercase tracking-[0.12em] text-[#00617f]">{beds}</span>
                <h3 className="mb-3 mt-1 font-['Montserrat',sans-serif] font-bold uppercase tracking-wide text-2xl sm:text-3xl">
                  {title}
                </h3>
                <p className="text-sm text-black/70 sm:text-base">{text}</p>
                <a href="#register" className="mt-4 inline-block text-sm font-medium text-[#00617f] hover:underline">
                  Register for details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Residences;
