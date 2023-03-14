import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { ProfileIconProps } from 'types';
import { CustomImagePropsMapper } from 'utils';

const ProfileIcon: FC<ProfileIconProps> = ({
  profileIconId,
  summonerLevel,
  width,
  height,
}) => {
  const source = IMAGES.ICON.replace('{profileIconId}', String(profileIconId));

  const CustomImageProps = CustomImagePropsMapper(
    source,
    '소환사 아이콘 이미지',
    width,
    'rounded-xl'
  );

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
