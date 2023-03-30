import { IconProps } from 'types';

export interface SpellIconProps extends IconProps {
  spells: SpellInfos;
}
export type SpellInfos = [[string, { key: number }], [string, { key: number }]];
