import { FC } from 'react';

import ProfileIcon from 'components/profileIcon/ProfileIcon';
import RuneIcon from 'components/runeIcon/RuneIcon';
import SpellIcon from 'components/spellIcon/SpellIcon';
import Typography from 'userInterface/typography/Typography';
import { InGameUserRowProps } from 'types';
import {
  NicknamePropsMapper,
  ProfileIconPropsMapper,
  RuneIconPropsMapper,
  SpellIconPropsMapper,
} from './InGameUserRow.props';

const InGameUserRow: FC<InGameUserRowProps> = ({
  nickname,
  runes,
  spells,
  profileIconId,
}) => {
  const NicknameProps = NicknamePropsMapper(nickname);
  const SpellIconProps = SpellIconPropsMapper(spells);
  const RuneIconProps = RuneIconPropsMapper(runes);
  const ProfileIconProps = ProfileIconPropsMapper(profileIconId);

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
        <Typography {...NicknameProps} />
      </div>
    </div>
  );
};

export default InGameUserRow;
