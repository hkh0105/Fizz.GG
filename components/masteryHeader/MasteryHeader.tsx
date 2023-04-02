import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import {
  ChampionKeyProps,
  IconKeyProps,
  LevelKeyProps,
  MasteryKeyProps,
  PlayTimeKeyProps,
} from './MasteryHeader.props';

const MasteryHeader: FC = () => {
  return (
    <div className='center w-bg-section h-15'>
      <div className='basis-36'>
        <Typography {...ChampionKeyProps} />
      </div>
      <div className='basis-36'>
        <Typography {...IconKeyProps} />
      </div>
      <div className='basis-36'>
        <Typography {...LevelKeyProps} />
      </div>
      <div className='basis-36'>
        <Typography {...MasteryKeyProps} />
      </div>
      <div className='basis-36'>
        <Typography {...PlayTimeKeyProps} />
      </div>
    </div>
  );
};

export default MasteryHeader;
