import { useRouter } from 'next/router';
import { FC } from 'react';

import Profile from 'components/profile/Profile';
import MasterySection from 'components/masterySection/MasterySection';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { AsyncBoundaryPropsMapper, DefaultSectionPropsMapper } from 'utils';

const Summoner: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';
  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);
  const SectionPropsMapper = DefaultSectionPropsMapper(nickname);

  return (
    <AsyncBoundary {...AsyncBoundaryProps}>
      <Profile {...SectionPropsMapper} />
      <MasterySection {...SectionPropsMapper} />
    </AsyncBoundary>
  );
};

export default Summoner;
