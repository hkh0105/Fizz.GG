import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { useGetSummoner } from './useGetSummoner';
import { LeagueInfoArr, QueryOptions, Response } from 'types';

export const useGetLeagueInfo = (
  nickname: string,
  options?: QueryOptions<Response<LeagueInfoArr>>
) => {
  const { id } = useGetSummoner(nickname);
  const { data }: UseQueryResult<Response<LeagueInfoArr>> = useQuery(
    [QUERY_KEYS.getLeagueInfoById, { id }],
    () => CLIENT_API.getLeagueInfoById(id),
    options
  );

  const leagueInfos = data?.items;

  if (!leagueInfos) {
    throw new Error('No Data Found');
  }

  return { leagueInfos };
};
