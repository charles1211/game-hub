import UseGenres from './useGenres';

const useGenre = (id?: number) => {
  const { data: genres } = UseGenres();
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
