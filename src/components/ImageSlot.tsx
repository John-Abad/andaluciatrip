import { publicUrl } from "../lib/publicUrl";

type ImageSlotProps = {
  label: string;
  caption: string;
  /** Ruta bajo `public/`, p. ej. `photos/mercado-01.jpg` */
  src?: string;
  aspect?: "landscape" | "portrait" | "square";
};

const aspectClass = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function ImageSlot({
  label,
  caption,
  src,
  aspect = "landscape",
}: ImageSlotProps) {
  const resolved =
    src && !/^https?:\/\//i.test(src) ? publicUrl(src) : src;

  return (
    <figure className="group">
      <div
        className={`relative overflow-hidden rounded-sm border border-olive-200/80 bg-olive-100/40 shadow-sm ${aspectClass[aspect]}`}
      >
        {resolved ? (
          <img
            src={resolved}
            alt={label}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-olive-100 via-parchment to-terracotta-100/40 p-4 text-center">
            <span className="font-display text-lg font-medium text-olive-700">
              {label}
            </span>
            <span className="mt-2 text-xs text-olive-600/80">
              Añade la imagen en{" "}
              <code className="rounded bg-olive-200/50 px-1 py-0.5 text-[0.7rem]">
                public/photos/
              </code>
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-ink/85">
        {caption}
      </figcaption>
    </figure>
  );
}
