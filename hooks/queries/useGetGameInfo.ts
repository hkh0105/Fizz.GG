import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import {
  Response,
  QueryOptions,
  GameInfo,
  MatchTeam,
  GameDetailInfo,
  MatchInfoByUser,
} from 'types';

export const useGetGameInfo = (
  matchId: string,
  nickname: string,
  options?: QueryOptions<Response<GameInfo>>
) => {
  const { data, refetch }: UseQueryResult<Response<GameInfo>> = useQuery(
    [QUERY_KEYS.getGameByMatchId, { matchId }],
    () => CLIENT_API.getGameByMatchId(matchId),
    options
  );

  const gameInfo = data?.items.info as GameDetailInfo;

  const { participants, gameDuration, queueId, gameCreation } = gameInfo;
  const searchedUser = participants.find((user) => {
    return (
      user.summonerName.toLowerCase().trim() === nickname.toLowerCase().trim()
    );
  }) as MatchInfoByUser;

  const {
    win: isWin,
    summoner1Id,
    summoner2Id,
    perks,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    kills,
    assists,
    deaths,
    visionScore,
    totalMinionsKilled,
    champLevel,
    championName,

    goldEarned,
    tripleKills,
    doubleKills,
    quadraKills,
    pentaKills,
  } = searchedUser;

  const summonerTeamInfo = gameInfo.teams.find(
    (data) => data.win === searchedUser.win
  ) as MatchTeam;

  return {
    summonerTeamInfo,
    isWin,
    summoner1Id,
    summoner2Id,
    perks,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    kills,
    assists,
    deaths,
    visionScore,
    totalMinionsKilled,
    champLevel,
    championName,
    goldEarned,
    tripleKills,
    doubleKills,
    quadraKills,
    pentaKills,
    searchedUser,
    gameDuration,
    queueId,
    gameCreation,
    participants,
    gameInfo,
  };
};
