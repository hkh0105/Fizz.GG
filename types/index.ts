import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { ChangeEvent, MouseEvent } from 'react';

export interface ISearchWindowProps {
  callback: (value: string) => void;
}

export type TQueryOptions = Omit<
  UseQueryOptions<unknown, unknown, unknown, QueryKey>,
  'queryKey' | 'queryFn'
>;

export interface IButtonProps {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: keyof TButtonSize;
  borderColor?: keyof TButtonColor;
}

export type TButtonColor = {
  blue: string;
  gray: string;
};

export type TButtonSize = {
  small: string;
  medium: string;
  big: string;
};

export interface IInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  labelFor: string;
  disabled?: boolean;
  placeholder?: string;
  size?: keyof TInputSize;
  color?: keyof TInputBorderColor;
  required?: boolean;
}

export type TInputBorderColor = {
  blue: string;
  gray: string;
};

export type TInputSize = {
  small: string;
  medium: string;
  big: string;
};
