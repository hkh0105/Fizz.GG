import { MatchInfoByUser, TypoGraphySizeMapper } from 'types';

export interface TeamChampionProps {
  imageSize: number;
  width: number;
  team: MatchInfoByUser[];
  typoSize: keyof TypoGraphySizeMapper;
}
