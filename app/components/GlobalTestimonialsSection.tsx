"use client";

import Image from "next/image";
import { Leaf, Quote } from "lucide-react";

export default function GlobalTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 text-[#061b11] md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-[1350px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr_0.8fr]">
        <div className="hidden lg:flex flex-col items-end gap-6">
          <Image
            src="/images/olivehero3.jpg"
            alt="Olive field"
            width={300}
            height={360}
            className="h-[330px] w-[280px] rounded-[28px] object-cover shadow-xl"
          />

          <Image
            src="/images/olivehero5.jpg"
            alt="Olive picking"
            width={240}
            height={190}
            className="mr-10 h-[190px] w-[240px] rounded-[24px] object-cover shadow-xl"
          />
        </div>

        <div className="mx-auto max-w-[650px] text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-[#4b7f2b]">
            <Leaf size={18} />
            Présence internationale
          </div>

          <h2 className="text-4xl font-black leading-[1.08] tracking-[-0.04em] md:text-5xl">
            Une qualité tunisienne reconnue par nos partenaires.
          </h2>

          <div className="mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4c430] text-[#061b11]">
            <Quote size={22} />
          </div>

          <p className="mx-auto mt-7 max-w-[620px] text-xl font-bold leading-9 text-[#061b11]/90">
            “AlMahdi AgriGroup représente un savoir-faire fiable, une qualité
            constante et une vision moderne tournée vers l’export.”
          </p>

          <div className="mt-7">
            <p className="font-black">Partenaires & Marchés internationaux</p>
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#061b11]/45">
              Tunisie · Europe · Afrique · Amérique du Nord
            </p>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-start gap-6">
          <Image
            src="/images/olivehero6.jpg"
            alt="Olive tree"
            width={260}
            height={170}
            className="ml-8 h-[170px] w-[260px] rounded-[24px] object-cover shadow-xl"
          />

          <Image
            src="/images/olivehero7.jpg"
            alt="Olive oil"
            width={300}
            height={360}
            className="h-[330px] w-[280px] rounded-[28px] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}