import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import RankCard from './RankCard';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { useGetLeagueInfo } from 'hooks/queries';
import { LeagueInfo, RankProps } from 'types';
import { RankCardPropsMapper } from './RankSection.props';

const RankSection: FC<RankProps> = ({ nickname }) => {
  const { leagueInfos } = useGetLeagueInfo(nickname);

  return (
    <>
      {leagueInfos?.map((leagueInfo: LeagueInfo) => {
        const { wins, losses, queueType, tier, rank, leaguePoints } =
          leagueInfo;

        const RankCardProps = RankCardPropsMapper(
          wins,
          losses,
          queueType,
          tier,
          rank,
          leaguePoints
        );

        return (
          <AsyncBoundary key={uuidv4()}>
            <RankCard {...RankCardProps} />
          </AsyncBoundary>
        );
      })}
    </>
  );
};

export default RankSection;
