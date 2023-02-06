import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Suspense } from 'react';

import SearchWindow from 'components/searchWindow/SearchWindow';
import ErrorBoundary from './ErrorBoundary';
import Typography from 'userInterface/typography/Typography';
import { TypographyProps } from 'types';

const Home: NextPage = () => {
  const router = useRouter();

  const handleRouteByNickname = async (nickname: string) => {
    await router.push({
      pathname: `/search/[nickname]`,
      query: { nickname },
    });
  };

  const TitleProps: TypographyProps = {
    type: 'mainTitle',
    text: '당신의 전적이 궁금하다면? Fizz.GG',
  };

  const SearchWindowProps = {
    onSubmit: handleRouteByNickname,
  };

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <ErrorBoundary>
        <section className='flex flex-col items-center w-full my-10 duration-700 animate-pulse'>
          <Typography {...TitleProps} />
          <SearchWindow {...SearchWindowProps} />
        </section>
      </ErrorBoundary>
    </Suspense>
  );
};

export default Home;
