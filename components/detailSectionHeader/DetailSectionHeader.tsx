import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import { DetailSectionHeaderProps } from './DetailSectionHeader.types';
import {
  ChampKeyProps,
  ColorMapper,
  DamageBarChartKeyProps,
  DamagedBarChartKeyProps,
  ItemsKeyProps,
  KdaKeyProps,
  NicknameKeyProps,
  StatKeyProps,
} from './DetailSectionHeader.props';

const DetailSectionHeader: FC<DetailSectionHeaderProps> = ({ color }) => {
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
