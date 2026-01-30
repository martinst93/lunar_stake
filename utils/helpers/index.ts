import { Star, Game } from "../types";

export function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => {
    const top = ((i * 37) % 100) + 0.5;
    const left = ((i * 61) % 100) + 0.5;
    const size = 2 + ((i * 17) % 30) / 10;
    const delay = ((i * 23) % 30) / 10;

    return {
      id: i,
      top: `${top}%`,
      left: `${left}%`,
      size: `${size}px`,
      delay: `${delay}s`,
    };
  });
}

export function filterGames(
  games: Game[],
  searchTerm: string,
  category: string,
): Game[] {
  let filtered = [...games];

  if (category !== "all") {
    filtered = filtered.filter((game) => game.category === category);
  }

  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (game) =>
        game.name.toLowerCase().includes(term) ||
        game.provider.toLowerCase().includes(term),
    );
  }

  return filtered;
}

export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    slots: "🎰",
    table: "🃏",
    live: "🎥",
    all: "🌌",
  };
  return icons[category] ?? "🎮";
}

export function playGame(game: Game): void {
  alert(`🚀 Launching ${game.name} by ${game.provider} into orbit!`);
}

export function getStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

export function setStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Storage error:", error);
  }
}
