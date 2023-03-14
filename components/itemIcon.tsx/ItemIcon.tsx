import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { ItemIconProps } from 'types';
import { CustomImagePropsMapper } from 'utils';

const ItemIcon: FC<ItemIconProps> = ({ width, summonerItems, marginClass }) => {
  const wrapper = 'flex' + ' ' + marginClass;

  return (
    <div className={wrapper}>
      {summonerItems?.map((item) => {
        const itemSource = IMAGES.ITEM.replace('{item}', String(item));
        const CustomImageProps = CustomImagePropsMapper(
          itemSource,
          '소환사 아이템 이미지',
          width
        );

        return <CustomImage {...CustomImageProps} key={uuidv4()} />;
      })}
    </div>
  );
};

export default ItemIcon;
