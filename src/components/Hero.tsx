import { tripSubtitle, tripTitle } from "../data/trip";
import { publicUrl } from "../lib/publicUrl";

/**
 * Portada principal: `Galeria/IMG_0276.HEIC` → `public/photos/hero-cover.jpg`.
 * Si más adelante quieres usar también IMG_0277, conviértela a JPEG (p. ej.
 * `hero-cover-alt.jpg`) y sustituye `heroCover` o añade un segundo bloque visual.
 */
const heroCover = "photos/hero-cover.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden border-b border-olive-200/50">
      <img
        src={publicUrl(heroCover)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-olive-900/85 to-olive-900/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.12) 0%, transparent 42%), radial-gradient(circle at 80% 60%, rgba(243,239,230,0.1) 0%, transparent 45%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:pb-24 md:pt-32">
        <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.25em] text-parchment/80">
          Cuaderno de viaje
        </p>
        <h1 className="font-display text-balance text-3xl font-semibold leading-[1.12] text-parchment drop-shadow-sm sm:text-4xl md:text-5xl md:leading-[1.08] lg:text-6xl">
          {tripTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/95 md:text-xl">
          {tripSubtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#itinerary"
            className="inline-flex items-center rounded-full bg-parchment px-6 py-2.5 font-body text-sm font-semibold text-olive-900 shadow-md transition hover:bg-white"
          >
            Seguir la ruta
          </a>
          <a
            href="#mercado"
            className="inline-flex items-center rounded-full border border-parchment/50 bg-parchment/10 px-6 py-2.5 font-body text-sm font-semibold text-parchment backdrop-blur-sm transition hover:bg-parchment/20"
          >
            Mercado de Maravillas
          </a>
        </div>
      </div>
    </section>
  );
}
