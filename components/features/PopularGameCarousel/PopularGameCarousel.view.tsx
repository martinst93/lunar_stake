import PopularGameCarouselProps from "./PopularGameCarousel.props";

export default function PopularGameCarouselView({
  CarouselCard,
  ChevronLeftIcon,
  ChevronRightIcon,
  icons,
  labels,
  games,
  currentIndex,
  maxIndex,
  canNavigate,
  transform,
  itemWidth,
  onPrev,
  onNext,
  onGoTo,
}: PopularGameCarouselProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl animate-pulse">{icons.fire}</span>
          <div>
            <h2 className="text-purple-600 dark:text-purple-400 font-orbitron font-bold text-2xl">
              {labels.title}
            </h2>
            <p className="text-purple-500 dark:text-purple-300 text-sm">
              {labels.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onPrev}
            disabled={!canNavigate}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all
                       bg-gray-100 dark:bg-white/10 
                       hover:bg-purple-100 dark:hover:bg-purple-500/20
                       border border-gray-200 dark:border-white/20
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600 dark:text-white" />
          </button>

          <div className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/20 bg-white/50 dark:bg-white/10">
            <span className="text-gray-600 dark:text-white/60 text-sm font-orbitron">
              {maxIndex > 0
                ? `${currentIndex + 1} / ${maxIndex + 1}`
                : `${games.length} games`}
            </span>
          </div>

          <button
            onClick={onNext}
            disabled={!canNavigate}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all
                       bg-gray-100 dark:bg-white/10 
                       hover:bg-purple-100 dark:hover:bg-purple-500/20
                       border border-gray-200 dark:border-white/20
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600 dark:text-white" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden -mx-2 px-2">
        <div
          className="flex transition-transform duration-500 gap-6 py-2"
          style={{ transform }}
        >
          {games.map((game) => (
            <CarouselCard key={game.id} game={game} width={itemWidth} />
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "bg-purple-500 w-6"
                  : "bg-gray-300 dark:bg-white/30 w-2 hover:bg-purple-300 dark:hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
