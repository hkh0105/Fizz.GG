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

  const KillsProps: TypographyProps = {
    type: 'semibold',
    color: 'gray',
    text: String(kills) + '  /',
    size,
  };

  const DeathsProps: TypographyProps = {
    type: 'semibold',
    color: 'red',
    text: String(deaths),
    size,
  };

  const AssistsProps: TypographyProps = {
    type: 'semibold',
    color: 'gray',
    text: '/ ' + String(assists),
    size,
  };

  const KdaProps: TypographyProps = {
    type: 'default',
    color: 'gray',
    text: String(kda?.toFixed(2)) + ' : 1',
    size: kdaSize,
  };

  return (
    <div className={wrapperClassName}>
      <div className='flex gap-x-1'>
        <Typography {...KillsProps} />
        <Typography {...DeathsProps} />
        <Typography {...AssistsProps} />
      </div>
      {kda && <Typography {...KdaProps} />}
    </div>
  );
};

export default Kda;
