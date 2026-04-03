import { useCallback, useId, useState } from "react";

/** Canción del viaje (YouTube). El clic del usuario permite que muchos navegadores acepten autoplay en el iframe. */
const VIDEO_ID = "8yZWbZaAlac";
const embedSrc = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;

export function MusicMaestro() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-[60] flex justify-center p-4 md:justify-end md:p-6">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="pointer-events-auto rounded-full border-2 border-terracotta-600 bg-parchment px-5 py-3 font-body text-sm font-semibold text-olive-900 shadow-lg transition hover:bg-terracotta-50 hover:shadow-md"
          aria-expanded={open}
          aria-controls={panelId}
        >
          La música, maestro
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/50 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${panelId}-title`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            id={panelId}
            className="relative w-full max-w-3xl overflow-hidden rounded-lg border border-olive-200 bg-parchment shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-olive-200 bg-olive-50 px-4 py-3">
              <p id={`${panelId}-title`} className="font-display text-lg font-semibold text-olive-900">
                Canción del viaje
              </p>
              <button
                type="button"
                onClick={close}
                className="rounded-full px-3 py-1 text-sm font-medium text-olive-700 hover:bg-olive-200/60"
              >
                Cerrar
              </button>
            </div>
            <div className="aspect-video w-full bg-ink">
              <iframe
                title="YouTube: canción del viaje"
                src={embedSrc}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="px-4 py-2 text-center text-xs text-ink/65">
              Si no suena sola, pulsa play en el vídeo. Enlace directo:{" "}
              <a
                href={`https://youtu.be/${VIDEO_ID}`}
                className="text-terracotta-700 underline underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                youtu.be/{VIDEO_ID}
              </a>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
