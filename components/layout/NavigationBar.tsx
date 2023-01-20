import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IMAGES } from 'constant';

const NavigationBar: FC = () => {
  return (
    <div className='flex items-center h-24 mx-3'>
      <Link href='/' className='flex items-center'>
        <Image
          src={IMAGES.logo}
          alt='Logo image'
          width='200'
          height='200'
          className='mx-5 rounded-sm'
        />
      </Link>
      <Link href='/' className='mx-3 hover:underline'>
        <p>Home</p>
      </Link>
      <Link href='/' className='mx-3 hover:underline'>
        <p>Summoner</p>
      </Link>
      <Link href='/' className='mx-3 hover:underline'>
        <p>Contact</p>
      </Link>
    </div>
  );
};
export default NavigationBar;
