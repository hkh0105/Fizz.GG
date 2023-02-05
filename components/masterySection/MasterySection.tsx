import { FC, Suspense } from 'react';

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
import ErrorBoundary from 'pages/ErrorBoundary';

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

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <ErrorBoundary>
        <section className='flex flex-col items-center my-32 mt-10 gap-y-10'>
          <Typography {...GameModeProps} />
          <Box {...BoxProps}>
            <MasteryHeader />
            {masteryInfo.map((mastery) => {
              const MasteryRowProps: MasteryRowProps = {
                masteryInfo: mastery,
              };

              return (
                <Suspense
                  fallback={<div>LOADING</div>}
                  key={mastery.championId}
                >
                  <ErrorBoundary>
                    <MasteryRow {...MasteryRowProps} />
                  </ErrorBoundary>
                </Suspense>
              );
            })}
          </Box>
        </section>
      </ErrorBoundary>
    </Suspense>
  );
};
export default MasterySection;
