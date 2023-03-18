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
  getKda,
  getMainRune,
  getSpells,
  getSubRune,
  ChampionIconPropsMapper,
  ItemIconPropsMapper,
  KdaPropsMapper,
  RuneIconPropsMapper,
  SpellIconPropsMapper,
  SingleBarChartPropsMapper,
} from 'utils';
import { UserStatRowProps, SpellInfos, RuneInfo, TypographyProps } from 'types';

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

  const SpellIconProps = SpellIconPropsMapper(spell, 15, 'pt-1');

  const RuneIconProps = RuneIconPropsMapper(runes, 15, 'pt-1');

  const KdaProps = KdaPropsMapper(
    kills,
    deaths,
    assists,
    kda,
    'mt-2 ml-5',
    'xSmall',
    'xSmall'
  );

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

  const DamageChartProps = SingleBarChartPropsMapper(
    100,
    15,
    totalDamageDealtToChampions,
    maxDamage,
    'red',
    'white',
    false,
    String(totalDamageDealtToChampions),
    maxDamage - totalDamageDealtToChampions,
    'xSmall',
    'gray'
  );
  const DamagedChartProps = SingleBarChartPropsMapper(
    100,
    15,
    totalDamageDealtToChampions,
    maxTakenDamage,
    'blue',
    'white',
    false,
    String(totalDamageTaken),
    maxTakenDamage - totalDamageTaken,
    'xSmall',
    'gray'
  );

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
