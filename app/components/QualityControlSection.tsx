"use client";

import { useEffect, useRef, useState } from "react";
import {
  Beaker,
  ShieldCheck,
  Clock3,
  Check,
  Sparkles,
} from "lucide-react";

const controls = [
  {
    icon: Beaker,
    title: "Laboratoire interne",
    description:
      "Suivi de chaque lot, assemblage et stockage pilotés par la donnée.",
  },
  {
    icon: ShieldCheck,
    title: "Partenariat SGS",
    description:
      "Contrôles indépendants par SGS Tunisie, accrédité ISO/IEC 17025 (TUNAC n°1-0008) et reconnu par le Conseil Oléicole International.",
  },
  {
    icon: Clock3,
    title: "Démarche ISO 22000",
    description:
      "Notre process applique les exigences de la norme ISO 22000 ; la certification est en cours.",
  },
];

export default function QualityControlSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

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

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let current = 0;

    const interval = window.setInterval(() => {
      current += 1;

      setCount(current);

      if (current >= 3) {
        window.clearInterval(interval);
      }
    }, 280);

    return () => window.clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f7f1e3]
        px-6
        py-24
        text-[#123c2d]
        sm:px-8
        md:py-28
        lg:px-12
        lg:py-32
      "
    >
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[40px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#c7a36b]/[0.08]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[230px]
          right-[-160px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#0a5138]/[0.06]
          blur-[140px]
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
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
            xl:gap-28
          "
        >
          {/* =================================================
              LEFT — BIG 3
          ================================================= */}

          <div
            className={`
              relative
              transition-all
              duration-[1200ms]
              ease-out

              ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-14 opacity-0"
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
                border
                border-[#123c2d]/5
                bg-[#eee5cf]
                md:min-h-[560px]
              "
            >
              {/* LIGHT */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[330px]
                  w-[330px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#c6a269]/10
                  blur-[90px]
                "
              />

              {/* TOP DECORATION */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -left-10
                  top-[110px]
                  h-px
                  w-[55%]
                  rotate-[-13deg]
                  bg-gradient-to-r
                  from-transparent
                  via-[#b78d52]/55
                  to-transparent
                "
              />

              {/* BOTTOM DECORATION */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-12
                  bottom-[120px]
                  h-px
                  w-[60%]
                  rotate-[12deg]
                  bg-gradient-to-l
                  from-transparent
                  via-[#b78d52]/55
                  to-transparent
                "
              />

              {/* LEAVES */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[13%]
                  top-[17%]
                  flex
                  rotate-[-12deg]
                  gap-5
                "
              >
                {[0, 1, 2, 3, 4].map((leaf) => (
                  <span
                    key={leaf}
                    className={`
                      h-3
                      w-7
                      rounded-[100%_0]
                      bg-[#b58a4f]/55
                      transition-all
                      duration-700

                      ${
                        visible
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${500 + leaf * 120}ms`,
                    }}
                  />
                ))}
              </div>

              {/* NUMBER */}

              <div className="relative z-10 text-center">
                <span
                  className="
                    block
                    font-serif
                    text-[155px]
                    font-light
                    leading-none
                    text-[#123c2d]
                    sm:text-[180px]
                    lg:text-[195px]
                  "
                >
                  {count}
                </span>

                <div
                  className={`
                    mt-3
                    transition-all
                    delay-700
                    duration-1000

                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }
                  `}
                >
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <span className="h-px w-7 bg-[#b1874d]/50" />

                    <Sparkles
                      size={12}
                      className="text-[#a87c44]"
                    />

                    <span className="h-px w-7 bg-[#b1874d]/50" />
                  </div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.42em]
                      text-[#a4773f]
                      sm:text-[11px]
                    "
                  >
                    niveaux de contrôle
                  </p>
                </div>
              </div>

              {/* INNER FRAME */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-5
                  border
                  border-[#b1874d]/10
                  transition-all
                  duration-700
                  group-hover:inset-7
                  group-hover:border-[#b1874d]/25
                "
              />
            </div>
          </div>

          {/* =================================================
              RIGHT
          ================================================= */}

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
                    : "translate-x-8 opacity-0"
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
                Notre système qualité
              </p>
            </div>

            {/* TITLE */}

            <h2
              className={`
                mt-8
                max-w-[700px]
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
              Contrôlée à
              <br />

              <span className="italic text-[#9d733f]">
                chaque lot.
              </span>
            </h2>

            {/* CONTROLS */}

            <div className="mt-12">
              {controls.map((control, index) => {
                const Icon = control.icon;

                return (
                  <article
                    key={control.title}
                    className={`
                      group
                      relative
                      grid
                      grid-cols-[55px_1fr]
                      gap-5
                      border-b
                      border-[#123c2d]/10
                      py-7
                      transition-all
                      duration-700

                      ${
                        visible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-12 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${350 + index * 180}ms`,
                    }}
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#b1874d]/25
                        text-[#a4773f]
                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:border-[#a4773f]
                        group-hover:bg-[#a4773f]
                        group-hover:text-white
                      "
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </div>

                    {/* TEXT */}

                    <div>
                      <div className="flex items-center gap-3">
                        <h3
                          className="
                            text-[20px]
                            font-semibold
                            tracking-[-0.02em]
                            text-[#153d2f]
                            transition-colors
                            duration-300

                            group-hover:text-[#9d733f]
                          "
                        >
                          {control.title}
                        </h3>

                        <span
                          className="
                            text-[9px]
                            font-bold
                            text-[#a4773f]/45
                          "
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <p
                        className="
                          mt-3
                          max-w-[680px]
                          text-[14px]
                          font-light
                          leading-7
                          text-[#65766f]
                          md:text-[15px]
                        "
                      >
                        {control.description}
                      </p>
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
                        duration-700
                        group-hover:w-full
                      "
                    />
                  </article>
                );
              })}
            </div>

            {/* QUALITY SIGNATURE */}

            <div
              className={`
                mt-9
                flex
                items-center
                gap-4
                transition-all
                delay-1000
                duration-1000

                ${visible ? "opacity-100" : "opacity-0"}
              `}
            >
              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#123c2d]
                  text-[#f5e6c7]
                "
              >
                <Check size={13} strokeWidth={2.5} />
              </div>

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#9d733f]
                "
              >
                Contrôle · Analyse · Traçabilité
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

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
            delay-[1200ms]
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
            Laboratoire · SGS · ISO 22000
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
              AlMahdi Olive Oil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}