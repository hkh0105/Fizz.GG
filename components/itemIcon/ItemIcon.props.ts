import { CustomImageProps } from 'types';

export const CustomImagePropsMapper = (
  source: string,
  size: number
): CustomImageProps => ({
  className: 'rounded-full',
  source,
  alt: '소환사 아이템 이미지',
  size,
});
