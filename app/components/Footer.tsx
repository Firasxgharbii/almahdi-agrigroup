"use client";

import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Music2,
} from "lucide-react";

// =====================================================
// L'HUILERIE
// =====================================================

const huilerieLinks = [
  {
    label: "Notre histoire",
    href: "/notre-groupe",
  },
  {
    label: "Savoir-faire & qualité",
    href: "/qualite",
  },
  {
    label: "Certifications",
    href: "/qualite",
  },
];

// =====================================================
// EXPORT
// =====================================================

const exportLinks = [
  {
    label: "Offre vrac",
    href: "/export",
  },
  {
    label: "Palmarès",
    href: "/awards",
  },
  {
    label: "Demander un devis",
    href: "/contact",
  },
];

// =====================================================
// LE GROUPE
// =====================================================

const groupLinks = [
  {
    label: "AlMahdi AgriGroup",
    href: "/le-groupe",
  },
  {
    label: "Vitale",
    href: "/le-groupe",
  },
  {
    label: "Bio & USDA Organic",
    href: "/qualite",
  },
];

// =====================================================
// FOOTER LINK
// =====================================================

function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        w-fit
        items-center
        gap-2
        text-[15px]
        font-light
        leading-7
        text-white/55
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-[#d6b66f]
      "
    >
      <span>{label}</span>

      <ArrowUpRight
        size={13}
        strokeWidth={1.5}
        className="
          -translate-x-1
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      />
    </Link>
  );
}

// =====================================================
// SOCIAL BUTTON
// =====================================================

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        h-[46px]
        w-[46px]
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        text-white/75
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#d6b66f]
        hover:bg-[#d6b66f]
        hover:text-[#06291d]
        hover:shadow-[0_12px_30px_rgba(214,182,111,0.18)]
      "
    >
      {children}
    </a>
  );
}

// =====================================================
// FOOTER
// =====================================================

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#06291d]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[80px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#d6b66f]/[0.035]
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[160px]
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#d6b66f]/[0.035]
          blur-[120px]
        "
      />

      {/* =====================================================
          TOP GOLD LINE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#d6b66f]/60
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          pb-8
          pt-16
          sm:px-8
          md:px-12
          md:pb-10
          md:pt-20
          lg:px-16
          xl:px-20
        "
      >
        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-x-10
            gap-y-14
            md:grid-cols-2
            lg:grid-cols-[1.45fr_0.9fr_0.9fr_1fr]
            lg:gap-x-14
            xl:grid-cols-[1.55fr_0.85fr_0.85fr_1fr]
            xl:gap-x-20
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-[390px]">
            {/* LOGO */}

            <Link
              href="/"
              aria-label="AlMahdi Olive Oil - Accueil"
              className="inline-flex"
            >
              <div
                className="
                  relative
                  h-[105px]
                  w-[290px]
                  sm:h-[115px]
                  sm:w-[320px]
                "
              >
                <Image
                  src="/logoalmahdi.png"
                  alt="AlMahdi Olive Oil"
                  fill
                  priority
                  sizes="320px"
                  className="
                    object-contain
                    object-left
                  "
                />
              </div>
            </Link>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-[370px]
                text-[15px]
                font-light
                leading-[1.9]
                text-white/55
                sm:text-[16px]
              "
            >
              Huile d&apos;olive extra vierge en vrac, bio et conventionnelle.
              Producteur et exportateur à Sidi Bouzid, Tunisie.
            </p>

            {/* ===============================================
                SOCIAL MEDIA
            =============================================== */}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* FACEBOOK */}

              <SocialButton href="#" label="Facebook">
                <span
                  className="
                    text-[20px]
                    font-semibold
                    leading-none
                  "
                >
                  f
                </span>
              </SocialButton>

              {/* LINKEDIN */}

              <SocialButton href="#" label="LinkedIn">
                <span
                  className="
                    text-[13px]
                    font-bold
                    leading-none
                  "
                >
                  in
                </span>
              </SocialButton>

              {/* INSTAGRAM */}

              <SocialButton href="#" label="Instagram">
                <span
                  className="
                    text-[19px]
                    font-semibold
                    leading-none
                  "
                >
                  ◎
                </span>
              </SocialButton>

              {/* TIKTOK */}

              <SocialButton href="#" label="TikTok">
                <Music2 size={18} strokeWidth={1.7} />
              </SocialButton>
            </div>
          </div>

          {/* =================================================
              L'HUILERIE
          ================================================= */}

          <div>
            <p
              className="
                mb-7
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#d6b66f]
              "
            >
              L&apos;huilerie
            </p>

            <nav
              aria-label="Liens de l'huilerie"
              className="flex flex-col gap-2"
            >
              {huilerieLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </nav>
          </div>

          {/* =================================================
              EXPORT
          ================================================= */}

          <div>
            <p
              className="
                mb-7
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#d6b66f]
              "
            >
              Export
            </p>

            <nav
              aria-label="Liens export"
              className="flex flex-col gap-2"
            >
              {exportLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </nav>
          </div>

          {/* =================================================
              LE GROUPE
          ================================================= */}

          <div>
            <p
              className="
                mb-7
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#d6b66f]
              "
            >
              Le groupe
            </p>

            <nav
              aria-label="Liens du groupe"
              className="flex flex-col gap-2"
            >
              {groupLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}

              {/* LOCATION */}

              <Link
                href="/contact"
                className="
                  group
                  mt-1
                  flex
                  w-fit
                  items-center
                  gap-2
                  text-[15px]
                  font-light
                  leading-7
                  text-white/55
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#d6b66f]
                "
              >
                <MapPin
                  size={14}
                  strokeWidth={1.5}
                  className="
                    shrink-0
                    text-[#d6b66f]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span>Nous trouver sur Google</span>
              </Link>
            </nav>
          </div>
        </div>

        {/* =====================================================
            CONTACT BAR
        ===================================================== */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-5
            border-t
            border-white/10
            py-7
            md:grid-cols-2
            md:items-center
            lg:mt-20
          "
        >
          {/* ADDRESS */}

          <div
            className="
              flex
              items-start
              gap-3
              text-[13px]
              font-light
              leading-6
              text-white/45
            "
          >
            <MapPin
              size={16}
              strokeWidth={1.5}
              className="
                mt-1
                shrink-0
                text-[#d6b66f]
              "
            />

            <p>
              Sidi Bouzid Ouest · El Hichria
              <br />
              Tunisie
            </p>
          </div>

          {/* EMAIL */}

          <div className="md:flex md:justify-end">
            <a
              href="mailto:export.almahdicompany@gmail.com"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-[13px]
                font-light
                text-white/45
                transition-colors
                duration-300
                hover:text-[#d6b66f]
              "
            >
              <Mail
                size={16}
                strokeWidth={1.5}
                className="
                  shrink-0
                  text-[#d6b66f]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />

              <span className="break-all">
                export.almahdicompany@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* =====================================================
            FOOTER BOTTOM
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* COPYRIGHT */}

          <div
            className="
              flex
              flex-col
              gap-2
              text-[11px]
              uppercase
              tracking-[0.08em]
              text-white/35
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-x-5
            "
          >
            <p>© 2026 AlMahdi Olive Oil</p>

            <span
              aria-hidden="true"
              className="
                hidden
                h-3
                w-px
                bg-white/15
                sm:block
              "
            />

            <p>
              Made by{" "}
              <span
                className="
                  font-medium
                  normal-case
                  tracking-normal
                  text-white/55
                  transition-colors
                  duration-300
                  hover:text-[#d6b66f]
                "
              >
                OffClassic Studio Inc.
              </span>
            </p>
          </div>

          {/* BOTTOM LINKS */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
              text-[11px]
              text-white/35
            "
          >
            <Link
              href="/contact"
              className="
                transition-colors
                duration-300
                hover:text-[#d6b66f]
              "
            >
              Contact
            </Link>

            <span
              aria-hidden="true"
              className="
                h-1
                w-1
                rounded-full
                bg-[#d6b66f]/50
              "
            />

            <Link
              href="/#faq"
              className="
                transition-colors
                duration-300
                hover:text-[#d6b66f]
              "
            >
              FAQ
            </Link>

            <span
              aria-hidden="true"
              className="
                h-1
                w-1
                rounded-full
                bg-[#d6b66f]/50
              "
            />

            <Link
              href="/qualite"
              className="
                transition-colors
                duration-300
                hover:text-[#d6b66f]
              "
            >
              Qualité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}