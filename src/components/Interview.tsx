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
              alt="Entrevista en el Mercado de Maravillas — cocina peruana"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-terracotta-600">
            Mercado de Maravillas · Tetuán, Madrid
          </p>
          <h3 className="font-display mt-1 text-2xl font-semibold text-olive-900">
            Una barra peruana en medio de la ciudad
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink/85">
            Buscamos sitio para comer y acabamos en un puesto donde servían comida
            peruana: ají, cítricos y calor distinto al de la tapa castellana. Detrás de la
            barra había una señora, de Perú, que llevaba años en Madrid. No estaba solo
            para “cocinar de paso”: había montado el negocio con recetas de casa, las
            mismas que su familia preparaba en Lima, adaptadas a lo que encontraba en
            los mercados de aquí. En el Mercado de Maravillas, me dijo, la gente compra
            con prisa pero también con fidelidad: si el ceviche o la causa salen bien un
            viernes, el viernes siguiente vuelven los mismos rostros.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/85">
            Comimos allí en grupo: platos compartidos, pan, bebida, risas. Ella pasaba de
            la cocina al mostrador sin perder el hilo: saludar a un vecino, recomendar
            un plato a un indeciso, aceptar un pedido en español y en peruano a la vez.
            Para mí, su historia enlazó migración y economía: no es solo “comida
            peruana”, es una cadena pequeña — proveedor, mercado, cliente — que
            sostiene un hogar lejos del océano. El mercado dejó de ser un lugar
            anónimo: pasó a ser el sitio donde una cocinera peruana había hecho
            encajar su país en el barrio.
          </p>
          <blockquote className="mt-6 border-l-4 border-terracotta-400 pl-5 font-display text-lg italic leading-relaxed text-olive-900">
            «Aquí cocino como en mi casa; si falta algo, lo busco en otro puesto y lo
            arreglo. El mercado es mi despensa y mi sala de estar.»
          </blockquote>
          <p className="mt-4 text-sm text-ink/70">
            <span className="font-semibold text-ink">
              Cocinera y dueña del puesto de comida peruana
            </span>{" "}
            — entrevista informal en el Mercado de Maravillas; la cita resume su vínculo
            con el barrio y con la cocina de origen.
          </p>
        </div>
      </div>
    </div>
  );
}
