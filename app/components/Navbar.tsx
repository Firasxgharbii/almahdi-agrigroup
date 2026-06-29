"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

const company = {
  name: "AlMahdi AgriGroup",
  tagline: "Groupe Agroalimentaire Tunisien · 5ème Génération",
  phone: "+216 79 350 170",
  email: "contact@almahdiagrigroup.tn",
};

const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Notre Groupe",
    href: "/notre-groupe",
    dropdown: [
      { label: "Notre Histoire", href: "/notre-groupe/histoire" },
      { label: "Notre Savoir-Faire", href: "/notre-groupe/savoir-faire" },
      { label: "Notre Équipe", href: "/notre-groupe/equipe" },
    ],
  },
  {
    label: "Nos Sociétés",
    href: "/nos-societes",
    dropdown: [
      { label: "Vitale", href: "/nos-societes/vitale" },
      { label: "Fruits AlMahdi", href: "/nos-societes/fruits-almahdi" },
      { label: "AlMahdi Olive", href: "/nos-societes/almahdi-olive" },
    ],
  },
  { label: "Qualité", href: "/qualite" },
  {
    label: "Actualités",
    href: "/actualites",
    dropdown: [
      { label: "Médailles IOOC", href: "/actualites/medailles-iooc" },
      { label: "Foires & Salons", href: "/actualites/foires-salons" },
      { label: "Partenariats", href: "/actualites/partenariats" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const languages = ["FR", "EN", "AR"];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("FR");
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<string, boolean>
  >({});

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* TOP BAR DESKTOP */}
      <div className="hidden w-full border-b border-white/10 bg-[#061B11] text-xs text-white md:block">
        <div className="mx-auto flex h-9 w-full max-w-[1600px] items-center justify-between px-6 lg:px-10 xl:px-12">
          <div className="flex items-center gap-6 text-[#F4C430]">
            <a
              href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 whitespace-nowrap transition hover:text-[#FFE27A]"
            >
              <Phone size={14} />
              <span>{company.phone}</span>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 whitespace-nowrap transition hover:text-[#FFE27A]"
            >
              <Mail size={14} />
              <span>{company.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-white/70">
            <Link href="/carrieres" className="transition hover:text-[#F4C430]">
              Carrières
            </Link>

            <span className="text-white/25">|</span>

            <Link href="/export" className="transition hover:text-[#F4C430]">
              Export
            </Link>

            <span className="text-white/25">|</span>

            <Link href="/contact" className="transition hover:text-[#F4C430]">
              Contact
            </Link>

            <div className="flex items-center gap-2 rounded-full border border-[#F4C430]/25 bg-white/[0.04] px-3 py-1 text-[#F4C430]">
              <Globe2 size={14} />

              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="cursor-pointer appearance-none bg-transparent text-xs font-semibold text-[#F4C430] outline-none"
                aria-label="Changer la langue"
              >
                {languages.map((item) => (
                  <option key={item} value={item} className="text-black">
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown size={13} />
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="relative w-full border-b border-white/10 bg-[#075B35]/95 shadow-[0_14px_40px_rgba(0,0,0,0.16)] backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between gap-3 px-4 md:h-[92px] md:px-8 lg:px-10 xl:px-12">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex min-w-0 flex-1 items-center gap-3 md:gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-[#F4C430] text-[#075B35] shadow-[0_10px_24px_rgba(0,0,0,0.2)] md:h-14 md:w-14 md:rounded-[18px]">
              <span className="text-base font-black tracking-[-0.06em] md:text-xl">
                AM
              </span>
            </div>

            <div className="min-w-0">
              <p className="truncate font-serif text-[18px] font-black leading-none tracking-wide text-white md:text-2xl">
                {company.name}
              </p>

              <p className="mt-2 hidden max-w-[390px] text-[10px] font-bold uppercase leading-[1.3] tracking-[0.24em] text-[#F4C430] md:block">
                {company.tagline}
              </p>

              <p className="mt-1 block text-[8px] font-bold uppercase tracking-[0.22em] text-[#F4C430] md:hidden">
                5ème génération
              </p>
            </div>
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#064A2C] px-2 py-2 shadow-inner shadow-black/10 xl:flex">
            {navLinks.map((link) => {
              const hasDropdown = Boolean(link.dropdown?.length);
              const active = isActive(link.href);

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    hasDropdown && setDesktopDropdown(link.label)
                  }
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm transition ${
                      active
                        ? "bg-[#F4C430] font-black text-[#061B11] shadow-[0_8px_22px_rgba(0,0,0,0.16)]"
                        : "font-semibold text-white/84 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition ${
                          desktopDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {hasDropdown && desktopDropdown === link.label && (
                    <div className="absolute left-1/2 top-full z-50 mt-3 w-[270px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-[#075B35]/10 bg-white p-2 text-[#061B11] shadow-2xl shadow-black/20">
                      {link.dropdown?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm font-bold text-[#061B11] transition hover:bg-[#F8F3E3] hover:text-[#075B35]"
                        >
                          {item.label}
                          <ArrowRight size={15} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/contact"
              className="group hidden items-center gap-4 rounded-full bg-[#F4C430] px-6 py-4 font-black text-[#061B11] shadow-[0_14px_30px_rgba(0,0,0,0.22)] transition hover:bg-[#FFE27A] md:inline-flex"
            >
              Demander un devis
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#061B11] text-[#F4C430] transition group-hover:translate-x-1">
                <ArrowRight size={15} />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition hover:bg-white/[0.14] xl:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-[#061B11] shadow-2xl xl:hidden">
            <div className="space-y-4 px-4 py-5">
              {/* MOBILE CONTACT */}
              <div className="grid grid-cols-1 gap-3 rounded-[24px] border border-white/10 bg-white/[0.05] p-4">
                <a
                  href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-3 text-sm font-semibold text-white/85"
                >
                  <Phone size={16} className="text-[#F4C430]" />
                  {company.phone}
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 break-all text-sm font-semibold text-white/85"
                >
                  <Mail size={16} className="text-[#F4C430]" />
                  {company.email}
                </a>
              </div>

              {/* MOBILE LANGUAGE */}
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Globe2 size={16} className="text-[#F4C430]" />
                  <span className="font-semibold">Langue</span>
                </div>

                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="bg-transparent font-bold text-[#F4C430] outline-none"
                  aria-label="Changer la langue"
                >
                  {languages.map((item) => (
                    <option key={item} value={item} className="text-black">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* MOBILE LINKS */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const hasDropdown = Boolean(link.dropdown?.length);
                  const active = isActive(link.href);
                  const expanded = mobileDropdowns[link.label];

                  if (hasDropdown) {
                    return (
                      <div key={link.href}>
                        <button
                          type="button"
                          onClick={() => toggleMobileDropdown(link.label)}
                          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                            active
                              ? "border-[#F4C430]/40 bg-[#F4C430] font-black text-[#061B11]"
                              : "border-white/10 bg-white/[0.05] font-semibold text-white hover:bg-white/[0.1]"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={17}
                            className={`transition ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {expanded && (
                          <div className="ml-4 mt-2 space-y-2 border-l border-[#F4C430]/25 pl-3">
                            <Link
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-[#F4C430] hover:text-[#061B11]"
                            >
                              Voir la page
                              <ArrowRight size={15} />
                            </Link>

                            {link.dropdown?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-[#F4C430] hover:text-[#061B11]"
                              >
                                {item.label}
                                <ArrowRight size={15} />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-4 transition ${
                        active
                          ? "border-[#F4C430]/40 bg-[#F4C430] font-black text-[#061B11]"
                          : "border-white/10 bg-white/[0.05] font-semibold text-white hover:bg-white/[0.1]"
                      }`}
                    >
                      {link.label}
                      <ArrowRight size={16} />
                    </Link>
                  );
                })}
              </nav>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#F4C430] px-5 py-4 font-black text-[#061B11]"
              >
                Demander un devis
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}