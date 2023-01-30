import { atom, selector } from 'recoil';
import {
  ChampTotalMatchInfoArray,
  RecentChampInfo,
  RecentMatchUserInfo,
  recentWinInfo,
} from 'types';

export const recentInfo = atom<RecentMatchUserInfo[]>({
  key: 'MatchUserInfo',
  default: [],
});

export const recentChampInfo = selector<ChampTotalMatchInfoArray>({
  key: 'MatchUserInfo/champ',
  get: ({ get }) => {
    const infoList = get(recentInfo);
    const champMap: RecentChampInfo = {};

    infoList.map((info) => {
      if (champMap.hasOwnProperty(info.championName)) {
        champMap[info.championName].kda += info.kda;

        if (info.win) champMap[info.championName].win += 1;

        champMap[info.championName].total += 1;
      } else {
        champMap[info.championName] = {
          kda: info.kda,
          win: info.win ? 1 : 0,
          total: 1,
        };
      }
    });

    return Object.entries(champMap);
  },
});

export const recentWinStats = selector<recentWinInfo>({
  key: 'MatchUserInfo/win',
  get: ({ get }) => {
    const infoList = get(recentInfo);
    const winStats: recentWinInfo = { win: 0, total: 0, winRate: 0 };

    infoList.map((info) => {
      if (info.win) winStats.win += 1;
      winStats.total += 1;
    });

    winStats.winRate = winStats.win / winStats.total;

    return winStats;
  },
});
