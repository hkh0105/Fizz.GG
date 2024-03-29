import { FC } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';

import Box from 'userInterface/box/Box';
import Typography from 'userInterface/typography/Typography';
import ProfileIcon from 'components/profileIcon/ProfileIcon';
import ButtonGroup from 'components/buttonGroup/ButtonGroup';
import { useGetSummoner } from 'hooks/queries';
import { ProfileProps } from './Profile.types';
import {
  ButtonGroupPropsMapper,
  InGameButtonPropsMapper,
  MasteryButtonPropsMapper,
  MatchesButtonPropsMapper,
  ProfileBoxProps,
  ProfileIconPropsMapper,
  SummonerNamePropsMapper,
  UpdateButtonPropsMapper,
} from './Profile.props';

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

  const ProfileIconProps = ProfileIconPropsMapper(profileIconId, summonerLevel);
  const InGameButtonProps = InGameButtonPropsMapper(onClickInGameButton);
  const MatchesButtonProps = MatchesButtonPropsMapper(onClickMatchesButton);
  const MasteryButtonProps = MasteryButtonPropsMapper(onClickSummonerButton);
  const UpdateButtonProps = UpdateButtonPropsMapper(onClickUpdateButton);
  const SummonerNameProps = SummonerNamePropsMapper(name);
  const ButtonGroupProps = ButtonGroupPropsMapper([
    isInGame ? MatchesButtonProps : InGameButtonProps,
    isSummoner ? MatchesButtonProps : MasteryButtonProps,
    UpdateButtonProps,
  ]);

  return (
    <Box {...ProfileBoxProps}>
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
