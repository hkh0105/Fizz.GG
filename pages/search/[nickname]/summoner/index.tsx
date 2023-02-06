import { useRouter } from 'next/router';
import { FC, Suspense } from 'react';

import Profile from 'components/profile/Profile';
import MasterySection from 'components/masterySection/MasterySection';
import ErrorBoundary from 'pages/ErrorBoundary';

const Summoner: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <ErrorBoundary>
        <Profile nickname={nickname} />
        <MasterySection nickname={nickname} />
      </ErrorBoundary>
    </Suspense>
  );
};

export default Summoner;
