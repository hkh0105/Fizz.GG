import { useRouter } from 'next/router';
import { FC } from 'react';

import IngameSection from 'components/inGameSection/InGameSection';
import Profile from 'components/profile/Profile';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { AsyncBoundaryPropsMapper } from 'utils';

const Ingame: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';
  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);

  return (
    <>
      <Profile nickname={nickname} />
      <AsyncBoundary {...AsyncBoundaryProps}>
        <IngameSection nickname={nickname} />
      </AsyncBoundary>
    </>
  );
};

export default Ingame;
