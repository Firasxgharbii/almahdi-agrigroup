
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";

import {
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";

// ============================================
// ALMAHDI AGRIGROUP
// WELCOME POPUP
// ============================================

const CONFIG = {
  delay: 1500,
  closeDuration: 350,

  // false : afficher à chaque actualisation
  // true : afficher une fois par session

  showOncePerSession: false,

  storageKey: "almahdi-welcome-v6",

  logo: "/logoalmahdi.png",

  image: "/images/olivehero.png",

  groupUrl: "/notre-groupe",
};

// ============================================
// COMPONENT
// ============================================

export default function WelcomePopup() {
  const [mounted, setMounted] =
    useState(false);

  const [open, setOpen] =
    useState(false);

  const [visible, setVisible] =
    useState(false);

  // IMPORTANT :
  // window.setTimeout retourne un number.

  const closeTimer =
    useRef<number | null>(null);

  const closeButton =
    useRef<HTMLButtonElement | null>(
      null
    );

  // ==========================================
  // OPEN POPUP
  // ==========================================

  useEffect(() => {
    setMounted(true);

    if (CONFIG.showOncePerSession) {
      try {
        const alreadySeen =
          window.sessionStorage.getItem(
            CONFIG.storageKey
          );

        if (alreadySeen === "true") {
          return;
        }
      } catch {
        // Continue without storage.
      }
    }

    const timer = window.setTimeout(
      () => {
        setOpen(true);

        if (CONFIG.showOncePerSession) {
          try {
            window.sessionStorage.setItem(
              CONFIG.storageKey,
              "true"
            );
          } catch {
            // Storage is optional.
          }
        }
      },
      CONFIG.delay
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  // ==========================================
  // CLOSE POPUP
  // ==========================================

  const closePopup = useCallback(() => {
    setVisible(false);

    if (closeTimer.current !== null) {
      window.clearTimeout(
        closeTimer.current
      );

      closeTimer.current = null;
    }

    closeTimer.current =
      window.setTimeout(() => {
        setOpen(false);

        closeTimer.current = null;
      }, CONFIG.closeDuration);
  }, []);

  // ==========================================
  // MODAL BEHAVIOUR
  // ==========================================

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    const previousFocus =
      document.activeElement;

    document.body.style.overflow =
      "hidden";

    const animationTimer =
      window.setTimeout(() => {
        setVisible(true);

        closeButton.current?.focus({
          preventScroll: true,
        });
      }, 30);

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        closePopup();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog =
        document.getElementById(
          "almahdi-welcome-dialog"
        );

      if (!dialog) return;

      const focusable =
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href]'
        );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];

      const last =
        focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();

        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();

        first.focus();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.clearTimeout(
        animationTimer
      );

      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      if (
        previousFocus instanceof HTMLElement
      ) {
        previousFocus.focus({
          preventScroll: true,
        });
      }
    };
  }, [open, closePopup]);

  // ==========================================
  // TIMER CLEANUP
  // ==========================================

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) {
        window.clearTimeout(
          closeTimer.current
        );

        closeTimer.current = null;
      }
    };
  }, []);

  // ==========================================
  // RENDER GUARD
  // ==========================================

  if (!mounted || !open) {
    return null;
  }

  // ==========================================
  // PORTAL
  // ==========================================

  return createPortal(
    <>

      {/* ==================================== */}
      {/* ANIMATIONS */}
      {/* ==================================== */}

      <style>{`

        @keyframes almahdiFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes almahdiZoom {
          from {
            transform: scale(1.12);
          }

          to {
            transform: scale(1);
          }
        }

        @keyframes almahdiLine {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .almahdi-enter {
          animation:
            almahdiFadeUp
            800ms
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            both;
        }

        .almahdi-photo {
          animation:
            almahdiZoom
            8s
            ease-out
            both;
        }

        .almahdi-line {
          transform-origin: center;

          animation:
            almahdiLine
            900ms
            ease-out
            both;
        }

        .almahdi-scroll {
          scrollbar-width: thin;

          scrollbar-color:
            #B7A575
            transparent;
        }

        @media (
          prefers-reduced-motion: reduce
        ) {
          .almahdi-enter,
          .almahdi-photo,
          .almahdi-line {
            animation: none !important;
          }
        }

      `}</style>

      {/* ==================================== */}
      {/* BACKDROP */}
      {/* ==================================== */}

      <div
        className={`
          fixed inset-0
          z-[999999]

          flex
          items-center
          justify-center

          overflow-y-auto

          bg-[#031A12]/85

          p-3
          sm:p-6

          backdrop-blur-md

          transition-opacity
          duration-500

          ${
            visible
              ? "opacity-100"
              : "opacity-0"
          }
        `}

        onMouseDown={(event) => {
          if (
            event.target ===
            event.currentTarget
          ) {
            closePopup();
          }
        }}
      >

        {/* ================================== */}
        {/* MODAL */}
        {/* ================================== */}

        <div
          id="almahdi-welcome-dialog"

          role="dialog"

          aria-modal="true"

          aria-labelledby="almahdi-title"

          aria-describedby="almahdi-description"

          className={`
            almahdi-scroll

            relative
            my-auto

            w-full
            max-w-[470px]

            max-h-[calc(100dvh-24px)]

            overflow-x-hidden
            overflow-y-auto

            rounded-xl

            bg-[#FAF9F4]

            shadow-[0_35px_100px_rgba(0,0,0,0.45)]

            transition-all
            duration-500

            sm:max-h-[calc(100dvh-48px)]

            ${
              visible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-6 scale-95 opacity-0"
            }
          `}
        >

          {/* GOLD ACCENT */}

          <div
            className="
              absolute
              inset-x-0
              top-0

              z-20

              h-[3px]

              bg-gradient-to-r

              from-[#9F874B]
              via-[#E8D49A]
              to-[#9F874B]
            "
          />

          {/* ================================== */}
          {/* CLOSE BUTTON */}
          {/* ================================== */}

          <button
            ref={closeButton}

            type="button"

            onClick={closePopup}

            aria-label="Fermer la fenêtre de bienvenue"

            className="
              absolute
              right-4
              top-4

              z-30

              flex
              h-9
              w-9

              items-center
              justify-center

              rounded-full

              bg-white

              text-[#073C2C]

              shadow-md

              transition-all
              duration-300

              hover:rotate-90
              hover:bg-[#E8D49A]

              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#D9C18A]
            "
          >
            <X
              size={18}
              strokeWidth={1.6}
            />
          </button>

          {/* ================================== */}
          {/* HERO */}
          {/* ================================== */}

          <div
            className="
              relative

              isolate

              min-h-[270px]

              overflow-hidden

              bg-[#073C2C]

              px-6
              pb-8
              pt-9

              text-center

              sm:min-h-[310px]
              sm:px-10
              sm:pt-10
            "
          >

            {/* BACKGROUND IMAGE */}

            <div
              className="
                almahdi-photo

                absolute
                inset-0

                -z-20

                bg-cover
                bg-center
              "

              style={{
                backgroundImage:
                  `url("${CONFIG.image}")`,
              }}
            />

            {/* DARK OVERLAY */}

            <div
              className="
                absolute
                inset-0

                -z-10

                bg-gradient-to-b

                from-[#03291D]/90
                via-[#073C2C]/85
                to-[#03291D]/95
              "
            />

            {/* ================================= */}
            {/* LOGO */}
            {/* ================================= */}

            <div
              className="
                almahdi-enter

                relative

                mx-auto

                h-[70px]
                w-[165px]

                sm:h-[80px]
                sm:w-[185px]
              "
            >

              <Image
                src={CONFIG.logo}

                alt="AlMahdi AgriGroup"

                fill

                sizes="185px"

                unoptimized

                className="
                  object-contain
                  brightness-0
                  invert
                "
              />

            </div>

            {/* DIVIDER */}

            <div
              className="
                almahdi-line

                mx-auto
                mt-5

                h-px
                w-12

                bg-[#D9C18A]
              "
            />

            {/* EYEBROW */}

            <p
              className="
                almahdi-enter

                mt-5

                text-[10px]

                font-semibold

                uppercase

                tracking-[0.24em]

                text-[#E8D49A]
              "

              style={{
                animationDelay: "150ms",
              }}
            >
              Une histoire de famille
            </p>

            {/* TITLE */}

            <h2
              id="almahdi-title"

              className="
                almahdi-enter

                mt-3

                font-serif

                text-[36px]

                leading-[1.1]

                tracking-tight

                text-white

                sm:text-[43px]
              "

              style={{
                animationDelay: "250ms",
              }}
            >
              Bienvenue

              <br />

              chez AlMahdi
            </h2>

            {/* SUBTITLE */}

            <p
              className="
                almahdi-enter

                mt-4

                text-[11px]

                tracking-[0.07em]

                text-[#E8D49A]
              "

              style={{
                animationDelay: "350ms",
              }}
            >
              Cinq générations de savoir-faire
            </p>

          </div>

          {/* ================================== */}
          {/* MAIN CONTENT */}
          {/* ================================== */}

          <div
            className="
              px-6
              pb-7
              pt-7

              text-center

              sm:px-10
              sm:pb-9
              sm:pt-9
            "
          >

            {/* BRAND */}

            <p
              className="
                almahdi-enter

                text-[10px]

                font-semibold

                uppercase

                tracking-[0.22em]

                text-[#A18A51]
              "

              style={{
                animationDelay: "400ms",
              }}
            >
              AlMahdi AgriGroup
            </p>

            {/* DESCRIPTION */}

            <div
              id="almahdi-description"

              className="
                almahdi-enter

                mx-auto
                mt-5

                max-w-[360px]

                space-y-4

                text-[13px]

                leading-[1.85]

                text-[#4C5C51]

                sm:text-[14px]
              "

              style={{
                animationDelay: "500ms",
              }}
            >

              <p>
                Depuis cinq générations,
                notre famille cultive un
                savoir-faire profondément
                lié à la terre tunisienne.
              </p>

              <p>
                Aujourd’hui, cette histoire
                se poursuit à travers des
                activités complémentaires,
                réunies autour d’une même
                exigence : faire les choses
                avec soin et voir plus loin.
              </p>

            </div>

            {/* ================================= */}
            {/* DECORATIVE DIVIDER */}
            {/* ================================= */}

            <div
              className="
                almahdi-enter

                mx-auto
                my-6

                flex
                max-w-[250px]

                items-center
                gap-4
              "

              style={{
                animationDelay: "600ms",
              }}
            >

              <div
                className="
                  h-px
                  flex-1

                  bg-[#D9C18A]/70
                "
              />

              <div
                className="
                  h-[5px]
                  w-[5px]

                  rotate-45

                  bg-[#B79A5D]
                "
              />

              <div
                className="
                  h-px
                  flex-1

                  bg-[#D9C18A]/70
                "
              />

            </div>

            {/* INVITATION */}

            <p
              className="
                almahdi-enter

                mx-auto

                max-w-[350px]

                text-[12px]

                leading-[1.8]

                text-[#667369]

                sm:text-[13px]
              "

              style={{
                animationDelay: "650ms",
              }}
            >
              Découvrez notre groupe,
              nos activités et celles et
              ceux qui font vivre cette
              aventure.
            </p>

            {/* ================================= */}
            {/* MAIN BUTTON */}
            {/* ================================= */}

            <Link
              href={CONFIG.groupUrl}

              onClick={closePopup}

              className="
                almahdi-enter

                group

                mt-7

                flex
                w-full

                items-center
                justify-between

                rounded-md

                bg-[#073C2C]

                px-5
                py-4

                text-[13px]

                font-semibold

                text-white

                transition-all
                duration-300

                hover:bg-[#12543D]

                hover:shadow-lg

                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#073C2C]
              "

              style={{
                animationDelay: "750ms",
              }}
            >

              <span>
                Découvrir notre groupe
              </span>

              <ArrowUpRight
                size={19}

                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />

            </Link>

            {/* ================================= */}
            {/* CONTINUE BUTTON */}
            {/* ================================= */}

            <button
              type="button"

              onClick={closePopup}

              className="
                almahdi-enter

                group

                mt-3

                flex
                w-full

                items-center
                justify-between

                rounded-md

                border
                border-[#D8D5C9]

                px-5
                py-3.5

                text-[12px]

                font-medium

                text-[#244638]

                transition-all
                duration-300

                hover:border-[#073C2C]

                hover:bg-[#F0EFE7]

                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#073C2C]
              "

              style={{
                animationDelay: "850ms",
              }}
            >

              <span>
                Continuer vers le site
              </span>

              <ArrowRight
                size={17}

                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />

            </button>

          </div>

          {/* ================================== */}
          {/* FOOTER */}
          {/* ================================== */}

          <div
            className="
              border-t
              border-[#E6E2D6]

              bg-[#F5F2EA]

              px-5
              py-3

              text-center
            "
          >

            <p
              className="
                text-[9px]

                font-medium

                uppercase

                tracking-[0.2em]

                text-[#8D917F]
              "
            >
              AlMahdi AgriGroup · Tunisie
            </p>

          </div>

        </div>

      </div>

    </>,
    document.body
  );
}