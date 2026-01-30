import { filterGames, setStorage } from "@/utils/helpers";
import { CategoryType, Game } from "@/utils/types";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GamesState {
  games: Game[];
  filteredGames: Game[];
  searchTerm: string;
  selectedCategory: CategoryType;
  loading: boolean;
}

const gamesInitial: GamesState = {
  games: [],
  filteredGames: [],
  searchTerm: "",
  selectedCategory: "all",
  loading: false,
};

const gamesSlice = createSlice({
  name: "games",
  initialState: gamesInitial,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
      state.filteredGames = filterGames(
        action.payload,
        state.searchTerm,
        state.selectedCategory,
      );
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredGames = filterGames(
        state.games,
        action.payload,
        state.selectedCategory,
      );
    },
    setCategory: (state, action: PayloadAction<CategoryType>) => {
      state.selectedCategory = action.payload;
      state.filteredGames = filterGames(
        state.games,
        state.searchTerm,
        action.payload,
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

interface FavoritesState {
  favoriteGameIds: string[];
  showFavoritesOnly: boolean;
}

const favoritesInitial: FavoritesState = {
  favoriteGameIds: [],
  showFavoritesOnly: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitial,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.favoriteGameIds.indexOf(id);
      if (index > -1) {
        state.favoriteGameIds.splice(index, 1);
      } else {
        state.favoriteGameIds.push(id);
      }
      setStorage("casinoFavorites", state.favoriteGameIds);
    },
    loadFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoriteGameIds = action.payload;
    },
    toggleShowFavorites: (state) => {
      state.showFavoritesOnly = !state.showFavoritesOnly;
    },
  },
});

export const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { setGames, setSearchTerm, setCategory, setLoading } =
  gamesSlice.actions;
export const { toggleFavorite, loadFavorites, toggleShowFavorites } =
  favoritesSlice.actions;
