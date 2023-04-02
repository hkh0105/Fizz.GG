import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { ItemIconProps } from './ItemIcon.types';
import { CustomImagePropsMapper } from './ItemIcon.props';

const ItemIcon: FC<ItemIconProps> = ({
  width,
  summonerItems,
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
    'flex',
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
      {summonerItems?.map((item) => {
        const itemSource = IMAGES.ITEM.replace('{item}', String(item));
        const CustomImageProps = CustomImagePropsMapper(itemSource, width);

        return <CustomImage {...CustomImageProps} key={uuidv4()} />;
      })}
    </div>
  );
};

export default ItemIcon;
