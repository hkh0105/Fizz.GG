import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import ChampionIcon from 'components/championIcon/ChampionIcon';
import SpellIcon from 'components/spellIcon/SpellIcon';
import RuneIcon from 'components/runeIcon/RuneIcon';
import Kda from 'components/kda/Kda';
import ItemIcon from 'components/itemIcon.tsx/ItemIcon';
import TeamChampion from 'components/teamChampion/TeamChampion';
import {
  ChampionIconPropsMapper,
  ItemIconPropsMapper,
  RuneIconPropsMapper,
  SpellIconPropsMapper,
} from 'utils';
import {
  KdaProps,
  MatchSummonerOverViewProps,
  TeamChampionProps,
  TypographyProps,
} from 'types';

const MatchSummonerOverView: FC<MatchSummonerOverViewProps> = ({
  champion,
  championLevel,
  summonerItems,
  spells,
  runes,
  kills,
  deaths,
  assists,
  kda,
  killInvolvedRate,
  totalMinionsKilled,
  visionScore,
  goldEarned,
  summonerTeam,
  enemyTeam,
}) => {
  const ChampionIconProps = ChampionIconPropsMapper(
    50,
    champion,
    championLevel
  );

  const SpellIconProps = SpellIconPropsMapper(spells, 25, 'ml-2');

  const RuneIconProps = RuneIconPropsMapper(runes, 25, 'ml-1');

  const KdaProps: KdaProps = {
    marginClass: 'mt-2 ml-2',
    kills,
    deaths,
    assists,
    kda,
  };

  const ItemIconProps = ItemIconPropsMapper(summonerItems, 25, 'mt-3');

  const KillProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'red',
    text: '킬관여율 :' + String(killInvolvedRate.toFixed(1)) + '%',
  };

  const CsProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'red',
    text: 'CS :' + String(totalMinionsKilled),
  };

  const VisionScoreProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: '시야점수 : ' + String(visionScore),
  };

  const GoldProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: 'Gold :' + String(goldEarned),
  };

  const SummonerTeamChampionProps: TeamChampionProps = {
    team: summonerTeam,
    imageSize: 20,
    typoSize: 'small',
    width: 140,
  };

  const EnemyTeamChampionProps: TeamChampionProps = {
    team: enemyTeam,
    imageSize: 20,
    typoSize: 'small',
    width: 140,
  };

  return (
    <div className='flex w-[700px] py-5 ml-10'>
      <div className='flex-col w-[200px]'>
        <div className='flex'>
          <ChampionIcon {...ChampionIconProps} />
          <SpellIcon {...SpellIconProps} />
          <RuneIcon {...RuneIconProps} />
          <Kda {...KdaProps} />
        </div>
        <ItemIcon {...ItemIconProps} />
      </div>
      <div className='flex w-[150px] flex-col justify-center ml-5 border-l-2-slate-300'>
        <Typography {...KillProps} />
        <Typography {...CsProps} />
        <Typography {...VisionScoreProps} />
        <Typography {...GoldProps} />
      </div>
      <div className='flex w-[280px]'>
        <TeamChampion {...SummonerTeamChampionProps} />
        <TeamChampion {...EnemyTeamChampionProps} />
      </div>
    </div>
  );
};

export default MatchSummonerOverView;
