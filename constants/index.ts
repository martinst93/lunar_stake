import { AnimatedDot } from "@/utils/types";

export const STORAGE_KEYS = {
  THEME: "theme",
  FAVORITES: "casinoFavorites",
} as const;

export const CATEGORY_CONFIG = {
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
} as const;

export const CATEGORY_BADGE_CLASSES: Record<string, string> = {
  slots: "category-badge-slots",
  table: "category-badge-table",
  live: "category-badge-live",
};

export const LOADING_DOTS: AnimatedDot[] = [
  { color: "bg-purple-400", delay: "0s" },
  { color: "bg-pink-400", delay: "0.1s" },
  { color: "bg-yellow-400", delay: "0.2s" },
];

export const ORBITAL_DOTS = [
  {
    position: "-top-1 left-1/2 -translate-x-1/2",
    size: "w-2 h-2",
    color: "bg-yellow-400",
    delay: "0s",
  },
  {
    position: "top-1/2 -right-1 -translate-y-1/2",
    size: "w-1.5 h-1.5",
    color: "bg-purple-400",
    delay: "0.5s",
  },
  {
    position: "-bottom-1 left-1/2 -translate-x-1/2",
    size: "w-1 h-1",
    color: "bg-pink-400",
    delay: "1s",
  },
  {
    position: "top-1/2 -left-1 -translate-y-1/2",
    size: "w-1.5 h-1.5",
    color: "bg-blue-400",
    delay: "1.5s",
  },
];

export const CASSINO_LOBBY = {
  LUNAR_SAKE: "Lunar Stake",
  YOUR_COSMIC_GAMING_DESTINATION: "Your Cosmic Gaming Destination",
  SPACE_EXPLORER: "Space Explorer",
  VIP_MEMBER: "VIP Member",
  LUNAR_STAKE_CASINO: "Lunar Stake Casino",
  ALL_RIGHTS_RESERVED: "© 2026 Lunar Stake Casino. All rights reserved.",
  GAMBLING_CAN_BE_ADDICTIVE:
    "Gambling can be addictive. Please play responsibly!",
};

export const ERROR_BOUNDARY = {
  SOMETHING_WENT_WRONG: "Something went wrong",
  PLEASE_REFRESH_OR_TRY_LATER: "Please refresh or try again later.",
};

export const GAME_CARD = {
  POPULAR: "POPULAR",
  LAUNCH: "LAUNCH",
  BY: "by",
  PREMIUM: "Premium",
  AVALIABLE: "Available",
};

export const GAME_GRID = {
  FAVORITES_ONLY: "Favorites Only",
  EXPLORE_MORE: "Explore More",
};

export const LOADING_SPINNER = {
  CONNECTING_TO: "Connecting to the cosmic casino...",
  LOADING: "Loading",
};

export const POPULAR_GAME_CAROUSEL = {
  MOST_POPULAR: "Most Popular",
  TRENDING_ACROSS_THE_GALAXY: "Trending across the galaxy",
  LIVE: "Live",
};

export const SEARCH = {
  DISCOVER_YOUR_NEXT_ADVENTURE: "Discover Your Next Adventure",
  CATEGORIES: "Categories",
  FAVORTES: "Favorites",
};

export const POPULAR_GAMES_COUNT = 8;
export const LOAD_DELAY_MS = 1000;
export const DEFAULT_STAR_COUNT = 20;

export const FOOTER_LINKS = [
  "Responsible Gaming",
  "Terms & Conditions",
  "Privacy Policy",
  "Support Center",
  "VIP Program",
] as const;
