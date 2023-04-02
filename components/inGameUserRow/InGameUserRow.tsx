import { FC } from 'react';

import ProfileIcon from 'components/profileIcon/ProfileIcon';
import RuneIcon from 'components/runeIcon/RuneIcon';
import SpellIcon from 'components/spellIcon/SpellIcon';
import Typography from 'userInterface/typography/Typography';
import { InGameUserRowProps } from './InGameUserRow.types';
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
    <div className='flex items-center mx-5 mt-1 w-sm-section h-15'>
      <div className='-translate-x-10 w-18'>
        <ProfileIcon {...ProfileIconProps} />
      </div>
      <div className='w-8'>
        <SpellIcon {...SpellIconProps} />
      </div>
      <div className='w-10'>
        <RuneIcon {...RuneIconProps} />
      </div>
      <div className='ml-5 w-25'>
        <Typography {...NicknameProps} />
      </div>
    </div>
  );
};

export default InGameUserRow;
