import axios from 'axios';
import { apiBaseUrl } from '@/constants/env';
import type { AxiosInstance } from 'axios';

export type ApiClient = AxiosInstance;

export const apiClient: ApiClient = axios.create({
  baseURL: apiBaseUrl,
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
