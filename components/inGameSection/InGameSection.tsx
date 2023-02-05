import { FC, Suspense } from 'react';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import InGameTeamColumn from './InGameTeamColumn';
import { useGetInGame } from 'hooks/queries';
import {
  BoxProps,
  IngameSectionProps,
  InGameTeamColumnProps,
  QueueTypeMapper,
  TypographyProps,
} from 'types';
import ErrorBoundary from 'pages/ErrorBoundary';

const IngameSection: FC<IngameSectionProps> = ({ nickname }) => {
  const { summonerTeam, enemyTeam, queueType } = useGetInGame(nickname);

  const queueTypeMapper: QueueTypeMapper = {
    0: '커스텀 게임',
    400: '노말',
    430: '노말',
    420: '솔로랭크',
    440: '자유랭크',
    83: 'AI모드',
    450: '칼바람나락',
  };

  const GameModeProps: TypographyProps = {
    color: 'gray',
    text: queueTypeMapper[queueType],
    type: 'title',
  };

  const BoxProps: BoxProps = {
    size: 'custom',
    height: 'h-[350px]',
    width: 'w-[800px]',
    color: 'blue',
  };

  const SummonerColumnProps: InGameTeamColumnProps = {
    users: summonerTeam,
  };

  const EnemyColumnProps: InGameTeamColumnProps = {
    users: enemyTeam,
  };

  const VersusProps: TypographyProps = {
    text: 'VS',
    type: 'title',
    color: 'gray',
  };

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <ErrorBoundary>
        <section className='flex flex-col items-center my-3 gap-y-3'>
          <Typography {...GameModeProps} />
          <Box {...BoxProps}>
            <div className='flex items-center justify-evenly'>
              <InGameTeamColumn {...SummonerColumnProps} />
              <Typography {...VersusProps} />
              <InGameTeamColumn {...EnemyColumnProps} />
            </div>
          </Box>
        </section>
      </ErrorBoundary>
    </Suspense>
  );
};
export default IngameSection;
