import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import RankCard from 'components/rankCard/RankCard';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { useGetLeagueInfo } from 'hooks/queries';
import { RankSectionProps } from './RankSection.types';
import { RankCardPropsMapper } from './RankSection.props';

const RankSection: FC<RankSectionProps> = ({ nickname }) => {
  const { leagueInfos } = useGetLeagueInfo(nickname);

  return (
    <>
      {leagueInfos?.map((leagueInfo) => {
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
