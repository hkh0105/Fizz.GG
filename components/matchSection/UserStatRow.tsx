import Link from 'next/link';
import { FC } from 'react';

import ChampionIcon from 'components/championIcon/ChampionIcon';
import SpellIcon from 'components/spellIcon/SpellIcon';
import ItemIcon from 'components/itemIcon.tsx/ItemIcon';
import RuneIcon from 'components/runeIcon/RuneIcon';
import Kda from 'components/kda/Kda';
import Typography from 'userInterface/typography/Typography';
import SingleBarChart from 'components/singleBarChart/SingleBarChart';
import { useGetRuneJson, useGetSpellJson } from 'hooks/queries';
import { getKda, getMainRune, getSpells, getSubRune } from 'utils';
import {
  SingleBarChartProps,
  SpellIconProps,
  UserStatRowProps,
  SpellInfos,
  RuneInfo,
  RuneIconProps,
  KdaProps,
  TypographyProps,
} from 'types';
import {
  ChampionIconPropsMapper,
  ItemIconPropsMapper,
} from 'utils/propsMapper';

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

  const ChampionIconProps = ChampionIconPropsMapper(
    30,
    championName,
    champLevel
  );

  const SpellIconProps: SpellIconProps = {
    width: 15,
    spells: spell,
    marginClass: 'pt-1',
  };

  const RuneIconProps: RuneIconProps = {
    width: 15,
    marginClass: 'pt-1',
    runes,
  };

  const KdaProps: KdaProps = {
    marginClass: 'mt-2 ml-5',
    kdaSize: 'xSmall',
    size: 'xSmall',
    kills,
    deaths,
    assists,
    kda,
  };

  const NicknameProps: TypographyProps = {
    type: 'default',
    size: 'xSmall',
    color: 'gray',
    text: summonerName,
  };

  const CsProps: TypographyProps = {
    type: 'default',
    size: 'xSmall',
    color: 'gray',
    text: 'CS :' + String(totalMinionsKilled),
  };

  const VisionScoreProps: TypographyProps = {
    type: 'default',
    size: 'xSmall',
    color: 'gray',
    text: '시야점수 : ' + String(visionScore),
  };

  const DamageChartProps: SingleBarChartProps = {
    width: 100,
    height: 15,
    title: String(totalDamageDealtToChampions),
    startValue: totalDamageDealtToChampions,
    totalValue: maxDamage,
    endValue: maxDamage - totalDamageDealtToChampions,
    startColor: 'red',
    endColor: 'white',
    isValueShow: false,
    titleSize: 'xSmall',
    titleColor: 'gray',
  };

  const DamagedChartProps: SingleBarChartProps = {
    width: 100,
    height: 15,
    title: String(totalDamageTaken),
    startValue: totalDamageTaken,
    totalValue: maxTakenDamage,
    endValue: maxTakenDamage - totalDamageTaken,
    startColor: 'blue',
    endColor: 'white',
    isValueShow: false,
    titleSize: 'xSmall',
    titleColor: 'gray',
  };

  const ItemIconProps = ItemIconPropsMapper(
    [item0, item1, item2, item3, item4, item5, item6],
    25,
    'pt-7'
  );

  return (
    <div className='w-[800px] h-[60px] justify-center flex items-center gap-x-1 '>
      <div className='flex w-[150px] pt-2'>
        <ChampionIcon {...ChampionIconProps} />
        <SpellIcon {...SpellIconProps} />
        <RuneIcon {...RuneIconProps} />
        <Kda {...KdaProps} />
      </div>
      <div className='flex w-[100px] pt-4'>
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
      <div className='flex-col w-[80px] pt-4'>
        <Typography {...CsProps} />
        <Typography {...VisionScoreProps} />
      </div>
      <div className='flex w-[250px] gap-x-3 pt-2'>
        <SingleBarChart {...DamageChartProps} />
        <SingleBarChart {...DamagedChartProps} />
      </div>
      <ItemIcon {...ItemIconProps} />
    </div>
  );
};

export default UserStatRow;
