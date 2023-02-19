import { useRouter } from 'next/router';
import { FC } from 'react';

import SearchLayout from 'components/layout/SearchLayout';
import Profile from 'components/profile/Profile';
import RankSection from 'components/rankSection/RankSection';
import MatchSection from 'components/matchSection/MatchSection';
import RecentStatSection from 'components/resentStatSection/RecentStatSection';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';

const Search: FC = () => {
  const nickname = useRouter().query.nickname as string;

  return (
    <AsyncBoundary key={nickname}>
      <SearchLayout>
        <div className='w-[1110px] max-lg:w-[800px]'>
          <Profile nickname={nickname} />
        </div>
        <div className='flex'>
          <div className='w-[300px] max-lg:hidden mr-3'>
            <RankSection nickname={nickname} />
            <RecentStatSection />
          </div>
          <div className='w-[800px]'>
            <MatchSection nickname={nickname} />
          </div>
        </div>
      </SearchLayout>
    </AsyncBoundary>
  );
};

export default Search;
