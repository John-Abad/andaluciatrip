# Somos de barra de bar: Viaje a Andalucía

Portafolio web en forma de **cuaderno de viaje** para el curso **SPAN 3535** (primavera 2026): el viaje del programa a **Úbeda**, **Baeza**, **Jaén**, **Granada** (día de sorpresa) y **Madrid** (Mercado de Maravillas).

El sitio reúne texto en primera persona, fotos por secciones (mercado, paisajes, mi rincón en Úbeda, actividades y catas, entrevista) y reflexiones sobre comida, historia, cadena de suministro y cultura. La portada usa una foto propia del viaje; la música de fondo opcional es el MP3 **«Morochos · Un lugar»**, canción de la clase.

## Tecnología

- **React 19** + **TypeScript**
- **Vite** (compilación y servidor de desarrollo)
- **Tailwind CSS** (estilos)
- Contenido y pies de foto en `src/data/` (`trip.ts`, `photoSlots.ts`, `images.ts`)

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Abre la URL que indica la terminal (normalmente `http://localhost:5173/andaluciatrip/` por la `base` configurada para GitHub Pages).

## Compilar para producción

```bash
npm run build
```

La salida queda en la carpeta `dist/`.

## Publicación (GitHub Pages)

El repositorio incluye un workflow de GitHub Actions que despliega la rama `main` a Pages. La URL del proyecto suele ser:

`https://john-abad.github.io/andaluciatrip/`

La ruta base `/andaluciatrip/` está definida en `vite.config.ts` para que enlaces y assets funcionen en ese subdirectorio.

## Estructura relevante

| Ruta | Uso |
|------|-----|
| `public/photos/` | Imágenes del portafolio (JPEG/PNG) |
| `public/audio/morochos-un-lugar.mp3` | Canción de fondo del sitio |
| `src/data/trip.ts` | Título, subtítulo e itinerario |
| `src/data/photoSlots.ts` | Textos bajo cada foto |
| `src/data/images.ts` | Asignación de archivo por id de hueco |
| `src/components/MusicMaestro.tsx` | Barra de música de fondo |
| `src/components/Hero.tsx` | Portada con imagen destacada |

## Créditos

Proyecto académico personal. Agradecimiento a la profesora **Lori Catanzaro** y al programa del viaje a Andalucía.
