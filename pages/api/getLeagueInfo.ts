import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { API } from 'api';
import { CustomError, LeagueInfoArr, Response } from 'types';

async function getLeagueInfoById(id: string) {
  const response: AxiosResponse<LeagueInfoArr> = await API.getLeagueInfoById(
    id
  );

  const leagueInfo: LeagueInfoArr = response.data;

  return leagueInfo;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<LeagueInfoArr> | CustomError>
) {
  const { id } = req.query;

  try {
    const leagueInfo = await getLeagueInfoById(String(id));
    res.status(200).json({ items: leagueInfo, message: 'LeagueInfo' });
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
