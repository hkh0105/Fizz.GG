import { NextApiRequest, NextApiResponse } from 'next';

import { API } from 'api';
import { CustomError, Response } from 'types';

async function getMatchIdArr(puuid: string, count: string) {
  const response = await API.getMatchArrByPUUID(puuid, count);
  const matchIdArr: string[] = response.data;

  return matchIdArr;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<string[]> | CustomError>
) {
  const { puuid, count } = req.query;

  try {
    const matchIdArr = await getMatchIdArr(String(puuid), String(count));
    res.status(200).json({ items: matchIdArr, message: 'MatchArr' });
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
