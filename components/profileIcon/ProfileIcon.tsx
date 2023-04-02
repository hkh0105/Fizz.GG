import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { ProfileIconProps } from './ProfileIcon.types';
import { CustomImagePropsMapper } from './ProfileIcon.props';

const ProfileIcon: FC<ProfileIconProps> = ({
  profileIconId,
  summonerLevel,
  width,
  height,
}) => {
  const source = IMAGES.ICON.replace('{profileIconId}', String(profileIconId));

  const CustomImageProps = CustomImagePropsMapper(source, width);

  return (
    <div className='flex flex-col items-center mx-3 my-5 font-medium w-35'>
      <CustomImage {...CustomImageProps} />
      {summonerLevel && (
        <p className='w-12.5 text-white bg-black border text-center rounded-xl'>
          {summonerLevel}
        </p>
      )}
    </div>
  );
};

export default ProfileIcon;
