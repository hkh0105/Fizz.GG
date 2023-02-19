import { useRouter } from 'next/router';
import { FC } from 'react';

import Profile from 'components/profile/Profile';
import MasterySection from 'components/masterySection/MasterySection';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';

const Summoner: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';

  return (
    <AsyncBoundary key={nickname}>
      <Profile nickname={nickname} />
      <MasterySection nickname={nickname} />
    </AsyncBoundary>
  );
};

export default Summoner;
