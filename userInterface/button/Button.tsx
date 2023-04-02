import classNames from 'classnames';
import type { FC } from 'react';

import {
  ButtonProps,
  ButtonColorMapper,
  ButtonSizeMapper,
} from './Button.types';

const Button: FC<ButtonProps> = ({
  label = 'Button',
  onClick,
  color = 'blue',
  size = 'medium',
  type = 'button',
}) => {
  const colorMapper: ButtonColorMapper = {
    blue: 'button-blue',
    gray: 'button-gray',
    transparent: 'button-transparent',
  };
  const sizeMapper: ButtonSizeMapper = {
    small: 'button-small',
    medium: 'button-medium ',
    large: 'button-large',
  };

  const className = classNames(
    'font-medium rounded-lg px-4 py-2',
    colorMapper[color],
    sizeMapper[size]
  );

  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
