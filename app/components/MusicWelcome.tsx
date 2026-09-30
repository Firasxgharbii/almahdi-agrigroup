"use client";

import { useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";

export default function MusicWelcome() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [entered, setEntered] = useState(false);
  const [playing, setPlaying] = useState(false);

  const enterWithMusic = async () => {
    setEntered(true);

    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0.35;
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.error("Lecture audio impossible :", error);
      setPlaying(false);
    }
  };

  const enterWithoutMusic = () => {
    setEntered(true);
    setPlaying(false);
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        audio.volume = 0.35;
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.error("Impossible de modifier la lecture :", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/almahdi-intro.mp3"
        loop
        preload="auto"
      />

      {!entered && (
        <div className="fixed inset-0 z-[99999] flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#04170f] px-5 text-white">
          {/* LUMIÈRES */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ad6a]/10 blur-[120px]" />

            <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#075B35]/30 blur-[130px]" />

            <div className="absolute -bottom-48 -right-40 h-[500px] w-[500px] rounded-full bg-[#d7ad6a]/10 blur-[130px]" />
          </div>

          {/* CADRE */}
          <div className="pointer-events-none absolute inset-4 border border-white/[0.06] md:inset-7" />

          {/* CONTENU */}
          <div className="relative z-10 mx-auto w-full max-w-[900px] text-center">
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#d7ad6a]/30 bg-[#d7ad6a]/10 text-[#d7ad6a]">
              <Music2 size={22} />
            </div>

            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.42em] text-[#d7ad6a] sm:text-xs">
              AlMahdi AgriGroup · Tunisie
            </p>

            <h1 className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.87] tracking-[-0.045em]">
              Une terre.
              <span className="mt-2 block italic text-[#d7ad6a]">
                Une histoire.
              </span>
            </h1>

            <div className="mx-auto my-8 h-px w-20 bg-[#d7ad6a]/60" />

            <p className="mx-auto max-w-[620px] text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Entrez dans l’univers AlMahdi AgriGroup et découvrez un héritage
              agricole tunisien transmis de génération en génération.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={enterWithMusic}
                className="group flex min-w-[245px] items-center justify-center gap-3 rounded-full bg-[#d7ad6a] px-8 py-4 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#061B11] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e4c184] hover:shadow-[0_15px_50px_rgba(215,173,106,0.22)]"
              >
                <Volume2
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                Entrer avec la musique
              </button>

              <button
                type="button"
                onClick={enterWithoutMusic}
                className="min-w-[245px] rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white/75 backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.07] hover:text-white"
              >
                Entrer sans musique
              </button>
            </div>

            <p className="mt-7 text-[10px] uppercase tracking-[0.18em] text-white/30">
              Expérience sonore optionnelle
            </p>
          </div>
        </div>
      )}

      {entered && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={
            playing ? "Désactiver la musique" : "Activer la musique"
          }
          title={playing ? "Désactiver la musique" : "Activer la musique"}
          className="fixed bottom-5 right-5 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-[#d7ad6a]/25 bg-[#061B11]/90 text-[#d7ad6a] shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#d7ad6a]/50 md:bottom-7 md:right-7"
        >
          {playing ? <Volume2 size={19} /> : <VolumeX size={19} />}
        </button>
      )}
    </>
  );
}