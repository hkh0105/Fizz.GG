import { MouseEventHandler } from 'react';
import {
  BoxProps,
  ButtonProps,
  DetailSectionProps,
  MatchInfoByUser,
  MatchOverViewProps,
  MatchSummonerOverViewProps,
  QueueTypeMapper,
  RuneInfo,
  SpellInfos,
  ValueOf,
} from 'types';

export const queueTypeMapper: QueueTypeMapper = {
  0: '커스텀 게임',
  400: '노말',
  430: '노말',
  420: '솔로랭크',
  440: '자유랭크',
  83: 'AI모드',
  450: '칼바람나락',
};

export const DetailSectionPropsMapper = (
  summonerTeam: MatchInfoByUser[],
  enemyTeam: MatchInfoByUser[],
  maxDamage: number,
  maxTakenDamage: number
): DetailSectionProps => ({
  summonerTeam,
  enemyTeam,
  maxDamage,
  maxTakenDamage,
});

export const DetailButtonPropsMapper = (
  isWin: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
) => ({
  className: isWin
    ? 'bg-blue-200 text-blue-500 hover:bg-blue-500 hover:text-blue-700'
    : 'bg-red-200 text-red-500 hover:bg-red-500 hover:text-red-700',
  onClick,
});

export const CardBoxPropsMapper = (
  isWin: boolean,
  isShownDetail: boolean
): BoxProps => ({
  size: 'custom',
  height: 'h-32',
  width: 'w-full',
  color: isWin ? 'blue' : 'red',
  marginClass: isShownDetail ? '' : 'mb-2',
});

export const MatchSummonerOverViewPropsMapper = (
  champion: string,
  championLevel: number,
  summonerItems: number[],
  spells: SpellInfos,
  runes: RuneInfo[],
  kills: number,
  deaths: number,
  assists: number,
  kda: number,
  killInvolvedRate: number,
  totalMinionsKilled: number,
  visionScore: number,
  goldEarned: number,
  summonerTeam: MatchInfoByUser[],
  enemyTeam: MatchInfoByUser[]
): MatchSummonerOverViewProps => ({
  champion: champion,
  championLevel: championLevel,
  summonerItems: summonerItems,
  spells: spells,
  runes: runes,
  kills: kills,
  deaths: deaths,
  assists: assists,
  kda: kda,
  killInvolvedRate: killInvolvedRate,
  totalMinionsKilled: totalMinionsKilled,
  visionScore: visionScore,
  goldEarned: goldEarned,
  summonerTeam: summonerTeam,
  enemyTeam: enemyTeam,
});

export const MatchOverViewPropsMapper = (
  queueId: number,
  dayDiff: string,
  gameTime: string,
  isWin: boolean
): MatchOverViewProps => ({
  matchType: queueTypeMapper[queueId] ?? '특별모드',
  dayDiff: dayDiff,
  gameTime: gameTime,
  isWin: isWin,
});
