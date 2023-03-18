import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { ChampionIconProps } from 'types';
import { CustomImagePropsMapper } from 'utils';

const ChampionIcon: FC<ChampionIconProps> = ({
  width,
  championName,
  championLevel,
  marginClass,
}) => {
  const championSource = IMAGES.CHAMPION.replace('{champion}', championName);

  const wrapper =
    `w-[${width}px] flex-col text-white text-start` + ' ' + marginClass;

  const CustomImageProps = CustomImagePropsMapper(
    championSource,
    '소환사 챔피언 이미지',
    width,
    'rounded-full'
  );

  return (
    <div className={wrapper}>
      <CustomImage {...CustomImageProps} />
      <span className='absolute translate-y-[-15px] bg-black rounded-full text-sm'>
        {championLevel}
      </span>
    </div>
  );
};

export default ChampionIcon;
