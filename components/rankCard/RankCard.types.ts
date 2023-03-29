import { RankTitleMapper } from 'types';

export interface RankCardProps {
  wins: number;
  losses: number;
  queueType: keyof RankTitleMapper;
  tier: string;
  rank: string;
  leaguePoints: number;
}
