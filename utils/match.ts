import { MatchInfoByUser, Perks, RuneData, SpellData } from 'types';

export const getDateDiff = (ms: number) => {
  const date = new Date(ms);
  const today = new Date();

  let diff = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60));
  let suffix = '시간전';

  if (diff > 24) {
    diff = Math.floor(
      (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    suffix = '일전';
  }

  if (diff > 30) {
    diff = Math.floor(
      (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );
    suffix = '달전';
  }

  const result: string = String(diff) + suffix;

  return result;
};

export const getSpells = (spellData: SpellData, summonerId: number) => {
  const spell = Object?.entries(spellData).find(
    (spell) => Number(spell[1]?.key) === summonerId
  );

  return spell;
};

export const getMainRune = (runeData: RuneData, perks: Perks) => {
  const mainRuneTheme = runeData.find(
    (rune) => rune.id === perks.styles[0].style
  );
  const mainRune = mainRuneTheme?.slots[0].runes.find(
    (rune) => rune.id === perks.styles[0].selections[0].perk
  );

  return mainRune;
};

export const getSubRune = (runeData: RuneData, perks: Perks) => {
  const subRune = runeData.find((rune) => rune.id === perks.styles[1].style);

  return subRune;
};

export const getKda = (kills: number, assists: number, deaths: number) => {
  const kda = (kills + assists) / deaths;

  return kda;
};

export const getKillInvolvedRate = (
  kills: number,
  assists: number,
  totalKills: number
) => {
  const killInvolvedRate = ((kills + assists) / totalKills) * 100;

  return killInvolvedRate;
};

export const getSummonerTeam = (
  participants: MatchInfoByUser[],
  id: number
) => {
  const team = participants.filter(
    (user: MatchInfoByUser) => user.teamId === id
  );

  return team;
};

export const getEnemyTeam = (participants: MatchInfoByUser[], id: number) => {
  const team = participants.filter(
    (user: MatchInfoByUser) => user.teamId !== id
  );

  return team;
};

export const getMaxDamage = (users: MatchInfoByUser[]) => {
  const maxDamage = Math.max(
    ...users.map((user) => user.totalDamageDealtToChampions)
  );

  return maxDamage;
};

export const getMaxTakenDamage = (users: MatchInfoByUser[]) => {
  const maxTakenDamage = Math.max(
    ...users.map((user) => user.totalDamageTaken)
  );

  return maxTakenDamage;
};
