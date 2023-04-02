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
      <div className='pt-2 w-19'>
        <Typography {...ChampKeyProps} />
      </div>
      <div className='pt-2 w-19'>
        <Typography {...KdaKeyProps} />
      </div>
      <div className='pt-2 w-25'>
        <Typography {...NicknameKeyProps} />
      </div>
      <div className='w-20 pt-2'>
        <Typography {...StatKeyProps} />
      </div>
      <div className='pt-2 w-21'>
        <Typography {...DamageBarChartKeyProps} />
      </div>
      <div className='pt-2 w-35'>
        <Typography {...DamagedBarChartKeyProps} />
      </div>
      <div className='pt-2'>
        <Typography {...ItemsKeyProps} />
      </div>
    </div>
  );
};

export default DetailSectionHeader;
