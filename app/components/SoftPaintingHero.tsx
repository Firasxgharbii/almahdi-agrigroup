"use client";

import Image from "next/image";

type SoftPaintingHeroProps = {
  title?: string;
  image?: string;
  variant?: "default" | "events";
};

export default function SoftPaintingHero({
  title,
  image = "/images/painting-hero.jpg",
  variant = "default",
}: SoftPaintingHeroProps) {
  const isEvents = variant === "events";

  const finalTitle = isEvents
    ? "Événements, foires & salons"
    : title || "collections de peinture à l’huile";

  return (
    <section className="relative w-full overflow-hidden bg-[#d9dfdc]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={finalTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[1.08] contrast-[0.95] saturate-[0.9]"
        />
      </div>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/45" />

      <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center justify-center px-6 py-20 text-center md:min-h-[540px] md:px-10">
        <div>
          {isEvents && (
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#f4c430]">
              Médias
            </p>
          )}

          <h1
            className={
              isEvents
                ? "max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] md:text-6xl lg:text-7xl"
                : "max-w-5xl text-[30px] font-light lowercase leading-[1.25] tracking-[0.18em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:text-[46px] lg:text-[56px]"
            }
          >
            {finalTitle}
          </h1>
        </div>
      </div>
    </section>
  );
}