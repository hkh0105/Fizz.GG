import {
  ChampionIconProps,
  ItemIconProps,
  KdaProps,
  RuneIconProps,
  RuneInfo,
  SingleBarChartProps,
  SingleBarColorMapper,
  SpellIconProps,
  SpellInfos,
  TypographyProps,
} from 'types';

export const ChampionIconPropsMapper = (
  championName: string,
  championLevel?: number
): ChampionIconProps => ({
  width: 30,
  championName,
  championLevel,
});

export const RuneIconPropsMapper = (runes: RuneInfo[]): RuneIconProps => ({
  runes: runes,
  width: 15,
  pt: 1,
});

export const SpellIconPropsMapper = (spells: SpellInfos): SpellIconProps => ({
  spells: spells,
  width: 15,
  pt: 1,
});

export const KdaPropsMapper = (
  kills: number,
  deaths: number,
  assists: number,
  kda: number
): KdaProps => ({
  kills: kills,
  deaths: deaths,
  assists: assists,
  kda: kda,
  mt: 2,
  ml: 5,
  size: 'xSmall',
  kdaSize: 'xSmall',
});

export const TypographyPropsMapper = (text: string): TypographyProps => ({
  type: 'default',
  size: 'xSmall',
  color: 'gray',
  text,
});

export const SingleBarChartPropsMapper = (
  startValue: number,
  totalValue: number,
  startColor: keyof SingleBarColorMapper,
  title: string | number,
  endValue: string | number
): SingleBarChartProps => ({
  width: 100,
  height: 15,
  startValue: startValue,
  totalValue: totalValue,
  startColor: startColor,
  endColor: 'white',
  isValueShow: false,
  title: String(title),
  endValue: endValue,
  titleSize: 'xSmall',
  titleColor: 'gray',
});

export const ItemIconPropsMapper = (
  summonerItems: number[]
): ItemIconProps => ({
  summonerItems,
  width: 25,
  pt: 7,
});
