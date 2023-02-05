import { NextApiRequest, NextApiResponse } from 'next';

import { API } from 'api';
import { CustomError, Response } from 'types';

async function getMatchIds(puuid: string, count: string) {
  const response = await API.getMatchesByPUUID(puuid, count);
  const matchIds: string[] = response.data;

  return matchIds;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<string[]> | CustomError>
) {
  const { puuid, count } = req.query;

  try {
    const matchIds = await getMatchIds(String(puuid), String(count));
    res.status(200).json({ items: matchIds, message: 'Matches' });
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
