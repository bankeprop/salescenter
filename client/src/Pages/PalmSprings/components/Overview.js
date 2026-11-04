import { images, stats } from "../data";
import { container, eyebrow, heading, section } from "./ui";

function Overview() {
  return (
    <section id="overview" className={section}>
      <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <img
          src={images.landmark}
          alt="Palm Jebel Ali, a nearby landmark"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-md object-cover"
        />
        <div>
          <span className={eyebrow}>The Location</span>
          <h2 className={heading}>Nakheel's next community, near Palm Jebel Ali</h2>
          <p className="mt-4 text-black/70">
            Palm Springs brings a new chapter of waterfront-inspired living to
            Dubai's evolving coastline, connected to the city by Sheikh Zayed
            Road.
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="font-['Montserrat',sans-serif] font-bold uppercase tracking-wide text-2xl font-semibold text-[#00617f]">
                  {value}
                </dt>
                <dd className="text-xs text-black/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Overview;
