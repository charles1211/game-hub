import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import ms from 'ms';
import APIClient from '../services/api-client';
import { platForm } from '../entities/platForm';

const apiClient = new APIClient<platForm>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platfroms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
