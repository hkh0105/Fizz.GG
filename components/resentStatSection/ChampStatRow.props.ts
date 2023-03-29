import { ChampionIconProps, TotalMatchChampData, TypographyProps } from 'types';

export const ChampKdaPropsMapper = (
  champInfo: [string, TotalMatchChampData]
): TypographyProps => ({
  type: 'default',
  color: 'gray',
  size: 'small',
  text: String(champInfo[1].kda.toFixed(2)) + ':1 평점',
});

export const WinPropsMapper = (
  champInfo: [string, TotalMatchChampData]
): TypographyProps => ({
  type: 'default',
  color: 'gray',
  size: 'small',
  text: String(champInfo[1].total) + '전' + String(champInfo[1].win) + '승',
});

export const WinRatePropsMapper = (winRate: string): TypographyProps => ({
  type: 'default',
  color: 'gray',
  size: 'small',
  text: winRate + '%',
});

export const ChampionIconPropsMapper = (
  championName: string
): ChampionIconProps => ({
  width: 30,
  championName,
  championLevel: undefined,
  marginClass: 'mt-2',
});
