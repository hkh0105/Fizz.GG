import { FC } from 'react';
import { useRouter } from 'next/router';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import ProfileIcon from 'components/profileIcon/ProfileIcon';
import ButtonGroup from 'components/buttonGroup/ButtonGroup';
import { INITIAL_DATA, QUERY_KEYS } from 'constant';
import { CLIENT_API } from 'api/api';
import {
  ButtonGroupProps,
  ProfileIconProps,
  Response,
  SummonerInfo,
  ProfileProps,
  TypographyProps,
} from 'types';

const Profile: FC<ProfileProps> = ({ nickname }) => {
  const router = useRouter();

  const {
    data: summonerResponse,
    refetch: refetchUserInfo,
  }: UseQueryResult<Response<SummonerInfo>> = useQuery(
    [QUERY_KEYS.getSummonerByNickname, { nickname }],
    () => CLIENT_API.getSummonerByNickname(nickname)
  );

  const { name, summonerLevel, profileIconId } =
    summonerResponse?.items ?? INITIAL_DATA.summonerInfo;

  const onClickIngameButton = async () => {
    await router.push({
      pathname: `/search/[nickname]/ingame`,
      query: { nickname },
    });
  };

  const onClickUpdateButton = async () => {
    await refetchUserInfo();
  };

  const onClickSummonerButton = async () => {
    await router.push({
      pathname: `/search/[nickname]/summoner`,
      query: { nickname },
    });
  };

  const ProfileIconProps: ProfileIconProps = {
    profileIconId: profileIconId,
    summonerLevel: summonerLevel,
    width: 100,
    height: 100,
  };

  const ButtonGroupProps: ButtonGroupProps = {
    containerClassName: 'flex gap-3',
    ButtonPropsArray: [
      { onClick: onClickIngameButton, label: '인게임 정보' },
      { onClick: onClickSummonerButton, label: '소환사 정보' },
      {
        borderColor: 'transparent',
        onClick: onClickUpdateButton,
        label: '업데이트',
      },
    ],
  };

  const TypographyProps: TypographyProps = {
    string: name,
    type: 'title',
  };

  return (
    <Box size='full'>
      <div className='flex'>
        <ProfileIcon {...ProfileIconProps} />
        <div className='flex flex-col items-start justify-center gap-y-10'>
          <Typography {...TypographyProps} />
          <ButtonGroup {...ButtonGroupProps} />
        </div>
      </div>
    </Box>
  );
};

export default Profile;
