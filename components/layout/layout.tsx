import { FC, PropsWithChildren } from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='fixed w-full h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
