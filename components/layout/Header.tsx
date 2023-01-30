import { FC } from 'react';

import NavigationBar from './NavigationBar';

const Header: FC = () => {
  return (
    <header className='top-0 z-30 w-full mb-3 transition-all border-b border-gray-200 bg-white/50 backdrop-blur-xl'>
      <NavigationBar />
    </header>
  );
};

export default Header;
