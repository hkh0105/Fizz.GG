import classNames from 'classnames';
import { FC } from 'react';

import CustomImage from 'userInterface/customImage/CustomImage';
import { IMAGES } from 'constant';
import { RuneIconProps, RuneInfo } from './RuneIcon.types';
import { CustomImagePropsMapper } from './RuneIcon.props';

const RuneIcon: FC<RuneIconProps> = ({
  width,
  runes,
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
      {runes.map((runeInfo: RuneInfo) => {
        const runeSource = IMAGES.RUNE.replace('{rune}', runeInfo.icon);
        const CustomImageProps = CustomImagePropsMapper(runeSource, width);

        return <CustomImage {...CustomImageProps} key={runeInfo.icon} />;
      })}
    </div>
  );
};

export default RuneIcon;
