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

export type ChartData<T> = { id: string; value: T; color: string };

export interface RankContentsProps {
  wins: number;
  losses: number;
  queueType: keyof RankTitleMapper;
  tier: string;
  rank: string;
  leaguePoints: number;
}

export interface BoxProps {
  size: keyof BoxSizeMapper;
  color?: keyof BoxColorMapper;
  width?: string;
  height?: string;
  children?: ReactNode;
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
  type: keyof TypographyTypeMapper;
  isTitle?: boolean;
  color?: keyof TypoGraphyColorMapper;
  size?: keyof TypoGraphySizeMapper;
}

export type TypoGraphySizeMapper = {
  medium: string;
  small: string;
};

export type TypographyTypeMapper = {
  mainTitle: string;
  title: string;
  default: string;
  semibold: string;
};

export type TypoGraphyColorMapper = {
  black: string;
  blue: string;
  red: string;
  gray: string;
};

export interface ProfileProps {
  nickname: string;
}

export interface RankProps {
  nickname: string;
}

export type TierImages = {
  [key in RankTier]: string;
};

export type Images = TierImages & {
  logo: string;
  ICON: string;
  CHAMPION: string;
  ITEM: string;
  SPELL: string;
  RUNE: string;
};

export interface PieChartProps<T> {
  data: T[];
  margin?: Margin;
}

export interface MatchSection {
  nickname: string;
}

export type MatchIdArr = string[];

export type BoxColorMapper = {
  default: 'bg-white';
  red: 'bg-red-100';
  blue: 'bg-blue-100';
};

export type GameInfo = {
  info: GameDetailInfo;
  metadata: Metadata;
};

export type GameDetailInfo = {
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameId: number;
  gameStartTimestamp: number;
  mapId: number;
  queueId: number;
  gameMode: string;
  gameName: string;
  gameType: string;
  gameVersion: string;
  platformId: string;
  tournamentCode: string;
  participants: MatchInfoByUser[];
  teams: teams;
};

export type Objectives = {
  [index: string]: { first: boolean; kills: number };
};
export type Metadata = {
  dataVersion: string;
  matchId: string;
  participants: Participants;
};

export type teams = [MatchTeam, MatchTeam];
export type MatchTeam = {
  bans: ban[];
  objectives: Objectives;
  teamId: number;
  win: boolean;
};

export type ban = {
  championId: string;
  pickTurn: number;
};

export type MatchInfoByUser = {
  assists: number;
  champLevel: number;
  championId: number;
  championName: string;
  firstBloodKill: boolean;
  firstTowerKill: boolean;
  goldEarned: number;
  kills: number;
  individualPosition: string;
  puuid: string;
  role: string;
  perks: {
    styles: [
      { selections: [{ perk: number }]; style: number },
      { style: number }
    ];
  };
  teamId: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
  challenges: { kda: number };
  totalMinionsKilled: number;
  timeCCingOthers: number;
  visionScore: number;
  deaths: number;
  tripleKills: number;
  doubleKills: number;
  quadraKills: number;
  pentaKills: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  win: true;
};
export type Champ = {
  championId: number;
  championLevel: number;
  championPoints: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  lastPlayTime: number;
};

export type Participants = string[];

export interface MatchOverViewProps {
  matchType: ValueOf<QueueTypeMapper>;
  dayDiff: string;
  gameTime: string;
  isWin: boolean;
}

export type ValueOf<T> = T[keyof T];

export type QueueTypeMapper = {
  [index: number]: string;
};

export interface MatchCardProps {
  matchId: string;
  nickname: string;
}

export type RiotSpellData = BrowserResponse<SpellData>;
export type SpellData = { [index: string]: { key: number } };
export type BrowserResponse<T> = { data: T };

export type RiotRuneData = BrowserResponse<RuneData>;
export type RuneData = {
  id: number;
  key: string;
  icon: string;
  name: string;
  slots: {
    runes: {
      icon: string;
      id: number;
      name: string;
    }[];
  }[];
}[];

export interface ChampionIconProps {
  width: number;
  championName: string;
  championLevel?: number;
  marginClass?: string;
}

export type Margin = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

export interface MatchSummonerOverViewProps {
  champion: string;
  championLevel: number;
  summonerItems: number[];
  spell: SpellInfoArr;
  rune: RuneInfo[];
  kills: number;
  deaths: number;
  assists: number;
  kda: number;
  killInvolvedRate: number;
  totalMinionsKilled: number;
  visionScore: number;
  goldEarned: number;
  summonerTeam: MatchInfoByUser[];
  enemyTeam: MatchInfoByUser[];
}
export type RuneInfo = {
  id: number;
  key: string;
  icon: string;
  name: string;
};

export type SpellInfoArr = [
  [string, { key: number }],
  [string, { key: number }]
];

export interface IconProps {
  width: number;
  marginClass?: string;
}

export interface SpellIconProps extends IconProps {
  spell: SpellInfoArr;
}

export interface RuneIconProps extends IconProps {
  rune: RuneInfo[];
}

export interface KdaProps {
  kills: number;
  deaths: number;
  assists: number;
  kda?: number;
  marginClass?: string;
  size?: keyof TypoGraphySizeMapper;
  kdaSize?: keyof TypoGraphySizeMapper;
}

export interface ItemIconProps extends IconProps {
  summonerItems: number[];
}

export interface TeamChampionProps {
  imageSize: number;
  width: number;
  team: MatchInfoByUser[];
  typoSize: keyof TypoGraphySizeMapper;
}
