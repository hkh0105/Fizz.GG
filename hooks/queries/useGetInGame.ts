import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { Response, QueryOptions, InGameInfo, InGameUser } from 'types';

export const useGetInGame = (
  id: string,
  options?: QueryOptions<Response<InGameInfo>>
) => {
  const { data, refetch }: UseQueryResult<Response<InGameInfo>> = useQuery(
    [QUERY_KEYS.getInGameByPuuid, { id }],
    () => CLIENT_API.getInGameByPuuid(id),
    options
  );

  const inGameInfo = data?.items;

  if (!inGameInfo) {
    const message = '현제 게임중이지 않습니다.';

    throw { status: 404, message: message, name: '404Error' };
  }

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
