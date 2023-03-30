import { MatchCardProps } from 'types';

export const MatchCardPropsMapper = (
  matchId: string,
  nickname: string
): MatchCardProps => ({
  matchId: matchId,
  nickname: nickname,
});
