import { AxiosResponse } from 'axios';

import { API } from 'api';
import { Error, GameInfo, Response } from 'types';
import { NextApiRequest, NextApiResponse } from 'next';

async function getGameByMatchId(matchId: string) {
  const response: AxiosResponse<GameInfo> = await API.getGameByMatchId(matchId);
  const gameInfo: GameInfo = response.data;

  return gameInfo;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<GameInfo> | Error>
) {
  const { matchId } = req.query;

  try {
    const gameInfo = await getGameByMatchId(String(matchId));
    res.status(200).json({ items: gameInfo, message: 'GameInfo' });
  } catch (error) {
    const message = 'Unknown Error';
    const status = 500;

    // if (error instanceof Error) {
    //   message = error.message;
    //   status = 500;
    // }
    res.status(500).json({ message: message, status: status });
  }
}
