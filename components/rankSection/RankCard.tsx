import Image from 'next/image';
import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import PieChart from 'components/pieChart/PieChart';
import Box from 'userInterface/box/Box';
import { IMAGES } from 'constant';
import { PieChartPropsMapper } from 'utils/propsMapper';
import {
  ChartData,
  Margin,
  Images,
  RankContentsProps,
  RankTitleMapper,
  TypographyProps,
  BoxProps,
} from 'types';

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

  const rankTitleMapper: RankTitleMapper = {
    RANKED_SOLO_5x5: '솔로랭크',
    RANKED_FLEX_SR: '자유랭크',
  };

  const BoxProps: BoxProps = {
    size: 'custom',
    width: 'w-[300px] max-sm:hidden',
  };

  const LpProps: TypographyProps = {
    type: 'default',
    text:
      rankTitleMapper[queueType] +
      ' : ' +
      tier +
      ' ' +
      rank +
      ' ' +
      String(leaguePoints) +
      'LP',
  };

  const ImageProps = {
    src: IMAGES[tier as keyof Images] ?? IMAGES['UNRANKED'],
    width: 70,
    height: 70,
    alt: '소환사 랭크 티어 이미지',
  };

  const PieChartProps = PieChartPropsMapper(chartData, margin);

  return (
    <Box {...BoxProps}>
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
