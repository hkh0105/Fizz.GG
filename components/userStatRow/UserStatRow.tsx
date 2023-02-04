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
import {
  SingleBarChartProps,
  ChampionIconProps,
  SpellIconProps,
  UserStatRowProps,
  SpellInfoArr,
  RuneInfo,
  RuneIconProps,
  KdaProps,
  TypographyProps,
  ItemIconProps,
} from 'types';

const UserStatRow: FC<UserStatRowProps> = ({
  summoner,
  maxTotalDamage,
  maxTotalTakenDamage,
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
  const spellD = Object?.entries(spellData).find(
    (spell) => Number(spell[1]?.key) === summoner1Id
  );
  const spellF = Object?.entries(spellData).find(
    (spell) => Number(spell[1]?.key) === summoner2Id
  );
  const spell = [spellD, spellF] as SpellInfoArr;

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
  const rune = [mainRune, subRuneTheme] as RuneInfo[];

  //KDA
  const kda = (kills + assists) / deaths;

  const ChampionIconProps: ChampionIconProps = {
    championName: championName,
    championLevel: champLevel,
    width: 30,
  };

  const SpellIconProps: SpellIconProps = {
    width: 15,
    spell: spell,
    marginClass: 'pt-1',
  };

  const RuneIconProps: RuneIconProps = {
    width: 15,
    marginClass: 'pt-1',
    rune,
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
    totalValue: maxTotalDamage,
    endValue: maxTotalDamage - totalDamageDealtToChampions,
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
    totalValue: maxTotalTakenDamage,
    endValue: maxTotalTakenDamage - totalDamageTaken,
    startColor: 'blue',
    endColor: 'white',
    isValueShow: false,
    titleSize: 'xSmall',
    titleColor: 'gray',
  };

  const ItemIconProps: ItemIconProps = {
    width: 25,
    summonerItems: [item0, item1, item2, item3, item4, item5, item6],
    marginClass: 'pt-7',
  };

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
