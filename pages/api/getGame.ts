import { AxiosResponse } from 'axios';

import { API } from 'api';
import { CustomError, GameInfo, Response } from 'types';
import { NextApiRequest, NextApiResponse } from 'next';

async function getGameByMatchId(matchId: string) {
  const response: AxiosResponse<GameInfo> = await API.getGameByMatchId(matchId);
  const gameInfo: GameInfo = response.data;

  return gameInfo;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<GameInfo> | CustomError>
) {
  const { matchId } = req.query;

  try {
    const gameInfo = await getGameByMatchId(String(matchId));
    res.status(200).json({ items: gameInfo, message: 'GameInfo' });
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
