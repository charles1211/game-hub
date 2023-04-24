import UseGenres from '../hooks/useGenres';

interface GenreListProps {}

const GenreList = ({}: GenreListProps) => {
  const { data } = UseGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}> {genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
