import { useRouter } from 'next/router';
import { FC } from 'react';

import IngameSection from 'components/inGameSection/InGameSection';
import Profile from 'components/profile/Profile';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { AsyncBoundaryPropsMapper, SectionPropsMapper } from 'types';

const Ingame: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';
  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);
  const SectionProps = SectionPropsMapper(nickname);

  return (
    <>
      <Profile {...SectionProps} />
      <AsyncBoundary {...AsyncBoundaryProps}>
        <IngameSection {...SectionProps} />
      </AsyncBoundary>
    </>
  );
};

export default Ingame;
