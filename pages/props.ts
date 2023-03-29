import { BoxProps, TypographyProps } from 'types';

export const TitleProps: TypographyProps = {
  type: 'mainTitle',
  text: '당신의 전적이 궁금하다면? Fizz.GG',
};

export const ErrorBoxProps: BoxProps = {
  size: 'custom',
  height: 'h-[300px]',
  width: 'w-full',
};

export const ErrorTextPropsMapper = (error: string): TypographyProps => ({
  type: 'title',
  text: error,
});
