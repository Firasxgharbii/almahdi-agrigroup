"use client";

import { MapPin } from "lucide-react";

export default function ContactMapHero() {
  const address = "Hichria, Sidi Bouzid, Tunisia, 9131";

  return (
    <section className="relative h-[280px] w-full overflow-hidden md:h-[320px] lg:h-[340px]">
      {/* GOOGLE MAPS SATELLITE */}
      <iframe
        title="AlMahdi AgriGroup - Hichria, Sidi Bouzid"
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          address
        )}&t=k&z=13&output=embed`}
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.08] border-0"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* OVERLAY VERT PREMIUM */}
      <div className="absolute inset-0 bg-[#031d13]/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#02170f]/80 via-[#063b28]/45 to-[#02170f]/45" />

      {/* OMBRE */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENU */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center justify-center px-6">
        {/* TITRE CENTRAL */}
        <div className="text-center">
          <h1 className="text-[38px] font-light lowercase tracking-[0.32em] text-white sm:text-[44px] md:text-[52px]">
            contact
          </h1>

          {/* TRAIT DORÉ */}
          <div className="mx-auto mt-5 h-[2px] w-14 bg-[#d7ad6a]" />

          {/* ADRESSE */}
          <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/90 sm:text-[10px] md:text-[11px] md:tracking-[0.35em]">
            Hichria, Sidi Bouzid, Tunisia, 9131
          </p>
        </div>

        {/* PIN SUR DESKTOP */}
        <div className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 items-center lg:flex xl:right-[12%]">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ad6a]/20 blur-2xl" />

            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#d7ad6a] text-white shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
              <MapPin size={27} strokeWidth={2.3} />
            </div>
          </div>

          <div className="ml-3 rounded-xl border border-white/10 bg-[#061b11]/90 px-4 py-3 shadow-2xl backdrop-blur-md">
            <p className="text-xs font-bold text-white">
              Hichria, Sidi Bouzid
            </p>

            <p className="mt-1 text-[11px] text-white/65">
              Tunisia, 9131
            </p>
          </div>
        </div>
      </div>

      {/* LIGNE BASSE */}
      <div className="absolute bottom-0 left-0 z-20 h-[2px] w-full bg-[#d7ad6a]/70" />
    </section>
  );
}