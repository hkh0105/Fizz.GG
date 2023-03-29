import {
  ChampionIconProps,
  TypographyProps,
  TypoGraphySizeMapper,
} from 'types';

export const SummonerNamePropsMapper = (
  typoSize: keyof TypoGraphySizeMapper,
  userName: string
): TypographyProps => ({
  type: 'default',
  size: typoSize,
  color: 'gray',
  text: userName,
});

export const ChampionIconPropsMapper = (
  width: number,
  championName: string
): ChampionIconProps => ({
  width,
  championName,
});
