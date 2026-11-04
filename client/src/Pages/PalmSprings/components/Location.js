import { connections } from "../data";
import { container, eyebrow, heading, section } from "./ui";

function Location() {
  return (
    <section id="location" className={section}>
      <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <span className={eyebrow}>Location &amp; Connections</span>
          <h2 className={heading}>Near Palm Jebel Ali. Connected to Dubai.</h2>
          <p className="mt-4 text-black/70">
            Direct access to Sheikh Zayed Road puts the airport, the Palms and
            the city's landmarks within easy reach.
          </p>
        </div>
        <ul>
          {connections.map(({ place, time }) => (
            <li key={place} className="flex items-center justify-between gap-4 border-b border-black/10 py-4">
              <span className="text-sm sm:text-base">{place}</span>
              <strong className="whitespace-nowrap text-[#1f5f6b]">{time}</strong>
            </li>
          ))}
        </ul>
      </div>
      <p className={`${container} mt-6 text-xs text-black/50`}>Drive times are approximate.</p>
    </section>
  );
}

export default Location;
