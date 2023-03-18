import { ReactNode, SuspenseProps } from 'react';
import {
  ButtonGroupProps,
  ButtonProps,
  ChampionIconProps,
  CustomImageProps,
  DetailHeaderColorMapper,
  DetailSectionHeaderProps,
  DetailSectionProps,
  IngameSectionProps,
  InGameTeamColumnProps,
  InGameUser,
  InGameUserRowProps,
  ItemIconProps,
  MasteryInfo,
  MatchInfoByUser,
  QueueTypeMapper,
  RuneInfo,
  SpellInfos,
  TypoGraphySizeMapper,
  ValueOf,
} from 'types';

export const AsyncBoundaryPropsMapper = (key: string) => ({
  key,
});

export const SuspensePropsMapper = (
  fallback: ReactNode,
  children: ReactNode | undefined
): SuspenseProps => ({
  fallback,
  children,
});

export const ButtonGroupPropsMapper = (
  containerClassName: string,
  buttons: ButtonProps[]
): ButtonGroupProps => ({ containerClassName, buttons });

export const CustomImagePropsMapper = (
  source: string,
  alt: string,
  size: number,
  className?: string
): CustomImageProps => ({
  className,
  source,
  alt,
  size,
});

export const ChampionIconPropsMapper = (
  width: number,
  championName: string,
  championLevel?: number,
  marginClass?: string
): ChampionIconProps => ({
  width,
  championName,
  championLevel,
  marginClass,
});

export const DetailSectionPropsMapper = (
  summonerTeam: MatchInfoByUser[],
  enemyTeam: MatchInfoByUser[],
  maxDamage: number,
  maxTakenDamage: number
): DetailSectionProps => ({
  summonerTeam,
  enemyTeam,
  maxDamage,
  maxTakenDamage,
});

export const DetailSectionHeaderPropsMapper = (
  color: keyof DetailHeaderColorMapper
): DetailSectionHeaderProps => ({
  color,
});

export const DefaultSectionPropsMapper = (
  nickname: string
): IngameSectionProps => ({
  nickname,
});

export const InGameTeamColumnPropsMapper = (
  users: InGameUser[]
): InGameTeamColumnProps => ({
  users,
});

export const InGamerUserRowPropsMapper = (
  nickname: string,
  runes: RuneInfo[],
  spells: SpellInfos,
  profileIconId: number
): InGameUserRowProps => ({ nickname, runes, spells, profileIconId });

export const ItemIconPropsMapper = (
  summonerItems: number[],
  width: number,
  marginClass?: string
): ItemIconProps => ({
  summonerItems,
  width,
  marginClass,
});

export const KdaPropsMapper = (
  kills: number,
  deaths: number,
  assists: number,
  kda?: number,
  marginClass?: string,
  size?: keyof TypoGraphySizeMapper,
  kdaSize?: keyof TypoGraphySizeMapper
) => ({
  kills: kills,
  deaths: deaths,
  assists: assists,
  kda: kda,
  marginClass: marginClass,
  size: size,
  kdaSize: kdaSize,
});

export const MasteryRowPropsMapper = (masteryInfo: MasteryInfo) => ({
  masteryInfo: masteryInfo,
});

export const MatchCardPropsMapper = (matchId: string, nickname: string) => ({
  matchId: matchId,
  nickname: nickname,
});

export const MatchOverViewPropsMapper = (
  matchType: ValueOf<QueueTypeMapper>,
  dayDiff: string,
  gameTime: string,
  isWin: boolean
) => ({
  matchType: matchType,
  dayDiff: dayDiff,
  gameTime: gameTime,
  isWin: isWin,
});

export const MatchSummonerOverViewPropsMapper = (
  champion: string,
  championLevel: number,
  summonerItems: number[],
  spells: SpellInfos,
  runes: RuneInfo[],
  kills: number,
  deaths: number,
  assists: number,
  kda: number,
  killInvolvedRate: number,
  totalMinionsKilled: number,
  visionScore: number,
  goldEarned: number,
  summonerTeam: MatchInfoByUser[],
  enemyTeam: MatchInfoByUser[]
) => ({
  champion: champion,
  championLevel: championLevel,
  summonerItems: summonerItems,
  spells: spells,
  runes: runes,
  kills: kills,
  deaths: deaths,
  assists: assists,
  kda: kda,
  killInvolvedRate: killInvolvedRate,
  totalMinionsKilled: totalMinionsKilled,
  visionScore: visionScore,
  goldEarned: goldEarned,
  summonerTeam: summonerTeam,
  enemyTeam: enemyTeam,
});

export const UserStatRowPropsMapper = (
  summoner: MatchInfoByUser,
  maxDamage: number,
  maxTakenDamage: number
) => ({
  summoner: summoner,
  maxDamage: maxDamage,
  maxTakenDamage: maxTakenDamage,
});
