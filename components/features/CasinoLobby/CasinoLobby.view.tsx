import CasinoLobbyProps from "./CasinoLobby.props";

export default function CasinoLobbyView({
  StarField,
  CasinoHeader,
  Search,
  PopularGamesCarousel,
  ICONS,
  popularGames,
  GameGrid,
  CasinoFooter,
}: CasinoLobbyProps) {
  return (
    <div className="min-h-screen relative">
      <StarField count={20} />

      <CasinoHeader />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Search />

        <div className="glass-morphism rounded-3xl border border-white/20 relative overflow-visible p-6 md:p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-red-900/10 rounded-3xl" />
          <div className="absolute top-4 right-4 text-4xl opacity-10 animate-float">
            {ICONS.FIRE}
          </div>
          <div className="relative z-10">
            <PopularGamesCarousel games={popularGames} />
          </div>
        </div>

        <GameGrid />
      </main>

      <CasinoFooter />

      <div className="fixed bottom-8 right-8 z-50">
        <button className="btn-lunar rounded-full w-16 h-16 flex items-center justify-center text-2xl animate-float shadow-2xl">
          {ICONS.ROCKET}
        </button>
      </div>
    </div>
  );
}
