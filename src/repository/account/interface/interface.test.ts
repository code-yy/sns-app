import type { AccountInterface, CreateParams, CreateResponse } from './interface';

describe('AccountRepositoryInterface', () => {
  test('createAccount', async () => {
    const response: CreateResponse = {
      user: {
        id: 1,
        name: 'test',
        email: 'example@gmail.com',
      },
      token: 'token',
    };
    const createAccountMock = jest.fn<Promise<CreateResponse>, [CreateParams]>();
    createAccountMock.mockResolvedValue(response);
    const AccountInterfaceMock: AccountInterface = {
      create: createAccountMock,
    };

    const params: CreateParams = {
      name: 'test',
      email: 'example@gmail.com',
      password: 'password',
    };
    const res = await AccountInterfaceMock.create(params);

    expect(createAccountMock).toHaveBeenCalledWith(params);
    expect(res).toEqual(response);
  });
});
