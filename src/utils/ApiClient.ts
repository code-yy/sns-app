import axios from 'axios';
import { config } from './config/config';
import type { AxiosInstance } from 'axios';

export type ApiClient = AxiosInstance;

export const apiClient: ApiClient = axios.create({
  baseURL: config.get('NEXT_PUBLIC_API_BASE_URL'),
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  return config;
});

apiClient.interceptors.response.use((response) => {
  return response;
});
