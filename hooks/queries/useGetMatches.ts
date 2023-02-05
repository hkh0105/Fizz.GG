import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { useGetSummoner } from './useGetSummoner';
import { Response, QueryOptions, MatchIds } from 'types';

export const useGetMatchIds = (
  nickname: string,
  count: number,
  options?: QueryOptions<Response<MatchIds>>
) => {
  const { puuid } = useGetSummoner(nickname);
  const { refetch: refetchMatches, data }: UseQueryResult<Response<MatchIds>> =
    useQuery(
      [QUERY_KEYS.getMatchIdsByPuuid, { puuid }],
      () => CLIENT_API.getMatchesByPuuid(puuid, count),
      { ...options, enabled: !!puuid }
    );

  const matchIds = data?.items;

  if (!matchIds?.length) {
    const message = '찾을 수 있는 데이터가 없습니다';

    throw { status: 404, message: message, name: '404Error' };
  }

  return {
    matchIds,
    refetchMatches,
  };
};
