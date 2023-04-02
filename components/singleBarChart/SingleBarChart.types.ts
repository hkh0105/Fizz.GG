import { TypoGraphyColorMapper, TypoGraphySizeMapper } from 'types';

export type SingleBarColorMapper = {
  red: string;
  blue: string;
  white: string;
  gray: string;
};

export interface SingleBarChartProps {
  width: number;
  height: number;
  title?: string;
  startValue: number;
  totalValue: number;
  startColor: keyof SingleBarColorMapper;
  endColor: keyof SingleBarColorMapper;
  endValue?: string | number;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  titleSize?: keyof TypoGraphySizeMapper;
  titleColor?: keyof TypoGraphyColorMapper;
  valueSize?: keyof TypoGraphySizeMapper;
  valueColor?: keyof TypoGraphyColorMapper;
  isValueShow: boolean;
}
