import { MouseEventHandler } from 'react';

export interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: keyof ButtonSizeMapper;
  color?: keyof ButtonColorMapper;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export type ButtonColorMapper = {
  blue: string;
  gray: string;
  transparent: string;
};

export type ButtonSizeMapper = {
  small: string;
  medium: string;
  large: string;
};
