import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { Response, SummonerInfo, QueryOptions } from './query.types';

export const useGetSummoner = (
  nickname: string,
  options?: QueryOptions<Response<SummonerInfo>>
) => {
  const { data, refetch }: UseQueryResult<Response<SummonerInfo>> = useQuery(
    [QUERY_KEYS.getSummonerByNickname, { nickname }],
    () => CLIENT_API.getSummonerByNickname(nickname),
    options
  );
  const summonerInfo = data?.items as SummonerInfo;

  const { id, puuid, name, summonerLevel, profileIconId } = summonerInfo;

  return {
    name,
    summonerLevel,
    profileIconId,
    id,
    puuid,
    refetch,
  };
};
