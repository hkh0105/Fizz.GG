import axios from 'axios';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export const instance = axios.create({
  baseURL: serverUrl ?? 'https://localhost:3000/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer test',
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log('ERROR:', err);
    return err;
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return err;
  }
);
