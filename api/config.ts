/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CustomError } from 'types';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RIOT_URL_PLATFORM,
  headers: {
    'X-Riot-Token': process.env.NEXT_PUBLIC_RIOT_API_KEY,
    'Content-Type': 'application/json',
  },
});

export const regionInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RIOT_URL_REGION,
  headers: {
    'X-Riot-Token': process.env.NEXT_PUBLIC_RIOT_API_KEY,
    'Content-Type': 'application/json',
  },
});

export const browser = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    if (err.response) {
      return err.response;
    }

    return err;
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err) => {
    if (err.response.data.status.status_code === 404) {
      const message = '찾을 수 있는 데이터가 없습니다';

      throw { status: 404, message: message, name: '404Error' };
    } else if (
      err.response.data.status.status_code === 403 ||
      err.response.data.status.status_code === 401
    ) {
      const message = '서버 접근 권한 확인이 필요합니다';
      throw { status: 403, message: message, name: '403Error' };
    } else if (err.response.data.status.status_code === 429) {
      const message = '허용 검색량을 초과하였습니다. 3분 후 다시 시도해 주세요';
      throw { status: 404, message: message, name: 'LimitError' };
    }

    throw {
      status: 500,
      message: '서버에 장애가 있어 잠시 후 시도해주세요',
      name: 'UnhandledError',
    };
  }
);

regionInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    console.log('ERROR:', err);
    if (err.response) {
      return err.response;
    }

    return err;
  }
);

regionInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err) => {
    if (err.response.data.status.status_code === 404) {
      const message = '찾을 수 있는 데이터가 없습니다';

      throw { status: 404, message: message, name: '404Error' };
    } else if (
      err.response.data.status.status_code === 403 ||
      err.response.data.status.status_code === 401
    ) {
      const message = '서버 접근 권한 확인이 필요합니다';
      throw { status: 403, message: message, name: '403Error' };
    } else if (err.response.data.status.status_code === 429) {
      const message = '허용 검색량을 초과하였습니다. 3분 후 다시 시도해 주세요';
      throw { status: 404, message: message, name: 'LimitError' };
    }

    throw {
      status: 500,
      message: '서버에 장애가 있어 잠시 후 시도해주세요',
      name: 'UnhandledError',
    };
  }
);

browser.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    return err;
  }
);

browser.interceptors.response.use(
  (res) => {
    if (res.data) {
      return res.data;
    }

    return res;
  },
  (err) => {
    const { message, name, status }: CustomError = err.response.data;

    if (status === 404) {
      throw { status: 404, message: message, name: name };
    } else if (status === 403 || status === 401) {
      throw { status: 403, message: message, name: name };
    } else if (status === 429) {
      throw { status: 404, message: message, name: name };
    }

    throw {
      status: 500,
      message: '서버에 장애가 있어 잠시 후 시도해주세요',
      name: 'UnhandledError',
    };
  }
);
