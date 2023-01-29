import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import { KdaProps, TypographyProps } from 'types';

const Kda: FC<KdaProps> = ({
  kills,
  deaths,
  assists,
  kda,
  marginClass,
  size = 'medium',
  kdaSize = 'small',
}) => {
  const wrapperClassName = 'flex-col' + ' ' + marginClass;

  const KillsTypoProps: TypographyProps = {
    type: 'semibold',
    color: 'gray',
    string: String(kills) + '  /',
    size,
  };

  const DeathsTypoProps: TypographyProps = {
    type: 'semibold',
    color: 'red',
    string: String(deaths),
    size,
  };

  const AssistsTypoProps: TypographyProps = {
    type: 'semibold',
    color: 'gray',
    string: '/ ' + String(assists),
    size,
  };

  const KdaTypoProps: TypographyProps = {
    type: 'default',
    color: 'gray',
    string: String(kda?.toFixed(2)) + ' : 1',
    size: kdaSize,
  };

  return (
    <div className={wrapperClassName}>
      <div className='flex gap-x-1'>
        <Typography {...KillsTypoProps} />
        <Typography {...DeathsTypoProps} />
        <Typography {...AssistsTypoProps} />
      </div>
      {kda && <Typography {...KdaTypoProps} />}
    </div>
  );
};

export default Kda;
