import type SearchProps from "./Search.props";

function DefaultSearchIcon() {
  return (
    <svg
      className="h-6 w-6 text-theme-muted"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export default function SearchView({
  icons,
  labels,
  searchTerm,
  selectedCategory,
  showFavoritesOnly,
  favoritesCount,
  categories,
  onSearchTermChange,
  onCategorySelect,
  onToggleFavorites,
  SearchIcon,
}: SearchProps) {
  const Icon = SearchIcon ?? DefaultSearchIcon;

  return (
    <section className="glass-morphism rounded-3xl p-6 sm:p-8 border border-theme relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      <div className="absolute top-4 right-4 text-4xl opacity-10 animate-float">
        {icons.moon}
      </div>

      <div className="relative z-10 space-y-8">
        <div className="space-y-3">
          <h2 className="text-lunar-gradient font-orbitron font-bold text-lg sm:text-xl flex items-center gap-2">
            {labels.title}
          </h2>

          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Icon />
            </div>

            <div className="field border-theme-strong">
              <input
                type="text"
                placeholder={labels.placeholder}
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
                className="field-input pl-14 text-theme-primary"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-cosmic-gradient font-semibold text-base sm:text-lg flex items-center gap-2">
            <span className="text-xl">{icons.game}</span> {labels.categories}
          </h3>

          <div className="flex flex-wrap gap-3">
            {categories.map((c) => {
              const active = selectedCategory === c.key;

              return (
                <button
                  key={c.key}
                  onClick={() => onCategorySelect(c.key)}
                  className={[
                    "chip font-orbitron",
                    active ? `chip--active bg-gradient-to-r ${c.gradient}` : "",
                  ].join(" ")}
                >
                  <span>{c.icon}</span>
                  <span>{c.label}</span>
                </button>
              );
            })}

            <div className="hidden sm:block h-12 w-px bg-[color:var(--glass-border)] mx-2" />

            <button
              onClick={onToggleFavorites}
              className={[
                "chip font-orbitron",
                showFavoritesOnly
                  ? "chip--active bg-gradient-to-r from-pink-500 to-purple-500"
                  : "",
              ].join(" ")}
            >
              <span>{icons.heart}</span>
              <span>
                {labels.favorites} ({favoritesCount})
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
