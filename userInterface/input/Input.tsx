import classNames from 'classnames';
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
  const colorMapper: InputBorderColorMapper = {
    blue: 'input-blue',
    gray: 'input-gray',
  };

  const sizeMapper: InputSizeMapper = {
    small: 'input-small',
    medium: 'input-medium',
    large: 'input-large',
  };

  const className = classNames(
    'rounded-lg p-4 pl-10',
    sizeMapper[size],
    colorMapper[color]
  );
  return (
    <>
      <label htmlFor={labelFor} />
      <input
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        id={labelFor}
        className={className}
        required={required}
      />
    </>
  );
};

export default Input;
