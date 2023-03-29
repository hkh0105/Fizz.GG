import { IMAGES } from 'constant';
import { ImageProps } from 'next/image';
import {
  BoxProps,
  ChartData,
  Images,
  Margin,
  RankTitleMapper,
  TypographyProps,
} from 'types';

const rankTitleMapper: RankTitleMapper = {
  RANKED_SOLO_5x5: '솔로랭크',
  RANKED_FLEX_SR: '자유랭크',
};

export const RankCardBoxProps: BoxProps = {
  size: 'custom',
  width: 'w-[300px] max-sm:hidden',
};

export const LpPropsMapper = (
  queueType: keyof RankTitleMapper,
  tier: string,
  rank: string,
  leaguePoints: number
): TypographyProps => ({
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
});

export const ImagePropsMapper = (tier: string): ImageProps => ({
  src: IMAGES[tier as keyof Images] ?? IMAGES['UNRANKED'],
  width: 70,
  height: 70,
  alt: '소환사 랭크 티어 이미지',
});

export const PieChartPropsMapper = (
  data: ChartData<number>[],
  margin: Margin
) => ({
  data: data,
  margin: margin,
});
