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
  const ChampKeyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: '챔피언',
  };

  const KdaKeyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: 'KDA',
  };

  const NicknameKeyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: '닉네임',
  };

  const StatKeyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: 'Stat',
  };

  const DamageBarChartKeyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: '가한 피해량',
  };

  const DamagedBarChartKeyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: '받은 피해량',
  };

  const ItemsKeyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: '아이템',
  };
  return (
    <div className={ColorMapper[color]}>
      <div className='w-[75px] pt-2'>
        <Typography {...ChampKeyProps} />
      </div>
      <div className='w-[75px] pt-2'>
        <Typography {...KdaKeyProps} />
      </div>
      <div className='w-[100px] pt-2'>
        <Typography {...NicknameKeyProps} />
      </div>
      <div className='w-[80px] pt-2'>
        <Typography {...StatKeyProps} />
      </div>
      <div className='w-[105px] pt-2'>
        <Typography {...DamageBarChartKeyProps} />
      </div>
      <div className='w-[140px] pt-2'>
        <Typography {...DamagedBarChartKeyProps} />
      </div>
      <div className='pt-2'>
        <Typography {...ItemsKeyProps} />
      </div>
    </div>
  );
};

export default DetailSectionHeader;
