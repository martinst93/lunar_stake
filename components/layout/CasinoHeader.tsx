"use client";

import { CASSINO_LOBBY } from "@/constants";
import { ICONS } from "@/constants/Icons";
import ThemeToggle from "../sections/ThemeToggle";

export default function CasinoHeader() {
  return (
    <header className="relative glass-morphism border-b border-theme">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/10 to-pink-900/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        <ThemeToggle />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl sm:text-6xl animate-pulse-glow">
              {ICONS.MOON}
            </span>

            <div>
              <h1 className="text-lunar-gradient font-orbitron font-bold text-3xl sm:text-5xl">
                {CASSINO_LOBBY.LUNAR_SAKE}
              </h1>
              <p className="text-cosmic-gradient font-medium">
                {CASSINO_LOBBY.YOUR_COSMIC_GAMING_DESTINATION}
              </p>
            </div>
          </div>

          <div className="glass-morphism rounded-2xl px-5 py-4 flex items-center gap-3 border border-theme">
            <span className="text-3xl animate-float">{ICONS.USER}</span>
            <div>
              <p className="text-theme-primary font-semibold">
                {CASSINO_LOBBY.SPACE_EXPLORER}
              </p>
              <p className="text-theme-muted text-sm">
                {CASSINO_LOBBY.VIP_MEMBER} {ICONS.STAR}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
