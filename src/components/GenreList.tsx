import UseGenre from '../hooks/useGenres';

interface GenreListProps {}

const GenreList = ({}: GenreListProps) => {
  const { genres } = UseGenre();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}> {genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
