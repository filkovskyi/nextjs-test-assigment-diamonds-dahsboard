"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  BuildingStorefrontIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
}

interface Store {
  id: number;
  name: string;
  domain: string;
}

interface Creator {
  id: number;
  name: string;
  image: string;
  games_count: number;
}

export default function RAWGApiDisplay() {
  const [games, setGames] = useState<Game[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesResponse = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&page_size=12`
        );
        const gamesData = await gamesResponse.json();
        setGames(gamesData.results);

        const storesResponse = await fetch(
          `https://api.rawg.io/api/stores?key=${API_KEY}`
        );
        const storesData = await storesResponse.json();
        setStores(storesData.results);

        const creatorsResponse = await fetch(
          `https://api.rawg.io/api/creators?key=${API_KEY}&page_size=10`
        );
        const creatorsData = await creatorsResponse.json();
        setCreators(creatorsData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">RAWG API Display</h1>
      <Tabs defaultValue="games" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="games">Games</TabsTrigger>
          <TabsTrigger value="stores">Stores</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>
        <TabsContent value="games">
          <h2 className="text-2xl font-semibold mb-4">Games Grid View</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <Dialog key={game.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <img
                        src={game.background_image}
                        alt={game.name}
                        className="w-full h-48 object-cover rounded-md mb-2"
                      />
                      <h3 className="font-semibold">{game.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {new Date(game.released).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{game.name}</DialogTitle>
                  </DialogHeader>
                  <div>
                    <img
                      src={game.background_image}
                      alt={game.name}
                      className="w-full h-64 object-cover rounded-md mb-4"
                    />
                    <p className="text-gray-500 flex items-center mb-2">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Released: {new Date(game.released).toLocaleDateString()}
                    </p>
                    {/* Add more game details here */}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="stores">
          <h2 className="text-2xl font-semibold mb-4">Stores List View</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stores.map((store) => (
              <Card key={store.id}>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{store.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    <BuildingStorefrontIcon className="w-4 h-4 mr-1" />
                    {store.domain}
                  </p>
                  <Button
                    className="mt-2"
                    onClick={() =>
                      window.open(`https://${store.domain}`, "_blank")
                    }
                  >
                    Visit Store
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="leaderboard">
          <h2 className="text-2xl font-semibold mb-4">
            Top Creators Leaderboard
          </h2>
          <div className="space-y-4">
            {creators.map((creator, index) => (
              <Card key={creator.id}>
                <CardContent className="p-4 flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={creator.image} alt={creator.name} />
                    <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{creator.name}</h3>
                    <p className="text-sm text-gray-500">
                      Games: {creator.games_count}
                    </p>
                  </div>
                  <TrophyIcon
                    className={`w-6 h-6 ${
                      index < 3 ? "text-yellow-500" : "text-gray-400"
                    }`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
