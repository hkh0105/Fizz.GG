import { useRouter } from 'next/router';
import { FC } from 'react';

import IngameSection from 'components/inGameSection/InGameSection';
import Profile from 'components/profile/Profile';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';

const Ingame: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';

  return (
    <>
      <Profile nickname={nickname} />
      <AsyncBoundary key={nickname}>
        <IngameSection nickname={nickname} />
      </AsyncBoundary>
    </>
  );
};

export default Ingame;
