import { FC } from 'react';

import UserStatRow from 'components/matchSection/UserStatRow';
import Box from 'userInterface/box/Box';
import DetailSectionHeader from './DetailSectionheader';
import {
  BoxProps,
  DetailHeaderColorMapper,
  DetailSectionHeaderProps,
  DetailSectionProps,
  MatchInfoByUser,
  UserStatRowProps,
} from 'types';

const DetailSection: FC<DetailSectionProps> = ({
  summonerTeam,
  enemyTeam,
  maxDamage,
  maxTakenDamage,
}) => {
  const SummonerTeamDetailBoxProps: BoxProps = {
    size: 'custom',
    height: 'h-[350px]',
    width: 'w-full',
    color: summonerTeam[0]?.win ? 'blue' : 'red',
  };

  const EnemyTeamDetailBoxProps: BoxProps = {
    size: 'custom',
    height: 'h-[350px]',
    width: 'w-full',
    color: enemyTeam[0]?.win ? 'blue' : 'red',
  };

  const SummonerTeamHeader: DetailSectionHeaderProps = {
    color: SummonerTeamDetailBoxProps.color as keyof DetailHeaderColorMapper,
  };

  const EnemyTeamHeader: DetailSectionHeaderProps = {
    color: EnemyTeamDetailBoxProps.color as keyof DetailHeaderColorMapper,
  };

  return (
    <>
      <Box {...SummonerTeamDetailBoxProps}>
        <DetailSectionHeader {...SummonerTeamHeader} />
        {summonerTeam.map((user: MatchInfoByUser) => {
          const UserStatRowProps: UserStatRowProps = {
            summoner: user,
            maxDamage,
            maxTakenDamage,
          };

          return <UserStatRow {...UserStatRowProps} key={user.puuid} />;
        })}
      </Box>
      <Box {...EnemyTeamDetailBoxProps}>
        <DetailSectionHeader {...EnemyTeamHeader} />
        {enemyTeam.map((user: MatchInfoByUser) => {
          const UserStatRowProps: UserStatRowProps = {
            summoner: user,
            maxDamage,
            maxTakenDamage,
          };

          return <UserStatRow {...UserStatRowProps} key={user.puuid} />;
        })}
      </Box>
    </>
  );
};

export default DetailSection;
