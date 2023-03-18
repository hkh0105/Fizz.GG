import { useRouter } from 'next/router';
import { FC } from 'react';

import SearchLayout from 'components/layout/SearchLayout';
import Profile from 'components/profile/Profile';
import RankSection from 'components/rankSection/RankSection';
import MatchSection from 'components/matchSection/MatchSection';
import RecentStatSection from 'components/resentStatSection/RecentStatSection';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import { AsyncBoundaryPropsMapper, DefaultSectionPropsMapper } from 'utils';

const Search: FC = () => {
  const nickname = useRouter().query.nickname as string;
  const AsyncBoundaryProps = AsyncBoundaryPropsMapper(nickname);
  const SectionPropsMapper = DefaultSectionPropsMapper(nickname);

  return (
    <AsyncBoundary {...AsyncBoundaryProps}>
      <SearchLayout>
        <div className='w-[1110px] max-lg:w-[800px]'>
          <Profile {...SectionPropsMapper} />
        </div>
        <div className='flex'>
          <div className='w-[300px] max-lg:hidden mr-3'>
            <RankSection {...SectionPropsMapper} />
            <RecentStatSection />
          </div>
          <div className='w-[800px]'>
            <MatchSection {...SectionPropsMapper} />
          </div>
        </div>
      </SearchLayout>
    </AsyncBoundary>
  );
};

export default Search;
