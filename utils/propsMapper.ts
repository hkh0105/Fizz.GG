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
  MatchInfoByUser,
  RuneInfo,
  SpellInfos,
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
