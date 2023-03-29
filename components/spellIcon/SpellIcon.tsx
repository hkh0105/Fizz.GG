import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { SpellIconProps } from 'types';
import { CustomImagePropsMapper } from './SpellIcon.props';

const SpellIcon: FC<SpellIconProps> = ({ width, spells, marginClass }) => {
  const wrapper = 'flex-col gap-y-1' + ' ' + marginClass;

  return (
    <div className={wrapper}>
      {spells?.map((spellName) => {
        const spellSource = IMAGES.SPELL.replace('{spell}', spellName[0]);
        const CustomImageProps = CustomImagePropsMapper(spellSource, width);

        return <CustomImage {...CustomImageProps} key={spellName[0]} />;
      })}
    </div>
  );
};

export default SpellIcon;
