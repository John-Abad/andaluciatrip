import { useEffect, useRef, useState } from "react";
import { publicUrl } from "../lib/publicUrl";

/**
 * Canción de la clase: «Morochos - Un lugar» (MP3 en public/audio).
 * Un clic inicia el audio; los navegadores suelen exigir interacción del usuario.
 */
const TRACK_SRC = "audio/morochos-un-lugar.mp3";

export function MusicMaestro() {
  const [active, setActive] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = muted;
  }, [muted]);

  useEffect(() => {
    if (!active) return;
    const a = audioRef.current;
    if (!a) return;
    void a.play().catch(() => {});
  }, [active]);

  const start = () => setActive(true);

  const stop = () => {
    const a = audioRef.current;
    if (a) {
      a.pause();
      a.currentTime = 0;
    }
    setActive(false);
  };

  return (
    <>
      {active ? (
        <audio
          ref={audioRef}
          src={publicUrl(TRACK_SRC)}
          loop
          preload="auto"
          className="sr-only"
          aria-label="Morochos, Un lugar. Música de fondo del viaje."
        />
      ) : null}

      <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-olive-200/90 bg-parchment/95 px-3 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
          <p className="order-2 text-center text-xs text-ink/65 sm:order-1 sm:max-w-xl sm:text-left">
            {active
              ? "«Morochos · Un lugar»: música de la clase en segundo plano. Puedes seguir leyendo y viendo las fotos."
              : "Pulsa para escuchar la canción de la clase mientras navegas por el portafolio."}
          </p>
          <div className="order-1 flex flex-wrap items-center justify-center gap-2 sm:order-2">
            {!active ? (
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
