import { FC } from 'react';

import ProfileIcon from 'components/profileIcon/ProfileIcon';
import RuneIcon from 'components/runeIcon/RuneIcon';
import SpellIcon from 'components/spellIcon/SpellIcon';
import Typography from 'userInterface/typography/Typography';
import { InGameUserRowProps } from 'types';
import {
  ProfileIconPropsMapper,
  RuneIconPropsMapper,
  SpellIconPropsMapper,
  TypographyPropsMapper,
} from 'utils/propsMapper';

const InGameUserRow: FC<InGameUserRowProps> = ({
  nickname,
  runes,
  spells,
  profileIconId,
}) => {
  const NicknameProps = TypographyPropsMapper({
    type: 'default',
    size: 'small',
    color: 'gray',
    text: nickname,
  });

  const SpellIconProps = SpellIconPropsMapper(spells, 25, 'pt-1');

  const RuneIconProps = RuneIconPropsMapper(runes, 25, 'pt-1');

  const ProfileIconProps = ProfileIconPropsMapper(profileIconId, 25, 25);

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
