import { instance } from './config';
import { PATH } from '../constant';

export const API = {
  example: () => instance.get(PATH.getTodo),
};
