import { FC } from 'react';

import ChampionIcon from 'components/championIcon/ChampionIcon';
import Typography from 'userInterface/typography/Typography';
import { TeamChampionProps, TypographyProps } from 'types';

const TeamChampion: FC<TeamChampionProps> = ({
  team,
  imageSize,
  typoSize,
  width,
}) => {
  const wrapperClassName = `flex w-[${width}px] gap-1`;

  return (
    <div className='flex-col gap-y-1'>
      {team.map((user) => {
        const userName =
          user.summonerName.length > 6
            ? user.summonerName.slice(0, 5) + '...'
            : user.summonerName;
        const TypographyProps: TypographyProps = {
          type: 'default',
          size: typoSize,
          color: 'gray',
          string: userName,
        };

        return (
          <div className={wrapperClassName} key={user.puuid}>
            <ChampionIcon width={imageSize} championName={user.championName} />
            <Typography {...TypographyProps} />
          </div>
        );
      })}
    </div>
  );
};

export default TeamChampion;
