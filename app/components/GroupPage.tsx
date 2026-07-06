"use client";

import SoftPaintingHero from "./SoftPaintingHero";

type GroupPageProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function GroupPage({ title, image }: GroupPageProps) {
  return (
    <section className="bg-white text-[#061b13]">
      <SoftPaintingHero title={title} image={image} />
    </section>
  );
}