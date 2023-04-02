import classNames from 'classnames';
import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { ChampionIconProps } from './ChampionIcon.types';
import { CustomImagePropsMapper } from './ChampionIcon.props';

const ChampionIcon: FC<ChampionIconProps> = ({
  width,
  championName,
  championLevel,
  pt,
  pl,
  pr,
  pb,
  ml,
  mb,
  mr,
  mt,
}) => {
  const championSource = IMAGES.CHAMPION.replace('{champion}', championName);
  const CustomImageProps = CustomImagePropsMapper(championSource, width);

  const mtMapper = mt ? `mt-${mt}` : '';
  const mbMapper = mb ? `mb-${mb}` : '';
  const mlMapper = ml ? `ml-${ml}` : '';
  const mrMapper = mr ? `mt-${mr}` : '';
  const ptMapper = pt ? `mt-${pt}` : '';
  const pbMapper = pb ? `mb-${pb}` : '';
  const plMapper = pl ? `ml-${pl}` : '';
  const prMapper = pr ? `mt-${pr}` : '';
  const wrapperClassName = classNames(
    'flex-col text-white text-start',
    mtMapper,
    mbMapper,
    mlMapper,
    mrMapper,
    ptMapper,
    pbMapper,
    plMapper,
    prMapper,
    `w-[${width}px]`
  );


  return (
    <div className={wrapperClassName}>
      <CustomImage {...CustomImageProps} />
      <span className='absolute -translate-y-3.75 bg-black rounded-full text-sm'>
        {championLevel}
      </span>
    </div>
  );
};

export default ChampionIcon;
