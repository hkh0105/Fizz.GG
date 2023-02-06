import { useRouter } from 'next/router';
import { FC, Suspense } from 'react';

import IngameSection from 'components/inGameSection/InGameSection';
import Profile from 'components/profile/Profile';
import ErrorBoundary from 'pages/ErrorBoundary';

const Ingame: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';

  return (
    <>
      <Profile nickname={nickname} />
      <Suspense fallback={<div>LOADING</div>}>
        <ErrorBoundary>
          <IngameSection nickname={nickname} />
        </ErrorBoundary>
      </Suspense>
    </>
  );
};

export default Ingame;
