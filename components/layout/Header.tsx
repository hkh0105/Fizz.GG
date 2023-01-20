import { FC } from 'react';

import useScroll from 'hooks/useScroll';
import NavigationBar from './NavigationBar';

const Header: FC = () => {
  const scrolled: boolean = useScroll(50);

  return (
    <header
      className={`top-0 w-full ${
        scrolled
          ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
          : 'bg-white/0'
      } z-30 transition-all `}
    >
      <NavigationBar />
    </header>
  );
};

export default Header;
