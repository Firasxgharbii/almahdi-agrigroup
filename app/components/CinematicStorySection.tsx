"use client";

import { Leaf, Quote } from "lucide-react";

const paragraphs = [
  "AlMahdi AgriGroup est une entreprise familiale tunisienne portée par plusieurs générations de savoir-faire agricole.",
  "Nous développons une vision moderne de l’agroalimentaire tunisien, tournée vers la qualité, la traçabilité et l’export.",
  "De la terre au produit fini, chaque étape reflète notre exigence : produire, transformer et valoriser avec sérieux.",
  "Nos activités couvrent l’huile d’olive, la nutrition animale, le stockage frigorifique et les marchés internationaux.",
  "Notre ambition est de faire rayonner le savoir-faire tunisien avec une image forte, professionnelle et durable.",
];

export default function CinematicStorySection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#03140c] px-6 py-24 text-white md:px-12 lg:px-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/olivehero3.jpg')] bg-cover bg-center bg-no-repeat" />

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,12,0.88)_0%,rgba(3,20,12,0.62)_45%,rgba(3,20,12,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,113,63,0.22),rgba(3,20,12,0.78)_65%)]" />

      <div className="relative mx-auto max-w-[1050px] text-center">
        <div className="mb-10 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.28em] text-[#68c943]">
          <Leaf size={20} />
          Notre histoire
        </div>

        <div className="relative h-[720px] overflow-hidden">
          {/* Fade top */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-36 bg-gradient-to-b from-[#03140c] to-transparent" />

          {/* Fade bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 bg-gradient-to-t from-[#03140c] to-transparent" />

          {/* Moving text */}
          <div className="animate-story-video space-y-14">
            {paragraphs.map((text, index) => (
              <div key={index} className="mx-auto max-w-[850px]">
                <p className="text-2xl font-black leading-[1.35] tracking-[-0.035em] text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)] md:text-4xl lg:text-5xl">
                  {text}
                </p>

                {index !== paragraphs.length - 1 && (
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

          {/* Right progress decoration */}
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