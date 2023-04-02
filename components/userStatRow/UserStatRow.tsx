import Link from 'next/link';
import { FC } from 'react';

import ChampionIcon from 'components/championIcon/ChampionIcon';
import SpellIcon from 'components/spellIcon/SpellIcon';
import ItemIcon from 'components/itemIcon/ItemIcon';
import RuneIcon from 'components/runeIcon/RuneIcon';
import Kda from 'components/kda/Kda';
import Typography from 'userInterface/typography/Typography';
import SingleBarChart from 'components/singleBarChart/SingleBarChart';
import { useGetRuneJson, useGetSpellJson } from 'hooks/queries';
import { UserStatRowProps, SpellInfos, RuneInfo } from './UserStatRow.types';
import { getKda, getMainRune, getSpells, getSubRune } from 'utils';
import {
  ChampionIconPropsMapper,
  ItemIconPropsMapper,
  KdaPropsMapper,
  RuneIconPropsMapper,
  SingleBarChartPropsMapper,
  SpellIconPropsMapper,
  TypographyPropsMapper,
} from './UserStatRow.props';

const UserStatRow: FC<UserStatRowProps> = ({
  summoner,
  maxDamage,
  maxTakenDamage,
}) => {
  const { spellData } = useGetSpellJson();
  const { runeData } = useGetRuneJson();

  const {
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
    summonerName,
    goldEarned,
    totalDamageDealtToChampions,
    totalDamageTaken,
  } = summoner;

  //Spell
  const spellD = getSpells(spellData, summoner1Id);
  const spellF = getSpells(spellData, summoner2Id);
  const spell = [spellD, spellF] as SpellInfos;

  //Rune

  const mainRune = getMainRune(runeData, perks);
  const subRune = getSubRune(runeData, perks);
  const runes = [mainRune, subRune] as RuneInfo[];

  //KDA
  const kda = getKda(kills, assists, deaths);

  const ChampionIconProps = ChampionIconPropsMapper(championName, champLevel);
  const SpellIconProps = SpellIconPropsMapper(spell);
  const RuneIconProps = RuneIconPropsMapper(runes);
  const KdaProps = KdaPropsMapper(kills, deaths, assists, kda);
  const NicknameProps = TypographyPropsMapper(summonerName);
  const CsProps = TypographyPropsMapper('CS :' + totalMinionsKilled);
  const VisionScoreProps = TypographyPropsMapper('시야점수 : ' + visionScore);
  const DamageChartProps = SingleBarChartPropsMapper(
    totalDamageDealtToChampions,
    maxDamage,
    'red',
    totalDamageDealtToChampions,
    maxDamage - totalDamageDealtToChampions
  );
  const DamagedChartProps = SingleBarChartPropsMapper(
    totalDamageDealtToChampions,
    maxTakenDamage,
    'blue',
    totalDamageTaken,
    maxTakenDamage - totalDamageTaken
  );
  const ItemIconProps = ItemIconPropsMapper([
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
  ]);

  return (
    <div className='w-bg-section h-15 center gap-x-1 '>
      <div className='flex w-37.5 pt-2'>
        <ChampionIcon {...ChampionIconProps} />
        <SpellIcon {...SpellIconProps} />
        <RuneIcon {...RuneIconProps} />
        <Kda {...KdaProps} />
      </div>
      <div className='flex pt-4 w-25'>
        <Link
          href={{
            pathname: '/search/[nickname]',
            query: { nickname: summonerName },
          }}
          className='hover:underline'
        >
          <Typography {...NicknameProps} />
        </Link>
      </div>
      <div className='w-20 pt-4 col'>
        <Typography {...CsProps} />
        <Typography {...VisionScoreProps} />
      </div>
      <div className='flex w-62.5 gap-x-3 pt-2'>
        <SingleBarChart {...DamageChartProps} />
        <SingleBarChart {...DamagedChartProps} />
      </div>
      <ItemIcon {...ItemIconProps} />
    </div>
  );
};

export default UserStatRow;
