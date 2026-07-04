"use client";

import { Leaf, Quote } from "lucide-react";

const storyLines = [
  "Une entreprise familiale portée par plusieurs générations de savoir-faire agricole.",
  "Une vision moderne de l’agroalimentaire, construite autour de la qualité, de la traçabilité et de l’export.",
  "De la terre au produit fini, chaque étape reflète notre exigence : produire, transformer et valoriser avec sérieux.",
  "Des activités complémentaires : huile d’olive, stockage frigorifique, nutrition animale et marchés internationaux.",
  "Une ambition claire : faire rayonner le savoir-faire tunisien avec une image forte, professionnelle et durable.",
];

export default function HeritageStoryVideo() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#03140c] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[url('/images/olivehero3.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,12,0.9)_0%,rgba(3,20,12,0.58)_50%,rgba(3,20,12,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,113,63,0.22),rgba(3,20,12,0.82)_65%)]" />

      <div className="relative mx-auto max-w-[1050px] text-center">
        <div className="mb-10 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.28em] text-[#68c943]">
          <Leaf size={20} />
          Notre histoire
        </div>

        <div className="relative h-[720px] overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-36 bg-gradient-to-b from-[#03140c] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 bg-gradient-to-t from-[#03140c] to-transparent" />

          <div className="animate-heritage-story space-y-14">
            {storyLines.map((text, index) => (
              <div key={index} className="mx-auto max-w-[850px]">
                <p className="text-2xl font-black leading-[1.35] tracking-[-0.035em] text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)] md:text-4xl lg:text-5xl">
                  {text}
                </p>

                {index !== storyLines.length - 1 && (
                  <div className="mx-auto mt-10 h-3 w-3 rounded-full bg-[#f4c430]" />
                )}
              </div>
            ))}

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f4c430] text-[#061b11] shadow-xl">
              <Quote size={24} />
            </div>

            <div>
              <p className="text-lg font-black">
                Partenaires & Marchés internationaux
              </p>

              <p className="mt-4 text-xs uppercase tracking-[0.35em] text-white/55 md:text-sm">
                Tunisie · Europe · Afrique · Amérique du Nord
              </p>
            </div>
          </div>

          <div className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
            <span className="h-2 w-2 rounded-full bg-white/35" />
            <span className="h-2 w-2 rounded-full bg-white/35" />
            <span className="h-20 w-1 rounded-full bg-[#f4c430]" />
            <span className="h-2 w-2 rounded-full bg-white/35" />
            <span className="h-2 w-2 rounded-full bg-white/35" />
          </div>
        </div>
      </div>
    </section>
  );
}