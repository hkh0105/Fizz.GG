import { AxiosResponse } from 'axios';

import { browser, instance, regionInstance } from './config';
import { PATH } from '../constant';
import { BFF_PATH } from 'constant/path';
import { LeagueInfoArr, SummonerInfo } from 'types';

export const API = {
  getSummonerByNickname: async (
    nickname: string
  ): Promise<AxiosResponse<SummonerInfo>> =>
    await instance.get<SummonerInfo>(
      PATH.getSummonerByNickname.replace('{nickname}', nickname)
    ),
  getSummonerByPUUID: async (puuid: string) =>
    await instance.get(PATH.getSummonerByPUUID.replace('{puuid}', puuid)),
  getMatchArrByPUUID: async (puuid: string, count: string) =>
    await regionInstance.get<string[]>(
      PATH.getMatchArrByPUUID
        .replace('{puuid}', puuid)
        .replace('{count}', count)
    ),
  getLeagueInfoById: async (id: string) =>
    await instance.get<LeagueInfoArr>(
      PATH.getLeagueById.replace('{encryptedSummonerId}', id)
    ),
  getGameByMatchId: async (matchId: string) =>
    await regionInstance.get(
      PATH.getGameByMatchId.replace('{matchId}', matchId)
    ),
  getInGameByPuuid: async (puuid: string) =>
    await instance.get(PATH.getInGameByPuuid.replace('{puuid}', puuid)),
};

export const CLIENT_API = {
  getSummonerByNickname: (nickname: string) =>
    browser.get(BFF_PATH.getSummonerByNickname.replace('{nickname}', nickname)),
  getLeagueInfoById: (id: string) =>
    browser.get(BFF_PATH.getLeagueInfoById.replace('{id}', id)),
  getMatchArrByPuuid: (puuid: string, count: number) =>
    browser.get(
      BFF_PATH.getMatchArrByPuuid
        .replace('{puuid}', puuid)
        .replace('{count}', String(count))
    ),
  getGameByMatchId: (matchId: string) =>
    browser.get(BFF_PATH.getGameByMatchId.replace('{matchId}', matchId)),
  getSpell: () => browser.get(PATH.getSpell),
  getRune: () => browser.get(PATH.getRune),
  getInGameByPuuid: async (puuid: string) =>
    await browser.get(BFF_PATH.getInGameByPuuid.replace('{puuid}', puuid)),
};
