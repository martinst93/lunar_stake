"use client";

import { GAME_CARD } from "@/constants";
import { HeartIcon, ICONS } from "@/constants/Icons";
import { useFavorite } from "@/hooks";
import { getCategoryIcon, playGame } from "@/utils/helpers";
import { Game } from "@/utils/types";
import Image from "next/image";

interface Props {
  game: Game;
  showPopularBadge?: boolean;
}

export default function GameCard({ game, showPopularBadge = false }: Props) {
  const { isFavorite, toggle } = useFavorite(game.id);

  return (
    <div className="lunar-card group cursor-pointer relative overflow-hidden">
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden rounded-t-2xl">
        <Image
          src={game.image}
          alt={game.name}
          fill
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {showPopularBadge && (
          <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <span className="animate-pulse">{ICONS.FIRE}</span>
            <span>{GAME_CARD.POPULAR}</span>
          </div>
        )}

        {!showPopularBadge && (
          <div className="absolute top-3 left-3 category-badge-slots flex items-center gap-1">
            <span className="text-xs">{getCategoryIcon(game.category)}</span>
            <span>{game.category}</span>
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          className="absolute top-3 right-3 z-10 glass-morphism w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <HeartIcon
            className={`w-5 h-5 transition-all ${isFavorite ? "text-pink-400 fill-current" : "text-white"}`}
            filled={isFavorite}
          />
        </button>

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <button
            onClick={() => playGame(game)}
            className="btn-lunar px-8 py-4 rounded-2xl font-bold transform scale-75 group-hover:scale-100 transition-all duration-300 flex items-center gap-3"
          >
            <span className="text-xl animate-pulse">{ICONS.ROCKET}</span>
            <span className="font-orbitron">{GAME_CARD.LAUNCH}</span>
            <span className="text-xl animate-float">{ICONS.SPARKLES}</span>
          </button>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-purple-600 dark:text-purple-400 font-orbitron font-bold text-lg leading-tight truncate">
            {game.name}
          </h3>
          <p className="text-gray-500 dark:text-white/60 text-sm">
            {GAME_CARD.BY}{" "}
            <span className="text-purple-500 dark:text-purple-400 font-semibold">
              {game.provider}
            </span>
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-white/50 flex items-center gap-1">
            <span className="text-yellow-500">{ICONS.STAR}</span>{" "}
            {GAME_CARD.PREMIUM}
          </span>
          <span className="text-gray-500 dark:text-white/50 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />{" "}
            {GAME_CARD.AVALIABLE}
          </span>
        </div>
      </div>
    </div>
  );
}
