import { FC } from 'react';

import {
  TypoGraphyColorMapper,
  TypographyProps,
  TypoGraphySizeMapper,
  TypographyTypeMapper,
} from 'types';

const Typography: FC<TypographyProps> = ({
  text,
  type,
  size = 'medium',
  isTitle = true,
  color = 'black',
}) => {
  const typeMapper: TypographyTypeMapper = {
    mainTitle:
      'bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-6xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm leading-[5rem] my-20',
    title: 'text-2xl font-medium',
    semibold: 'font-semibold',
    default: '',
  };

  const sizeMapper: TypoGraphySizeMapper = {
    medium: '',
    small: 'text-sm',
    xSmall: 'text-xs',
  };

  const colorMapper: TypoGraphyColorMapper = {
    black: '',
    blue: 'text-blue-600',
    red: 'text-red-600',
    gray: 'text-gray-600',
  };

  const className =
    typeMapper[type] + ' ' + sizeMapper[size] + ' ' + colorMapper[color];

  if (isTitle) {
    return <h1 className={className}>{text}</h1>;
  }

  return <p className={className}>{text}</p>;
};

export default Typography;
