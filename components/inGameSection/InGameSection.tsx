import { FC } from 'react';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import InGameTeamColumn from './InGameTeamColumn';
import { useGetInGame } from 'hooks/queries';
import { IngameSectionProps, QueueTypeMapper } from 'types';
import {
  BoxPropsMapper,
  InGameTeamColumnPropsMapper,
  TypographyPropsMapper,
} from 'utils';

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

  const GameModeProps = TypographyPropsMapper({
    color: 'gray',
    text: queueTypeMapper[queueType],
    type: 'title',
  });

  const BoxProps = BoxPropsMapper({
    size: 'custom',
    height: 'h-[350px]',
    width: 'w-[800px]',
    color: 'blue',
  });

  const SummonerColumnProps = InGameTeamColumnPropsMapper(summonerTeam);
  const EnemyColumnProps = InGameTeamColumnPropsMapper(enemyTeam);

  const VersusProps = TypographyPropsMapper({
    text: 'VS',
    type: 'title',
    color: 'gray',
  });

  return (
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
  );
};

export default IngameSection;
