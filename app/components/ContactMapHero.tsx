"use client";

import { MapPin, ArrowUpRight } from "lucide-react";

const ADDRESS = "Hichria, Sidi Bouzid, Tunisia, 9131";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Hichria%2C%20Sidi%20Bouzid%2C%20Tunisia%2C%209131";

export default function ContactMapHero() {
  return (
    <section
      className="
        relative
        isolate
        h-[360px]
        w-full
        overflow-hidden
        bg-[#071b13]
        md:h-[410px]
        lg:h-[440px]
      "
    >
      {/* ================================================= */}
      {/* SATELLITE MAP */}
      {/* ================================================= */}

      <iframe
        title="Localisation AlMahdi AgriGroup"
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          ADDRESS
        )}&t=k&z=14&output=embed`}
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          h-full
          w-full
          scale-[1.04]
          border-0
        "
      />

      {/* ================================================= */}
      {/* PREMIUM MAP FILTER */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-[#05271b]/55
          mix-blend-multiply
        "
      />

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-[#031b12]/95
          via-[#062b1d]/70
          to-[#031b12]/35
        "
      />

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-t
          from-[#03150e]/75
          via-transparent
          to-[#03150e]/25
        "
      />

      {/* ================================================= */}
      {/* DECORATIVE GLOW */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-28
          top-1/2
          h-[380px]
          w-[380px]
          -translate-y-1/2
          rounded-full
          bg-[#0a5a3a]/20
          blur-[100px]
        "
      />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1500px]
          items-center
          px-6
          md:px-10
          lg:px-16
          xl:px-20
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[1fr_auto]
            lg:gap-20
          "
        >
          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <div className="max-w-[720px]">
            {/* SMALL LABEL */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#d9ad62]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#e4bd78]
                "
              >
                AlMahdi AgriGroup
              </span>
            </div>

            {/* TITLE */}

            <h1
              className="
                text-[46px]
                font-light
                leading-none
                tracking-[0.18em]
                text-white
                sm:text-[54px]
                md:text-[64px]
                lg:text-[72px]
              "
            >
              contact
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-[560px]
                text-sm
                leading-7
                text-white/65
                md:text-[15px]
              "
            >
              Notre équipe est à votre disposition pour vos
              demandes commerciales, partenariats et projets
              d&apos;exportation.
            </p>

            {/* ADDRESS */}

            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                border-b
                border-white/15
                pb-3
                transition
                duration-300
                hover:border-[#d9ad62]
              "
            >
              <MapPin
                size={17}
                className="text-[#d9ad62]"
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/90
                  sm:text-[11px]
                "
              >
                Hichria, Sidi Bouzid, Tunisia, 9131
              </span>

              <ArrowUpRight
                size={15}
                className="
                  text-[#d9ad62]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* ================================================= */}
          {/* RIGHT LOCATION */}
          {/* ================================================= */}

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir AlMahdi AgriGroup sur Google Maps"
            className="
              group
              relative
              hidden
              h-[210px]
              w-[210px]
              items-center
              justify-center
              lg:flex
              xl:h-[240px]
              xl:w-[240px]
            "
          >
            {/* OUTER RING */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#d9ad62]/15
                transition
                duration-700
                group-hover:scale-105
                group-hover:border-[#d9ad62]/30
              "
            />

            {/* MIDDLE RING */}

            <div
              className="
                absolute
                inset-[28px]
                rounded-full
                border
                border-[#d9ad62]/25
              "
            />

            {/* INNER RING */}

            <div
              className="
                absolute
                inset-[57px]
                rounded-full
                border
                border-[#d9ad62]/40
              "
            />

            {/* CENTER PIN */}

            <div
              className="
                relative
                flex
                h-[72px]
                w-[72px]
                items-center
                justify-center
                rounded-full
                border
                border-[#f1cf91]/50
                bg-[#d9ad62]
                text-[#062016]
                shadow-[0_0_60px_rgba(217,173,98,0.30)]
                transition
                duration-500
                group-hover:scale-110
              "
            >
              <MapPin
                size={29}
                strokeWidth={1.8}
              />
            </div>

            {/* LOCATION LABEL */}

            <div
              className="
                absolute
                -bottom-3
                left-1/2
                min-w-[185px]
                -translate-x-1/2
                rounded-full
                border
                border-white/10
                bg-[#031b12]/80
                px-5
                py-2.5
                text-center
                backdrop-blur-xl
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/80
                "
              >
                Sidi Bouzid · Tunisia
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM DETAILS */}
      {/* ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#d9ad62]/70
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-[8%]
          z-20
          h-[3px]
          w-20
          bg-[#d9ad62]
        "
      />
    </section>
  );
}