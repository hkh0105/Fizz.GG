import { FC } from 'react';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import InGameTeamColumn from 'components/inGameTeamColumn/InGameTeamColumn';
import { useGetInGame } from 'hooks/queries';
import { IngameSectionProps } from './InGameSection.types';
import {
  GameModePropsMapper,
  InGameBoxProps,
  TeamColumnPropsMapper,
  VersusProps,
} from './InGameSection.props';

const IngameSection: FC<IngameSectionProps> = ({ nickname }) => {
  const { summonerTeam, enemyTeam, queueType } = useGetInGame(nickname);

  const GameModeProps = GameModePropsMapper(queueType);
  const SummonerColumnProps = TeamColumnPropsMapper(summonerTeam);
  const EnemyColumnProps = TeamColumnPropsMapper(enemyTeam);

  return (
    <section className='flex flex-col items-center my-3 gap-y-3'>
      <Typography {...GameModeProps} />
      <Box {...InGameBoxProps}>
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
