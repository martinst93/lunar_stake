import { createElement } from "react";

export const ICONS = {
  MOON: "🌙",
  STAR: "⭐",
  FIRE: "🔥",
  ROCKET: "🚀",
  SPARKLES: "✨",
  USER: "👤",
  GALAXY: "🌌",
  UFO: "🛸",
  SLOTS: "🎰",
  CARDS: "🃏",
  LIVE: "🎥",
  GAME: "🎮",
  SEARCH: "🔍",
  HEART: "❤️",
  EXPLOSION: "💥",
} as const;

interface IconProps {
  className?: string;
  filled?: boolean;
}

export function HeartIcon({
  className = "w-5 h-5",
  filled = false,
}: IconProps) {
  return createElement(
    "svg",
    {
      className,
      fill: filled ? "currentColor" : "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
    },
    createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    }),
  );
}

export function ChevronLeftIcon({ className = "w-5 h-5" }: IconProps) {
  return createElement(
    "svg",
    {
      className,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
    },
    createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15 19l-7-7 7-7",
    }),
  );
}

export function ChevronRightIcon({ className = "w-5 h-5" }: IconProps) {
  return createElement(
    "svg",
    {
      className,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
    },
    createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 5l7 7-7 7",
    }),
  );
}
