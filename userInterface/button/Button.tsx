import type { FC } from 'react';
import { IButtonProps, TButtonColor, TButtonSize } from 'types';

const Button: FC<IButtonProps> = ({
  label = 'Button',
  onClick,
  borderColor = 'blue',
  size = 'medium',
}) => {
  const borderColorVariants: TButtonColor = {
    blue: 'font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-500 focus:ring-blue-300 ',
    gray: '',
  };
  const sizeVariants: TButtonSize = {
    small: '',
    medium: 'px-4 py-2 text-sm ',
    big: '',
  };

  return (
    <button
      type='button'
      onClick={onClick}
      className={`${sizeVariants[size]} ${borderColorVariants[borderColor]}`}
    >
      {label}
    </button>
  );
};

export default Button;
