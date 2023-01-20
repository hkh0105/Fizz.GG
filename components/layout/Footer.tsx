import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='fixed bottom-0 w-full py-5 text-center bg-white border-t border-gray-200'>
      <p className='text-gray-500'>
        소환사 전적검색 사이트 by
        <a
          className='font-medium text-gray-800 underline transition-colors'
          href='https://github.com/hkh0105'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' Han KyoungHun'}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
