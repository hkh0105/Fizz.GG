import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { useGetSummoner } from './useGetSummoner';
import { Response, QueryOptions, MasteryInfo } from 'types';

export const useGetMastery = (
  nickname: string,
  options?: QueryOptions<Response<MasteryInfo[]>>
) => {
  const { id } = useGetSummoner(nickname);
  const { data }: UseQueryResult<Response<MasteryInfo[]>> = useQuery(
    [QUERY_KEYS.getMasteryById, { id }],
    () => CLIENT_API.getMasteryById(id),
    { ...options, enabled: !!id }
  );

  const masteryInfo = data?.items;

  if (!masteryInfo) {
    const message = '찾을 수 있는 데이터가 없습니다';

    throw { status: 404, message: message, name: '404Error' };
  }

  return {
    masteryInfo,
  };
};
