export type DefaultParams<T = string> = {
  onSuccess?: (res?: T) => void;
  onError?: (error?: Error) => void;
};
