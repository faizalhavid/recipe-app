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
    const apiKey = 'e0f02fbf157b47f3a5f9239c43016d48';

    if (config.params) {
      config.params.apiKey = apiKey;
    } else {
      config.params = { apiKey };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
