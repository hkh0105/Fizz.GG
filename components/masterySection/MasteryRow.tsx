import moment from 'moment';
import { FC } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import Typography from 'userInterface/typography/Typography';
import ChampionIcon from 'components/championIcon/ChampionIcon';
import { QUERY_KEYS } from 'constant';
import { CLIENT_API } from 'api/api';
import {
  ChampDetails,
  ChampionIconProps,
  MasteryRowProps,
  RiotChampInfo,
  TypographyProps,
} from 'types';

const MasteryRow: FC<MasteryRowProps> = ({ masteryInfo }) => {
  const { data: champData }: UseQueryResult<RiotChampInfo> = useQuery(
    [QUERY_KEYS.getChamp],
    CLIENT_API.getChamp
  );
  const { championLevel, championPoints, lastPlayTime, championId } =
    masteryInfo;

  // LastPlayTime
  const convertedLastPlayTime =
    String(moment(lastPlayTime).diff(moment(), 'days')).replace('-', '') +
    '일전';

  //Champ Name
  const riotChampData = champData?.data as ChampDetails;
  let champName = '';
  const champDetail = Object.entries(riotChampData).find(
    (champ) => champ[1]?.key === String(championId)
  );

  if (champDetail) {
    champName = champDetail[0];
  }

  const ChampNameTypographyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: champName,
  };

  const ChampLevelTypographyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: String(championLevel),
  };

  const ChampPointTypographyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: String(championPoints),
  };
  const PlayTimeTypographyProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    string: convertedLastPlayTime,
  };

  const ChampionIconProps: ChampionIconProps = {
    width: 30,
    championName: champName,
  };

  return (
    <div className=' w-[800px] h-[60px] pt-3 flex shrink-0 grow-0 justify-center '>
      <div className='basis-36'>
        <Typography {...ChampNameTypographyProps} />
      </div>
      <div className='basis-36'>
        <ChampionIcon {...ChampionIconProps} />
      </div>
      <div className='basis-36'>
        <Typography {...ChampLevelTypographyProps} />
      </div>
      <div className='basis-36'>
        <Typography {...ChampPointTypographyProps} />
      </div>
      <div className='basis-36'>
        <Typography {...PlayTimeTypographyProps} />
      </div>
    </div>
  );
};

export default MasteryRow;
