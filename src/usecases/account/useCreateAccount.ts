import { useCallback, useState } from 'react';
import { accountRepository } from '@/repository/account';
import type { DefaultParams } from '../types';
import type { CreateParams, CreateResponse } from '@/repository/account/interface';

type Token = string;
type Params = CreateParams & DefaultParams<Token>;

export const useCreateAccount = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const createAccount = useCallback(async ({ onSuccess, ...params }: Params): Promise<CreateResponse> => {
    try {
      setIsSubmitting(true);
      const res = await accountRepository.create(params);
      onSuccess?.(res.token);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { createAccount, isSubmitting };
};
