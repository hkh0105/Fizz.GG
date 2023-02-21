import { FC } from 'react';

import { IMAGES } from 'constant';
import { CustomImageProps, ProfileIconProps } from 'types';
import CustomImage from 'userInterface/customImage/CustomImage';

const ProfileIcon: FC<ProfileIconProps> = ({
  profileIconId,
  summonerLevel,
  width,
  height,
}) => {
  const source = IMAGES.ICON.replace('{profileIconId}', String(profileIconId));

  const CustomImageProps: CustomImageProps = {
    className: 'rounded-xl',
    source: source,
    alt: '소환사 아이콘 이미지',
    size: width,
  };

  return (
    <div className='flex-col w-[140px] mx-3 my-5 font-medium flex items-center'>
      <CustomImage {...CustomImageProps} />
      {summonerLevel && (
        <p className='w-[50px] text-white bg-black border text-center rounded-xl'>
          {summonerLevel}
        </p>
      )}
    </div>
  );
};

export default ProfileIcon;
