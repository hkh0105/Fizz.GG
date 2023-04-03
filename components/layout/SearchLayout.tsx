import { FC, PropsWithChildren } from 'react';

const SearchLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className='col center'>{children}</div>;
};

export default SearchLayout;
