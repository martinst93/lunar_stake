"use client";

import { useTheme } from "@/hooks";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn glass-morphism rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-all duration-300"
      aria-label={`Switch to ${next} mode`}
      suppressHydrationWarning
    >
      <span className="text-xl" suppressHydrationWarning>
        {theme === "dark" ? "🌙" : "☀️"}
      </span>

      <span
        className="text-sm font-medium text-theme-primary"
        suppressHydrationWarning
      >
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
