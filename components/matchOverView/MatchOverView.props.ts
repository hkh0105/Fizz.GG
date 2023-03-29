import { TypographyProps } from 'types';

export const MatchTypePropsMapper = (
  isWin: boolean,
  matchType: string
): TypographyProps => ({
  type: 'semibold',
  size: 'small',
  color: isWin ? 'blue' : 'red',
  text: matchType,
  isTitle: false,
});

export const DayDiffPropsMapper = (dayDiff: string): TypographyProps => ({
  type: 'default',
  size: 'small',
  color: 'gray',
  text: dayDiff,
  isTitle: false,
});
export const MatchResultPropsMapper = (isWin: boolean): TypographyProps => ({
  type: 'semibold',
  size: 'small',
  color: 'gray',
  text: isWin ? '승리' : '패배',
  isTitle: false,
});

export const GameTimePropsMapper = (gameTime: string): TypographyProps => ({
  type: 'default',
  size: 'small',
  color: 'gray',
  text: gameTime,
  isTitle: false,
});
