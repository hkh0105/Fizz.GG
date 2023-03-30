export type { RuneInfo, SpellInfos, RecentMatchUserInfo } from 'types';

export interface MatchCardProps {
  matchId: string;
  nickname: string;
}

export type QueueTypeMapper = {
  [index: number]: string;
};
