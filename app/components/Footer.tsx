"use client";

import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
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
    href: "/vitale",
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
        w-full
        max-w-[245px]
        items-center
        justify-between
        gap-5
        border-b
        border-white/[0.08]
        py-3
        text-[14px]
        font-light
        tracking-[-0.01em]
        text-[#f5f0e6]/75
        transition-all
        duration-300
        hover:border-[#d6b66f]/35
        hover:text-white
      "
    >
      <span>{label}</span>

      <ArrowRight
        size={14}
        strokeWidth={1.4}
        className="
          shrink-0
          text-[#d6b66f]
          transition-transform
          duration-300
          group-hover:translate-x-1
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
        h-[44px]
        w-[44px]
        items-center
        justify-center
        rounded-full
        border
        border-[#d6b66f]/45
        text-[#f8f4e9]/85
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#d6b66f]
        hover:bg-[#d6b66f]
        hover:text-[#052d20]
        hover:shadow-[0_10px_30px_rgba(214,182,111,0.12)]
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
    <div className="mb-5">
      <p
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.28em]
          text-[#d6b66f]
        "
      >
        {children}
      </p>

      <div className="mt-4 h-px w-10 bg-[#d6b66f]/80" />
    </div>
  );
}

// =====================================================
// CONTACT ITEM
// =====================================================

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 items-center gap-4">
      <div
        className="
          flex
          h-[48px]
          w-[48px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#d6b66f]/45
          text-[#d6b66f]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#d6b66f]
          "
        >
          {title}
        </p>

        <div
          className="
            mt-1.5
            text-[13px]
            font-light
            leading-6
            text-[#f5f0e6]/70
          "
        >
          {children}
        </div>
      </div>
    </div>
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
        border-t
        border-[#d6b66f]/40
        bg-[#032f22]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[80px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#d6b66f]/[0.035]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[240px]
          bottom-[-160px]
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#d6b66f]/[0.035]
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[300px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#0a4a35]/20
          blur-[130px]
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
          max-w-[1320px]
          px-6
          py-14
          sm:px-8
          md:px-10
          lg:px-12
          lg:pb-8
          lg:pt-16
        "
      >
        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-y-12
            md:grid-cols-2
            md:gap-x-14
            lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.05fr]
            lg:items-start
            lg:gap-x-16
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="flex flex-col items-start">
            <Link
              href="/"
              aria-label="AlMahdi Olive Oil - Accueil"
              className="
                inline-flex
                transition-opacity
                duration-300
                hover:opacity-90
              "
            >
              <div
                className="
                  relative
                  h-[105px]
                  w-[180px]
                "
              >
                <Image
                  src="/logoalmahdi.png"
                  alt="AlMahdi Olive Oil"
                  fill
                  priority
                  sizes="180px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p
              className="
                mt-5
                max-w-[345px]
                text-[14px]
                font-light
                leading-[1.85]
                tracking-[-0.01em]
                text-[#f5f0e6]/70
                md:text-[15px]
              "
            >
              Huile d&apos;olive extra vierge en vrac, bio et
              conventionnelle. Producteur et exportateur à Sidi Bouzid,
              Tunisie.
            </p>

            {/* SOCIAL */}

            <div className="mt-7 flex items-center gap-3">
              <SocialButton href="#" label="Facebook">
                <span className="text-[18px] font-medium leading-none">
                  f
                </span>
              </SocialButton>

              <SocialButton href="#" label="LinkedIn">
                <span className="text-[12px] font-semibold leading-none">
                  in
                </span>
              </SocialButton>

              <SocialButton href="#" label="Instagram">
                <span className="text-[18px] font-medium leading-none">
                  ◎
                </span>
              </SocialButton>

              <SocialButton href="#" label="TikTok">
                <Music2 size={17} strokeWidth={1.5} />
              </SocialButton>
            </div>
          </div>

          {/* =================================================
              L'HUILERIE
          ================================================= */}

          <div className="flex flex-col items-start lg:pt-3">
            <ColumnTitle>L&apos;huilerie</ColumnTitle>

            <nav
              aria-label="Liens de l'huilerie"
              className="flex w-full flex-col items-start"
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

          <div className="flex flex-col items-start lg:pt-3">
            <ColumnTitle>Export</ColumnTitle>

            <nav
              aria-label="Liens export"
              className="flex w-full flex-col items-start"
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

          <div className="flex flex-col items-start lg:pt-3">
            <ColumnTitle>Le groupe</ColumnTitle>

            <nav
              aria-label="Liens du groupe"
              className="flex w-full flex-col items-start"
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
                  mt-4
                  flex
                  w-full
                  max-w-[245px]
                  items-center
                  justify-between
                  gap-4
                  text-[14px]
                  font-light
                  text-[#f5f0e6]/75
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <span className="flex items-center gap-2.5">
                  <MapPin
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#d6b66f]"
                  />

                  <span>Nous trouver sur Google</span>
                </span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.4}
                  className="
                    shrink-0
                    text-[#d6b66f]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </nav>
          </div>
        </div>

        {/* ===================================================
            CONTACT + BOTTOM AREA
        =================================================== */}

        <div
          className="
            mt-14
            border-t
            border-[#d6b66f]/25
            pt-6
            lg:mt-16
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[1fr_1fr_auto]
              lg:items-center
              lg:gap-10
            "
          >
            {/* ADDRESS */}

            <ContactItem
              title="Notre adresse"
              icon={
                <MapPin
                  size={19}
                  strokeWidth={1.5}
                />
              }
            >
              Sidi Bouzid Ouest · El Hichria · Tunisie
            </ContactItem>

            {/* EMAIL */}

            <ContactItem
              title="Contact export"
              icon={
                <Mail
                  size={19}
                  strokeWidth={1.5}
                />
              }
            >
              <a
                href="mailto:export.almahdicompany@gmail.com"
                className="
                  break-all
                  transition-colors
                  duration-300
                  hover:text-[#d6b66f]
                "
              >
                export.almahdicompany@gmail.com
              </a>
            </ContactItem>

            {/* SECONDARY LINKS */}

            <nav
              aria-label="Navigation secondaire"
              className="
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-2
                text-[11px]
                font-light
                text-[#f5f0e6]/55
                lg:justify-end
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

              <span className="h-1 w-1 rounded-full bg-[#d6b66f]" />

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

              <span className="h-1 w-1 rounded-full bg-[#d6b66f]" />

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
            </nav>
          </div>

          {/* =================================================
              COPYRIGHT
          ================================================= */}

          <div
            className="
              mt-6
              flex
              flex-col
              gap-3
              border-t
              border-white/[0.07]
              pt-5
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:justify-between
            "
          >
            <div
              className="
                flex
                flex-col
                gap-2
                text-[10px]
                uppercase
                tracking-[0.08em]
                text-[#f5f0e6]/35
                sm:flex-row
                sm:items-center
                sm:gap-4
              "
            >
              <p>© 2026 AlMahdi Olive Oil</p>

              <span
                aria-hidden="true"
                className="
                  hidden
                  h-3
                  w-px
                  bg-[#d6b66f]/30
                  sm:block
                "
              />

              <p>
                Made by{" "}
                <span
                  className="
                    font-normal
                    normal-case
                    tracking-normal
                    text-[#f5f0e6]/55
                  "
                >
                  OffClassic Studio Inc.
                </span>
              </p>
            </div>

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#d6b66f]/45
              "
            >
              Producteur · Exportateur · Tunisie
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}