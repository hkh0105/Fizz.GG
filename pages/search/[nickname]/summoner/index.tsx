import { useRouter } from 'next/router';
import { FC } from 'react';

import Profile from 'components/profile/Profile';
import MasterySection from 'components/masterySection/MasterySection';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { AsyncBoundaryPropsMapper, SectionPropsMapper } from './props';

const Summoner: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';
  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);
  const SectionProps = SectionPropsMapper(nickname);

  return (
    <AsyncBoundary {...AsyncBoundaryProps}>
      <Profile {...SectionProps} />
      <MasterySection {...SectionProps} />
    </AsyncBoundary>
  );
};

export default Summoner;
