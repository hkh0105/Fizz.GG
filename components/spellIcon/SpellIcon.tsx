import classNames from 'classnames';
import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { SpellIconProps } from './SpellIcon.types';
import { CustomImagePropsMapper } from './SpellIcon.props';

const SpellIcon: FC<SpellIconProps> = ({
  width,
  spells,
  pt,
  pl,
  pr,
  pb,
  ml,
  mr,
  mt,
  mb,
}) => {
  const mtMapper = mt ? `mt-${mt}` : '';
  const mbMapper = mb ? `mb-${mb}` : '';
  const mlMapper = ml ? `ml-${ml}` : '';
  const mrMapper = mr ? `mt-${mr}` : '';
  const ptMapper = pt ? `mt-${pt}` : '';
  const pbMapper = pb ? `mb-${pb}` : '';
  const plMapper = pl ? `ml-${pl}` : '';
  const prMapper = pr ? `mt-${pr}` : '';
  const wrapperClassName = classNames(
    'flex-col gap-y-1',
    mtMapper,
    mbMapper,
    mlMapper,
    mrMapper,
    ptMapper,
    pbMapper,
    plMapper,
    prMapper
  );

  return (
    <div className={wrapperClassName}>
      {spells?.map((spellName) => {
        const spellSource = IMAGES.SPELL.replace('{spell}', spellName[0]);
        const CustomImageProps = CustomImagePropsMapper(spellSource, width);

        return <CustomImage {...CustomImageProps} key={spellName[0]} />;
      })}
    </div>
  );
};

export default SpellIcon;
