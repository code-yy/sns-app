'use client';

import { useRouter } from 'next/navigation';
import { SignUpContainer } from '@/app-pages/SingUp';
import { setItem } from '@/utils/local-storage';
import { config } from '@/utils/config/config';
import type { NextPage } from 'next';

const SignUp: NextPage = () => {
  const router = useRouter();

  const onCreateAccountCompleted = (token: string) => {
    router.push('/');
    setItem(config.get('SECRET_TOKEN'), token);
  };

  return <SignUpContainer onCreateAccountCompleted={onCreateAccountCompleted} />;
};

export default SignUp;
