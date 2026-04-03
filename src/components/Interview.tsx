import { publicUrl } from "../lib/publicUrl";

const interviewPhoto = "photos/entrevista-peru.jpg";

export function Interview() {
  return (
    <div className="rounded-lg border border-olive-200 bg-gradient-to-br from-white to-olive-50/50 p-8 shadow-sm md:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
        <div className="shrink-0 md:w-56">
          <div className="overflow-hidden rounded-sm border border-olive-200/80 shadow-sm">
            <img
              src={publicUrl(interviewPhoto)}
              alt="Cocinera del puesto peruano en el Mercado de Maravillas"
              className="aspect-[4/5] w-full object-cover object-[88%_center] sm:object-[90%_center]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-terracotta-600">
            Mercado de Maravillas · Tetuán, Madrid
          </p>
          <h3 className="font-display mt-1 text-2xl font-semibold text-olive-900">
            Lima en la barra del mercado
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink/85">
            Me encantó esta entrevista porque conocí a una señora de{" "}
            <strong className="font-medium text-olive-900">Lima</strong>: vino a Madrid con
            su esposo, mientras que sus hijos siguen viviendo en Perú. Ella trabaja en el
            mercado, cocina con sazón de casa y habla del Perú con cariño. Hablamos de
            nuestra comida, de cómo nos adaptamos al migrar y de que{" "}
            <strong className="font-medium text-olive-900">Madrid</strong> le ha gustado
            construir una vida aquí, aunque el corazón siga dividido entre dos orillas.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/85">
            <strong className="font-medium text-olive-900">Aiden, Isaac, Brady y José</strong>{" "}
            se unieron para comer; <strong className="font-medium text-olive-900">Angélica</strong>{" "}
            y <strong className="font-medium text-olive-900">Laird</strong> también pasaron a
            saludar. Fue un rato bonito, de platos compartidos y risas. Una compañera de
            clase (que me había ayudado a conocer Madrid otro día){" "}
            <strong className="font-medium text-olive-900">probó comida peruana por
            primera vez</strong>; yo le mostré platos y sabores que me recuerdan casa.
            La sazón de la señora era excelente; el foco de la historia es ella, su
            trayectoria y cómo el mercado sostiene ese puente entre países.
          </p>
          <blockquote className="mt-6 border-l-4 border-terracotta-400 pl-5 font-display text-lg italic leading-relaxed text-olive-900">
            «Aquí cocino como en mi casa; si falta algo, lo busco en otro puesto y lo
            arreglo. El mercado es mi despensa y mi sala de estar.»
          </blockquote>
          <p className="mt-4 text-sm text-ink/70">
            <span className="font-semibold text-ink">
              Cocinera de Lima · puesto de comida peruana
            </span>
            . Mercado de Maravillas, entrevista informal durante la visita del programa.
          </p>
        </div>
      </div>
    </div>
  );
}
