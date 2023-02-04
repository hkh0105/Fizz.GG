import { AxiosResponse } from 'axios';

import { API } from 'api';
import { CustomError, InGameInfo, Response } from 'types';
import { NextApiRequest, NextApiResponse } from 'next';

async function getInGameByPuuid(puuid: string) {
  const response: AxiosResponse<InGameInfo> = await API.getInGameByPuuid(puuid);
  const gameInfo = response.data;

  if (response.status === 404) {
    return { status: 404, message: '404 NOT FOUND', data: gameInfo };
  }

  return response;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<InGameInfo | { status: 404 }> | CustomError>
) {
  const { puuid } = req.query;
  try {
    const response = await getInGameByPuuid(String(puuid));

    if (response.status === 404) {
      return res.status(200).json({ items: { status: 404 }, message: '404' });
    }

    const gameInfo = response.data;

    res.status(200).json({ items: gameInfo, message: 'InGameInfo' });
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
