import moment from 'moment';
import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import ChampionIcon from 'components/championIcon/ChampionIcon';
import { useGetChampJson } from 'hooks/queries';
import { ChampionIconProps, MasteryRowProps, TypographyProps } from 'types';

const MasteryRow: FC<MasteryRowProps> = ({ masteryInfo }) => {
  const { champData } = useGetChampJson();
  const { championLevel, championPoints, lastPlayTime, championId } =
    masteryInfo;

  // LastPlayTime
  const convertedLastPlayTime =
    String(moment(lastPlayTime).diff(moment(), 'days')).replace('-', '') +
    '일전';

  //Champ Name
  let champName = '';
  const champDetail = Object.entries(champData).find(
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
