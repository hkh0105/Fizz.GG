import moment from 'moment';
import { ChampDetails } from 'types';

export const convertLastPlayTime = (lastPlayTime: number) => {
  const convertedLastPlayTime =
    String(moment(lastPlayTime).diff(moment(), 'days')).replace('-', '') +
    '일전';

  return convertedLastPlayTime;
};

export const getChampName = (champData: ChampDetails, championId: number) => {
  let champName = '';
  const champDetail = Object.entries(champData).find(
    (champ) => champ[1]?.key === String(championId)
  );

  if (champDetail) {
    champName = champDetail[0];
  }

  return champName;
};
