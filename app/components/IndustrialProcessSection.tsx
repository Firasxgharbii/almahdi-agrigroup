"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  CircleDot,
  Factory,
  FlaskConical,
  PackageCheck,
  Settings,
  Sparkles,
  Truck,
  Wheat,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Récolte",
    detail: "maturité optimale",
    icon: Wheat,
  },
  {
    number: "02",
    title: "Réception",
    detail: "tri & lavage",
    icon: Truck,
  },
  {
    number: "03",
    title: "Broyage",
    detail: "traitement rapide",
    icon: Settings,
  },
  {
    number: "04",
    title: "Malaxage",
    detail: "T° maîtrisée",
    icon: CircleDot,
  },
  {
    number: "05",
    title: "Extraction",
    detail: "3 lignes",
    icon: Factory,
  },
  {
    number: "06",
    title: "Stockage",
    detail: "cuves inox",
    icon: PackageCheck,
  },
  {
    number: "07",
    title: "Contrôle",
    detail: "labo + SGS",
    icon: FlaskConical,
  },
];

export default function IndustrialProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let current = 0;

    const timer = window.setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= 7) {
        window.clearInterval(timer);
      }
    }, 170);

    return () => window.clearInterval(timer);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f5efdf]
        px-6
        py-24
        text-[#123c2d]

        sm:px-8
        md:py-28
        lg:px-12
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[80px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#c7a269]/[0.08]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[200px]
          right-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0a5138]/[0.06]
          blur-[130px]
        "
      />

      {/* TOP LINE */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-0
          h-px
          w-[88%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#b58a4f]/40
          to-transparent
        "
      />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-16

            lg:grid-cols-[1fr_0.85fr]
            lg:gap-20

            xl:gap-28
          "
        >
          {/* =================================================
              LEFT
          ================================================== */}

          <div>
            {/* LABEL */}

            <div
              className={`
                flex
                items-center
                gap-4
                transition-all
                duration-700

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }
              `}
            >
              <span className="h-px w-9 bg-[#b1874d]" />

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.34em]
                  text-[#a27642]

                  sm:text-[10px]
                "
              >
                Du verger à la cuve
              </p>
            </div>

            {/* TITLE */}

            <h2
              className={`
                mt-8
                max-w-[650px]
                font-serif
                text-[45px]
                font-normal
                leading-[1.02]
                tracking-[-0.04em]
                text-[#123c2d]
                transition-all
                delay-100
                duration-1000

                sm:text-[55px]
                md:text-[64px]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
            >
              Un outil industriel
              <br />

              <span className="italic text-[#9d733f]">
                de premier plan.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className={`
                mt-8
                max-w-[670px]
                text-[16px]
                font-light
                leading-[1.9]
                text-[#526a60]
                transition-all
                delay-200
                duration-1000

                md:text-[17px]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              De la récolte au contrôle final, notre équipe
              d&apos;experts maîtrise la chaîne complète :
              conduite de l&apos;extraction, analyse sensorielle
              et sélection des lots.
            </p>

            {/* =================================================
                7 STEPS
            ================================================== */}

            <div
              className="
                mt-12
                grid
                grid-cols-1
                border-t
                border-[#123c2d]/10

                sm:grid-cols-2
              "
            >
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`
                      group
                      relative
                      border-b
                      border-[#123c2d]/10
                      py-6
                      transition-all
                      duration-700

                      sm:pr-7

                      ${
                        index % 2 === 1
                          ? "sm:border-l sm:pl-7"
                          : ""
                      }

                      ${
                        visible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-7 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${350 + index * 120}ms`,
                    }}
                  >
                    <div
                      className="
                        grid
                        grid-cols-[auto_1fr]
                        gap-4
                      "
                    >
                      {/* NUMBER */}

                      <span
                        className="
                          pt-1
                          font-serif
                          text-[14px]
                          text-[#a4773f]
                        "
                      >
                        {step.number}
                      </span>

                      <div>
                        <div className="flex items-center gap-3">
                          <h3
                            className="
                              text-[17px]
                              font-medium
                              text-[#244a3b]
                              transition-colors
                              duration-300

                              group-hover:text-[#9a6e39]
                            "
                          >
                            {step.title}
                          </h3>

                          <Icon
                            size={15}
                            strokeWidth={1.4}
                            className="
                              text-[#a4773f]/40
                              transition-all
                              duration-500

                              group-hover:rotate-6
                              group-hover:scale-125
                              group-hover:text-[#a4773f]
                            "
                          />
                        </div>

                        <p
                          className="
                            mt-2
                            text-[13px]
                            font-light
                            text-[#66776f]
                          "
                        >
                          {step.detail}
                        </p>
                      </div>
                    </div>

                    {/* HOVER LINE */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-[-1px]
                        left-0
                        h-px
                        w-0
                        bg-[#b1874d]
                        transition-all
                        duration-500

                        group-hover:w-full
                      "
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              RIGHT — BIG 7
          ================================================== */}

          <div
            className={`
              relative
              transition-all
              delay-300
              duration-[1200ms]

              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-14 opacity-0"
              }
            `}
          >
            <div
              className="
                group
                relative
                flex
                min-h-[500px]
                items-center
                justify-center
                overflow-hidden
                rounded-[2px]
                bg-[#073c2b]

                md:min-h-[570px]
              "
            >
              {/* BACKGROUND GLOW */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[380px]
                  w-[380px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#0d6447]/45
                  blur-[90px]
                "
              />

              {/* GRID */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  opacity-[0.05]

                  [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)]
                  [background-size:55px_55px]
                "
              />

              {/* TOP BRANCH */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[-20px]
                  top-[70px]
                  h-px
                  w-[45%]
                  rotate-[-7deg]
                  bg-gradient-to-l
                  from-transparent
                  via-[#c8a86d]/70
                  to-[#c8a86d]/10
                "
              />

              {/* BOTTOM BRANCH */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -left-[20px]
                  bottom-[90px]
                  h-px
                  w-[52%]
                  rotate-[8deg]
                  bg-gradient-to-r
                  from-transparent
                  via-[#c8a86d]/70
                  to-[#c8a86d]/10
                "
              />

              {/* DECORATIVE DOTS */}

              <div className="absolute right-[12%] top-[16%] flex gap-4 opacity-50">
                {[0, 1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className={`
                      block
                      h-2
                      w-4
                      rounded-[100%_0]
                      bg-[#c8a86d]
                      transition-all
                      duration-700

                      ${
                        visible
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${900 + item * 130}ms`,
                      transform: `rotate(${25 + item * 15}deg)`,
                    }}
                  />
                ))}
              </div>

              {/* MAIN NUMBER */}

              <div className="relative z-10 text-center">
                <div
                  className="
                    relative
                    inline-flex
                    items-center
                    justify-center
                  "
                >
                  {/* NUMBER GLOW */}

                  <div
                    aria-hidden="true"
                    className={`
                      absolute
                      h-[170px]
                      w-[170px]
                      rounded-full
                      bg-[#d4b67d]/10
                      blur-[45px]
                      transition-all
                      duration-1000

                      ${
                        visible
                          ? "scale-100 opacity-100"
                          : "scale-50 opacity-0"
                      }
                    `}
                  />

                  <span
                    className="
                      relative
                      font-serif
                      text-[150px]
                      font-light
                      leading-none
                      text-[#f1e4c5]
                      drop-shadow-[0_0_30px_rgba(210,178,113,0.15)]

                      sm:text-[180px]
                      lg:text-[190px]
                    "
                  >
                    {count}
                  </span>
                </div>

                <div
                  className={`
                    mt-4
                    transition-all
                    delay-1000
                    duration-1000

                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }
                  `}
                >
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <span className="h-px w-7 bg-[#c7a46b]/50" />

                    <Sparkles
                      size={12}
                      className="text-[#d0ad70]"
                    />

                    <span className="h-px w-7 bg-[#c7a46b]/50" />
                  </div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.4em]
                      text-[#d0ad70]

                      sm:text-[11px]
                    "
                  >
                    étapes maîtrisées
                  </p>
                </div>
              </div>

              {/* BOTTOM SIGNATURE */}

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  AlMahdi Olive Oil
                </span>

                <div className="flex items-center gap-2">
                  <Check
                    size={11}
                    className="text-[#d0ad70]"
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#d0ad70]/70
                    "
                  >
                    Process maîtrisé
                  </span>
                </div>
              </div>

              {/* BORDER */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-4
                  border
                  border-[#d0ad70]/10
                  transition-all
                  duration-700

                  group-hover:inset-6
                  group-hover:border-[#d0ad70]/20
                "
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SIGNATURE
        ====================================================== */}

        <div
          className={`
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-[#123c2d]/10
            pt-7
            transition-all
            delay-[1300ms]
            duration-1000

            sm:flex-row
            sm:items-center
            sm:justify-between

            ${visible ? "opacity-100" : "opacity-0"}
          `}
        >
          <p
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#123c2d]/35
            "
          >
            Récolte · Extraction · Stockage · Contrôle
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#b1874d]" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#9d733f]
              "
            >
              Du fruit à l&apos;huile
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}