import { ReactNode } from 'react';

export interface BoxProps {
  color?: keyof BoxColorMapper;
  width?: keyof BoxWidthMapper;
  height?: keyof BoxHeightMapper;
  children?: ReactNode;
  mb?: 'auto' | number;
  mt?: 'auto' | number;
  ml?: 'auto' | number;
  mr?: 'auto' | number;
  hidden?: string;
}

export type BoxWidthMapper = {
  small: 'w-1/4';
  medium: 'w-2/5';
  large: 'w-3/5';
  xLarge: 'w-4/5';
  full: 'w-full';
  bgSection: 'w-bg-section';
  smSection: 'w-sm-section';
  auto: '';
};

export type BoxHeightMapper = {
  small: 'h-1/4';
  medium: 'h-2/5';
  large: 'h-3/5';
  xLarge: 'h-4/5';
  full: 'h-full';
  bgSection: 'h-bg-section';
  smSection: 'h-sm-section';
  auto: '';
};

export type BoxColorMapper = {
  default: 'box-default-color';
  red: 'box-red';
  blue: 'box-blue';
};
