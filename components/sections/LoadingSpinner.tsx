"use client";

import { LOADING_SPINNER } from "@/constants";
import { ICONS } from "@/constants/Icons";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-purple-400/20" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-400 border-r-pink-400 animate-spin" />
        <div className="absolute inset-4 rounded-full glass-morphism flex items-center justify-center cosmic-glow">
          <span className="text-2xl animate-pulse">{ICONS.MOON}</span>
        </div>
        <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-50" />
      </div>

      <div className="text-center space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-lunar-gradient font-orbitron font-bold text-lg">
            {LOADING_SPINNER.LOADING}
          </span>
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        <p className="text-white/60 text-sm">{LOADING_SPINNER.CONNECTING_TO}</p>
      </div>
    </div>
  );
}
