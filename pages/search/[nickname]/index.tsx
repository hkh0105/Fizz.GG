import { useRouter } from 'next/router';
import { FC, Suspense } from 'react';

import SearchLayout from 'components/layout/SearchLayout';
import Profile from 'components/profile/Profile';
import RankSection from 'components/rankSection/RankSection';
import MatchSection from 'components/matchSection/MatchSection';
import ErrorBoundary from './ErrorBoundary';

const Search: FC = () => {
  const router = useRouter();
  const { nickname } = (router.query as { nickname: string }) || '';

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <ErrorBoundary>
        <SearchLayout>
          <div className='w-[1110px] max-lg:w-[800px]'>
            <Profile nickname={nickname} />
          </div>
          <div className='flex'>
            <div className='w-[300px] max-lg:hidden mr-3'>
              <RankSection nickname={nickname} />
            </div>
            <div className='w-[800px]'>
              <MatchSection nickname={nickname} />
            </div>
          </div>
        </SearchLayout>
      </ErrorBoundary>
    </Suspense>
  );
};

export default Search;
