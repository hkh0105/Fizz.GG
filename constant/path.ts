export const PATH = {
  getSummonerByNickname: 'summoner/v4/summoners/by-name/{nickname}',
  getSummonerByPUUID: 'summoner/v4/summoners/by-puuid/{puuid}',
  getMatchArrByPUUID: 'match/v5/matches/by-puuid/{puuid}/ids',
  getLeagueById: 'league/v4/entries/by-summoner/{encryptedSummonerId}',
};

export const BFF_PATH = {
  getSummonerByNickname: '/api/getSummonerByNickname?nickname={nickname}',
};
