import { MatchInfoByUser } from 'types';
export type { MatchInfoByUser } from 'types';

export interface DetailSectionProps {
  summonerTeam: MatchInfoByUser[];
  enemyTeam: MatchInfoByUser[];
  maxDamage: number;
  maxTakenDamage: number;
}
