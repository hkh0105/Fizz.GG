import { MatchInfoByUser } from 'types';
export type { SpellInfos, RuneInfo } from 'types';

export interface UserStatRowProps {
  summoner: MatchInfoByUser;
  maxDamage: number;
  maxTakenDamage: number;
}
