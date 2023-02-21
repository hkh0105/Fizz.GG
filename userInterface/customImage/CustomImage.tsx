import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';

import { IMAGES } from 'constant';
import { CustomImageProps } from 'types';

const CustomImage: FC<CustomImageProps> = ({
  className,
  source,
  alt,
  size,
}) => {
  const [image, setImage] = useState(source);

  const ImageProps: ImageProps = {
    className: className,
    src: image,
    alt: alt,
    width: size,
    height: size,
    placeholder: 'empty',
    onError: () => {
      setImage(IMAGES.DEFAULT);
    },
  };

  return <Image {...ImageProps} />;
};

export default CustomImage;
