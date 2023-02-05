import { FC, Suspense } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Box from 'userInterface/box/Box';
import RankContents from './RankContents';
import { useGetLeagueInfo } from 'hooks/queries';
import { BoxProps, LeagueInfo, RankProps } from 'types';
import ErrorBoundary from 'pages/ErrorBoundary';

const RankSection: FC<RankProps> = ({ nickname }) => {
  const { leagueInfos } = useGetLeagueInfo(nickname);

  const BoxProps: BoxProps = {
    size: 'custom',
    width: 'w-[300px] max-sm:hidden',
  };

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
              <Box {...BoxProps}>
                <RankContents {...RankContentsProps} />
              </Box>
            </ErrorBoundary>
          </Suspense>
        );
      })}
    </>
  );
};

export default RankSection;
