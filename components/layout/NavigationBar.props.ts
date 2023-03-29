import { SearchWindowProps } from 'types';

export const SearchWindowPropsMapper = (
  isMini: boolean
): SearchWindowProps => ({
  mini: isMini,
});
