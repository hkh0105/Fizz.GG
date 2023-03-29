import { MatchInfoByUser, RuneInfo, SpellInfos } from 'types';

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
