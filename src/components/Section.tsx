import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        {eyebrow ? (
          <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-3xl font-semibold text-olive-900 md:text-4xl">
          {title}
        </h2>
        {intro ? (
          <div className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80">
            {intro}
          </div>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
