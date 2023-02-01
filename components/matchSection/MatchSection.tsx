import { FC, Suspense, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import MatchCard from './MatchCard';
import useIntersectionObserver from 'hooks/useInterSectionObserver';
import ErrorBoundary from 'pages/ErrorBoundary';
import { recentInfo } from 'store';
import { useGetMatchIdArr, useGetSummoner } from 'hooks/queries';
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

  const onSuccess = (response: Response<MatchIdArr>) => {
    setCash((prev) => prev.concat(response.items));
  };

  const { refetchMatchArr } = useGetMatchIdArr(puuid, count, { onSuccess });

  useEffect(() => {
    setRecentMatchArr([]);
  }, []);

  return (
    <>
      {cash.map((matchId: string, index) => {
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
