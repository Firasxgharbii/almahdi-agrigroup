"use client";

import Image from "next/image";
import SoftPaintingHero from "./SoftPaintingHero";

type CompanyPageProps = {
  title: string;
  image: string;
  description: string;
};

export default function CompanyPage({
  title,
  image,
  description,
}: CompanyPageProps) {
  return (
    <main className="min-h-screen bg-white text-[#061b13]">
      <SoftPaintingHero title={title} image={image} />

      <section className="w-full px-8 py-24 lg:px-24">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-[650px]">
            <div className="relative h-[420px] w-full overflow-hidden shadow-md">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full max-w-[650px] space-y-8">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#007a3d]">
              Nos sociétés
            </p>

            <h1 className="text-4xl font-black uppercase text-[#06291b] md:text-6xl">
              {title}
            </h1>

            <p className="text-[17px] leading-9 text-[#1f2a44]">
              {description}
            </p>

            <p className="text-[17px] leading-9 text-[#1f2a44]">
              Notre engagement repose sur la qualité, la confiance, la
              traçabilité et le développement d’une identité agricole forte.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}