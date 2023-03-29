import type { NextPage } from 'next';

import SearchWindow from 'components/searchWindow/SearchWindow';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import Typography from 'userInterface/typography/Typography';
import { TitleProps } from './props';

const Home: NextPage = () => {
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
