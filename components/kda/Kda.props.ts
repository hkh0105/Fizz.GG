import { TypographyProps, TypoGraphySizeMapper } from 'types';

export const KillsPropsMapper = (
  kills: number,
  size: keyof TypoGraphySizeMapper
): TypographyProps => ({
  type: 'semibold',
  color: 'gray',
  text: String(kills) + '  /',
  size,
});

export const DeathsPropsMapper = (
  deaths: number,
  size: keyof TypoGraphySizeMapper
): TypographyProps => ({
  type: 'semibold',
  color: 'red',
  text: String(deaths),
  size,
});

export const AssistsPropsMapper = (
  assists: number,
  size: keyof TypoGraphySizeMapper
): TypographyProps => ({
  type: 'semibold',
  color: 'gray',
  text: '/ ' + String(assists),
  size,
});

export const KdaPropsMapper = (
  kda: number | undefined,
  kdaSize: keyof TypoGraphySizeMapper
): TypographyProps => ({
  type: 'default',
  color: 'gray',
  text: String(kda?.toFixed(2)) + ' : 1',
  size: kdaSize,
});
