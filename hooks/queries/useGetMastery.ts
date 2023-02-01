import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { Response, QueryOptions, MasteryInfo } from 'types';

export const useGetMastery = (
  id: string,
  options?: QueryOptions<Response<MasteryInfo[]>>
) => {
  const { data }: UseQueryResult<Response<MasteryInfo[]>> = useQuery(
    [QUERY_KEYS.getMasteryById, { id }],
    () => CLIENT_API.getMasteryById(id),
    options
  );

  const masteryInfo = data?.items;

  if (!masteryInfo) {
    throw new Error('No Data Found');
  }

  return {
    masteryInfo,
  };
};
