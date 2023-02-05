import { FC, Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import PieChart from 'components/pieChart/PieChart';
import ErrorBoundary from 'pages/ErrorBoundary';
import ChampStatRow from './ChampStatRow';
import { recentChampInfo, recentWinStats } from 'store';
import { BoxProps, ChartData, PieChartProps, TypographyProps } from 'types';

const RecentStatSection: FC = () => {
  const champions = useRecoilValue(recentChampInfo);
  const winStats = useRecoilValue(recentWinStats);

  const chartData: ChartData<number>[] = [
    { id: 'Win', value: winStats.win, color: 'blue' },
    { id: 'Lose', value: winStats.total - winStats.win, color: 'red' },
  ];

  const BoxProps: BoxProps = {
    size: 'custom',
    width: 'w-[300px] max-sm:hidden',
  };

  const PieChartProps: PieChartProps<ChartData<number>> = {
    data: chartData,
    margin: { top: 40, right: 50 },
  };

  const RecentMatchTextProps: TypographyProps = {
    type: 'default',
    text: `최근 ${winStats.total} 경기 데이터`,
  };

  const WinRateProps: TypographyProps = {
    type: 'default',
    text: `${(winStats.winRate * 100).toFixed(0)}%`,
  };

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <ErrorBoundary>
        <Box {...BoxProps}>
          <div className='items-center mx-2 my-3 divide-y'>
            <Typography {...RecentMatchTextProps} />
            <div className='w-[300px] h-[150px] mb-10'>
              <PieChart {...PieChartProps} />
              <div className='translate-x-[109px] translate-y-[-68px]'>
                <Typography {...WinRateProps} />
              </div>
            </div>
            {champions.map((champInfo) => {
              const ChampStatRowProps = {
                champInfo,
              };

              return <ChampStatRow {...ChampStatRowProps} key={champInfo[0]} />;
            })}
          </div>
        </Box>
      </ErrorBoundary>
    </Suspense>
  );
};

export default RecentStatSection;
