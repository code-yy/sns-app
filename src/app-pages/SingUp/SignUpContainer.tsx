import { useCreateAccount } from '@/usecases/account/useCreateAccount';
import { SignUpPresentational } from './SignUpPresentational';
import type { CreateParams } from '@/repository/account/interface';
import type { FC } from 'react';

type Props = {
  onCreateAccountCompleted: (token: string) => void;
};

export type Values = CreateParams;

export const SignUpContainer: FC<Props> = ({ onCreateAccountCompleted }) => {
  const { createAccount, isSubmitting } = useCreateAccount();

  const handleSubmit = async (params: Values) => {
    await createAccount({ ...params, onSuccess: onCreateAccountCompleted });
  };

  return <SignUpPresentational isSubmitting={isSubmitting} onSubmit={handleSubmit} />;
};
