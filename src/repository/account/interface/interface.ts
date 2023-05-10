import type { UserEntity } from '@/entities/user';

export const accountUrl = '/account';

// createAccount
export type CreateParams = { name: string; email: string; password: string };
export type CreateResponse = { user: UserEntity } & { token: string };

export type AccountInterface = {
  create: (params: CreateParams) => Promise<CreateResponse>;
};
