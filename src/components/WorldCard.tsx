"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { World } from "@/data/worlds";

interface WorldCardProps {
  world: World;
  onNext: () => void;
}

export function WorldCard({ world, onNext }: WorldCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={world.id}
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.04, y: -24 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl"
        role="region"
        aria-live="polite"
        aria-label={`Monde actuel : ${world.name}`}
      >
        {/* Glow halo */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl blur-xl opacity-30 transition-colors duration-700"
          style={{ background: world.accent }}
          aria-hidden="true"
        />

        {/* Card body */}
        <div
          className="relative rounded-2xl border overflow-hidden"
          style={{
            borderColor: `${world.accent}33`,
            background: "rgba(8,8,12,0.92)",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-0.5 w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${world.accent}, ${world.accentSecondary}, transparent)`,
            }}
            aria-hidden="true"
          />

          <div className="px-8 pt-10 pb-8 sm:px-12 sm:pt-12 sm:pb-10">
            {/* World badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex items-center gap-2 mb-8"
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs tracking-widest uppercase font-semibold"
                style={{
                  color: world.accent,
                  background: `${world.accent}1a`,
                  border: `1px solid ${world.accent}44`,
                }}
              >
                {world.emoji} {world.name}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: world.accent }}
            >
              {world.greeting}
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="h-px mb-6 origin-left"
              style={{
                background: `linear-gradient(90deg, ${world.accent}88, transparent)`,
              }}
              aria-hidden="true"
            />

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.5 }}
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              {world.subtext}
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44, duration: 0.4 }}
            >
              <button
                onClick={onNext}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={
                  {
                    background: `linear-gradient(135deg, ${world.accent}22, ${world.accentSecondary}22)`,
                    border: `1px solid ${world.accent}55`,
                    color: world.accent,
                    "--tw-ring-color": world.accent,
                  } as React.CSSProperties
                }
                aria-label="Explorer un nouveau monde"
              >
                <span
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${world.accent}18, ${world.accentSecondary}18)`,
                  }}
                  aria-hidden="true"
                />
                <span className="relative flex items-center gap-3">
                  <span
                    className="text-lg transition-transform duration-300 group-hover:rotate-180"
                    aria-hidden="true"
                  >
                    ⟳
                  </span>
                  Nouveau monde
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </button>
            </motion.div>
          </div>

          {/* Bottom accent bar */}
          <div
            className="h-0.5 w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${world.accentSecondary}, transparent)`,
            }}
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
