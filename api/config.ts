import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { AuthError, ForbiddenError, NotFoundError } from 'error';

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
    return err;
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    // console.log(res);
    // console.log('RESPONSE:', res?.data);
    return res;
  },
  (err) => {
    // console.log('RESPONSE ERROR', err);
    const res = err.response;
    // console.log(res);
    if (!res?.data) throw new Error(err.message);

    const { status, statusText, data } = res;

    let message = '';

    if (data && data.status && data.status.message) {
      message = data.status.message;
    } else if (statusText) {
      message = statusText;
    }

    // if (status === 404) {
    //   throw new NotFoundError(message);
    // } else if (status === 403) {
    //   console.log(err.response);
    //   throw new ForbiddenError(message);
    // } else if (status === 401) {
    //   throw new AuthError(message);
    // }

    // throw new Error(err.message);

    // const exception = new ApiException(message, status);

    // throw new Error(exception.getMessage());
  }
);

regionInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config);
    return config;
  },
  (err: AxiosError) => {
    console.log('ERROR:', err);
    return err;
  }
);

regionInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log('RESPONSE:', res.data);
    return res;
  },
  (err) => {
    console.log('RESPONSE ERROR', err.response.data);
    // const res = err.response;
    // if (!res.data) throw new Error(err.message);

    // const { status, statusText, data } = res;

    // let message = '';

    // if (data && data.status && data.status.message) {
    //   message = data.status.message;
    // } else if (statusText) {
    //   message = statusText;
    // }

    // if (status === 404) {
    //   throw new NotFoundError(message);
    // } else if (status === 403) {
    //   throw new ForbiddenError(message);
    // } else if (status === 401) {
    //   throw new AuthError(message);
    // }

    throw new Error(err.message);
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
  (res: AxiosResponse) => {
    return res.data;
  },
  (err) => {
    // console.log(err);
    // const res = err.response;
    // const { status, message } = err;

    // if (status === 404) {
    //   throw new NotFoundError(message);
    // } else if (status === 403) {
    //   throw new ForbiddenError(message);
    // } else if (status === 401) {
    //   throw new AuthError(message);
    // }

    throw new Error(err.message);
  }
);
