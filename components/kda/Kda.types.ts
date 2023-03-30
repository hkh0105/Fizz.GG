import { TypoGraphySizeMapper } from 'types';

export interface KdaProps {
  kills: number;
  deaths: number;
  assists: number;
  kda?: number;
  marginClass?: string;
  size?: keyof TypoGraphySizeMapper;
  kdaSize?: keyof TypoGraphySizeMapper;
}
