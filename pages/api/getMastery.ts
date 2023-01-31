import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { API } from 'api';
import { Error, LeagueInfoArr, MasteryInfo, Response } from 'types';

async function getMasteryById(id: string) {
  const response: AxiosResponse<MasteryInfo[]> = await API.getMasteryById(id);
  const masteryInfo: MasteryInfo[] = response.data;

  return masteryInfo;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<MasteryInfo[]> | Error>
) {
  const { id } = req.query;
  try {
    const masteryInfo = await getMasteryById(String(id));
    res.status(200).json({ items: masteryInfo, message: 'MasteryInfo' });
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
