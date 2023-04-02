import { TypoGraphySizeMapper } from 'types';

export interface KdaProps {
  kills: number;
  deaths: number;
  assists: number;
  kda?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  size?: keyof TypoGraphySizeMapper;
  kdaSize?: keyof TypoGraphySizeMapper;
}
