import { ChangeEvent } from 'react';

export interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  labelFor: string;
  disabled?: boolean;
  placeholder?: string;
  size?: keyof InputSizeMapper;
  color?: keyof InputBorderColorMapper;
  required?: boolean;
}

export type InputBorderColorMapper = {
  blue: string;
  gray: string;
};

export type InputSizeMapper = {
  small: string;
  medium: string;
  big: string;
};
