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
  const defaultVariants = 'font-medium rounded-lg';
  const colorVariants: ButtonColorMapper = {
    blue: 'text-white bg-blue-700 hover:bg-blue-500  ',
    gray: '',
    transparent: 'hover:border-blue-500 border-transparent border-2 rounded-lg',
  };
  const sizeVariants: ButtonSizeMapper = {
    small: '',
    medium: 'px-4 py-2 text-sm ',
    large: '',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${defaultVariants} ${sizeVariants[size]} ${colorVariants[color]}`}
    >
      {label}
    </button>
  );
};

export default Button;
