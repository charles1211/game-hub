import { Genre } from './Genre';
import { Publisher } from './Publisher';
import { platForm } from './platForm';

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: platForm }[];
  metacritic: number;
  rating_top: number;
}
