import { FC } from 'react';

import UserStatRow from 'components/userStatRow/UserStatRow';
import Box from 'userInterface/box/Box';
import DetailSectionHeader from 'components/detailSectionHeader/DetailSectionHeader';
import { DetailSectionProps, MatchInfoByUser } from './DetailSection.types';
import {
  TeamBoxMapper,
  TeamHeaderMapper,
  UserStatRowPropsMapper,
} from './DetailSection.props';

const DetailSection: FC<DetailSectionProps> = ({
  summonerTeam,
  enemyTeam,
  maxDamage,
  maxTakenDamage,
}) => {
  const summonerTeamColor = summonerTeam[0]?.win ? 'blue' : 'red';
  const enemyTeamColor = enemyTeam[0]?.win ? 'blue' : 'red';

  const SummonerTeamDetailBoxProps = TeamBoxMapper(summonerTeamColor);
  const EnemyTeamDetailBoxProps = TeamBoxMapper(enemyTeamColor);
  const SummonerTeamHeader = TeamHeaderMapper(summonerTeamColor);
  const EnemyTeamHeader = TeamHeaderMapper(enemyTeamColor);

  return (
    <>
      <Box {...SummonerTeamDetailBoxProps}>
        <DetailSectionHeader {...SummonerTeamHeader} />
        {summonerTeam.map((user: MatchInfoByUser) => {
          const UserStatRowProps = UserStatRowPropsMapper(
            user,
            maxDamage,
            maxTakenDamage
          );

          return <UserStatRow {...UserStatRowProps} key={user.puuid} />;
        })}
      </Box>
      <Box {...EnemyTeamDetailBoxProps}>
        <DetailSectionHeader {...EnemyTeamHeader} />
        {enemyTeam.map((user: MatchInfoByUser) => {
          const UserStatRowProps = UserStatRowPropsMapper(
            user,
            maxDamage,
            maxTakenDamage
          );

          return <UserStatRow {...UserStatRowProps} key={user.puuid} />;
        })}
      </Box>
    </>
  );
};

export default DetailSection;
