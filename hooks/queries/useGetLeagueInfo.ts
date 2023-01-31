import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { LeagueInfoArr, QueryOptions, Response } from 'types';

export const useGetLeagueInfo = (
  id: string,
  options?: QueryOptions<Response<LeagueInfoArr>>
) => {
  const { data }: UseQueryResult<Response<LeagueInfoArr>> = useQuery(
    [QUERY_KEYS.getLeagueInfoById, { id }],
    () => CLIENT_API.getLeagueInfoById(id),
    options
  );

  const leagueInfoArr = data?.items;

  if (!leagueInfoArr) {
    throw new Error('No Data Found');
  }

  return { leagueInfoArr };
};
