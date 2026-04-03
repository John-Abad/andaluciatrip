export type DayEntry = {
  date: string;
  title: string;
  location: string;
  highlights: string[];
  notes?: string;
};

/** Título del sitio (hero y etiqueta title del documento) */
export const siteTitle = "Somos de barra de bar: Viaje a Andalucía";

export const tripTitle = siteTitle;
export const tripSubtitle =
  "SPAN 3535 · Primavera 2026 · Cuaderno de campo desde Nashville hasta Úbeda, Baeza y el Mercado";

export const itinerary: DayEntry[] = [
  {
    date: "vie 6 mar",
    title: "Salida",
    location: "Nashville → Nueva York → Madrid",
    highlights: [
      "Cita en la puerta de embarque de BNA a las 12:50 · solo equipaje de mano",
      "American Airlines vía JFK · llegada a Madrid el sábado por la mañana",
    ],
  },
  {
    date: "sáb 7 mar",
    title: "Camino a Úbeda",
    location: "Madrid → Valdepeñas → Úbeda",
    highlights: [
      "Autobús privado desde Barajas · parada para desayuno: café con leche, tortilla, churros",
      "~14 h · check-in en el Palacio de Úbeda",
      "Noche: flamenco en Restaurante Ay Carmela",
    ],
  },
  {
    date: "dom 8 mar",
    title: "Flamenco y casco antiguo",
    location: "Úbeda",
    highlights: [
      "Clase de flamenco · estudio Inma Murciano",
      "Por la tarde · visita guiada por el Úbeda histórico",
      "Cata y maridaje · Cantina La Estación",
    ],
  },
  {
    date: "lun 9 mar",
    title: "Vía Verde y cocina",
    location: "Úbeda · Baeza",
    highlights: [
      "Por la mañana · senderismo por la Vía Verde",
      "Taller de cocina · La Cocinita de Anita (grupo 1)",
      "Por la noche · visita guiada por Baeza · Plaza de los Leones",
    ],
  },
  {
    date: "mar 10 mar",
    title: "Aceite y museos",
    location: "Úbeda",
    highlights: [
      "Centro del aceite · taller y cata",
      "Tarde libre · museos y callejeo (portafolio)",
      "Cena de grupo · restaurante del Palacio",
    ],
  },
  {
    date: "mié 11 mar",
    title: "Queso y Aoveland",
    location: "Úbeda · Baeza",
    highlights: [
      "Quesos y Besos · taller y cata",
      "Por la noche · Aoveland · visita, cata y maridaje",
    ],
  },
  {
    date: "jue 12 mar",
    title: "Granada (día de sorpresa)",
    location: "Granada",
    highlights: [
      "Alhambra y ciudad (día favorito; en su momento fue la sorpresa del programa)",
      "Ramadán en Granada: calendario de la ciudad y respeto compartido",
      "Comida marroquí en un lugar en Granada",
      "Mezquita: oración y conversación con musulmanes en español",
      "Regreso a Úbeda · cena en el hotel",
    ],
  },
  {
    date: "vie 13 mar",
    title: "Hacia Madrid",
    location: "Úbeda → Madrid",
    highlights: [
      "Autobús a Madrid · AC Carlton Marriott Atocha",
      "17 h · Mercado de Maravillas: entrevistas y trabajo del portafolio",
    ],
  },
  {
    date: "sáb 14 mar",
    title: "Regreso",
    location: "Madrid → Filadelfia → Nashville",
    highlights: [
      "Autobús a Barajas · en el vuelo de vuelta se puede facturar maleta",
      "AA vía PHL hasta BNA",
    ],
  },
];

export const mercadoPlace = {
  name: "Mercado de Maravillas",
  address: "C. de Bravo Murillo, 122, Tetuán, 28020 Madrid",
  url: "https://mercadomaravillas.com/",
};

export const hotels = [
  {
    name: "Palacio de Úbeda",
    place: "Úbeda",
    address: "C. Juan Pasquau, 2, 23400 Úbeda, Jaén",
    url: "https://www.palaciodeubeda.com/",
  },
  {
    name: "AC Hotel Carlton Madrid",
    place: "Madrid Atocha",
    address: "Paseo de las Delicias, 26, 28045 Madrid",
    url: "https://www.marriott.com/en-us/hotels/madca-ac-hotel-carlton-madrid/overview/",
  },
];
