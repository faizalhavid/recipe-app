import axios from 'axios';
import { API_KEY, BASE_URL } from '@env';

export const AxiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosClient.interceptors.request.use(
  async (config) => {
    const apiKey = API_KEY;
    config.url = `${config.url}&apiKey=${apiKey}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
