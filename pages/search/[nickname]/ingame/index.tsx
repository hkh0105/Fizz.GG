import { useRouter } from 'next/router';
import { FC } from 'react';

import IngameSection from 'components/inGameSection/InGameSection';
import Profile from 'components/profile/Profile';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { AsyncBoundaryPropsMapper, DefaultSectionPropsMapper } from 'utils';

const Ingame: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';
  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);
  const SectionPropsMapper = DefaultSectionPropsMapper(nickname);

  return (
    <>
      <Profile {...SectionPropsMapper} />
      <AsyncBoundary {...AsyncBoundaryProps}>
        <IngameSection {...SectionPropsMapper} />
      </AsyncBoundary>
    </>
  );
};

export default Ingame;
