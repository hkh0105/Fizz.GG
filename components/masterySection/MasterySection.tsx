import { FC } from 'react';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import MasteryRow from './MasteryRow';
import MasteryHeader from './MasteryHeader';
import { useGetSummoner, useGetMastery } from 'hooks/queries';
import {
  BoxProps,
  IngameSectionProps,
  MasteryRowProps,
  TypographyProps,
} from 'types';

const MasterySection: FC<IngameSectionProps> = ({ nickname }) => {
  const { id } = useGetSummoner(nickname);
  const { masteryInfo } = useGetMastery(id);

  const GameModeProps: TypographyProps = {
    type: 'title',
    color: 'gray',
    text: `${nickname} 의 챔피언 통계`,
  };

  const BoxProps: BoxProps = {
    size: 'custom',
    width: 'w-[800px]',
  };

  return (
    <section className='flex flex-col items-center my-32 mt-10 gap-y-10'>
      <Typography {...GameModeProps} />
      <Box {...BoxProps}>
        <MasteryHeader />
        {masteryInfo.map((mastery) => {
          const MasteryRowProps: MasteryRowProps = {
            masteryInfo: mastery,
          };

          return <MasteryRow {...MasteryRowProps} key={mastery.championId} />;
        })}
      </Box>
    </section>
  );
};
export default MasterySection;
