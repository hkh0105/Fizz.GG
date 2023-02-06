import { LeagueInfos, SummonerInfo } from 'types';

export type INITIAL_DATA_TYPE = {
  summonerInfo: SummonerInfo;
  leagueInfoArr: LeagueInfos;
};

export const INITIAL_DATA: INITIAL_DATA_TYPE = {
  summonerInfo: {
    id: '',
    name: '',
    accountId: '',
    profileIconId: 0,
    puuid: '',
    revisionDate: 0,
    summonerLevel: 0,
  },
  leagueInfoArr: [
    {
      leagueId: '',
      queueType: 'RANKED_SOLO_5x5',
      tier: 'UNRANKED',
      rank: '',
      summonerId: '',
      summonerName: '',
      leaguePoints: 0,
      wins: 0,
      losses: 0,
      veteran: false,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: '',
      queueType: 'RANKED_FLEX_SR',
      tier: 'UNRANKED',
      rank: '',
      summonerId: '',
      summonerName: '',
      leaguePoints: 0,
      wins: 0,
      losses: 0,
      veteran: false,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
  ],
};
