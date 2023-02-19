import { ChangeEvent, MouseEventHandler, ReactNode } from 'react';

export interface SearchWindowProps {
  mini?: boolean;
}

export type QueryOptions<T> = {
  enabled?: boolean;
  onSuccess?: (response: T) => void;
};

export type OptionalQueryOptions<T> = Partial<QueryOptions<T>>;

export interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: keyof ButtonSize;
  color?: keyof ButtonColor;
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
  large: string;
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

export type Response<T> = {
  message: string;
  items: T;
};

export type LeagueInfos = LeagueInfo[];

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
//나만의 것으로 Parsing
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
  marginClass?: string;
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
  summonerLevel?: number;
  width: number;
  height: number;
}

export interface ButtonGroupProps {
  containerClassName: string;
  buttons: ButtonProps[];
}

export interface TypographyProps {
  text: string;
  type: keyof TypographyTypeMapper;
  isTitle?: boolean;
  color?: keyof TypoGraphyColorMapper;
  size?: keyof TypoGraphySizeMapper;
}

export type TypoGraphySizeMapper = {
  medium: string;
  small: string;
  xSmall: string;
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

export type MatchIds = string[];

export type BoxColorMapper = {
  default: 'bg-white';
  red: 'bg-red-100';
  blue: 'bg-blue-100';
};

export type GameInfo = {
  info: GameDetailInfo;
  metadata: Metadata;
};

export type Perks = {
  styles: [
    {
      selections: [
        {
          perk: number;
        }
      ];
      style: number;
    },
    {
      style: number;
    }
  ];
};

export type Game = {
  Creation: number;
  Duration: number;
};

type GameDuration = number;

export type GameDetailInfo = {
  gameCreation: Game['Creation'];
  gameDuration: GameDuration;
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
  teams: Teams;
};

export type Objectives = {
  [index: string]: { first: boolean; kills: number };
};
export type Metadata = {
  dataVersion: string;
  matchId: string;
  participants: Participants;
};

export type Teams = [MatchTeam, MatchTeam];
export type MatchTeam = {
  bans: Ban[];
  objectives: Objectives;
  teamId: number;
  win: boolean;
};

export type Bans = Ban[];

export type Ban = {
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
  spells: SpellInfos;
  runes: RuneInfo[];
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

export type SpellInfos = [[string, { key: number }], [string, { key: number }]];

export interface IconProps {
  width: number;
  marginClass?: string;
}

export interface SpellIconProps extends IconProps {
  spells: SpellInfos;
}

export interface RuneIconProps extends IconProps {
  runes: RuneInfo[];
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

export interface UserStatRowProps {
  summoner: MatchInfoByUser;
  maxDamage: number;
  maxTakenDamage: number;
}

export interface DetailSectionHeaderProps {
  color: keyof DetailHeaderColorMapper;
}
export type DetailHeaderColorMapper = {
  red: string;
  blue: string;
};

export type SingleBarColorMapper = {
  red: string;
  blue: string;
  white: string;
  gray: string;
};

export interface SingleBarChartProps {
  width: number;
  height: number;
  title?: string;
  startValue: number;
  totalValue: number;
  startColor: keyof SingleBarColorMapper;
  endColor: keyof SingleBarColorMapper;
  endValue?: string | number;
  marginClass?: string;
  titleSize?: keyof TypoGraphySizeMapper;
  titleColor?: keyof TypoGraphyColorMapper;
  valueSize?: keyof TypoGraphySizeMapper;
  valueColor?: keyof TypoGraphyColorMapper;
  isValueShow: boolean;
}

export interface DetailSectionProps {
  summonerTeam: MatchInfoByUser[];
  enemyTeam: MatchInfoByUser[];
  maxDamage: number;
  maxTakenDamage: number;
}

export interface ChampStatRowProps {
  champInfo: [string, TotalMatchChampData];
}

export type RecentMatchUserInfo = {
  kda: number;
  win: boolean;
  championName: string;
  id: string;
};

export type TotalMatchChampData = {
  kda: number;
  win: number;
  total: number;
};

export type RecentChampInfo = {
  [index: string]: TotalMatchChampData;
};

export type recentWinInfo = {
  win: number;
  winRate: number;
  total: number;
};

export type ChampTotalMatchInfoArray = [string, TotalMatchChampData][];

export interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

export type InGameInfo = {
  gameId: string;
  mapId: number;
  gameMode: string;
  gameType: string;
  gameQueueConfigId: number;
  participants: InGameUser[];
  observers: { encryptionKey: string };
  platformId: MatchInfoByUser;
  bannedChampions: Champ[];
  gameStartTime: number;
  gameLength: number;
};

export type InGameUser = {
  bot: boolean;
  championId: number;
  perks: {
    perkIds: number[];
    perkStyle: number;
    perkSubStyle: number;
  };
  profileIconId: number;
  spell1Id: number;
  spell2Id: number;
  summonerId: string;
  summonerName: string;
  teamId: number;
};

export interface InGameTeamColumnProps {
  users: InGameUser[];
}

export interface InGameUserRowProps {
  nickname: string;
  runes: RuneInfo[];
  spells: SpellInfos;
  profileIconId: number;
}

export interface IngameSectionProps {
  nickname: string;
}

export type MasteryInfo = {
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  tokensEarned: number;
  summonerId: string;
};

export type RiotChampInfo = {
  data: ChampDetails;
};

export type ChampDetails = {
  [index: string]: {
    key: string;
    name: string;
    blurb: string;
    id: string;
    partype: string;
    title: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    stats: {};
    // eslint-disable-next-line @typescript-eslint/ban-types
    info: {};
  };
};

export interface MasteryRowProps {
  masteryInfo: MasteryInfo;
}

export type CustomError = {
  message: string;
  status: number;
  name: string;
};

export type InGamePerks = {
  perkIds: number[];
  perkStyle: number;
  perkSubStyle: number;
};

export interface AsyncBoundaryProps {
  children: ReactNode;
  key?: string;
}
