import {
  ProfileIconProps,
  RuneIconProps,
  RuneInfo,
  SpellIconProps,
  SpellInfos,
  TypographyProps,
} from 'types';

export const NicknamePropsMapper = (nickname: string): TypographyProps => ({
  type: 'default',
  size: 'small',
  color: 'gray',
  text: nickname,
});

export const SpellIconPropsMapper = (spells: SpellInfos): SpellIconProps => ({
  spells: spells,
  width: 25,
  marginClass: 'pt-1',
});

export const RuneIconPropsMapper = (runes: RuneInfo[]): RuneIconProps => ({
  runes,
  width: 25,
  marginClass: 'pt-1',
});

export const ProfileIconPropsMapper = (
  profileIconId: number
): ProfileIconProps => ({
  profileIconId: profileIconId,
  width: 25,
  height: 25,
});
