import { act, renderHook } from '@testing-library/react';
import { accountRepository } from '@/repository/account';
import { useCreateAccount } from '../useCreateAccount';
import type { CreateParams, CreateResponse } from '@/repository/account/interface';

jest.mock('@/repository/account', () => ({
  accountRepository: {
    create: jest.fn(),
  },
}));

describe('useCreateAccount', () => {
  const mockAccountCreate = accountRepository.create as jest.Mock;

  test('createAccountは、正しいパラメータで呼び出す必要がある', async () => {
    const onSuccess = jest.fn();
    const params: CreateParams = {
      name: 'name',
      email: 'test@example.com',
      password: 'password',
    };
    const response: CreateResponse = {
      user: {
        id: 1,
        name: 'name',
        email: 'test@example.com',
        iconImageUrl: undefined,
      },
      token: 'created-token',
    };

    mockAccountCreate.mockResolvedValue(response);

    const { result } = renderHook(() => useCreateAccount());

    await act(async () => {
      result.current.createAccount({ ...params, onSuccess });
    });

    expect(mockAccountCreate).toHaveBeenCalledWith(params);
  });

  test('onSuccess callback should be called with the token', async () => {
    const onSuccess = jest.fn();
    const params: CreateParams = {
      name: 'name',
      email: 'test@example.com',
      password: 'password',
    };
    const response: CreateResponse = {
      user: {
        id: 1,
        name: 'name',
        email: 'test@example.com',
        iconImageUrl: undefined,
      },
      token: 'created-token',
    };

    mockAccountCreate.mockResolvedValue(response);

    const { result } = renderHook(() => useCreateAccount());

    await act(async () => {
      result.current.createAccount({ onSuccess, ...params });
    });

    expect(onSuccess).toHaveBeenCalledWith(response.token);
  });

  test('isSubmitting should be updated correctly', async () => {
    const params: CreateParams = {
      name: 'name',
      email: 'test@example.com',
      password: 'password',
    };
    const response: CreateResponse = {
      user: {
        id: 1,
        name: 'name',
        email: 'test@example.com',
        iconImageUrl: undefined,
      },
      token: 'created-token',
    };

    mockAccountCreate.mockResolvedValue(response);

    const { result } = renderHook(() => useCreateAccount());
    expect(result.current.isSubmitting).toBe(false);

    await act(async () => {
      result.current.createAccount(params);
      expect(result.current.isSubmitting).toBe(false);
    });

    expect(result.current.isSubmitting).toBe(false);
  });
});
