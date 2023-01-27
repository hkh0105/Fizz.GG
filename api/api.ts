import { browser, instance, regionInstance } from './config';
import { PATH } from '../constant';
import { BFF_PATH } from 'constant/path';

export const API = {
  getSummonerByNickname: async (nickname: string) =>
    await instance.get(
      PATH.getSummonerByNickname.replace('{nickname}', nickname)
    ),
  getSummonerByPUUID: async (puuid: string) =>
    await instance.get(PATH.getSummonerByPUUID.replace('{puuid}', puuid)),
  getMatchArrByPUUID: async (puuid: string) =>
    await regionInstance.get(PATH.getMatchArrByPUUID.replace('{puuid}', puuid)),
  getLeagueInfoById: async (id: string) =>
    await instance.get(PATH.getLeagueById.replace('{encryptedSummonerId}', id)),
};

export const CLIENT_API = {
  getSummonerByNickname: (nickname: string) =>
    browser.get(BFF_PATH.getSummonerByNickname.replace('{nickname}', nickname)),
  getLeagueInfoById: (id: string) =>
    browser.get(BFF_PATH.getLeagueInfoById.replace('{id}', id)),
};
