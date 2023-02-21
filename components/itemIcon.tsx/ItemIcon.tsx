import Image, { ImageProps } from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';

import { IMAGES } from 'constant';
import { CustomImageProps, ItemIconProps } from 'types';
import CustomImage from 'userInterface/customImage/CustomImage';

const ItemIcon: FC<ItemIconProps> = ({ width, summonerItems, marginClass }) => {
  const wrapper = 'flex' + ' ' + marginClass;

  return (
    <div className={wrapper}>
      {summonerItems?.map((item) => {
        const itemSource = IMAGES.ITEM.replace('{item}', String(item));
        
        const CustomImageProps: CustomImageProps = {
          source: itemSource,
          alt: '소환사 아이템 이미지',
          size: width,
        };

        return <CustomImage {...CustomImageProps} key={uuidv4()} />;
      })}
    </div>
  );
};

export default ItemIcon;
