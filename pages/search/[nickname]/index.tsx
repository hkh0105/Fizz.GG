import { useRouter } from 'next/router';
import { FC } from 'react';

import SearchLayout from 'components/layout/SearchLayout';
import Profile from 'components/profile/Profile';
import RankSection from 'components/rankSection/RankSection';
import MatchSection from 'components/matchSection/MatchSection';
import RecentStatSection from 'components/resentStatSection/RecentStatSection';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { AsyncBoundaryPropsMapper, SectionPropsMapper } from './props';

const Search: FC = () => {
  const nickname = useRouter().query.nickname as string;
  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);
  const SectionProps = SectionPropsMapper(nickname);

  return (
    <AsyncBoundary {...AsyncBoundaryProps}>
      <SearchLayout>
        <div className='w-[1110px] max-lg:w-[800px]'>
          <Profile {...SectionProps} />
        </div>
        <div className='flex'>
          <div className='w-[300px] max-lg:hidden mr-3'>
            <RankSection {...SectionProps} />
            <RecentStatSection />
          </div>
          <div className='w-[800px]'>
            <MatchSection {...SectionProps} />
          </div>
        </div>
      </SearchLayout>
    </AsyncBoundary>
  );
};

export default Search;
