import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { useGetSummoner } from './useGetSummoner';
import { LeagueInfos, QueryOptions, Response } from 'types';

export const useGetLeagueInfo = (
  nickname: string,
  options?: QueryOptions<Response<LeagueInfos>>
) => {
  const { id } = useGetSummoner(nickname);
  const { data }: UseQueryResult<Response<LeagueInfos>> = useQuery(
    [QUERY_KEYS.getLeagueInfoById, { id }],
    () => CLIENT_API.getLeagueInfoById(id),
    options
  );

  const leagueInfos = data?.items;

  return { leagueInfos };
};
