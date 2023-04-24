import { SimpleGrid, Text } from '@chakra-ui/react';
import UseGames from '../hooks/useGames';
import GameCard from './GameCard';

interface GameGridProps {}

const GameGrid = ({}: GameGridProps) => {
  const { games, error } = UseGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
