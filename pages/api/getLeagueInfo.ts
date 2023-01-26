import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { API } from 'api';
import { Error, LeagueInfoArr, Response } from 'types';

async function getLeagueInfoById(id: string) {
  const response: AxiosResponse<any, any> = await API.getLeagueInfoById(id);
  const leagueInfo = response.data;

  return leagueInfo;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<LeagueInfoArr> | Error>
) {
  const { id } = req.query;

  try {
    const leagueInfo = await getLeagueInfoById(String(id));
    res.status(200).json({ items: leagueInfo, message: 'LeagueInfo' });
  } catch (error: any) {
    res.status(500).json({ message: error.message, status: error.status });
  }
}
