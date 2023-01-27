import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { API } from 'api';
import { Error, Response } from 'types';

async function getMatchIdArr(puuid: string) {
  const response: AxiosResponse<any, any> = await API.getMatchArrByPUUID(puuid);
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
  } catch (error: any) {
    res.status(500).json({ message: error.message, status: error.status });
  }
}
