import { FC } from 'react';

import { TypographyProps } from 'types';

const Typography: FC<TypographyProps> = ({ string, type }) => {
  const typographyMapper = {
    mainTitle:
      'bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-6xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm leading-[5rem] my-20',
    title: 'text-2xl font-medium',
    default: '',
  };

  return <h1 className={typographyMapper[type]}>{string}</h1>;
};

export default Typography;
