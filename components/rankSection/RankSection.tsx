import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import RankContents from './RankCard';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { useGetLeagueInfo } from 'hooks/queries';
import { LeagueInfo, RankProps } from 'types';

const RankSection: FC<RankProps> = ({ nickname }) => {
  const { leagueInfos } = useGetLeagueInfo(nickname);

  return (
    <>
      {leagueInfos.map((leagueInfo: LeagueInfo) => {
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
          <AsyncBoundary key={uuidv4()}>
            <RankContents {...RankContentsProps} />
          </AsyncBoundary>
        );
      })}
    </>
  );
};

export default RankSection;
