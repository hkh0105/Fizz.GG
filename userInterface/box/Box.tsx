import classNames from 'classnames';
import type { FC } from 'react';

import {
  BoxColorMapper,
  BoxProps,
  BoxWidthMapper,
  BoxHeightMapper,
} from './Box.types';

const Box: FC<BoxProps> = ({
  children,
  width = 'auto',
  height = 'auto',
  hidden,
  color = 'default',
  marginClass = 'mb-2',
}) => {
  const colorMapper: BoxColorMapper = {
    default: 'bg-white',
    red: 'bg-red-100',
    blue: 'bg-blue-100',
  };

  const widthMapper: BoxWidthMapper = {
    small: 'w-1/4',
    medium: 'w-2/5',
    large: 'w-3/5',
    xLarge: 'w-4/5',
    full: 'w-full',
    bgSection: 'w-[800px]',
    smSection: 'w-[300px]',
    auto: '',
  };

  const heightMapper: BoxHeightMapper = {
    small: 'h-1/4',
    medium: 'h-2/5',
    large: 'h-3/5',
    xLarge: 'h-4/5',
    full: 'h-full',
    bgSection: 'h-[350px]',
    smSection: 'h-32',
    auto: '',
  };

  const hiddenMapper = hidden ? `max-${hidden}:hidden` : '';

  const className = classNames(
    'box',
    widthMapper[width],
    heightMapper[height],
    hiddenMapper,
    colorMapper[color],
    marginClass
  );

  return <section className={className}>{children}</section>;
};

export default Box;
