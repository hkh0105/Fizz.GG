import { InGamePerks, RuneData, RuneInfo, SpellData, SpellInfos } from 'types';

export const getInGameSpells = (
  spellData: SpellData,
  spellDId: number,
  spellFId: number
) => {
  const spellEntries = Object?.entries(spellData);

  const spellD = spellEntries.find(
    (spell) => Number(spell[1]?.key) === spellDId
  );
  const spellF = spellEntries.find(
    (spell) => Number(spell[1]?.key) === spellFId
  );
  const spells = [spellD, spellF] as SpellInfos;

  return spells;
};

export const getInGameRunes = (runeData: RuneData, perks: InGamePerks) => {
  const mainRuneTheme = runeData?.find((rune) => rune.id === perks.perkStyle);

  const mainRune = mainRuneTheme?.slots[0].runes.find(
    (rune) => rune.id === perks.perkIds?.[0]
  );
  const subRuneTheme = runeData?.find((rune) => rune.id === perks.perkSubStyle);
  const runes = [mainRune, subRuneTheme] as RuneInfo[];

  return runes;
};
