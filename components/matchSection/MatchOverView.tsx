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
  const MatchTypeTypographyProps: TypographyProps = {
    type: 'semibold',
    size: 'small',
    color: isWin ? 'blue' : 'red',
    string: matchType,
    isTitle: false,
  };
  const DayDiffTypographyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: dayDiff,
    isTitle: false,
  };
  const MatchResultTypographyProps: TypographyProps = {
    type: 'semibold',
    size: 'small',
    color: 'gray',
    string: isWin ? '승리' : '패배',
    isTitle: false,
  };
  const GameTimeTypographyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: gameTime,
    isTitle: false,
  };

  return (
    <div className='flex flex-col py-5 ml-10 gap-y-[1px] w-[80px]'>
      <Typography {...MatchTypeTypographyProps} />
      <Typography {...DayDiffTypographyProps} />
      <Divider />
      <Typography {...MatchResultTypographyProps} />
      <Typography {...GameTimeTypographyProps} />
    </div>
  );
};

export default MatchOverView;
