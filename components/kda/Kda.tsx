import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import { KdaProps } from 'types';
import { TypographyPropsMapper } from 'utils';

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

  const KillsProps = TypographyPropsMapper({
    type: 'semibold',
    color: 'gray',
    text: String(kills) + '  /',
    size,
  });

  const DeathsProps = TypographyPropsMapper({
    type: 'semibold',
    color: 'red',
    text: String(deaths),
    size,
  });

  const AssistsProps = TypographyPropsMapper({
    type: 'semibold',
    color: 'gray',
    text: '/ ' + String(assists),
    size,
  });

  const KdaProps = TypographyPropsMapper({
    type: 'default',
    color: 'gray',
    text: String(kda?.toFixed(2)) + ' : 1',
    size: kdaSize,
  });

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
