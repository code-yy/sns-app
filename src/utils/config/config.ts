import { Configure } from './Configure';

export type Config = {
  NEXT_PUBLIC_API_BASE_URL: string;
  SECRET_TOKEN: string;
};

const env: Config = {
  ...require(`./env.${process.env.NEXT_PUBLIC_APP_ENV}.ts`),
  NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
};

export const config = new Configure(env);
