import {
  BoxProps,
  ChampStatRowProps,
  recentWinInfo,
  TotalMatchChampData,
  TypographyProps,
} from 'types';

export const RecentStatBoxProps: BoxProps = {
  size: 'custom',
  width: 'w-[300px] max-sm:hidden',
};

export const PieChartPropsMapper = (winStats: recentWinInfo) => ({
  data: [
    { id: 'Win', value: winStats.win, color: 'blue' },
    { id: 'Lose', value: winStats.total - winStats.win, color: 'red' },
  ],
  margin: { top: 40, right: 50 },
});

export const RecentMatchPropsMapper = (
  winStats: recentWinInfo
): TypographyProps => ({
  type: 'default',
  text: `최근 ${winStats.total} 경기 데이터`,
});

export const WinRatePropsMapper = (
  winStats: recentWinInfo
): TypographyProps => ({
  type: 'default',
  text: `${(winStats.winRate * 100).toFixed(0)}%`,
});

export const ChampStatRowPropsMapper = (
  champInfo: [string, TotalMatchChampData]
): ChampStatRowProps => ({
  champInfo: champInfo,
});
