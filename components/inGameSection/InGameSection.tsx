import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { FC } from 'react';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import InGameTeamColumn from './InGameTeamColumn';
import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { useGetSummoner } from 'hooks/queries/useGetSummoner';
import {
  BoxProps,
  InGameInfo,
  IngameSectionProps,
  InGameTeamColumnProps,
  InGameUser,
  QueueTypeMapper,
  Response,
  TypographyProps,
} from 'types';

const IngameSection: FC<IngameSectionProps> = ({ nickname }) => {
  const { id } = useGetSummoner(nickname);

  const { data: ingameResponse }: UseQueryResult<Response<InGameInfo>> =
    useQuery([QUERY_KEYS.getInGameByPuuid, { nickname }], () =>
      CLIENT_API.getInGameByPuuid(id)
    );

  if (ingameResponse?.message === '404') {
    return <div>진행중인 게임이 없습니다</div>;
  }

  const inGameInfo = ingameResponse?.items as InGameInfo;
  const { gameQueueConfigId: queueType, participants } = inGameInfo;

  //User
  const searchedUser: InGameUser = participants.find(
    (user: InGameUser) =>
      user.summonerName.toLowerCase().trim() === nickname.toLowerCase().trim()
  ) as InGameUser;

  //팀찾기
  const summonerTeam: InGameUser[] = participants.filter(
    (user: InGameUser) => user.teamId === searchedUser.teamId
  );
  const enemyTeam: InGameUser[] = participants.filter(
    (user: InGameUser) => user.teamId !== searchedUser.teamId
  );

  const queueTypeMapper: QueueTypeMapper = {
    0: '커스텀 게임',
    400: '노말',
    430: '노말',
    420: '솔로랭크',
    440: '자유랭크',
    83: 'AI모드',
    450: '칼바람나락',
  };

  const GameModeTypoProps: TypographyProps = {
    color: 'gray',
    string: queueTypeMapper[queueType],
    type: 'title',
  };

  const BoxProps: BoxProps = {
    size: 'custom',
    height: 'h-[350px]',
    width: 'w-[800px]',
    color: 'blue',
  };

  const SummonerColumnProps: InGameTeamColumnProps = {
    team: summonerTeam,
  };

  const EnemyColumnProps: InGameTeamColumnProps = {
    team: enemyTeam,
  };

  const VersusTypoProps: TypographyProps = {
    string: 'VS',
    type: 'title',
    color: 'gray',
  };

  return (
    <section className='flex flex-col items-center my-3 gap-y-3'>
      <Typography {...GameModeTypoProps} />
      <Box {...BoxProps}>
        <div className='flex items-center justify-evenly'>
          <InGameTeamColumn {...SummonerColumnProps} />
          <Typography {...VersusTypoProps} />
          <InGameTeamColumn {...EnemyColumnProps} />
        </div>
      </Box>
    </section>
  );
};
export default IngameSection;
