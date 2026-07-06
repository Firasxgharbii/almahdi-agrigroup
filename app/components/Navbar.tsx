"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Le Groupe",
    href: "/notre-groupe",
    items: [
      { label: "Notre histoire", href: "/notre-groupe" },
      { label: "Notre savoir-faire", href: "/savoir-faire" },
      { label: "Chiffres clés", href: "/chiffres-cles" },
      { label: "Nos implantations", href: "/implantations" },
    ],
  },
  {
    label: "Nos Sociétés",
    href: "/nos-societes",
    items: [
      { label: "Vitale", href: "/vitale" },
      { label: "Fruits AlMahdi", href: "/fruits-almahdi" },
      { label: "AlMahdi Olive", href: "/almahdi-olive" },
    ],
  },
  {
    label: "Nos Métiers",
    href: "/qualite",
    items: [
      { label: "Production", href: "/production" },
      { label: "Stockage frigorifique", href: "/stockage" },
      { label: "Extraction huile d’olive", href: "/extraction" },
      { label: "Export", href: "/export" },
    ],
  },
  { label: "Qualité & Certifs", href: "/qualite" },
  {
    label: "Médias",
    href: "/actualites",
    items: [
      { label: "Actualités", href: "/actualites" },
      { label: "Médailles IOOC", href: "/awards" },
      { label: "Foires & Salons", href: "/evenements" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href);

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="hidden bg-[#050505] text-white md:block">
        <div className="mx-auto flex h-8 max-w-[1320px] items-center justify-between px-8 text-[11px] font-bold uppercase tracking-[0.08em]">
          <div className="flex items-center gap-5">
            <a href="tel:+21679350170" className="flex items-center gap-2 text-white/80 hover:text-[#f4c430]">
              <Phone size={12} />
              +216 79 350 170
            </a>
            <a href="mailto:contact@almahdiagrigroup.tn" className="flex items-center gap-2 text-white/80 hover:text-[#f4c430]">
              <Mail size={12} />
              contact@almahdiagrigroup.tn
            </a>
          </div>

          <div className="flex items-center gap-5 text-white/80">
            <Link href="/carrieres" className="hover:text-[#f4c430]">Carrières</Link>
            <Link href="/foire" className="hover:text-[#f4c430]">Foire</Link>
            <Link href="/contact" className="hover:text-[#f4c430]">Contact</Link>
            <span className="text-[#f4c430]">FR</span>
          </div>
        </div>
      </div>

      <header className="bg-white/95 shadow-[0_10px_35px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-8">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
            <Image
              src="/logoalmahdi.png"
              alt="AlMahdi AgriGroup"
              width={155}
              height={60}
              priority
              className="h-auto w-[145px]"
            />
          </Link>

          <nav className="hidden items-center gap-2 xl:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex h-[76px] items-center gap-1.5 px-3 text-[12px] font-black uppercase tracking-[0.12em] transition ${
                    isActive(item.href)
                      ? "text-[#075b35]"
                      : "text-[#222] hover:text-[#075b35]"
                  }`}
                >
                  {item.label}
                  {item.items && (
                    <ChevronDown
                      size={13}
                      className="transition group-hover:rotate-180"
                    />
                  )}
                </Link>

                {item.items && (
                  <div className="pointer-events-none absolute left-1/2 top-[68px] w-[270px] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#061b11]/95 p-2 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block rounded-xl px-4 py-3 text-sm font-bold text-white/82 transition hover:bg-white/10 hover:text-[#f4c430]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

        

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#061b11]/15 text-[#061b11] xl:hidden"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-black/10 bg-white px-5 py-4 xl:hidden">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-black/5">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm font-black uppercase tracking-[0.12em] text-[#061b11]"
                >
                  {item.label}
                </Link>

                {item.items && (
                  <div className="pb-3">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl bg-[#f8f3e3] px-4 py-3 text-sm font-semibold text-[#061b11]/70"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}