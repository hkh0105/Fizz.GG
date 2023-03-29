import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import Box from 'userInterface/box/Box';
import MatchOverView from '../matchSection/MatchOverView';
import MatchSummonerOverView from '../matchSection/MatchSummonerOverView';
import DetailSection from '../detailSection/DetailSection';
import { recentInfo } from 'store';
import { useGetRuneJson, useGetSpellJson, useGetGameInfo } from 'hooks/queries';
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
import {
  MatchCardProps,
  RuneInfo,
  SpellInfos,
  RecentMatchUserInfo,
} from './MatchCard.types';
import {
  CardBoxPropsMapper,
  DetailButtonPropsMapper,
  DetailSectionPropsMapper,
  MatchOverViewPropsMapper,
  MatchSummonerOverViewPropsMapper,
} from './MatchCard.props';

const MatchCard: FC<MatchCardProps> = ({ matchId, nickname }) => {
  const [isShownDetail, setShownDetail] = useState(false);
  const [recentMatches, setRecentMatches] =
    useRecoilState<RecentMatchUserInfo[]>(recentInfo);

  const handleClickButton = () => setShownDetail(!isShownDetail);

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

  useEffect(() => {
    if (gameInfo) {
      setMatchInfo();
    }
  }, [gameInfo]);

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

  const CardBoxProps = CardBoxPropsMapper(isWin, isShownDetail);
  const DetailButtonProps = DetailButtonPropsMapper(isWin, handleClickButton);
  const DetailSectionProps = DetailSectionPropsMapper(
    summonerTeam,
    enemyTeam,
    maxDamage,
    maxTakenDamage
  );
  const MatchOverViewProps = MatchOverViewPropsMapper(
    queueId,
    dayDiff,
    gameTime,
    isWin
  );
  const SummonerOverViewProps = MatchSummonerOverViewPropsMapper(
    championName,
    champLevel,
    items,
    [spellD, spellF] as SpellInfos,
    [mainRune, subRune] as RuneInfo[],
    kills,
    deaths,
    assists,
    kda,
    killInvolvedRate,
    totalMinionsKilled,
    visionScore,
    goldEarned,
    summonerTeam,
    enemyTeam
  );

  return (
    <>
      <Box {...CardBoxProps}>
        <div className='flex'>
          <MatchOverView {...MatchOverViewProps} />
          <MatchSummonerOverView {...SummonerOverViewProps} />
          <button {...DetailButtonProps}>&darr;</button>
        </div>
      </Box>
      {isShownDetail && <DetailSection {...DetailSectionProps} />}
    </>
  );
};

export default MatchCard;
