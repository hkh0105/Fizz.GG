import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { ChangeEvent, MouseEvent, ReactNode } from 'react';

export interface SearchWindowProps {
  onSubmit: (value: string) => void;
}

export type QueryOptions = Omit<
  UseQueryOptions<unknown, unknown, unknown, QueryKey>,
  'queryKey' | 'queryFn'
>;

export interface ButtonProps {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: keyof ButtonSize;
  borderColor?: keyof ButtonColor;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export type ButtonColor = {
  blue: string;
  gray: string;
  transparent: string;
};

export type ButtonSize = {
  small: string;
  medium: string;
  big: string;
};

export interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  labelFor: string;
  disabled?: boolean;
  placeholder?: string;
  size?: keyof InputSize;
  color?: keyof InputBorderColor;
  required?: boolean;
}

export type InputBorderColor = {
  blue: string;
  gray: string;
};

export type InputSize = {
  small: string;
  medium: string;
  big: string;
};

export type SummonerInfo = {
  accountId: string;
  id: string;
  name: string;
  puuid: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export type Error = {
  status: number;
  message: string;
};

export type Response<T> = {
  message: string;
  items: T;
};

export type LeagueInfoArr = LeagueInfo[];

export type LeagueInfo = {
  leagueId: string;
  queueType: keyof RankTitleMapper;
  tier: RankTier;
  rank: Rank;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
};

export type RankTitleMapper = {
  RANKED_SOLO_5x5: string;
  RANKED_FLEX_SR: string;
};

export type Rank = 'III' | 'I' | 'II' | 'IIII' | '';

export type RankTier =
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER'
  | 'UNRANKED';

export interface BoxProps {
  children: ReactNode;
  size: keyof BoxSizeMapper;
  width?: string;
  height?: string;
}

export type BoxSizeMapper = {
  small: string;
  medium: string;
  large: string;
  xLarge: string;
  full: string;
  custom: string;
};

export interface ProfileIconProps {
  profileIconId: number;
  summonerLevel: number;
  width: number;
  height: number;
}

export interface ButtonGroupProps {
  containerClassName: string;
  ButtonPropsArray: ButtonProps[];
}

export interface TypographyProps {
  string: string;
  type: keyof TypographyMapper;
}

export type TypographyMapper = {
  mainTitle: string;
  title: string;
  default: string;
};

export interface ProfileProps {
  nickname: string;
}
