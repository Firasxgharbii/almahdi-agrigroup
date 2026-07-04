"use client";

import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export default function PremiumOliveHero() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] overflow-hidden bg-[#07140d] text-white">
      <div className="absolute inset-0 animate-hero-bg bg-[url('/images/olivehero.png')] bg-cover bg-center bg-no-repeat" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,12,0.78)_0%,rgba(3,20,12,0.55)_42%,rgba(3,20,12,0.18)_100%)]" />

      <div className="absolute bottom-0 right-0 z-10 h-[82%] w-[58%] animate-farmer-after bg-[url('/images/farmer.png')] bg-contain bg-bottom bg-no-repeat" />

      <div className="relative z-20 flex min-h-[calc(100vh-120px)] items-center px-6 md:px-14 lg:px-24">
        <div className="max-w-[760px] animate-text-enter">
          <div className="mb-7 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#20b84f]">
              <Leaf size={16} />
            </span>
            Olive Oil Tunisia
          </div>

          <h1 className="max-w-[760px] text-5xl font-black leading-[0.96] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Savourez La Pureté,
            <br />
            Révélez La Saveur.
          </h1>

          <Link
            href="/nos-societes"
            className="mt-10 inline-flex items-center gap-5 rounded-full bg-[#fff000] px-10 py-5 text-base font-black text-[#061b11] transition hover:scale-105 hover:bg-[#ffe600]"
          >
            Découvrir
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}