"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

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

// =====================================================
// FONTS
// =====================================================

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// =====================================================
// ANIMATED STAT
// =====================================================

function AnimatedStat({
  value,
  prefix = "",
  suffix = "",
  label,
  delay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let animationFrame = 0;
    let startTime: number | null = null;

    const duration = 1600;

    const timeout = window.setTimeout(() => {
      const animate = (time: number) => {
        if (startTime === null) {
          startTime = time;
        }

        const progress = Math.min(
          (time - startTime) / duration,
          1
        );

        const eased =
          1 - Math.pow(1 - progress, 4);

        setCount(
          Math.round(value * eased)
        );

        if (progress < 1) {
          animationFrame =
            requestAnimationFrame(animate);
        }
      };

      animationFrame =
        requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [visible, value, delay]);

  const formattedValue =
    value >= 1000
      ? count.toLocaleString("fr-FR")
      : count.toString();

  return (
    <div
      ref={ref}
      className={`
        group/stat
        relative
        flex
        min-h-[116px]
        flex-col
        justify-center
        overflow-hidden
        px-3
        py-5
        transition-all
        duration-700

        sm:min-h-[125px]
        sm:px-5

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }
      `}
    >
      {/* GOLD TOP DETAIL */}

      <span
        className="
          absolute
          left-3
          top-0
          h-[2px]
          w-7
          bg-[#d7ad6a]
          transition-all
          duration-700
          group-hover/stat:w-14

          sm:left-5
        "
      />

      {/* NUMBER */}

      <div className="relative z-10 flex items-baseline">
        {prefix && (
          <span
            className={`
              ${displayFont.className}
              mr-0.5
              text-[26px]
              font-semibold
              leading-none
              text-[#d7ad6a]

              sm:text-[31px]
              md:text-[34px]
            `}
          >
            {prefix}
          </span>
        )}

        <span
          className={`
            ${displayFont.className}
            whitespace-nowrap
            text-[34px]
            font-semibold
            leading-none
            tracking-[-0.035em]
            text-[#fff8ea]
            drop-shadow-[0_4px_22px_rgba(215,173,106,0.20)]
            transition-colors
            duration-500

            group-hover/stat:text-[#e7c47f]

            sm:text-[40px]
            md:text-[46px]
          `}
        >
          {formattedValue}
        </span>

        {suffix && (
          <span
            className={`
              ${displayFont.className}
              ml-1
              text-[20px]
              font-semibold
              leading-none
              text-[#d7ad6a]

              sm:text-[24px]
              md:text-[28px]
            `}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* LABEL */}

      <div className="relative z-10 mt-3 flex items-center gap-2">
        <span
          className="
            h-1
            w-1
            shrink-0
            rounded-full
            bg-[#d7ad6a]
            shadow-[0_0_10px_rgba(215,173,106,0.8)]
          "
        />

        <p
          className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white/65

            sm:text-[9px]
            sm:tracking-[0.16em]

            md:text-[10px]
          "
        >
          {label}
        </p>
      </div>

      {/* HOVER GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_25%_50%,rgba(215,173,106,0.12),transparent_68%)]
          opacity-0
          transition-opacity
          duration-500
          group-hover/stat:opacity-100
        "
      />
    </div>
  );
}

// =====================================================
// PREMIUM OLIVE HERO
// =====================================================

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
            bg-[url('/images/olivehero1.png')]
            bg-cover
            bg-center
            bg-no-repeat
            animate-[heroZoom_18s_ease-in-out_infinite_alternate]
          "
        />

        {/* Overlay gauche */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(2,27,18,0.97)_0%,rgba(2,27,18,0.90)_34%,rgba(2,27,18,0.56)_62%,rgba(2,27,18,0.28)_100%)]
          "
        />

        {/* Overlay vertical */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.02)_48%,rgba(0,0,0,0.38)_100%)]
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
          -left-52
          top-1/2
          h-[650px]
          w-[650px]
          -translate-y-1/2
          rounded-full
          bg-[#d3a866]/10
          blur-[160px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          grid
          min-h-[calc(100vh-108px)]
          w-full
          grid-cols-1
          items-center
          gap-12
          px-6
          py-14

          sm:px-8

          md:px-10
          md:py-16

          lg:grid-cols-[minmax(0,760px)_minmax(420px,1fr)]
          lg:gap-12
          lg:pl-6
          lg:pr-10
          lg:py-16

          xl:grid-cols-[minmax(0,760px)_minmax(500px,1fr)]
          xl:gap-16
          xl:pl-8
          xl:pr-14

          2xl:grid-cols-[minmax(0,800px)_minmax(540px,1fr)]
          2xl:gap-20
          2xl:pl-10
          2xl:pr-16
        "
      >
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div
          className="
            relative
            z-20
            w-full
            max-w-[760px]
          "
        >
          {/* EYEBROW */}

         

          {/* =====================================================
              TITLE
          ===================================================== */}

          <h1
            className={`
              ${displayFont.className}
              hero-title
              max-w-[760px]
              text-[52px]
              font-medium
              leading-[0.91]
              tracking-[-0.045em]
              text-[#f8f2e7]

              sm:text-[68px]
              md:text-[82px]
              lg:text-[76px]
              xl:text-[94px]
              2xl:text-[100px]
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

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

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

          {/* =====================================================
              INTERNATIONAL INFO
          ===================================================== */}

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

          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <div
            className="
              hero-fade-up
              mt-9
              flex
              flex-col
              gap-4

              sm:flex-row
              sm:items-center
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
              PREMIUM ANIMATED STATS
          ===================================================== */}

          <div
            className="
              hero-fade-up
              relative
              mt-12
              w-full
              max-w-[650px]
              overflow-hidden
              border-y
              border-[#d7ad6a]/35
              bg-[#031f15]/30
              shadow-[0_18px_60px_rgba(0,0,0,0.12)]
              backdrop-blur-[3px]
            "
          >
            {/* TOP LIGHT */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-24
                w-3/4
                -translate-x-1/2
                bg-[#d7ad6a]/5
                blur-[60px]
              "
            />

            <div className="relative grid grid-cols-3">
              {/* PRODUCTION */}

              <div className="border-r border-[#d7ad6a]/20">
                <AnimatedStat
                  value={2000}
                  prefix="+"
                  suffix="t"
                  label="par saison"
                  delay={0}
                />
              </div>

              {/* GENERATIONS */}

              <div className="border-r border-[#d7ad6a]/20">
                <AnimatedStat
                  value={5}
                  label="générations"
                  delay={150}
                />
              </div>

              {/* AWARDS */}

              <div>
                <AnimatedStat
                  value={9}
                  label="médailles"
                  delay={300}
                />
              </div>
            </div>

            {/* BOTTOM GOLD LIGHT */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-[#d7ad6a]/70
                to-transparent
              "
            />
          </div>

          {/* =====================================================
              CERTIFICATIONS
          ===================================================== */}

          <div
            className="
              hero-fade-up
              mt-10
              flex
              max-w-[650px]
              flex-wrap
              items-center
              gap-3
              border-t
              border-white/10
              pt-6
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
                bg-[#062b1d]/75
                py-2
                pl-2
                pr-5
                backdrop-blur-xl
                transition-all
                duration-300

                hover:border-[#d7ad6a]/80
                hover:bg-[#062b1d]/90
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
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-[#d7ad6a]
                  "
                >
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
                bg-[#062b1d]/75
                py-2
                pl-2
                pr-5
                backdrop-blur-xl
                transition-all
                duration-300

                hover:border-[#d7ad6a]/80
                hover:bg-[#062b1d]/90
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
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-[#d7ad6a]
                  "
                >
                  Certification
                </p>

                <p className="text-xs font-semibold text-white/85">
                  USDA Organic · NOP
                </p>
              </div>
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
              Quand la vidéo sera prête :

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
            */}

            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.30))]
              "
            />

            {/* VIDEO LABEL */}

            <div
              className="
                absolute
                left-8
                top-8
                z-10
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
                z-10
                flex
                items-center
                justify-center
              "
            >
              <button
                type="button"
                aria-label="Lire la vidéo AlMahdi Olive"
                className="
                  group
                  flex
                  h-[82px]
                  w-[82px]
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  text-white
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
              </button>
            </div>

            {/* VIDEO TEXT */}

            <div className="absolute bottom-8 left-8 right-8 z-10">
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

              <p
                className="
                  mt-3
                  max-w-[380px]
                  text-xs
                  leading-5
                  text-white/55
                "
              >
                Une production tunisienne portée par l’héritage,
                la qualité et une vision internationale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM INTERNATIONAL INFO
      ===================================================== */}

      <div
        className="
          relative
          z-20
          hidden
          w-full
          items-center
          justify-end
          gap-6
          px-6
          pb-7
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/45

          md:px-10

          xl:flex
          xl:px-14

          2xl:px-16
        "
      >
        <span className="flex items-center gap-2">
          <Leaf
            size={13}
            className="text-[#d7ad6a]"
          />

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
    </section>
  );
}