import { developerStats, images } from "../data";
import { container, heading, section } from "./ui";

function Developer() {
  return (
    <section id="developer" className={`${section} bg-[#00263a] text-white`}>
      <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <img src={images.nakheel} alt="Nakheel" loading="lazy" className="mb-6 h-10 w-auto" />
          <h2 className={heading}>The makers of the Palms</h2>
          <p className="mt-4 text-white/75">
            Nakheel, a Dubai Holding company, shapes Dubai through master
            communities spanning residential, retail, hospitality and leisure,
            including Palm Jumeirah.
          </p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
          {developerStats.map(({ value, label }) => (
            <div key={value} className="border-l-2 border-[#6ad1e3] pl-4">
              <dt className="font-['Montserrat',sans-serif] font-bold uppercase tracking-wide text-2xl text-[#6ad1e3]">{value}</dt>
              <dd className="text-sm text-white/70">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Developer;
