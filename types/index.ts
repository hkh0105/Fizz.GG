export type {
  SpellIconProps,
  SpellInfos,
} from 'components/spellIcon/SpellIcon.types';
export type {
  RuneIconProps,
  RuneInfo,
} from 'components/runeIcon/RuneIcon.types';
export type { ChampionIconProps } from 'components/championIcon/ChampionIcon.types';
export type { ProfileIconProps } from 'components/profileIcon/ProfileIcon.types';
export type { ItemIconProps } from 'components/itemIcon/ItemIcon.types';
export type { KdaProps } from 'components/kda/Kda.types';
export type { AsyncBoundaryProps } from 'components/asyncBoundary/AsyncBoundary.types';
export type { TeamChampionProps } from 'components/teamChampion/TeamChampion.types';
export type { ButtonGroupProps } from 'components/buttonGroup/ButtonGroup.types';
export type { SearchWindowProps } from 'components/searchWindow/SearchWindow.types';
export type { ChampStatRowProps } from 'components/champStatRow/ChampStatRow.types';
export type { RankCardProps } from 'components/rankCard/RankCard.types';
export type { RankSectionProps } from 'components/rankSection/RankSection.types';
export type { UserStatRowProps } from 'components/userStatRow/UserStatRow.types';
export type { MatchOverViewProps } from 'components/matchOverView/MatchOverView.types';
export type { MatchSummonerOverViewProps } from 'components/matchSummonerOverView/MatchSummonerOverView.types';
export type {
  MatchCardProps,
  QueueTypeMapper,
} from 'components/matchCard/MatchCard.types';
export type { MatchSectionProps } from 'components/matchSection/MatchSection.types';
export type { MasterySectionProps } from 'components/masterySection/MasterySection.types';
export type { MasteryRowProps } from 'components/masteryRow/MasteryRow.types';
export type { IngameSectionProps } from 'components/inGameSection/InGameSection.types';
export type { InGameTeamColumnProps } from 'components/inGameTeamColumn/InGameTeamColumn.types';
export type { InGameUserRowProps } from 'components/inGameUserRow/InGameUserRow.types';
export type { DetailSectionProps } from 'components/detailSection/DetailSection.types';
export type {
  DetailSectionHeaderProps,
  DetailHeaderColorMapper,
} from 'components/detailSectionHeader/DetailSectionHeader.types';
export type { ProfileProps } from 'components/profile/Profile.types';
export type {
  PieChartProps,
  Margin,
  ChartData,
} from 'components/pieChart/PieChart.types';
export type {
  SingleBarColorMapper,
  SingleBarChartProps,
} from 'components/singleBarChart/SingleBarChart.types';

export type { CustomImageProps } from 'userInterface/customImage/CustomImage.types';
export type {
  InputProps,
  InputBorderColorMapper,
  InputSizeMapper,
} from 'userInterface/input/Input.types';
export type {
  ButtonProps,
  ButtonColorMapper,
  ButtonSizeMapper,
} from 'userInterface/button/Button.types';
export type {
  BoxProps,
  BoxColorMapper,
  BoxSizeMapper,
} from 'userInterface/box/Box.types';
export type {
  TypographyProps,
  TypoGraphySizeMapper,
  TypographyTypeMapper,
  TypoGraphyColorMapper,
} from 'userInterface/typography/Typography.types';

export type {
  ChampTotalMatchInfoArray,
  RecentChampInfo,
  RecentMatchUserInfo,
  recentWinInfo,
} from 'store/store.types';

export type { useIntersectionObserverProps } from 'hooks/useInterSectionObserver.types';

export type {
  Response,
  QueryOptions,
  Teams,
  Bans,
  Ban,
  Objectives,
  Metadata,
  GameInfo,
  Game,
  MatchTeam,
  Champ,
  Participants,
  GameDetailInfo,
  MatchInfoByUser,
  Perks,
  InGameInfo,
  InGameUser,
  InGamePerks,
  RankTitleMapper,
  Rank,
  RankTier,
  LeagueInfo,
  LeagueInfos,
  MasteryInfo,
  MatchIds,
  ChampDetails,
  RiotChampInfo,
  BrowserResponse,
  RiotSpellData,
  SpellData,
  SummonerInfo,
  RiotRuneData,
  RuneData,
} from 'hooks/queries/query.types';

export type ValueOf<T> = T[keyof T];

export interface IconProps {
  width: number;
  marginClass?: string;
}

export type CustomError = {
  message: string;
  status: number;
  name: string;
};
