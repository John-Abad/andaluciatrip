import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Timeline } from "./components/Timeline";
import { ImageSlot } from "./components/ImageSlot";
import { Interview } from "./components/Interview";
import { Footer } from "./components/Footer";
import {
  activitySlots,
  favoriteCornerSlots,
  landscapeSlots,
  mercadoSlots,
} from "./data/photoSlots";
import { imageOverrides } from "./data/images";

function PhotoGrid({
  slots,
}: {
  slots: {
    id: string;
    label: string;
    caption: string;
    aspect?: "landscape" | "portrait" | "square";
  }[];
}) {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
      {slots.map((slot) => (
        <ImageSlot
          key={slot.id}
          label={slot.label}
          caption={slot.caption}
          src={imageOverrides[slot.id]}
          aspect={slot.aspect ?? "landscape"}
        />
      ))}
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <Section
          id="intro"
          eyebrow="Por qué este viaje"
          title="Comida, paisaje y la historia detrás del mostrador"
          intro={
            <p className="text-balance">
              Este sitio es un cuaderno vivo sobre el{" "}
              <strong className="font-medium text-olive-900">
                Mercado de Maravillas
              </strong>
              , las ciudades renacentistas de Úbeda y Baeza, y el país del aceite y el
              vino en Jaén — escrito como viajero y como estudiante de cómo España
              produce, vende y celebra lo que come.
            </p>
          }
        >
          <p className="max-w-3xl text-base leading-relaxed text-ink/85">
            Usa cada sección para alinearla con tu portafolio: fotos comentadas del
            mercado, paisajes en ruta, un rincón de Úbeda que sea tuyo, actividades
            desde el flamenco al taller del aceite, y una entrevista que ponga el foco
            en la historia de una persona, no solo en el producto.
          </p>
        </Section>

        <div className="bg-white/60">
          <Section
            id="itinerary"
            eyebrow="Ruta"
            title="Itinerario resumido"
            intro="De Nashville a Madrid, luego hondo en Jaén, y de vuelta a la capital para el mercado."
          >
            <Timeline />
          </Section>
        </div>

        <Section
          id="journal"
          eyebrow="Notas de campo"
          title="Diario (sustituye por tu voz)"
          intro="Borra los marcadores y escribe aquí o en los pies de foto: cadena de suministro, historia, terruño, políticas, medio ambiente y cómo te ha cambiado como consumidor."
        >
          <div>
            <div className="rounded-lg border border-olive-200/80 bg-parchment/80 p-6 md:p-8">
              <p className="text-base leading-relaxed text-ink/85">
                <em className="text-olive-800">
                  [Párrafo: ¿qué te sorprendió del camino del aceite o el queso del campo
                  a la mesa?]
                </em>
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                <em className="text-olive-800">
                  [Párrafo: Baeza y Úbeda como marco renacentista — ¿cómo dialoga la
                  piedra con lo que se cultiva fuera de las murallas?]
                </em>
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                <em className="text-olive-800">
                  [Párrafo: el mercado de Madrid como nodo en una ciudad global — ¿quién
                  compra aquí y qué significa «fresco» en Tetuán?]
                </em>
              </p>
            </div>
          </div>
        </Section>

        <div className="bg-olive-50/50">
          <Section
            id="mercado"
            eyebrow="Portafolio · 8–10 imágenes"
            title="Mercado de Maravillas"
            intro={
              <p>
                Viernes 17 h — entrevistas y observación en el{" "}
                <a
                  href="https://mercadomaravillas.com/"
                  className="font-medium text-terracotta-700 underline decoration-terracotta-300 underline-offset-2 hover:text-terracotta-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mercado de Maravillas
                </a>
                . Una foto por historia de puesto: producto, gesto, luz, precios, el
                ritmo del pasillo.
              </p>
            }
          >
            <PhotoGrid slots={mercadoSlots} />
          </Section>
        </div>

        <Section
          id="landscapes"
          eyebrow="Portafolio · paisajes"
          title="Carretera, olivos y cielo"
          intro="Cristales del autobús, paseos entre pueblos, la Vía Verde — imágenes que te sitúan como visitante que aprende un paisaje, no solo una postal."
        >
          <PhotoGrid slots={landscapeSlots} />
        </Section>

        <div className="border-y border-olive-200/60 bg-white/40">
          <Section
            id="rincon"
            eyebrow="Portafolio · 2–3 imágenes"
            title="Mi rincón en Úbeda"
            intro="El banco, la plaza, el hueco de luz — adonde volviste más de una vez y por qué te quedó como punto fijo."
          >
            <PhotoGrid slots={favoriteCornerSlots} />
          </Section>
        </div>

        <Section
          id="activities"
          eyebrow="Portafolio · actividades y catas"
          title="Actividades y catas"
          intro="Galería completa del viaje: calles, talleres, catas y encuentros — cada imagen con pie de foto para tu narración."
        >
          <div className="grid gap-10 sm:grid-cols-2">
            {activitySlots.map((slot) => (
              <ImageSlot
                key={slot.id}
                label={slot.label}
                caption={slot.caption}
                src={imageOverrides[slot.id]}
              />
            ))}
          </div>
        </Section>

        <div className="bg-gradient-to-b from-terracotta-50/40 to-parchment">
          <Section
            id="interview"
            eyebrow="Portafolio"
            title="Entrevista"
            intro="Un vendedor o cliente del mercado — su historia en relación con el puesto, la migración, el negocio familiar o el barrio."
          >
            <Interview />
          </Section>
        </div>

        <Section
          id="reflections"
          eyebrow="Cierre"
          title="Reflexiones y conexiones"
          intro="Une el viaje a tu futuro: estudios, carrera, ciudadanía y cómo compras comida cuando vuelvas a casa."
        >
          <ul className="space-y-4 text-base leading-relaxed text-ink/85">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
              <span>
                <strong className="font-medium text-olive-900">Producción:</strong>{" "}
                ¿Qué aprendiste sobre cómo se cultiva y certifica la comida en Jaén?
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
              <span>
                <strong className="font-medium text-olive-900">Cadena de suministro:</strong>{" "}
                De la quesería al mostrador del mercado — ¿dónde están los
                intermediarios?
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
              <span>
                <strong className="font-medium text-olive-900">Cultura:</strong>{" "}
                Flamenco, silencio de catedral, ritmo de tapas — ¿qué tradiciones
                cambiaron tus expectativas?
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
              <span>
                <strong className="font-medium text-olive-900">Tú:</strong> ¿Cómo te
                transformó esta experiencia como consumidor y como persona?
              </span>
            </li>
          </ul>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
