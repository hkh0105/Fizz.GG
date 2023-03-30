import { CustomImageProps } from 'types';

export const CustomImagePropsMapper = (
  source: string,
  size: number
): CustomImageProps => ({
  className: 'rounded-xl',
  source,
  alt: '소환사 스펠 이미지',
  size,
});
