import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { API } from 'api';
import { Error, LeagueInfoArr, Response } from 'types';

async function getLeagueInfoById(id: string) {
  const response: AxiosResponse<LeagueInfoArr> = await API.getLeagueInfoById(
    id
  );

  const leagueInfo: LeagueInfoArr = response.data;

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
