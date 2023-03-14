import { useRouter } from 'next/router';
import { FC } from 'react';

import Profile from 'components/profile/Profile';
import MasterySection from 'components/masterySection/MasterySection';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { AsyncBoundaryPropsMapper } from 'utils';

const Summoner: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';
  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);

  return (
    <AsyncBoundary {...AsyncBoundaryProps}>
      <Profile nickname={nickname} />
      <MasterySection nickname={nickname} />
    </AsyncBoundary>
  );
};

export default Summoner;
