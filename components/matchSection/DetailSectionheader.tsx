import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import {
  DetailHeaderColorMapper,
  DetailSectionHeaderProps,
  TypographyProps,
} from 'types';

const DetailSectionHeader: FC<DetailSectionHeaderProps> = ({ color }) => {
  const ColorMapper: DetailHeaderColorMapper = {
    red: 'flex w-full h-[35px] border-b-2 border-red-200 pl-5 gap-x-1',
    blue: 'flex w-full h-[35px] border-b-2 border-blue-200 pl-5 gap-x-1',
  };
  const ChampTypoProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: '챔피언',
  };

  const KdaTypoProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: 'KDA',
  };

  const NicknameTypoProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: '닉네임',
  };

  const StatTypoProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: 'Stat',
  };

  const DamageBarChartTypoProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: '가한 피해량',
  };

  const DamagedBarChartTypoProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: '받은 피해량',
  };

  const ItemsTypoProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: '아이템',
  };
  return (
    <div className={ColorMapper[color]}>
      <div className='w-[75px] pt-2'>
        <Typography {...ChampTypoProps} />
      </div>
      <div className='w-[75px] pt-2'>
        <Typography {...KdaTypoProps} />
      </div>
      <div className='w-[100px] pt-2'>
        <Typography {...NicknameTypoProps} />
      </div>
      <div className='w-[80px] pt-2'>
        <Typography {...StatTypoProps} />
      </div>
      <div className='w-[105px] pt-2'>
        <Typography {...DamageBarChartTypoProps} />
      </div>
      <div className='w-[140px] pt-2'>
        <Typography {...DamagedBarChartTypoProps} />
      </div>
      <div className='pt-2'>
        <Typography {...ItemsTypoProps} />
      </div>
    </div>
  );
};

export default DetailSectionHeader;
