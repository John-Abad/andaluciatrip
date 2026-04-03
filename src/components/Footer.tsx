import { hotels, mercadoPlace } from "../data/trip";

export function Footer() {
  return (
    <footer className="border-t border-olive-200 bg-olive-900 text-parchment/90">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-display text-xl font-semibold text-parchment">
              Datos útiles
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li>
                <span className="text-parchment/60">Mercado (portafolio): </span>
                <a
                  href={mercadoPlace.url}
                  className="underline decoration-parchment/30 underline-offset-2 hover:decoration-parchment"
                  target="_blank"
                  rel="noreferrer"
                >
                  {mercadoPlace.name}
                </a>
                <span className="text-parchment/70"> · {mercadoPlace.address}</span>
              </li>
              {hotels.map((h) => (
                <li key={h.name}>
                  <span className="text-parchment/60">{h.place}: </span>
                  <a
                    href={h.url}
                    className="underline decoration-parchment/30 underline-offset-2 hover:decoration-parchment"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {h.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-parchment">
              Agradecimiento
            </p>
            <p className="mt-4 text-sm leading-relaxed text-parchment/85">
              Gracias a la profesora <strong className="font-semibold text-parchment">Lori Catanzaro</strong> por
              el curso, la organización del viaje y por guiarnos con tanta dedicación por
              Andalucía, el mercado y todo lo que aprendimos fuera del aula. Este
              portafolio y este recorrido llevan su huella.
            </p>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-parchment/45">
          SPAN 3535 · Primavera 2026 · Cuaderno personal de viaje
        </p>
      </div>
    </footer>
  );
}
