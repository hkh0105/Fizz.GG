import Image from 'next/image';
import { FC } from 'react';

import { IMAGES } from 'constant';
import { RuneIconProps, RuneInfo } from 'types';

const RuneIcon: FC<RuneIconProps> = ({ width, rune, marginClass }) => {
  const wrapperClassName = 'flex-col gap-y-1' + ' ' + marginClass;

  return (
    <div className={wrapperClassName}>
      {rune.map((runeInfo: RuneInfo) => {
        const runeSource = IMAGES.RUNE.replace('{rune}', runeInfo.icon);
        const imageProps = {
          src: runeSource,
          alt: '소환사 룬 이미지',
          width: width,
          height: width,
        };

        return <Image {...imageProps} key={runeInfo.icon} />;
      })}
    </div>
  );
};

export default RuneIcon;
