import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import Box from 'userInterface/box/Box';
import MatchOverView from './MatchOverView';
import MatchSummonerOverView from './MatchSummonerOverView';
import DetailSection from './DetailSection';
import { getDateDiff } from 'utils';
import { recentInfo } from 'store';
import { useGetRuneJson, useGetSpellJson, useGetGameInfo } from 'hooks/queries';
import {
  MatchCardProps,
  MatchInfoByUser,
  MatchOverViewProps,
  QueueTypeMapper,
  RuneInfo,
  SpellInfoArr,
  BoxProps,
  RecentMatchUserInfo,
} from 'types';

const MatchCard: FC<MatchCardProps> = ({ matchId, nickname }) => {
  const [isShowDetail, setShowDetail] = useState(false);
  const [recentMatchArr, setRecentMatchArr] =
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
  const spellD = Object?.entries(spellData).find(
    (spell) => Number(spell[1]?.key) === summoner1Id
  );
  const spellF = Object?.entries(spellData).find(
    (spell) => Number(spell[1]?.key) === summoner2Id
  );

  //Rune
  const mainRuneTheme = runeData.find(
    (rune) => rune.id === perks.styles[0].style
  );
  const mainRune = mainRuneTheme?.slots[0].runes.find(
    (rune) => rune.id === perks.styles[0].selections[0].perk
  );
  const subRuneTheme = runeData.find(
    (rune) => rune.id === perks.styles[1].style
  );

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
  const killInvolvedRate =
    ((kills + assists) / summonerTeamInfo.objectives.champion.kills) * 100;

  //KDA
  const kda = (kills + assists) / deaths;

  //칭호
  const designation = { tripleKills, doubleKills, quadraKills, pentaKills };

  // 팀
  const summonerTeam = participants.filter(
    (user: MatchInfoByUser) => user.teamId === searchedUser.teamId
  );
  const enemyTeam = participants.filter(
    (user: MatchInfoByUser) => user.teamId !== searchedUser.teamId
  );

  const setMatchInfo = () => {
    const isPrevData = recentMatchArr.some(
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

    setRecentMatchArr((prev) => [...prev, recentMatchUserInfo]);
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
    spell: [spellD, spellF] as SpellInfoArr,
    rune: [mainRune, subRuneTheme] as RuneInfo[],
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

  return (
    <>
      <Box {...BoxProps}>
        <div className='flex'>
          <MatchOverView {...MatchOverViewProps} />
          <MatchSummonerOverView {...SummonerOverViewProps} />
          <button {...ShowDetailButtonProps}>&darr;</button>
        </div>
      </Box>
      {isShowDetail && (
        <DetailSection summonerTeam={summonerTeam} enemyTeam={enemyTeam} />
      )}
    </>
  );
};

export default MatchCard;
