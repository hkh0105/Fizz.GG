import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import ChampionIcon from 'components/championIcon/ChampionIcon';
import SpellIcon from 'components/spellIcon/SpellIcon';
import RuneIcon from 'components/runeIcon/RuneIcon';
import Kda from 'components/kda/Kda';
import ItemIcon from 'components/itemIcon/ItemIcon';
import TeamChampion from 'components/teamChampion/TeamChampion';
import { MatchSummonerOverViewProps } from 'types';
import {
  ChampionIconPropsMapper,
  GrayTypographyPropsMapper,
  ItemIconPropsMapper,
  KdaPropsMapper,
  RedTypographyPropsMapper,
  RuneIconPropsMapper,
  SpellIconPropsMapper,
  TeamChampionPropsMapper,
} from './MatchSummonerOverView.props';

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
  const ChampionIconProps = ChampionIconPropsMapper(champion, championLevel);
  const SpellIconProps = SpellIconPropsMapper(spells);
  const RuneIconProps = RuneIconPropsMapper(runes);
  const KdaProps = KdaPropsMapper(kills, deaths, assists, kda);
  const ItemIconProps = ItemIconPropsMapper(summonerItems);
  const GoldProps = GrayTypographyPropsMapper('Gold :' + String(goldEarned));
  const SummonerTeamChampionProps = TeamChampionPropsMapper(summonerTeam);
  const EnemyTeamChampionProps = TeamChampionPropsMapper(enemyTeam);
  const CsProps = RedTypographyPropsMapper('CS :' + String(totalMinionsKilled));
  const KillProps = RedTypographyPropsMapper(
    '킬관여율 :' + String(killInvolvedRate.toFixed(1)) + '%'
  );
  const VisionScoreProps = GrayTypographyPropsMapper(
    '시야점수 : ' + String(visionScore)
  );

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
