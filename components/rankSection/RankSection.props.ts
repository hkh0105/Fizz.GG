import { RankContentsProps, RankTitleMapper } from 'types';

export const RankCardPropsMapper = (
  wins: number,
  losses: number,
  queueType: keyof RankTitleMapper,
  tier: string,
  rank: string,
  leaguePoints: number
): RankContentsProps => ({
  wins: wins,
  losses: losses,
  queueType: queueType,
  tier: tier,
  rank: rank,
  leaguePoints: leaguePoints,
});
