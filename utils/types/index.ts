export type Theme = "dark" | "light";
export type CategoryType = "all" | "slots" | "table" | "live";

export interface Game {
  id: string;
  name: string;
  provider: string;
  category: CategoryType;
  image: string;
}

export interface AnimatedDot {
  color: string;
  delay: string;
}

export interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
}

export const CATEGORIES: Record<
  CategoryType,
  { icon: string; label: string; gradient: string }
> = {
  all: {
    icon: "🌌",
    label: "All Games",
    gradient: "from-purple-500 to-blue-500",
  },
  slots: {
    icon: "🎰",
    label: "Slots",
    gradient: "from-purple-600 to-indigo-600",
  },
  table: {
    icon: "🃏",
    label: "Table Games",
    gradient: "from-blue-600 to-cyan-600",
  },
  live: {
    icon: "🎥",
    label: "Live Casino",
    gradient: "from-pink-500 to-red-500",
  },
};
