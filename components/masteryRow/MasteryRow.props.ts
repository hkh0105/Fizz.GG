import { ChampionIconProps, TypographyProps } from 'types';

export const TypographyPropsMapper = (
  text: string | number
): TypographyProps => ({
  type: 'default',
  size: 'small',
  color: 'gray',
  text: String(text),
});

export const IconPropsMapper = (source: string): ChampionIconProps => ({
  championName: source,
  width: 30,
});
