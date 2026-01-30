"use client";

import { CASSINO_LOBBY, FOOTER_LINKS } from "@/constants";
import { ICONS } from "@/constants/Icons";

export default function CasinoFooter() {
  return (
    <footer className="relative mt-16 sm:mt-20 glass-morphism border-t border-theme">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10 text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <span className="text-4xl animate-pulse-glow">{ICONS.MOON}</span>
          <h3 className="text-lunar-gradient font-orbitron font-bold text-2xl">
            {CASSINO_LOBBY.LUNAR_STAKE_CASINO}
          </h3>
          <span className="text-4xl animate-pulse">{ICONS.SPARKLES}</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-theme-muted hover:text-theme-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="pt-6 border-t border-theme space-y-4">
          <p className="text-theme-faint text-sm">
            {CASSINO_LOBBY.ALL_RIGHTS_RESERVED}
          </p>

          <div className="glass-morphism rounded-xl p-4 max-w-2xl mx-auto border border-red-400/30">
            <p className="text-theme-muted text-xs">
              {CASSINO_LOBBY.GAMBLING_CAN_BE_ADDICTIVE}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
