/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lunar-primary": "#e6e6fa",
        "lunar-secondary": "#b19cd9",
        "lunar-accent": "#ffd700",
        "lunar-glow": "#9370db",
        "cosmic-purple": "#4b0082",
        "cosmic-blue": "#1e3a8a",
        "cosmic-teal": "#0891b2",
        "space-black": "#0a0a0a",
        "nebula-pink": "#ff69b4",
        "star-white": "#ffffff",
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
