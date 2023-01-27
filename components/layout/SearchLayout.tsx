import { FC, PropsWithChildren } from 'react';

const SearchLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <div className='w-3/5 max-xl:w-4/5 max-sm:w-full'>{children}</div>
    </div>
  );
};

export default SearchLayout;
