import { instance } from './config';
import { PATH } from '../constant';

export const API = {
  getSummonerByNickname: (nickname: string) =>
    instance.get(PATH.getSummonerByNickname.replace('{nickname}', nickname)),
};
