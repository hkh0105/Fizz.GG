import { FC, Suspense, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import MatchCard from './MatchCard';
import useIntersectionObserver from 'hooks/useInterSectionObserver';
import ErrorBoundary from 'pages/ErrorBoundary';
import { recentInfo } from 'store';
import { useGetMatchIds, useGetSummoner } from 'hooks/queries';
import {
  MatchCardProps,
  MatchSection,
  RecentMatchUserInfo,
  Response,
  MatchIds,
} from 'types';

const MatchSection: FC<MatchSection> = ({ nickname }) => {
  const [count, setCount] = useState(0);
  const [cache, setCache] = useState<string[]>([]);
  const [recentMatches, setRecentMatches] =
    useRecoilState<RecentMatchUserInfo[]>(recentInfo);

  const onIntersect: IntersectionObserverCallback = async ([
    { isIntersecting },
  ]) => {
    if (isIntersecting) {
      if (count < 70) {
        setCount((prev) => prev + 10);
        await refetchMatches();
      }
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });
  const { puuid } = useGetSummoner(nickname);

  const onSuccess = (response: Response<MatchIds>) => {
    const items = response.items;
    setCache((prev) => prev.concat(items));
  };

  const { refetchMatches } = useGetMatchIds(puuid, count, { onSuccess });

  const useEffectOnce = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnce(() => {
    setRecentMatches([]);
  });

  return (
    <>
      {cache.map((matchId: string) => {
        const MatchCardProps: MatchCardProps = {
          matchId,
          nickname,
        };

        return (
          <Suspense fallback={<div>LOADING</div>} key={matchId}>
            <ErrorBoundary>
              <MatchCard {...MatchCardProps} />
            </ErrorBoundary>
          </Suspense>
        );
      })}
      <div ref={setTarget} />
    </>
  );
};

export default MatchSection;
