# 🌙 Development Notes - Lunar Stake Casino

## ⏱️ Time Spent

**Total:** ~17 hours

- **Day 1:** Project setup, architecture, Redux store, base components (~7 hrs)
- **Day 2:** Theming, carousel, bug fixes, refactoring (~10 hrs)

---

## 📚 What I Learned

- **Logic/View/Props pattern** — Separating state, rendering, and types improves maintainability
- **Theme-aware styling** — Using `dark:` variants for light/dark mode support
- **Custom hooks** — `useCarousel`, `useFavorite`, `useTheme` for reusable logic
- **Tailwind CSS layers** — Organizing styles with `base`, `components`, `utilities`
- **TypeScript contracts** — Explicit prop interfaces prevent runtime bugs

---

## 🚫 Problems & Solutions

| Problem                         | Solution                                              |
| ------------------------------- | ----------------------------------------------------- |
| Text invisible in light theme   | Added `text-gray-600 dark:text-white/60` pattern      |
| Carousel cards clipped on hover | Removed `overflow-hidden`, simplified hover effects   |
| JSX errors in `.ts` files       | Renamed to `.tsx` or used `createElement()`           |
| Circular imports in hooks       | Imported directly from `react-redux` instead of store |

---

## 🔮 Future Improvements

- Add error boundaries and unit tests
- Implement virtual scrolling for large game lists
- Add keyboard navigation for accessibility
- Explore Framer Motion for animations
