import { ReactNode, SuspenseProps } from 'react';
import {
  ButtonGroupProps,
  ButtonProps,
  ChampionIconProps,
  ChampStatRowProps,
  ChartData,
  CustomImageProps,
  DetailHeaderColorMapper,
  DetailSectionHeaderProps,
  DetailSectionProps,
  IngameSectionProps,
  InGameTeamColumnProps,
  InGameUser,
  InGameUserRowProps,
  ItemIconProps,
  KdaProps,
  Margin,
  MasteryInfo,
  MasteryRowProps,
  MatchCardProps,
  MatchInfoByUser,
  MatchOverViewProps,
  MatchSummonerOverViewProps,
  PieChartProps,
  ProfileIconProps,
  QueueTypeMapper,
  RankContentsProps,
  RankTitleMapper,
  RuneIconProps,
  RuneInfo,
  SearchWindowProps,
  SingleBarChartProps,
  SingleBarColorMapper,
  SpellIconProps,
  SpellInfos,
  TeamChampionProps,
  TotalMatchChampData,
  TypoGraphyColorMapper,
  TypoGraphySizeMapper,
  UserStatRowProps,
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
): KdaProps => ({
  kills: kills,
  deaths: deaths,
  assists: assists,
  kda: kda,
  marginClass: marginClass,
  size: size,
  kdaSize: kdaSize,
});

export const MasteryRowPropsMapper = (
  masteryInfo: MasteryInfo
): MasteryRowProps => ({
  masteryInfo: masteryInfo,
});

export const MatchCardPropsMapper = (
  matchId: string,
  nickname: string
): MatchCardProps => ({
  matchId: matchId,
  nickname: nickname,
});

export const MatchOverViewPropsMapper = (
  matchType: ValueOf<QueueTypeMapper>,
  dayDiff: string,
  gameTime: string,
  isWin: boolean
): MatchOverViewProps => ({
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
): MatchSummonerOverViewProps => ({
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
): UserStatRowProps => ({
  summoner: summoner,
  maxDamage: maxDamage,
  maxTakenDamage: maxTakenDamage,
});

export const PieChartPropsMapper = (
  data: ChartData<number>[],
  margin: Margin
) => ({
  data: data,
  margin: margin,
});

export const ProfileIconPropsMapper = (
  profileIconId: number,
  width: number,
  height: number,
  summonerLevel?: number
): ProfileIconProps => ({
  profileIconId: profileIconId,
  width: width,
  height: height,
  summonerLevel: summonerLevel,
});

export const RuneIconPropsMapper = (
  runes: RuneInfo[],
  width: number,
  marginClass: string
): RuneIconProps => ({
  runes: runes,
  width: width,
  marginClass: marginClass,
});

export const SpellIconPropsMapper = (
  spells: SpellInfos,
  width: number,
  marginClass: string
): SpellIconProps => ({
  spells: spells,
  width: width,
  marginClass: marginClass,
});

export const RankCardPropsMapper = (
  wins: number,
  losses: number,
  queueType: keyof RankTitleMapper,
  tier: string,
  rank: string,
  leaguePoints: number
): RankContentsProps => ({
  wins: wins,
  losses: losses,
  queueType: queueType,
  tier: tier,
  rank: rank,
  leaguePoints: leaguePoints,
});

export const ChampStatRowPropsMapper = (
  champInfo: [string, TotalMatchChampData]
): ChampStatRowProps => ({
  champInfo: champInfo,
});

export const SearchWindowPropsMapper = (
  isMini: boolean
): SearchWindowProps => ({
  mini: isMini,
});

export const SingleBarChartPropsMapper = (
  width: number,
  height: number,
  startValue: number,
  totalValue: number,
  startColor: keyof SingleBarColorMapper,
  endColor: keyof SingleBarColorMapper,
  isValueShow: boolean,
  title?: string,
  endValue?: string | number,
  titleSize?: keyof TypoGraphySizeMapper,
  titleColor?: keyof TypoGraphyColorMapper,
  valueSize?: keyof TypoGraphySizeMapper,
  valueColor?: keyof TypoGraphyColorMapper,
  marginClass?: string
): SingleBarChartProps => ({
  width: width,
  height: height,
  startValue: startValue,
  totalValue: totalValue,
  startColor: startColor,
  endColor: endColor,
  isValueShow: isValueShow,
  title: title,
  endValue: endValue,
  marginClass: marginClass,
  titleSize: titleSize,
  titleColor: titleColor,
  valueSize: valueSize,
  valueColor: valueColor,
});

export const TeamChampionPropsMapper = (
  imageSize: number,
  width: number,
  team: MatchInfoByUser[],
  typoSize: keyof TypoGraphySizeMapper
): TeamChampionProps => ({
  imageSize: imageSize,
  width: width,
  team: team,
  typoSize: typoSize,
});
