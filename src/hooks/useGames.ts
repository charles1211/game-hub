import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { Fetchresponse } from '../services/api-client';
import { platForm } from './usePlatforms';

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platForm }[];
  metacritic: number;
  rating_top: number;
}

const UseGames = (gameQuery: GameQuery) =>
  useQuery<Fetchresponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default UseGames;
