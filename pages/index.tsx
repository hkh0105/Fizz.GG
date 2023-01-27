import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Suspense } from 'react';

import SearchWindow from 'components/searchWindow/SearchWindow';
import ErrorBoundary from './ErrorBoundary';
import Typography from 'userInterface/typography/Typography';

const Home: NextPage = () => {
  const router = useRouter();

  const onClickSearchButton = (nickname: string) => {
    router.push({
      pathname: `/search/[nickname]`,
      query: { nickname },
    });
  };

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <ErrorBoundary>
        <section className='flex flex-col items-center w-full my-10 duration-700 animate-pulse'>
          <Typography
            type='mainTitle'
            string='당신의 전적, 캐릭터 별 승률이 궁금하다면 
            지금 바로 검색하세요 !'
          />
          <SearchWindow callback={onClickSearchButton} />
        </section>
      </ErrorBoundary>
    </Suspense>
  );
};

export default Home;
