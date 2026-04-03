import { useCallback, useRef, useState } from "react";
import { publicUrl } from "../lib/publicUrl";

/**
 * «Morochos - Un lugar» (MP3 en public/audio).
 * play() debe llamarse en el mismo turno que el clic del usuario; si se hace en useEffect falla la política de autoplay.
 */
const TRACK = "audio/morochos-un-lugar.mp3";

export function MusicMaestro() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const src = publicUrl(TRACK);

  const start = useCallback(() => {
    setErr(null);
    const a = ref.current;
    if (!a) return;
    a.muted = false;
    setMuted(false);
    a.volume = 1;
    const p = a.play();
    if (p !== undefined) {
      p
        .then(() => setPlaying(true))
        .catch(() => {
          setErr("El navegador bloqueó el audio. Prueba otro navegador o recarga con Ctrl+Shift+R.");
        });
    } else {
      setPlaying(true);
    }
  }, []);

  const stop = useCallback(() => {
    const a = ref.current;
    if (a) {
      a.pause();
      a.currentTime = 0;
    }
    setPlaying(false);
  }, []);

  const toggleMute = useCallback(() => {
    const a = ref.current;
    if (!a) return;
    a.muted = !a.muted;
    setMuted(a.muted);
  }, []);

  return (
    <>
      <audio
        ref={ref}
        src={src}
        loop
        preload="auto"
        className="pointer-events-none fixed bottom-24 left-2 z-[55] h-8 w-48 opacity-[0.03]"
        aria-label="Morochos, Un lugar"
        onError={() => {
          setErr(
            `No se pudo cargar el audio. Comprueba la URL: ${src}`,
          );
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-olive-200/90 bg-parchment/95 px-3 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
          <div className="order-2 text-center text-xs text-ink/65 sm:order-1 sm:max-w-xl sm:text-left">
            {err ? (
              <span className="text-terracotta-700">{err}</span>
            ) : playing ? (
              <>«Morochos · Un lugar» (MP3 de la clase). Sigue sonando mientras navegas.</>
            ) : (
              <>Pulsa para reproducir «Morochos · Un lugar» (archivo MP3 del proyecto).</>
            )}
          </div>
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
                  onClick={toggleMute}
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
