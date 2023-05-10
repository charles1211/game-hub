import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ''} ${genre?.name || ''}`;
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
