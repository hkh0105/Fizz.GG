import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';

const MasteryHeader: FC = () => {
  return (
    <div className=' w-[800px] h-[60px] pt-3 flex shrink-0 grow-0 justify-center'>
      <div className='basis-36'>
        <Typography
          type='default'
          size='small'
          color='gray'
          string='Champion'
        />
      </div>
      <div className='basis-36'>
        <Typography type='default' size='small' color='gray' string='Icon' />
      </div>
      <div className='basis-36'>
        <Typography type='default' size='small' color='gray' string='Level' />
      </div>
      <div className='basis-36'>
        <Typography
          type='default'
          size='small'
          color='gray'
          string='Mastery Point'
        />
      </div>
      <div className='basis-36'>
        <Typography
          type='default'
          size='small'
          color='gray'
          string='PlayTime'
        />
      </div>
    </div>
  );
};

export default MasteryHeader;
