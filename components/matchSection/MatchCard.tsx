import { FC } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import Box from 'userInterface/box/Box';
import MatchOverView from './MatchOverView';
import MatchSummonerOverView from './MatchSummonerOverView';
import { QUERY_KEYS } from 'constant';
import { CLIENT_API } from 'api/api';
import { getDateDiff } from 'utils';
import {
  GameDetailInfo,
  GameInfo,
  MatchCardProps,
  MatchInfoByUser,
  MatchOverViewProps,
  MatchTeam,
  QueueTypeMapper,
  Response,
  RiotSpellData,
  RuneData,
  SpellData,
  RuneInfo,
  SpellInfoArr,
  BoxProps,
} from 'types';

const MatchCard: FC<MatchCardProps> = ({ matchId, nickname }) => {
  const { data: gameResponse }: UseQueryResult<Response<GameInfo>> = useQuery(
    [QUERY_KEYS.getGameByMatchId, { matchId }],
    () => CLIENT_API.getGameByMatchId(matchId)
  );
  const { data: riotSpellData }: UseQueryResult<RiotSpellData> = useQuery(
    [QUERY_KEYS.getSpell],
    CLIENT_API.getSpell
  );
  const { data: riotRuneData }: UseQueryResult<RuneData> = useQuery(
    [QUERY_KEYS.getRune],
    CLIENT_API.getRune
  );

  const gameInfo: GameDetailInfo = gameResponse?.items.info as GameDetailInfo;
  const spellData: SpellData = riotSpellData?.data as SpellData;

  const searchedUser = gameResponse?.items.info.participants.find(
    (user: MatchInfoByUser) => user.summonerName === nickname
  ) as MatchInfoByUser;
  const summonerTeamInfo = gameInfo.teams.find(
    (data) => data.win === searchedUser.win
  ) as MatchTeam;

  const { gameDuration, queueId, gameCreation, participants } = gameInfo;
  const {
    win: isWin,
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
  } = searchedUser;

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
  const mainRuneTheme = riotRuneData?.find(
    (rune) => rune.id === perks.styles[0].style
  );
  const mainRune = mainRuneTheme?.slots[0].runes.find(
    (rune) => rune.id === perks.styles[0].selections[0].perk
  );
  const subRuneTheme = riotRuneData?.find(
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
  };

  return (
    <Box {...BoxProps}>
      <div className='flex'>
        <MatchOverView {...MatchOverViewProps} />
        <MatchSummonerOverView {...SummonerOverViewProps} />
      </div>
    </Box>
  );
};

export default MatchCard;
