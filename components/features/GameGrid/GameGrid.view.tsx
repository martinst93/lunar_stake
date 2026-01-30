import type GameGridProps from "./GameGrid.props";

export default function GameGridView({
  LoadingSpinner,
  GameCard,
  ICONS,
  labels,
  games,
  loading,
  showFavoritesOnly,
}: GameGridProps) {
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-8">
        <div className="relative">
          <div className="glass-morphism rounded-full w-32 h-32 flex items-center justify-center cosmic-glow">
            <span className="text-6xl animate-float">{ICONS.GALAXY}</span>
          </div>
          <span className="absolute -top-2 -right-2 text-3xl animate-bounce">
            {ICONS.UFO}
          </span>
        </div>

        <div className="text-center space-y-4 max-w-md">
          <h3 className="text-purple-600 dark:text-purple-400 font-orbitron font-bold text-2xl">
            {showFavoritesOnly ? "No Favorite Games" : "No Games Found"}
          </h3>
          <p className="text-gray-500 dark:text-white/60">
            {showFavoritesOnly
              ? "Start by favoriting some games!"
              : "Try adjusting your search or filters."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="glass-morphism rounded-full px-4 py-2 border border-gray-200 dark:border-white/20">
          <span className="text-purple-600 dark:text-purple-400 font-orbitron font-bold">
            {games.length}
          </span>
          <span className="text-gray-500 dark:text-white/60 ml-2">
            {games.length === 1 ? "Game" : "Games"}
          </span>
        </div>

        {showFavoritesOnly && (
          <div className="glass-morphism rounded-full px-4 py-2 border border-pink-300 dark:border-pink-400/30">
            <span className="text-pink-500 dark:text-pink-300 text-sm">
              {ICONS.HEART} {labels.favoritesOnly}
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {games.map((game, i) => (
          <div
            key={game.id}
            className="opacity-0 animate-fade-in"
            style={{
              animationDelay: `${i * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <GameCard game={game} />
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button className="group glass-morphism rounded-2xl px-8 py-4 border border-gray-200 dark:border-white/20 hover:border-purple-400 dark:hover:border-purple-400/50 transition-all hover:scale-105">
          <span className="text-gray-600 dark:text-white/80 group-hover:text-purple-600 dark:group-hover:text-white font-orbitron">
            {labels.exploreMore}
          </span>
          <span className="ml-3 text-2xl animate-float">{ICONS.ROCKET}</span>
        </button>
      </div>
    </div>
  );
}
