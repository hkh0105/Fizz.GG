import type { FC } from 'react';

import { ButtonProps, ButtonColor, ButtonSize } from 'types';

const Button: FC<ButtonProps> = ({
  label = 'Button',
  onClick,
  borderColor = 'blue',
  size = 'medium',
  type = 'button',
}) => {
  const defaultVariants = 'font-medium rounded-lg';
  const borderColorVariants: ButtonColor = {
    blue: 'text-white bg-blue-700 hover:bg-blue-500  ',
    gray: '',
    transparent: 'hover:border-blue-500 border-transparent border-2 rounded-lg',
  };
  const sizeVariants: ButtonSize = {
    small: '',
    medium: 'px-4 py-2 text-sm ',
    big: '',
  };

  // size: sm, md, lg
  // blue: primary, gray: secondary or ghost or disabled || ex) btn-disabled

  // 예를들어서, 프라이머 색 ? 변하지 않죠. 버튼 사이즈 ?
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${defaultVariants} ${sizeVariants[size]} ${borderColorVariants[borderColor]}`}
    >
      {label}
    </button>
  );
};

export default Button;
