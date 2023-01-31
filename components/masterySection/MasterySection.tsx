import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { FC } from 'react';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import MasteryRow from './MasteryRow';
import MasteryHeader from './MasteryHeader';
import { CLIENT_API } from 'api/api';
import { QUERY_KEYS } from 'constant';
import { useGetSummoner } from 'hooks/queries/useGetSummoner';
import {
  BoxProps,
  IngameSectionProps,
  MasteryInfo,
  MasteryRowProps,
  Response,
  TypographyProps,
} from 'types';

const MasterySection: FC<IngameSectionProps> = ({ nickname }) => {
  const { id } = useGetSummoner(nickname);

  const { data: masteryResponse }: UseQueryResult<Response<MasteryInfo[]>> =
    useQuery([QUERY_KEYS.getMasteryById, { nickname }], () =>
      CLIENT_API.getMasteryById(id)
    );
  const masteryInfo = masteryResponse?.items as MasteryInfo[];

  const GameModeTypoProps: TypographyProps = {
    color: 'gray',
    string: `${nickname} 의 챔피언 통계`,
    type: 'title',
  };

  const BoxProps: BoxProps = {
    size: 'custom',
    width: 'w-[800px]',
  };

  return (
    <section className='flex flex-col items-center my-32 mt-10 gap-y-10'>
      <Typography {...GameModeTypoProps} />
      <Box {...BoxProps}>
        <MasteryHeader />
        {masteryInfo.map((mastery) => {
          const MasteryRowProps: MasteryRowProps = {
            masteryInfo: mastery,
          };

          return <MasteryRow {...MasteryRowProps} key={mastery.championId} />;
        })}
      </Box>
    </section>
  );
};
export default MasterySection;
