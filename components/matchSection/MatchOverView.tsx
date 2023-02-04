import { FC } from 'react';

import Divider from 'userInterface/divider/Divider';
import Typography from 'userInterface/typography/Typography';
import { MatchOverViewProps, TypographyProps } from 'types';

const MatchOverView: FC<MatchOverViewProps> = ({
  matchType,
  dayDiff,
  isWin,
  gameTime,
}) => {
  const MatchTypeProps: TypographyProps = {
    type: 'semibold',
    size: 'small',
    color: isWin ? 'blue' : 'red',
    text: matchType,
    isTitle: false,
  };

  const DayDiffProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: dayDiff,
    isTitle: false,
  };
  const MatchResultProps: TypographyProps = {
    type: 'semibold',
    size: 'small',
    color: 'gray',
    text: isWin ? '승리' : '패배',
    isTitle: false,
  };
  const GameTimeProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: gameTime,
    isTitle: false,
  };

  return (
    <div className='flex flex-col py-5 ml-5 gap-y-[1px] w-[80px]'>
      <Typography {...MatchTypeProps} />
      <Typography {...DayDiffProps} />
      <Divider />
      <Typography {...MatchResultProps} />
      <Typography {...GameTimeProps} />
    </div>
  );
};

export default MatchOverView;
