import { useRouter } from 'next/router';
import { FC, Suspense } from 'react';

import Profile from 'components/profile/Profile';
import MasterySection from 'components/masterySection/MasterySection';

const Summoner: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Profile nickname={nickname} />
      <MasterySection nickname={nickname} />
    </Suspense>
  );
};

export default Summoner;
