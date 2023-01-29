import Image from 'next/image';
import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import PieChart from 'components/pieChart/PieChart';
import { IMAGES } from 'constant';
import {
  ChartData,
  Margin,
  Images,
  PieChartProps,
  RankContentsProps,
  RankTitleMapper,
  TypographyProps,
} from 'types';

const RankContents: FC<RankContentsProps> = ({
  wins,
  losses,
  queueType,
  tier,
  rank,
  leaguePoints,
}) => {
  const winRate = parseInt(String((wins / (wins + losses)) * 100)) + '%';
  const margin: Margin = { top: 0, left: -40, right: 0, bottom: 0 };
  const chartData: ChartData<number>[] = [
    { id: 'Win', value: wins, color: 'blue' },
    { id: 'Lose', value: losses, color: 'red' },
  ];

  const rankTitleMapper: RankTitleMapper = {
    RANKED_SOLO_5x5: '솔로랭크',
    RANKED_FLEX_SR: '자유랭크',
  };

  const TypographyProps: TypographyProps = {
    type: 'default',
    string:
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

  const PieChartProps: PieChartProps<ChartData<number>> = {
    data: chartData,
    margin,
  };

  return (
    <div className='flex-col mx-3 my-3 divide-y'>
      <Typography {...TypographyProps} />
      <div className='flex items-center'>
        <Image {...ImageProps} />
        <div className='flex items-center w-[240px] h-[100px] my-5'>
          <PieChart {...PieChartProps} />
          <p className='translate-x-[-125px]'>{winRate}</p>
        </div>
      </div>
    </div>
  );
};

export default RankContents;
