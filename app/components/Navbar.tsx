"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "LE GROUPE", href: "/notre-groupe" },
  { label: "NOS MARQUES", href: "/nos-societes" },
  { label: "NOS MÉTIERS", href: "/qualite" },
  { label: "DÉVELOPPEMENT DURABLE", href: "/developpement-durable" },
  { label: "RECHERCHE ET DÉVELOPPEMENT", href: "/recherche-developpement" },
  { label: "MÉDIA", href: "/actualites" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      {/* BARRE NOIRE COMME CHO */}
      <div className="hidden h-[38px] w-full bg-black text-white md:block">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5 text-[12px] font-bold uppercase">
          <div className="flex items-center gap-5">
            <a href="tel:+21679350170" className="hover:text-[#f4c430]">
              APPELEZ-NOUS (+216) 79 350 170
            </a>

            <span className="text-white/40">|</span>

            <a
              href="mailto:contact@almahdiagrigroup.tn"
              className="hover:text-[#f4c430]"
            >
              CONTACT@ALMAHDIAGRIGROUP.TN
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/carrieres" className="hover:text-[#f4c430]">
              CARRIÈRES
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/export" className="hover:text-[#f4c430]">
              FOIRE
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/contact" className="hover:text-[#f4c430]">
              CONTACT
            </Link>
            <span className="text-white/40">|</span>
            <span className="cursor-pointer hover:text-[#f4c430]">FR</span>
          </div>
        </div>
      </div>

      {/* NAVBAR BLANCHE */}
      <header className="w-full border-b border-[#e8e8e8] bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/logoalmahdi.png"
              alt="AlMahdi AgriGroup"
              width={150}
              height={60}
              priority
              className="h-auto w-[135px]"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-extrabold uppercase transition hover:text-[#075B35] ${
                  isActive(link.href) ? "text-[#075B35]" : "text-[#222]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center border border-gray-200 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-gray-200 bg-white p-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-gray-100 px-3 py-4 text-sm font-bold uppercase text-[#222]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}