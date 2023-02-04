import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { Response, SummonerInfo, QueryOptions } from 'types';

export const useGetSummoner = (
  nickname: string,
  options?: QueryOptions<Response<SummonerInfo>>
) => {
  const { data, refetch }: UseQueryResult<Response<SummonerInfo>> = useQuery(
    [QUERY_KEYS.getSummonerByNickname, { nickname }],
    () => CLIENT_API.getSummonerByNickname(nickname),
    options
  );
  const summonerInfo = data?.items;

  if (!summonerInfo) {
    const message = '찾을 수 있는 데이터가 없습니다';

    throw { status: 404, message: message, name: '404Error' };
  }

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
