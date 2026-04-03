/** Rutas bajo `public/` respetando `base` de Vite (p. ej. /andaluciatrip/). */
export function publicUrl(path: string): string {
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${p}`;
}
