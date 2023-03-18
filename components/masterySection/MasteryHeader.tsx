import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import { TypographyPropsMapper } from 'utils';

const MasteryHeader: FC = () => {
  const ChampionKeyProps = TypographyPropsMapper({
    type: 'default',
    size: 'small',
    color: 'gray',
    text: 'Champion',
  });

  const IconKeyProps = TypographyPropsMapper({
    type: 'default',
    size: 'small',
    color: 'gray',
    text: 'Icon',
  });

  const LevelKeyProps = TypographyPropsMapper({
    type: 'default',
    size: 'small',
    color: 'gray',
    text: 'Level',
  });

  const MasteryKeyProps = TypographyPropsMapper({
    type: 'default',
    size: 'small',
    color: 'gray',
    text: 'Mastery Point',
  });

  const PlayTimeKeyProps = TypographyPropsMapper({
    type: 'default',
    size: 'small',
    color: 'gray',
    text: 'PlayTime',
  });

  return (
    <div className=' w-[800px] h-[60px] pt-3 flex shrink-0 grow-0 justify-center'>
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
