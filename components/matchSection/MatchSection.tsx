import { FC } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import MatchCard from './MatchCard';
import { CLIENT_API } from 'api/api';
import { INITIAL_DATA, QUERY_KEYS } from 'constant';
import {
  MatchCardProps,
  MatchIdArr,
  MatchSection,
  Response,
  SummonerInfo,
} from 'types';

const MatchSection: FC<MatchSection> = ({ nickname }) => {
  const { data: summonerResponse }: UseQueryResult<Response<SummonerInfo>> =
    useQuery([QUERY_KEYS.getSummonerByNickname, { nickname }], () =>
      CLIENT_API.getSummonerByNickname(nickname)
    );

  const { puuid } = summonerResponse?.items ?? INITIAL_DATA.summonerInfo;

  const { data: matchIdArrResponse }: UseQueryResult<Response<MatchIdArr>> =
    useQuery(
      [QUERY_KEYS.getMatchIdArrByPuuid, { nickname }],
      () => CLIENT_API.getMatchArrByPuuid(puuid),
      { enabled: !!puuid }
    );

  return (
    <>
      {matchIdArrResponse?.items.map((matchId: string) => {
        const MatchCardProps: MatchCardProps = {
          matchId,
          nickname,
        };

        return <MatchCard {...MatchCardProps} key={matchId} />;
      })}
    </>
  );
};

export default MatchSection;
