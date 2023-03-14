import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';

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
  const { data, fetchNextPage }: UseInfiniteQueryResult<Response<MatchIds>> =
    useInfiniteQuery(
      [QUERY_KEYS.getMatchIdsByPuuid, { puuid }],
      async ({ pageParam = 10 }) =>
        CLIENT_API.getMatchesByPuuid(puuid, Number(pageParam)),
      {
        getNextPageParam: (lastPage, allPages) => {
          if (!lastPage) {
            const message = '찾을 수 있는 매치 데이터가 없습니다';

            throw { status: 404, message: message, name: '404Error' };
          }

          return count + 10;
        },
      }
    );

  const matchIds: string[] = [];
  data?.pages.map((page) => {
    matchIds.push(...page.items);
  });

  return {
    matchIds,
    data,
    fetchNextPage,
  };
};
