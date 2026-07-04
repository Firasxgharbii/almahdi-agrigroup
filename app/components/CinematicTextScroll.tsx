"use client";

const paragraphs = [
  "AlMahdi AgriGroup est une entreprise familiale tunisienne portée par plusieurs générations de savoir-faire agricole.",
  "Nous développons une vision moderne de l’agroalimentaire tunisien, tournée vers la qualité, la traçabilité et l’export.",
  "De la terre au produit fini, chaque étape reflète notre exigence : produire, transformer et valoriser avec sérieux.",
  "Nos activités couvrent l’huile d’olive, la nutrition animale, le stockage frigorifique et les marchés internationaux.",
  "Notre ambition est de faire rayonner le savoir-faire tunisien avec une image forte, professionnelle et durable.",
];

export default function CinematicTextScroll() {
  return (
    <section className="relative overflow-hidden bg-[#061b11] px-6 py-24 text-white">
      <div className="mx-auto max-w-[1000px] text-center">
        <p className="mb-10 text-xs font-black uppercase tracking-[0.35em] text-[#f4c430]">
          Notre histoire
        </p>

        <div className="relative h-[520px] overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-[#061b11] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-[#061b11] to-transparent" />

          <div className="animate-cinematic-scroll space-y-16 px-2">
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="mx-auto max-w-[900px] text-3xl font-black leading-[1.35] tracking-[-0.03em] text-white md:text-5xl"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}