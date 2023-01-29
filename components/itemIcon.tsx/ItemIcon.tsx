import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';

import { IMAGES } from 'constant';
import { ItemIconProps } from 'types';

const ItemIcon: FC<ItemIconProps> = ({ width, summonerItems, marginClass }) => {
  const wrapperClassName = 'flex' + ' ' + marginClass;

  return (
    <div className={wrapperClassName}>
      {summonerItems?.map((item) => {
        const itemSource = IMAGES.ITEM.replace('{item}', String(item));
        const imageProps = {
          src: itemSource,
          alt: '소환사 아이템 이미지',
          width: width,
          height: width,
        };

        return <Image {...imageProps} key={uuidv4()} />;
      })}
    </div>
  );
};

export default ItemIcon;
