"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const IMAGES = [
  "/images/olivehero.png",
  "/images/olivehero2.png",
  "/images/olivehero3.jpg",
  "/images/olivehero4.jpg",
  "/images/olivehero5.jpg",
  "/images/olivehero6.jpg",
  "/images/olivehero7.jpg",
  "/images/olivehero8.jpg",
];

export default function SignatureGallerySection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const images = useMemo(() => IMAGES, []);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 1400);

    return () => window.clearInterval(timer);
  }, [paused, images.length]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const item = itemRefs.current[index];

    if (!scroller || !item) return;

    scroller.scrollTo({
      left: item.offsetLeft - 40,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-white px-6 py-24 md:px-10 lg:px-16"
    >
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative"
      >
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {images.map((src, imageIndex) => (
            <div
              key={`${src}-${imageIndex}`}
              ref={(el) => {
                itemRefs.current[imageIndex] = el;
              }}
              className="relative h-[520px] w-[78vw] shrink-0 snap-start overflow-hidden rounded-[22px] bg-white shadow-sm sm:w-[55vw] md:w-[360px] lg:w-[390px]"
            >
              <Image
                src={src}
                alt={`Galerie AlMahdi ${imageIndex + 1}`}
                fill
                sizes="(min-width:1024px) 390px, (min-width:768px) 360px, 78vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs uppercase tracking-[0.28em] text-black/45">
          Galerie — Défilement automatique — Pause au survol
        </p>
      </div>
    </section>
  );
}