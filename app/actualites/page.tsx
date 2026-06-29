"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Factory,
  Globe2,
  Leaf,
  Newspaper,
  Search,
  ShieldCheck,
  Sprout,
  Tag,
} from "lucide-react";

const categories = [
  "Toutes",
  "Groupe",
  "Produits",
  "Qualité",
  "Export",
  "Événements",
];

const articles = [
  {
    id: 1,
    title: "AlMahdi AgriGroup renforce sa vision agroalimentaire tunisienne",
    category: "Groupe",
    date: "12 Juin 2025",
    description:
      "Une nouvelle étape pour structurer l’identité du groupe autour du savoir-faire familial, de la qualité et de l’innovation.",
    icon: Sprout,
    featured: true,
  },
  {
    id: 2,
    title: "Mise en valeur des produits agricoles tunisiens",
    category: "Produits",
    date: "08 Juin 2025",
    description:
      "Le groupe poursuit son développement autour des produits agricoles à forte valeur ajoutée et de l’identité locale.",
    icon: Leaf,
    featured: false,
  },
  {
    id: 3,
    title: "Qualité, traçabilité et confiance au cœur de notre démarche",
    category: "Qualité",
    date: "02 Juin 2025",
    description:
      "Une approche claire pour renforcer la confiance des partenaires, des clients et des marchés internationaux.",
    icon: ShieldCheck,
    featured: false,
  },
  {
    id: 4,
    title: "Développement export : une ouverture vers de nouveaux marchés",
    category: "Export",
    date: "28 Mai 2025",
    description:
      "AlMahdi AgriGroup prépare une présence plus structurée pour répondre aux opportunités à l’international.",
    icon: Globe2,
    featured: false,
  },
  {
    id: 5,
    title: "Modernisation de la transformation agroalimentaire",
    category: "Groupe",
    date: "20 Mai 2025",
    description:
      "Une vision moderne pour accompagner la production, la transformation et la valorisation des produits.",
    icon: Factory,
    featured: false,
  },
  {
    id: 6,
    title: "Participation aux rencontres professionnelles agroalimentaires",
    category: "Événements",
    date: "14 Mai 2025",
    description:
      "Le groupe développe son réseau professionnel et renforce ses échanges avec les acteurs du secteur.",
    icon: Newspaper,
    featured: false,
  },
];

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [search, setSearch] = useState("");

  const featuredArticle = articles.find((article) => article.featured);
  const normalArticles = articles.filter((article) => !article.featured);

  const filteredArticles = useMemo(() => {
    return normalArticles.filter((article) => {
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
    <main className="min-h-screen bg-[#F8F3E3] text-[#061B11]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#061B11] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(244,196,48,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(8,113,63,0.42),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#F4C430_1px,transparent_1px),linear-gradient(#F4C430_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#F4C430]">
              <Newspaper size={17} />
              Actualités du groupe
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
              Nos actualités, projets et développements
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Suivez les nouvelles d’AlMahdi AgriGroup : produits agricoles,
              qualité, export, innovation et développement agroalimentaire.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredArticle && (
        <section className="mx-auto max-w-7xl px-5 pt-14 md:px-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-[36px] bg-white shadow-2xl shadow-[#075B35]/10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#075B35]/10 px-4 py-2 text-sm font-black text-[#075B35]">
                <Tag size={16} />
                À la une
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
                {featuredArticle.title}
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#536359]">
                {featuredArticle.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm font-semibold text-[#536359]">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={17} className="text-[#C79A00]" />
                  {featuredArticle.date}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-[#F8F3E3] px-4 py-2 text-[#075B35]">
                  {featuredArticle.category}
                </span>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B35] px-7 py-4 font-black text-white shadow-lg shadow-[#075B35]/20 transition hover:bg-[#06482B]"
              >
                Nous contacter
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="relative min-h-[320px] bg-[#075B35] p-8 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(244,196,48,0.26),transparent_32%),linear-gradient(135deg,#075B35,#061B11)]" />
              <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(90deg,#F4C430_1px,transparent_1px),linear-gradient(#F4C430_1px,transparent_1px)] bg-[size:42px_42px]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F4C430] text-[#061B11] shadow-xl">
                  <Sprout size={34} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F4C430]">
                    AlMahdi AgriGroup
                  </p>
                  <p className="mt-4 text-4xl font-black leading-none">
                    5ème génération
                  </p>
                  <p className="mt-4 max-w-sm text-white/75">
                    Une entreprise familiale tunisienne tournée vers la qualité,
                    la modernisation et l’avenir agroalimentaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-5 pt-12 md:px-8">
        <div className="flex flex-col gap-5 rounded-[30px] border border-[#075B35]/10 bg-white/70 p-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-black transition ${
                  selectedCategory === category
                    ? "bg-[#075B35] text-white shadow-lg shadow-[#075B35]/20"
                    : "bg-[#F8F3E3] text-[#075B35] hover:bg-[#075B35]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-[320px]">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#075B35]"
            />

            <input
              type="text"
              placeholder="Rechercher une actualité..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-full border border-[#075B35]/10 bg-[#F8F3E3] pl-11 pr-4 text-sm outline-none transition placeholder:text-[#7A867F] focus:border-[#075B35] focus:ring-4 focus:ring-[#075B35]/10"
            />
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#C79A00]">
              Publications
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] md:text-4xl">
              Dernières actualités
            </h2>
          </div>

          <p className="hidden text-sm font-semibold text-[#66756C] md:block">
            {filteredArticles.length} actualité
            {filteredArticles.length > 1 ? "s" : ""} trouvée
            {filteredArticles.length > 1 ? "s" : ""}
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredArticles.map((article) => {
              const Icon = article.icon;

              return (
                <article
                  key={article.id}
                  className="group rounded-[32px] border border-[#075B35]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#075B35]/10"
                >
                  <div className="mb-7 flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075B35]/10 text-[#075B35] transition group-hover:bg-[#F4C430] group-hover:text-[#061B11]">
                      <Icon size={27} />
                    </div>

                    <span className="rounded-full bg-[#F8F3E3] px-4 py-2 text-xs font-black text-[#075B35]">
                      {article.category}
                    </span>
                  </div>

                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#758077]">
                    <CalendarDays size={16} className="text-[#C79A00]" />
                    {article.date}
                  </div>

                  <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-[#061B11]">
                    {article.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#5A6B61]">
                    {article.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 font-black text-[#075B35] transition hover:text-[#C79A00]"
                  >
                    Lire plus
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-[30px] border border-[#075B35]/10 bg-white p-10 text-center shadow-sm">
            <p className="text-xl font-black text-[#061B11]">
              Aucune actualité trouvée.
            </p>
            <p className="mt-3 text-[#5A6B61]">
              Essayez une autre catégorie ou un autre mot-clé.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="overflow-hidden rounded-[36px] bg-[#061B11] p-8 text-white shadow-2xl shadow-[#061B11]/20 md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[#F4C430]">
                Restez informé
              </p>

              <h2 className="text-3xl font-black tracking-[-0.03em] md:text-5xl">
                Vous souhaitez suivre nos nouveautés ?
              </h2>

              <p className="mt-5 max-w-2xl text-white/75 leading-8">
                Contactez-nous pour recevoir les informations liées aux produits,
                aux partenariats et au développement du groupe.
              </p>
            </div>

            <div className="flex md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#F4C430] px-7 py-4 font-black text-[#061B11] transition hover:bg-[#FFE27A]"
              >
                Contacter le groupe
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}