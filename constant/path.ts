export const PATH = {
  getSummonerByNickname: 'summoner/v4/summoners/by-name/{nickname}',
  getSummonerByPUUID: 'summoner/v4/summoners/by-puuid/{puuid}',
  getMatchesByPUUID:
    'match/v5/matches/by-puuid/{puuid}/ids?start={count}&count=10',
  getLeagueById: 'league/v4/entries/by-summoner/{encryptedSummonerId}',
  getGameByMatchId: 'match/v5/matches/{matchId}',
  getSpell:
    'https://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/summoner.json',
  getRune:
    'https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/runesReforged.json',
  getInGameByPuuid: 'spectator/v4/active-games/by-summoner/{puuid}',
  getMasteryById: 'champion-mastery/v4/champion-masteries/by-summoner/{id}',
};

export const BFF_PATH = {
  getSummonerByNickname: '/api/getSummonerByNickname?nickname={nickname}',
  getLeagueInfoById: '/api/getLeagueInfo?id={id}',
  getMatchesByPUUID: '/api/getMatchIds?puuid={puuid}&count={count}',
  getGameByMatchId: '/api/getGame?matchId={matchId}',
  getInGameByPuuid: '/api/getInGame?puuid={puuid}',
  getMasteryById: '/api/getMastery?id={id}',
};
