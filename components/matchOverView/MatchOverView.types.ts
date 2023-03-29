import { QueueTypeMapper, ValueOf } from 'types';

export interface MatchOverViewProps {
  matchType: ValueOf<QueueTypeMapper>;
  dayDiff: string;
  gameTime: string;
  isWin: boolean;
}
