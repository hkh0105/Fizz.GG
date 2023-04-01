import { ReactNode } from 'react';

export interface BoxProps {
  color?: keyof BoxColorMapper;
  width?: keyof BoxWidthMapper;
  height?: keyof BoxHeightMapper;
  children?: ReactNode;
  marginClass?: string;
  hidden?: string;
}

export type BoxWidthMapper = {
  small: 'w-1/4';
  medium: 'w-2/5';
  large: 'w-3/5';
  xLarge: 'w-4/5';
  full: 'w-full';
  bgSection: 'w-[800px]';
  smSection: 'w-[300px]';
  auto: '';
};

export type BoxHeightMapper = {
  small: 'h-1/4';
  medium: 'h-2/5';
  large: 'h-3/5';
  xLarge: 'h-4/5';
  full: 'h-full';
  bgSection: 'h-[350px]';
  smSection: 'h-32';
  auto: '';
};

export type BoxColorMapper = {
  default: 'bg-white';
  red: 'bg-red-100';
  blue: 'bg-blue-100';
};
