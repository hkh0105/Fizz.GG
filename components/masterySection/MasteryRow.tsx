import { FC } from 'react';

import Typography from 'userInterface/typography/Typography';
import ChampionIcon from 'components/championIcon/ChampionIcon';
import { useGetChampJson } from 'hooks/queries';
import { ChampionIconProps, MasteryRowProps, TypographyProps } from 'types';
import { convertLastPlayTime, getChampName } from 'utils';

const MasteryRow: FC<MasteryRowProps> = ({ masteryInfo }) => {
  const { champData } = useGetChampJson();
  const { championLevel, championPoints, lastPlayTime, championId } =
    masteryInfo;

  // LastPlayTime
  const convertedLastPlayTime = convertLastPlayTime(lastPlayTime);

  //Champ Name
  const champName = getChampName(champData, championId);

  const ChampNameProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: champName,
  };

  const ChampLevelProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: String(championLevel),
  };

  const ChampPointProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: String(championPoints),
  };

  const PlayTimeProps: TypographyProps = {
    type: 'default',
    size: 'small',
    color: 'gray',
    text: convertedLastPlayTime,
  };

  const ChampionIconProps: ChampionIconProps = {
    width: 30,
    championName: champName,
  };

  return (
    <div className=' w-[800px] h-[60px] pt-3 flex shrink-0 grow-0 justify-center '>
      <div className='basis-36'>
        <Typography {...ChampNameProps} />
      </div>
      <div className='basis-36'>
        <ChampionIcon {...ChampionIconProps} />
      </div>
      <div className='basis-36'>
        <Typography {...ChampLevelProps} />
      </div>
      <div className='basis-36'>
        <Typography {...ChampPointProps} />
      </div>
      <div className='basis-36'>
        <Typography {...PlayTimeProps} />
      </div>
    </div>
  );
};

export default MasteryRow;
