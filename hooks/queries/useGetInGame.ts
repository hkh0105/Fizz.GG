import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { useGetSummoner } from './useGetSummoner';
import { Response, QueryOptions, InGameInfo, InGameUser } from './query.types';

export const useGetInGame = (
  nickname: string,
  options?: QueryOptions<Response<InGameInfo>>
) => {
  const { id } = useGetSummoner(nickname);
  const { data, refetch }: UseQueryResult<Response<InGameInfo>> = useQuery(
    [QUERY_KEYS.getInGameByPuuid, { id }],
    () => CLIENT_API.getInGameByPuuid(id),
    { ...options, enabled: !!id, retry: false }
  );

  const inGameInfo = data?.items as InGameInfo;

  const { gameQueueConfigId: queueType, participants } = inGameInfo;

  //User
  const searchedUser: InGameUser = participants.find(
    (user: InGameUser) => user.summonerId === id
  ) as InGameUser;

  //팀찾기
  const summonerTeam: InGameUser[] = participants.filter(
    (user: InGameUser) => user.teamId === searchedUser.teamId
  );
  const enemyTeam: InGameUser[] = participants.filter(
    (user: InGameUser) => user.teamId !== searchedUser.teamId
  );

  return {
    summonerTeam,
    enemyTeam,
    searchedUser,
    queueType,
    participants,
    inGameInfo,
    refetch,
  };
};
