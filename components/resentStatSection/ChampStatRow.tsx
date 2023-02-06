import { FC } from 'react';

import ChampionIcon from 'components/championIcon/ChampionIcon';
import Typography from 'userInterface/typography/Typography';
import { ChampStatRowProps, TypographyProps } from 'types';

const ChampStatRow: FC<ChampStatRowProps> = ({ champInfo }) => {
  const winRate = ((champInfo[1].win * 100) / champInfo[1].total).toFixed(0);

  const ChampKdaProps: TypographyProps = {
    type: 'default',
    color: 'gray',
    size: 'small',
    text: String(champInfo[1].kda.toFixed(2)) + ':1 평점',
  };

  const WinProps: TypographyProps = {
    type: 'default',
    color: 'gray',
    size: 'small',
    text: String(champInfo[1].total) + '전' + String(champInfo[1].win) + '승',
  };

  const WinRateProps: TypographyProps = {
    type: 'default',
    color: 'gray',
    size: 'small',
    text: String(winRate) + '%',
  };

  return (
    <div className='flex items-center gap-3 my-2'>
      <ChampionIcon width={30} championName={champInfo[0]} marginClass='mt-2' />
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
