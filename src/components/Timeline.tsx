import { itinerary } from "../data/trip";

export function Timeline() {
  return (
    <ul className="space-y-6">
      {itinerary.map((day) => (
        <li
          key={day.date}
          className="group relative rounded-lg border border-olive-200/70 bg-white/50 p-6 shadow-sm transition hover:border-olive-300 hover:shadow-md md:flex md:gap-10"
        >
          <div className="shrink-0 md:w-44">
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-terracotta-600">
              {day.date}
            </span>
            <h3 className="font-display mt-1 text-xl font-semibold text-olive-900">
              {day.title}
            </h3>
            <p className="mt-1 text-sm text-olive-700">{day.location}</p>
          </div>
          <ul className="mt-4 space-y-2 border-t border-olive-100 pt-4 text-sm leading-relaxed text-ink/85 md:mt-0 md:flex-1 md:border-t-0 md:border-l md:border-olive-100 md:pt-0 md:pl-8">
            {day.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-terracotta-500" aria-hidden>
                  ·
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
