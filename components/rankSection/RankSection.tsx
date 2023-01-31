import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Box from 'userInterface/box/Box';
import RankContents from './RankContents';
import { useGetLeagueInfo, useGetSummoner } from 'hooks/queries';
import { BoxProps, LeagueInfo, RankProps } from 'types';

const RankSection: FC<RankProps> = ({ nickname }) => {
  const { id } = useGetSummoner(nickname);
  const { leagueInfoArr } = useGetLeagueInfo(id);

  const BoxProps: BoxProps = {
    size: 'custom',
    width: 'w-[300px] max-sm:hidden',
  };

  return (
    <>
      {leagueInfoArr.map((leagueInfo: LeagueInfo) => {
        const { wins, losses, queueType, tier, rank, leaguePoints } =
          leagueInfo;
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

export default RankSection;
