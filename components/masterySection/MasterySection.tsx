import { FC } from 'react';

import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import MasteryRow from './MasteryRow';
import MasteryHeader from './MasteryHeader';
import { useGetMastery } from 'hooks/queries';
import {
  BoxProps,
  IngameSectionProps,
  MasteryRowProps,
  TypographyProps,
} from 'types';

const MasterySection: FC<IngameSectionProps> = ({ nickname }) => {
  const { masteryInfo } = useGetMastery(nickname);

  const GameModeProps: TypographyProps = {
    type: 'title',
    color: 'gray',
    text: `${nickname} 의 챔피언 통계`,
  };

  const BoxProps: BoxProps = {
    size: 'custom',
    width: 'w-[800px]',
  };

  const AsyncBoundaryProps = {
    key: nickname,
  };

  return (
    <AsyncBoundary {...AsyncBoundaryProps}>
      <section className='flex flex-col items-center my-32 mt-10 gap-y-10'>
        <Typography {...GameModeProps} />
        <Box {...BoxProps}>
          <MasteryHeader />
          {masteryInfo.map((mastery) => {
            const MasteryRowProps: MasteryRowProps = {
              masteryInfo: mastery,
            };

            return (
              <AsyncBoundary key={mastery.championId}>
                <MasteryRow {...MasteryRowProps} />
              </AsyncBoundary>
            );
          })}
        </Box>
      </section>
    </AsyncBoundary>
  );
};
export default MasterySection;
