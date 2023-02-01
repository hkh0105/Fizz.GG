import { FC } from 'react';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import InGameTeamColumn from './InGameTeamColumn';
import { useGetInGame, useGetSummoner } from 'hooks/queries';
import {
  BoxProps,
  IngameSectionProps,
  InGameTeamColumnProps,
  QueueTypeMapper,
  TypographyProps,
} from 'types';

const IngameSection: FC<IngameSectionProps> = ({ nickname }) => {
  const { id } = useGetSummoner(nickname);

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

  const GameModeTypoProps: TypographyProps = {
    color: 'gray',
    string: queueTypeMapper[queueType],
    type: 'title',
  };

  const BoxProps: BoxProps = {
    size: 'custom',
    height: 'h-[350px]',
    width: 'w-[800px]',
    color: 'blue',
  };

  const SummonerColumnProps: InGameTeamColumnProps = {
    team: summonerTeam,
  };

  const EnemyColumnProps: InGameTeamColumnProps = {
    team: enemyTeam,
  };

  const VersusTypoProps: TypographyProps = {
    string: 'VS',
    type: 'title',
    color: 'gray',
  };

  return (
    <section className='flex flex-col items-center my-3 gap-y-3'>
      <Typography {...GameModeTypoProps} />
      <Box {...BoxProps}>
        <div className='flex items-center justify-evenly'>
          <InGameTeamColumn {...SummonerColumnProps} />
          <Typography {...VersusTypoProps} />
          <InGameTeamColumn {...EnemyColumnProps} />
        </div>
      </Box>
    </section>
  );
};
export default IngameSection;
