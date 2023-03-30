import type { FC } from 'react';

import { BoxColorMapper, BoxProps, BoxSizeMapper } from './Box.types';

const Box: FC<BoxProps> = ({
  children,
  size,
  width,
  height,
  color = 'default',
  marginClass = 'mb-2',
}) => {
  const defaultClassName =
    'overflow-hidden border border-gray-200 shadow-md rounded-xl';

  const colorMapper: BoxColorMapper = {
    default: 'bg-white',
    red: 'bg-red-100',
    blue: 'bg-blue-100',
  };

  const sizeMapper: BoxSizeMapper = {
    small: 'w-1/4',
    medium: 'w-2/5',
    large: 'w-3/5',
    xLarge: 'w-4/5',
    full: 'w-full',
    custom: width + ' ' + height,
  };

  return (
    <section
      className={`${sizeMapper[size]} ${colorMapper[color]} ${defaultClassName} ${marginClass}`}
    >
      {children}
    </section>
  );
};

export default Box;
