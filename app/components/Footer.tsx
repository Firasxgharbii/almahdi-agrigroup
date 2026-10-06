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
// LINKS
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
        gap-1.5
        text-[14px]
        font-normal
        leading-6
        text-white/60
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-[#d6b66f]
      "
    >
      <span>{label}</span>

      <ArrowUpRight
        size={12}
        strokeWidth={1.6}
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
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        text-white/70
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#d6b66f]
        hover:bg-[#d6b66f]
        hover:text-[#06291d]
      "
    >
      {children}
    </a>
  );
}

// =====================================================
// COLUMN TITLE
// =====================================================

function ColumnTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mb-6">
      <p
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-[#d6b66f]
        "
      >
        {children}
      </p>

      <div className="mt-3 h-px w-7 bg-[#d6b66f]/60" />
    </div>
  );
}

// =====================================================
// FOOTER
// =====================================================

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06291d] text-white">
      {/* =====================================================
          PREMIUM BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#d6b66f]/[0.035]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#d6b66f]/[0.025]
          blur-[110px]
        "
      />

      {/* GOLD TOP LINE */}

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
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          pb-7
          pt-14
          sm:px-8
          md:px-10
          lg:px-12
          lg:pt-16
        "
      >
        {/* ===================================================
            MAIN FOOTER
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-y-12
            md:grid-cols-2
            md:gap-x-12
            lg:grid-cols-[1.45fr_0.85fr_0.75fr_1fr]
            lg:items-start
            lg:gap-x-14
            xl:gap-x-16
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="flex flex-col items-start">
            <Link
              href="/"
              aria-label="AlMahdi Olive Oil - Accueil"
              className="block"
            >
              <div
                className="
                  relative
                  h-[90px]
                  w-[190px]
                "
              >
                <Image
                  src="/logoalmahdi.png"
                  alt="AlMahdi Olive Oil"
                  fill
                  priority
                  sizes="190px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p
              className="
                mt-5
                max-w-[340px]
                text-[14px]
                font-light
                leading-[1.8]
                text-white/60
              "
            >
              Huile d&apos;olive extra vierge en vrac, bio et
              conventionnelle. Producteur et exportateur à Sidi Bouzid,
              Tunisie.
            </p>

            {/* SOCIAL */}

            <div className="mt-7 flex items-center gap-2.5">
              <SocialButton href="#" label="Facebook">
                <span className="text-[17px] font-semibold leading-none">
                  f
                </span>
              </SocialButton>

              <SocialButton href="#" label="LinkedIn">
                <span className="text-[12px] font-bold leading-none">
                  in
                </span>
              </SocialButton>

              <SocialButton href="#" label="Instagram">
                <span className="text-[17px] font-semibold leading-none">
                  ◎
                </span>
              </SocialButton>

              <SocialButton href="#" label="TikTok">
                <Music2 size={16} strokeWidth={1.7} />
              </SocialButton>
            </div>
          </div>

          {/* =================================================
              HUILERIE
          ================================================= */}

          <div className="flex flex-col items-start lg:pt-4">
            <ColumnTitle>L&apos;huilerie</ColumnTitle>

            <nav
              aria-label="Liens de l'huilerie"
              className="flex flex-col items-start gap-2.5"
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

          <div className="flex flex-col items-start lg:pt-4">
            <ColumnTitle>Export</ColumnTitle>

            <nav
              aria-label="Liens export"
              className="flex flex-col items-start gap-2.5"
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
              GROUPE
          ================================================= */}

          <div className="flex flex-col items-start lg:pt-4">
            <ColumnTitle>Le groupe</ColumnTitle>

            <nav
              aria-label="Liens du groupe"
              className="flex flex-col items-start gap-2.5"
            >
              {groupLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}

              <Link
                href="/contact"
                className="
                  group
                  mt-2
                  flex
                  w-fit
                  items-center
                  gap-2
                  text-[14px]
                  font-normal
                  leading-6
                  text-white/60
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#d6b66f]
                "
              >
                <MapPin
                  size={14}
                  strokeWidth={1.6}
                  className="shrink-0 text-[#d6b66f]"
                />

                <span>Nous trouver sur Google</span>
              </Link>
            </nav>
          </div>
        </div>

        {/* ===================================================
            CONTACT INFORMATION
        =================================================== */}

        <div
          className="
            mt-14
            border-y
            border-white/10
            py-5
            lg:mt-16
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              md:items-center
            "
          >
            {/* LOCATION */}

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d6b66f]/25
                  bg-[#d6b66f]/[0.05]
                "
              >
                <MapPin
                  size={15}
                  strokeWidth={1.6}
                  className="text-[#d6b66f]"
                />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#d6b66f]/70
                  "
                >
                  Notre adresse
                </p>

                <p className="mt-1 text-[13px] text-white/55">
                  Sidi Bouzid Ouest · El Hichria · Tunisie
                </p>
              </div>
            </div>

            {/* EMAIL */}

            <div className="md:flex md:justify-end">
              <a
                href="mailto:export.almahdicompany@gmail.com"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  transition-colors
                  duration-300
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d6b66f]/25
                    bg-[#d6b66f]/[0.05]
                    transition-all
                    duration-300
                    group-hover:border-[#d6b66f]/60
                  "
                >
                  <Mail
                    size={15}
                    strokeWidth={1.6}
                    className="text-[#d6b66f]"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#d6b66f]/70
                    "
                  >
                    Contact export
                  </p>

                  <p
                    className="
                      mt-1
                      text-[13px]
                      text-white/55
                      transition-colors
                      duration-300
                      group-hover:text-[#d6b66f]
                    "
                  >
                    export.almahdicompany@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            pt-6
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
              text-[10px]
              uppercase
              tracking-[0.09em]
              text-white/35
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            <p>© 2026 AlMahdi Olive Oil</p>

            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-white/15 sm:block"
            />

            <p>
              Made by{" "}
              <span
                className="
                  font-medium
                  normal-case
                  tracking-normal
                  text-white/55
                "
              >
                OffClassic Studio Inc.
              </span>
            </p>
          </div>

          {/* BOTTOM NAVIGATION */}

          <nav
            aria-label="Navigation secondaire"
            className="
              flex
              flex-wrap
              items-center
              gap-4
              text-[10px]
              text-white/40
            "
          >
            <Link
              href="/contact"
              className="transition-colors duration-300 hover:text-[#d6b66f]"
            >
              Contact
            </Link>

            <span className="h-1 w-1 rounded-full bg-[#d6b66f]/50" />

            <Link
              href="/#faq"
              className="transition-colors duration-300 hover:text-[#d6b66f]"
            >
              FAQ
            </Link>

            <span className="h-1 w-1 rounded-full bg-[#d6b66f]/50" />

            <Link
              href="/qualite"
              className="transition-colors duration-300 hover:text-[#d6b66f]"
            >
              Qualité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}