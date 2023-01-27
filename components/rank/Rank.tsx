import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Box from 'userInterface/box/Box';
import RankContents from './RankContents';
import { INITIAL_DATA, QUERY_KEYS } from 'constant';
import { CLIENT_API } from 'api/api';
import {
  BoxProps,
  LeagueInfo,
  LeagueInfoArr,
  RankProps,
  Response,
  SummonerInfo,
} from 'types';

const Rank: FC<RankProps> = ({ nickname }) => {
  const { data: summonerResponse }: UseQueryResult<Response<SummonerInfo>> =
    useQuery([QUERY_KEYS.getSummonerByNickname, { nickname }]);
  const { id } = summonerResponse?.items ?? INITIAL_DATA.summonerInfo;

  const { data: leagueInfo }: UseQueryResult<Response<LeagueInfoArr>> =
    useQuery(
      ['getLeagueInfo', { nickname }],
      () => CLIENT_API.getLeagueInfoById(id),
      { enabled: !!id }
    );
  const leagueInfoArr = leagueInfo?.items.length
    ? leagueInfo?.items
    : INITIAL_DATA.leagueInfoArr;

  const BoxProps: BoxProps = {
    size: 'custom',
    width: 'w-[300px] max-sm:hidden',
  };

  return (
    <>
      {leagueInfoArr.map((rankInfo: LeagueInfo) => {
        const { wins, losses, queueType, tier, rank, leaguePoints } = rankInfo;
        const RankContentsProps = {
          wins,
          losses,
          queueType,
          tier,
          rank,
          leaguePoints,
        };

        return (
          <Box {...BoxProps} key={uuidv4()}>
            <RankContents {...RankContentsProps} />
          </Box>
        );
      })}
    </>
  );
};

export default Rank;
