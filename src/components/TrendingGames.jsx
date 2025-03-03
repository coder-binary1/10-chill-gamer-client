import { useEffect, useState } from "react";
import GameCard from "./GameCard";

const TrendingGames = () => {
  const [games, setGames] = useState();

  useEffect(() => {
    fetch("gameData.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <div className="text-center my-16">
      <h2 className="text-4xl font-titillium font-bold text-gray-700">
        Trending Games
      </h2>
      <div className="border-2 w-10 m-auto border-red-500 mt-2 mb-6"></div>
      <div className="flex flex-wrap justify-center gap-6 mt-4 mx-5">
        {games?.map((game, idx) => (
          <GameCard key={idx} game={game}></GameCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingGames;
