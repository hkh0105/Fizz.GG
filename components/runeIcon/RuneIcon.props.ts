import { CustomImageProps } from 'types';

export const CustomImagePropsMapper = (
  source: string,
  size: number
): CustomImageProps => ({
  source,
  alt: '소환사 룬 이미지',
  size,
});
