import {
  BoxProps,
  InGameTeamColumnProps,
  InGameUser,
  QueueTypeMapper,
  TypographyProps,
} from 'types';

const queueTypeMapper: QueueTypeMapper = {
  0: '커스텀 게임',
  400: '노말',
  430: '노말',
  420: '솔로랭크',
  440: '자유랭크',
  83: 'AI모드',
  450: '칼바람나락',
};

export const GameModePropsMapper = (queueType: number): TypographyProps => ({
  color: 'gray',
  text: queueTypeMapper[queueType],
  type: 'title',
});

export const VersusProps: TypographyProps = {
  text: 'VS',
  type: 'title',
  color: 'gray',
};

export const InGameBoxProps: BoxProps = {
  height: 'bgSection',
  width: 'bgSection',
  color: 'blue',
};

export const TeamColumnPropsMapper = (
  users: InGameUser[]
): InGameTeamColumnProps => ({
  users,
});
