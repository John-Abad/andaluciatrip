import { useState } from "react";

/**
 * Canción del viaje en YouTube como música de fondo: iframe oculto (no modal).
 * Un clic en "Escuchar música de fondo" inicia el audio para poder leer el sitio con música.
 * (Los navegadores no suelen permitir sonido sin interacción del usuario.)
 */
const VIDEO_ID = "8yZWbZaAlac";

function embedUrl(muted: boolean) {
  const p = new URLSearchParams({
    autoplay: "1",
    mute: muted ? "1" : "0",
    loop: "1",
    playlist: VIDEO_ID,
    rel: "0",
    modestbranding: "1",
    controls: "0",
  });
  return `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?${p.toString()}`;
}

export function MusicMaestro() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const start = () => {
    setMuted(false);
    setPlaying(true);
  };

  const stop = () => {
    setPlaying(false);
  };

  return (
    <>
      {playing ? (
        <div
          className="pointer-events-none fixed bottom-0 left-0 -z-10 h-[120px] w-[200px] overflow-hidden opacity-[0.02]"
          aria-hidden
        >
          <iframe
            key={muted ? "muted" : "sound"}
            title="Música de fondo del viaje"
            src={embedUrl(muted)}
            width={200}
            height={113}
            className="h-[113px] w-[200px] max-w-none border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      ) : null}

      <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-olive-200/90 bg-parchment/95 px-3 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
          <p className="order-2 text-center text-xs text-ink/65 sm:order-1 sm:max-w-xl sm:text-left">
            {playing
              ? "La música suena en segundo plano. Puedes bajar, leer y ver las fotos sin abrir otra pestaña."
              : "La canción del viaje suena en segundo plano (YouTube oculto). Pulsa una vez para empezar."}
          </p>
          <div className="order-1 flex flex-wrap items-center justify-center gap-2 sm:order-2">
            {!playing ? (
              <button
                type="button"
                onClick={start}
                className="rounded-full border-2 border-terracotta-600 bg-terracotta-600 px-4 py-2 font-body text-sm font-semibold text-parchment shadow-sm transition hover:bg-terracotta-700"
              >
                Escuchar música de fondo
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  className="rounded-full border border-olive-300 bg-white px-3 py-2 text-sm font-medium text-olive-800 hover:bg-olive-50"
                >
                  {muted ? "Con sonido" : "Silenciar"}
                </button>
                <button
                  type="button"
                  onClick={stop}
                  className="rounded-full border border-olive-300 bg-parchment px-4 py-2 font-body text-sm font-semibold text-olive-900 hover:bg-olive-100"
                >
                  Pausar música
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
