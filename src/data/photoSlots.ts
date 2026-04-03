/** Pies de foto. Ajusta el texto si alguna frase no coincide del todo con la imagen. */

export const mercadoSlots = [
  {
    id: "m1",
    label: "Mercado 1",
    caption:
      "Entrada al Mercado de Maravillas: pasillos, luz y gente comprando en Tetuán.",
  },
  {
    id: "m2",
    label: "Mercado 2",
    caption:
      "Fruta y verdura en el mostrador: color y temporada.",
  },
  {
    id: "m3",
    label: "Mercado 3",
    caption:
      "Producto y precio en la vitrina.",
  },
  {
    id: "m4",
    label: "Mercado 4",
    caption:
      "Manos del puesto: cortar, pesar, atender.",
  },
  {
    id: "m5",
    label: "Mercado 5",
    caption:
      "Pasillo entre puestos: olor, ritmo y vecindario.",
  },
  {
    id: "m6",
    label: "Mercado 6",
    caption:
      "Detalle del mostrador: texturas y exposición.",
  },
  {
    id: "m7",
    label: "Mercado 7",
    caption:
      "Color y variedad: el mercado como cruce de orígenes.",
  },
  {
    id: "m8",
    label: "Mercado 8",
    caption:
      "Otro puesto: producto y persona detrás.",
  },
  {
    id: "m9",
    label: "Mercado 9",
    caption:
      "Luz y sombra dentro del edificio.",
  },
  {
    id: "m10",
    label: "Mercado 10",
    caption:
      "Salida o última vuelta antes de irse con la compra.",
  },
];

export const landscapeSlots = [
  {
    id: "l1",
    label: "Carreteras 1",
    caption:
      "Primera foto de la carpeta «Carreteras, Olivos y Cielo»: escena en ruta (carretera o autobús), según lo que se ve en la imagen.",
  },
  {
    id: "l2",
    label: "Carreteras 2",
    caption:
      "Segunda foto de la misma carpeta: horizonte, asfalto o cielo abierto.",
  },
  {
    id: "l3",
    label: "Carreteras 3",
    caption:
      "Tercera foto: olivares o campo jiennense en el encuadre.",
  },
  {
    id: "l4",
    label: "Carreteras 4",
    caption:
      "Cuarta foto: otro ángulo del viaje por carretera o del paisaje.",
  },
  {
    id: "l5",
    label: "Carreteras 5",
    caption:
      "Quinta foto: cielo y tierra sin forzar una hora concreta del día.",
  },
  {
    id: "l6",
    label: "Carreteras 6",
    caption:
      "Sexta foto de la carpeta. Durante el viaje corrí una media maratón de 21 km entre olivos; si esta toma no es de ese momento, el pie describe solo lo visible (carretera, olivos, edificio lejano, etc.).",
  },
  {
    id: "l7",
    label: "Carreteras 7",
    caption:
      "Séptima foto: detalle del entorno que aparece en la imagen.",
  },
  {
    id: "l8",
    label: "Carreteras 8",
    caption:
      "Octava foto: otra vista del mismo bloque de paisaje.",
  },
  {
    id: "l9",
    label: "Carreteras 9",
    caption:
      "Novena foto: lo que muestra el encuadre (sin inventar atardecer ni niebla si no salen).",
  },
  {
    id: "l10",
    label: "Carreteras 10",
    caption:
      "Décima y última foto de la carpeta actualizada: carretera, olivar o población, según la imagen.",
  },
  {
    id: "l11",
    label: "Vía Verde",
    caption:
      "Caminata por la Vía Verde (sendero y vegetación). Van aquí y no en actividades.",
  },
  {
    id: "l12",
    label: "Sendero",
    caption:
      "Otro tramo del sendero cerca de Úbeda.",
  },
];

export const favoriteCornerSlots = [
  {
    id: "f1",
    label: "Mi rincón · fútbol",
    caption:
      "Mi rincón en Úbeda fue el primer día: con mi compañero de cuarto salimos a caminar, vimos a unos niños jugando al fútbol y nos unimos. Equipos Cristiano Ronaldo contra Messi; ellos jugaban mejor que nosotros.",
    aspect: "portrait" as const,
  },
  {
    id: "f2",
    label: "Mi rincón · plaza",
    caption:
      "La misma tarde en otra esquina del casco: calles de piedra y el partido improvisado.",
    aspect: "portrait" as const,
  },
  {
    id: "f3",
    label: "Mi rincón · vista",
    caption:
      "Vista más amplia del momento: el barrio y la plaza, no solo el monumento.",
    aspect: "landscape" as const,
  },
];

export const activitySlots = [
  {
    id: "a1",
    label: "Úbeda, primeros días",
    caption:
      "Calle o grupo en el casco: primeras horas en la ciudad.",
  },
  {
    id: "a2",
    label: "Úbeda",
    caption:
      "Calle, fachada o detalle urbano del programa en Úbeda.",
  },
  {
    id: "a3",
    label: "Patrimonio",
    caption:
      "Piedra, arco o callejón del casco histórico.",
  },
  {
    id: "a4",
    label: "Plaza o espacio",
    caption:
      "Plaza, mirador o sitio donde paramos en grupo.",
  },
  {
    id: "a5",
    label: "Úbeda o Baeza",
    caption:
      "Renacimiento y sombras: lo que muestra la foto.",
  },
  {
    id: "a6",
    label: "Descanso",
    caption:
      "Pausa caminando entre visitas.",
  },
  {
    id: "a7",
    label: "Fin de jornada",
    caption:
      "Final del día en provincia (luz según la imagen, sin decir atardecer si no lo hay).",
  },
  {
    id: "a8",
    label: "Detalle",
    caption:
      "Otro encuadre del viaje en ciudad o museo al aire libre.",
  },
  {
    id: "a9",
    label: "La Cocinita de Anita",
    caption:
      "Taller de cocina: ensaladilla rusa y otras recetas. Me gusta ayudar en cocina desde pequeño.",
  },
  {
    id: "a10",
    label: "Mesa",
    caption:
      "Comida preparada en el taller o almuerzo en grupo.",
  },
  {
    id: "a11",
    label: "Cata",
    caption:
      "Degustación: aceite, queso o vino, según lo que salga en la foto.",
  },
  {
    id: "a12",
    label: "Quesos y Besos",
    caption:
      "Quesería: proceso y producto.",
  },
  {
    id: "a13",
    label: "Baeza o ruta",
    caption:
      "Imagen de Baeza o de la ruta gastronómica (lo que se ve).",
  },
  {
    id: "a14",
    label: "Cantina La Estación",
    caption:
      "Cata y maridaje en Cantina La Estación: platos y copas del menú del viaje.",
  },
  {
    id: "a15",
    label: "Museo",
    caption:
      "Visita de portafolio: interior de museo o pieza expuesta.",
  },
  {
    id: "a16",
    label: "Aoveland",
    caption:
      "Aoveland en Baeza: almazara, cata de AOVE y ambiente de la noche.",
  },
  {
    id: "a17",
    label: "Antes de Madrid",
    caption:
      "Últimos momentos en Jaén antes del mercado en Madrid.",
  },
];
