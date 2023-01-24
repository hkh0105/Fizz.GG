import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Suspense } from 'react';

import SearchWindow from 'components/searchWindow/SearchWindow';
import ErrorBoundary from './ErrorBoundary';

const Home: NextPage = () => {
  const router = useRouter();

  const onClickSearchButton = async (nickname: string) => {
    await router.push({
      pathname: `/search/[nickname]`,
      query: { nickname },
    });
  };

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <ErrorBoundary>
        <section className='flex flex-col items-center w-full my-10 duration-700 animate-pulse'>
          <h1 className='bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-6xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm leading-[5rem] my-20'>
            당신의 전적, 캐릭터 별 승률이 궁금하다면 <br />
            지금 바로 검색하세요 !
          </h1>
          <SearchWindow callback={onClickSearchButton} />
        </section>
      </ErrorBoundary>
    </Suspense>
  );
};

export default Home;
