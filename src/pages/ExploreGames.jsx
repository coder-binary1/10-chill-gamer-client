import { useLoaderData } from "react-router-dom";
import GameCard from "../components/GameCard";

const ExploreGames = () => {
  const games = useLoaderData();

  return (
    <div className="flex flex-wrap gap-6 justify-center py-12">
      {games.map((game, idx) => (
        <GameCard key={idx} game={game}></GameCard>
      ))}
    </div>
  );
};

export default ExploreGames;
