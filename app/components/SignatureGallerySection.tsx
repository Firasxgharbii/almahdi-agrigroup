"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CalendarDays, Search } from "lucide-react";

import AwardsSection from "../components/AwardsSection";
import SignatureGallerySection from "../components/SignatureGallerySection";

const futuraLight = {
  fontFamily:
    '"FuturaLightCustom","Futura W02 Light","Futura PT","Futura","Avenir Next","Helvetica Neue",Arial,sans-serif',
  fontWeight: 300,
};

const categories = [
  "Toutes",
  "Groupe",
  "Produits",
  "Qualité",
  "Export",
  "Événements",
];

const mediaTabs = ["Actualités", "Médailles IOOC", "Foires & Salons"];

const articles = [
  {
    id: 1,
    title: "AlMahdi AgriGroup renforce sa vision agroalimentaire tunisienne",
    category: "Groupe",
    date: "12 Juin 2025",
    description:
      "Une nouvelle étape pour structurer l’identité du groupe autour du savoir-faire familial, de la qualité et de l’innovation.",
    image: "/images/olivehero3.jpg",
  },
  {
    id: 2,
    title: "Mise en valeur des produits agricoles tunisiens",
    category: "Produits",
    date: "08 Juin 2025",
    description:
      "Le groupe poursuit son développement autour des produits agricoles à forte valeur ajoutée et de l’identité locale.",
    image: "/images/olivehero5.jpg",
  },
  {
    id: 3,
    title: "Qualité, traçabilité et confiance au cœur de notre démarche",
    category: "Qualité",
    date: "02 Juin 2025",
    description:
      "Une approche claire pour renforcer la confiance des partenaires, des clients et des marchés internationaux.",
    image: "/images/olivehero4.jpg",
  },
  {
    id: 4,
    title: "Développement export : une ouverture vers de nouveaux marchés",
    category: "Export",
    date: "28 Mai 2025",
    description:
      "AlMahdi AgriGroup prépare une présence plus structurée pour répondre aux opportunités à l’international.",
    image: "/images/olivehero6.jpg",
  },
];

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Actualités");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchCategory =
        selectedCategory === "Toutes" || article.category === selectedCategory;

      const matchSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.description.toLowerCase().includes(search.toLowerCase()) ||
        article.category.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, search]);

  return (
    <>
      <main className="min-h-screen bg-[#f7f5f1] text-[#3d3834]">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <Image
            src="/images/olivehero3.jpg"
            alt="Actualités AlMahdi AgriGroup"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-white/78" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/75 to-[#f7f5f1]" />

          <div className="relative z-10 flex min-h-[520px] flex-col items-center justify-center px-6 text-center">
            <p
              style={futuraLight}
              className="mb-8 text-[13px] uppercase tracking-[0.55em] text-[#a09087]"
            >
              ALMAHDI AGRIGROUP
            </p>

            <h1
              style={futuraLight}
              className="max-w-6xl text-[42px] lowercase leading-[1.15] tracking-[0.18em] text-[#74645d] md:text-[64px] lg:text-[82px]"
            >
              actualités et publications
            </h1>

            <p
              style={futuraLight}
              className="mt-10 max-w-3xl text-[18px] leading-9 tracking-[0.08em] text-[#84756d]"
            >
              Suivez les nouvelles du groupe, les projets, les produits
              agricoles, la qualité, l’export et le développement
              agroalimentaire.
            </p>
          </div>
        </section>

        {/* MEDIA TABS */}
        <section className="mx-auto max-w-[1500px] px-8 pt-14 md:px-12 lg:px-16">
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {mediaTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={futuraLight}
                className={`rounded-full px-7 py-3 text-[13px] uppercase tracking-[0.25em] transition ${
                  activeTab === tab
                    ? "bg-[#061b11] text-[#f4c430]"
                    : "border border-[#cfc6bf] text-[#8a7d76] hover:border-[#061b11] hover:text-[#061b11]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {activeTab === "Médailles IOOC" && <AwardsSection />}

        {activeTab === "Foires & Salons" && <SignatureGallerySection />}

        {activeTab === "Actualités" && (
          <section className="mx-auto max-w-[1500px] px-8 pb-24 md:px-12 lg:px-16">
            {/* FILTERS */}
            <div className="mb-16 flex flex-col gap-8 border-b border-[#ded8d2] pb-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={futuraLight}
                    className={`text-[13px] uppercase tracking-[0.22em] transition ${
                      selectedCategory === category
                        ? "text-[#5d524b] underline underline-offset-[10px]"
                        : "text-[#a2938a] hover:text-[#5d524b]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:w-[340px]">
                <Search
                  size={16}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-[#9a8a80]"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="rechercher..."
                  style={futuraLight}
                  className="h-12 w-full border-0 border-b border-[#bdb4ad] bg-transparent pl-8 text-[14px] tracking-[0.15em] text-[#5d524b] outline-none placeholder:text-[#aaa09a]"
                />
              </div>
            </div>

            {/* ARTICLES */}
            <div className="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link key={article.id} href="/contact" className="group block">
                  <article className="relative min-h-[520px] overflow-hidden bg-[#d8d2ca]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover brightness-[0.88] contrast-[0.92] saturate-[0.85] transition duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-white/35 transition duration-500 group-hover:bg-white/22" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-white/15" />

                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span
                          style={futuraLight}
                          className="text-[12px] uppercase tracking-[0.28em] text-white"
                        >
                          {article.category}
                        </span>

                        <span className="flex items-center gap-2 text-[12px] text-white/85">
                          <CalendarDays size={14} />
                          {article.date}
                        </span>
                      </div>

                      <h2
                        style={futuraLight}
                        className="text-[25px] lowercase leading-[1.35] tracking-[0.12em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] md:text-[30px]"
                      >
                        {article.title}
                      </h2>

                      <p className="mt-5 text-[14px] leading-7 tracking-[0.04em] text-white/85">
                        {article.description}
                      </p>

                      <p
                        style={futuraLight}
                        className="mt-7 text-[12px] uppercase tracking-[0.28em] text-white/80 transition group-hover:text-white"
                      >
                        lire l’article
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <style jsx global>{`
        @font-face {
          font-family: "FuturaLightCustom";
          src: url("/fonts/Futura-Light.woff2") format("woff2");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </>
  );
}