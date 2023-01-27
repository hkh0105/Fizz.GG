import type { FC, PropsWithChildren, ReactNode } from 'react';
import { BoxProps, BoxSizeMapper } from 'types';

const Box: FC<BoxProps> = ({ children, size, width, height }) => {
  const defaultClassName =
    'mx-5 my-1 overflow-hidden bg-white border border-gray-200 shadow-md rounded-xl';

  const sizeMapper: BoxSizeMapper = {
    small: 'w-1/4',
    medium: 'w-2/5',
    large: 'w-3/5',
    xLarge: 'w-4/5',
    full: 'w-full',
    custom: width + ' ' + height,
  };
  return (
    <section className={`${sizeMapper[size]} ${defaultClassName}`}>
      {children}
    </section>
  );
};

export default Box;
