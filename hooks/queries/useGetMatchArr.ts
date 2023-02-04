import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { Response, QueryOptions, MatchIdArr } from 'types';

export const useGetMatchIdArr = (
  puuid: string,
  count: number,
  options?: QueryOptions<Response<MatchIdArr>>
) => {
  const {
    refetch: refetchMatchArr,
    data,
  }: UseQueryResult<Response<MatchIdArr>> = useQuery(
    [QUERY_KEYS.getMatchIdArrByPuuid, { puuid }],
    () => CLIENT_API.getMatchArrByPuuid(puuid, count),
    options
  );

  const matchIdArr = data?.items;

  if (!matchIdArr?.length) {
    const message = '찾을 수 있는 데이터가 없습니다';

    throw { status: 404, message: message, name: '404Error' };
  }

  return {
    matchIdArr,
    refetchMatchArr,
  };
};
