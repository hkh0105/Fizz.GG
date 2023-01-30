import { FC } from 'react';

import ProfileIcon from 'components/profileIcon/ProfileIcon';
import RuneIcon from 'components/runeIcon/RuneIcon';
import SpellIcon from 'components/spellIcon/SpellIcon';
import Typography from 'userInterface/typography/Typography';
import {
  InGameUserRowProps,
  ProfileIconProps,
  RuneIconProps,
  SpellIconProps,
  TypographyProps,
} from 'types';

const InGameUserRow: FC<InGameUserRowProps> = ({
  nickname,
  rune,
  spell,
  profileIconId,
}) => {
  const NicknameTypographyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: nickname,
  };

  const SpellIconProps: SpellIconProps = {
    width: 25,
    spell: spell,
    marginClass: 'pt-1',
  };

  const RuneIconProps: RuneIconProps = {
    width: 25,
    marginClass: 'pt-1',
    rune,
  };

  const ProfileIconProps: ProfileIconProps = {
    profileIconId: profileIconId,
    width: 25,
    height: 25,
  };

  return (
    <div className='flex w-[300px] h-[60px] mx-5 mt-1 items-center'>
      <div className='w-[70px] translate-x-[-40px]'>
        <ProfileIcon {...ProfileIconProps} />
      </div>
      <div className='w-[30px]'>
        <SpellIcon {...SpellIconProps} />
      </div>
      <div className='w-[40px]'>
        <RuneIcon {...RuneIconProps} />
      </div>
      <div className='ml-5 w-[100]px'>
        <Typography {...NicknameTypographyProps} />
      </div>
    </div>
  );
};

export default InGameUserRow;
