import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import UseGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface GenreListProps {}

const GenreList = ({}: GenreListProps) => {
  const { data, isloading, error } = UseGenres();

  if (error) return null;
  if (isloading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
