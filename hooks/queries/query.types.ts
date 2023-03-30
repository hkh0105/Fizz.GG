export type QueryOptions<T> = {
  enabled?: boolean;
  onSuccess?: (response: T) => void;
};

export type Response<T> = {
  message: string;
  items: T;
};

//GameInfo

export type Teams = [MatchTeam, MatchTeam];

export type Bans = Ban[];

export type Ban = {
  championId: string;
  pickTurn: number;
};

export type Objectives = {
  [index: string]: { first: boolean; kills: number };
};
export type Metadata = {
  dataVersion: string;
  matchId: string;
  participants: Participants;
};

export type GameInfo = {
  info: GameDetailInfo;
  metadata: Metadata;
};

export type MatchTeam = {
  bans: Ban[];
  objectives: Objectives;
  teamId: number;
  win: boolean;
};

type GameDuration = number;

export type Game = {
  Creation: number;
  Duration: number;
};

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

//InGame
export type Participants = string[];

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

export type InGamePerks = {
  perkIds: number[];
  perkStyle: number;
  perkSubStyle: number;
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

//LeagueInfo

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

//Mastery

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

//Matches

export type MatchIds = string[];

//RiotData

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

export type RiotChampInfo = {
  data: ChampDetails;
};

export type BrowserResponse<T> = { data: T };

export type RiotSpellData = BrowserResponse<SpellData>;

export type SpellData = { [index: string]: { key: number } };

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

//Summoner

export type SummonerInfo = {
  accountId: string;
  id: string;
  name: string;
  puuid: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};
