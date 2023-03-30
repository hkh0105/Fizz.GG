import { IconProps } from 'types';

export interface RuneIconProps extends IconProps {
  runes: RuneInfo[];
}

export type RuneInfo = {
  id: number;
  key: string;
  icon: string;
  name: string;
};
