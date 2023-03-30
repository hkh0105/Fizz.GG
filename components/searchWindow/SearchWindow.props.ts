import { ChangeEvent } from 'react';

import { ButtonProps, InputProps } from 'types';

export const MiniIconProps = {
  size: '30',
  className: 'translate-x-10 translate-y-3',
};

export const IconProps = {
  size: '40',
  className: 'translate-x-10 translate-y-2',
};

export const MiniInputPropsMapper = (
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  nickname: string
): InputProps => ({
  onChange,
  value: nickname,
  placeholder: 'Search',
  required: true,
  labelFor: 'Search',
});
export const InputPropsMapper = (
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  nickname: string
): InputProps => ({
  onChange,
  value: nickname,
  placeholder: 'Search summoner nickname',
  required: true,
  labelFor: 'Search',
});

export const MiniButtonProps: ButtonProps = {
  label: 'GG',
  color: 'transparent',
  type: 'submit',
};

export const DefaultButtonProps: ButtonProps = {
  label: 'Search',
  type: 'submit',
};
