import type { FC } from 'react';

import {
  InputProps,
  InputBorderColorMapper,
  InputSizeMapper,
} from './Input.types';

const Input: FC<InputProps> = ({
  placeholder,
  labelFor,
  onChange,
  disabled,
  value,
  size = 'medium',
  color = 'gray',
  required,
}) => {
  const colorVariants: InputBorderColorMapper = {
    blue: '',
    gray: 'border border-gray-300 rounded-lg focus:border-blue-500',
  };
  const sizeVariants: InputSizeMapper = {
    small: '',
    medium: 'w-3/5 p-4 pl-10 text-sm ',
    big: '',
  };
  return (
    <>
      <label htmlFor={labelFor} />
      <input
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        id={labelFor}
        className={`${sizeVariants[size]} ${colorVariants[color]}`}
        required={required}
      />
    </>
  );
};

export default Input;
