import { FC } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import ProfileIcon from 'components/profileIcon/ProfileIcon';
import ButtonGroup from 'components/buttonGroup/ButtonGroup';
import { useGetSummoner } from 'hooks/queries';
import {
  ButtonGroupProps,
  ButtonProps,
  ProfileIconProps,
  ProfileProps,
  TypographyProps,
} from 'types';
const Profile: FC<ProfileProps> = ({ nickname }) => {
  const router = useRouter();
  const isInGame = router.pathname === '/search/[nickname]/ingame';
  const isSummoner = router.pathname === '/search/[nickname]/summoner';
  const queryClient = useQueryClient();
  const { name, summonerLevel, profileIconId } = useGetSummoner(nickname);

  const onClickInGameButton = async () => {
    await router.push({
      pathname: `/search/[nickname]/ingame`,
      query: { nickname },
    });
  };

  const onClickUpdateButton = async () => {
    await queryClient.invalidateQueries();
    window.location.reload();
  };

  const onClickSummonerButton = async () => {
    await router.push({
      pathname: `/search/[nickname]/summoner`,
      query: { nickname },
    });
  };

  const onClickMatchesButton = async () => {
    await router.push({
      pathname: `/search/[nickname]`,
      query: { nickname },
    });
  };

  const ProfileIconProps: ProfileIconProps = {
    profileIconId: profileIconId,
    summonerLevel: summonerLevel,
    width: 100,
    height: 100,
  };

  const InGameButtonProps: ButtonProps = {
    onClick: onClickInGameButton,
    label: '인게임 정보',
  };

  const MatchesButtonProps: ButtonProps = {
    onClick: onClickMatchesButton,
    label: '매치 정보',
  };

  const MasteryButtonProps: ButtonProps = {
    onClick: onClickSummonerButton,
    label: '소환사 정보',
  };

  const UpdateButtonProps: ButtonProps = {
    color: 'transparent',
    onClick: onClickUpdateButton,
    label: '업데이트',
  };

  const ButtonGroupProps: ButtonGroupProps = {
    containerClassName: 'flex gap-3',
    buttons: [
      isInGame ? MatchesButtonProps : InGameButtonProps,
      isSummoner ? MatchesButtonProps : MasteryButtonProps,
      UpdateButtonProps,
    ],
  };

  const SummonerNameProps: TypographyProps = {
    type: 'title',
    text: name,
  };

  return (
    <Box size='full'>
      <div className='flex'>
        <ProfileIcon {...ProfileIconProps} />
        <div className='flex flex-col items-start justify-center gap-y-10'>
          <Typography {...SummonerNameProps} />
          <ButtonGroup {...ButtonGroupProps} />
        </div>
      </div>
    </Box>
  );
};

export default Profile;
