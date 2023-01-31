import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import PieChart from 'components/pieChart/PieChart';
import ChampStatRow from './ChampStatRow';
import { recentChampInfo, recentWinStats } from 'store';
import { BoxProps, ChartData, PieChartProps, TypographyProps } from 'types';

const RecentStatSection: FC = () => {
  const championArr = useRecoilValue(recentChampInfo);
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

  const TypographyProps: TypographyProps = {
    type: 'default',
    string: `최근 ${winStats.total} 경기 데이터`,
  };

  const WinRateTypographyProps: TypographyProps = {
    type: 'default',
    string: `${(winStats.winRate * 100).toFixed(0)}%`,
  };

  return (
    <Box {...BoxProps}>
      <div className='items-center mx-2 my-3 divide-y'>
        <Typography {...TypographyProps} />
        <div className='w-[300px] h-[150px] mb-10'>
          <PieChart {...PieChartProps} />
          <div className='translate-x-[109px] translate-y-[-68px]'>
            <Typography {...WinRateTypographyProps} />
          </div>
        </div>
        {championArr.map((champInfo) => (
          <ChampStatRow champInfo={champInfo} key={champInfo[0]} />
        ))}
      </div>
    </Box>
  );
};

export default RecentStatSection;