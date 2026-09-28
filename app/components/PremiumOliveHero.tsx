"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Leaf,
  Play,
  ShieldCheck,
} from "lucide-react";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function PremiumOliveHero() {
  return (
    <section
      className={`
        ${bodyFont.className}
        relative
        isolate
        min-h-[calc(100vh-108px)]
        overflow-hidden
        bg-[#062b1d]
        text-white
      `}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">
        <div
          className="
            absolute
            inset-0
            scale-[1.02]
            bg-[url('/images/olivehero.png')]
            bg-cover
            bg-center
            bg-no-repeat
            animate-[heroZoom_18s_ease-in-out_infinite_alternate]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(2,27,18,0.96)_0%,rgba(2,27,18,0.86)_38%,rgba(2,27,18,0.45)_67%,rgba(2,27,18,0.30)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.02)_50%,rgba(0,0,0,0.35)_100%)]
          "
        />
      </div>

      {/* =====================================================
          DECORATIVE GLOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/2
          h-[600px]
          w-[600px]
          -translate-y-1/2
          rounded-full
          bg-[#d3a866]/10
          blur-[150px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-108px)]
          w-full
          max-w-[1500px]
          grid-cols-1
          items-center
          gap-14
          px-6
          py-16
          md:px-10
          lg:grid-cols-[0.92fr_1.08fr]
          lg:px-16
          xl:px-20
        "
      >
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="relative z-20 max-w-[720px]">
          {/* EYEBROW */}

          <div className="hero-fade-up mb-7 flex items-center gap-4">
            <span className="h-px w-8 bg-[#d7b06a]" />

            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#dfbd7b]
                sm:text-xs
              "
            >
              Producteur & exportateur · Tunisie
            </p>
          </div>

          {/* TITLE */}

          <h1
            className={`
              ${displayFont.className}
              hero-title
              max-w-[720px]
              text-[52px]
              font-medium
              leading-[0.91]
              tracking-[-0.045em]
              text-[#f8f2e7]
              sm:text-[68px]
              md:text-[82px]
              lg:text-[76px]
              xl:text-[94px]
            `}
          >
            L’huile d’olive

            <span
              className="
                block
                py-2
                italic
                text-[#d9ad69]
              "
            >
              tunisienne
            </span>

            à son excellence.
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              hero-fade-up
              mt-8
              max-w-[620px]
              text-[15px]
              font-normal
              leading-7
              text-white/75
              sm:text-base
              md:text-[17px]
              md:leading-8
            "
          >
            Cinq générations de savoir-faire agricole au service d’une
            huile d’olive tunisienne authentique, sélectionnée avec
            exigence et destinée aux marchés internationaux.
          </p>

          {/* INTERNATIONAL INFO */}

          <div
            className="
              hero-fade-up
              mt-5
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#d7b06a]
              sm:text-[11px]
            "
          >
            <span>Extra Virgin Olive Oil</span>

            <span className="h-1 w-1 rounded-full bg-[#d7b06a]" />

            <span>Organic</span>

            <span className="h-1 w-1 rounded-full bg-[#d7b06a]" />

            <span>Producer & Exporter</span>
          </div>

          {/* BUTTONS */}

          <div
            className="
              hero-fade-up
              mt-9
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                group
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                gap-4
                bg-[#d7ad6a]
                px-7
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-[#082c1f]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-[#e5c486]
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]
              "
            >
              Demander un devis

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/notre-groupe"
              className="
                group
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                gap-3
                border-b
                border-white/40
                px-3
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:border-[#d7ad6a]
                hover:text-[#d7ad6a]
              "
            >
              Découvrir notre histoire

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}

          <div
            className="
              hero-fade-up
              mt-12
              grid
              max-w-[620px]
              grid-cols-3
              border-t
              border-[#d7ad6a]/30
              pt-6
            "
          >
            <div className="border-r border-white/10 pr-4">
              <p
                className={`
                  ${displayFont.className}
                  text-3xl
                  text-[#f4ead9]
                  md:text-4xl
                `}
              >
                +1 500 t
              </p>

              <p className="mt-1 text-[11px] text-white/50">
                par saison
              </p>
            </div>

            <div className="border-r border-white/10 px-5">
              <p
                className={`
                  ${displayFont.className}
                  text-3xl
                  text-[#f4ead9]
                  md:text-4xl
                `}
              >
                5
              </p>

              <p className="mt-1 text-[11px] text-white/50">
                générations
              </p>
            </div>

            <div className="pl-5">
              <p
                className={`
                  ${displayFont.className}
                  text-3xl
                  text-[#f4ead9]
                  md:text-4xl
                `}
              >
                8
              </p>

              <p className="mt-1 text-[11px] text-white/50">
                médailles
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — VIDEO
        ===================================================== */}

        <div
          className="
            hero-video
            relative
            hidden
            min-h-[650px]
            items-center
            justify-end
            lg:flex
          "
        >
          <div
            className="
              relative
              h-[590px]
              w-full
              max-w-[590px]
              overflow-hidden
              border
              border-white/15
              bg-black/15
              shadow-[0_40px_100px_rgba(0,0,0,0.35)]
              backdrop-blur-[2px]
            "
          >
            {/*
              ==================================================
              ESPACE RÉSERVÉ À TA VIDÉO

              Quand ta vidéo sera prête :

              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source
                  src="/videos/almahdi.mp4"
                  type="video/mp4"
                />
              </video>
              ==================================================
            */}

            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.28))]
              "
            />

            {/* VIDEO LABEL */}

            <div
              className="
                absolute
                left-8
                top-8
                flex
                items-center
                gap-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-white/65
              "
            >
              <span className="h-px w-8 bg-[#d7ad6a]" />
              AlMahdi Olive
            </div>

            {/* PLAY BUTTON */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <div
                className="
                  group
                  flex
                  h-[82px]
                  w-[82px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:scale-110
                  hover:border-[#d7ad6a]
                  hover:bg-[#d7ad6a]
                  hover:text-[#062b1d]
                "
              >
                <Play
                  size={25}
                  fill="currentColor"
                  className="ml-1"
                />
              </div>
            </div>

            {/* VIDEO TEXT */}

            <div className="absolute bottom-8 left-8 right-8">
              <p
                className={`
                  ${displayFont.className}
                  text-3xl
                  leading-tight
                  text-white
                `}
              >
                De nos oliveraies
                <br />
                au monde.
              </p>

              <p className="mt-3 max-w-[380px] text-xs leading-5 text-white/55">
                Une production tunisienne portée par l’héritage,
                la qualité et une vision internationale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CERTIFICATIONS
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          pb-10
          md:px-10
          lg:px-16
          xl:px-20
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {/* ECOCERT */}

            <div
              className="
                certification-item
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#d7ad6a]/45
                bg-[#062b1d]/70
                py-2
                pl-2
                pr-5
                backdrop-blur-xl
              "
            >
              <div
                className="
                  relative
                  h-11
                  w-11
                  shrink-0
                  overflow-hidden
                  rounded-full
                "
              >
                <Image
                  src="/images/seal-bio-ecocert.svg"
                  alt="Certification Bio Ecocert"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#d7ad6a]">
                  Certification
                </p>

                <p className="text-xs font-semibold text-white/85">
                  Certifiée Bio · Ecocert
                </p>
              </div>
            </div>

            {/* USDA */}

            <div
              className="
                certification-item
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#d7ad6a]/45
                bg-[#062b1d]/70
                py-2
                pl-2
                pr-5
                backdrop-blur-xl
              "
            >
              <div
                className="
                  relative
                  h-11
                  w-11
                  shrink-0
                  overflow-hidden
                  rounded-full
                "
              >
                <Image
                  src="/images/seal-usda-organic.svg"
                  alt="USDA Organic"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#d7ad6a]">
                  Certification
                </p>

                <p className="text-xs font-semibold text-white/85">
                  USDA Organic · NOP
                </p>
              </div>
            </div>
          </div>

          {/* INTERNATIONAL INFO */}

          <div
            className="
              hidden
              items-center
              gap-6
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white/45
              xl:flex
            "
          >
            <span className="flex items-center gap-2">
              <Leaf size={13} className="text-[#d7ad6a]" />
              Agriculture
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck
                size={13}
                className="text-[#d7ad6a]"
              />
              Traçabilité
            </span>

            <span className="flex items-center gap-2">
              <Globe2
                size={13}
                className="text-[#d7ad6a]"
              />
              Export
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}