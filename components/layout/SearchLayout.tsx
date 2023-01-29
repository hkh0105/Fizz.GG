import { FC, PropsWithChildren } from 'react';

const SearchLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center'>{children}</div>
  );
};

export default SearchLayout;
