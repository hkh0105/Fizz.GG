import Image from 'next/image';
import { FC } from 'react';

import { IMAGES } from 'constant';
import { ProfileIconProps } from 'types';

const ProfileIcon: FC<ProfileIconProps> = ({
  profileIconId,
  summonerLevel,
  width,
  height,
}) => {
  const source = IMAGES.ICON.replace('{profileIconId}', String(profileIconId));

  const ImageProps = {
    className: 'rounded-xl',
    src: source,
    alt: '소환사 아이콘 이미지',
    width,
    height,
  };

  return (
    <div className='flex-col w-[140px] mx-3 my-5 font-medium flex items-center'>
      <Image {...ImageProps} />
      <p className='w-[50px] text-white bg-black border text-center rounded-xl'>
        {summonerLevel ?? 0}
      </p>
    </div>
  );
};

export default ProfileIcon;
