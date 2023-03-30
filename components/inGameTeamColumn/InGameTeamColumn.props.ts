import { InGameUserRowProps, RuneInfo, SpellInfos } from 'types';

export const InGamerUserRowPropsMapper = (
  nickname: string,
  runes: RuneInfo[],
  spells: SpellInfos,
  profileIconId: number
): InGameUserRowProps => ({ nickname, runes, spells, profileIconId });
