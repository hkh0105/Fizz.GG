import { useRouter } from 'next/router';
import { FC, Suspense } from 'react';

import IngameSection from 'components/inGameSection/InGameSection';
import Profile from 'components/profile/Profile';

const Ingame: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Profile nickname={nickname} />
      <IngameSection nickname={nickname} />
    </Suspense>
  );
};

export default Ingame;
