import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { CustomImageProps, RuneIconProps, RuneInfo } from 'types';

const RuneIcon: FC<RuneIconProps> = ({ width, runes, marginClass }) => {
  const wrapper = 'flex-col gap-y-1' + ' ' + String(marginClass);

  return (
    <div className={wrapper}>
      {runes.map((runeInfo: RuneInfo) => {
        const runeSource = IMAGES.RUNE.replace('{rune}', runeInfo.icon);
        const CustomImageProps: CustomImageProps = {
          source: runeSource,
          alt: '소환사 룬 이미지',
          size: width,
        };

        return <CustomImage {...CustomImageProps} key={runeInfo.icon} />;
      })}
    </div>
  );
};

export default RuneIcon;
