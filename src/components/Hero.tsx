import { tripSubtitle, tripTitle } from "../data/trip";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-olive-200/50">
      <div className="absolute inset-0 bg-gradient-to-br from-olive-800/90 via-olive-700/80 to-terracotta-900/85" />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(243,239,230,0.12) 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
        <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.25em] text-parchment/70">
          Cuaderno de viaje
        </p>
        <h1 className="font-display text-balance text-3xl font-semibold leading-[1.12] text-parchment sm:text-4xl md:text-5xl md:leading-[1.08] lg:text-6xl">
          {tripTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/90 md:text-xl">
          {tripSubtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#itinerary"
            className="inline-flex items-center rounded-full bg-parchment px-6 py-2.5 font-body text-sm font-semibold text-olive-900 shadow-sm transition hover:bg-white"
          >
            Seguir la ruta
          </a>
          <a
            href="#mercado"
            className="inline-flex items-center rounded-full border border-parchment/40 px-6 py-2.5 font-body text-sm font-semibold text-parchment transition hover:bg-parchment/10"
          >
            Mercado de Maravillas
          </a>
        </div>
      </div>
    </section>
  );
}
