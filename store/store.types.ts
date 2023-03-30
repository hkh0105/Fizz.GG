export type ChampTotalMatchInfoArray = [string, TotalMatchChampData][];

export type RecentChampInfo = {
  [index: string]: TotalMatchChampData;
};

export type RecentMatchUserInfo = {
  kda: number;
  win: boolean;
  championName: string;
  id: string;
};

export type recentWinInfo = {
  win: number;
  winRate: number;
  total: number;
};

export type TotalMatchChampData = {
  kda: number;
  win: number;
  total: number;
};
