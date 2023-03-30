import { RuneInfo, SpellInfos } from 'types';

export interface InGameUserRowProps {
  nickname: string;
  runes: RuneInfo[];
  spells: SpellInfos;
  profileIconId: number;
}
