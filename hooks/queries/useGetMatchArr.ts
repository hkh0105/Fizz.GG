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
    data: matchIdArr,
  }: UseQueryResult<Response<MatchIdArr>> = useQuery(
    [QUERY_KEYS.getMatchIdArrByPuuid, { puuid }],
    () => CLIENT_API.getMatchArrByPuuid(puuid, count),
    options
  );

  return {
    refetchMatchArr,
  };
};
