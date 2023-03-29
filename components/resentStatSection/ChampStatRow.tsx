import { FC } from 'react';

import ChampionIcon from 'components/championIcon/ChampionIcon';
import Typography from 'userInterface/typography/Typography';
import { ChampStatRowProps } from 'types';
import {
  ChampionIconPropsMapper,
  ChampKdaPropsMapper,
  WinPropsMapper,
  WinRatePropsMapper,
} from './ChampStatRow.props';

const ChampStatRow: FC<ChampStatRowProps> = ({ champInfo }) => {
  const winRate = ((champInfo[1].win * 100) / champInfo[1].total).toFixed(0);

  const ChampKdaProps = ChampKdaPropsMapper(champInfo);
  const WinProps = WinPropsMapper(champInfo);
  const WinRateProps = WinRatePropsMapper(winRate);
  const ChampionIconProps = ChampionIconPropsMapper(champInfo[0]);

  return (
    <div className='flex items-center gap-3 my-2'>
      <ChampionIcon {...ChampionIconProps} />
      <div className='w-[80px]'>
        <Typography {...ChampKdaProps} />
      </div>
      <div className='w-[50px]'>
        <Typography {...WinProps} />
      </div>
      <div className='w-[50px]'>
        <Typography {...WinRateProps} />
      </div>
    </div>
  );
};

export default ChampStatRow;
