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
              Soy <strong className="font-medium text-olive-900">estudiante de ciencias
              de la computación</strong> y, para el portafolio del viaje, quise usar mis
              habilidades: <strong className="font-medium text-olive-900">programé esta
              página web</strong> para contar en público lo que vivimos en el{" "}
              <strong className="font-medium text-olive-900">Mercado de Maravillas</strong>
              , en Úbeda, Baeza y el olivar de Jaén — como viajero y como alguien que
              aprende cómo España produce, vende y celebra lo que come.
            </p>
          }
        >
          <p className="max-w-3xl text-base leading-relaxed text-ink/85">
            Cada sección enlaza con el portafolio: fotos comentadas del mercado, paisajes
            en ruta (incluida la media maratón entre olivos), mi rincón en Úbeda,
            actividades desde el flamenco hasta Aoveland, y una entrevista con historia
            humana detrás del mostrador.
          </p>
        </Section>

        <div className="bg-olive-50/50">
          <Section
            id="mercado"
            eyebrow="Portafolio · Mercado de Maravillas"
            title="Mercado de Maravillas"
            intro={
              <p>
                El viernes por la tarde trabajamos en el{" "}
                <a
                  href="https://mercadomaravillas.com/"
                  className="font-medium text-terracotta-700 underline decoration-terracotta-300 underline-offset-2 hover:text-terracotta-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mercado de Maravillas
                </a>
                . Me encantó: me recordó a los mercados de{" "}
                <strong className="font-medium text-olive-900">Lima</strong>. Había
                puestos de <strong className="font-medium text-olive-900">Perú,
                Ecuador y Colombia</strong> y muchos productos latinoamericanos; también
                carnes, mariscos y postres de otros rincones del mundo, no solo de
                Latinoamérica. Sinceramente, en varios pasillos casi no notaba la
                diferencia con casa: fue muy bonito y familiar.
              </p>
            }
          >
            <PhotoGrid slots={mercadoSlots} />
          </Section>
        </div>

        <Section
          id="landscapes"
          eyebrow="Carretera, olivos y cielo"
          title="Paisajes y caminos"
          intro="Autobús, olivar infinito, media maratón de 21 km en medio del mar de olivos cerca de Úbeda, quesería y catas. Las fotos de la Vía Verde y senderos están aquí, no mezcladas con actividades."
        >
          <PhotoGrid slots={landscapeSlots} />
        </Section>

        <div className="bg-white/60">
          <Section
            id="itinerary"
            eyebrow="Ruta"
            title="Itinerario resumido"
            intro="De Nashville a Madrid, luego hondo en Jaén — Granada y la Alhambra en el corazón del recuerdo — y de vuelta a la capital para el mercado."
          >
            <Timeline />
          </Section>
        </div>

        <Section
          id="journal"
          eyebrow="Notas de campo"
          title="Diario"
          intro="Cadena de suministro, historia, terruño, políticas alimentarias, medio ambiente y cómo este viaje me ha cambiado como consumidor."
        >
          <div>
            <div className="rounded-lg border border-olive-200/80 bg-parchment/80 p-6 md:p-8">
              <p className="text-base leading-relaxed text-ink/85">
                <strong className="font-medium text-olive-900">Ahora me encanta el aceite
                de oliva.</strong> Antes no tenía tanta información sobre cuántas
                calidades y tipos existen: virgen extra, coupage, monovarietales, usos en
                cocina… En Jaén entendí el trabajo detrás de cada botella. También me
                gusta el vino, pero no conocía tanto la diferencia entre{" "}
                <strong className="font-medium text-olive-900">tintos, blancos y otros
                estilos</strong>; las catas y maridajes del viaje me ayudaron a aprender
                vocabulario y criterio.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                Me fascinó la historia de <strong className="font-medium text-olive-900">al-Ándalus</strong>{" "}
                y de la <strong className="font-medium text-olive-900">Andalucía</strong>{" "}
                actual: <strong className="font-medium text-olive-900">judíos, musulmanes
                y cristianos</strong> dejaron capas distintas —arquitectura, agricultura,
                cocina, lengua— en lo que hoy se siente al caminar el sur. Pude visitar la{" "}
                <strong className="font-medium text-olive-900">Alhambra en Granada</strong>;{" "}
                coincidió con <strong className="font-medium text-olive-900">Ramadán</strong>{" "}
                y fue muy emotivo conectar espiritual y culturalmente con ese espacio. En
                un pueblo del viaje, apenas llegamos, jugamos al fútbol con niños del
                lugar: un detalle pequeño que me encantó y que no olvidaré.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                Sobre el <strong className="font-medium text-olive-900">Mercado de
                Maravillas</strong>, ya lo cuento arriba: cercanía a Lima, diversidad de
                productos y sensación de hogar. En <strong className="font-medium text-olive-900">carreteras, olivos y cielo</strong>, además del paisaje, destaco la{" "}
                <strong className="font-medium text-olive-900">media maratón de 21 km</strong>{" "}
                entre olivares, las visitas a queserías y los caminos que ahora agrupo en
                esa sección del sitio. En <strong className="font-medium text-olive-900">La
                Cocinita de Anita</strong> cociné la <strong className="font-medium text-olive-900">ensaladilla rusa</strong>: desde pequeño me gusta freír y ayudar en la cocina, y
                allí pude hacerlo con buena guía. Todo eso —del campo al mercado— me dejó
                más curioso sobre quién produce, quién transporta y quién gana con lo que
                compro.
              </p>
            </div>
          </div>
        </Section>

        <div className="border-y border-olive-200/60 bg-white/40">
          <Section
            id="rincon"
            eyebrow="Mi rincón en Úbeda"
            title="Mi rincón en Úbeda"
            intro="El primer día, el fútbol con los niños y el barrio que se abrió antes que los monumentos."
          >
            <PhotoGrid slots={favoriteCornerSlots} />
          </Section>
        </div>

        <Section
          id="activities"
          eyebrow="Actividades y catas"
          title="Actividades y catas"
          intro={
            <p>
              Flamenco, museos, <strong className="font-medium text-olive-900">Cantina La
              Estación</strong> (cata, maridaje, pescados y vinos de calidad),{" "}
              <strong className="font-medium text-olive-900">Quesos y Besos</strong>,{" "}
              <strong className="font-medium text-olive-900">Aoveland</strong> en Baeza
              —almazara visitable con arte, tecnología y catas de AOVE— y el día a día en
              Úbeda. La <strong className="font-medium text-olive-900">cocina andaluza</strong>{" "}
              mezcla influencias mediterráneas y las herencias judía, islámica y cristiana
              que estudiamos en clase; se nota en aceite, pescado, especias y en cómo se
              comparte la mesa.
            </p>
          }
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
            intro="Una cocinera de Lima en el Mercado de Maravillas: migración, familia y sazón."
          >
            <Interview />
          </Section>
        </div>

        <Section
          id="reflections"
          eyebrow="Cierre"
          title="Reflexiones y conexiones"
          intro="Producción, cadena de suministro, cultura y un yo distinto al que salió de Nashville."
        >
          <ul className="space-y-4 text-base leading-relaxed text-ink/85">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
              <span>
                <strong className="font-medium text-olive-900">Producción:</strong>{" "}
                Aprendí cómo se cultiva el olivar en una provincia donde conviven{" "}
                <strong className="font-medium text-olive-900">decenas de millones de
                olivos</strong> (cifras que suelen citarse en torno a 60–70 millones de
                árboles en Jaén): orden en el campo, cooperativas, almazaras como
                estaciones donde el fruto se transforma en AOVE.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
              <span>
                <strong className="font-medium text-olive-900">Cadena de suministro:</strong>{" "}
                Me interesó ver cómo el aceite, el queso y el vino pasan por espacios como
                el centro del olivo, la quesería y experiencias como{" "}
                <strong className="font-medium text-olive-900">Aoveland</strong> antes de
                llegar a un mercado urbano o a un restaurante.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
              <span>
                <strong className="font-medium text-olive-900">Cultura:</strong>{" "}
                El flamenco me encantó: compré <strong className="font-medium text-olive-900">abanicos</strong> para regalar en Estados Unidos. Traje <strong className="font-medium text-olive-900">aceites y chocolates</strong> a mi familia. Andalucía es un cruce de culturas donde el pasado musulmán y cristiano sigue vivo en la calle y en el plato; conectar eso con mi primera vez en el sur, con la clase, fue especial.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
              <span>
                <strong className="font-medium text-olive-900">Yo:</strong> El viaje me
                transformó como consumidor: miro más el origen, las etiquetas y el precio
                justo. Me encantó la comida, el paisaje y{" "}
                <strong className="font-medium text-olive-900">mi primera Andalucía</strong>{" "}
                con el programa — una mezcla de estudio, amistad y memoria que quiero
                seguir explorando.
              </span>
            </li>
          </ul>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
