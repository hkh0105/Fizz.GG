import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { API } from 'api';
import { Response, SummonerInfo, CustomError } from 'types';

async function getSummonerInfo(nickname: string) {
  const response: AxiosResponse<SummonerInfo> = await API.getSummonerByNickname(
    nickname
  );

  const summonerInfo: SummonerInfo = response.data;

  return summonerInfo;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<SummonerInfo> | CustomError>
) {
  const { nickname } = req.query;

  try {
    const summonerInfo = await getSummonerInfo(String(nickname));
    res.status(200).json({ items: summonerInfo, message: 'UserInfo' });
  } catch (error: any) {
    let { message, status }: CustomError = error;
    if (message && status) {
      return res
        .status(status)
        .json({ message: message, name: 'Handle Error', status: status });
    }

    message = 'Unhandled Error';
    status = 500;

    return res
      .status(status)
      .json({ message: message, name: 'Unhandled Error', status: 500 });
  }
}
