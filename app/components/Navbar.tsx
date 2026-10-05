"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Notre histoire",
    href: "/notre-groupe",
  },
  {
    label: "Bio & USDA",
    href: "/qualite",
  },
  {
    label: "Qualité",
    href: "/qualite",
  },
  {
    label: "Offre Vrac",
    href: "/export",
  },
  {
    label: "Palmarès",
    href: "/awards",
  },
  {
    label: "Le Groupe",
    href: "/le-groupe",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ======================================================
     SCROLL
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ======================================================
     ESCAPE
  ====================================================== */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* ======================================================
     BODY LOCK
  ====================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ======================================================
     ACTIVE LINK
  ====================================================== */

  const isActive = (href: string) => {
    if (href.includes("#")) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ==================================================
          NAVBAR
      =================================================== */}

      <header
        className={`
          sticky
          top-0
          z-[100]
          w-full
          border-t-[3px]
          border-[#073d2b]
          border-b
          border-[#073d2b]/10
          bg-[#faf8ef]
          transition-all
          duration-300

          ${
            scrolled
              ? "shadow-[0_10px_35px_rgba(3,35,23,0.10)]"
              : "shadow-none"
          }
        `}
      >
        {/* GOLD LINE */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            h-[3px]
            w-[30%]
            bg-gradient-to-r
            from-[#c49a35]
            via-[#e2c35d]
            to-transparent
          "
        />

        {/* ==================================================
            MAIN CONTAINER
        =================================================== */}

        <div
          className={`
            mx-auto
            flex
            w-full
            max-w-[1380px]
            items-center
            justify-between
            px-5
            transition-all
            duration-300

            sm:px-7
            lg:px-8

            ${
              scrolled
                ? "h-[76px]"
                : "h-[92px]"
            }
          `}
        >
          {/* ==================================================
              LOGO
          =================================================== */}

          <Link
            href="/"
            onClick={closeMenu}
            aria-label="AlMahdi Olive Oil - Accueil"
            className="
              group
              relative
              flex
              shrink-0
              items-center
              justify-center
            "
          >
            {/* subtle glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[70px]
                w-[170px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#c9a53d]/0
                blur-2xl
                transition-all
                duration-500

                group-hover:bg-[#c9a53d]/10
              "
            />

            <div
              className={`
                relative
                z-10
                flex
                shrink-0
                items-center
                justify-center
                transition-all
                duration-300

                ${
                  scrolled
                    ? "h-[68px] w-[175px]"
                    : "h-[82px] w-[190px]"
                }
              `}
            >
              <Image
                src="/logoalmahdi.png"
                alt="AlMahdi Olive Oil"
                width={600}
                height={600}
                priority
                className="
                  h-full
                  w-full
                  object-contain
                  object-center
                  transition-transform
                  duration-300

                  group-hover:scale-[1.04]
                "
              />
            </div>
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <nav
            aria-label="Navigation principale"
            className="
              ml-auto
              hidden
              h-full
              items-center
              xl:flex
            "
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    relative
                    flex
                    h-full
                    items-center
                    justify-center
                    px-[11px]
                  "
                >
                  <span
                    className={`
                      relative
                      z-10
                      whitespace-nowrap
                      text-[10.5px]
                      font-semibold
                      uppercase
                      tracking-[0.09em]
                      transition-colors
                      duration-300

                      ${
                        active
                          ? "text-[#a47b21]"
                          : "text-[#18251e] group-hover:text-[#a47b21]"
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* HOVER BACKGROUND */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[34px]
                      w-[calc(100%-6px)]
                      -translate-x-1/2
                      -translate-y-1/2
                      scale-95
                      rounded-full
                      bg-[#073d2b]/[0.045]
                      opacity-0
                      transition-all
                      duration-300

                      group-hover:scale-100
                      group-hover:opacity-100
                    "
                  />

                  {/* ACTIVE LINE */}

                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      bottom-[15px]
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#c49a35]
                      transition-all
                      duration-300

                      ${
                        active
                          ? "w-[24px] opacity-100"
                          : "w-0 opacity-0 group-hover:w-[20px] group-hover:opacity-100"
                      }
                    `}
                  />
                </Link>
              );
            })}

            {/* SEPARATOR */}

            <div className="mx-3 h-[22px] w-px bg-[#073d2b]/15" />

            {/* ==================================================
                LANGUAGE
            =================================================== */}

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#a47b21]
                "
              >
                FR
              </button>

              <span className="h-[3px] w-[3px] rounded-full bg-[#073d2b]/25" />

              <button
                type="button"
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#073d2b]/45
                  transition-colors
                  duration-300

                  hover:text-[#a47b21]
                "
              >
                EN
              </button>
            </div>

            {/* ==================================================
                CTA
            =================================================== */}

            <Link
              href="/contact"
              className="
                group
                relative
                ml-5
                flex
                h-[45px]
                shrink-0
                items-center
                justify-center
                overflow-hidden
                bg-[#073d2b]
                px-5
                shadow-[0_8px_22px_rgba(7,61,43,0.14)]
                transition-all
                duration-300

                hover:-translate-y-[1px]
                hover:shadow-[0_12px_28px_rgba(7,61,43,0.22)]
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-[#b88b2c]
                  transition-transform
                  duration-300
                  ease-out

                  group-hover:translate-y-0
                "
              />

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  text-[9.5px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white
                "
              >
                Demander un devis

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-[2px]
                    group-hover:-translate-y-[2px]
                  "
                />
              </span>
            </Link>
          </nav>

          {/* ==================================================
              MOBILE BUTTON
          =================================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={menuOpen}
            className="
              ml-auto
              flex
              h-[44px]
              w-[44px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#073d2b]/20
              text-[#073d2b]
              transition-all
              duration-300

              hover:border-[#073d2b]
              hover:bg-[#073d2b]
              hover:text-white

              xl:hidden
            "
          >
            {menuOpen ? (
              <X size={21} strokeWidth={1.7} />
            ) : (
              <Menu size={21} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* ==================================================
            MOBILE MENU
        =================================================== */}

        <div
          className={`
            absolute
            left-0
            top-full
            w-full
            overflow-hidden
            border-t
            border-[#073d2b]/10
            bg-[#faf8ef]
            shadow-[0_25px_50px_rgba(3,35,23,0.15)]
            transition-all
            duration-500

            xl:hidden

            ${
              menuOpen
                ? "visible max-h-[750px] translate-y-0 opacity-100"
                : "invisible max-h-0 -translate-y-3 opacity-0"
            }
          `}
        >
          <div
            className="
              mx-auto
              max-w-[700px]
              px-6
              pb-8
              pt-6
            "
          >
            {/* MOBILE TITLE */}

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#c49a35]" />

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#a47b21]
                "
              >
                AlMahdi Olive Oil
              </p>
            </div>

            {/* MOBILE LINKS */}

            <nav aria-label="Navigation mobile">
              {navItems.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      group
                      flex
                      min-h-[58px]
                      items-center
                      justify-between
                      border-b
                      border-[#073d2b]/10
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          w-[20px]
                          text-[9px]
                          font-semibold
                          text-[#a47b21]/65
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          text-[12px]
                          font-semibold
                          uppercase
                          tracking-[0.1em]
                          transition-all
                          duration-300

                          ${
                            active
                              ? "text-[#a47b21]"
                              : "text-[#16261d] group-hover:text-[#a47b21]"
                          }
                        `}
                      >
                        {item.label}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="
                        text-[#073d2b]/30
                        transition-all
                        duration-300

                        group-hover:-translate-y-[2px]
                        group-hover:translate-x-[2px]
                        group-hover:text-[#a47b21]
                      "
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ==================================================
                MOBILE LANGUAGES
            =================================================== */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#073d2b]/45
                "
              >
                Langue
              </span>

              <div className="flex gap-2">
                <button
                  type="button"
                  className="
                    flex
                    h-9
                    w-[48px]
                    items-center
                    justify-center
                    bg-[#a47b21]
                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  FR
                </button>

                <button
                  type="button"
                  className="
                    flex
                    h-9
                    w-[48px]
                    items-center
                    justify-center
                    border
                    border-[#073d2b]/20
                    text-[10px]
                    font-bold
                    text-[#073d2b]
                  "
                >
                  EN
                </button>
              </div>
            </div>

            {/* ==================================================
                MOBILE CTA
            =================================================== */}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="
                group
                mt-6
                flex
                h-[54px]
                w-full
                items-center
                justify-between
                bg-[#073d2b]
                px-6
                text-white
                transition-colors
                duration-300

                hover:bg-[#0b5139]
              "
            >
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                "
              >
                Demander un devis
              </span>

              <ArrowUpRight
                size={17}
                className="
                  text-[#e0c15b]
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>
        </div>
      </header>

      {/* ==================================================
          MOBILE OVERLAY
      =================================================== */}

      {menuOpen && (
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={closeMenu}
          className="
            fixed
            inset-0
            z-[90]
            bg-[#02150e]/40
            backdrop-blur-[2px]

            xl:hidden
          "
        />
      )}
    </>
  );
}