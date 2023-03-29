import Image from 'next/image';
import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import PieChart from 'components/pieChart/PieChart';
import Box from 'userInterface/box/Box';
import { ChartData, Margin, RankContentsProps } from 'types';
import {
  ImagePropsMapper,
  LpPropsMapper,
  PieChartPropsMapper,
  RankCardBoxProps,
} from './RankCard.props';

const RankCard: FC<RankContentsProps> = ({
  wins,
  losses,
  queueType,
  tier,
  rank,
  leaguePoints,
}) => {
  const winRate = ((wins / (wins + losses)) * 100).toFixed(0) + '%';
  const margin: Margin = { top: 0, left: -40, right: 0, bottom: 0 };
  const chartData: ChartData<number>[] = [
    { id: 'Win', value: wins, color: 'blue' },
    { id: 'Lose', value: losses, color: 'red' },
  ];

  const LpProps = LpPropsMapper(queueType, tier, rank, leaguePoints);
  const ImageProps = ImagePropsMapper(tier);
  const PieChartProps = PieChartPropsMapper(chartData, margin);

  return (
    <Box {...RankCardBoxProps}>
      <div className='flex-col mx-3 my-3 divide-y'>
        <Typography {...LpProps} />
        <div className='flex items-center'>
          <Image {...ImageProps} />
          <div className='flex items-center w-[240px] h-[100px] my-5'>
            <PieChart {...PieChartProps} />
            <p className='translate-x-[-127px]'>{winRate}</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default RankCard;
