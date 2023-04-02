import { useRouter } from 'next/router';
import { FC } from 'react';

import SearchLayout from 'components/layout/SearchLayout';
import Profile from 'components/profile/Profile';
import RankSection from 'components/rankSection/RankSection';
import MatchSection from 'components/matchSection/MatchSection';
import RecentStatSection from 'components/resentStatSection/RecentStatSection';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { AsyncBoundaryPropsMapper, SectionPropsMapper } from 'types';

const Search: FC = () => {
  const nickname = useRouter().query.nickname as string;

  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);
  const SectionProps = SectionPropsMapper(nickname);

  return (
    <AsyncBoundary {...AsyncBoundaryProps}>
      <SearchLayout>
        <div className='w-full-section'>
          <Profile {...SectionProps} />
        </div>
        <div className='flex'>
          <div className='mt-2 mr-3 w-sm-section max-lg:hidden'>
            <RankSection {...SectionProps} />
            <RecentStatSection />
          </div>
          <div className='w-bg-section'>
            <MatchSection {...SectionProps} />
          </div>
        </div>
      </SearchLayout>
    </AsyncBoundary>
  );
};

export default Search;
