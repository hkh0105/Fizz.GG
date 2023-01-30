import { FC, useState } from 'react';
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
import useIntersectionObserver from 'hooks/useInterSectionObserver';

const MatchSection: FC<MatchSection> = ({ nickname }) => {
  const [count, setCount] = useState(10);

  const onIntersect: IntersectionObserverCallback = async ([
    { isIntersecting },
  ]) => {
    if (isIntersecting) {
      setCount((prev) => prev + 10);

      await refetchMatchArr();
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  const { data: summonerResponse }: UseQueryResult<Response<SummonerInfo>> =
    useQuery([QUERY_KEYS.getSummonerByNickname, { nickname }], () =>
      CLIENT_API.getSummonerByNickname(nickname)
    );

  const { puuid } = summonerResponse?.items ?? INITIAL_DATA.summonerInfo;

  const {
    data: matchIdArrResponse,
    refetch: refetchMatchArr,
  }: UseQueryResult<Response<MatchIdArr>> = useQuery(
    [QUERY_KEYS.getMatchIdArrByPuuid, { nickname }],
    () => CLIENT_API.getMatchArrByPuuid(puuid, count),
    { enabled: !!puuid, suspense: false }
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
      <div ref={setTarget} />
    </>
  );
};

export default MatchSection;
