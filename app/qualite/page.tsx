"use client";

import Image from "next/image";
import { Globe, Link as LinkIcon, Share2 } from "lucide-react";
import SoftPaintingHero from "../components/SoftPaintingHero";

const sections = [
  { title: "Qualité supérieure", image: "/images/olivehero2.png" },
  { title: "Traçabilité", image: "/images/olivehero3.jpg" },
  { title: "Certifications", image: "/images/olivehero4.jpg" },
  { title: "Production contrôlée", image: "/images/olivehero5.jpg" },
  { title: "Savoir-faire tunisien", image: "/images/olivehero6.jpg" },
  { title: "Engagement qualité", image: "/images/olivehero7.jpg" },
  { title: "Produits primés", image: "/images/olivehero8.jpg" },
  { title: "Excellence internationale", image: "/images/olivehero.png" },
];

const paragraphs = [
  "L’olivier a façonné, au fil des millénaires, les paysages, l’histoire, la culture et la gastronomie du bassin méditerranéen, notamment celle de la Tunisie ; berceau de civilisations qui se sont transmis, à travers l’histoire, le savoir-faire de la culture et de la production de l’huile d’olive de père en fils.",
  "En hommage à ce voyage, nous mettons en avant notre savoir-faire, notre exigence de qualité et notre engagement envers une huile d’olive équilibrée, authentique et idéale au quotidien.",
  "Nos produits se distinguent par une excellente tenue à la chaleur sans perdre leurs vertus. Ils accompagnent la cuisine avec des saveurs méditerranéennes pour un voyage goûteux et gourmand.",
];

function SocialIcons() {
  return (
    <div className="mt-7 flex justify-center gap-5">
      <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4b4b4b] text-white transition hover:bg-[#007a3d]">
        <Share2 size={20} />
      </a>

      <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4b4b4b] text-white transition hover:bg-[#007a3d]">
        <Globe size={20} />
      </a>

      <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4b4b4b] text-white transition hover:bg-[#007a3d]">
        <LinkIcon size={20} />
      </a>
    </div>
  );
}

export default function QualiteCertificatsPage() {
  return (
    <main className="min-h-screen bg-white text-[#061b13]">
      <SoftPaintingHero
        title="Qualité & Certificats"
        image="/images/olivehero.png"
      />

      <section className="w-full px-8 py-28 lg:px-24">
        <div className="space-y-44">
          {sections.map((section, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <div
                key={section.title}
                className="flex w-full flex-col gap-20 lg:flex-row lg:items-center lg:justify-between"
              >
                <div
                  className={`w-full max-w-[670px] ${
                    imageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative h-[390px] w-full overflow-hidden shadow-md">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <SocialIcons />
                </div>

                <div
                  className={`w-full max-w-[650px] space-y-8 text-[16px] leading-9 text-[#1f2a44] ${
                    imageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h2 className="text-3xl font-black uppercase tracking-[-0.03em] text-[#06291b] md:text-4xl">
                    {section.title}
                  </h2>

                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}