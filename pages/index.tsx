import type { NextPage } from 'next';

import SearchWindow from 'components/searchWindow/SearchWindow';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import Typography from 'userInterface/typography/Typography';
import { TypographyProps } from 'types';

const Home: NextPage = () => {
  const TitleProps: TypographyProps = {
    type: 'mainTitle',
    text: '당신의 전적이 궁금하다면? Fizz.GG',
  };

  return (
    <AsyncBoundary>
      <section className='flex flex-col items-center w-full my-10 duration-700 animate-pulse'>
        <Typography {...TitleProps} />
        <SearchWindow />
      </section>
    </AsyncBoundary>
  );
};

export default Home;
