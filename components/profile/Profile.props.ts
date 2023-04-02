import { MouseEventHandler } from 'react';
import {
  BoxProps,
  ButtonProps,
  ProfileIconProps,
  TypographyProps,
} from 'types';

export const ProfileIconPropsMapper = (
  profileIconId: number,
  summonerLevel: number
): ProfileIconProps => ({
  profileIconId: profileIconId,
  width: 100,
  height: 100,
  summonerLevel: summonerLevel,
});

export const InGameButtonPropsMapper = (
  onClickInGameButton: MouseEventHandler<HTMLButtonElement>
): ButtonProps => ({
  onClick: onClickInGameButton,
  label: '인게임 정보',
});

export const MatchesButtonPropsMapper = (
  onClickMatchesButton: MouseEventHandler<HTMLButtonElement>
): ButtonProps => ({
  onClick: onClickMatchesButton,
  label: '매치 정보',
});

export const MasteryButtonPropsMapper = (
  onClickSummonerButton: MouseEventHandler<HTMLButtonElement>
): ButtonProps => ({
  onClick: onClickSummonerButton,
  label: '소환사 정보',
});

export const UpdateButtonPropsMapper = (
  onClickUpdateButton: MouseEventHandler<HTMLButtonElement>
): ButtonProps => ({
  color: 'transparent',
  onClick: onClickUpdateButton,
  label: '업데이트',
});

export const ButtonGroupPropsMapper = (buttons: ButtonProps[]) => ({
  containerClassName: 'flex gap-3',
  buttons,
});

export const SummonerNamePropsMapper = (name: string): TypographyProps => ({
  type: 'title',
  text: name,
});

export const ProfileBoxProps: BoxProps = {
  width: 'full',
};
