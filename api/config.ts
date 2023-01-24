import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const instance = axios.create({
  headers: {
    'X-Riot-Token': process.env.NEXT_PUBLIC_RIOT_API_KEY,
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config);
    return config;
  },
  (err: AxiosError) => {
    console.log('ERROR:', err);
    return err;
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log('RESPONSE:', res);
    return res;
  },
  (err: AxiosError) => {
    console.log('RESPONSE ERROR', err);

    throw new Error(err.message);
  }
);
