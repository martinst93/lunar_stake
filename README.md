# 🌙 Lunar Stake Casino

A modern, high-performance casino frontend built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

Structured around **feature-first architecture** with strict separation of **logic**, **view**, and **props** — designed for maintainability as the codebase scales.

---

## ✨ Features

| Category            | Details                                                              |
| ------------------- | -------------------------------------------------------------------- |
| ⚡ **Framework**    | Next.js App Router with client/server separation                     |
| 🧠 **Architecture** | Feature-driven (`logic` / `view` / `props` pattern)                  |
| 🎨 **Styling**      | Tailwind CSS with layered styles (`base`, `components`, `utilities`) |
| 🧩 **Components**   | Reusable UI sections (cards, spinners, toggles)                      |
| 🔁 **State**        | Redux Toolkit for global state (games, filters, favorites)           |
| 🌌 **Effects**      | Visual animations (glassmorphism, StarField, cosmic theme)           |
| 🌗 **Theming**      | Light/Dark mode with persistent preference                           |
| ❤️ **Favorites**    | Persistent favorites system with localStorage                        |

---

## 📁 Project Structure

```
LUNAR_STAKE_CASINO/
│
├── app/                          # Next.js App Router
│   ├── styles/                   # Global styling layers
│   │   ├── base.css              # Reset & base styles
│   │   ├── components.css        # Component-specific styles
│   │   ├── utilities.css         # Utility classes
│   │   └── global.css            # Main stylesheet (imports all)
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Entry page
│
├── components/
│   ├── features/                 # Domain-driven features
│   │   ├── CasinoLobby/
│   │   │   ├── CasinoLobby.logic.tsx
│   │   │   ├── CasinoLobby.view.tsx
│   │   │   └── CasinoLobby.props.ts
│   │   ├── GameGrid/
│   │   │   ├── GameGrid.logic.tsx
│   │   │   ├── GameGrid.view.tsx
│   │   │   └── GameGrid.props.ts
│   │   ├── PopularGameCarousel/
│   │   │   ├── PopularGameCarousel.logic.tsx
│   │   │   ├── PopularGameCarousel.view.tsx
│   │   │   └── PopularGameCarousel.props.ts
│   │   ├── Search/
│   │   │   ├── Search.logic.tsx
│   │   │   ├── Search.view.tsx
│   │   │   └── Search.props.ts
│   │
│   ├── sections/                 # Reusable UI building blocks
│   │   ├── GameCard.tsx
│   │   ├── CarouselCard.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── layout/                   # App shell components
│   │   ├── CasinoHeader.tsx
│   │   └── CasinoFooter.tsx
│   │
│   ├── effects/                  # Visual-only effects
│   │   └── StarField.tsx
│   │
│   └── ui/                       # Base UI components
│       ├── CarouselCard.tsx
│       └── GameCard.tsx
│
├── constants/                    # Static content & icons
│   ├── Icons.ts
│   └── index.ts
│
├── hooks/                        # Custom React hooks
│   ├── index.ts
│   ├── useCarousel.ts
│   ├── useFavorites.ts
│   └── useTheme.ts
│
├── store/                        # Redux state management
│   ├── hooks.ts
│   ├── index.ts
│   └── store.ts
│
└── utils/                        # Utilities & types
    ├── helpers/
    └── types/
```

---

## 🧠 Architecture

### Logic / View / Props Pattern

Each feature is split into three files for clear separation of concerns:

| File          | Purpose                                |
| ------------- | -------------------------------------- |
| `*.logic.tsx` | State management, hooks, side effects  |
| `*.view.tsx`  | Pure rendering, no business logic      |
| `*.props.ts`  | TypeScript interfaces & prop contracts |

```
CasinoLobby/
├── CasinoLobby.logic.tsx    ← Handles state & data fetching
├── CasinoLobby.view.tsx     ← Pure UI rendering
└── CasinoLobby.props.ts     ← Type definitions
```

### Design Principles

- **Features orchestrate** — Connect state, hooks, constants, and UI sections
- **Sections are reusable** — Dumb components that receive all data via props
- **Explicit contracts** — No implicit `typeof` inference; clear boundaries
- **Colocation** — Related files live together in feature folders

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/martinst93/lunar_stake.git

# Navigate to project
cd lunar-stake-casino

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## 🛠 Tech Stack

| Technology                                     | Version | Purpose                         |
| ---------------------------------------------- | ------- | ------------------------------- |
| [Next.js](https://nextjs.org/)                 | 15.x    | React framework with App Router |
| [React](https://react.dev/)                    | 19.x    | UI library                      |
| [TypeScript](https://www.typescriptlang.org/)  | 5.x     | Type safety                     |
| [Tailwind CSS](https://tailwindcss.com/)       | 4.x     | Utility-first styling           |
| [Redux Toolkit](https://redux-toolkit.js.org/) | 2.x     | State management                |

---

## 📄 License

This project is for demonstration purposes.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<div align="center">

**Built with 💜 and cosmic energy**

🌙 ✨ 🚀

</div>
