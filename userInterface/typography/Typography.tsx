import { FC } from 'react';
import classNames from 'classnames';

import {
  TypoGraphyColorMapper,
  TypographyProps,
  TypoGraphySizeMapper,
  TypographyTypeMapper,
} from './Typography.types';

const Typography: FC<TypographyProps> = ({
  text,
  type,
  size = 'medium',
  isTitle = true,
  color = 'black',
}) => {
  const typeMapper: TypographyTypeMapper = {
    mainTitle: 'main-title',
    title: 'title',
    semibold: 'semi-bold',
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

  const className = classNames(
    typeMapper[type],
    sizeMapper[size],
    colorMapper[color]
  );

  if (isTitle) {
    return <h1 className={className}>{text}</h1>;
  }

  return <p className={className}>{text}</p>;
};

export default Typography;
