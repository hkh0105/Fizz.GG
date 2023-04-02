import type { NextPage } from 'next';

import SearchWindow from 'components/searchWindow/SearchWindow';
import AsyncBoundary from 'components/asyncBoundary/AsyncBoundary';
import Typography from 'userInterface/typography/Typography';
import { TitleProps } from 'types';

const Home: NextPage = () => {
  return (
    <AsyncBoundary>
      <section className='search-section'>
        <Typography {...TitleProps} />
        <SearchWindow />
      </section>
    </AsyncBoundary>
  );
};

export default Home;
