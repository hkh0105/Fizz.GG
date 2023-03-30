import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import MatchCard from '../matchCard/MatchCard';
import useIntersectionObserver from 'hooks/useInterSectionObserver';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { recentInfo } from 'store';
import { useGetMatchIds } from 'hooks/queries';
import { MatchSectionProps, RecentMatchUserInfo } from './MatchSection.types';
import { MatchCardPropsMapper } from './MatchSection.props';

const MatchSection: FC<MatchSectionProps> = ({ nickname }) => {
  const [count, setCount] = useState(10);
  const [recentMatches, setRecentMatches] =
    useRecoilState<RecentMatchUserInfo[]>(recentInfo);

  useEffect(() => {
    setRecentMatches([]);
  }, []);

  const { fetchNextPage, matchIds } = useGetMatchIds(nickname, count);

  const onIntersect: IntersectionObserverCallback = async ([
    { isIntersecting },
  ]) => {
    if (isIntersecting && count < 80) {
      setCount(count + 10);
      await fetchNextPage();
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <>
      {matchIds?.map((matchId: string) => {
        const MatchCardProps = MatchCardPropsMapper(matchId, nickname);

        return (
          <AsyncBoundary key={matchId}>
            <MatchCard {...MatchCardProps} />
          </AsyncBoundary>
        );
      })}
      <div ref={setTarget} />
    </>
  );
};

export default MatchSection;
