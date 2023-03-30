import {
  ChampionIconProps,
  ItemIconProps,
  KdaProps,
  MatchInfoByUser,
  RuneIconProps,
  RuneInfo,
  SpellIconProps,
  SpellInfos,
  TeamChampionProps,
  TypographyProps,
} from 'types';

export const RedTypographyPropsMapper = (text: string): TypographyProps => ({
  type: 'default',
  size: 'small',
  color: 'red',
  text: text,
});

export const GrayTypographyPropsMapper = (text: string): TypographyProps => ({
  type: 'default',
  size: 'small',
  color: 'red',
  text: text,
});

export const TeamChampionPropsMapper = (
  team: MatchInfoByUser[]
): TeamChampionProps => ({
  imageSize: 20,
  width: 140,
  team: team,
  typoSize: 'small',
});

export const ItemIconPropsMapper = (
  summonerItems: number[]
): ItemIconProps => ({
  summonerItems,
  width: 25,
  marginClass: 'mt-3',
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
  marginClass: 'mt-2 ml-2',
});

export const RuneIconPropsMapper = (runes: RuneInfo[]): RuneIconProps => ({
  runes: runes,
  width: 25,
  marginClass: 'ml-1',
});

export const SpellIconPropsMapper = (spells: SpellInfos): SpellIconProps => ({
  spells: spells,
  width: 25,
  marginClass: 'ml-2',
});

export const ChampionIconPropsMapper = (
  championName: string,
  championLevel?: number
): ChampionIconProps => ({
  width: 50,
  championName,
  championLevel,
});
