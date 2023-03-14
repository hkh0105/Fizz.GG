import { ReactNode, SuspenseProps } from 'react';
import {
  ButtonGroupProps,
  ButtonProps,
  ChampionIconProps,
  CustomImageProps,
  DetailHeaderColorMapper,
  DetailSectionHeaderProps,
  DetailSectionProps,
  MatchInfoByUser,
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
