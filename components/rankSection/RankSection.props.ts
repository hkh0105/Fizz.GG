import { RankCardProps, RankTitleMapper } from 'types';

export const RankCardPropsMapper = (
  wins: number,
  losses: number,
  queueType: keyof RankTitleMapper,
  tier: string,
  rank: string,
  leaguePoints: number
): RankCardProps => ({
  wins: wins,
  losses: losses,
  queueType: queueType,
  tier: tier,
  rank: rank,
  leaguePoints: leaguePoints,
});
