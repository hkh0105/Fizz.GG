import {
  BoxColorMapper,
  BoxProps,
  DetailHeaderColorMapper,
  DetailSectionHeaderProps,
  MatchInfoByUser,
  UserStatRowProps,
} from 'types';

export const TeamBoxMapper = (color: keyof BoxColorMapper): BoxProps => ({
  height: 'bgSection',
  width: 'full',
  color,
});

export const TeamHeaderMapper = (
  color: keyof DetailHeaderColorMapper
): DetailSectionHeaderProps => ({
  color,
});

export const UserStatRowPropsMapper = (
  summoner: MatchInfoByUser,
  maxDamage: number,
  maxTakenDamage: number
): UserStatRowProps => ({
  summoner: summoner,
  maxDamage: maxDamage,
  maxTakenDamage: maxTakenDamage,
});
