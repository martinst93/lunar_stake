export {
  store,
  setGames,
  setSearchTerm,
  setCategory,
  setLoading,
  toggleFavorite,
  loadFavorites,
  toggleShowFavorites,
} from "./store";
export type { RootState, AppDispatch } from "./store";
export { useAppDispatch, useAppSelector } from "./hooks";
