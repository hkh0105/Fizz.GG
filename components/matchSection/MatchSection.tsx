import { FC, Suspense, useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import MatchCard from './MatchCard';
import { CLIENT_API } from 'api/api';
import { INITIAL_DATA, QUERY_KEYS } from 'constant';
import {
  MatchCardProps,
  MatchIdArr,
  MatchSection,
  RecentMatchUserInfo,
  Response,
  SummonerInfo,
} from 'types';
import useIntersectionObserver from 'hooks/useInterSectionObserver';
import ErrorBoundary from 'pages/ErrorBoundary';
import { useRecoilState } from 'recoil';
import { recentInfo } from 'store';

const MatchSection: FC<MatchSection> = ({ nickname }) => {
  const [count, setCount] = useState(10);
  const [cash, setCash] = useState<string[]>([]);
  const [recentMatchArr, setRecentMatchArr] =
    useRecoilState<RecentMatchUserInfo[]>(recentInfo);

  const onIntersect: IntersectionObserverCallback = async ([
    { isIntersecting },
  ]) => {
    if (isIntersecting) {
      if (count < 70) {
        setCount((prev) => prev + 10);
        await refetchMatchArr();
      }
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  const { data: summonerResponse }: UseQueryResult<Response<SummonerInfo>> =
    useQuery([QUERY_KEYS.getSummonerByNickname, { nickname }], () =>
      CLIENT_API.getSummonerByNickname(nickname)
    );

  const { puuid } = summonerResponse?.items ?? INITIAL_DATA.summonerInfo;

  const { refetch: refetchMatchArr }: UseQueryResult<Response<MatchIdArr>> =
    useQuery(
      [QUERY_KEYS.getMatchIdArrByPuuid, { nickname }],
      () => CLIENT_API.getMatchArrByPuuid(puuid, count),
      {
        enabled: !!puuid,
        onSuccess: (response) => {
          setCash((prev) => prev.concat(response.items));
        },
      }
    );

  useEffect(() => {
    setRecentMatchArr([]);
  }, []);

  return (
    <>
      {cash.map((matchId: string) => {
        const MatchCardProps: MatchCardProps = {
          matchId,
          nickname,
        };

        return (
          <Suspense fallback={<div>LOADING</div>}>
            <ErrorBoundary>
              <MatchCard {...MatchCardProps} key={matchId} />
            </ErrorBoundary>
          </Suspense>
        );
      })}
      <div ref={setTarget} />
    </>
  );
};

export default MatchSection;
