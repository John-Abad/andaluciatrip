export function Interview() {
  return (
    <div className="rounded-lg border border-olive-200 bg-gradient-to-br from-white to-olive-50/50 p-8 shadow-sm md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
        <div className="shrink-0">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-olive-300 bg-olive-100/50 font-display text-sm text-olive-600">
            Foto
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-terracotta-600">
            Mercado de Maravillas
          </p>
          <h3 className="font-display mt-1 text-2xl font-semibold text-olive-900">
            Voz del mercado
          </h3>
          <p className="mt-4 text-sm italic leading-relaxed text-ink/75">
            Añade aquí una cita breve de tu entrevista: el momento en que te contaron algo
            que no esperabas — su trabajo, la familia, o cómo encaja el mercado en el
            ritmo diario de Tetuán.
          </p>
          <blockquote className="mt-6 border-l-4 border-terracotta-400 pl-5 font-display text-lg leading-relaxed text-olive-900">
            «[Transcripción o resumen de la historia de la persona entrevistada.]»
          </blockquote>
          <p className="mt-4 text-sm text-ink/70">
            <span className="font-semibold text-ink">Nombre / puesto o puesto / producto</span>{" "}
            — una línea sobre por qué elegiste a esta persona y qué revela su historia
            sobre comida, migración o comunidad en Madrid.
          </p>
        </div>
      </div>
    </div>
  );
}
