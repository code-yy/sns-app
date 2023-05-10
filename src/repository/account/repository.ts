import { apiClient } from '@/utils/ApiClient';
import { accountUrl, type AccountInterface, type CreateResponse } from './interface';

export const accountRepository: AccountInterface = {
  create: async (params) => {
    const { data } = await apiClient.post<CreateResponse>(accountUrl, params);
    return data;
  },
};
