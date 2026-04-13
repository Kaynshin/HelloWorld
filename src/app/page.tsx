"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORLDS } from "@/data/worlds";
import { WorldCard } from "@/components/WorldCard";
import { FloatingParticles } from "@/components/FloatingParticles";

function getRandomWorldIndex(exclude: number, total: number): number {
  if (total <= 1) return 0;
  let idx: number;
  do {
    idx = Math.floor(Math.random() * total);
  } while (idx === exclude);
  return idx;
}

export default function Home() {
  const [worldIndex, setWorldIndex] = useState<number | null>(null);
  const prevIndexRef = useRef<number>(-1);

  useEffect(() => {
    const initial = getRandomWorldIndex(-1, WORLDS.length);
    setWorldIndex(initial);
    prevIndexRef.current = initial;
  }, []);

  const handleNext = () => {
    const next = getRandomWorldIndex(prevIndexRef.current, WORLDS.length);
    prevIndexRef.current = next;
    setWorldIndex(next);
  };

  const world = worldIndex !== null ? WORLDS[worldIndex] : null;

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#06060a] px-4 py-16 sm:px-8">
      {/* Ambient background gradient driven by world accent */}
      <AnimatePresence>
        {world && (
          <motion.div
            key={world.id + "-bg"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none fixed inset-0 z-0"
            aria-hidden="true"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 50% 0%, ${world.accent}18 0%, transparent 70%),
                radial-gradient(ellipse 50% 40% at 80% 100%, ${world.accentSecondary}14 0%, transparent 60%),
                radial-gradient(ellipse 40% 30% at 20% 60%, ${world.accent}0a 0%, transparent 50%)
              `,
            }}
          />
        )}
      </AnimatePresence>

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      {world && <FloatingParticles world={world} />}

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-12 text-center"
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-2 font-medium"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Portail Dimensionnel
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold tracking-tight"
          style={{
            color: "rgba(255,255,255,0.92)",
            textShadow: "0 0 40px rgba(255,255,255,0.08)",
          }}
        >
          Hello,{" "}
          <span style={{ color: world?.accent ?? "rgba(255,255,255,0.6)" }}>
            World
          </span>
          .
        </h2>
        <p
          className="mt-3 text-sm sm:text-base max-w-xs mx-auto"
          style={{ color: "rgba(255,255,255,0.38)" }}
        >
          {WORLDS.length} univers. Un seul message. Aucune répétition immédiate.
        </p>
      </motion.header>

      {/* World card */}
      <div className="relative z-10 w-full max-w-2xl">
        {world ? (
          <WorldCard world={world} onNext={handleNext} />
        ) : (
          <div
            className="flex items-center justify-center h-64"
            aria-label="Chargement du portail"
          >
            <div
              className="w-8 h-8 rounded-full border-2 animate-spin"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                borderTopColor: "transparent",
              }}
            />
          </div>
        )}
      </div>

      {/* World index dots */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative z-10 mt-10 flex items-center gap-2"
        role="tablist"
        aria-label="Sélecteur de monde"
      >
        {WORLDS.map((w, i) => (
          <button
            key={w.id}
            onClick={() => {
              prevIndexRef.current = i;
              setWorldIndex(i);
            }}
            role="tab"
            aria-selected={worldIndex === i}
            aria-label={`Aller au monde : ${w.name}`}
            className="transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
            style={{
              width: worldIndex === i ? 24 : 6,
              height: 6,
              background:
                worldIndex === i
                  ? (world?.accent ?? "rgba(255,255,255,0.6)")
                  : "rgba(255,255,255,0.18)",
            }}
          />
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 mt-12 text-center"
      >
        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          Unicorn Agency — Hello World Demo
        </p>
      </motion.footer>
    </main>
  );
}
