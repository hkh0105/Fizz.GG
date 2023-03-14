import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { QueryOptions, RiotChampInfo, RiotSpellData, RuneData } from 'types';

export const useGetSpellJson = (options?: QueryOptions<RiotSpellData>) => {
  const { data: riotSpellData }: UseQueryResult<RiotSpellData> = useQuery(
    [QUERY_KEYS.getSpell],
    CLIENT_API.getSpell,
    options
  );

  const spellData = riotSpellData?.data;

  if (!spellData) {
    const message = '찾을 수 있는 라이엇 데이터가 없습니다';

    throw { status: 404, message: message, name: '404Error' };
  }

  return {
    spellData,
  };
};

export const useGetRuneJson = (options?: QueryOptions<RuneData>) => {
  const { data: runeData }: UseQueryResult<RuneData> = useQuery(
    [QUERY_KEYS.getRune],
    CLIENT_API.getRune,
    options
  );

  return {
    runeData,
  };
};

export const useGetChampJson = (options?: QueryOptions<RiotChampInfo>) => {
  const { data: riotChampData }: UseQueryResult<RiotChampInfo> = useQuery(
    [QUERY_KEYS.getChamp],
    CLIENT_API.getChamp,
    options
  );

  const champData = riotChampData?.data;

  return {
    champData,
  };
};
