import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

interface GameHeadingProps {}

const GameHeading = ({}: GameHeadingProps) => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);
  const platFormId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platFormId);

  const heading = `${platform?.name || ''} ${genre?.name || ''}`;
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
