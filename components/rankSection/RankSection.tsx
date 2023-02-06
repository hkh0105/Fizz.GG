import { FC, Suspense } from 'react';
import { v4 as uuidv4 } from 'uuid';

import RankContents from './RankCard';
import { useGetLeagueInfo } from 'hooks/queries';
import { LeagueInfo, RankProps } from 'types';
import ErrorBoundary from 'pages/ErrorBoundary';

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
          <Suspense fallback={<div>LOADING</div>} key={uuidv4()}>
            <ErrorBoundary>
              <RankContents {...RankContentsProps} />
            </ErrorBoundary>
          </Suspense>
        );
      })}
    </>
  );
};

export default RankSection;
