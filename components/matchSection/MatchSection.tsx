import { FC, Suspense, useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import MatchCard from './MatchCard';
import useIntersectionObserver from 'hooks/useInterSectionObserver';
import ErrorBoundary from 'pages/ErrorBoundary';
import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { recentInfo } from 'store';
import { useGetSummoner } from 'hooks/queries/useGetSummoner';
import {
  MatchCardProps,
  MatchIdArr,
  MatchSection,
  RecentMatchUserInfo,
  Response,
} from 'types';

const MatchSection: FC<MatchSection> = ({ nickname }) => {
  const [count, setCount] = useState(0);
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

  const { puuid } = useGetSummoner(nickname);

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
