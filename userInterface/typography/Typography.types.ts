export interface TypographyProps {
  text: string;
  type: keyof TypographyTypeMapper;
  isTitle?: boolean;
  color?: keyof TypoGraphyColorMapper;
  size?: keyof TypoGraphySizeMapper;
}

export type TypoGraphySizeMapper = {
  medium: string;
  small: string;
  xSmall: string;
};

export type TypographyTypeMapper = {
  mainTitle: string;
  title: string;
  default: string;
  semibold: string;
};

export type TypoGraphyColorMapper = {
  black: string;
  blue: string;
  red: string;
  gray: string;
};
