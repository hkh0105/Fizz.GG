import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { API } from 'api';
import { CustomError, MasteryInfo, Response } from 'types';

async function getMasteryById(id: string) {
  const response: AxiosResponse<MasteryInfo[]> = await API.getMasteryById(id);
  const masteryInfo: MasteryInfo[] = response.data;

  return masteryInfo;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response<MasteryInfo[]> | CustomError>
) {
  const { id } = req.query;
  try {
    const masteryInfo = await getMasteryById(String(id));
    res.status(200).json({ items: masteryInfo, message: 'MasteryInfo' });
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
