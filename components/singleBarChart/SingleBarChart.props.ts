import {
  TypoGraphyColorMapper,
  TypographyProps,
  TypoGraphySizeMapper,
} from 'types';

export const SingleBarTypographyPropsMapper = (
  text: string | undefined,
  size: keyof TypoGraphySizeMapper | undefined,
  color: keyof TypoGraphyColorMapper | undefined
): TypographyProps => ({
  text: text ?? '',
  size: size,
  color: color,
  type: 'default',
});
