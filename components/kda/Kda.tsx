import classNames from 'classnames';
import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import { KdaProps } from './Kda.types';
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
  pt,
  pl,
  pr,
  pb,
  ml,
  mb,
  mr,
  mt,
  size = 'medium',
  kdaSize = 'small',
}) => {
  const KillsProps = KillsPropsMapper(kills, size);
  const DeathsProps = DeathsPropsMapper(deaths, size);
  const AssistsProps = AssistsPropsMapper(assists, size);
  const KdaProps = KdaPropsMapper(kda, kdaSize);

  const mtMapper = mt ? `mt-${mt}` : '';
  const mbMapper = mb ? `mb-${mb}` : '';
  const mlMapper = ml ? `ml-${ml}` : '';
  const mrMapper = mr ? `mt-${mr}` : '';
  const ptMapper = pt ? `mt-${pt}` : '';
  const pbMapper = pb ? `mb-${pb}` : '';
  const plMapper = pl ? `ml-${pl}` : '';
  const prMapper = pr ? `mt-${pr}` : '';
  const wrapperClassName = classNames(
    'flex-col',
    mtMapper,
    mbMapper,
    mlMapper,
    mrMapper,
    ptMapper,
    pbMapper,
    plMapper,
    prMapper
  );

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
