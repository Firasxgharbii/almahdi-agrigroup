"use client";

import Image from "next/image";
import {
  Globe,
  Link as LinkIcon,
  Share2,
} from "lucide-react";

import SoftPaintingHero from "../components/SoftPaintingHero";
import OrganicCertificationSection from "../components/OrganicCertificationSection";
import IndustrialProcessSection from "../components/IndustrialProcessSection";
import QualityControlSection from "../components/QualityControlSection";

const sections = [
  {
    title: "Qualité supérieure",
    image: "/images/olivehero2.png",
  },
  {
    title: "Traçabilité",
    image: "/images/olivehero3.jpg",
  },
  {
    title: "Certifications",
    image: "/images/olivehero4.jpg",
  },
  {
    title: "Production contrôlée",
    image: "/images/olivehero5.jpg",
  },
  {
    title: "Savoir-faire tunisien",
    image: "/images/olivehero6.jpg",
  },
  {
    title: "Engagement qualité",
    image: "/images/olivehero7.jpg",
  },
  {
    title: "Produits primés",
    image: "/images/olivehero8.jpg",
  },
  {
    title: "Excellence internationale",
    image: "/images/olivehero.png",
  },
];

const paragraphs = [
  "L’olivier a façonné, au fil des millénaires, les paysages, l’histoire, la culture et la gastronomie du bassin méditerranéen, notamment celle de la Tunisie ; berceau de civilisations qui se sont transmis, à travers l’histoire, le savoir-faire de la culture et de la production de l’huile d’olive de père en fils.",

  "En hommage à ce voyage, nous mettons en avant notre savoir-faire, notre exigence de qualité et notre engagement envers une huile d’olive équilibrée, authentique et idéale au quotidien.",

  "Nos produits se distinguent par une excellente tenue à la chaleur sans perdre leurs vertus. Ils accompagnent la cuisine avec des saveurs méditerranéennes pour un voyage goûteux et gourmand.",
];

function SocialIcons() {
  return (
    <div className="mt-7 flex justify-center gap-5">
      <a
        href="#"
        aria-label="Partager"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#4b4b4b]
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#007a3d]
        "
      >
        <Share2 size={20} />
      </a>

      <a
        href="#"
        aria-label="Site web"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#4b4b4b]
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#007a3d]
        "
      >
        <Globe size={20} />
      </a>

      <a
        href="#"
        aria-label="Lien"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#4b4b4b]
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#007a3d]
        "
      >
        <LinkIcon size={20} />
      </a>
    </div>
  );
}

export default function QualiteCertificatsPage() {
  return (
    <main className="min-h-screen bg-white text-[#061b13]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <SoftPaintingHero
        title="Qualité & Certificats"
        image="/images/olivehero.png"
      />

      {/* =====================================================
          CERTIFICATION BIOLOGIQUE
          ECOCERT + USDA ORGANIC
      ===================================================== */}

      <OrganicCertificationSection />

      {/* =====================================================
          DU VERGER À LA CUVE
          7 ÉTAPES MAÎTRISÉES
      ===================================================== */}

      <IndustrialProcessSection />

      {/* =====================================================
          NOTRE SYSTÈME QUALITÉ
          3 NIVEAUX DE CONTRÔLE
      ===================================================== */}

      <QualityControlSection />
    </main>
  );
}