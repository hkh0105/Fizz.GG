import { FC } from 'react';

import Divider from 'userInterface/divider/Divider';
import Typography from 'userInterface/typography/Typography';
import { MatchOverViewProps } from './MatchOverView.types';
import {
  DayDiffPropsMapper,
  GameTimePropsMapper,
  MatchResultPropsMapper,
  MatchTypePropsMapper,
} from './MatchOverView.props';

const MatchOverView: FC<MatchOverViewProps> = ({
  matchType,
  dayDiff,
  isWin,
  gameTime,
}) => {
  const MatchTypeProps = MatchTypePropsMapper(isWin, matchType);
  const DayDiffProps = DayDiffPropsMapper(dayDiff);
  const MatchResultProps = MatchResultPropsMapper(isWin);
  const GameTimeProps = GameTimePropsMapper(gameTime);

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
