"use client";

import { GAME_CARD, POPULAR_GAME_CAROUSEL } from "@/constants";
import { HeartIcon, ICONS } from "@/constants/Icons";
import { useFavorite } from "@/hooks";
import { getCategoryIcon } from "@/utils/helpers";
import { Game } from "@/utils/types";
import Image from "next/image";

type Props = {
  game: Game;
  width: string;
};

export default function CarouselCard({ game, width }: Props) {
  const { isFavorite, toggle } = useFavorite(game.id);

  return (
    <div className="flex-shrink-0" style={{ width }}>
      <div className="lunar-card cursor-pointer relative h-full">
        <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <span className="animate-pulse">{ICONS.FIRE}</span>{" "}
          {GAME_CARD.POPULAR}
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
          <Image
            src={game.image}
            alt={game.name}
            fill
            className="object-cover"
            sizes="25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-3 right-14 glass-morphism px-2 py-1 rounded-full text-xs text-purple-300">
            {getCategoryIcon(game.category)}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            className="absolute top-3 right-3 glass-morphism w-8 h-8 z-10 rounded-full flex items-center justify-center"
          >
            <HeartIcon
              className={`w-4 h-4 ${
                isFavorite ? "text-pink-400 fill-current" : "text-white"
              }`}
              filled={isFavorite}
            />
          </button>
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-purple-600 dark:text-purple-400 font-orbitron font-bold truncate">
            {game.name}
          </h3>
          <p className="text-gray-500 dark:text-white/60 text-xs truncate">
            {GAME_CARD.BY}{" "}
            <span className="text-purple-500 dark:text-purple-400">
              {game.provider}
            </span>
          </p>
          <div className="flex justify-between text-xs pt-2 border-t border-gray-200 dark:border-white/10">
            <span className="text-orange-500">{ICONS.FIRE} Hot</span>
            <span className="text-green-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />{" "}
              {POPULAR_GAME_CAROUSEL.LIVE}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
