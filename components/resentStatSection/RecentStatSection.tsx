import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import PieChart from 'components/pieChart/PieChart';
import ChampStatRow from 'components/champStatRow/ChampStatRow';
import { recentChampInfo, recentWinStats } from 'store';
import {
  RecentStatBoxProps,
  PieChartPropsMapper,
  RecentMatchPropsMapper,
  WinRatePropsMapper,
  ChampStatRowPropsMapper,
} from './RecentStatSection.props';

const RecentStatSection: FC = () => {
  const champions = useRecoilValue(recentChampInfo);
  const winStats = useRecoilValue(recentWinStats);

  const PieChartProps = PieChartPropsMapper(winStats);
  const RecentMatchProps = RecentMatchPropsMapper(winStats);
  const WinRateProps = WinRatePropsMapper(winStats);

  return (
    <AsyncBoundary>
      <Box {...RecentStatBoxProps}>
        <div className='items-center mx-2 my-3 divide-y'>
          <Typography {...RecentMatchProps} />
          <div className='w-75 h-37.5 mb-10'>
            <PieChart {...PieChartProps} />
            <div className='translate-x-27 -translate-y-17'>
              <Typography {...WinRateProps} />
            </div>
          </div>
          {champions.map((champInfo) => {
            const ChampStatRowProps = ChampStatRowPropsMapper(champInfo);

            return <ChampStatRow {...ChampStatRowProps} key={champInfo[0]} />;
          })}
        </div>
      </Box>
    </AsyncBoundary>
  );
};

export default RecentStatSection;
