import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { RuneIconProps, RuneInfo } from 'types';
import { CustomImagePropsMapper } from './RuneIcon.props';

const RuneIcon: FC<RuneIconProps> = ({ width, runes, marginClass }) => {
  const wrapper = 'flex-col gap-y-1' + ' ' + String(marginClass);

  return (
    <div className={wrapper}>
      {runes.map((runeInfo: RuneInfo) => {
        const runeSource = IMAGES.RUNE.replace('{rune}', runeInfo.icon);
        const CustomImageProps = CustomImagePropsMapper(runeSource, width);

        return <CustomImage {...CustomImageProps} key={runeInfo.icon} />;
      })}
    </div>
  );
};

export default RuneIcon;
