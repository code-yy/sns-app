// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Env = Partial<Readonly<typeof import('./env.local')>>;

declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly NEXT_PUBLIC_APP_ENV?: string;
  }
}
