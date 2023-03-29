import { BoxProps, MasteryInfo, MasteryRowProps, TypographyProps } from 'types';

export const GameModePropsMapper = (nickname: string): TypographyProps => ({
  type: 'title',
  color: 'gray',
  text: `${nickname} 의 챔피언 통계`,
});

export const MasteryBoxProps: BoxProps = {
  size: 'custom',
  width: 'w-[800px]',
};

export const AsyncBoundaryPropsMapper = (key: string) => ({
  key,
});

export const MasteryRowPropsMapper = (
  masteryInfo: MasteryInfo
): MasteryRowProps => ({
  masteryInfo,
});
