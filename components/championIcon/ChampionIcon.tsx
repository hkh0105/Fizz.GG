import Image from 'next/image';
import { FC } from 'react';

import { IMAGES } from 'constant';
import { ChampionIconProps } from 'types';

const ChampionIcon: FC<ChampionIconProps> = ({
  width,
  championName,
  championLevel,
  marginClass,
}) => {
  const championSource = IMAGES.CHAMPION.replace('{champion}', championName);
  const wrapperClassName =
    `w-[${width}px] flex-col text-white text-start` + ' ' + marginClass;
  const imageProps = {
    className: 'rounded-full',
    src: championSource,
    alt: '소환사 챔피언 이미지',
    width: width,
    height: width,
  };

  return (
    <div className={wrapperClassName}>
      <Image {...imageProps} />
      <span className='absolute translate-y-[-15px] bg-black rounded-full text-sm'>
        {championLevel}
      </span>
    </div>
  );
};

export default ChampionIcon;
