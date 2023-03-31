import { ReactNode } from 'react';

export interface BoxProps {
  size?: keyof BoxSizeMapper;
  color?: keyof BoxColorMapper;
  width?: string;
  height?: string;
  children?: ReactNode;
  marginClass?: string;
}

export type BoxSizeMapper = {
  small: string;
  medium: string;
  large: string;
  xLarge: string;
  full: string;
  custom: string;
};

export type BoxColorMapper = {
  default: 'bg-white';
  red: 'bg-red-100';
  blue: 'bg-blue-100';
};
