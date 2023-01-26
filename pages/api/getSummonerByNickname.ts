import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { API } from 'api';
import { Error, Response, TSummonerInfo } from 'types';

async function getSummonerInfo(nickname: string) {
  const response: AxiosResponse<TSummonerInfo, any> =
    await API.getSummonerByNickname(nickname);
  const summonerInfo: TSummonerInfo = response.data;

  return summonerInfo;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<TSummonerInfo> | Error>
) {
  const { nickname } = req.query;

  try {
    const summonerInfo = await getSummonerInfo(String(nickname));
    res.status(200).json({ items: summonerInfo, message: 'UserInfo' });
  } catch (error: any) {
    res.status(500).json({ message: error.message, status: error.status });
  }
}
