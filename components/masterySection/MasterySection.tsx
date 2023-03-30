import { FC } from 'react';

import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import MasteryRow from '../masteryRow/MasteryRow';
import MasteryHeader from '../masteryHeader/MasteryHeader';
import { useGetMastery } from 'hooks/queries';
import { MasterySectionProps } from './MasterySection.types';
import {
  AsyncBoundaryPropsMapper,
  GameModePropsMapper,
  MasteryBoxProps,
  MasteryRowPropsMapper,
} from './MasterySection.props';

const MasterySection: FC<MasterySectionProps> = ({ nickname }) => {
  const { masteryInfo } = useGetMastery(nickname);

  const GameModeProps = GameModePropsMapper(nickname);
  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);

  return (
    <AsyncBoundary {...AsyncBoundaryProps}>
      <section className='flex flex-col items-center my-32 mt-10 gap-y-10'>
        <Typography {...GameModeProps} />
        <Box {...MasteryBoxProps}>
          <MasteryHeader />
          {masteryInfo.map((mastery) => {
            const MasteryRowProps = MasteryRowPropsMapper(mastery);

            return (
              <AsyncBoundary key={String(mastery.championId)}>
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
