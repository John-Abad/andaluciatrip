import { siteTitle } from "../data/trip";

const links = [
  { href: "#intro", label: "Introducción" },
  { href: "#mercado", label: "Mercado" },
  { href: "#landscapes", label: "Paisajes" },
  { href: "#itinerary", label: "Itinerario" },
  { href: "#journal", label: "Diario" },
  { href: "#rincon", label: "Mi rincón" },
  { href: "#activities", label: "Actividades" },
  { href: "#interview", label: "Entrevista" },
  { href: "#reflections", label: "Reflexiones" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-olive-200/60 bg-parchment/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
        <a
          href="#"
          className="max-w-[min(100%,22rem)] font-display text-base font-semibold leading-snug tracking-tight text-olive-800 sm:max-w-none md:text-lg"
          title={siteTitle}
        >
          <span className="text-olive-900">Somos de barra de bar:</span>{" "}
          <span className="text-terracotta-700">Viaje a Andalucía</span>
        </a>
        <nav className="flex flex-wrap justify-end gap-x-4 gap-y-1 text-sm font-medium text-olive-700">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-terracotta-700"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
