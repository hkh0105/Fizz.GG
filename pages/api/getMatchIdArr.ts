import { NextApiRequest, NextApiResponse } from 'next';

import { API } from 'api';
import { Error, Response } from 'types';

async function getMatchIdArr(puuid: string) {
  const response = await API.getMatchArrByPUUID(puuid);
  const matchIdArr: string[] = response.data;

  return matchIdArr;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<string[]> | Error>
) {
  const { puuid } = req.query;

  try {
    const matchIdArr = await getMatchIdArr(String(puuid));
    res.status(200).json({ items: matchIdArr, message: 'MatchArr' });
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
