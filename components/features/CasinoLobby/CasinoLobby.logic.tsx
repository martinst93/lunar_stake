"use client";

import { loadFavorites, setGames, setLoading, useAppDispatch } from "@/store";
import { getStorage } from "@/utils/helpers";
import { mockGames } from "@/utils/types/games";
import { useEffect, useMemo } from "react";
import StarField from "../../effects/StarField";

import { ICONS } from "@/constants/Icons";
import CasinoHeader from "../../layout/CasinoHeader";
import CasinoFooter from "../../layout/CasinoFooter";
import CasinoLobbyView from "./CasinoLobby.view";
import PopularGamesCarousel from "../PopularGameCarousel/PopularGameCarousel.logic";
import GameGrid from "../GameGrid/GameGrid.logic";
import Search from "../Search/Search.logic";

export default function CasinoLobby() {
  const dispatch = useAppDispatch();
  const popularGames = useMemo(() => mockGames.slice(0, 8), []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const saved = getStorage<string[]>("casinoFavorites", []);
      if (saved.length && !cancelled) dispatch(loadFavorites(saved));

      if (!cancelled) dispatch(setLoading(true));
      await new Promise((r) => setTimeout(r, 1000));

      if (!cancelled) {
        dispatch(setGames(mockGames));
        dispatch(setLoading(false));
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [dispatch]);

  return (
    <CasinoLobbyView
      StarField={StarField}
      Search={Search}
      PopularGamesCarousel={PopularGamesCarousel}
      GameGrid={GameGrid}
      ICONS={ICONS}
      CasinoHeader={CasinoHeader}
      CasinoFooter={CasinoFooter}
      popularGames={popularGames}
    />
  );
}
