export interface Game {
  id: string;
  name: string;
  provider: string;
  image: string;
  category: "slots" | "table" | "live";
}

export const mockGames: Game[] = [
  {
    id: "1",
    name: "Mega Fortune",
    provider: "NetEnt",
    image: "https://picsum.photos/400/300?random=1",
    category: "slots",
  },
  {
    id: "2",
    name: "Book of Dead",
    provider: "Play'n GO",
    image: "https://picsum.photos/400/300?random=2",
    category: "slots",
  },
  {
    id: "3",
    name: "Starburst",
    provider: "NetEnt",
    image: "https://picsum.photos/400/300?random=3",
    category: "slots",
  },
  {
    id: "4",
    name: "Gonzo's Quest",
    provider: "NetEnt",
    image: "https://picsum.photos/400/300?random=4",
    category: "slots",
  },
  {
    id: "5",
    name: "Wolf Gold",
    provider: "Pragmatic Play",
    image: "https://picsum.photos/400/300?random=5",
    category: "slots",
  },
  {
    id: "6",
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    image: "https://picsum.photos/400/300?random=6",
    category: "slots",
  },
  {
    id: "7",
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    image: "https://picsum.photos/400/300?random=7",
    category: "slots",
  },
  {
    id: "8",
    name: "European Roulette",
    provider: "Evolution Gaming",
    image: "https://picsum.photos/400/300?random=8",
    category: "table",
  },
  {
    id: "9",
    name: "Classic Blackjack",
    provider: "NetEnt",
    image: "https://picsum.photos/400/300?random=9",
    category: "table",
  },
  {
    id: "10",
    name: "Baccarat Pro",
    provider: "NetEnt",
    image: "https://picsum.photos/400/300?random=10",
    category: "table",
  },
  {
    id: "11",
    name: "Poker Three Card",
    provider: "Playtech",
    image: "https://picsum.photos/400/300?random=11",
    category: "table",
  },
  {
    id: "12",
    name: "American Roulette",
    provider: "Playtech",
    image: "https://picsum.photos/400/300?random=12",
    category: "table",
  },
  {
    id: "13",
    name: "Live Roulette",
    provider: "Evolution Gaming",
    image: "https://picsum.photos/400/300?random=13",
    category: "live",
  },
  {
    id: "14",
    name: "Live Blackjack",
    provider: "Evolution Gaming",
    image: "https://picsum.photos/400/300?random=14",
    category: "live",
  },
  {
    id: "15",
    name: "Live Baccarat",
    provider: "Evolution Gaming",
    image: "https://picsum.photos/400/300?random=15",
    category: "live",
  },
  {
    id: "16",
    name: "Lightning Roulette",
    provider: "Evolution Gaming",
    image: "https://picsum.photos/400/300?random=16",
    category: "live",
  },
  {
    id: "17",
    name: "Crazy Time",
    provider: "Evolution Gaming",
    image: "https://picsum.photos/400/300?random=17",
    category: "live",
  },
  {
    id: "18",
    name: "Dream Catcher",
    provider: "Evolution Gaming",
    image: "https://picsum.photos/400/300?random=18",
    category: "live",
  },
];
