import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import Box from 'userInterface/box/Box';
import MatchOverView from './MatchOverView';
import MatchSummonerOverView from './MatchSummonerOverView';
import DetailSection from '../detailSection/DetailSection';
import {
  getDateDiff,
  getEnemyTeam,
  getKda,
  getKillInvolvedRate,
  getMainRune,
  getMaxDamage,
  getMaxTakenDamage,
  getSpells,
  getSubRune,
  getSummonerTeam,
} from 'utils';
import { recentInfo } from 'store';
import { useGetRuneJson, useGetSpellJson, useGetGameInfo } from 'hooks/queries';
import {
  MatchCardProps,
  MatchOverViewProps,
  QueueTypeMapper,
  RuneInfo,
  SpellInfos,
  BoxProps,
  RecentMatchUserInfo,
  MatchInfoByUser,
} from 'types';

const MatchCard: FC<MatchCardProps> = ({ matchId, nickname }) => {
  const [isShowDetail, setShowDetail] = useState(false); // isShown
  const [recentMatches, setRecentMatches] =
    useRecoilState<RecentMatchUserInfo[]>(recentInfo);

  const { spellData } = useGetSpellJson();
  const { runeData } = useGetRuneJson();
  const {
    summonerTeamInfo,
    isWin,
    summoner1Id,
    summoner2Id,
    perks,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    kills,
    assists,
    deaths,
    visionScore,
    totalMinionsKilled,
    champLevel,
    championName,
    goldEarned,
    tripleKills,
    doubleKills,
    quadraKills,
    pentaKills,
    searchedUser,
    gameDuration,
    queueId,
    gameCreation,
    participants,
    gameInfo,
  } = useGetGameInfo(matchId, nickname);

  //DayDiff
  const dayDiff = getDateDiff(gameCreation);

  //Duration
  const gameTime = String(Math.floor(gameDuration / 60)) + '분';

  //Spell
  const spellD = getSpells(spellData, summoner1Id);
  const spellF = getSpells(spellData, summoner2Id);

  //Rune
  const mainRune = getMainRune(runeData, perks);
  const subRune = getSubRune(runeData, perks);

  //Items
  const items = [item0, item1, item2, item3, item4, item5, item6];

  const queueTypeMapper: QueueTypeMapper = {
    0: '커스텀 게임',
    400: '노말',
    430: '노말',
    420: '솔로랭크',
    440: '자유랭크',
    83: 'AI모드',
    450: '칼바람나락',
  };

  //킬관여
  const totalKills = summonerTeamInfo.objectives.champion.kills;
  const killInvolvedRate = getKillInvolvedRate(kills, assists, totalKills);
  // ((kills + assists) / summonerTeamInfo.objectives.champion.kills) * 100;

  //KDA
  const kda = getKda(kills, assists, deaths);

  //칭호
  const designation = { tripleKills, doubleKills, quadraKills, pentaKills };

  // 팀
  const summonerTeamId = searchedUser.teamId;
  const summonerTeam = getSummonerTeam(participants, summonerTeamId);
  const enemyTeam = getEnemyTeam(participants, summonerTeamId);

  //Total Damage
  const maxDamage = getMaxDamage(participants);
  const maxTakenDamage = getMaxTakenDamage(participants);

  const setMatchInfo = () => {
    const isPrevData = recentMatches.some(
      (info: RecentMatchUserInfo) => info.id === matchId
    );

    if (isPrevData) {
      return;
    }

    const recentMatchUserInfo: RecentMatchUserInfo = {
      id: matchId,
      kda: kda,
      championName: championName,
      win: isWin ? true : false,
    };

    setRecentMatches((prev) => [...prev, recentMatchUserInfo]);
  };

  const MatchOverViewProps: MatchOverViewProps = {
    matchType: queueTypeMapper[queueId] ?? '특별모드',
    dayDiff,
    isWin,
    gameTime,
  };

  const SummonerOverViewProps = {
    champion: championName,
    championLevel: champLevel,
    summonerItems: items,
    spells: [spellD, spellF] as SpellInfos,
    runes: [mainRune, subRune] as RuneInfo[],
    summonerTeam: summonerTeam,
    enemyTeam: enemyTeam,
    kills,
    deaths,
    assists,
    kda,
    killInvolvedRate,
    totalMinionsKilled,
    visionScore,
    goldEarned,
  };

  const BoxProps: BoxProps = {
    size: 'custom',
    height: 'h-32',
    width: 'w-full',
    color: isWin ? 'blue' : 'red',
    marginClass: isShowDetail ? '' : 'mb-2',
  };

  const ShowDetailButtonProps = {
    className: isWin
      ? 'bg-blue-200 text-blue-500 hover:bg-blue-500 hover:text-blue-700'
      : 'bg-red-200 text-red-500 hover:bg-red-500 hover:text-red-700',
    onClick: () => setShowDetail(!isShowDetail),
  };

  const DetailSectionProps = {
    summonerTeam,
    enemyTeam,
    maxDamage,
    maxTakenDamage,
  };

  useEffect(() => {
    if (gameInfo) {
      setMatchInfo();
    }
  }, [gameInfo]);

  return (
    <>
      <Box {...BoxProps}>
        <div className='flex'>
          <MatchOverView {...MatchOverViewProps} />
          <MatchSummonerOverView {...SummonerOverViewProps} />
          <button {...ShowDetailButtonProps}>&darr;</button>
        </div>
      </Box>
      {isShowDetail && <DetailSection {...DetailSectionProps} />}
    </>
  );
};

export default MatchCard;
