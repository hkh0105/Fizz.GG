import Image from 'next/image';
import { FC } from 'react';

import { IMAGES } from 'constant';
import { SpellIconProps } from 'types';

const SpellIcon: FC<SpellIconProps> = ({ width, spell, marginClass }) => {
  const wrapperClassName = 'flex-col gap-y-1' + ' ' + marginClass;

  return (
    <div className={wrapperClassName}>
      {spell?.map((spellName) => {
        const spellSource = IMAGES.SPELL.replace('{spell}', spellName[0]);
        const imageProps = {
          className: 'rounded-xl',
          src: spellSource,
          alt: '소환사 스펠 이미지',
          width: width,
          height: width,
        };

        return <Image {...imageProps} key={spellName[0]} />;
      })}
    </div>
  );
};

export default SpellIcon;
