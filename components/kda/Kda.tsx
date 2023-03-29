import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import { KdaProps } from 'types';
import { TypographyPropsMapper } from 'utils';
import {
  AssistsPropsMapper,
  DeathsPropsMapper,
  KdaPropsMapper,
  KillsPropsMapper,
} from './Kda.props';

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

  const KillsProps = KillsPropsMapper(kills, size);
  const DeathsProps = DeathsPropsMapper(deaths, size);
  const AssistsProps = AssistsPropsMapper(assists, size);
  const KdaProps = KdaPropsMapper(kda, kdaSize);

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
