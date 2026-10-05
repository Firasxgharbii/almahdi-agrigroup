import {
  Factory,
  Leaf,
  ShieldCheck,
  Sprout,
} from "lucide-react";

import GroupPage from "../components/GroupPage";
import HeritagePillarsSection from "../components/HeritagePillarsSection";
import MaisonAlMahdiSection from "../components/MaisonAlMahdiSection";


const values = [
  {
    icon: Leaf,
    title: "Production agricole",
    text:
      "Une base solide autour de la terre, des produits tunisiens et du savoir-faire transmis depuis plusieurs générations.",
  },
  {
    icon: Factory,
    title: "Transformation",
    text:
      "Une vision moderne pour structurer, transformer et valoriser les produits agroalimentaires avec une image professionnelle.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité & traçabilité",
    text:
      "Une communication claire autour de la qualité, de la confiance, de la certification et de l’ouverture vers l’export.",
  },
];

export default function NotreGroupePage() {
  return (
    <>
      {/* =====================================================
          HERO — NOTRE HISTOIRE
      ===================================================== */}

      <GroupPage
        title="Notre Histoire"
        image="/images/olivehero3.jpg"
        subtitle="Découvrez l’Histoire du groupe."
      />

      {/* =====================================================
          LA MAISON AL MAHDI
          Nouvelle section avec olivehero4.jpg
      ===================================================== */}

      <MaisonAlMahdiSection />


      {/* =====================================================
          5 GÉNÉRATIONS / HÉRITAGE ALMAHDI
      ===================================================== */}

      <HeritagePillarsSection />


    </>
  );
}