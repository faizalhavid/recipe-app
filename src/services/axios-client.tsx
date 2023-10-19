import axios from 'axios';
import { API_KEY, BASE_URL } from '@env';

export const AxiosClient = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosClient.interceptors.request.use(
  async (config) => {
    const apiKey = '89dfa750f9f04ca9943141fd1824438f';

    if (config.params) {
      config.params.apiKey = apiKey;
    } else {
      config.params = { apiKey };
    }

    return config;
  },
  (error) => {
    return console.log(error);
  }
);
