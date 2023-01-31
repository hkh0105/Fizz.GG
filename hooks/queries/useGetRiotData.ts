import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { QueryOptions, RiotSpellData } from 'types';

export const useGetSpellJson = (options?: QueryOptions<RiotSpellData>) => {
  const { data: riotSpellData }: UseQueryResult<RiotSpellData> = useQuery(
    [QUERY_KEYS.getSpell],
    CLIENT_API.getSpell,
    options
  );

  const spellData = riotSpellData?.data;

  if (!spellData) {
    throw new Error('No Data Found');
  }

  return {
    spellData,
  };
};

// export const { data: riotRuneData }: UseQueryResult<RuneData> = useQuery(
//   [QUERY_KEYS.getRune],
//   CLIENT_API.getRune
// );
